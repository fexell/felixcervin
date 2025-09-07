<script setup>
  import { useMenuStore } from '~~/stores/MenuStore'

  const menuStore = useMenuStore()

  const sections = [ '#Landing', '#About', '#SkillsAndTechnologies', '#Goals' ]
  let currentActiveSection = ''
  let sectionElements = []

  function updateURL( sectionId ) {
    if( sectionId )
      history.replaceState( history.state, '', sectionId )
  }

  function throttle( fn, wait ) {
    let lastTime = 0

    return function( ...args ) {
      const now = Date.now()

      if( now - lastTime >= wait ) {
        lastTime = now
        fn.apply( this, args )
      }
    }
  }

  function findActiveSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2

    for( let i = 0; i < sectionElements.length; i++ ) {
      const el = sectionElements[i]

      if( !el )
        continue

      const rect = el.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const sectionHeight = rect.height

      if( scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight ) {
        return sections[i]
      }
    }
  }

  const onScroll = throttle(() => {
    const newSection = findActiveSection()

    if( newSection && newSection !== currentActiveSection ) {
      currentActiveSection = newSection
      menuStore.setActiveSection( currentActiveSection )
      updateURL( currentActiveSection )
    }
  }, 100)

  onMounted(() => {
    sectionElements = sections.map( id => document.querySelector( id ) )
    window.addEventListener( 'scroll', onScroll )
    onScroll() // Initial check
  })

  onBeforeMount(() => {
    window.removeEventListener( 'scroll', onScroll )
  })
</script>

<template>
  <main id='App' class='app flex flex-col min-h-screen'>
    <div class='app-container'>
      <MenuComponent />
      <NuxtLayout />
    </div>
  </main>
</template>

<style lang="sass">
  html
    scroll-behavior: smooth

  #App
    font:
      family: 'Bebas Neue', sans-serif
</style>
