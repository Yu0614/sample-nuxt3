<template>
  <div>
    <span> ■ Vue2props </span>
    <div>
      {{ sampleProps }}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      sampleProps: { type: Array, default: () => [] }
    }
  }
</script>
