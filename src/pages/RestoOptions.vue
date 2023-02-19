<template>
<!--      header-->
  <header class="w-2/3 text-3xl bg-gray-300 shadow-md border-b-2 shadow-lg border-gray-200">
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
                to="/options"
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
            <li class=" text-xl font-medium text-black hover:text-gray-400">
              Home
            </li>
            <li class=" text-xl font-medium text-black  hover:text-gray-400">
              How it Works
            </li>
            <li class=" text-xl font-medium text-black  hover:text-gray-400">
              About Us
            </li>
            <li class=" text-xl font-medium text-black  hover:text-gray-400">
              Sign In
            </li>  
            <button @click="detailModal">
              <li class=" text-xl font-medium text-black hover:text-gray-400">
              Cart
            </li>
            </button>              
            
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <section>
		<div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="absolute block w-full"
      style="margin: auto; z-index: -10;"
      height="680"
      preserveAspectRatio="none"
      viewBox="0 0 1920 880"
    >
      <g transform="translate(960,440) scale(1,1) translate(-960,-440)">
        <linearGradient
          id="lg-0.047955344060927496"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
        >
          <stop stop-color="hsl(217, 88%, 33.7%)" offset="0"></stop>
          <stop stop-color="hsl(217, 88%, 75.1%)" offset="1"></stop>
        </linearGradient>
        <path d="" fill="#00E400" opacity="0.4">
          <animate
            attributeName="d"
            dur="33.333333333333336s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="0s"
            values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z"
          ></animate>
        </path>
        <path d="" fill="#00E400" opacity="0.4">
          <animate
            attributeName="d"
            dur="33.333333333333336s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-6.666666666666667s"
            values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z"
          ></animate>
        </path>
        <path d="" fill="#00E400" opacity="0.4">
          <animate
            attributeName="d"
            dur="33.333333333333336s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-13.333333333333334s"
            values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z"
          ></animate>
        </path>
        <path d="" fill="#5ed16a" opacity="0.4">
          <animate
            attributeName="d"
            dur="33.333333333333336s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-20s"
            values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z"
          ></animate>
        </path>
        <path d="" fill="#5ed16a" opacity="0.1">
          <animate
            attributeName="d"
            dur="33.333333333333336s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-26.666666666666668s"
            values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z"
          ></animate>
        </path>
      </g>
    </svg>
			<div class="container grid grid-cols-2 items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
				<h1 class="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Aren't You Hungry ??</h1>
        <img class="-mt-10 -mr-40" style="border-radius: 50%; height:25rem" src="data:image/jpeg;base64,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"/>
				<div class="flex flex-wrap justify-center -mt-40">
					<button type="button" class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Make a Reservation</button>
					<button type="button" class="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">See Restaurants</button>
				</div>
			
			</div>
		</div>
  </section>
    
    <!-- Cards -->
    How it works
    <div class="grid grid-cols-3 lg:ml-96 lg:-mt-18">
      <div class="lg:w-3/6 w-5/6 mb-12 -mr-20 -mt-20 rounded-lg shadow-lg lg:-mt-32 bg-white p-5">
      <img src="../images/restaurants.jpg" alt=""  class="h-24 rounded-full w-28 my-5 mx-auto">
      <h4 class="font-bold text-2xl text-center">Select A Restaurant</h4>
      <p class="mt-3 p-4">We bring you different varities of restaurants</p>

      </div>    
      <div class="lg:w-3/6 w-5/6 mb-12 -mt-20 rounded-lg shadow-md lg:-mt-32 bg-white p-5">
        <img src="../images/reservation.jpg" alt="" class="h-36 rounded-full w-28 my-5 mx-auto">
        <h4 class="font-bold text-2xl text-center">Available Reservations</h4>
        <p class="mt-3">Choice to Dine In</p>
        <p class="">Choice to  Dine on delivery</p>

      </div>
      <div class="lg:w-3/6 w-5/6 mb-12 -mt-20 rounded-lg shadow-md lg:-mt-32 bg-white p-5">
        <img src="../images/fast-delivery.png" alt="" class="h-36 rounded-full w-28 my-5 mx-auto">
        <h4 class="font-bold text-2xl text-center">SFast Delivery</h4>
        <p class="mt-3">Irrespective of the restaurant, we make sure the delivery is fast</p>
      </div>
    </div>

    <!-- About us -->
    <div class="text-center my-20 text-gray-600 border-b-2 w-1/2  border-green-600 font-bold text-2xl">About Us</div>
    <div class=" element container grid grid-cols-2 items-center px-10 py-16 lg:w-1/2 mx-auto text-center rounded-lg shadow-lg md:px-10 lg:px-32 bg-gray-200">
      <p class="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl"><span class="font-bold text-xl text-green-600">Foodie</span> bring to you the best restaurants to your reach stress free!</p>
      <img src="../images/ratatouille.jpg" alt=""  class="w- mr-auto rounded-md">
      <img src="../images/management.png" alt=""  class="ml-auto rounded-md">
			<p class="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl">Management of reservations , meals and Clients is being facilitated</p>
		</div>
    <div class="text-center my-10 text-gray-600 border-b-2 w-1/2 border-green-600 font-bold text-2xl">Meals you could find . . .</div>

    <!--Restaurant showcase Cards -->
    <!-- <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#79E281" d="M40.9,-23.7C51.3,-5.6,57,15.3,49.3,28.9C41.7,42.5,20.9,49,3.1,47.2C-14.7,45.4,-29.5,35.5,-41.6,19.2C-53.8,3,-63.4,-19.6,-56,-35.9C-48.6,-52.2,-24.3,-62.4,-4.5,-59.8C15.2,-57.2,30.5,-41.8,40.9,-23.7Z" transform="translate(100 100)" />
    </svg> -->

    <firstOption/>
    <secondOption/>
    




  <!-- <div class="grid h-screen place-items-center">
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
     
      <ul v-for="(data, index) in restaurants" :key="data.id" class="flex w-full flex-col m-5" >       
        <button button @click="RestoChoice(data.id)">
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
            <p>{{ data.email.split("@")[0] }}</p>
          </li>
        </button>
        <router-link :to="link">one</router-link>
      </ul>  </div>
  </div> -->
</template>
<script>
import firstOption from "./components/firstOption.vue";
import secondOption from "./components/secondOption.vue";
// import blob from "../images/blob.png";

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
      link:"",
      blob:"../images/blob.png"

    }
  },
  components:{
    LoopingRhombusesSpinner,
    firstOption,
    secondOption,
  }
  ,
//   async mounted(){
//     this.isLoading = true;
//     await axios.get("http://localhost:8000/restaurant"
//     ).then((response) => {
//     console.log(response.data);
//     this.isLoading = false;
//     this.restaurants = response.data
//     for(let i=0; i<this.restaurants.length; i++){
//       console.log(this.restaurants[i].email.split("@")[0])
//       this.link = this.restaurants[i].email.split("@")[0]
//       // this.route = this.restaurants[i].email.split("@")[1]
      
// ;
//     }

//     })
//   },
  methods: {
    changeHosting(hosting){
      this.hosting = hosting
    },
    RestoChoice(id){
      this.isLoading = true;
      console.log(id)
      if(id===1){
        this.$router.push({path: '/expresso'})
      }else {
        
        this.$router.push({path: '/dine'})
        console.log(id);
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
.element{
  background-image: url(../images/blob.svg);
  background-position: 0lvh;

}
.main{
  background-image:url("../../images/background-img.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.hero{
  background-color:#000000;
  background-repeat: no-repeat;
  background-size: cover;
}
header{
  position: fixed !important;
}

/* .blur{
  opacity: 0.2;
  position:relative !important;
}
.check{
  position:relative !important;
} */
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
