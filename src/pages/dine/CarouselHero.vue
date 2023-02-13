<template>
<!--  carousel-->
  <div class="relative slide  carousel-fade  carousel ">
      <div class="position-relative">
        <div class="bg-image rounded-7 shadow-5" style="background-image: url(https://mdbcdn.b-cdn.net/img/new/slides/026.webp); height: 700px;background-repeat: no-repeat;background-size: cover;">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style="
                    opacity: ;
                    width: 100%;
                    height: 600px;
                    fill: #fff
                    transform: rotateY(0deg);
                    ">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
</div>
      <p class="absolute font-bold title text-7xl text-black text-center" style="font-family: cursive;">{{text}}</p>
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
                <li class=" text-2xl font-bold text-yellow-500 hover:text-gray-400">
                  Home
                </li>
                <li class=" text-2xl font-bold text-yellow-500  hover:text-gray-400">
                  About
                </li>
                <li class=" text-2xl font-bold text-yellow-500  hover:text-gray-400">
                  Services
                </li>
                <li class=" text-2xl font-bold text-yellow-500  hover:text-gray-400">
                  Our Menu
                </li>  
                <button @click="detailModal">
                  <li class=" text-2xl font-bold text-yellow-500  hover:text-gray-400">
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
              <div class="flex mt-5 items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-center border-b-2 text-gray-900 w-full">Your Order</h5>
                  
            </div>
            <div class="flow-root">
                  <ul v-for="data in reservations" :key="data" role="list" class="divide-y divide-gray-200 ">
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-12 h-12 rounded-full" :src="data.img_url">
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate ">
                                      {{data.name}}
                                  </p>
                                  <div>
                                      <input type="number" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="choose quantity" required>
                                  </div>
                                  <!-- <p class="text-sm text-gray-500 truncate">
                                      email@windster.com
                                  </p> -->
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                  {{ data.price }}
                              </div>
                          </div>
                      </li>
                  </ul>
                  <div class="flex mt-5 gap-5 items-center justify-between mb-4">
                    <input type="text" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="yyyy-mm-dd" required>
                    <input type="text" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Table number" required>  
                </div>
                <p class="p-5">Total Price: </p>  
                  <button class="bg-yellow-700 w-full text-white font-bold py-2 px-4 rounded">
                    Button
                  </button>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L30,277.3C60,267,120,245,180,213.3C240,181,300,139,360,144C420,149,480,203,540,197.3C600,192,660,128,720,90.7C780,53,840,43,900,58.7C960,75,1020,117,1080,149.3C1140,181,1200,203,1260,202.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> -->
            </div>
          </div>
        </div>      
    </transition>
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
      this.loadIds
    this.showDetails = !this.showDetails;
    await axios.get(`http://localhost:8000/reservation_specific/3/1`
    ).then((response)=>{
      console.log(response.data)
      this.reservations = response.data;
    })
  },
  loadIds(){
    // this.emitter.on("choose-meal", (msg)=>{
    // console.log(msg)
  // });
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
.slide {
  background-image: url(" ../../images/cook.png");

}

</style>