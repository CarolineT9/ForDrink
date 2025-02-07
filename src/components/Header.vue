<script setup>

</script>


<template>
  <header>
    <div class="mx-auto container px-5 py-16">
      <div>

      </div>
      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="ingredient">Ingredient name</label>
          <input class="p-3 w-full rounded-lg focus:outline-none" type="text" id="ingrediente"
            placeholder="Ingredient name (Vodka, Tequila)">
        </div>
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="category">Category</label>
          <select class="p-3 w-full rounded-lg focus:outline-none" type="text" id="category">
            <option value="">-- Select --</option>
          </select>

        </div>
        <input type="submit" 
        value="search drink"
        class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2
        rounded-lg uppercase"
        >
      </form>
    </div>
  </header>
</template>



<style></style>