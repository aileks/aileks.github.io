<script setup>
import Layout from "@/components/Layout.vue";
</script>

<template>
  <Layout>
    <div class="sm:mt-8 lg:mt-32">
      <header class="text-[#272d2d]">
        <h1 class="mb-8 text-center text-2xl font-bold">My Knowledge</h1>
      </header>

      <div class="mx-2 mb-8 space-y-8 pb-8">
        <div
          class="overflow-y grid grid-cols-2 gap-4 text-center drop-shadow-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <span class="skill">🐧 Linux</span>
          <span class="skill">💻 Bash</span>
          <span class="skill">🌐 HTML</span>
          <span class="skill">🎨 CSS</span>
          <span class="skill">📝 JavaScript</span>
          <span class="skill">🧠 PHP</span>
          <span class="skill">💨 Tailwind CSS</span>
          <span class="skill">👀 Vue</span>
          <span class="skill">💪 Laravel</span>
          <span class="skill">🏃 Inertia.js</span>
          <span class="skill">📊 MySQL</span>
          <span class="skill">☕️ Java</span>
        </div>

        <footer>
          <p class="font-sm text-center italic">
            All featured skills were acquired through self-directed learning and
            personal initiative.
          </p>
        </footer>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.skill {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid #272d2d;
  border-radius: 5px;
  background-color: #bb4430;
  color: #edf5fc;
  font-weight: bold;
}

.skill:hover {
  background-color: rgba(187, 68, 48, 0.7);
}
</style>
