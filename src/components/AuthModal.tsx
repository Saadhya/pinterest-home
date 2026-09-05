import { Eye, EyeOff, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

type AuthMode = 'login' | 'signup'

type AuthModalProps = {
  onClose: () => void
}

function GoogleMark() {
  return <span className="google-mark" aria-hidden="true">G</span>
}

export function AuthModal({ onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const emailId = useId()
  const nameId = useId()
  const dobId = useId()
  const passwordId = useId()
  const titleId = useId()
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose, mode])

  function changeMode(nextMode: AuthMode) {
    setMode(nextMode)
    setMessage('')
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(mode === 'login' ? 'Login is ready to connect to your authentication service.' : 'Your account is ready to be created through your authentication service.')
  }

  function continueWithGoogle() {
    setMessage('Google sign-in is ready to connect once OAuth credentials are configured.')
  }

  const isLogin = mode === 'login'
  const heading = isLogin ? 'Welcome back' : 'Create your account'

  return <div className="auth-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button className="auth-close" onClick={onClose} aria-label="Close authentication dialog"><X size={28} /></button>
      <div className="auth-panel">
        <div className="auth-brand"><span>P</span></div>
        <p className="auth-kicker">PINTEREST</p>
        <h2 id={titleId}>{heading}</h2>
        <p className="auth-intro">{isLogin ? 'Log in to discover ideas made for you.' : 'Join to save ideas and create the life you love.'}</p>
        <form onSubmit={submit}>
          {!isLogin && <>
            <label htmlFor={nameId}>Full name</label>
            <input id={nameId} type="text" autoComplete="name" placeholder="Full name" required />
          </>}
          <label htmlFor={emailId}>Email address</label>
          <input ref={emailRef} id={emailId} type="email" autoComplete="email" placeholder="Email" required />
          {!isLogin && <>
            <label htmlFor={dobId}>Date of birth</label>
            <input id={dobId} type="date" autoComplete="bday" required />
          </>}
          <label htmlFor={passwordId}>Password</label>
          <div className="password-field">
            <input id={passwordId} type={showPassword ? 'text' : 'password'} autoComplete={isLogin ? 'current-password' : 'new-password'} placeholder={isLogin ? 'Password' : 'Create a password'} minLength={8} required />
            <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={21} /> : <Eye size={21} />}</button>
          </div>
          {isLogin && <button type="button" className="auth-text-link" onClick={() => setMessage('Password recovery is ready to connect to your email service.')}>Forgotten your password?</button>}
          <button className="auth-submit" type="submit">{isLogin ? 'Log in' : 'Sign up'}</button>
        </form>
        <div className="auth-divider"><span>OR</span></div>
        <button type="button" className="google-button" onClick={continueWithGoogle}><GoogleMark />Continue with Google</button>
        {message && <p className="auth-message" role="status">{message}</p>}
        <p className="auth-switch">{isLogin ? 'Not on Pinterest yet?' : 'Already have an account?'} <button type="button" onClick={() => changeMode(isLogin ? 'signup' : 'login')}>{isLogin ? 'Sign up' : 'Log in'}</button></p>
        <p className="auth-terms">By continuing, you agree to Pinterest's <a href="#terms">Terms of Service</a> and acknowledge that you've read our <a href="#privacy">Privacy Policy</a>.</p>
      </div>
      <aside className="auth-aside" aria-hidden="true">
        <div className="auth-aside-copy"><span className="aside-heart">♥</span><h3>Find your next idea</h3><p>Save inspiration, organise your boards, and make every day more creative.</p></div>
      </aside>
    </section>
  </div>
}
