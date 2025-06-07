<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const team = [
  {
    name: 'Tomi-Tom',
    role: 'Core Developer & UI/Web Engineer',
    github: 'https://github.com/Tomi-Tom',
    avatar: 'https://github.com/Tomi-Tom.png',
    bio: 'Handles the overall architecture of IsoMaker while designing the full UI of the editor and building the entire web platform. Focused on creating intuitive, responsive tools for creators.',
    skills: ['C++', 'OpenGL', 'Raylib', 'RayGUI', 'Vue', 'Game Architecture'],
    gradient: 'from-accentPrimary to-accentSecondary',
    social: {
      github: 'https://github.com/Tomi-Tom',
      linkedin: '#',
    }
  },
  {
    name: 'Steci',
    role: 'Core Developer & Build Systems Engineer',
    github: 'https://github.com/Steci',
    avatar: 'https://github.com/Steci.png',
    bio: 'Focuses on how IsoMaker compiles games, from build pipelines to output formats. Ensures reliable and flexible deployment of projects made with the engine.',
    skills: ['C++', 'CMake', 'Compiler Design', 'Build Systems', 'Deployment'],
    gradient: 'from-accentSecondary to-accentTertiary',
    social: {
      github: 'https://github.com/Steci',
      linkedin: '#',
    }
  },
  {
    name: 'Criticat02',
    role: 'Core Developer & 3D Gameplay Systems',
    github: 'https://github.com/Criticat02',
    avatar: 'https://github.com/Criticat02.png',
    bio: 'Works on IsoMaker’s 3D system architecture and gameplay logic. Designs how users interact with the editor and what the engine allows them to build.',
    skills: ['C++', '3D Systems', 'Player Interaction', 'Editor Tools', 'Optimization'],
    gradient: 'from-accentTertiary to-accentQuaternary',
    social: {
      github: 'https://github.com/Criticat02',
      linkedin: '#',
    }
  },
  {
    name: 'AetherStollMetz',
    role: 'Core Developer & 3D Gameplay Systems',
    github: 'https://github.com/AetherStollMetz',
    avatar: 'https://github.com/AetherStollMetz.png',
    bio: 'Collaborates on 3D systems and editor functionality. Enhances user capabilities within the editor and expands IsoMaker’s in-engine feature set.',
    skills: ['C++', '3D Logic', 'Engine Features', 'Editor UX', 'Debugging'],
    gradient: 'from-accentQuaternary to-accentPrimary',
    social: {
      github: 'https://github.com/Aether',
      linkedin: '#',
    }
  },
  {
    name: 'You?',
    role: 'Join Our Team',
    github: 'https://github.com/Tomi-Tom/IsoMaker',
    avatar: '/api/placeholder/200/200',
    bio: 'We\'re always looking for passionate developers to join our open-source community. Contribute to IsoMaker and help shape the future of isometric game development.',
    skills: ['Open Source', 'Community', 'Collaboration', 'Innovation', 'Creativity'],
    gradient: 'from-geometric-purple to-geometric-pink',
    social: {
      github: 'https://github.com/Tomi-Tom/IsoMaker',
      linkedin: '#',
      twitter: '#'
    },
    isJoinCard: true
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
          Meet Our Team
        </h1>
        <p 
          :class="[
            'text-lg md:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.2s"
        >
          The passionate developers and creators behind IsoMaker. 
          United by our vision to democratize isometric game development.
        </p>
      </div>
    </div>

    <!-- Team cards section -->
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div 
          v-for="(member, index) in team" 
          :key="member.name"
          :class="[
            'group bg-white rounded-3xl shadow-geometric hover:shadow-isometric transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 overflow-hidden',
            isVisible ? 'animate-float' : 'opacity-0'
          ]"
          :style="`animation-delay: ${0.1 * index}s`"
        >
          <!-- Profile header -->
          <div class="relative p-8 text-center">
            <!-- Gradient background -->
            <div :class="`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`"></div>
            
            <!-- Avatar -->
            <div class="relative mb-6">
              <div class="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-8 transition-all duration-300">
                <img
                  :src="member.isJoinCard ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0Y0RjYiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4NSIgcj0iMzAiIGZpbGw9IiM5Q0EzQUYiLz48cGF0aCBkPSJNNjAgMTYwYzAtMjIuMDkgMTcuOTEtNDAgNDAtNDBzNDAgMTcuOTEgNDAgNDB2MjBINjB2LTIweiIgZmlsbD0iIzlDQTNBRiIvPjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSI0MCIgZmlsbD0iIzZCNzI4MCI+KzwvdGV4dD48L3N2Zz4=' : member.avatar"
                  :alt="`${member.name} profile`"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <!-- Floating animation indicator -->
              <div 
                v-if="!member.isJoinCard"
                class="absolute -top-1 -right-1 w-6 h-6 bg-accentQuaternary rounded-full animate-pulse"
              ></div>
            </div>
            
            <!-- Name and role -->
            <h3 class="text-xl font-bold text-textDark mb-2 group-hover:text-accentPrimary transition-colors duration-300">
              {{ member.name }}
            </h3>
            <p class="text-textTertiary text-sm font-medium mb-4">{{ member.role }}</p>
            
            <!-- Social links -->
            <div class="flex justify-center gap-3">
              <a 
                :href="member.social.github" 
                target="_blank"
                class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-accentPrimary hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed bios section -->
      <div class="space-y-16">
        <div 
          v-for="(member, index) in team.filter(m => !m.isJoinCard)" 
          :key="`bio-${member.name}`"
          :class="[
            'flex flex-col lg:flex-row gap-8 lg:gap-12 items-center transition-all duration-700 shadow-geometric hover:shadow-isometric rounded-2xl p-5',
            index % 2 === 1 ? 'lg:flex-row-reverse' : '',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          :style="`animation-delay: ${0.8 + (0.2 * index)}s`"
        >
          <!-- Profile image -->
          <div class="flex-shrink-0">
            <div class="relative">
              <div :class="`w-48 h-48 rounded-3xl bg-gradient-to-br ${member.gradient} p-1 shadow-lg`">
                <div class="w-full h-full rounded-3xl overflow-hidden bg-white">
                  <img
                    :src="member.avatar"
                    :alt="`${member.name} detailed profile`"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <!-- Decorative elements -->
              <div :class="`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-xl opacity-60 animate-float`"></div>
              <div :class="`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br ${member.gradient} rounded-lg opacity-40 animate-float-delayed`"></div>
            </div>
          </div>
          
          <!-- Bio content -->
          <div class="flex-1 text-center lg:text-left">
            <h3 class="text-3xl font-bold text-textDark mb-2">{{ member.name }}</h3>
            <p class="text-lg text-accentPrimary font-semibold mb-6">{{ member.role }}</p>
            
            <p class="text-textTertiary leading-relaxed text-lg mb-8 max-w-2xl">
              {{ member.bio }}
            </p>
            
            <!-- Skills -->
            <div class="mb-8">
              <h4 class="text-sm font-semibold text-textDark mb-3 uppercase tracking-wide">Expertise</h4>
              <div class="flex flex-wrap justify-center lg:justify-start gap-2">
                <span 
                  v-for="skill in member.skills"
                  :key="skill"
                  :class="`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${member.gradient} text-white shadow-sm`"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <!-- Contact -->
            <div class="flex justify-center lg:justify-start gap-4">
              <a 
                :href="member.social.github" 
                target="_blank"
                class="inline-flex items-center gap-2 px-6 py-3 bg-textDark text-white rounded-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Join us section -->
      <div 
        :class="[
          'mt-24 text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-soft transition-all duration-700',
          isVisible ? 'animate-scale-in' : 'opacity-0'
        ]"
        style="animation-delay: 1.4s"
      >
        <h3 class="text-3xl font-bold text-textDark mb-6">Join Our Community</h3>
        <p class="text-lg text-textTertiary max-w-2xl mx-auto mb-8 leading-relaxed">
          IsoMaker is an open-source project driven by passionate developers. 
          Whether you're a C++ expert, UI designer, or just getting started - there's a place for you in our community.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://github.com/Tomi-Tom/IsoMaker" 
            target="_blank"
            class="inline-flex items-center gap-2 px-8 py-4 bg-accentPrimary text-white rounded-2xl font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-isometric hover:shadow-isometric-hover"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Contribute on GitHub
          </a>
          <button 
            @click="$router.push('/feedback')"
            class="inline-flex items-center gap-2 px-8 py-4 border-2 border-accentSecondary text-accentSecondary rounded-2xl font-bold hover:bg-accentSecondary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Share Ideas
          </button>
        </div>
      </div>
    </div>
  </div>
</template>