<script setup lang="ts">
import { computed } from "vue";

import IconButton from "../../components/IconButton.vue";
const props = defineProps<{
  platform: string;
  icon: string;
}>();

const iconPath = computed(() => `../assets/${props.icon}`);
</script>

<template>

    <div
      class="flex items-center min-h-40s h-auto rounded-xl p-2 xl:p-4 gap-3 xl:gap-5 shadow-md drop-shadow-xl hover:shadow-xl"
    >
      <div class="w-2/5"><IconButton :path="iconPath" /></div>
      <div class="flex-grow">
        <div class="text-[#032D60] xl:text-xl font-bold">{{ platform }}</div>
        <div class="text-sm lg:text-lg">
          Connect, federate, and harmonize data from any source and build AI
          apps
        </div>
      </div>
    </div>
</template>
