<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToDownload = () => {
  router.push('/downloads');
};
</script>

<template>
  <section class="py-16 bg-secondary">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-display font-bold text-textPrimary mb-6">Ready to Create?</h2>
      <p class="text-textSecondary max-w-2xl mx-auto mb-8">Download IsoMaker and start building your own isometric worlds today.</p>
      
      <button
        @click="navigateToDownload"
        class="px-8 py-3 bg-accentSecondary text-primary rounded-lg hover:bg-opacity-90 transition-all font-bold shadow-md hover:shadow-lg"
      >
        Get Started
      </button>
    </div>
  </section>
</template>