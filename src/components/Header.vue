<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import {useDrinksStore} from '../stores/drinks'
import { useNotificationsStore } from '../stores/notifications';
const route = useRoute()
const store  = useDrinksStore()
const notifications = useNotificationsStore()
const homePage = computed(() => route.name == "home")
;

const handleSubmit = () =>{
  //TODO - Validar
  if(Object.values(store.search).includes('')){
   
      notifications.$patch({
        text: 'All fields are required.',
        show: true,
        error: true
      })
    return
  }

  store.getRecipes()
};
</script>

<template>
  <header class="bg-slate-900"
  :class="{header : homePage}"
  >
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{name: 'home'}">
            <img class="w-32" src="/public/img/logo.svg" alt="logotipo"/>
          </RouterLink>
        </div>
        <nav class="flex gap-4 text-white">
          <RouterLink active-class="text-orange-500" :to="{name: 'home'}" class="uppercase font-bold">
            Home
          </RouterLink>
          <RouterLink active-class="text-orange-500" :to="{name: 'favorites'}" class="uppercase font-bold">
            Favoritos
          </RouterLink> 
        </nav>
      </div>
      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" v-if="homePage" @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="ingredient">Ingredient name</label>
          <input v-model="store.search.name" class="p-3 w-full rounded-lg focus:outline-none" type="text" id="ingrediente"
            placeholder="Ingredient name (Vodka, Tequila)">
        </div>
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="category">Category</label>
          <select class="p-3 w-full rounded-lg focus:outline-none"  id="category" v-model="store.search.category">
            <option value="">-- Select --</option>
            <option v-for="category in store.categories" :key="category.strCategory" :value="category.strCategory">{{ category.strCategory }}</option>
          </select>

        </div>
        <input type="submit" 
        value="search-drink"
        class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2
        rounded-lg uppercase"
        >
      </form>
    </div>
  </header>
</template>



<style scoped>
  .header{
    background-image: url('/public/img/bg.jpg');
    background-size: cover;
    background-position: center;
  }
</style>