<script setup>
import HeaderLink from './HeaderLink.vue'
</script>

<template>
  <section class="p-4 bg-gray-800 drop-shadow-md">
    <header class="flex justify-between">
      <h1 class="text-lg mt-1 text-slate-200">Logo</h1>
      <section class="flex space-x-4">
        <HeaderLink :active="$page.component === 'Home'" href="/">Home</HeaderLink>
        <HeaderLink :active="$page.component === 'Resume'" href="/resume">Resume</HeaderLink>
      </section>

      <section>
        <slot/>
      </section>
    </header>
  </section>
</template>
