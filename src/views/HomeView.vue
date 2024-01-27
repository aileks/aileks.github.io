<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import Nav from "@/components/Nav.vue";

const animate = ref(false);

onMounted(() => {
  document.body.style.overflow = "hidden";
  animate.value = true;
});

onBeforeUnmount(() => {
  document.body.style.overflow = "auto";
});

onBeforeRouteLeave(() => {
  animate.value = false;
  return new Promise((resolve) => {
    setTimeout(resolve, 300);
  });
});
</script>

<template>
  <Nav />

  <Transition
    enter-active-class="transition-all ease-in-out duration-700"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all ease-in-out duration-500"
    leave-to-class="opacity-0"
    leave-from-class="opacity-100"
  >
    <div v-show="animate" class="flex items-center justify-center">
      <img
        src="../../images/city.jpeg"
        alt="city"
        class="relative h-full w-full blur-[4px] brightness-50 contrast-100 -hue-rotate-15"
      />
      <div
        class="absolute top-1/3 rounded-md bg-[#272d2d] bg-opacity-70 p-8 text-center text-[#edf5fc]"
      >
        <h1 class="text-2xl">Web development with passion.</h1>
        <h2 class="mt-4 text-xl italic">Based in Florida.</h2>
      </div>
    </div>
  </Transition>
</template>
