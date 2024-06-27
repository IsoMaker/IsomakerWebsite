<script setup>
import { ref } from 'vue';

const isHovered = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <div
      class="flex w-screen h-screen justify-center items-center transition-colors duration-300"
      :class="[isHovered ? 'bg-gradient-to-r from-[#FF218C] to-[#21B1FF] via-[#FFD800]' : 'bg-white']"
  >
    <div
        class="group px-8 py-4 select-none"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
    >
      <h1
          :class="[
          'text-9xl text-transparent bg-gradient-to-r from-[#FF218C] to-[#21B1FF] via-[#FFD800] inline-block bg-clip-text transition-opacity duration-300',
          isHovered ? 'hidden' : 'block'
        ]"
      >
        IsoMaker *
      </h1>
      <h1
          :class="[
          'text-9xl text-white transition-opacity duration-300',
          isHovered ? 'block' : 'hidden'
        ]"
      >
        Make Your World
      </h1>
    </div>
  </div>
</template>

<style scoped>
</style>
