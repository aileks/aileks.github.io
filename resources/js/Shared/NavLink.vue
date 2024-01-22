<script setup>
defineProps({
  active: Boolean,
})
</script>

<template>
  <Link :class="{'italic bg-[#a39ba8] border border-[#edf5fc] rounded-lg': active}"
        class="text-[#edf5fc] border border-transparent hover:bg-[#a39ba8] hover:border hover:border-slate-200 px-2 py-1 hover:rounded-lg">
    <slot/>
  </Link>
</template>
