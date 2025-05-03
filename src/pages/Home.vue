<script setup>
import {useDrinksStore } from '../stores/drinks'
import Recipes from '/src/components/Recipes.vue'

const drinks = useDrinksStore()
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent inline-block">
        Drink Recipes
      </h1>
      <div class="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
    </div>

    <p v-if="drinks.noRecipes" class="my-20 text-center text-2xl text-gray-400 font-medium">
      No recipes found. Try a different search!
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Recipes 
        v-for="recipe in drinks.recipes" 
        :recipe="recipe" 
        :key="recipe.idDrink"
        class="transition-all duration-300 hover:-translate-y-2"
      />
    </div>
  </div>
</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>