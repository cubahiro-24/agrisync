import React from 'react'
import { useLanguage } from '../i18n'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
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

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
)

const LayoutDashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1"/>
    <rect width="7" height="5" x="14" y="3" rx="1"/>
    <rect width="7" height="9" x="14" y="12" rx="1"/>
    <rect width="7" height="5" x="3" y="16" rx="1"/>
  </svg>
)

const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
    <path d="M12 7v5l4 2"/>
  </svg>
)

const HeadphonesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
  </svg>
)

export default function Features() {
  const { t } = useLanguage()

  const features = [
    { icon: BrainIcon, iconClass: 'ai', key: 'aiDiagnosis' },
    { icon: WifiIcon, iconClass: 'iot', key: 'smartIrrigation' },
    { icon: BellIcon, iconClass: 'alert', key: 'alerts' },
    { icon: LayoutDashboardIcon, iconClass: 'dashboard', key: 'dashboard' },
    { icon: HistoryIcon, iconClass: 'history', key: 'history' },
    { icon: HeadphonesIcon, iconClass: 'support', key: 'support' }
  ]

  return (
    <section id="fonctionnalites" className="section features">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <BrainIcon style={{ width: 16, height: 16 }} />
            {t('features.badge')}
          </span>
          <h2 className="section-title">
            {t('features.title')}
          </h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`feature-icon ${feature.iconClass}`}>
                <feature.icon />
              </div>
              <h3 className="feature-title">{t(`features.list.${feature.key}.title`)}</h3>
              <p className="feature-text">{t(`features.list.${feature.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
