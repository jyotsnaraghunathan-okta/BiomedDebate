// Small shared UI pieces.
/* eslint-disable react-refresh/only-export-components */

export function Card({ className = '', children }) {
  return <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm ${className}`}>{children}</div>
}

export function PageHeader({ title, subtitle, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 m-0">{title}</h1>
        {subtitle && <p className="text-gray-500 mt-1 mb-0">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

export function Bar({ value, className = '' }) {
  return (
    <div className={`h-2 rounded-full bg-gray-100 overflow-hidden ${className}`}>
      <div className="h-full bg-accent-500 rounded-full transition-all" style={{ width: `${Math.round(value * 100)}%` }} />
    </div>
  )
}

export function Button({ variant = 'primary', className = '', ...props }) {
  const styles = {
    primary: 'bg-accent-600 text-white hover:bg-accent-700 border-transparent',
    secondary: 'bg-white text-accent-700 border-accent-200 hover:bg-accent-50',
    ghost: 'bg-transparent text-gray-600 border-transparent hover:bg-gray-100',
  }
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-semibold border cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${styles[variant]} ${className}`}
      {...props}
    />
  )
}

export function ChapterSelect({ chapters, value, onChange, allLabel = 'All chapters' }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm border border-accent-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 max-w-full"
    >
      <option value="all">{allLabel}</option>
      {chapters.map((c) => (
        <option key={c.id} value={c.id}>{c.title}</option>
      ))}
    </select>
  )
}

export function fmtTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${String(s).padStart(2, '0')}`
}
