<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const platforms = [
  {
    name: 'Windows',
    icon: 'M0 0v11.25l9.75 1.406V0H0zm10.875 0v12.656L20 14.438V0h-9.125zM0 12.844V24h9.75v-9.844L0 12.844zm10.875 1.594V24H20V14.438l-9.125-1.594z',
    gradient: 'from-accentQuaternary to-accentPrimary',
    description: 'Compatible with Windows 10/11',
    versions: [
      { name: 'IsoMaker v1.2.0', size: '45.2 MB', date: '2024-12-15', download: '#' },
      { name: 'IsoMaker v1.1.5', size: '44.8 MB', date: '2024-11-28', download: '#' },
      { name: 'IsoMaker v1.0.0', size: '42.1 MB', date: '2024-10-15', download: '#' }
    ]
  },
  {
    name: 'macOS',
    icon: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z',
    gradient: 'from-accentQuaternary to-accentPrimary',
    description: 'macOS 11.0+ (Apple Silicon & Intel)',
    versions: [
      { name: 'IsoMaker v1.2.0', size: '52.7 MB', date: '2024-12-15', download: '#' },
      { name: 'IsoMaker v1.1.5', size: '51.9 MB', date: '2024-11-28', download: '#' },
      { name: 'IsoMaker v1.0.0', size: '49.3 MB', date: '2024-10-15', download: '#' }
    ]
  },
  {
    name: 'Linux',
    icon: 'M12.504 0C5.625 0 0.016 5.609 0.016 12.504c0 6.875 5.609 12.496 12.488 12.496 6.875 0 12.496-5.621 12.496-12.496C24.999 5.609 19.379 0 12.504 0zM12 2.02c1.74 0 3.36.56 4.68 1.53-.99.89-2.32 1.48-3.75 1.72-.27-.61-.67-1.2-1.21-1.72-.54-.52-1.17-.95-1.87-1.26C10.64 2.12 11.3 2.02 12 2.02zm-2.5.8c.44 0 .85.13 1.2.35.66.42 1.18.99 1.55 1.66-1.09.18-2.2.18-3.29 0 .37-.67.89-1.24 1.55-1.66.35-.22.76-.35 1.2-.35zm5.25 2.35c1.09-.18 2.09-.56 2.94-1.12 1.7 1.38 2.78 3.45 2.78 5.77 0 .94-.18 1.84-.49 2.68-.72-.18-1.47-.29-2.23-.29-.99 0-1.94.16-2.83.44-.18-.72-.45-1.4-.83-2.02.94-.89 1.53-2.12 1.53-3.49 0-.56-.09-1.1-.26-1.6.13-.13.25-.25.39-.37zm-10.5 0c.14.12.26.24.39.37-.17.5-.26 1.04-.26 1.6 0 1.37.59 2.6 1.53 3.49-.38.62-.65 1.3-.83 2.02-.89-.28-1.84-.44-2.83-.44-.76 0-1.51.11-2.23.29-.31-.84-.49-1.74-.49-2.68 0-2.32 1.08-4.39 2.78-5.77.85.56 1.85.94 2.94 1.12z',
    gradient: 'from-accentQuaternary to-accentPrimary',
    description: 'Ubuntu 20.04+, Fedora 34+, Arch Linux',
    versions: [
      { name: 'IsoMaker v1.2.0', size: '38.4 MB', date: '2024-12-15', download: '#' },
      { name: 'IsoMaker v1.1.5', size: '37.9 MB', date: '2024-11-28', download: '#' },
      { name: 'IsoMaker v1.0.0', size: '36.1 MB', date: '2024-10-15', download: '#' }
    ]
  }
];
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Hero section -->
    <div class="bg-gradient-dark py-24">
      <div class="container mx-auto px-6 text-center">
        <h1 
          :class="[
            'text-4xl md:text-6xl font-display font-bold text-textDark hover:text-accentPrimary mb-6 transition-all duration-700',
            isVisible ? 'animate-slide-up' : 'opacity-0'
          ]"
        >
          Download IsoMaker
        </h1>
        <p 
          :class="[
            'text-lg md:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.2s"
        >
          Get the latest version of IsoMaker for your platform. 
          Professional isometric game development, completely free.
        </p>
        
        <!-- Quick stats -->
        <div 
          :class="[
            'mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700',
            isVisible ? 'animate-scale-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.4s"
        >
          <div class="text-center">
            <div class="text-2xl font-bold text-accentPrimary">v1.2.0</div>
            <div class="text-textSecondary">Latest Version</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accentSecondary">MIT</div>
            <div class="text-textSecondary">Open Source</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-accentTertiary">3</div>
            <div class="text-textSecondary">Platforms</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Download platforms -->
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div 
          v-for="(platform, index) in platforms" 
          :key="platform.name"
          :class="[
            'bg-white rounded-3xl shadow-geometric hover:shadow-isometric transition-all duration-500 transform hover:-translate-y-2 border border-gray-100',
            isVisible ? 'animate-slide-up' : 'opacity-0'
          ]"
          :style="`animation-delay: ${0.2 + (0.1 * index)}s`"
        >
          <!-- Platform header -->
          <div class="p-8 text-center border-b border-gray-100">
            <div :class="`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${platform.gradient} p-4 shadow-lg`">
              <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="platform.icon"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-textDark mb-2">{{ platform.name }}</h3>
            <p class="text-textTertiary">{{ platform.description }}</p>
          </div>
          
          <!-- Version list -->
          <div class="p-6">
            <div class="space-y-4">
              <div 
                v-for="(version, vIndex) in platform.versions"
                :key="version.name"
                class="group flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-1">
                    <h4 class="font-semibold text-textDark">{{ version.name }}</h4>
                    <span 
                      v-if="vIndex === 0" 
                      class="px-2 py-1 text-xs font-bold text-textPrimary bg-accentPrimary bg-opacity-10 rounded-full"
                    >
                      Latest
                    </span>
                  </div>
                  <div class="text-sm text-textTertiary">
                    {{ version.size }} • {{ version.date }}
                  </div>
                </div>
                <button 
                  class="ml-4 px-4 py-2 bg-accentPrimary text-white rounded-xl cursor-pointer hover:scale-110 hover:bg-opacity-90 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
                  @click="() => window.open(version.download, '_blank')"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Installation instructions -->
      <div 
        :class="[
          'mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-soft transition-all duration-700',
          isVisible ? 'animate-fade-in' : 'opacity-0'
        ]"
        style="animation-delay: 0.8s"
      >
        <h3 class="text-2xl font-bold text-textDark mb-6 text-center">Installation Instructions</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-12 h-12 mx-auto mb-4 bg-geometric-blue rounded-xl flex items-center justify-center">
              <span class="text-white font-bold">1</span>
            </div>
            <h4 class="font-semibold text-textDark mb-2">Download</h4>
            <p class="text-textTertiary text-sm">Choose your platform and download the latest version above</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 mx-auto mb-4 bg-geometric-purple rounded-xl flex items-center justify-center">
              <span class="text-white font-bold">2</span>
            </div>
            <h4 class="font-semibold text-textDark mb-2">Install</h4>
            <p class="text-textTertiary text-sm">Run the installer and follow the setup wizard</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 mx-auto mb-4 bg-geometric-green rounded-xl flex items-center justify-center">
              <span class="text-white font-bold">3</span>
            </div>
            <h4 class="font-semibold text-textDark mb-2">Create</h4>
            <p class="text-textTertiary text-sm">Launch IsoMaker and start building your isometric worlds</p>
          </div>
        </div>
        
        <!-- System requirements -->
        <div class="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
          <h4 class="font-semibold text-textDark mb-4">System Requirements</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <div class="font-medium text-textDark mb-2">Minimum</div>
              <ul class="text-textTertiary space-y-1">
                <li>• 4GB RAM</li>
                <li>• 1GB free storage</li>
                <li>• OpenGL 3.3 support</li>
                <li>• 1366x768 resolution</li>
              </ul>
            </div>
            <div>
              <div class="font-medium text-textDark mb-2">Recommended</div>
              <ul class="text-textTertiary space-y-1">
                <li>• 8GB+ RAM</li>
                <li>• 2GB+ free storage</li>
                <li>• Dedicated GPU</li>
                <li>• 1920x1080+ resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>