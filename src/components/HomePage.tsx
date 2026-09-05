import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import { fetchPins } from '../api/pins'
import { Header } from './Header'
import { MasonryGrid } from './MasonryGrid'
import type { Pin } from '../types'

const filters = ['All', 'Home decor', 'Style', 'Food & drink', 'Travel', 'Photography']

type HomePageProps = { query: string; onQueryChange: (query: string) => void; onOpenAuth: () => void }

export function HomePage({ query, onQueryChange, onOpenAuth }: HomePageProps) {
  const [pins, setPins] = useState<Pin[]>([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [isMoreLoading, setIsMoreLoading] = useState(false)

  useEffect(() => { fetchPins().then(({ items }) => { setPins(items); setIsLoading(false) }) }, [])
  const visiblePins = useMemo(() => pins.filter((pin) => {
    const matchingText = `${pin.title} ${pin.creator} ${pin.topic}`.toLowerCase().includes(query.toLowerCase())
    return matchingText && (activeFilter === 'All' || pin.topic === activeFilter)
  }), [pins, query, activeFilter])
  async function loadMore() { setIsMoreLoading(true); const { items } = await fetchPins(pins.length); setPins((current) => [...current, ...items]); setIsMoreLoading(false) }

  return <>
    <Header query={query} onQueryChange={onQueryChange} onOpenAuth={onOpenAuth} />
    <main>
      <section className="hero"><p className="eyebrow">YOUR DAILY DOSE OF INSPIRATION</p><h1>Ideas for your next chapter</h1><p className="subhead">Fresh finds, thoughtful spaces, and little moments worth saving.</p></section>
      <div className="feed-toolbar"><div className="chips" aria-label="Filter pins">{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? 'chip selected' : 'chip'}>{filter}</button>)}</div><button className="sort">Popular <ChevronDown size={16} /></button></div>
      {isLoading ? <div className="loading" aria-live="polite">Curating your feed<span>.</span><span>.</span><span>.</span></div> : visiblePins.length ? <MasonryGrid pins={visiblePins} /> : <div className="empty"><h2>Nothing quite matches that</h2><p>Try another search or explore all ideas.</p><button onClick={() => { onQueryChange(''); setActiveFilter('All') }}>Show all ideas</button></div>}
      {!isLoading && <div className="load-more"><button onClick={loadMore} disabled={isMoreLoading}>{isMoreLoading ? 'Finding more ideas…' : 'Explore more'}</button></div>}
    </main>
    <button className="fab" aria-label="Create a new pin"><Plus size={25} /></button>
  </>
}
