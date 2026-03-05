import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

const TINY_ADZ_SCRIPT_URL = 'https://cdn.apitiny.net/scripts/v2.0/main.js'
const TINY_ADZ_SITE_ID = '69a9ec889105ad2ba05f5b15'

export function Layout() {
  const { pathname } = useLocation()

  // Tiny Adz requires the script on every page. In an SPA we inject it on every route
  // so it runs fresh for each "page" (home, article, category, about).
  useEffect(() => {
    const selector = 'script[data-tiny-adz-injected="true"]'
    const existing = document.querySelector(selector)
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.setAttribute('data-tiny-adz-injected', 'true')
    script.src = TINY_ADZ_SCRIPT_URL
    script.setAttribute('data-site-id', TINY_ADZ_SITE_ID)
    script.setAttribute('data-test-mode', 'false')
    script.async = true
    document.body.appendChild(script)
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
