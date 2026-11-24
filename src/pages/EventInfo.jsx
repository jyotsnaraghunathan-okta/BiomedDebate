import { RESOLUTION, bookList } from '../data/books'
import { Card, PageHeader } from '../components/ui'

const refs = [
  { label: 'The shared ethical framework to allocate scarce medical resources: a lesson from COVID-19 (The Lancet)', url: 'https://www.sciencedirect.com/science/article/pii/S0140673623008127' },
  { label: 'Navigating Healthcare Ethics: Resource Allocation & Fairness Explained', url: 'https://residencyadvisor.com/resources/medical-ethics-law/ethics-resource-allocation-gets-what-healthcare' },
  { label: 'GESDA Radar: Longevity science crosses clinical threshold', url: 'https://www.gesda.global/radar-spotlight-longevity-science-crosses-clinical-threshold/' },
]

const rubric = [
  ['First Affirmative', 'Arguments & evidence (10), Flow & logic (10), Relevance (10)'],
  ['First Negative', 'Counterarguments: accurate, relevant, defended (15)'],
  ['Second Negative', 'Arguments & evidence (10), Flow & logic (5), Relevance (5)'],
  ['Second Affirmative', 'Counterarguments: accurate, relevant, defended (15)'],
  ['Negative Rebuttal', 'Evidence & effectiveness, Clarification, Relevance (5 each)'],
  ['Affirmative Rebuttal', 'Evidence & effectiveness, Clarification, Relevance (5 each)'],
  ['Overall (each side)', 'Voice, plus other delivery and decorum qualities'],
]

function Section({ title, children }) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-bold text-gray-900 mt-0">{title}</h2>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </Card>
  )
}

export default function EventInfo() {
  return (
    <div className="space-y-5 max-w-4xl">
      <PageHeader title="Event Rules" subtitle="HOSA Biomedical Debate, 2026-2027 guidelines summary" />
      <Section title="Topic">
        <p className="text-base font-semibold text-gray-900 m-0">"{RESOLUTION}"</p>
      </Section>
      <Section title="Overview">
        <ul className="pl-5 space-y-1 m-0">
          <li>Teamwork event, 3-4 competitors per team. At least three members must speak in the debate.</li>
          <li><b>Round One:</b> 50-question multiple-choice test, 60 minutes. The team average seeds Round Two. It is not part of the final score but breaks ties.</li>
          <li><b>Round Two:</b> bracketed debates, about 15 minutes each. Teams draw affirmative/negative on entering the room.</li>
          <li>New for 2026-27: <b>prep time has been removed.</b></li>
          <li>No verbal time announcements during testing; no timing devices or time warnings in the debate.</li>
          <li>Printed, hard-copy prepared materials are allowed in Round Two. No props or visual aids.</li>
          <li>Business attire or official HOSA uniform, photo ID, and two #2 pencils (not mechanical).</li>
        </ul>
      </Section>
      <Section title="Debate order (2 min each, 30 s transitions)">
        <ol className="pl-5 space-y-1 m-0">
          <li>First Affirmative: present arguments</li>
          <li>First Negative: respond to affirmative</li>
          <li>Second Negative: present arguments</li>
          <li>Second Affirmative: respond to negative</li>
          <li>Negative Summary / Rebuttal</li>
          <li>Affirmative Summary / Rebuttal</li>
        </ol>
        <p className="mb-0">Starting early earns no extra time. Speakers must stop immediately when time is called. Only one speaker at the podium at a time.</p>
      </Section>
      <Section title="Rating sheet summary">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {rubric.map(([k, v]) => (
              <tr key={k} className="border-b border-gray-100">
                <td className="py-2 pr-4 font-semibold whitespace-nowrap align-top">{k}</td>
                <td className="py-2 text-gray-600">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Official references">
        <ul className="pl-5 space-y-1 m-0">
          {bookList.map((b) => <li key={b.id}>{b.citation}</li>)}
          {refs.map((r) => (
            <li key={r.url}><a href={r.url} target="_blank" rel="noreferrer" className="text-accent-700">{r.label}</a></li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
