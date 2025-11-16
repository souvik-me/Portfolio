import React from 'react'
import { profile } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-sm text-slate-600">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  )
}
