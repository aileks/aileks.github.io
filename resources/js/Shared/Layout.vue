<script setup>
import {onMounted, ref} from 'vue'
import Nav from '@/Shared/Nav.vue'

const animate = ref(false)

onMounted(() => {
  animate.value = true
})
</script>

<template>
  <Nav/>
  <Transition
      enter-active-class="transition-all ease-in-out duration-500"
      enter-from-class="-translate-y-20 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
  >
    <div v-if="animate" class="flex flex-col justify-center items-center min-h-screen">
      <slot/>
    </div>
  </Transition>
</template>
