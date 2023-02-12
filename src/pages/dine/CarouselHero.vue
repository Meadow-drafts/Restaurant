<template>
<!--  carousel-->
  <div class="relative slide  carousel-fade  carousel ">
    <div class="carousel-indicators absolute bottom-0 flex  justify-center items-center">
      <ol class="z-50 flex w-4/12 justify-center">
        <li v-for="(img, i) in images" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer"></li>
      </ol>
    </div>
    <div class=" carousel-inner relative overflow-hidden m-0" style="height:60rem" >
      <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`"
           class="carousel-item float-left  inset-0 relative w-full transform transition translate-y-1 duration-1000 ease-in-out">
        <img class="w-full adjust slider" :src="img" alt="First slide" />
      </div>
      <p class="absolute font-bold title text-7xl text-white text-center" style="font-family: cursive;">{{text}}</p>
<!--      header-->
      <header class="w-full text-3xl bg-transparent border-b-2 shadow-lg border-gray-200">
        <div>
          <div class="bg-transparent text-3xl">
            <nav
                class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center text-3xl
        "
            >
              <div class="flex items-center justify-between">
                <router-link
                    to="/"
                    class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
                >Logo
                </router-link>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                  <button
                      type="button"
                      class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
                  >
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                      <path
                          fill-rule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>


              <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
              <ul
                  :class="showMenu ? 'flex' : 'hidden'"
                  class="
            flex-col
            mt-8 text-3xl
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
              >
                <li class=" text-2xl font-bold text-white hover:text-blue-400">
                  Home
                </li>
                <li class=" text-2xl font-bold text-white hover:text-blue-400">
                  About
                </li>
                <li class=" text-2xl font-bold text-white hover:text-blue-400">
                  Services
                </li>
                <li class=" text-2xl font-bold text-white hover:text-blue-400">
                  Our Menu
                </li>  
                <button @click="detailModal">
                  <li class=" text-2xl font-bold text-white hover:text-blue-400">
                  Cart
                </li>
                </button>              
                
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <transition name="bounce" class="right-40 top-24 fixed">  
        <div v-if="isShowDetails" class="">          
          <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
              <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 e">Latest Customers</h5>
                  <a href="#" class="text-sm font-medium text-blue-600 hover:underline ">
                      View all
                  </a>
            </div>
            <div class="flow-root">
                  <ul v-for="data in reservations" :key="data" role="list" class="divide-y divide-gray-200 ">
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="">
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate ">
                                      Neil Sims
                                  </p>
                                  <p class="text-sm text-gray-500 truncate">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                  $320
                              </div>
                          </div>
                      </li>
                  </ul>
            </div>
          </div>
        </div>      
    </transition>
    </div>
</div>


</template>

<script>

import Header from "../../partials/Header.vue";
import axios from "axios";
export default{
  name:'carouselHero',
  components: {Header},
  data: () => ({
    images: [
      " https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg.webp",
      "https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg.webp",
      "https://preview.colorlib.com/theme/feliciano/images/bg_2.jpg.webp"
    ],
    text:'Dine in',
    active: 0,
    showMenu: false,
    showDetails:false,
    reservations:[],

  }),
  computed:{
    isShowDetails(){
      return this.showDetails;
    }
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 2000);
  },
  methods:{
    async detailModal(){
    this.showDetails = !this.showDetails;
    await axios.get(`http://localhost:8000/reservation`
    ).then((response)=>{
      console.log(response.data)
      this.reservations = response.data;
    })
 

  }
  }
}
</script>


<style>
*{
  margin: 0;
}
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
.title{
  position:absolute;
  top:20%;
  left:30%;
}
.images{
  position:absolute;
  bottom:0;
  width:100%;
}
header{
  position: absolute;
  top:0;
}

.adjust img,
video {
  max-width: 100%;
  height: 10px;
}

</style>