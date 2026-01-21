import React, { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: 18, height: 18}}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-brand">
          <div className="navbar-logo">
            <LeafIcon />
          </div>
          <span className="navbar-name">Agri<span>sync</span></span>
        </a>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#probleme" className="navbar-link" onClick={() => setMenuOpen(false)}>{t('nav.problem')}</a>
          <a href="#solution" className="navbar-link" onClick={() => setMenuOpen(false)}>{t('nav.solution')}</a>
          <a href="#fonctionnalites" className="navbar-link" onClick={() => setMenuOpen(false)}>{t('nav.features')}</a>
          <a href="#how-it-works" className="navbar-link" onClick={() => setMenuOpen(false)}>{t('nav.howItWorks')}</a>
          <a href="#contact" className="navbar-link" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a>
          
          <button 
            className="lang-switcher" 
            onClick={toggleLanguage}
            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <GlobeIcon />
            <span>{language === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          <a href="tel:+25765484283" className="btn btn-primary navbar-cta">
            {t('nav.demo')}
          </a>
        </div>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
