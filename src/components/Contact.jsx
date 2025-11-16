import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    await new Promise(r => setTimeout(r, 400))
    setStatus('Thanks! Your message has been saved locally for now.')
    form.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-700">Your Name</label>
          <input name="name" required className="px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-700">Email</label>
          <input type="email" name="email" required className="px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm text-slate-700">Message</label>
          <textarea name="message" rows="6" required className="px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700">Send</button>
          {status && <p className="mt-3 text-sm text-slate-700">{status}</p>}
        </div>
      </form>
    </section>
  )
}
