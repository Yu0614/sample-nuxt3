<template>
  <div>
    <span> ■ Vue3emits </span>
    <h2>
      * Count with received value from external of component, emits calculated
      count
    </h2>
    <div>
      <button
        class="bg-gray-200 hover:bg-gray-300 text-black rounded px-4 py-2 my-4 border-solid border border-slate-900"
        @click="onClick()"
      >
        Add count 1
      </button>
      <p>The button above has been clicked {{ reactiveCount.count }} times.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const prop = withDefaults(defineProps<{ num?: number }>(), {
    num: () => 0
  })

  const count = ref(prop.num) // refで参照先の指定
  const reactiveCount = reactive({ count }) // reactive化して mutableに

  const emit = defineEmits(['input']) // emitに使用する一覧を指定
  const onClick = () => {
    count.value++
    console.log('prop.num=0', prop.num)
    emit('input', count.value)
  }
</script>
