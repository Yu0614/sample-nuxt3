<template>
  <div>
    <span> ■ Vue3props </span>
    <div>
      {{ props?.sampleProps }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    sampleProps?: Array<{
      title: string
    }>
  }

  const props = withDefaults(defineProps<Props>(), {
    sampleProps: () => []
  })
</script>
