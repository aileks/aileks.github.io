<script setup>
import { RouterLink } from "vue-router";

defineProps({
  active: Boolean,
});
</script>

<template>
  <RouterLink
    :class="{
      'rounded-lg border border-[#edf5fc] bg-[#a39ba8] italic': active,
    }"
    class="border border-transparent px-2 py-1 text-[#edf5fc] hover:rounded-lg hover:border hover:border-slate-200 hover:bg-[#a39ba8]"
  >
    <slot />
  </RouterLink>
</template>
