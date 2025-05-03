<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useDrinksStore } from '../stores/drinks';
import { useModalStore } from '../stores/modal';
import { useFavoritesStore } from '../stores/favorite';

const modal = useModalStore()
const drinks = useDrinksStore()
const favorite = useFavoritesStore()

const formatRecipe = () => {
  const recipeDiv = document.createElement('DIV')

  for(let i = 1 ; i <=15; i++){
    if(drinks.recipe[`strIngredient${i}`]){
      const ingredient = drinks.recipe[`strIngredient${i}`]
      const measure = drinks.recipe[`strMeasure${i}`]

      const ingredientMeasure = document.createElement('P')
      ingredientMeasure.classList.add('text-lg', 'text-gray-600', 'mb-2', 'flex')
      ingredientMeasure.innerHTML = `
        <span class="inline-block w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 flex-shrink-0">
          ${i}
        </span>
        <span>
          <span class="font-medium text-gray-800">${ingredient}</span> - ${measure}
        </span>
      `

      recipeDiv.appendChild(ingredientMeasure)
    }
  }
  return recipeDiv
}
</script>

<template>
  <TransitionRoot as="template" :show="modal.modal">
    <Dialog as="div" class="relative z-50" @close="modal.handleClickModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-4xl">
              <div class="bg-white p-8">
                <div class="flex justify-between items-start">
                  <DialogTitle as="h3" class="text-3xl font-bold text-gray-900 mb-6">
                    {{ drinks.recipe.strDrink }}
                  </DialogTitle>
                  <button @click="modal.handleClickModal" class="text-gray-400 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                  <div>
                    <img :src="drinks.recipe.strDrinkThumb"
                      :alt="'Image of ' + drinks.recipe.strDrink"
                      class="w-full h-80 object-cover rounded-xl shadow-md"
                    />
                  </div>
                  
                  <div>
                    <div class="mb-8">
                      <h4 class="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                        Ingredients
                      </h4>
                      <div v-html="formatRecipe().outerHTML" class="space-y-3"></div>
                    </div>

                    <div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                        Instructions
                      </h4>
                      <p class="text-gray-600 whitespace-pre-line">{{ drinks.recipe.strInstructions }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 px-8 py-4 flex justify-between gap-4">
                <button 
                  @click="modal.handleClickModal"
                  type="button"
                  class="flex-1 rounded-lg bg-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
                <button 
                  type="button" 
                  @click="favorite.handleClickFavorite"
                  class="flex-1 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-orange-600 hover:to-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {{ modal.textButton }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style>
/* Estilo para o scroll dentro do modal */
.dialog-panel {
  max-height: 90vh;
  overflow-y: auto;
}
</style>