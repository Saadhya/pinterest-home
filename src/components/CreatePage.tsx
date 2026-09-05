import type { Dispatch, SetStateAction } from 'react'
import { ImagePlus, Link, Sparkles } from 'lucide-react'
import { Header } from './Header'

type CreatePageProps = {
  query: string
  onQueryChange: Dispatch<SetStateAction<string>>
  onOpenAuth: () => void
}

export function CreatePage({ query, onQueryChange, onOpenAuth }: CreatePageProps) {
  return <>
    <Header query={query} onQueryChange={onQueryChange} onOpenAuth={onOpenAuth} />
    <main className="create-page">
      <section className="create-card">
        <div className="create-icon"><Sparkles size={27} /></div>
        <p className="section-label">CREATE</p>
        <h1>Share an idea</h1>
        <p>Upload an image or save a link to turn your inspiration into a new Pin.</p>
        <div className="create-actions"><button type="button"><ImagePlus size={19} />Upload an image</button><button type="button"><Link size={19} />Save from a link</button></div>
      </section>
    </main>
  </>
}
