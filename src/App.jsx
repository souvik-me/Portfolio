import React, { useState, useEffect } from 'react'
import profileImg from './assets/profile.svg'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [imgSrc, setImgSrc] = useState('/profile.png')
  const isFallback = imgSrc === profileImg

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + offsetHeight - 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus first mobile menu link when menu opens (accessibility)
  useEffect(() => {
    if (!menuOpen) return
    const firstLink = document.querySelector('#mobile-menu a')
    if (firstLink) {
      // small timeout to wait for DOM insertion
      setTimeout(() => firstLink.focus(), 50)
    }
  }, [menuOpen])

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/40 border-b border-white/40 shadow-sm">
  <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#home" className="capsule capsule--brand" aria-label="Home - I'm Souvik">
              <div className="brand-main">I'm Souvik</div>
            </a>

            {/* Center navigation (desktop) */}
            <ul className="hidden sm:flex gap-3 items-center">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'blog', label: 'Blog' }
              ].map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-pill ${activeSection === item.id ? 'nav-pill--active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contact" className="capsule capsule--cta hidden sm:inline-flex">Let's Talk</a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-slate-700 hover:text-slate-900"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div id="mobile-menu" role="menu" className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/40 sm:hidden">
              <ul className="flex flex-col gap-2 p-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'blog', label: 'Blog' },
                  { id: 'contact', label: "Let's Talk", isCTA: true }
                ].map(item => (
                  <li key={item.id}>
                    <a
                      className={`text-slate-700 hover:text-slate-900 font-medium block py-2 px-4 rounded-lg transition-all ${item.isCTA ? 'bg-blue-600 text-white' : 'hover:bg-slate-100'}`}
                      href={`#${item.id === 'contact' ? 'contact' : item.id}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

    <main className="relative z-10">
        {/* Removed older centered hero — keeping the two-column hero below */}
          {/* HERO SECTION (two-column: left content, right portrait) */}
          <section id="home" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center two-col-hero">
              {/* LEFT: content */}

                <div className="hero-left">
                <p className="capsule capsule--status inline-flex items-center gap-2 mb-6" aria-label="Available for new projects">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2l1.9 4.3L18 8l-4 2.1L13.8 16 12 13l-1.8 3-0.2-6.1L6 8l4.1-1.7L12 2z" fill="currentColor" opacity="0.95"/>
                  </svg>
                  <span className="text-sm font-medium">Available for new projects</span>
                </p>

                <h1 className="hero-big-title text-left">Transforming<br/> <span className="text-blue-600">Strategy</span> <br/>into Action</h1>

                <p className="mt-6 text-lg text-slate-600 max-w-xl">Making business logic simple, powerful, and user-first</p>

                <div className="stats-row mt-10 flex gap-8">
                  <div className="stat text-left">
                    <div className="text-3xl font-extrabold">5+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="stat text-left">
                    <div className="text-3xl font-extrabold">50+</div>
                    <div className="text-sm text-slate-600">Projects Delivered</div>
                  </div>
                  <div className="stat text-left">
                    <div className="text-3xl font-extrabold">30+</div>
                    <div className="text-sm text-slate-600">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* RIGHT: portrait (smaller) */}
              <div className="flex justify-center lg:justify-end">
                <div className="hero-photo-wrapper flex flex-col items-center lg:items-end gap-4">
                  <div className="badge badge-blue badge-left">7+ Years of Experience</div>
                  <div className="badge badge-dark badge-right">Hello</div>

                  <div className={`photo-inner glass-card ${isFallback ? 'fallback' : ''} w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden`}> 
                      <div className="absolute -inset-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl blur-3xl opacity-40"></div>
                      <img src={imgSrc} alt="I'm Souvik" className="w-full h-full object-cover rounded-2xl" loading="lazy" decoding="async" onError={() => { if (imgSrc !== profileImg) setImgSrc(profileImg) }} />
                      {isFallback && (
                        <div className="svg-fallback-overlay" aria-hidden="true">
                          <div className="svg-blob" />
                          <div className="fallback-hint">Profile image unavailable — using vector fallback</div>
                        </div>
                      )}
                    </div>

                  <div className="hero-right-text text-center lg:text-right max-w-xs">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">BUSINESS ANALYST</h3>
                    <p className="mt-2 text-sm text-slate-600">Making business logic simple, powerful, and user-first</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* ABOUT SECTION */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="backdrop-blur-3xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg lift-on-hover">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I'm a results-driven Business Analyst with expertise in translating complex business requirements into actionable insights. My approach combines data-driven analysis with stakeholder-centric problem-solving.
                </p>
                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  I excel at bridging the gap between business and technology teams, ensuring smooth project delivery and maximum stakeholder satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Qualifications</h3>
                <ul className="space-y-3">
                  <li className="stagger-item flex gap-3 items-start">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Bachelors in Business/Analytics (placeholder)</span>
                  </li>
                  <li className="stagger-item flex gap-3 items-start">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">3–5+ years in BA/SDLC and stakeholder management</span>
                  </li>
                  <li className="stagger-item flex gap-3 items-start">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Certified: CBAP/ECBA/CSPO (placeholder)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-12">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: 'Requirements Gathering', desc: 'Elicit and document stakeholder requirements with precision' },
              { skill: 'User Story Mapping', desc: 'Create detailed user stories and acceptance criteria' },
              { skill: 'Process Mapping', desc: 'Visualize and optimize business processes' },
              { skill: 'SQL & Analytics', desc: 'Data analysis and business intelligence' },
              { skill: 'Dashboard Creation', desc: 'Build actionable dashboards for decision-making' },
              { skill: 'Agile & Scrum', desc: 'Lead teams through iterative development cycles' }
            ].map((item, idx) => (
              <div key={idx} className="skill-card backdrop-blur-3xl bg-white/15 border border-white/30 rounded-2xl p-6 sm:p-8 hover:bg-white/25 hover:shadow-lg transition-all duration-300 group lift-on-hover">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.skill}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-12">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Customer Churn Analysis',
                period: '2024',
                tagline: 'Reduced churn by 8% via targeted levers.',
                description: 'Analyzed customer behavior patterns to identify at-risk segments and developed retention strategies.',
                impact: '8% reduction in customer churn'
              },
              {
                title: 'Sales Funnel Diagnostics',
                period: '2023',
                tagline: 'Improved conversion by 12% across segments.',
                description: 'Diagnosed bottlenecks in the sales funnel and recommended process improvements.',
                impact: '12% improvement in conversion rates'
              }
            ].map((project, idx) => (
              <article key={idx} className="clickable-card project-card backdrop-blur-3xl bg-white/15 border border-white/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer lift-on-hover relative">
                <div className="click-to-open">Click to view</div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-all duration-300"></div>
                  <p className="absolute top-4 right-4 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold text-slate-900">
                    {project.period}
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
                    <span>📊</span>
                    <span>{project.impact}</span>
                  </div>
                  <a href="#" className="inline-block text-slate-900 font-semibold hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1 duration-300">
                    View Case Study →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="backdrop-blur-3xl bg-white/15 border border-white/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg lift-on-hover text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="mailto:you@example.com" className="stagger-item px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                Send Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="stagger-item px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="stagger-item px-8 py-4 rounded-2xl bg-slate-700 text-white font-semibold hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                GitHub
              </a>
            </div>

            <form className="max-w-2xl mx-auto backdrop-blur-2xl bg-white/20 border border-white/40 rounded-2xl p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="px-4 py-3 rounded-xl bg-white/50 border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-3 rounded-xl bg-white/50 border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none mb-4"
              ></textarea>
              <button type="submit" className="w-full px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="backdrop-blur-2xl bg-white/20 border-t border-white/30 py-8 sm:py-12 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 font-medium">
            © {new Date().getFullYear()} I'm Souvik. Crafted with ✨ — Kolkata, India
          </p>
        </div>
      </footer>
    </div>
  )
}
