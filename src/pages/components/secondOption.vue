<template>
    <div>
        <div class="text-right my-10 text-yellow-700 mx-8 font-bold text-3xl">
          <button @click="viewResto" class=" text-3xl ">
            Yummy! Init ?!..  
            <p>see more</p>
          </button>  
        </div>
    
    
    <!-- Cards -->
    <div  class="grid grid-cols-3 element">
      <div v-for="data in restaurant_meals" :key="data" class="w-1/2 mx-auto mb-12 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300 bg-white p-5">
      <img :src="data.img_url" alt=""  class="rounded-lg w-52 h-32 my-5 mx-auto">
      <div class="grid grid-cols-2 p-5">
        <h4 class="font-bold text-xl text-yellow-700 text-left">{{data.name}}</h4>
        <h4 class="font-bold text-lg mt-1 text-black text-center">{{data.price}} XAF</h4>
      </div>
      <p class="mt-3 text-center">{{ data.description }}</p>
      
    </div>
    
    
    
    </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    export default{
        "name":"secondOption",
        data(){
            return{
                restaurant_meals:[],
                meals:[],
            }
        },
        async mounted(){
            await axios.get('http://localhost:8000/meal/showby/2'
            ).then((response)=>{
                console.log(response.data)
                console.log(response.data.slice(0,3))
                this.restaurant_meals = response.data.slice(0,3)
                
            })
        
        },
        methods:{
          async viewResto(){
            await axios.get('http://localhost:8000/meal/showby/2')
          }
        }
    }
    
    </script>
    <style>
.element{
  background-image: url("../../images/blob.svg");
  background-position: 0lvh;

}
</style>