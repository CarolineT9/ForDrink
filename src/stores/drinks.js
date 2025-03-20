import { defineStore } from "pinia";
import { onMounted, reactive, ref, computed } from "vue";
import APIService from '../services/APIService';
import { useModalStore } from "./modal";
export const useDrinksStore = defineStore('drinks', ()=>{
    const modal = useModalStore()
    const categories  = ref([])
    const search = reactive({
        name: '',
        category: ''
    })
    const recipes = ref([])
    const recipe = ref({})

    onMounted (async function ()  {
        const {data: {drinks}}= await APIService.getCategories()
        categories.value = drinks
    })

    async function getRecipes(){
       const {data : {drinks}} =  await APIService.getRecipe(search)
       recipes.value = drinks
    } 
    async function getDrink(id){
        const { data: {drinks}} = await APIService.getDrink(id)
        recipe.value = drinks[0];
        modal.handleClickModal()
    }
    const noRecipes = computed(( ) => recipes.value.length === 0)
    return{
        categories,
        search,
        getRecipes,
        recipes, 
        getDrink,
        recipe,
        noRecipes
    }
})