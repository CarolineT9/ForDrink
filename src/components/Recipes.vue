<script setup>
import { useDrinksStore } from '../stores/drinks';
const drinks = useDrinksStore()

const props = defineProps({
  recipe: {
    type: Object
  }
})
</script>

<template>
  <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div class="relative overflow-hidden h-64">
      <img 
        class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
        :src="recipe.strDrinkThumb" 
        :alt="'Image of ' + recipe.strDrink"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h2 class="text-white text-xl font-bold truncate">{{ recipe.strDrink }}</h2>
      </div>
    </div>
    
    <div class="p-5">
      <h2 class="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-orange-500 transition-colors">
        {{ recipe.strDrink }}
      </h2>
      
      <button 
        type="button" 
        class="w-full py-3 px-4 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
        @click="drinks.getDrink(recipe.idDrink)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View Recipe
      </button>
    </div>
  </div>
</template>