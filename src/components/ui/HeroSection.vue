<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isHovered = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

const navigateToDownload = () => {
  router.push('/downloads');
};

const navigateToLearnMore = () => {
  // Scroll to feature section
  document.querySelector('#features').scrollIntoView({
    behavior: 'smooth'
  });
};
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br transition-opacity duration-700"
      :class="isHovered ? 'from-primary to-secondary opacity-95' : 'from-primary to-secondary opacity-80'"
    ></div>
    
    <div class="container mx-auto px-6 py-24 md:py-32 relative z-10">
      <div class="flex flex-col items-center text-center">
        <div
          class="group cursor-pointer select-none mb-8"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >
          <h1
            :class="[
              'text-5xl md:text-7xl lg:text-9xl font-display font-bold transition-all duration-500',
              isHovered ? 'text-textPrimary scale-105' : 'text-transparent bg-gradient-to-r from-accentPrimary to-accentSecondary via-accentTertiary bg-clip-text'
            ]"
          >
            IsoMaker
          </h1>
          <h2
            class="text-xl md:text-2xl mt-4 font-light transition-all duration-500"
            :class="isHovered ? 'text-accentSecondary' : 'text-textSecondary'"
          >
            Create Beautiful Isometric Worlds
          </h2>
        </div>
        
        <div class="mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-6">
          <button
            @click="navigateToDownload"
            class="px-8 py-3 bg-accentPrimary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all font-bold shadow-md hover:shadow-lg"
          >
            Download Now
          </button>
          <button
            @click="navigateToLearnMore"
            class="px-8 py-3 border-2 border-accentSecondary text-accentSecondary rounded-lg hover:bg-accentSecondary hover:bg-opacity-10 transition-all font-bold"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>