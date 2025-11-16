import React from 'react'

export default function Navbar() {
  const items = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">Souvik</a>
        <ul className="flex gap-6 text-sm">
          {items.map(i => (
            <li key={i.href}>
              <a className="hover:text-sky-600 transition-colors" href={i.href}>{i.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
