import React from 'react'
import { useLanguage } from '../i18n'

const ArrowRightIcon = () => (
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
)

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const DropletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
  </svg>
)

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
)

const PlantIllustration = () => (
  <svg className="hero-illustration" viewBox="0 0 400 300" fill="none">
    {/* Sun */}
    <circle cx="320" cy="60" r="40" fill="#fbbf24" opacity="0.3"/>
    <circle cx="320" cy="60" r="25" fill="#fbbf24"/>
    
    {/* Ground */}
    <ellipse cx="200" cy="280" rx="180" ry="20" fill="#92400e" opacity="0.3"/>
    
    {/* Main Plant Pot */}
    <path d="M140 220 L160 280 L240 280 L260 220 Z" fill="#dc2626" opacity="0.8"/>
    <rect x="135" y="210" width="130" height="15" rx="3" fill="#b91c1c"/>
    
    {/* Plant Stem */}
    <path d="M200 210 Q200 160 200 120" stroke="#15803d" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <path d="M200 180 Q180 160 160 170" stroke="#15803d" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M200 150 Q220 130 240 140" stroke="#15803d" strokeWidth="6" fill="none" strokeLinecap="round"/>
    
    {/* Leaves */}
    <ellipse cx="145" cy="165" rx="30" ry="15" fill="#22c55e" transform="rotate(-30 145 165)"/>
    <ellipse cx="255" cy="135" rx="30" ry="15" fill="#22c55e" transform="rotate(30 255 135)"/>
    <ellipse cx="200" cy="100" rx="35" ry="18" fill="#16a34a"/>
    <ellipse cx="175" cy="115" rx="25" ry="12" fill="#22c55e" transform="rotate(-20 175 115)"/>
    <ellipse cx="225" cy="115" rx="25" ry="12" fill="#22c55e" transform="rotate(20 225 115)"/>
    
    {/* IoT Sensor */}
    <rect x="260" y="240" width="40" height="50" rx="5" fill="#3b82f6"/>
    <rect x="265" y="245" width="30" height="20" rx="2" fill="#1e3a8a"/>
    <circle cx="280" cy="255" r="6" fill="#22d3ee"/>
    <rect x="275" y="270" width="10" height="15" fill="#1e40af"/>
    
    {/* Signal waves from sensor */}
    <path d="M305 250 Q315 250 315 240" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M310 255 Q325 255 325 240" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.4"/>
    <path d="M315 260 Q335 260 335 240" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.2"/>
    
    {/* Water drops */}
    <path d="M100 180 Q105 190 100 200 Q95 190 100 180" fill="#0ea5e9"/>
    <path d="M85 200 Q88 207 85 214 Q82 207 85 200" fill="#0ea5e9" opacity="0.7"/>
    <path d="M115 195 Q118 202 115 209 Q112 202 115 195" fill="#0ea5e9" opacity="0.5"/>
    
    {/* AI scan lines over leaf */}
    <path d="M165 100 L235 100" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" opacity="0.8"/>
    <path d="M170 90 L230 90" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
    <path d="M170 110 L230 110" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
    
    {/* Checkmark badge */}
    <circle cx="240" cy="80" r="18" fill="#22c55e"/>
    <path d="M232 80 L238 86 L250 74" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            {t('hero.badge')}
          </div>
          
          <h1 className="hero-title">
            {t('hero.title')}{' '}
            <span className="gradient-text">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <div className="hero-buttons">
            <a href="tel:+25765484283" className="btn btn-primary">
              {t('hero.cta')}
              <ArrowRightIcon />
            </a>
            <a href="#fonctionnalites" className="btn btn-secondary">
              {t('hero.ctaSecondary')}
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">95<span>%</span></div>
              <div className="hero-stat-label">{t('hero.stats.accuracy')}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">40<span>%</span></div>
              <div className="hero-stat-label">{t('hero.stats.waterSaved')}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">500<span>+</span></div>
              <div className="hero-stat-label">{t('hero.stats.farmers')}</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <PlantIllustration />
          </div>
          
          <div className="hero-floating-card card-1">
            <div className="floating-icon green">
              <LeafIcon />
            </div>
            <div className="floating-text">
              <strong>Plante saine</strong>
              <span>Diagnostic IA positif</span>
            </div>
          </div>
          
          <div className="hero-floating-card card-2">
            <div className="floating-icon blue">
              <DropletIcon />
            </div>
            <div className="floating-text">
              <strong>Irrigation active</strong>
              <span>Humidité optimale</span>
            </div>
          </div>
          
          <div className="hero-floating-card card-3">
            <div className="floating-icon purple">
              <ActivityIcon />
            </div>
            <div className="floating-text">
              <strong>Capteurs actifs</strong>
              <span>Données en temps réel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
