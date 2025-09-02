<script setup>
  import { useMenuStore } from '~~/stores/MenuStore'

  const menuStore = useMenuStore()

</script>

<template>
  <Transition name='slide'>
    <div
      v-show='menuStore.isMenuOpen'
      id='Menu'
      class='menu fixed w-full h-full top-0 left-0 bg-stone-900 z-50'>
      <div class='menu-container flex justify-center items-center w-full h-full'>
        <MenuListComponent>
          <MenuItemComponent
            to='#Landing'
            linkText='Home'
            :isActive='menuStore.getActiveSection === "#Landing"' />
          <MenuItemComponent
            to='#About'
            linkText='About'
            :isActive='menuStore.getActiveSection === "#About"' />
          <MenuItemComponent
            to='#SkillsAndTechnologies'
            linkText='Skills & Technologies'
            :isActive='menuStore.getActiveSection === "#SkillsAndTechnologies"' />
          <MenuItemComponent
            to='#Goals'
            linkText='Goals'
            :isActive='menuStore.getActiveSection === "#Goals"' />
        </MenuListComponent>

        <div class='menu-close absolute max-w-7xl top-0 left-0 right-0 mx-auto p-6'>
          <div class='menu-close-container'>
            <button
              @click='menuStore.toggleMenu'
              class='menu-close-button block w-28 float-right text-white text-8xl hover:text-[#ccc]'>&times;</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="sass" scoped>
  #Menu

    &.slide-enter-active,
    &.slide-leave-active
      transition: all 200ms

    &.slide-enter-from,
    &.slide-leave-to
      transform: translateY(-100%)

</style>
