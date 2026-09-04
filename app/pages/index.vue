<script setup lang="ts">
/* eslint-disable better-tailwindcss/no-unknown-classes */
definePageMeta({
  layout: false,
})

useSeoMeta({
  title: 'Thank You | OptionBrains Capital',
  description: 'Thank you for visiting OptionBrains Capital Private Limited.',
})

const year = new Date().getFullYear()
</script>

<template>
  <main class="welcome-page">
    <div class="welcome-page__glow welcome-page__glow--blue" />
    <div class="welcome-page__glow welcome-page__glow--gold" />
    <div class="welcome-page__grid" />

    <section class="welcome-card">
      <img
        src="/optionbrains-logo.png"
        alt="OptionBrains Capital"
        width="360"
        height="110"
        class="welcome-logo"
      >

      <p class="company-name">
        OPTIONBRAINS CAPITAL PRIVATE LIMITED
      </p>

      <h1>Thank you for visiting OptionBrains Capital.</h1>

      <p class="welcome-copy">
        Discover structured research, thoughtful market insights and everything
        OptionBrains has built for informed traders and investors.
      </p>

      <a
        href="https://optionbrains.com"
        class="visit-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit OptionBrains
        <span aria-hidden="true">→</span>
      </a>

      <p class="legal">
        © {{ year }} OptionBrains Capital Private Limited
      </p>
    </section>
  </main>
</template>

<style scoped>
.welcome-page {
  position: relative;
  display: grid;
  min-height: 100svh;
  overflow: hidden;
  place-items: center;
  padding: 2rem;
  color: #f8fbff;
  background: #050b18;
}

.welcome-page__glow,
.welcome-page__grid {
  position: absolute;
  pointer-events: none;
}

.welcome-page__glow {
  width: 42rem;
  height: 42rem;
  border-radius: 999px;
  filter: blur(110px);
}

.welcome-page__glow--blue {
  top: -25rem;
  left: -18rem;
  background: rgb(38 111 226 / 32%);
}

.welcome-page__glow--gold {
  right: -20rem;
  bottom: -27rem;
  background: rgb(225 171 57 / 24%);
}

.welcome-page__grid {
  inset: 0;
  opacity: 0.035;
  background-image:
    linear-gradient(rgb(255 255 255 / 80%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 80%) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(circle at center, black, transparent 78%);
}

.welcome-card {
  position: relative;
  z-index: 1;
  display: flex;
  width: min(100%, 47rem);
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.welcome-logo {
  width: min(100%, 22rem);
  height: auto;
  filter: drop-shadow(0 20px 35px rgb(21 94 198 / 35%));
}

.company-name {
  margin-top: 1.8rem;
  color: #e6b856;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.28em;
}

h1 {
  max-width: 45rem;
  margin-top: 1rem;
  font-size: clamp(2.7rem, 6vw, 5.5rem);
  line-height: 1;
  font-weight: 850;
  letter-spacing: -0.055em;
}

.welcome-copy {
  max-width: 38rem;
  margin-top: 1.6rem;
  color: #a7b5ca;
  font-size: clamp(1rem, 2vw, 1.16rem);
  line-height: 1.75;
}

.visit-button {
  display: inline-flex;
  min-height: 3.35rem;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 2.3rem;
  border-radius: 0.9rem;
  padding: 0.8rem 1.45rem;
  color: #071020;
  background: linear-gradient(100deg, #78aeff, #e8bb59);
  box-shadow: 0 18px 50px rgb(40 108 216 / 30%);
  font-size: 0.92rem;
  font-weight: 800;
  transition: 180ms ease;
}

.visit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 60px rgb(40 108 216 / 42%);
}

.legal {
  margin-top: 3.5rem;
  color: #586a84;
  font-size: 0.68rem;
}

@media (max-width: 520px) {
  .welcome-page {
    padding: 1.25rem;
  }

  .company-name {
    max-width: 20rem;
    line-height: 1.7;
  }
}
</style>
