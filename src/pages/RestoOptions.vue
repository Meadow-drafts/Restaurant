<template>
  <div class="grid h-screen place-items-center">
    <div class="rounded-lg border-2 border-gray-200 bg-gray-300 p-10 mb-4 shadow-2xl hover:bg-gray-200">
      <h3 class="mb-10 text-3xl font-medium text-yellow-900">
        Which Restaurant will you like to visit today?
      </h3>
      <div class="grid place-items-center">
        <looping-rhombuses-spinner
        v-if="isLoading"
        :animation-duration="2500"
        :rhombus-size="15"
        color="#518de0"
      />
      </div>
     
      <ul v-for="(data,index) in restaurants" :key="data.id" class="flex w-full flex-col m-5" >       
        <button button @click="RestoChoice(index)">
          <li>
            <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                class="hidden peer"
                required
            />
            <label
                for="hosting-small"
                class="options inline-flex items-center justify-between w-full p-5 text-black border border-gray-200 rounded-lg cursor-pointer peer-checked:border-black peer-checked:text-white hover:text-gray-500 hover:bg-gray-300"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">{{data.name}}</div>
                <div class="w-full">See full display of Restaurant</div>
              </div>
              <svg
                  aria-hidden="true"
                  class="w-6 h-6 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path>
              </svg>
            </label>
          </li>
        </button>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { LoopingRhombusesSpinner } from 'epic-spinners'
export default {
  name: "RestoOptions",
  data(){
    return {
      isLoading:true,
      hosting: "hosting-small",
      Resto_name:'',
      restaurants:[],
    }
  },
  components:{
    LoopingRhombusesSpinner,
  }
  ,
  async mounted(){
    this.isLoading = true;
    await axios.get("http://localhost:8000/restaurant"
    ).then((response) => {
    console.log(response.data);
    this.isLoading = false;
    this.restaurants = response.data
    for(let i=0; i<this.restaurants.length; i++){
      console.log(this.restaurants[i].email.split("@"))
      // this.route = this.restaurants[i].email.split("@")[1]
      
;
    }

    })
  },
  methods: {
    changeHosting(hosting){
      this.hosting = hosting
    },
    RestoChoice(index){
      this.isLoading = true;
      console.log(index)
      if(index===0){
        this.$router.push({path: '/expresso'})
      }else if(index === 1) {
        this.$router.push({path: '/dine'})
      }     
      this.isLoading = false;

  },
  },
  
};
</script>

<style>
.options {
  background-color: #518de0;
}
</style>
