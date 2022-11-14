<template>
  <div class="Sample">
    <h1>Sample Page</h1>
    <div class="pt-4 flex flex-col flex-wrap space-y-6">
      <h2>・Props</h2>
      <SamplePropsVue2props class="componentBlock" :sample-props="propsVue2" />
      <SamplePropsVue3props class="componentBlock" :sample-props="propsVue3" />
      <h2>・Emits</h2>
      <SampleEmitsVue3emits
        class="componentBlock"
        :num="emitVue3Value"
        @input="eventInput($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    title: 'sample'
  })

  const propsVue2 = [{ title: 'sample1' }, { title: 'sample2' }]
  const propsVue3 = [{ title: 'sample3' }, { title: 'sample4' }]
  const emitVue3Value = 0

  const eventInput = (e: string) => {
    alert(`Counted ${e} times!`)
  }
</script>
