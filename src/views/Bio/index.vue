<script setup lang="ts">
// import { ref } from 'vue'

defineProps<{ platform: string, icon: string }>();

// const count =  ref(0)
</script>

<template>
  <div
    class="flex min-h-40s h-auto rounded-xl p-4 gap-2 shadow-md drop-shadow-xl hover:shadow-xl"
  >
    <div class="w-1/5">{{ icon }}</div>
    <div class="flex-grow">
      <div class="text-[#032D60] text-2xl font-bold">{{ platform }}</div>
      <div class="">
        Connect, federate, and harmonize data from any source and build AI apps

      </div>
    </div>
  </div>
</template>
