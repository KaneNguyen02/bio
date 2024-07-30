<script setup lang="ts">
import Bio from "./views/index.vue";

</script>

<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
      <Bio v-for="n in 9" :key="n" />
    </div>
  </div>
</template>


<style scoped>

</style>
