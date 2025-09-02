<script setup>
  import { useMenuStore } from '~~/stores/MenuStore'

  const menuStore = useMenuStore()
</script>

<template>
  <div id='HeaderRight' class='header-right relative w-24'>
    <div class='header-right-container w-full h-full'>
      <button
        @click='menuStore.toggleMenu'
        class='header-right-menu-toggle-button block w-full h-full'></button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  #HeaderRight
    > .header-right-container
      > .header-right-menu-toggle-button
        &::before
          content: ''
          width: 100%
          top: 40%

        &::after
          content: ''
          width: 75%
          top: 60%
          transition: width 0.2s ease

        &::before, &::after
          position: absolute
          height: 4px
          right: 0
          border-radius: 10rem
          backdrop-filter: invert(100%)

        &:hover
          &::after
            width: 100%

    &.light
      > .header-right-container
        > .header-right-menu-toggle-button
          &::before, &::after
            background-color: #000
</style>
