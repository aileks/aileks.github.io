<script setup>
import { onMounted, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import Nav from "@/components/Nav.vue";

const animate = ref(false);

onMounted(() => {
  animate.value = true;
});

onBeforeRouteLeave(() => {
  animate.value = false;
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
});
</script>

<template>
  <Nav />

  <Transition
    enter-active-class="transition-all ease-in-out duration-700"
    enter-from-class="translate-y-20 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all ease-in-out duration-500"
    leave-to-class="-translate-y-20 opacity-0"
    leave-from-class="translate-y-0 opacity-100"
  >
    <div v-if="animate" class="flex flex-col items-center justify-center">
      <slot />
    </div>
  </Transition>
</template>
