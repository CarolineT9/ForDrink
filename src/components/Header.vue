<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import {useDrinksStore} from '../stores/drinks'
import { useNotificationsStore } from '../stores/notifications';
const route = useRoute()
const store  = useDrinksStore()
const notifications = useNotificationsStore()
const homePage = computed(() => route.name == "home");

const handleSubmit = () =>{
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
  <header class="bg-slate-900 relative overflow-hidden"
  :class="{'header-height' : homePage}"
  >
    <div v-if="homePage" class="absolute inset-0 bg-black/40 z-0"></div>
    <div class="mx-auto container px-5 py-8 lg:py-12 relative z-10">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{name: 'home'}">
            <img class="w-32 hover:scale-105 transition-transform duration-300" src="/public/img/logo.png" alt="logotipo"/>
          </RouterLink>
        </div>
        <nav class="flex gap-6 text-white">
          <RouterLink 
            active-class="text-orange-400 font-extrabold" 
            :to="{name: 'home'}" 
            class="uppercase font-semibold text-sm lg:text-base hover:text-orange-300 transition-colors relative group"
          >
            Home
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </RouterLink>
          <RouterLink 
            active-class="text-orange-400 font-extrabold" 
            :to="{name: 'favorites'}" 
            class="uppercase font-semibold text-sm lg:text-base hover:text-orange-300 transition-colors relative group"
          >
            Favorites
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
          </RouterLink> 
        </nav>
      </div>
      <form 
        class="md:w-1/2 2xl:w-1/3 bg-white/5 backdrop-blur-sm border border-white/10 my-16 lg:my-24 p-8 rounded-xl shadow-2xl space-y-6 transition-all duration-500 hover:shadow-orange-500/20" 
        v-if="homePage" 
        @submit.prevent="handleSubmit"
      >
        <div class="space-y-4">
          <label class="block text-orange-300 uppercase font-bold text-sm tracking-wider" for="ingredient">Ingredient name</label>
          <input 
            v-model="store.search.name" 
            class="p-3 w-full rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/50 text-white placeholder-gray-400 transition-all" 
            type="text" 
            id="ingrediente"
            placeholder="e.g. Vodka, Tequila, Rum"
          >
        </div>
        <div class="space-y-4">
          <label class="block text-orange-300 uppercase font-bold text-sm tracking-wider" for="category">Category</label>
          <select 
            class="p-3 w-full rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400/50 text-white appearance-none"  
            id="category" 
            v-model="store.search.category"
          >
            <option value="" class="bg-slate-800">-- Select Category --</option>
            <option v-for="category in store.categories" :key="category.strCategory" :value="category.strCategory" class="bg-slate-800">
              {{ category.strCategory }}
            </option>
          </select>
        </div>
        <button
          type="submit" 
          class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold w-full p-3
          rounded-lg uppercase tracking-wider shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search Drinks
        </button>
      </form>
    </div>
  </header>
</template>

<style scoped>
  .header-height {
    background-image: url('/public/img/bg.jpg');
    background-size: cover;
    background-position: center;
    min-height: 600px;
  }
  
  @media (max-width: 768px) {
    .header-height {
      min-height: 500px;
    }
  }
</style>