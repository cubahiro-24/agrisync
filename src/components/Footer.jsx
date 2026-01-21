import React from 'react'
import { useLanguage } from '../i18n'

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)



const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <LeafIcon />
              </div>
              <span className="footer-logo-text">Agri<span>sync</span></span>
            </div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            {/* social media icons removed per request */}
          </div>
          
          <div className="footer-column">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><a href="#fonctionnalites">{t('nav.features')}</a></li>
              <li><a href="#solution">{t('nav.solution')}</a></li>
              <li><a href="#how-it-works">{t('nav.howItWorks')}</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>{t('footer.contactUs')}</h4>
            <ul className="footer-links">
              <li><a href="tel:+25765484283">+257 65 48 42 83</a></li>
              <li><a href="mailto:gianisimpled6@gmail.com">gianisimpled6@gmail.com</a></li>
              <li><span>Bujumbura, Burundi</span></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>{t('footer.followUs')}</h4>
            <div className="footer-social-alt">
              <a href="https://wa.me/25765484283" className="social-link whatsapp">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:gianisimpled6@gmail.com" className="social-link email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <a href="#">Agrisync</a>. {t('footer.rights')}
          </p>
          <p className="footer-made">
            {t('footer.madeWith')} ❤️ {t('footer.forFarmers')}
          </p>
        </div>
      </div>
    </footer>
  )
}
