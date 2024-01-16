<script setup>
defineProps({
  active: Boolean,
})
</script>

<template>
  <Link :class="{'italic bg-slate-500 border border-slate-200 rounded-lg': active}"
        class="text-slate-200 border border-transparent hover:bg-slate-500 hover:border hover:border-slate-200 px-2 py-1 hover:rounded-lg">
    <slot/>
  </Link>
</template>
