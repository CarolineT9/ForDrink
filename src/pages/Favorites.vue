<script setup>
import { useFavoritesStore } from '../stores/favorite';
import Recipes from '../components/Recipes.vue'

const favorites = useFavoritesStore()
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent inline-block">
        Your Favorites
      </h1>
      <div class="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
    </div>

    <div v-if="favorites.noFavorites" class="text-center my-20">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <p class="mt-6 text-2xl text-gray-400 font-medium">
        No favorites yet. Start saving your favorite recipes!
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Recipes 
        v-for="recipe in favorites.favorites" 
        :recipe="recipe" 
        :key="recipe.idDrink"
        class="transition-all duration-300 hover:-translate-y-2"
      />
    </div>
  </div>
</template>

<style>
/* Animação para quando os favoritos são carregados */
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

