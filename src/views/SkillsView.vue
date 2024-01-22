<script setup>
import Layout from "@/components/Layout.vue";
</script>

<template>
  <Layout>
    <header class="text-[#272d2d]">
      <h1 class="text-2xl text-center font-bold mb-8">My Knowledge</h1>
    </header>

    <div class="mb-8 pb-8 space-y-8">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 drop-shadow-md text-center overflow-y">
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
          All featured skills were acquired through self-directed learning and personal initiative.
        </p>
      </footer>
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
