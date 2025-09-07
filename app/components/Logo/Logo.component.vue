<script setup>
  const props = defineProps({
    width: {
      type: String,
    },
    isMobile: Boolean,
    class: String,
  })
</script>

<template>
  <svg
    id="FC_Logo_White"
    :class='{ "!max-md:w-full": props.isMobile }'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1367 769"><rect class="cls-1" x="374.53" y="159" width="92.72" height="452"/><path class="cls-1" d="m911.94,159h0c51.17,0,92.72,41.55,92.72,92.72v42.5c0,25.59-20.77,46.36-46.36,46.36h0c-25.59,0-46.36-20.77-46.36-46.36v-135.21h0Z"/><path class="cls-1" d="m826.94,159h0v452h0c-51.17,0-92.72-41.55-92.72-92.72V251.72c0-51.17,41.55-92.72,92.72-92.72Z"/><circle class="cls-1" cx="600.53" cy="203.43" r="44.43"/><circle class="cls-1" cx="600.53" cy="385" r="44.43"/><circle class="cls-1" cx="958.33" cy="564.67" r="46.33"/></svg>
</template>

<style lang='sass' scoped>
  #FC_Logo_White
    position: relative
    width: v-bind(width)
    height: 100%
    fill: #fff
    filter: drop-shadow(0 0 0.75rem #000)
    z-index: 10

    @media screen and ( max-width: 992px )
      width: 100%
      height: auto
</style>
