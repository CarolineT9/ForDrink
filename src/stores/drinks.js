import { defineStore } from "pinia";
import { onMounted, reactive, ref } from "vue";
import APIService from '../services/APIService'
export const useDrinksStore = defineStore('drinks', ()=>{

    const categories  = ref([])
    const search = reactive({
        name: '',
        category: ''
    })
    const recipes = ref([])

    onMounted (async function ()  {
        const {data: {drinks}}= await APIService.getCategories()
        categories.value = drinks
    })

    async function getRecipes(){
       const {data : {drinks}} =  await APIService.getRecipe(search)
       recipes.value = drinks
    } 

    return{
        categories,
        search,
        getRecipes,
        recipes
    }
})