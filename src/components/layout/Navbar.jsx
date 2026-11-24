import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useOktaAuth } from '@okta/okta-react'
import BookToggle from './BookToggle'

const navLinks = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/study', label: 'Study Guide' },
  { to: '/flashcards', label: 'Flashcards' },
  { to: '/practice', label: 'Practice' },
  { to: '/tests', label: 'Tests' },
  { to: '/debate', label: 'Debate Prep' },
  { to: '/progress', label: 'Progress' },
  { to: '/event', label: 'Event Rules' },
]

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
    isActive ? 'bg-accent-100 text-accent-700' : 'text-gray-600 hover:bg-accent-50 hover:text-accent-700'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { oktaAuth, authState } = useOktaAuth()
  const user = authState?.idToken?.claims

  return (
    <nav className="sticky top-0 z-50 border-b border-accent-200 bg-white/85 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-3 h-16">
          <span className="font-bold text-accent-900 whitespace-nowrap">⚕️ Biomedical Debate</span>
          <BookToggle className="hidden sm:inline-flex" />
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-gray-500 truncate max-w-40">{user?.name || user?.email}</span>
            <button
              onClick={() => oktaAuth.signOut()}
              className="px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 bg-transparent cursor-pointer"
            >
              Sign out
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 bg-transparent border-none cursor-pointer text-xl"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-1 pb-2 -mt-1">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
        </div>

        <BookToggle className="sm:hidden mb-3 w-full justify-center" />

        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100 flex flex-col gap-1 pt-2">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between px-3">
              <span className="text-xs text-gray-400">{user?.name || user?.email}</span>
              <button
                onClick={() => oktaAuth.signOut()}
                className="text-sm font-medium text-red-600 bg-transparent border-none cursor-pointer"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
