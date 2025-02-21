import api from "../lib/axios"

export default {
    //Get categories
    getCategories(){
        return api.get('list.php?c=list')
    }
}