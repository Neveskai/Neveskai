import { useEffect, useState } from 'react'
import { LINKS, copy } from './content'

function initialLang() {
  try {
    const q = new URLSearchParams(location.search).get('lang')
    if (q === 'pt' || q === 'en') return q
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const ext = { target: '_blank', rel: 'noreferrer' }
const Arrow = () => <span aria-hidden="true">↗</span>

function Facts({ items }) {
  return (
    <dl className="facts">
      {items.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.title
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang, t])

  const ids = ['jogos', 'trabalho', 'experiencia', 'contato']

  return (
    <>
      <a className="skip-link" href="#conteudo">{t.skip}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#topo">Wendell <span>Neves</span></a>
          <nav className="navigation">
            {t.nav.map((label, i) => (
              <a key={ids[i]} href={`#${ids[i]}`}>{label}</a>
            ))}
          </nav>
          <div className="languages" role="group" aria-label="Idioma / Language">
            <button aria-current={lang === 'pt' ? 'true' : undefined} onClick={() => setLang('pt')}>PT</button>
            <span aria-hidden="true">/</span>
            <button aria-current={lang === 'en' ? 'true' : undefined} onClick={() => setLang('en')}>EN</button>
          </div>
          <a className="header-cta" href={LINKS.linkedin} {...ext}>LinkedIn <Arrow /></a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="topo">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">✦ {t.eyebrow}</p>
              <h1>
                <span>{t.hero[0]}</span>
                <span>{t.hero[1]}</span>
                <em>{t.hero[2]}</em>
              </h1>
              <p className="hero-description">{t.heroText}</p>
              <div className="actions">
                <a className="button button-gold" href="#jogos">{t.heroCta} <span aria-hidden="true">↓</span></a>
                <a className="button button-outline" href={LINKS.github} {...ext}>GitHub <Arrow /></a>
              </div>
            </div>
            <div className="hero-stage" aria-hidden="true">
              <div className="hero-phone">
                <video src="./img/combat.mp4" poster="./img/combat-poster.webp" autoPlay muted loop playsInline />
              </div>
              <div className="hero-sticker">
                <img src="./img/wt-cat.webp" alt="" />
              </div>
              <p className="hero-caption">{t.heroCaption}</p>
            </div>
          </div>
        </section>

        <div className="strip">
          <div className="wrap">
            {t.strip.map((s) => <span key={s}>✦ {s}</span>)}
          </div>
        </div>

        <section className="section" id="jogos">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">{t.gamesEyebrow}</p>
              <h2>{t.gamesTitle}</h2>
              <p>{t.gamesIntro}</p>
            </div>

            <article className="game game-piggy">
              <div className="game-art">
                <img src="./img/piggy_hero_landscape.webp" alt={t.piggy.name} loading="lazy" />
                <span className="game-count">01</span>
              </div>
              <div className="game-copy">
                <p className="eyebrow pink">{t.piggy.tag}</p>
                <h3>{t.piggy.name}</h3>
                <p>{t.piggy.text}</p>
                <Facts items={t.piggy.facts} />
                <div className="actions">
                  <a className="button button-gold" href={LINKS.piggyPlay} {...ext}>{t.piggy.play} <Arrow /></a>
                  <a className="button button-outline" href={LINKS.piggyDemo} {...ext}>{t.piggy.demo} <span aria-hidden="true">▷</span></a>
                  <a className="text-link" href={lang === 'en' ? LINKS.piggySite + 'en/' : LINKS.piggySite} {...ext}>{t.piggy.site} <Arrow /></a>
                </div>
              </div>
            </article>

            <article className="game game-kids">
              <div className="game-art kids-art">
                <img className="kids-main" src="./img/wt-cat.webp" alt={t.kids.name} loading="lazy" />
                <div className="kids-row" aria-hidden="true">
                  {['duck', 'bus', 'apple', 'frog'].map((n) => (
                    <img key={n} src={`./img/wt-${n}.webp`} alt="" loading="lazy" />
                  ))}
                </div>
                <span className="game-count">02</span>
              </div>
              <div className="game-copy">
                <p className="eyebrow yellow">{t.kids.tag}</p>
                <h3>{t.kids.name}</h3>
                <p>{t.kids.text}</p>
                <Facts items={t.kids.facts} />
                <div className="actions">
                  <a className="button button-gold" href={LINKS.kidsDemo} {...ext}>{t.kids.demo} <span aria-hidden="true">▷</span></a>
                  <a className="text-link" href={LINKS.kidsSite} {...ext}>{t.kids.site} <Arrow /></a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="trabalho">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">{t.workEyebrow}</p>
              <h2>{t.workTitle}</h2>
              <p>{t.workIntro}</p>
            </div>
            <div className="story-grid">
              {t.work.map(([n, title, text]) => (
                <div className="story" key={n}>
                  <span className="story-count">{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="lab">
              <p className="eyebrow">{t.labTitle}</p>
              <p>{t.labText}</p>
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="wrap split">
            <div>
              <div className="section-heading">
                <p className="eyebrow">{t.expEyebrow}</p>
                <h2>{t.expTitle}</h2>
              </div>
              <ol className="timeline">
                {t.experience.map(([company, role, period]) => (
                  <li key={company}>
                    <strong>{company}</strong>
                    <span>{role}</span>
                    <small>{period}</small>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="section-heading">
                <p className="eyebrow">&nbsp;</p>
                <h2>{t.skillsTitle}</h2>
              </div>
              <dl className="skills">
                {t.skills.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div className="wrap cta-inner">
            <p className="eyebrow">{t.ctaEyebrow}</p>
            <h2>{t.ctaTitle[0]} <em>{t.ctaTitle[1]}</em></h2>
            <p>{t.ctaText}</p>
            <div className="actions">
              <a className="button button-gold" href={LINKS.email}>wnevesky@gmail.com</a>
              <a className="button button-outline" href={LINKS.linkedin} {...ext}>LinkedIn <Arrow /></a>
              <a className="button button-outline" href={LINKS.github} {...ext}>GitHub <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Wendell Neves</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </>
  )
}
