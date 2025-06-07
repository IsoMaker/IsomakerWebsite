<script setup>
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Team', path: '/team' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'Feedback', path: '/feedback' },
  { name: 'Donate', path: '/donate' }
];
</script>

<template>
  <nav class="bg-secondary text-textPrimary py-4 px-6 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-display font-bold flex items-center gap-2">
        <span class="text-accentPrimary">Iso</span><span>Maker</span>
      </router-link>
      
      <div class="hidden md:flex space-x-6">
        <router-link
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="hover:text-accentSecondary transition-colors duration-200"
        >
          {{ link.name }}
        </router-link>
      </div>
      
      <button class="md:hidden text-xl">
        <span>☰</span>
      </button>
    </div>
  </nav>
</template>