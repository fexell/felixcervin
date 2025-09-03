<script setup>
  import { useMenuStore } from '~~/stores/MenuStore'

  const menuStore = useMenuStore()

  const props = defineProps({
    to: String,
    linkText: String,
    class: String,
    isActive: Boolean,
  })
</script>

<template>
  <li
    class='menu-item relative overflow-hidden'>
    <div class='menu-item-container'>
      <Transition name='slide'>
        <NuxtLink
          v-if='menuStore.isMenuOpen'
          @click='menuStore.toggleMenu'
          :to='{ hash: props.to }'
          class='block text-white text-center hover:text-[#ccc] break-words text-[7rem] max-md:text-5xl'
          :class='{ active: props.isActive }'>
          <span>{{ props.linkText }}</span>
        </NuxtLink>
      </Transition>
    </div>
  </li>
</template>

<style lang="sass" scoped>
  .menu-item
    > .menu-item-container
      > a
        line-height: 1
        font:
          family: 'Bebas Neue'

        &.active
          text-decoration: underline
          color: #ea580c

  .slide-enter-active,
  .slide-leave-active
    transition: all 200ms
    transition-delay: 300ms

  .slide-enter-from,
  .slide-leave-to
    transform: translateY(-100%)
</style>