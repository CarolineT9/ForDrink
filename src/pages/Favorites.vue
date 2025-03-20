<script setup>
import { useFavoritesStore } from '../stores/favorite';
import Recipes from '../components/Recipes.vue'

const favorites = useFavoritesStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">
    Favoritos
  </h1>
  <p v-if="favorites.noFavorites" class="my-10 text-center text-2xl">There are no favorites </p>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <Recipes v-for="recipe in  favorites.favorites" :recipe="recipe" :key="recipe.idDrinks"/>
  </div>
</template>

<style>

</style>