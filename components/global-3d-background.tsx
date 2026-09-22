"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"

/* ============================================================
   WAVE MATHEMATICS HELPER
   Tighter, faster waves for a realistic flowing river effect.
============================================================ */

function getWaveHeight(x: number, y: number, time: number): number {
  let z = 0
  // Tighter, faster diagonal swells
  z += Math.sin((x * 0.08) + (y * 0.08) - time * 0.8) * 2.2
  // Sweeping, faster cross current
  z += Math.cos((x * 0.12) - (y * 0.08) + time * 1.0) * 1.6
  // Wavy horizontal roll
  z += Math.sin(x * 0.06 + time * 0.6) * 1.8
  // High-frequency surface ripples for a realistic liquid look
  z += Math.cos(y * 0.18 - time * 1.2) * 0.7
  return z
}

/* 
  Upgraded Stream Wobble:
  Snakes weave organically and faster.
*/
function getStreamWobble(x: number, yBase: number, time: number): number {
  return (
    Math.sin(x * 0.06 + yBase * 0.1 + time * 0.8) * 6.0 +
    Math.cos(x * 0.09 - time * 0.5) * 3.0
  )
}

/* ============================================================
   1. LIQUID CONTINUOUS GRID
============================================================ */

function LiquidGrid() {
  const geomRef = useRef<THREE.PlaneGeometry>(null)

  useFrame(({ clock }) => {
    if (!geomRef.current) return

    const positions = geomRef.current.attributes.position
    const time = clock.elapsedTime * 0.55 // Increased global speed

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i)
      const y = positions.getY(i)
      positions.setZ(i, getWaveHeight(x, y, time))
    }

    positions.needsUpdate = true
  })

  return (
    <mesh
      rotation={[-Math.PI * 0.44, 0, 0]}
      position={[0, -5.5, -12]}
    >
      <planeGeometry ref={geomRef} args={[180, 110, 130, 90]} />
      <meshBasicMaterial
        color="#6282A2"
        wireframe
        transparent
        opacity={0.25}
        depthWrite={false}
      />
    </mesh>
  )
}

/* ============================================================
   2. FLOW-RIDING PARTICLES
============================================================ */

function FlowParticles({ sharedState }: { sharedState: any }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useEffect(() => {
    if (!meshRef.current) return
    const crimson = new THREE.Color("#B5122B")
    const slate = new THREE.Color("#8FA5B9")

    sharedState.particles.forEach((p: any, i: number) => {
      meshRef.current?.setColorAt(i, p.isCrimson ? crimson : slate)
    })
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
  }, [sharedState.particles])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const time = clock.elapsedTime * 0.55 // Increased global speed
    const realTime = clock.elapsedTime

    sharedState.particles.forEach((p: any, i: number) => {
      p.x += p.vx
      p.yDepth += p.vyDepth

      if (p.x > 85) p.x = -85
      if (p.x < -85) p.x = 85
      if (p.yDepth > 55) p.yDepth = -55
      if (p.yDepth < -55) p.yDepth = 55

      const waveZ = getWaveHeight(p.x, p.yDepth, time)

      const rad = -Math.PI * 0.44
      const localY = p.yDepth
      const localZ = waveZ + p.altitudeOffset

      const worldX = p.x
      const worldY = -5.5 + (localY * Math.cos(rad) - localZ * Math.sin(rad))
      const worldZ = -12 + (localY * Math.sin(rad) + localZ * Math.cos(rad))

      dummy.position.set(worldX, worldY, worldZ)

      const timeSinceHit = realTime - (p.lastHitTime || -999)
      const hitPop = Math.max(0, 1 - timeSinceHit * 1.2) * 4.0 // Supernova swell

      const pulseScale = (p.scale * (1 + Math.sin(realTime * 1.5 + p.phase) * 0.2)) + (hitPop * p.scale)

      dummy.scale.set(pulseScale, pulseScale, pulseScale)
      dummy.updateMatrix()

      meshRef.current?.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, sharedState.particles.length]}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        transparent
        opacity={0.95}
        depthWrite={false}
      />
    </instancedMesh>
  )
}

/* ============================================================
   3. DATA STREAM PACKETS
============================================================ */

function DataStreamBeams({ sharedState }: { sharedState: any }) {
  const linesRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!linesRef.current) return
    const time = clock.elapsedTime * 0.55 // Increased global speed

    linesRef.current.children.forEach((lineMesh, i) => {
      const s = sharedState.streams[i]
      const line = lineMesh as THREE.Line
      const positions = line.geometry.attributes.position as THREE.BufferAttribute

      const headX = (((clock.elapsedTime * s.speed * 25) + s.offset) % 200) - 100

      for (let j = 0; j < 25; j++) {
        const segX = headX - (j / 24) * s.length
        const actualY = s.yRow + getStreamWobble(segX, s.yRow, time)
        const waveZ = getWaveHeight(segX, actualY, time)

        const rad = -Math.PI * 0.44
        const worldX = segX
        const worldY = -5.5 + (actualY * Math.cos(rad) - (waveZ + 0.1) * Math.sin(rad))
        const worldZ = -12 + (actualY * Math.sin(rad) + (waveZ + 0.1) * Math.cos(rad))

        positions.setXYZ(j, worldX, worldY, worldZ)
      }
      positions.needsUpdate = true
    })
  })

  return (
    <group ref={linesRef}>
      {sharedState.streams.map((s: any, i: number) => {
        const geom = new THREE.BufferGeometry()
        const initPos = new Float32Array(25 * 3)
        geom.setAttribute("position", new THREE.BufferAttribute(initPos, 3))
        return (
          <line key={i} geometry={geom}>
            <lineBasicMaterial
              color={s.isCrimson ? "#B5122B" : "#8AA7C6"}
              transparent
              opacity={s.isCrimson ? 0.9 : 0.6}
              depthWrite={false}
              linewidth={3.0}
            />
          </line>
        )
      })}
    </group>
  )
}

/* ============================================================
   4. STRICT TRUE-3D COLLISION RIPPLES 
============================================================ */

function EcosystemRings({ sharedState }: { sharedState: any }) {
  const ringMeshesRef = useRef<THREE.Mesh[]>([])

  const rings = useRef(Array.from({ length: 60 }, () => ({
    active: false,
    particleIndex: -1,
    progress: 0,
    maxRadius: 0,
    speed: 0,
    isCrimson: false,
  })))

  useFrame(({ clock }) => {
    const globalTime = clock.elapsedTime
    const waveTime = globalTime * 0.55 // Increased global speed
    const { particles, streams } = sharedState

    const streamHeads = streams.map((s: any) => {
      const hX = (((globalTime * s.speed * 25) + s.offset) % 200) - 100
      const hY = s.yRow + getStreamWobble(hX, s.yRow, waveTime)
      const hZ = getWaveHeight(hX, hY, waveTime) + 0.1
      return { hX, hY, hZ, isCrimson: s.isCrimson }
    })

    rings.current.forEach((r, i) => {
      if (!r.active) {
        const startIdx = Math.floor(Math.random() * particles.length)

        for (let j = 0; j < particles.length; j++) {
          const pIdx = (startIdx + j) % particles.length
          const p = particles[pIdx]

          if (globalTime - (p.lastHitTime || 0) < 2.5) continue;

          const pZ = getWaveHeight(p.x, p.yDepth, waveTime) + p.altitudeOffset

          for (let k = 0; k < streamHeads.length; k++) {
            const head = streamHeads[k]

            const dx = p.x - head.hX
            const dy = p.yDepth - head.hY
            const dz = pZ - head.hZ

            if (dx * dx + dy * dy + dz * dz < 1.2) {
              p.lastHitTime = globalTime

              r.active = true
              r.particleIndex = pIdx
              r.progress = 0
              r.speed = 0.015 + Math.random() * 0.012
              r.maxRadius = 3.5 + Math.random() * 2.5
              r.isCrimson = head.isCrimson || p.isCrimson
              break
            }
          }
          if (r.active) break
        }
      }

      const mesh = ringMeshesRef.current[i]
      if (!mesh) return

      if (r.active) {
        r.progress += r.speed

        if (r.progress > 1) {
          r.active = false
          mesh.position.set(999, 999, 999)
        } else {
          const p = particles[r.particleIndex]
          const waveZ = getWaveHeight(p.x, p.yDepth, waveTime)
          const rad = -Math.PI * 0.44

          const localY = p.yDepth
          const localZ = waveZ + p.altitudeOffset

          const worldX = p.x
          const worldY = -5.5 + (localY * Math.cos(rad) - localZ * Math.sin(rad))
          const worldZ = -12 + (localY * Math.sin(rad) + localZ * Math.cos(rad))

          mesh.position.set(worldX, worldY, worldZ)
          mesh.rotation.x = rad

          const currentRadius = r.progress * r.maxRadius
          mesh.scale.set(currentRadius || 0.01, currentRadius || 0.01, currentRadius || 0.01)

          const mat = mesh.material as THREE.MeshBasicMaterial
          mat.opacity = Math.max(0, (1 - r.progress) * (r.isCrimson ? 0.9 : 0.6))
          mat.color.set(r.isCrimson ? "#B5122B" : "#7A98B6")
        }
      } else {
        mesh.position.set(999, 999, 999)
      }
    })
  })

  return (
    <group>
      {rings.current.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) ringMeshesRef.current[i] = el }}
          position={[999, 999, 999]}
        >
          <torusGeometry args={[1, 0.04, 8, 64]} />
          <meshBasicMaterial transparent depthWrite={false} opacity={0} />
        </mesh>
      ))}
    </group>
  )
}

/* ============================================================
   5. SCENE CONTROLLER (Shared Physics State)
============================================================ */

function SceneController() {
  const groupRef = useRef<THREE.Group>(null)

  const sharedState = useMemo(() => ({
    particles: Array.from({ length: 1500 }, (_, i) => ({
      x: (Math.random() - 0.5) * 160,
      yDepth: (Math.random() - 0.5) * 110,
      altitudeOffset: Math.random() * 2.0 - 0.5,
      vx: (Math.random() - 0.5) * 0.015,
      vyDepth: (Math.random() - 0.5) * 0.015,
      scale: i % 40 === 0 ? 0.22 : i % 8 === 0 ? 0.12 : 0.06,
      phase: Math.random() * Math.PI * 2,
      isCrimson: i % 15 === 0,
      lastHitTime: -999,
    })),
    streams: Array.from({ length: 90 }, (_, i) => ({
      yRow: ((i / 90) - 0.5) * 100,
      speed: 0.22 + Math.random() * 0.35, // Faster streams
      offset: Math.random() * 200,
      length: 6 + Math.random() * 10,
      isCrimson: i % 6 === 0,
    }))
  }), [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.02) * 0.02
    groupRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.015) * 0.015
  })

  return (
    <group ref={groupRef}>
      <LiquidGrid />
      <FlowParticles sharedState={sharedState} />
      <DataStreamBeams sharedState={sharedState} />
      <EcosystemRings sharedState={sharedState} />
    </group>
  )
}

/* ============================================================
   6. MAIN EXPORT COMPONENT
============================================================ */

export function Global3DBackground() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(media.matches)

    const listener = () => setReducedMotion(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden bg-transparent"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 2.5, 12], fov: 60 }}
        dpr={reducedMotion ? 1 : [1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <SceneController />
      </Canvas>

      {/* Atmospheric Soft Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(23,32,51,0.06)_100%)]" />

      {/* Soft Ambient Crimson Hue */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B5122B]/[0.03] blur-[120px]" />

      {/* Top & Bottom Content Fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--background)]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--background)]/40 to-transparent" />
    </div>
  )
}