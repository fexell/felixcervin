<script setup lang="ts">

</script>

<template>
  <footer id='Footer' class='footer relative flex flex-col flex-nowrap w-full max-h-fit h-[35rem] justify-center'>
    <div class='footer-container flex flex-col relative max-md:flex-col flex-wrap max-w-7xl w-full h-full mx-auto p-6 pb-0 z-10'>
      <FooterTopComponent />
      <FooterMiddleComponent />
      <FooterBottomComponent />
    </div>
    <footer class='footer-bottom w-full h-12 flex justify-center items-center border-t border-stone-800 mt-4 py-8 bg-black'>
      <p class='footer-bottom-text block text-stone-400 text-sm'>&copy; 2025 Felix Cervin. All rights reserved.</p>
    </footer>
  </footer>
</template>

<style lang="sass" scoped>
  #Footer
    background-image: url('~/assets/images/Footer_Background_3.jpg')
    background-size: cover
    background-position: center center
    background-repeat: no-repeat

    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: radial-gradient(circle,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%)
      z-index: 1

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, 0.2)
      z-index: 2
</style>