<template>
  <TheHeader />
  <div class="bodyContainer">
    <div class="body">
      <div class="contentContainer">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const runtimeConfig = useRuntimeConfig()
  const route = useRoute()
  useHead({
    titleTemplate: route.meta.title
      ? `${runtimeConfig.public.headTitleBase} | ${route.meta.title}`
      : `${runtimeConfig.public.headTitleBase}`
  })
</script>
