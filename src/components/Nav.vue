<script setup>
import {useRoute} from 'vue-router';
import NavLink from "./NavLink.vue";
</script>

<template>
  <section class="p-4 bg-[#272d2d] drop-shadow-md">
    <header class="flex justify-between">
      <img alt="rounded rectangle with a fancy letter A in the center"
           class="object-scale-down max-h-8 rounded-lg"
           src="/images/logo.png"/>

      <section class="flex space-x-4">
        <NavLink :active="currentPage === 'Home'"
          to="/"
        >
          Home
        </NavLink>

        <NavLink 
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          to="/skills"
        >
          Skills
        </NavLink>

        <NavLink
          to="/projects"
        >
          Projects
        </NavLink>

      </section>

      <section>
        <a href="https://github.com/aileks">
          <img alt="Github"
               class="max-w-6 mt-1"
               src="/images/github-mark-white.png"/>
        </a>
      </section>
    </header>
  </section>
</template>
