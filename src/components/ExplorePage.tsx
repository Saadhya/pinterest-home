import type { Dispatch, SetStateAction } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Header } from './Header'

type ExplorePageProps = {
  query: string
  onQueryChange: Dispatch<SetStateAction<string>>
  onOpenAuth: () => void
}

const topics = [
  { title: 'Home ideas', subtitle: 'Spaces to love living in', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85', className: 'topic-home' },
  { title: 'Easy dinners', subtitle: 'Tonight, made delicious', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85', className: 'topic-food' },
  { title: 'Style finds', subtitle: 'Outfits for every mood', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85', className: 'topic-style' },
  { title: 'Travel plans', subtitle: 'Places worth going', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85', className: 'topic-travel' },
  { title: 'DIY & crafts', subtitle: 'Make something new', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=85', className: 'topic-diy' },
  { title: 'Beauty inspo', subtitle: 'Little moments of care', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85', className: 'topic-beauty' },
]

const trendCards = [
  { title: 'The sunday kitchen', detail: 'Cozy recipes and soft mornings', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85' },
  { title: 'A room with a view', detail: 'Warm modern interiors', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85' },
  { title: 'Bouquet season', detail: 'Flowers worth bringing home', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=85' },
  { title: 'Daylight dressing', detail: 'Easy summer layers', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85' },
]

export function ExplorePage({ query, onQueryChange, onOpenAuth }: ExplorePageProps) {
  return <>
    <Header query={query} onQueryChange={onQueryChange} onOpenAuth={onOpenAuth} />
    <main className="explore-page">
      <section className="explore-hero">
        <p className="eyebrow"><Sparkles size={14} /> CURATED FOR RIGHT NOW</p>
        <h1>Explore ideas worth trying</h1>
        <p>Discover fresh inspiration for every plan, project and passing thought.</p>
      </section>
      <section className="explore-section" aria-labelledby="browse-topics">
        <div className="explore-heading"><div><p className="section-label">START EXPLORING</p><h2 id="browse-topics">What are you into?</h2></div><button className="see-all" type="button">See all topics <ArrowUpRight size={16} /></button></div>
        <div className="topic-grid">
          {topics.map((topic) => <button className={`topic-card ${topic.className}`} key={topic.title} type="button" onClick={() => onQueryChange(topic.title)}>
            <img src={topic.image} alt="" />
            <span><strong>{topic.title}</strong><small>{topic.subtitle}</small></span>
          </button>)}
        </div>
      </section>
      <section className="explore-section trending-section" aria-labelledby="trending-ideas">
        <div className="explore-heading"><div><p className="section-label">POPULAR THIS WEEK</p><h2 id="trending-ideas">Ideas people are loving</h2></div></div>
        <div className="trend-grid">
          {trendCards.map((card) => <article className="trend-card" key={card.title}><div className="trend-image"><img src={card.image} alt="" /><button type="button" aria-label={`Explore ${card.title}`}><ArrowUpRight size={19} /></button></div><h3>{card.title}</h3><p>{card.detail}</p></article>)}
        </div>
      </section>
    </main>
  </>
}
