import React from 'react'
import { useLanguage } from '../i18n'

const UserPlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <line x1="19" x2="19" y1="8" y2="14"/>
    <line x1="22" x2="16" y1="11" y2="11"/>
  </svg>
)

const WifiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13a10 10 0 0 1 14 0"/>
    <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
    <path d="M2 8.82a15 15 0 0 1 20 0"/>
    <line x1="12" x2="12.01" y1="20" y2="20"/>
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

export default function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    { icon: UserPlusIcon, key: 'step1', number: '01' },
    { icon: WifiIcon, key: 'step2', number: '02' },
    { icon: RocketIcon, key: 'step3', number: '03' }
  ]

  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            {t('howItWorks.badge')}
          </span>
          <h2 className="section-title">
            {t('howItWorks.title')}
          </h2>
          <p className="section-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">
                <step.icon />
              </div>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{t(`howItWorks.steps.${step.key}.title`)}</h3>
              <p className="step-text">{t(`howItWorks.steps.${step.key}.description`)}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
