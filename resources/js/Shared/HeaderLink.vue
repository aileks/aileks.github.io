<script setup>
defineProps({
  active: Boolean,
})
</script>

<template>
  <Link :class="{'font-bold': active}" class="text-stone-400 hover:underline" href="#">
    <slot/>
  </Link>
</template>

<style scoped>

</style>
