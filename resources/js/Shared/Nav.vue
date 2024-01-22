<script setup>
import NavLink from '@/Shared/NavLink.vue'
</script>

<template>
  <section class="p-4 bg-gray-800 drop-shadow-md">
    <header class="flex justify-between">
      <img alt="Logo" class="object-scale-down max-h-8 rounded-lg" src="../../../public/images/logo.png"/>
      <section class="flex space-x-4">
        <NavLink :active="$page.component === 'About'" href="/">About</NavLink>
        <NavLink :active="$page.component === 'Skills'" href="/skills">Skills</NavLink>
        <NavLink :active="$page.component === 'Resume'" href="/resume">Resume</NavLink>
      </section>
      <section>
        <a href="https://github.com/aileks">
          <img alt="Github" class="max-w-6 mt-1" src="../../../public/images/github-mark-white.png"/>
        </a>
      </section>
    </header>
  </section>
</template>
