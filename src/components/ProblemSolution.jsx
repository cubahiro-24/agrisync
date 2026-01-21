import React from 'react'
import { useLanguage } from '../i18n'

const AlertTriangleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/>
    <path d="M12 17h.01"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <path d="m9 11 3 3L22 4"/>
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

const DropletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
  </svg>
)

const BugIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 2 1.88 1.88"/>
    <path d="M14.12 3.88 16 2"/>
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/>
    <path d="M12 20v-9"/>
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5"/>
    <path d="M6 13H2"/>
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4"/>
    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/>
    <path d="M22 13h-4"/>
    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const TrendingDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/>
    <polyline points="16 17 22 17 22 11"/>
  </svg>
)

export default function ProblemSolution() {
  const { t } = useLanguage()
  
  const problemCards = [
    { icon: DropletIcon, key: 'irrigation' },
    { icon: BugIcon, key: 'diseases' },
    { icon: ClockIcon, key: 'diagnosis' },
    { icon: TrendingDownIcon, key: 'losses' }
  ]

  return (
    <section id="probleme" className="section problem-solution">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <AlertTriangleIcon style={{ width: 16, height: 16 }} />
            {t('problem.badge')}
          </span>
          <h2 className="section-title">
            {t('problem.title')}
          </h2>
          <p className="section-subtitle">
            {t('problem.subtitle')}
          </p>
        </div>
        
        <div className="problem-cards-grid">
          {problemCards.map(({ icon: Icon, key }) => (
            <div className="problem-card" key={key}>
              <div className="problem-card-icon">
                <Icon />
              </div>
              <h4>{t(`problem.cards.${key}.title`)}</h4>
              <p>{t(`problem.cards.${key}.description`)}</p>
            </div>
          ))}
        </div>
        
        <div className="problem-stats">
          <div className="problem-stat">
            <div className="problem-stat-value">40%</div>
            <div className="problem-stat-label">{t('problem.stats.losses')}</div>
          </div>
          <div className="problem-stat">
            <div className="problem-stat-value">60%</div>
            <div className="problem-stat-label">{t('problem.stats.affected')}</div>
          </div>
          <div className="problem-stat">
            <div className="problem-stat-value">70%</div>
            <div className="problem-stat-label">{t('problem.stats.noAccess')}</div>
          </div>
        </div>
        
        <div id="solution" className="solution-section">
          <div className="section-header">
            <span className="section-badge green">
              <CheckCircleIcon style={{ width: 16, height: 16 }} />
              {t('solution.badge')}
            </span>
            <h2 className="section-title">
              {t('solution.title')}
            </h2>
            <p className="section-subtitle">
              {t('solution.subtitle')}
            </p>
          </div>
          
          <div className="solution-cards">
            <div className="solution-card ai">
              <div className="solution-card-header">
                <div className="solution-icon purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                  </svg>
                </div>
                <h3>{t('solution.ai.title')}</h3>
              </div>
              <p>{t('solution.ai.description')}</p>
              <ul className="solution-features">
                {t('solution.ai.features').map((feature, i) => (
                  <li key={i}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="solution-card iot">
              <div className="solution-card-header">
                <div className="solution-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
                  </svg>
                </div>
                <h3>{t('solution.iot.title')}</h3>
              </div>
              <p>{t('solution.iot.description')}</p>
              <ul className="solution-features">
                {t('solution.iot.features').map((feature, i) => (
                  <li key={i}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
