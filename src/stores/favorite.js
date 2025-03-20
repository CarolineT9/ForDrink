import { defineStore } from "pinia";
import { ref, watch, onMounted, computed } from "vue";
import { useDrinksStore } from "./drinks";
import { useModalStore } from "./modal";
import { useNotificationsStore } from "./notifications";
export const useFavoritesStore = defineStore('favorites', ()=>{
    const drinks = useDrinksStore();
    const favorites = ref([])
    const modal = useModalStore()
    const notifications = useNotificationsStore()
    onMounted (() => {
        favorites.value = JSON.parse(localStorage.getItem('favorites')) ?? []
    } )
    watch(favorites, ()=>{
        syncLocalStorage()
    },{
        deep: true
    })
    function syncLocalStorage(){
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
    function isFavorite(id){
        const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites')) ?? []
        return favoritesLocalStorage.some(favorite => favorite.idDrink === id)

    }
    function addFavorite(){
        favorites.value.push(drinks.recipe)
        notifications.show = true;
        notifications.text = 'Drink added to favorites.'

     
    }
    function deleteFavorite(){
        favorites.value = favorites.value.filter(favorite => favorite.idDrink != drinks.recipe.idDrink)
        notifications.show = true;
        notifications.text = 'Drink removed from favorites.'

       
        
    }
    function handleClickFavorite() {
        if(isFavorite(drinks.recipe.idDrink)){
            deleteFavorite()
            
        }else{
            addFavorite()
           
        }
        modal.modal = false
    }
    const noFavorites = computed(() => favorites.value.length ===0)
    return{
        favorites,
        handleClickFavorite,
        isFavorite, 
        noFavorites
    }
})