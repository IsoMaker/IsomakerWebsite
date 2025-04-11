<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const submitted = ref(false);

const submitForm = () => {
  // This would submit to a backend in a real application
  console.log({ name: name.value, email: email.value, message: message.value });
  submitted.value = true;
  
  // Reset form
  setTimeout(() => {
    name.value = '';
    email.value = '';
    message.value = '';
    submitted.value = false;
  }, 3000);
};
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">Feedback</h1>
    <p class="text-center text-textSecondary mb-12">We'd love to hear from you</p>
    
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-soft">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="name" class="block text-primary font-medium mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="name" 
            class="w-full p-3 border border-textSecondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accentPrimary"
            required
          />
        </div>
        
        <div>
          <label for="email" class="block text-primary font-medium mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            class="w-full p-3 border border-textSecondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accentPrimary"
            required
          />
        </div>
        
        <div>
          <label for="message" class="block text-primary font-medium mb-2">Message</label>
          <textarea 
            id="message" 
            v-model="message" 
            rows="5"
            class="w-full p-3 border border-textSecondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accentPrimary"
            required
          ></textarea>
        </div>
        
        <div>
          <button 
            type="submit" 
            class="w-full py-3 bg-accentPrimary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all font-bold"
            :disabled="submitted"
          >
            {{ submitted ? 'Thank you!' : 'Submit Feedback' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>