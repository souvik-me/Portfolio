import React from 'react'
import { profile } from '../config'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-medium text-slate-900">Qualifications</h3>
          <ul className="mt-3 list-disc list-inside space-y-2 text-slate-700">
            {profile.qualifications.map((q, i) => (<li key={i}>{q}</li>))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.skills.map((s, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
