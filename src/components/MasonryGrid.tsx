import type { Pin } from '../types'
import { PinCard } from './PinCard'

export function MasonryGrid({ pins }: { pins: Pin[] }) {
  return <section className="masonry" aria-label="Pins">
    {pins.map((pin) => <PinCard key={pin.id} pin={pin} />)}
  </section>
}
