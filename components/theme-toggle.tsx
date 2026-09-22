
"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
export function ThemeToggle(){
 const {resolvedTheme,setTheme}=useTheme(); const [mounted,setMounted]=useState(false); useEffect(()=>setMounted(true),[])
 if(!mounted) return <span className="h-10 w-10 rounded-full border border-[var(--border)]" />
 const dark=resolvedTheme==='dark'
 return <button aria-label="Toggle theme" onClick={()=>setTheme(dark?'light':'dark')} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--background)]/70 transition hover:-translate-y-0.5">{dark?<Sun size={17}/>:<Moon size={17}/>}</button>
}

