export default defineAppConfig({
  title: 'OptionBrains Links',
  documentation: 'https://github.com/optionbrains/Sink',
  github: 'https://github.com/optionbrains/Sink',
  coffee: 'https://optionbrains.com',
  twitter: 'https://x.com/Option_Brains',
  telegram: '',
  description: 'One link. Every possibility. Smart, secure links powered by OptionBrains.',
  image: '/optionbrains-logo.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
