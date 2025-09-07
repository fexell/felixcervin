<script setup>
  import { useMenuStore } from '~~/stores/MenuStore'

  const menuStore = useMenuStore()

</script>

<template>
  <Transition name='slide'>
    <div
      v-show='menuStore.isMenuOpen'
      id='Menu'
      class='menu fixed w-full h-full top-0 left-0 bg-stone-900 z-[100]'>
      <div class='menu-container flex justify-center items-center w-full h-full'>
        <header class='menu-header absolute flex top-0 left-0 max-w-full w-full justify-center h-28'>
          <div class='menu-header-container relative max-w-7xl w-full h-full p-4'>
            <button
              @click='menuStore.toggleMenu'
              class='menu-close relative float-right w-24 h-24 right-0'></button>
          </div>
        </header>
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
      </div>
    </div>
  </Transition>
</template>

<style lang="sass" scoped>
  #Menu

    .menu-header
      button
        &::before
          content: ''
          position: absolute
          width: 50%
          height: 4px
          top: 50%
          left: 25%
          background-color: #fff
          transform: rotate(45deg)
          transition: transform 200ms

        &::after
          content: ''
          position: absolute
          width: 50%
          height: 4px
          top: 50%
          left: 25%
          background-color: #fff
          transform: rotate(-45deg)
          transition: transform 200ms

        &:hover
          &::before, &::after
            background-color: #ccc
            transform: scale(1.2)

    &.slide-enter-active,
    &.slide-leave-active
      transition: all 200ms

    &.slide-enter-from,
    &.slide-leave-to
      transform: translateY(-100%)

</style>
