import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (<ProjectCard key={i} p={p} />))}
      </div>
    </section>
  )
}
