<script setup>
import Layout from '@/components/Layout.vue'
</script>

<template>
  <Layout>
    <h1 class="text-2xl text-[#272d2d] font-bold mb-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-prose text-justify">
      My Personal Projects
    </h1>
    <div class="max-w-prose text-center space-y-8">
      <div class="project-card">
        <h1 class="text-lg font-bold mb-4">
          My Website
        </h1>

        <p>
          This very website built using <b>Vue!</b>

        </p>

        <a href="https://github.com/aileks/personal-website" target="_blank"
          class="text-[#272d2d] text-sm font-bold hover:underline bottom-0 right-0 absolute pr-2 pt-2 mt-4">View on Github</a>
      </div>

      <div class="project-card">
        <h1 class="text-lg font-bold mb-4">Etch-a-Sketch</h1>
        <p>A fun project written in <b>vanilla JavaScript</b> that recreates the etch-a-sketch experience on the web. Has <b>responsive design</b> for mobile.
        </p>
        <a href="https://github.com/aileks/etch-a-sketch"
          class="text-[#272d2d] text-sm font-bold hover:underline bottom-0 right-0 absolute pr-2 pt-2 mt-4">View on Github</a>
      </div>

      <div class="project-card">
        <h1 class="text-lg font-bold mb-4">Quillify</h1>
        <p>
          <b>Full-stack</b> application that allows users to track their to-be-read lists. Built with <b>Laravel</b> and
          <b>Inertia.js</b> with <b>Vue</b>. Project still in progress.
          <a href="https://github.com/aileks/quillify"
            class="text-[#272d2d] text-sm font-bold hover:underline bottom-0 right-0 absolute pr-2 pt-2 mt-4">View on Github</a>
        </p>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.project-card {
  @apply drop-shadow-lg;
  background: #b8c5d6;
  border: 2px solid #272d2d;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
}
</style>
