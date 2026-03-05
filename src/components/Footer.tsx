import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Signal</Link>
          <p className="footer-tagline">What’s happening, explained.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/category/world">World</Link>
          <Link to="/category/tech">Tech</Link>
          <Link to="/category/climate">Climate</Link>
          <Link to="/category/culture">Culture</Link>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Signal.</p>
      </div>
    </footer>
  )
}
