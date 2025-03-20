import api from "../lib/axios"

export default {
    //Get categories
    getCategories(){
        return api.get('list.php?c=list')
    },
    getRecipe({category, name}){
        return api(`filter.php?c=${category}&i=${name}`)
    },
    getDrink(id){
        return api(`lookup.php?i=${id}`)
    }
}