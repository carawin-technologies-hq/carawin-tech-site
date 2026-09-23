"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Search, MapPin, Briefcase, GraduationCap, ArrowRight, Filter, X, ChevronRight, Building2, Sparkles } from "lucide-react"
import type { Job } from "@/lib/jobs-data"

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDept, setSelectedDept] = useState("All")
  const [selectedExp, setSelectedExp] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedType, setSelectedType] = useState("All")

  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetch("/api/jobs")
        const data = await res.json()
        if (data.jobs) {
          setJobs(data.jobs)
        }
      } catch (err) {
        console.error("Failed to load jobs:", err)
      } finally {
        setLoading(false)
      }
    }
    loadJobs()
  }, [])

  // Extract unique departments, locations, etc.
  const departments = useMemo(() => {
    const set = new Set(jobs.map((j) => j.department))
    return ["All", ...Array.from(set)]
  }, [jobs])

  const experienceLevels = useMemo(() => {
    const set = new Set(jobs.map((j) => j.experience_level))
    return ["All", ...Array.from(set)]
  }, [jobs])

  const locations = useMemo(() => {
    const set = new Set(jobs.map((j) => j.location))
    return ["All", ...Array.from(set)]
  }, [jobs])

  const jobTypes = useMemo(() => {
    const set = new Set(jobs.map((j) => j.job_type))
    return ["All", ...Array.from(set)]
  }, [jobs])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesDept = selectedDept === "All" || job.department === selectedDept
      const matchesExp = selectedExp === "All" || job.experience_level === selectedExp
      const matchesLoc = selectedLocation === "All" || job.location === selectedLocation
      const matchesType = selectedType === "All" || job.job_type === selectedType

      return matchesSearch && matchesDept && matchesExp && matchesLoc && matchesType
    })
  }, [jobs, searchQuery, selectedDept, selectedExp, selectedLocation, selectedType])

  const resetFilters = () => {
    setSearchQuery("")
    setSelectedDept("All")
    setSelectedExp("All")
    setSelectedLocation("All")
    setSelectedType("All")
  }

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedDept !== "All" ||
    selectedExp !== "All" ||
    selectedLocation !== "All" ||
    selectedType !== "All"

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#172033]">
      {/* Top Banner / Corporate Hero */}
      <section className="border-b border-[#e2e8f0] bg-[#002147] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#ff4d6d]" />
              Careers at Carawin Technologies
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Build the intelligence powering the future of education.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We engineer adaptive learning AI, institutional operating systems, and scalable digital infrastructure. Explore opportunities to solve meaningful challenges with extraordinary peers.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="mt-8 max-w-4xl bg-white rounded-xl shadow-lg p-2.5 sm:p-3 flex flex-col sm:flex-row gap-2 border border-slate-200">
            <div className="flex-1 flex items-center px-3 gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search job title, skills, or keywords (e.g. Full-Stack, AI, DevOps)..."
                className="w-full text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => {}}
              className="bg-[#b5122b] hover:bg-[#920e22] text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
            >
              Search Openings
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm uppercase tracking-wide">
                  <Filter className="w-4 h-4 text-[#b5122b]" />
                  Filters
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#b5122b] hover:underline font-medium"
                  >
                    Reset all
                  </button>
                )}
              </div>

              {/* Department */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Department / Area
                </label>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                >
                  {departments.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Level */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Experience Level
                </label>
                <div className="space-y-1.5">
                  {experienceLevels.map((lvl) => (
                    <label
                      key={lvl}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs cursor-pointer transition ${
                        selectedExp === lvl
                          ? "bg-[#002147] text-white font-semibold"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="exp"
                        checked={selectedExp === lvl}
                        onChange={() => setSelectedExp(lvl)}
                        className="sr-only"
                      />
                      <span>{lvl}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#002147]"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Job Type
                </label>
                <div className="space-y-1.5">
                  {jobTypes.map((type) => (
                    <label
                      key={type}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs cursor-pointer transition ${
                        selectedType === type
                          ? "bg-[#002147] text-white font-semibold"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="jobtype"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="sr-only"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Job Listings Column */}
          <main className="lg:col-span-3">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 mb-6 gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Job Opportunities</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Showing 1 – {filteredJobs.length} of {jobs.length} total active openings
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Sorted by:</span>
                <span className="font-semibold text-slate-700">Most Recent</span>
              </div>
            </div>

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-slate-400">Active filters:</span>
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                    Keyword: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")}>
                      <X className="w-3 h-3 text-slate-500 hover:text-slate-800" />
                    </button>
                  </span>
                )}
                {selectedDept !== "All" && (
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                    Dept: {selectedDept}
                    <button onClick={() => setSelectedDept("All")}>
                      <X className="w-3 h-3 text-slate-500 hover:text-slate-800" />
                    </button>
                  </span>
                )}
                {selectedExp !== "All" && (
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                    Level: {selectedExp}
                    <button onClick={() => setSelectedExp("All")}>
                      <X className="w-3 h-3 text-slate-500 hover:text-slate-800" />
                    </button>
                  </span>
                )}
                {selectedLocation !== "All" && (
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                    Location: {selectedLocation}
                    <button onClick={() => setSelectedLocation("All")}>
                      <X className="w-3 h-3 text-slate-500 hover:text-slate-800" />
                    </button>
                  </span>
                )}
                {selectedType !== "All" && (
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                    Type: {selectedType}
                    <button onClick={() => setSelectedType("All")}>
                      <X className="w-3 h-3 text-slate-500 hover:text-slate-800" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Loading State */}
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="bg-white border border-slate-200 rounded-xl p-6 animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-1/4 mb-3"></div>
                    <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredJobs.length === 0 ? (
              /* Empty State */
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">No matching positions found</h3>
                <p className="text-sm text-slate-500 mb-4 max-w-sm mx-auto">
                  Try adjusting your search criteria or resetting filters to view all openings.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#002147] hover:bg-[#071a33] text-white px-4 py-2 rounded-lg text-xs font-semibold transition"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              /* Job Listings Grid */
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Link
                    key={job.id}
                    href={`/careers/${job.id}`}
                    className="group block bg-white border border-[#e2e8f0] hover:border-[#002147] rounded-xl p-6 transition shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Department kicker */}
                        <div className="inline-block text-xs font-bold text-[#b5122b] uppercase tracking-wider mb-1.5">
                          {job.department}
                        </div>
                        {/* Job title */}
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#002147] transition flex items-center gap-2">
                          {job.title}
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#002147] group-hover:translate-x-1 transition" />
                        </h3>
                        {/* Short description */}
                        <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                          {job.description}
                        </p>

                        {/* Metadata badges */}
                        <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                            <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                            {job.experience_level}
                          </span>
                          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                            {job.job_type}
                          </span>
                        </div>
                      </div>

                      {/* View details button */}
                      <div className="sm:self-center shrink-0">
                        <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 group-hover:bg-[#002147] group-hover:text-white transition">
                          View & Apply
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Corporate Culture / Value Pillars */}
      <section className="border-t border-[#e2e8f0] bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Why Work at Carawin?</h2>
            <p className="text-sm text-slate-500 mt-2">
              We operate with high agency, deep pedagogical conviction, and engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 bg-[#f8fafc]">
              <div className="w-10 h-10 rounded-lg bg-[#002147] text-white flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Classroom-Grounded Technology</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We work directly with educators, administrators, and students. Our AI solutions solve real structural bottlenecks in actual learning environments.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-[#f8fafc]">
              <div className="w-10 h-10 rounded-lg bg-[#b5122b] text-white flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">High Agency & Scale</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Small, focused cross-functional teams that own features from concept through deployment to millions of students and thousands of classrooms.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-[#f8fafc]">
              <div className="w-10 h-10 rounded-lg bg-[#002147] text-white flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Generous Growth & Well-being</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Competitive compensation, comprehensive health benefits, flexible remote-friendly work culture, and personal learning stipends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}