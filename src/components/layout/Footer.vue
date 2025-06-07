<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-secondary text-textSecondary py-8 px-6">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <div class="text-xl font-display font-bold mb-2">
            <span class="text-accentPrimary">Iso</span><span class="text-textPrimary">Maker</span>
          </div>
          <p class="text-sm">Create isometric worlds with ease</p>
        </div>
        
        <div class="flex space-x-4 mb-4 md:mb-0">
          <a href="#" class="hover:text-accentPrimary transition-colors">GitHub</a>
          <a href="#" class="hover:text-accentPrimary transition-colors">Discord</a>
          <a href="#" class="hover:text-accentPrimary transition-colors">Itch.io</a>
          <a href="#" class="hover:text-accentPrimary transition-colors">Bluesky</a>
          <a href="#" class="hover:text-accentPrimary transition-colors">Mastodon</a>
          
        </div>
        
        <div class="text-sm">
          <p>© {{ currentYear }} IsoMaker Team</p>
        </div>
      </div>
    </div>
  </footer>
</template>