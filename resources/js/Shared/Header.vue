<script setup>
import HeaderLink from './HeaderLink.vue'
</script>

<template>
  <section class="p-2 bg-gray-800 drop-shadow-md">
    <header class="flex justify-between">
      <h1 class="text-lg text-slate-200">Logo</h1>
      <section class="flex space-x-4">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/resume">Resume</HeaderLink>
      </section>

      <section>
        <slot/>
      </section>
    </header>
  </section>
</template>

<style scoped>

</style>
