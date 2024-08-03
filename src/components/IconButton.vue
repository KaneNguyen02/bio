<template lang="html">
  <div class="iconWrapper">
    <img :src="resolvedPath" alt="icon" class="icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "IconButton",
  props: {
    path: {
      type: String as PropType<string>,
      required: true,
    },
  },
  data() {
    return {
      resolvedPath: ''
    }
  },
  mounted() {
    import(/* @vite-ignore */ `${this.path}`).then(module => {
      this.resolvedPath = module.default;
    }).catch(error => {
      console.error('Error loading image:', error);
    });
  }
});
</script>

<style lang="css">
/* From Uiverse.io by ashish-yadv */ 
.iconWrapper {
  display: grid;
  place-items: center;
  background: #e3edf7;
  padding: 1.4em;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
	      -6px -6px 10px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0);
  cursor: pointer;
  transition: transform 0.5s;
}

.iconWrapper:hover {
  box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
	      inset -4px -4px 6px -1px rgba(255,255,255,0.7),
	      -0.5px -0.5px 0px rgba(255,255,255,1),
	      0.5px 0.5px 0px rgba(0,0,0,0.15),
	      0px 12px 10px -10px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  transform: translateY(0.5em);
}

.iconWrapper img {
  transition: transform 0.5s;
}

.iconWrapper:hover img {
  transform: scale(0.9) rotate(360deg);
  fill: #333333;
}



</style>
