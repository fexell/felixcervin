<script setup>
  const props = defineProps({
    id: String,
    title: String,
    isGray: Boolean,
  })
</script>

<template>
  <section
    :id='props.id'
    :class='{ "bg-stone-300": props.isGray, "bg-stone-100": !props.isGray }'
    class='section flex flex-col w-full min-h-screen max-h-fit justify-center'>
    <div
      class='section-container max-w-7xl w-full h-full mx-auto py-12'>
      <h1 class='section-title text-stone-900 font-bold'>{{ props.title }}</h1>
      <article class='section-body'>
        <slot />
      </article>
    </div>
  </section>
</template>