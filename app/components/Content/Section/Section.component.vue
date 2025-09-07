<script setup>
  import { jarallax } from 'jarallax'

  window.addEventListener( 'load', () => {
    jarallax( document.querySelectorAll( '.jarallax' ), {
      speed: 0.2,
    } )
  } )

  const props = defineProps({
    id: String,
    title: String,
    isGray: Boolean,
    class: String,
    bodyClass: String,
    style: String,
  })
</script>

<template>
  <section
    :id='props.id'
    :class='{ "bg-stone-300": props.isGray, "bg-stone-100": !props.isGray }, props.class'
    :style='props.style'
    class='section relative flex flex-col w-full px-16 max-h-fit justify-center'>
    <div
      class='section-container relative max-w-7xl w-full h-full mx-auto py-12 z-10'>
      <h1
        class='section-title text-stone-900 font-bold leading-none text-[14rem] max-lg:text-[8rem] max-md:text-[5rem] break-words hyphens-auto'>
        {{ props.title }}
      </h1>
      <article class='section-body relative text-[1.5rem] font-Epunda_Slab z-10' :class='props.bodyClass'>
        <slot />
      </article>
    </div>
  </section>
</template>

<style lang="sass">
  .section-body
    font:
      size: 1.5rem
      family: 'Epunda Slab'
</style>