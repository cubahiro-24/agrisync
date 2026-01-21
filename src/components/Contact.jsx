import React from 'react'
import { useLanguage } from '../i18n'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge green">
            {t('contact.badge')}
          </span>
          <h2 className="section-title">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="contact-cards">
          <a href="tel:+25765484283" className="contact-card">
            <div className="contact-card-icon phone">
              <PhoneIcon />
            </div>
            <h4>{t('contact.phone')}</h4>
            <span>+257 65 48 42 83</span>
          </a>
          
          <a href="mailto:gianisimpled6@gmail.com" className="contact-card">
            <div className="contact-card-icon email">
              <MailIcon />
            </div>
            <h4>{t('contact.email')}</h4>
            <span>gianisimpled6@gmail.com</span>
          </a>
          
          <div className="contact-card">
            <div className="contact-card-icon location">
              <MapPinIcon />
            </div>
            <h4>{t('contact.location')}</h4>
            <span>{t('contact.locationValue')}</span>
          </div>
        </div>
        
        <div className="contact-cta">
          <a href="tel:+25765484283" className="btn btn-primary btn-large">
            <PhoneIcon />
            {t('contact.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
