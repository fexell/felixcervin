<script setup>
  import { ref, defineEmits } from 'vue'

  const props = defineProps({
    title: String,
    dark: Boolean,
    open: Boolean,
  })

  const emit = defineEmits([ 'toggle' ])

  function toggle() {
    emit('toggle')
  }
</script>

<template>
  <div
    :class='{ "bg-stone-800 text-white": props.dark }'
    class='accordion-item relative block mb-2 border-2 border-stone-800 overflow-hidden transition-all transition-duration-200'>
    <header
      :class='{ "hover:bg-stone-950": props.dark, "hover:bg-stone-50": !props.dark }'
      class='header relative p-2 px-4 cursor-pointer'
      @click='toggle'>
      <h3
      class='title py-2'>{{ props.title }}</h3>
      <font-awesome icon='caret-down' class='absolute right-4 top-1/2 -translate-y-1/2' :class='{ "rotate-180": props.open }' />
    </header>
    <Transition name='fade'>
      <section
        :class='{ "border-stone-50 bg-stone-800 text-white": props.dark, "border-stone-950": !props.dark }'
        class='body p-2 px-4 pt-6 border-t-2'
        v-if='props.open'>
        <slot />
      </section>
    </Transition>
  </div>
</template>

<style lang="sass" scoped>

</style>
