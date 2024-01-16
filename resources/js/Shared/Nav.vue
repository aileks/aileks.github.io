<script setup>
import NavLink from '@/Shared/NavLink.vue'
</script>

<template>
  <section class="p-4 bg-gray-800 drop-shadow-md">
    <header class="flex justify-between">
      <h1 class="text-lg mt-1 text-slate-200">Logo</h1>
      <section class="flex space-x-4">
        <NavLink :active="$page.component === 'Home'" href="/">Home</NavLink>
        <NavLink :active="$page.component === 'Resume'" href="/resume">Resume</NavLink>
      </section>
      <section>
        <Link href="https://github.com/aileks">
          <img alt="Github" class="max-w-6 mt-1" src="../../../public/images/github-mark-white.png"/>
        </Link>
      </section>
    </header>
  </section>
</template>
