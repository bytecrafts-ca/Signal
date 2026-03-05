import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const { pathname } = useLocation()

  // Notify ad script on every route change so ads can refresh for the new page
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('pageview', { detail: { path: pathname } }))
    const w = window as Window & { apitiny?: { refresh?: () => void } }
    if (typeof w.apitiny?.refresh === 'function') w.apitiny.refresh()
  }, [pathname])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
