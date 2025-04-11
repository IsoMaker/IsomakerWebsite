<script setup>
const features = [
  {
    title: 'Intuitive Editor',
    description: 'Drag and drop interface makes creating isometric worlds simple and fun.',
    icon: '⛏' // Pickaxe
  },
  {
    title: 'Custom Tiles',
    description: 'Import your own assets or use our extensive library of pre-made tiles.',
    icon: '⯀' // Grid
  },
  {
    title: 'Animation Support',
    description: 'Bring your world to life with animated characters and objects.',
    icon: '⏵' // Play
  },
  {
    title: 'Export Options',
    description: 'Export your creations for games, websites, or images.',
    icon: '⮋' // Export
  },
  {
    title: 'Cross Platform',
    description: 'Available for Windows, macOS, and Linux.',
    icon: '⚙' // Gear
  },
  {
    title: 'Open Source',
    description: 'Free and open source. Contribute to our growing community.',
    icon: '⌥' // Alt
  }
];
</script>

<template>
  <section id="features" class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Powerful Features</h2>
        <p class="text-textSecondary max-w-2xl mx-auto">Everything you need to create stunning isometric environments</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-white p-6 rounded-xl shadow-soft hover:shadow-md transition-shadow duration-300"
        >
          <div class="text-3xl mb-4 text-accentPrimary">{{ feature.icon }}</div>
          <h3 class="text-xl font-bold text-primary mb-2">{{ feature.title }}</h3>
          <p class="text-textSecondary">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>