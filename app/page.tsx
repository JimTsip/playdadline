'use client';

import { FormEvent, useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const stores = [
  { name: 'APP STORE', logo: '/assets/apple-logo.png', alt: 'Apple logo' },
  { name: 'GOOGLE PLAY', logo: '/assets/google-play-logo.png', alt: 'Google Play logo' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [message, setMessage] = useState('');

  async function joinWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || 'Something went wrong.');
      setFormState('success');
      setMessage(result.message || 'You are on the list. Mission accepted!');
      setEmail('');
    } catch (error) {
      setFormState('error');
      setMessage(error instanceof Error ? error.message : 'Please try again.');
    }
  }

  return (
    <main className="landing-shell">
      <div className="comic-band" aria-hidden="true" />

      <header className="site-header">
        <img className="brand-logo" src="/assets/dadline-logo.png" alt="DADLINE: Family Rush" />
        <span className="launch-chip">COMING SOON • 2026</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">EVERY ERRAND IS A MISSION</p>
          <h1>RUN THE DAY.<br />BE THE BEST DAD.</h1>
          <p className="intro">
            A fast, funny comic runner about family missions, everyday pressure,
            and one Dad trying to get it all done.
          </p>

          <div className="mobile-art-slot"><HeroArtwork /></div>

          <div className="waitlist-block">
            <p className="form-kicker">BE FIRST TO RUN</p>
            <form className="waitlist-form" onSubmit={joinWaitlist}>
              <label className="sr-only" htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={formState === 'submitting'}
                required
              />
              <button type="submit" disabled={formState === 'submitting'}>
                {formState === 'submitting' ? 'JOINING…' : 'JOIN THE WAITLIST'}
              </button>
            </form>
            <p className="form-note">NO SPAM • JUST THE LAUNCH CALL</p>
            <p className={`form-message ${formState}`} role="status" aria-live="polite">{message}</p>
          </div>

          <div className="store-row" aria-label="Planned platforms">
            {stores.map((store) => (
              <div className="store-card" key={store.name}>
                <span className="store-mark"><img src={store.logo} alt={store.alt} /></span>
                <span><small>SOON ON</small><strong>{store.name}</strong></span>
              </div>
            ))}
          </div>
        </div>

        <div className="desktop-art-slot"><HeroArtwork /></div>
      </section>

      <footer className="footer-strip">
        <strong>SMALL ERRANDS. BIG SAVES.</strong>
        <span>DADLINE • FAMILY RUSH</span>
      </footer>
    </main>
  );
}

function HeroArtwork() {
  return (
    <div className="art-wrap">
      <span className="mission-chip">MISSION ACCEPTED!</span>
      <div className="hero-art">
        <img src="/assets/dadline-hero.png" alt="Dad sprinting through the city with milk" />
      </div>
      <div className="honor-card">
        <small>HONOR UNLOCKED</small>
        <strong>DAD OF THE DAY</strong>
      </div>
    </div>
  );
}
