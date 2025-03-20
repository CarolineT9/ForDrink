<script setup>
import {useDrinksStore } from '../stores/drinks'
import Recipes from '/src/components/Recipes.vue'

const drinks = useDrinksStore()

</script>


<template>
  <h1 class="text-6xl font-extrabold">Recipes</h1>
  <p v-if="drinks.noRecipes" class="my-10 text-center text-2xl">There are no Recipes </p>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Recipes  v-for="recipe in drinks.recipes" :recipe="recipe" :key="recipe.idDrink"/>
  </div>
</template>



<style>

</style>