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
      <p class="absolute font-bold title text-7xl text-black text-center" style="font-family: cursive;">Yummy! Init?!</p>
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
              text-black
               md:text-2xl
              hover:text-blue-400 mr-10
            "
                >
                <div class="flex text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                  <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                </svg>
                Back
                </div>
                </router-link>
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
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
    // showDetails:false,
    // reservations:[],

  }),
  computed:{
    // isShowDetails(){
    //   return this.showDetails;
    // }
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
  //   async detailModal(){
  //     this.loadIds
  //   this.showDetails = !this.showDetails;
  //   await axios.get(`http://localhost:8000/reservation_specific/3/1`
  //   ).then((response)=>{
  //     console.log(response.data)
  //     this.reservations = response.data;
  //   })
  // },
  loadIds(){
  
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>