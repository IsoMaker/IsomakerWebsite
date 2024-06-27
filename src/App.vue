<script setup>
import { ref } from 'vue';

const isHovered = ref(false);

const toggleHover = () => {
  isHovered.value = !isHovered.value;
};
</script>

<template>
  <div
      :class="['flex w-screen h-screen justify-center items-center', !isHovered ? 'bg-white' : 'bg-gradient-to-r from-[#FF218C] to-[#21B1FF] via-[#FFD800] ']"

  >
    <div
        :class="['group px-8 py-4 select-none']"
        @mouseover="toggleHover"
        @mouseleave="toggleHover"
    >
      <h1 :class="[!isHovered ? 'block' : 'hidden', 'text-9xl text-transparent bg-gradient-to-r from-[#FF218C] to-[#21B1FF] via-[#FFD800] inline-block bg-clip-text ']">IsoMaker *</h1>
      <h1 :class="[!isHovered ? 'hidden' : 'block', 'text-9xl text-white']">Make Your World</h1>

    </div>
  </div>
</template>

<style scoped>
</style>
