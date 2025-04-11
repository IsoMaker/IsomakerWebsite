<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background">
    <NavBar />
    <main class="flex-1">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>