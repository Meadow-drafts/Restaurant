<template>
<!--  carousel-->
  <div class="relative slide  carousel-fade  carousel ">
    <div class="carousel-indicators absolute bottom-0 flex  justify-center items-center">
      <ol class="z-50 flex w-4/12 justify-center">
        <li v-for="(img, i) in images" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer"></li>
      </ol>
    </div>
    <div class=" carousel-inner relative overflow-hidden m-0" style="height:45rem" >
      <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`"
           class="carousel-item float-left  inset-0 relative w-full transform transition translate-y-1 duration-1000 ease-in-out">
        <img class="w-full adjust slider" :src="img" alt="First slide" />
      </div>
      <p class="absolute title text-5xl text-white">{{text}}</p>
<!--      header-->
      <header class="absolute w-full text-3xl bg-transparent border-b-2 border-black">
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
                  Blogs
                </li>
                <li class=" text-2xl font-bold text-white hover:text-blue-400">
                  Contact Us
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

<!--      our menu-->
      <div class="absolute images flex-row flex justify-center">
        <div class="mr-10">
          <div class="w-full  mb-5 rounded-lg m-h-40 transform hover:translate-y-2 transition duration-300">
            <figure class="">
              <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""
                   class="h-32 w-32 menu-img" />
            </figure>
            <div style="color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-black text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-yellow-700 font-light">
                  $1099,00
                </div>
                <button href="javascript:void(0);" class="rounded-full bg-black text-white hover:bg-white hover:text-black hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mr-10">
          <div class="w-full  mb-5 rounded-lg m-h-40 transform hover:translate-y-2 transition duration-300">
            <figure class="">
              <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""
                   class="h-32 w-32 menu-img" />
            </figure>
            <div style="color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-black text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-yellow-700 font-light">
                  $1099,00
                </div>
                <button href="javascript:void(0);" class="rounded-full bg-black text-white hover:bg-white hover:text-black hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>


</template>

<script>

import Header from "../../partials/Header.vue";

export default{
  name:'carouselHero',
  components: {Header},
  data: () => ({
    images: [
      " https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg.webp",
      "https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg.webp",
      "https://preview.colorlib.com/theme/feliciano/images/bg_2.jpg.webp"
    ],
    text:'Fancy Meals',
    active: 0,
    showMenu: false,
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 2000);
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