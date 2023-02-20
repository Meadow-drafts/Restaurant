<template>
<div class="">
    <div class="text-right my-10 text-red-600 mx-10 font-bold text-3xl">
      <router-link to="/expresso" class=" text-3xl ">
        Fast Food . . . 
        <p>see more</p>
      </router-link> 
    </div>

<!-- Cards -->
<div  class="grid grid-cols-3 -gap-20">
  <div v-for="data in restaurant_meals" :key="data" class="w-1/2 mx-auto mb-12 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300  bg-white p-2">
  <img :src="data.img_url" alt=""  class="rounded-lg w-52 h-32 my-5 mx-auto">
  <div class="grid grid-cols-2 px-5">
    <h4 class="font-bold text-xl text-red-600 text-left">{{data.name}}</h4>
    <h4 class="font-bold text-lg mt-1 text-center">{{data.price}} XAF</h4>
  </div>
  <p class="mt-3 text-center">{{ data.description }}</p>
  
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
            this.restaurant_meals = response.data.slice(0,3)
        })

    },
}

</script>

<style>

/* .element{
  background-image: url("../../images/blob2.svg");
  background-repeat: no-repeat;
  background-position: center;

} */
</style>