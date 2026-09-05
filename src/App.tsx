import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthModal } from './components/AuthModal'
import { CreatePage } from './components/CreatePage'
import { ExplorePage } from './components/ExplorePage'
import { HomePage } from './components/HomePage'

export default function App() {
  const [query, setQuery] = useState('')
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  return <div id="top">
    <Routes>
      <Route path="/" element={<HomePage query={query} onQueryChange={setQuery} onOpenAuth={() => setIsAuthOpen(true)} />} />
      <Route path="/ideas" element={<ExplorePage query={query} onQueryChange={setQuery} onOpenAuth={() => setIsAuthOpen(true)} />} />
      <Route path="/create" element={<CreatePage query={query} onQueryChange={setQuery} onOpenAuth={() => setIsAuthOpen(true)} />} />
      <Route path="*" element={<HomePage query={query} onQueryChange={setQuery} onOpenAuth={() => setIsAuthOpen(true)} />} />
    </Routes>
    {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
  </div>
}
