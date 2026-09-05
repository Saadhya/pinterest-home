import { Bell, ChevronDown, MessageCircle, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'

type HeaderProps = { query: string; onQueryChange: (value: string) => void; onOpenAuth: () => void }

export function Header({ query, onQueryChange, onOpenAuth }: HeaderProps) {
  return <header className="topbar">
    <NavLink className="brand" to="/" aria-label="Pinterest home">P</NavLink>
    <nav aria-label="Primary navigation"><NavLink to="/" end>Home</NavLink><NavLink to="/ideas">Explore</NavLink><NavLink to="/create">Create</NavLink></nav>
    <label className="search"><Search size={20} /><input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search for ideas" /><kbd>/</kbd></label>
    <div className="actions"><button aria-label="Notifications"><Bell size={20} /></button><button aria-label="Messages"><MessageCircle size={20} /></button><button className="avatar" onClick={onOpenAuth} aria-label="Log in or sign up">S</button><button onClick={onOpenAuth} aria-label="Open login or sign-up dialog"><ChevronDown size={18} /></button></div>
  </header>
}
