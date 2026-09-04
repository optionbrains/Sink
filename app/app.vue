<script setup lang="ts">
import 'vue-sonner/style.css'

const { title, description, image } = useAppConfig()
const route = useRoute()
const localeHead = useLocaleHead()
const colorMode = useColorMode()
const requestUrl = useRequestURL()
const shareImage = computed(() => new URL(image, requestUrl.origin).toString())

useSeoMeta({
  title: `${title} — Smart links by OptionBrains`,
  description,
  ogType: 'website',
  ogTitle: title,
  ogSiteName: title,
  ogDescription: description,
  ogImage: shareImage,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: shareImage,
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
    {
      name: 'theme-color',
      content: colorMode.value === 'dark' ? '#09090b' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${requestUrl.origin}${route.path}`,
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/optionbrains-mark.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/optionbrains-mark.svg',
    },
  ],
}))
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="var(--primary)" />
    <NuxtPage />
    <Toaster position="top-center" rich-colors />
  </NuxtLayout>
</template>
