<template>
  <div
    class="container relative desktop:max-w-[82rem] mx-auto px-4 xl:px-28 desktop:px-0 3xl:p-4 py-6"
  >
    <div class="flex flex-col justify-center items-center pb-6">
      <div>
        <Avatar />
      </div>
      <div class="flex flex-col items-center mt-2 xl:mt-5">
        <div class="text-[#032D60] text-2xl font-bold">{{ info.name }}</div>
        <div class="w-[80%] text-center text-sm">{{ info.intro }}</div>
      </div>
    </div>

    <!-- Audio icon speaker -->
    <div class="fixed top-2 right-2 z-50 lg:right-4 lg:top-4">
      <input type="checkbox" id="checkboxInput" @change="toggleAudio" />
      <label for="checkboxInput" class="toggleSwitch size-10 lg:size-12">
        <div class="speaker">
          <img class="size-4" src="./assets/speaker.svg" alt="speaker" />
        </div>

        <div class="mute-speaker">
          <img class="size-4" src="./assets/muteSpeaker.svg" alt="speaker" />
        </div>
      </label>
    </div>

    <audio id="myAudio" loop>
      <source src="./assets/music/fakeLove.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
      <Card
        v-for="account in info.socialAccounts"
        :key="account.platform"
        :platform="account.platform"
        :icon="account.icon"
        :link="account.link"
        :description="account.description"
      />
    </div>
    <div
      class="flex flex-col items-center justify-center mt-6 md:mt-52 xl:mt-12 2xl:mt-52 desktop:mt-52 "
    >
      <img class="size-10 xl:size-16" src="/ndc_logo_black.svg" alt="logo" />
      <pre class="">Design by Kane Nguyen</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "./views/Card/index.vue";
import Avatar from "./components/Avatar.vue";
import bioData from "./bioData.json";

// Reactive data
const info = ref(bioData.bio);

const toggleAudio = (event: Event) => {
  const checkbox = event.target as HTMLInputElement;
  const audio = document.getElementById("myAudio") as HTMLAudioElement;

  if (checkbox.checked) {
    audio.play();
  } else {
    audio.pause();
  }
};

export interface ISocialAccount {
  platform: string;
  icon: string;
  link: string;
  description: string;
}

export interface IBio {
  name: string;
  avatarUrl?: string | null;
  intro: string;
  link: string;
  socialAccounts: ISocialAccount[];
}
</script>

<style scoped>
/* From Uiverse.io by vinodjangid07 */
.toggleSwitch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 39, 39);
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  overflow: hidden;
}

/* Hide default HTML checkbox */
#checkboxInput {
  display: none;
}

.bell {
  width: 18px;
}

.bell path {
  fill: white;
}

.speaker {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition-duration: 0.3s;
}

.speaker svg {
  width: 18px;
}

.mute-speaker {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 3;
  transition-duration: 0.3s;
}

.mute-speaker svg {
  width: 18px;
}

#checkboxInput:checked + .toggleSwitch .speaker {
  opacity: 0;
  transition-duration: 0.3s;
}

#checkboxInput:checked + .toggleSwitch .mute-speaker {
  opacity: 1;
  transition-duration: 0.3s;
}

#checkboxInput:active + .toggleSwitch {
  transform: scale(0.7);
}

#checkboxInput:hover + .toggleSwitch {
  background-color: rgb(61, 61, 61);
}
</style>
