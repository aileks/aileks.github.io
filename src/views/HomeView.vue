<script setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import Nav from "@/components/Nav.vue";

const animate = ref(false);

onMounted(() => {
  animate.value = true;
});

onBeforeRouteLeave(() => {
  animate.value = false;
  return new Promise((resolve) => {
    setTimeout(resolve, 300)
  });
});
</script>

<template>
  <Nav />

  <div class="flex flex-col items-center min-h-screen">
    <Transition enter-active-class="transition-all ease-in-out duration-500" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-all ease-in-out duration-500" leave-to-class="opacity-0" leave-from-class="opacity-100">
      <img v-show="animate" src="../../images/city.jpeg" alt="city" class="w-full h-64 object-cover mb-4" />
    </Transition>

    <Transition enter-active-class="transition-all ease-in-out duration-1000" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-all ease-in-out duration-500" leave-to-class="-translate-y-20 opacity-0" leave-from-class="translate-y-0 opacity-100">
      <div v-show="animate" class="flex flex-col items-center text-justify mt-12 p-8">
        <h1 class="text-2xl">
          Web development with passion.
        </h1>

        <h2 class="text-xl mt-4">
          Based in Florida.
        </h2>
      </div>
    </Transition>
  </div>
</template>
