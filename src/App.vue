<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/gifs">Gifs</RouterLink>
      <RouterLink to="/reviews">Reviews</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  position: relative;
  line-height: 1.5;
  display: block;
  place-content: start center;
}

.navbar {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  gap: 1rem;
  margin-left: auto;
  margin-top: 10px;;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
} */
</style>
