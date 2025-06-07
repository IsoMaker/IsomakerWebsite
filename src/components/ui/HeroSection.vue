<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isHovered = ref(false);
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

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
  document.querySelector('#features').scrollIntoView({
    behavior: 'smooth'
  });
};
</script>

<template>
  <section class="relative overflow-hidden min-h-screen flex items-center">
    <!-- Animated geometric background -->
    <div class="absolute inset-0 bg-gradient-dark"></div>
    
    <!-- Floating geometric shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-16 h-16 bg-geometric-orange opacity-20 transform rotate-45 animate-float"></div>
      <div class="absolute top-40 right-20 w-12 h-12 bg-geometric-pink opacity-30 transform rotate-12 animate-float-delayed"></div>
      <div class="absolute bottom-32 left-20 w-20 h-20 bg-geometric-blue opacity-15 transform -rotate-12 animate-float"></div>
      <div class="absolute bottom-20 right-16 w-14 h-14 bg-geometric-green opacity-25 transform rotate-45 animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/4 w-8 h-8 bg-geometric-purple opacity-40 transform rotate-12 animate-pulse-slow"></div>
    </div>
    
    <div class="container mx-auto px-6 py-24 md:py-32 relative z-10">
      <div class="flex flex-col items-center text-center">
        <div
          class="group cursor-pointer select-none mb-8"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >
          <h1
            :class="[
              'text-5xl md:text-7xl lg:text-9xl font-display font-bold transition-all duration-700',
              isVisible ? 'animate-slide-up' : 'opacity-100',
              isHovered ? 'text-accentPrimary scale-105 drop-shadow-glow' : 'text-accentPrimary bg-gradient-isometric bg-clip-text'
            ]"
          >
            IsoMaker
          </h1>
          <h2
            :class="[
              'text-xl md:text-2xl mt-4 font-light transition-all duration-700',
              isVisible ? 'animate-fade-in' : 'opacity-0',
              isHovered ? 'text-accentTertiary' : 'text-textSecondary'
            ]"
            style="animation-delay: 0.3s"
          >
            Create Beautiful Isometric Worlds
          </h2>
          <p
            :class="[
              'text-base md:text-lg mt-6 max-w-2xl text-textTertiary leading-relaxed transition-all duration-700',
              isVisible ? 'animate-fade-in' : 'opacity-0'
            ]"
            style="animation-delay: 0.6s"
          >
            A powerful 3D isometric game engine inspired by RPG Maker and Blender. 
            Build immersive worlds with professional tools and export standalone games.
          </p>
        </div>
        
        <div 
          :class="[
            'mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-6 transition-all duration-700',
            isVisible ? 'animate-scale-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.9s"
        >
          <button
            @click="navigateToDownload"
            class="group px-8 py-4 cursor-pointer bg-accentPrimary text-textPrimary rounded-2xl font-bold shadow-isometric hover:shadow-isometric-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span class="flex items-center gap-2">
              Download Now
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </span>
          </button>
          <button
            @click="navigateToLearnMore"
            class="group px-8 py-4 border-2 cursor-pointer border-accentSecondary text-accentSecondary rounded-2xl font-bold hover:bg-accentSecondary hover:text-textPrimary transition-all duration-300 transform hover:scale-105"
          >
            <span class="flex items-center gap-2">
              Learn More
              <svg class="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
        </div>

        <!-- Scroll indicator -->
        <div 
          :class="[
            'mt-16 animate-bounce-subtle transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 1.2s"
        >
          <svg class="w-6 h-6 text-textSecondary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>