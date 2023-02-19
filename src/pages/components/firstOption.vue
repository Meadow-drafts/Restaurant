<template>
<div>
    <div class="text-right my-10 text-green-600 mx-10 font-bold text-2xl">Fast Food . . .</div>


<!-- Cards -->
<div  class="grid grid-cols-3">
  <div v-for="data in restaurant_meals" :key="data" class="w-5/6 mx-auto mb-12 rounded-lg shadow-lg  bg-white p-5">
  <img :src="data.img_url" alt=""  class="rounded-full w-28 h-28 my-5 mx-auto">
  <div class="grid grid-cols-2 p-2">
    <h4 class="font-bold text-2xl text-left">{{data.name}}</h4>
    <h4 class="font-bold text-2xl text-center">{{data.price}} XAF</h4>
  </div>
  <p class="mt-3">{{ data.description }}</p>
  <button class="rounded-full bg-black text-white hover:bg-white hover:text-black hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
  </button>
</div>



</div>
</div>
</template>

<script>
import axios from 'axios';
export default{
    "name":"firstOption",
    data(){
        return{
            restaurant_meals:[],
        }
    },
    async mounted(){
        await axios.get('http://localhost:8000/meal/showby/1'
        ).then((response)=>{
            console.log(response.data)
            this.restaurant_meals = response.data
        })

    },
}

</script>