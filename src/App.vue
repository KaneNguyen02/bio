<template>
  <div class="container mx-auto px-4 py-6">
    <div class="flex flex-col justify-center items-center pb-6">
      <div>
        <Avatar />
      </div>
      <div class="flex flex-col items-center mt-2 xl:mt-5">
        <div class="text-[#032D60] text-2xl font-bold">{{ info.name }}</div>
        <div class="w-[80%] text-center text-sm">{{ info.description }}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
      <Bio
        v-for="account in info.socialAccounts"
        :key="account.platform"
        :platform="account.platform"
        :icon="account.icon"
      />
    </div>
    <div class="flex flex-col items-center justify-center mt-6 xl:mt-52">
      <img class="size-10 xl:size-16" src="/ndc_logo_black.svg" alt="logo" />
      <pre class="">Design by Kane Nguyen</pre>
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

export interface ISocialAccount {
  platform: string;
  icon: string;
  link: string;
  username: string;
}

export interface IBio {
  name: string;
  avatar_link: string | null;
  description: string;
  link: string;
  socialAccounts: ISocialAccount[];
}
</script>

<style scoped></style>
