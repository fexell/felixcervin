<script setup>
  import { useMenuStore } from '~~/stores/MenuStore'

  const menuStore = useMenuStore()

  const sections = [ '#Landing', '#About', '#SkillsAndTechnologies', '#Goals' ]

  let currentActiveSection = ''

  function updateURL( sectionId ) {
    const url = new URL( window.location )

    if( sectionId )
      history.replaceState( null, '', sectionId )
  }

  function onScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2
    let newSection = ''

    for( const sectionId of sections ) {
      const sectionElement = document.querySelector( sectionId )

      if( sectionElement ) {
        const rect = sectionElement.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionHeight = rect.height

        if( scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight ) {
          newSection = sectionId
          break
        }
      }
    }

    if( newSection && newSection !== currentActiveSection ) {
      currentActiveSection = newSection
      menuStore.setActiveSection( newSection )
      updateURL( newSection)
    }
  }

  onMounted(() => {
    window.addEventListener( 'scroll', onScroll )
    onScroll()
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
