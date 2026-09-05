import type { Pin } from '../types'

const pins: Pin[] = [
  { id: '1', title: 'Soft morning light', creator: 'Olivia Hart', avatar: 'OH', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=85', imageAlt: 'modern cream building', height: 430, topic: 'Architecture' },
  { id: '2', title: 'A little color therapy', creator: 'Mina Studio', avatar: 'MS', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85', imageAlt: 'colorful living room', height: 540, topic: 'Home decor' },
  { id: '3', title: 'Made for slow Sundays', creator: 'Nora Lee', avatar: 'NL', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85', imageAlt: 'coffee on a table', height: 385, topic: 'Food & drink' },
  { id: '4', title: 'The perfect garden table', creator: 'Garden & Grain', avatar: 'GG', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=85', imageAlt: 'cabin beside a lake', height: 500, topic: 'Travel' },
  { id: '5', title: 'Weekend uniform', creator: 'Pia Martin', avatar: 'PM', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85', imageAlt: 'clothing rack', height: 445, topic: 'Style' },
  { id: '6', title: 'Tiny things, big joy', creator: 'Moss & Clay', avatar: 'MC', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=85', imageAlt: 'small plants in pots', height: 520, topic: 'Plants' },
  { id: '7', title: 'Sunset study', creator: 'Eloise Dunn', avatar: 'ED', image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=700&q=85', imageAlt: 'sunset over hills', height: 390, topic: 'Photography' },
  { id: '8', title: 'Freshly baked', creator: 'The Daily Crumb', avatar: 'DC', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85', imageAlt: 'pastries', height: 475, topic: 'Baking' },
  { id: '9', title: 'Dream kitchen details', creator: 'Atelier Home', avatar: 'AH', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85', imageAlt: 'warm kitchen interior', height: 440, topic: 'Interiors' },
  { id: '10', title: 'Notes from the coast', creator: 'Lena Fields', avatar: 'LF', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85', imageAlt: 'coastal landscape', height: 505, topic: 'Travel' },
  { id: '11', title: 'Flower market finds', creator: 'Celia June', avatar: 'CJ', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85', imageAlt: 'green plants', height: 410, topic: 'Flowers' },
  { id: '12', title: 'Quietly creative', creator: 'Studio Fawn', avatar: 'SF', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85', imageAlt: 'journal and pen', height: 500, topic: 'Design' }
]

export async function fetchPins(cursor = 0, limit = 12): Promise<{ items: Pin[]; nextCursor: number | null }> {
  await new Promise((resolve) => setTimeout(resolve, 550))
  const items = Array.from({ length: limit }, (_, index) => ({ ...pins[(cursor + index) % pins.length], id: `${cursor + index}-${pins[(cursor + index) % pins.length].id}` }))
  return { items, nextCursor: cursor + limit }
}
