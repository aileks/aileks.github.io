<script setup>
import {onMounted, ref} from 'vue'
import Nav from '@/Shared/Nav.vue'

const animate = ref(false)

onMounted(() => {
  animate.value = true
})
</script>

<template>
  <div class="layout">
    <Nav/>
    <Transition
        enter-active-class="transition-all duration-1000 ease-out"
        enter-from-class="-translate-y-20 opacity-0"
        enter-to-class="transition-opacity duration-1000"
        leave-active-class="transition-all duration-1000 cubic-bezier(1, 0, 0, 1)"
        leave-to-class="-translate-y-20 opacity-0"
    >
      <div v-if="animate">
        <slot/>
      </div>
    </Transition>
  </div>
</template>