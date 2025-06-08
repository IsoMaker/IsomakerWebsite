<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
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
    { threshold: 0.3 }
  );
  
  const section = document.querySelector('#cta');
  if (section) {
    observer.observe(section);
  }
});

const navigateToDownload = () => {
  router.push('/downloads');
};

const navigateToTeam = () => {
  router.push('/team');
};

const navigateToFeedback = () => {
  router.push('/feedback');
};
</script>

<template>
  <section id="cta" class="py-24 md:py-32 bg-gradient-dark relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-10 left-10 w-32 h-32 bg-accentPrimary opacity-10 transform rotate-45 animate-float"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-accentSecondary opacity-15 transform -rotate-12 animate-float-delayed"></div>
      <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-accentTertiary opacity-20 transform rotate-12 animate-pulse-slow"></div>
    </div>
    
    <div class="container mx-auto px-6 text-center relative z-10">
      <div 
        :class="[
          'max-w-4xl mx-auto transition-all duration-700',
          isVisible ? 'animate-scale-in' : 'opacity-0'
        ]"
      >
        <h2 class="text-4xl md:text-6xl font-display font-bold text-textDark mb-6 leading-tight">
          Ready to Build Your 
          <span class="text-4xl md:text-6xl font-display font-bold text-textDark mb-6 leading-tight">
            Isometric Universe?
          </span>
        </h2>
        
        <p 
          :class="[
            'text-lg md:text-xl text-textTertiary max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.2s"
        >
          Join thousands of creators using IsoMaker to bring their vision to life. 
          Start creating professional isometric worlds today.
        </p>
        
        <div 
          :class="[
            'flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700',
            isVisible ? 'animate-slide-up' : 'opacity-0'
          ]"
          style="animation-delay: 0.4s"
        >
          <button
            @click="navigateToDownload"
            class="group px-10 py-4 bg-accentPrimary cursor-pointer text-textPrimary rounded-2xl font-bold shadow-isometric hover:shadow-isometric-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span class="flex items-center gap-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Now
              <span class="text-sm opacity-75">Free</span>
            </span>
          </button>
          
          <button
            @click="navigateToTeam"
            class="group px-8 py-4 border-2 border-accentSecondary cursor-pointer text-accentSecondary rounded-2xl font-bold hover:bg-accentSecondary hover:text-textPrimary transition-all duration-300 transform hover:scale-105"
          >
            <span class="flex items-center gap-2">
              Meet the Team
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
        </div>
        
        <!-- Additional CTA options -->
        <div 
          :class="[
            'mt-12 pt-8 border-t border-textSecondary border-opacity-20 transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.6s"
        >
          <p class="text-textTertiary mb-6">Want to contribute or have feedback?</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Tomi-Tom/IsoMaker" 
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 text-textTertiary hover:text-accentPrimary transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Contribute on GitHub
            </a>
            <button
              @click="navigateToFeedback"
              class="inline-flex items-center gap-2 px-6 py-3 cursor-pointer text-textTertiary hover:text-accentPrimary transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Share Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>