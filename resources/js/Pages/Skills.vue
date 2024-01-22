<script setup>
import Layout from "@/Shared/Layout.vue";
</script>

<template>
  <Head title="Skills" />

  <Layout>
    <header class="text-[#272d2d] mb-10">
      <h1 class="text-2xl text-center font-bold mb-8">My Knowledge</h1>
    </header>

    <div class="grid grid-cols-4 gap-4 drop-shadow-md text-center mt-4 mx-auto">
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

    <footer class="mt-6 pt-8">
      <p class="font-sm text-center italic">
        All featured skills were acquired through self-directed learning and personal initiative.
      </p>
    </footer>
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
