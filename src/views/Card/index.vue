<script setup lang="ts">
import { computed } from "vue";
import IconButton, { SvgModule } from "../../components/IconButton.vue";

const props = defineProps<{
  platform: string;
  icon: string;
  link: string;
  description: string;
}>();

const icons = import.meta.glob<SvgModule>("../../assets/*.svg", {
  eager: true,
});

const iconPath = computed(() => {
  const iconName = props.icon.replace(/^.*[\\\/]/, ""); // Lấy tên tệp từ đường dẫn
  return icons[`../../assets/${iconName}`]?.default || "";
});

const handleRedirect = () => {
  window.open(props.link, "_blank");
};
</script>

<template>
  <div
    @click="handleRedirect"
    class="iconWrapper flex min-h-40s h-auto rounded-xl p-2 xl:p-4 gap-3 xl:gap-5 shadow-md drop-shadow-xl hover:shadow-xl"
  >
    <div class="w-1/4 flex items-center"><IconButton :path="iconPath" /></div>
    <div class="flex-grow w-3/4">
      <div class="text-[#032D60] font-bold">{{ platform }}</div>
      <div class="text-sm lg:text-md">
        {{ description }}
      </div>
    </div>
  </div>
</template>
