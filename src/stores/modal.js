import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFavoritesStore } from "./favorite";
import { useDrinksStore } from "./drinks";
export const useModalStore = defineStore('modal', ()=>{
    const favorites = useFavoritesStore()
    const modal = ref(false);
    const drinks = useDrinksStore()
    
    function handleClickModal(){
        modal.value = !modal.value
    }
    const textButton = computed(() =>{
        return favorites.isFavorite(drinks.recipe.idDrink) ? 'Delete to favorites' : 'Add to favorites'
    })
    
    return{
        modal,
        handleClickModal, 
        textButton
    }
})