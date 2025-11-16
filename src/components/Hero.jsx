import React from 'react'
import { profile } from '../config'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {profile.name} — {profile.role}
        </h1>
        <p className="mt-4 text-slate-700">{profile.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.socials.map(s => (
            <a key={s.label} href={s.href} className="px-3 py-2 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-700">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto ring-4 ring-sky-100">
          <img src="/souvik.jpg" alt="Souvik portrait" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
