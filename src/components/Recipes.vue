<script setup>
   const props = defineProps = ({
        recipe:{
            type: Object
        }
    })
</script>
<template>
    <div>
        <h2>{{ props.recipe.strDrink }}</h2>
    </div>
</template>