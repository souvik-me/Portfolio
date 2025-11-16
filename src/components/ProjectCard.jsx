import React from 'react'

export default function ProjectCard({ p }) {
  return (
    <article className="rounded-lg border border-slate-200 p-5 hover:shadow-sm transition">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <span className="text-xs text-slate-500">{p.period}</span>
      </div>
      <p className="mt-2 text-slate-700">{p.tagline}</p>
      <ul className="mt-3 list-disc list-inside space-y-1 text-slate-700">
        {p.details.map((d, i) => (<li key={i}>{d}</li>))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t, i) => (
          <span key={i} className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 text-xs">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {p.links.map((l, i) => (
          <a key={i} href={l.href} className="text-sky-700 text-sm hover:underline">{l.label}</a>
        ))}
      </div>
    </article>
  )
}
