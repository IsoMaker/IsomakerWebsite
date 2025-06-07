<script setup>
import emailjs from 'emailjs-com';
import { ref, onMounted } from 'vue';

emailjs.init('GZ1rwrbcosnhg0vWM');

const isVisible = ref(false);
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const submitted = ref(false);
const submitting = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const submitForm = async () => {
  submitting.value = true;

  try {
    if (!name.value || !email.value || !subject.value || !message.value) {
      alert("Tous les champs sont requis.");
      return;
    }

    await emailjs.send('service_5z3ejb6', 'template_jw1cvtw', {
      from_name: name.value,
      from_email: email.value,
      subject: subject.value,
      message: message.value,
    });

    console.log('Form submitted:', {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });

    submitted.value = true;

    setTimeout(() => {
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
      submitted.value = false;
    }, 3000);
    
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Erreur lors de l’envoi. Réessaie plus tard.');
  } finally {
    submitting.value = false;
  }
};


const feedbackTypes = [
  { value: 'bug', label: 'Bug Report', icon: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' },
  { value: 'feature', label: 'Feature Request', icon: 'M12 4.5v15m7.5-7.5h-15' },
  { value: 'general', label: 'General Feedback', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { value: 'collaboration', label: 'Collaboration', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
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
          We'd Love Your Feedback
        </h1>
        <p 
          :class="[
            'text-lg md:text-xl text-textTertiary max-w-3xl mx-auto leading-relaxed transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.2s"
        >
          Your ideas and suggestions help us build a better IsoMaker. 
          Share your thoughts, report bugs, or propose new features.
        </p>
      </div>
    </div>

    <!-- Contact form section -->
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Quick contact options -->
        <div 
          :class="[
            'grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 transition-all duration-700',
            isVisible ? 'animate-scale-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.4s"
        >
          <div 
            v-for="(type, index) in feedbackTypes"
            :key="type.value"
            class="bg-white rounded-2xl p-6 text-center shadow-geometric hover:shadow-isometric transition-all duration-300 transform hover:-translate-y-1"
          >
            <div :class="`w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-accentPrimary to-accentSecondary rounded-xl flex items-center justify-center`">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="type.icon"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-textDark">{{ type.label }}</h3>
          </div>
        </div>

        <!-- Main contact form -->
        <div 
          :class="[
            'bg-white rounded-3xl shadow-geometric p-8 md:p-12 transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.6s"
        >
          <form @submit.prevent="submitForm" class="space-y-8">
            <!-- Form header -->
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-textDark mb-4">Send us a Message</h2>
              <p class="text-textTertiary">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <!-- Name and Email row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="name" class="block text-textDark font-semibold">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="name" 
                  class="w-full p-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accentPrimary transition-colors duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div class="space-y-2">
                <label for="email" class="block text-textDark font-semibold">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="email" 
                  class="w-full p-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accentPrimary transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <!-- Subject -->
            <div class="space-y-2">
              <label for="subject" class="block text-textDark font-semibold">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                v-model="subject" 
                class="w-full p-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accentPrimary transition-colors duration-300"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <!-- Message -->
            <div class="space-y-2">
              <label for="message" class="block text-textDark font-semibold">Message *</label>
              <textarea 
                id="message" 
                v-model="message" 
                rows="6"
                class="w-full p-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accentPrimary transition-colors duration-300 resize-none"
                placeholder="Tell us more about your feedback, ideas, or questions..."
                required
              ></textarea>
            </div>
            
            <!-- Submit button -->
            <div class="text-center">
              <button 
                type="submit" 
                :disabled="submitted || submitting"
                class="inline-flex items-center gap-3 px-12 py-4 bg-accentPrimary text-white rounded-2xl font-bold shadow-isometric hover:shadow-isometric-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <svg 
                  v-if="submitting" 
                  class="w-5 h-5 animate-spin" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <svg 
                  v-else-if="submitted" 
                  class="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <svg 
                  v-else 
                  class="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                
                <span>
                  {{ submitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message' }}
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Alternative contact methods -->
        <div 
          :class="[
            'mt-16 text-center transition-all duration-700',
            isVisible ? 'animate-fade-in' : 'opacity-0'
          ]"
          style="animation-delay: 0.8s"
        >
          <h3 class="text-xl font-bold text-textDark mb-6">Other Ways to Reach Us</h3>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://github.com/Tomi-Tom/IsoMaker/issues" 
              target="_blank"
              class="inline-flex items-center gap-3 px-6 py-4 bg-textDark text-white rounded-2xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Report Issues on GitHub
            </a>
            
            <a 
              href="mailto:isomaker.official@gmail.com" 
              class="inline-flex items-center gap-3 px-6 py-4 border-2 border-accentSecondary text-accentSecondary rounded-2xl hover:bg-accentSecondary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email Us Directly
            </a>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>