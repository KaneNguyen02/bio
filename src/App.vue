<template>
  <div class="container mx-auto px-4">
    <div class="flex justify-center">
      <Avatar />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
      <Bio
        v-for="account in info.socialAccounts"
        :key="account.platform"
        :platform="account.platform"
        :icon="account.icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Bio from "./views/Bio/index.vue";
import Avatar from "./components/Avatar.vue";
import bioData from "./bioData.json";

// Reactive data
const info = ref(bioData.bio);

console.log(info.value.socialAccounts);
</script>

<style scoped></style>
