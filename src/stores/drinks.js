import { defineStore } from "pinia";
import { onMounted, reactive, ref } from "vue";
import axios from 'axios'
import APIService from '../services/APIService'
export const useDrinksStore = defineStore('drinks', ()=>{

    const categories  = ref([])
    const search = reactive({
        name: '',
        category: ''
    })
    onMounted (async () => {
        const {data: {drinks}}= await axios.get(APIService.getCategories)
        categories.value = drinks
    })

    function getRecipes(){
        console.log('consultando api')
    } 

    return{
        categories,
        search,
        getRecipes
    }
})