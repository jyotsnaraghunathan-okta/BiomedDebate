import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/layout/Layout'
import RequireAuth from './components/auth/RequireAuth'
import OktaCallback from './components/auth/OktaCallback'
import Dashboard from './pages/Dashboard'
import StudyGuide from './pages/StudyGuide'
import Flashcards from './pages/Flashcards'
import Practice from './pages/Practice'
import Tests from './pages/Tests'
import TestTaking from './pages/TestTaking'
import DebatePrep from './pages/DebatePrep'
import EventInfo from './pages/EventInfo'
import Progress from './pages/Progress'

function ProtectedLayout() {
  return (
    <RequireAuth>
      <Layout>
        <Outlet />
      </Layout>
    </RequireAuth>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login/callback" element={<OktaCallback />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study/:chapterId?" element={<StudyGuide />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:setId" element={<TestTaking />} />
        <Route path="/debate" element={<DebatePrep />} />
        <Route path="/event" element={<EventInfo />} />
        <Route path="/progress" element={<Progress />} />
      </Route>
    </Routes>
  )
}
