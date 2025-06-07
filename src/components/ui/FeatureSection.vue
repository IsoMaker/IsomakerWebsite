<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.2 }
  );
  
  const section = document.querySelector('#features');
  if (section) {
    observer.observe(section);
  }
});

const features = [
  {
    title: 'Intuitive Editor',
    description: 'Professional tile-based map editor with property inspectors, just like Blender.',
    icon: 'M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z',
    gradient: 'from-accentPrimary to-accentQuaternary'
  },
  {
    title: 'Modular System',
    description: 'Build complex scenes with reusable components and scripting support.',
    icon: 'M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM6 8v5h8V8H6zm10 5h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-4v5zm4-7a2 2 0 0 0-2-2h-4v3h4a2 2 0 0 0 2-2z',
    gradient: 'from-accentPrimary to-accentQuaternary'
  },
  {
    title: 'Raylib Rendering',
    description: 'High-performance 3D rendering with modern graphics pipeline.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    gradient: 'from-accentPrimary to-accentQuaternary'
  },
  {
    title: 'Export Games',
    description: 'Export your creations as standalone executable games for all platforms.',
    icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5 5-5M12 3v12',
    gradient: 'from-geometric-purple to-geometric-pink'
  },
  {
    title: 'Cross Platform',
    description: 'Native support for Windows, macOS, and Linux with unified codebase.',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    gradient: 'from-geometric-purple to-geometric-pink'
  },
  {
    title: 'Open Source',
    description: 'MIT licensed and community-driven. Contribute and customize freely.',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    gradient: 'from-geometric-purple to-geometric-pink'
  }
];
</script>

<template>
  <section id="features" class="py-16 md:py-32 bg-background relative overflow-hidden">
    <!-- Background geometric patterns -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-32 h-32 bg-accentPrimary transform rotate-45"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-accentSecondary transform -rotate-12"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-accentTertiary transform rotate-12"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <h2 
          :class="[
            'text-4xl md:text-6xl font-display font-bold text-textDark mb-6 transition-all duration-700',
            isVisible ? 'animate-slide-up' : 'opacity-0'
          ]"
        >
          Powerful Features
        </h2>
        <p 
          :class="[
            'text-lg md:text-xl text-textTertiary max-w-3xl mx-auto leading-relaxed transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.2s"
        >
          Everything you need to create stunning isometric worlds with professional-grade tools
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          :class="[
            'group bg-white p-8 rounded-3xl cursor-pointer shadow-geometric hover:shadow-isometric transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100',
            isVisible ? 'animate-scale-in' : 'opacity-0'
          ]"
          :style="`animation-delay: ${0.1 * index}s`"
        >
          <!-- Icon with gradient background -->
          <div class="relative mb-6">
            <div :class="`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`">
              <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="feature.icon"></path>
              </svg>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-textDark mb-3 group-hover:text-accentPrimary transition-colors duration-300">
            {{ feature.title }}
          </h3>
          <p class="text-textTertiary leading-relaxed group-hover:text-textDark transition-colors duration-300">
            {{ feature.description }}
          </p>
          
          <!-- Hover indicator -->
          <div class="mt-4 w-0 h-0.5 bg-gradient-to-r from-accentPrimary to-accentSecondary group-hover:w-12 transition-all duration-300"></div>
        </div>
      </div>
      
      <!-- Statistics section -->
      <div 
        :class="[
          'mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700',
          isVisible ? 'animate-fade-in' : 'opacity-0'
        ]"
        style="animation-delay: 0.8s"
      >
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-accentPrimary mb-2">100+</div>
          <div class="text-textTertiary">Built-in Assets</div>
        </div>
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-accentSecondary mb-2">3</div>
          <div class="text-textTertiary">Platforms</div>
        </div>
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-accentTertiary mb-2">MIT</div>
          <div class="text-textTertiary">License</div>
        </div>
        <div class="p-6">
          <div class="text-3xl md:text-4xl font-bold text-accentQuaternary mb-2">∞</div>
          <div class="text-textTertiary">Possibilities</div>
        </div>
      </div>
    </div>
  </section>
</template>