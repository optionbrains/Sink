<script setup lang="ts">
/* eslint-disable better-tailwindcss/no-unknown-classes */
definePageMeta({
  layout: false,
})

useSeoMeta({
  title: 'OptionBrains Links',
  description: 'One link. Every possibility. Smart, secure links powered by OptionBrains.',
})

const year = new Date().getFullYear()
</script>

<template>
  <div class="brand-page">
    <div class="brand-page__glow brand-page__glow--blue" />
    <div class="brand-page__glow brand-page__glow--gold" />
    <div class="brand-page__grid" />

    <header class="brand-header">
      <NuxtLink to="/" class="brand-lockup" aria-label="OptionBrains Links home">
        <img src="/optionbrains-mark.svg" alt="" width="48" height="48">
        <span>
          <strong>OptionBrains</strong>
          <small>SMART LINKS</small>
        </span>
      </NuxtLink>

      <NuxtLink to="/dashboard" class="header-action">
        Dashboard
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </header>

    <main class="brand-main">
      <section class="brand-hero">
        <p class="eyebrow">
          <span />
          Short links powered by OptionBrains
        </p>

        <h1>
          One link.<br>
          <em>Every possibility.</em>
        </h1>

        <p class="hero-copy">
          Research, model portfolios and every opportunity—connected through
          simple, intelligent links built to be shared.
        </p>

        <div class="hero-actions">
          <a
            href="https://optionbrains.com"
            target="_blank"
            rel="noopener noreferrer"
            class="primary-action"
          >
            Explore OptionBrains
            <span aria-hidden="true">→</span>
          </a>
          <NuxtLink to="/dashboard" class="secondary-action">
            Manage links
          </NuxtLink>
        </div>

        <ul class="feature-list" aria-label="Link platform features">
          <li><span>✓</span> Secure redirects</li>
          <li><span>✓</span> Smart analytics</li>
          <li><span>✓</span> Built for sharing</li>
        </ul>
      </section>

      <aside class="link-card" aria-hidden="true">
        <div class="link-card__top">
          <span class="link-card__mark">
            <img src="/optionbrains-mark.svg" alt="" width="30" height="30">
          </span>
          <span class="link-card__status">LIVE</span>
        </div>
        <p class="link-card__label">
          YOUR SMART LINK
        </p>
        <div class="link-card__url">
          <span>go.optionbrains.com/</span><strong>possibility</strong>
        </div>
        <div class="link-card__line" />
        <div class="link-card__stats">
          <span><strong>Fast</strong><small>Global redirect</small></span>
          <span><strong>Clear</strong><small>Useful insights</small></span>
          <span><strong>Simple</strong><small>Easy to share</small></span>
        </div>
      </aside>
    </main>

    <footer class="brand-footer">
      <p>© {{ year }} OptionBrains Capital Private Limited</p>
      <p>Simple links. Meaningful connections.</p>
    </footer>
  </div>
</template>

<style scoped>
.brand-page {
  position: relative;
  display: flex;
  min-height: 100svh;
  flex-direction: column;
  overflow: hidden;
  color: #f8fbff;
  background: #050b18;
}

.brand-page__glow,
.brand-page__grid {
  position: absolute;
  pointer-events: none;
}

.brand-page__glow {
  width: 42rem;
  height: 42rem;
  border-radius: 999px;
  filter: blur(100px);
}

.brand-page__glow--blue {
  top: -22rem;
  left: -15rem;
  background: rgb(31 111 235 / 32%);
}

.brand-page__glow--gold {
  right: -18rem;
  bottom: -25rem;
  background: rgb(218 163 52 / 22%);
}

.brand-page__grid {
  inset: 0;
  opacity: 0.04;
  background-image:
    linear-gradient(rgb(255 255 255 / 80%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 80%) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: linear-gradient(to bottom, black, transparent 88%);
}

.brand-header,
.brand-main,
.brand-footer {
  position: relative;
  z-index: 1;
  width: min(100% - 3rem, 72rem);
  margin-inline: auto;
}

.brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-lockup img {
  width: 3rem;
  height: 3rem;
  filter: drop-shadow(0 8px 22px rgb(32 112 238 / 30%));
}

.brand-lockup span {
  display: flex;
  flex-direction: column;
}

.brand-lockup strong {
  font-size: 1.1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.brand-lockup small {
  margin-top: 0.32rem;
  color: #8ebcff;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.26em;
}

.header-action,
.secondary-action {
  border: 1px solid rgb(255 255 255 / 14%);
  color: #e7eefb;
  background: rgb(255 255 255 / 5%);
  backdrop-filter: blur(12px);
}

.header-action {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 999px;
  padding: 0.65rem 1rem;
  font-size: 0.84rem;
  font-weight: 600;
  transition: 180ms ease;
}

.header-action:hover,
.secondary-action:hover {
  border-color: rgb(255 255 255 / 28%);
  background: rgb(255 255 255 / 10%);
}

.brand-main {
  display: grid;
  flex: 1;
  grid-template-columns: minmax(0, 1.35fr) minmax(19rem, 0.65fr);
  align-items: center;
  gap: 5rem;
  padding-block: 5rem 7rem;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.75rem;
  border: 1px solid rgb(92 158 255 / 20%);
  border-radius: 999px;
  padding: 0.55rem 0.85rem;
  color: #b8d3ff;
  background: rgb(45 116 222 / 10%);
  font-size: 0.78rem;
  font-weight: 600;
}

.eyebrow span {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 999px;
  background: #e9b13e;
  box-shadow: 0 0 14px rgb(233 177 62 / 90%);
}

h1 {
  max-width: 50rem;
  font-size: clamp(3.5rem, 7vw, 6.7rem);
  line-height: 0.94;
  font-weight: 850;
  letter-spacing: -0.06em;
}

h1 em {
  color: transparent;
  background: linear-gradient(100deg, #6da7ff 8%, #e8bb59 94%);
  background-clip: text;
  font-style: normal;
}

.hero-copy {
  max-width: 40rem;
  margin-top: 1.8rem;
  color: #aab7cc;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2.2rem;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  min-height: 3.2rem;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.85rem;
  padding: 0.75rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 700;
  transition: 180ms ease;
}

.primary-action {
  color: #071020;
  background: linear-gradient(100deg, #77adff, #e9bd5d);
  box-shadow: 0 16px 45px rgb(41 111 220 / 26%);
}

.primary-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 55px rgb(41 111 220 / 38%);
}

.feature-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.6rem;
  margin-top: 2.4rem;
  color: #8290a7;
  font-size: 0.78rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.feature-list span {
  color: #e9b13e;
}

.link-card {
  position: relative;
  transform: rotate(2deg);
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 1.5rem;
  padding: 1.35rem;
  background: linear-gradient(145deg, rgb(17 33 61 / 88%), rgb(8 17 34 / 88%));
  box-shadow: 0 35px 90px rgb(0 0 0 / 40%);
  backdrop-filter: blur(20px);
}

.link-card::before {
  position: absolute;
  z-index: -1;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(120deg, rgb(98 159 255 / 35%), transparent 45%, rgb(230 176 62 / 22%));
  content: '';
  filter: blur(16px);
}

.link-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link-card__mark {
  display: grid;
  width: 2.7rem;
  height: 2.7rem;
  place-items: center;
  border-radius: 0.85rem;
  background: rgb(255 255 255 / 7%);
}

.link-card__status {
  border: 1px solid rgb(89 209 148 / 24%);
  border-radius: 999px;
  padding: 0.35rem 0.55rem;
  color: #80dfac;
  background: rgb(89 209 148 / 8%);
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.link-card__label {
  margin-top: 2.5rem;
  color: #6f809a;
  font-size: 0.57rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.link-card__url {
  overflow: hidden;
  margin-top: 0.55rem;
  font-size: 1rem;
  letter-spacing: -0.02em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link-card__url span {
  color: #71829d;
}

.link-card__url strong {
  color: #f4c86c;
}

.link-card__line {
  height: 1px;
  margin-block: 2.2rem 1.3rem;
  background: linear-gradient(90deg, rgb(255 255 255 / 14%), transparent);
}

.link-card__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.link-card__stats span {
  display: flex;
  flex-direction: column;
}

.link-card__stats strong {
  color: #dfe8f7;
  font-size: 0.76rem;
}

.link-card__stats small {
  margin-top: 0.3rem;
  color: #687993;
  font-size: 0.58rem;
}

.brand-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgb(255 255 255 / 7%);
  padding-block: 1.3rem;
  color: #57677e;
  font-size: 0.68rem;
}

@media (max-width: 860px) {
  .brand-main {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding-block: 4rem;
  }

  .link-card {
    width: min(100%, 26rem);
    transform: none;
  }
}

@media (max-width: 540px) {
  .brand-header,
  .brand-main,
  .brand-footer {
    width: min(100% - 2rem, 72rem);
  }

  .brand-lockup strong {
    font-size: 1rem;
  }

  .header-action {
    padding-inline: 0.8rem;
  }

  .brand-main {
    padding-block: 3.5rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .primary-action,
  .secondary-action {
    width: 100%;
  }

  .brand-footer {
    flex-direction: column;
  }
}
</style>
