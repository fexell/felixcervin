<script setup>
  useHead({
    bodyAttrs: {
      class: 'overflow-hidden'
    }
  })
</script>

<template>
  <main id='App' class='app flex flex-col min-h-screen'>
    <div class='app-container'>
      <NuxtLayout />
    </div>
  </main>
</template>
