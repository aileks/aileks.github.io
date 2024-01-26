<script setup>
import { useRoute } from "vue-router";
import NavLink from "./NavLink.vue";

const route = useRoute();
</script>

<template>
  <section class="bg-[#272d2d] p-4 drop-shadow-md">
    <header class="flex justify-between">
      <img
        alt="rounded rectangle with a fancy letter A in the center"
        class="max-h-8 rounded-lg object-scale-down"
        src="/images/logo.png"
      />

      <section class="flex space-x-4">
        <NavLink :active="route.name === 'home'" to="/"> Home </NavLink>

        <NavLink :active="route.name === 'about'" to="/about"> About </NavLink>

        <NavLink :active="route.name === 'skills'" to="/skills">
          Skills
        </NavLink>

        <NavLink :active="route.name === 'projects'" to="/projects">
          Projects
        </NavLink>
      </section>

      <section>
        <a href="https://github.com/aileks">
          <img
            alt="Github"
            class="mt-1 max-w-6"
            src="/images/github-mark-white.png"
          />
        </a>
      </section>
    </header>
  </section>
</template>
