<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    items: Array,
    dark: Boolean,
  })

  const openIndex = ref( null )
</script>

<template>
  <AccordionItemComponent
    v-for='(item, idx) in items'
    :key='idx'
    :title='item.title'
    :dark='item.dark'
    :open='openIndex === idx'
    @toggle='openIndex = openIndex === idx ? null : idx'>
    <div v-html='item.content' />
  </AccordionItemComponent>
</template>