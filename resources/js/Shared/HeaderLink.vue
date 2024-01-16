<script setup>
defineProps({
  active: Boolean,
})
</script>

<template>
  <Link :class="{'italic': active}"
        class="text-slate-200 bg-slate-500 border border-slate-200 px-2 py-1 rounded-2xl hover:bg-slate-600">
    <slot/>
  </Link>
</template>
