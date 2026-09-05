import { Ellipsis, Heart, Share, Upload } from 'lucide-react'
import type { Pin } from '../types'

export function PinCard({ pin }: { pin: Pin }) {
  return <article className="pin-card">
    <div className="pin-media" style={{ aspectRatio: `1 / ${pin.height / 280}` }}>
      <img src={pin.image} alt={pin.imageAlt} loading="lazy" />
      <div className="pin-overlay"><button className="save-button">Save</button><div><button aria-label={`Share ${pin.title}`}><Share size={18} /></button><button aria-label={`More for ${pin.title}`}><Ellipsis size={19} /></button></div></div>
    </div>
    <h3>{pin.title}</h3>
    <div className="pin-meta"><span className="creator-avatar">{pin.avatar}</span><span>{pin.creator}</span><button aria-label={`Like ${pin.title}`}><Heart size={16} /></button></div>
  </article>
}
