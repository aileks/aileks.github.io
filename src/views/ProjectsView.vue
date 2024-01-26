<script setup>
import Layout from "@/components/Layout.vue";
</script>

<template>
  <Layout>
    <div
      class="page-container mt-12 flex flex-col items-center justify-center pt-4 text-center"
    >
      <header>
        <h1
          class="mb-8 max-w-prose px-4 text-justify text-2xl font-bold text-[#272d2d] sm:px-6 lg:px-8"
        >
          My Projects
        </h1>
      </header>

      <div
        class="m-4 flex flex-col justify-items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      >
        <div class="project-card w-full sm:w-auto">
          <h1 class="mb-4 text-lg font-bold">My Website</h1>
          <img src="../../images/website.png" />
          <p>This very website built using <b>Vue!</b></p>
          <a
            class="mt-2 text-xs font-bold text-[#272d2d] hover:underline sm:block"
            href="https://github.com/aileks/aileks.github.io"
            >View on Github</a
          >
        </div>

        <div class="project-card w-full sm:w-auto">
          <h1 class="mb-4 text-lg font-bold">Quillify</h1>
          <img src="../../images/quillify-login.png" />
          <p>
            <b>Full-stack</b> application that allows users to track their
            to-be-read lists. Built with <b>Laravel</b> and
            <b>Inertia.js</b> with <b>Vue</b>. Project still in progress.
          </p>
          <a
            class="mt-2 text-xs font-bold text-[#272d2d] hover:underline sm:block"
            href="https://github.com/aileks/quillify"
            >View on Github</a
          >
        </div>

        <div class="project-card w-full sm:w-auto">
          <h1 class="mb-4 text-lg font-bold">Etch-a-Sketch</h1>
          <img src="../../images/etch-a-sketch-example.png" />
          <p>
            A fun project written in <b>vanilla JavaScript</b> that recreates
            the etch-a-sketch experience on the web. Has
            <b>responsive design</b> for mobile.
          </p>
          <a
            class="mt-2 text-xs font-bold text-[#272d2d] hover:underline sm:block"
            href="https://github.com/aileks/etch-a-sketch"
            >View on Github</a
          >
        </div>
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
  padding: 1rem;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.02);
  }
}

.project-card img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 0.375rem;
  object-fit: cover;
}
.project-card h1,
.project-card p {
  flex-grow: 1;
}
</style>
