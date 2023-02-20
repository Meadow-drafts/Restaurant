<template>
  <div class="main">
    <div class="w-full h-full  mb-0"
    style="background-image: url('../../images/fast-food.jpg')!important;
    background-repeat: no-repeat;
    background-size: cover;"
    
    >
      <span id="blackOverlay" class="w-full h-full absolute opacity-0 bg-white"></span>
      <div class="relative  pt-16 pb-32 flex content-center items-center justify-center" 
      style="min-height: 90vh;background-image: url(https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-header-bg.jpg);
      background-repeat: no-repeat;
      background-size: cover;"
     >
        <!--header-->
      <header class="w-full text-3xl bg-transparent shadow-lg">
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
              text-white
              md:text-2xl
              hover:text-blue-400 mr-10 "
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
                >
                <img src="https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-logo.png" class="h-20 w-30 rounded-full"/>
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
                <li class=" text-2xl font-bold text-stone-400 hover:text-gray-400">
                  Home
                </li>
                <li class=" text-2xl font-bold text-stone-400  hover:text-gray-400">
                  About
                </li>
                <li class=" text-2xl font-bold text-stone-400  hover:text-gray-400">
                  Services
                </li>
                <li class=" text-2xl font-bold text-stone-400 hover:text-gray-400">
                  Our Menu
                </li>  
                           
                
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <!--hero section-->
        <div class="container top-10 grid grid-cols-2  " style="font-family: cursive; color:#c49b63">
          <div class=" flex flex-col ">
            <p class="-mt-10 text-7xl text-white">
              Express Fast food to raise your mood!
                Mexican Burger</p>
            <button type="button" class="px-5 py-3 mt-10 text-lg font-semibold bg-red-600 text-white rounded w-1/2">Make a Reservation</button>

          </div>          
        </div>
      </div>
      <!--Restaurant Information-->
        <div style="font-family: cursive;" class="text-gray-400 rounded-b-lg grid grid-cols-2 gap-2 w-1/2 p-20 sm:grid-cols-3 place-items-center bg-black">
          <div>
                <h2 class="mb-6 text-lg font-semibold uppercase pt-3">198est 21th Street</h2>
                <ul class="text-white ">
                  <li class="mb-4 ">
                    <p class="hover:underline">
                      203 Fake St. Mountain View, San Francisco, California, USA.
                    </p>
                  </li>
                </ul>
          </div>
          <div>
                <h2 class="mb-6 text-lg font-semibold uppercase">Monday to Friday</h2>
                <ul class="text-white ">
                  <li class="mb-4 ">
                    <p class="hover:underline">
                      676831115
                    </p>
                    <p class="hover:underline">
                      8:00am - 9:00pm
                    </p>
                  </li>
                </ul>
          </div>
          <div class="">
                <h2 class="mb-6 text-lg font-semibold  uppercase">Monday to Friday</h2>
                <ul class="text-white ">
                  <li class="mb-4">
                    <p class="hover:underline">
                      676831115
                    </p>
                    <p class="hover:underline">
                      8:00am - 9:00pm
                    </p>
                  </li>
                </ul>
          </div>
         </div>
    </div>
      <!--    info card counter section-->
      <div class="py-5 ">
      <main class="h-full overflow-y-auto">
        <p class="text-4xl text-center text-red-600 font-bold m-5 border-b-2 border-white shadow-b-lg" style="font-family: cursive;">Our Stats</p>
        <div class="container mx-auto grid">
          <!-- Cards -->
          <div class="grid gap-6 mb-8 grid-cols-2 xl:grid-cols-4">
            <!-- Card -->
            <div style="height: 10rem;"
                class="flex items-center p-4 bg-black rounded-lg shadow-xs"
            >
              <div
                  class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full "
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                    class="mb-2 text-xl font-medium text-gray-400"
                >
                  Users
                </p>
                <p
                    class="text-lg font-semibold text-gray-200"
                >
                  0
                </p>
              </div>
            </div>
            <!-- Card -->
            <div style="height: 10rem;"
                class="flex items-center p-4 bg-black rounded-lg shadow-xs"
            >
              <div
                  class="p-3 mr-4 text-green-500 bg-green-100 rounded-full"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                    class="mb-2 text-xl font-medium text-gray-400"
                >
                  Sales
                </p>
                <p
                    class="text-lg font-semibold text-gray-200 "
                >
                  0
                </p>
              </div>
            </div>
            <!-- Card -->
            <div style="height: 10rem;"
                class="flex items-center p-4 rounded-lg shadow-xs bg-black"
            >
              <div
                  class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full "
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                      fill-rule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                    class="mb-2 text-xl font-medium text-gray-400"
                >
                  Rating
                </p>
                <p
                    class="text-lg font-semibold text-gray-200"
                >
                  0
                </p>
              </div>
            </div>
            <!-- Card -->
            <div style="height: 10rem;"
                class="flex items-center p-4 bg-black rounded-lg shadow-xs "
            >
              <div
                  class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                    class="mb-2 text-xl font-medium text-gray-400"
                >
                  Purchases
                </p>
                <p
                    class="text-lg font-semibold text-gray-200"
                >
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div v-if="isShowDetails">
      <p class="text-4xl text-center text-red-600 font-bold m-5 border-b-2 border-white shadow-b-lg" style="font-family: cursive;">Make a Reservation</p>
      <div class="grid grid-cols-2  lg:w-1/2 w-full lg:ml-96  -mr-32 p-10">
        <div class="element-container max-w-md p-4 bg-white border border-gray-200  shadow sm:p-8 ml-32">
                
      </div>
      <div class="max-w-md p-4 bg-white border border-gray-200 shadow sm:p-8 ">
                <div class="flex mt-5 items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-center border-b-2 text-gray-900 w-full">Your Order</h5>                  
                </div>
                <div class="flow-root">   
                                
                  <div class="flex items-center space-x-4 divide-y divide-gray-200">
                    
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div class="relative z-0">
                          <input v-model="reserve.name" type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                          <label for="floating_standard" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meal</label>
                      </div>
                      <div class="relative z-0">
                          <input v-model="reserve.quantity" type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                          <label for="floating_standard" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                      </div>              
                      <p class="text-gray-500 ">Price: {{ reserve.price }} XAF</p>
                      <p class="text-gray-500 font-bold">Delivery fee: 1000 XAF </p>
                      <p class="text-green-500 text-sm mt-2 border-b-2 border-black text-center">Please fill the remaining fields if you want to reserve a table </p>
                      <div class="flex mt-5 gap-5 items-center justify-between mb-4">
                        <div class="relative z-0">
                          <input v-model="reserve.reservation_date" type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                          <label for="floating_standard" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">dd-mm-yyyy</label>
                        </div>
                        <div class="relative z-0">
                            <input v-model="reserve.number_seats" type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                            <label for="floating_standard" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number of seats</label>
                        </div>
                      </div>
                      <p class="text-gray-500 font-bold">Reservation fee: 2500 XAF </p>
                      <div class="flex items-center justify-between">   
                        <!-- <p class="text-gray-500 font-bold">Amount:  </p>
                        <div class="relative z-0">
                          <input v-model="reserve.amount" type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                          <label for="floating_standard" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
                      </div>               -->
                      </div>
                      
                      <button @click="confirmReserve" class="bg-red-600 w-full text-white font-bold py-2 px-4 rounded">
                          Confirm
                        </button>
                    </div>
                  </div>                 
                </div>
      </div>

      </div>    
    </div>
   
      <!--    menu-->
    <div id="menu" class="grid place-items-center mt-10 " style="font-family: 'Muli', sans-serif;">
      <div class="container ml-auto mr-auto flex justify-center flex-wrap items-start">
        <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
          <h1 class="text-3xl text-center border-b-2 border-white lg:text-4xl text-red-600 font-extrabold" style="font-family: cursive;">
            Our Menu
          </h1>
        </div>
        <div   class="grid gap-6 mb-8 grid-cols-2 xl:grid-cols-4">
          <div v-for="data in menus" :key="data"   class="mr-5">
            <div class="w-full mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="">
                <img :src="data.img_url" alt=""
                     class="xl:h-64 rounded-t-lg w-64" />
              </figure>
              <div style="color: black" class="rounded-b-lg p-4 bg-red-600 flex flex-col">
                <div>
                  <h5 class="text-gray-300 text-2xl font-light leading-none">
                    {{data.name}}
                  </h5>
                </div>
                <div class="flex items-center">
                  <div class="text-lg font-bold text-black">
                    {{data.price}} XAF
                  </div>
                  <button @click="detailModal(data.id,data.restaurant_id,data.price)"  class="rounded-full bg-black text-white hover:bg-white hover:text-black hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
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
    
  
    
    
 </div>
<footer class="bg-black pt-5 h-1/6">
    <div class="grid grid-cols-3 gap-8 px-6 py-2 md:grid-cols-3">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class=" hover:underline">About</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Careers</a>
          </li>

        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Help center</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline">Discord Server</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline">Twitter</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline">Privacy Policy</a>
          </li>
          <li class="">
            <a href="#" class="hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-4 py-6 bg-black md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Expresson Yourself™</a>. All Rights Reserved.
        </span>
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">Facebook page</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
          <span class="sr-only">Instagram page</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          <span class="sr-only">Twitter page</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
          <span class="sr-only">GitHub account</span>
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
          <span class="sr-only">Dribbble account</span>
        </a>
      </div>
    </div>
  </footer>




</template>

<script>
import axios from 'axios';
export default {
  name:'Hero',
  data(){
    return{
    showMenu:false,
    showDetails:true,
    services:'./src/images/services.png',
    heroImg:'./src/images/coffee-hero.avif',
    menus:[],
    reservations:[],
    total_price : null,
    reserve:{
      name:'',
      restaurant_id:'',
      user_id:'',
      quantity:'',
      meal_id:'',
      price:'',
      number_seats:'',
      reservation_date:'',
      amount:''
    },
    delivery_price:1000,
    reserve_price:2500

    }
  },
  async mounted() {
    this.showDetails = false
    await axios.get("http://localhost:8000/meal/showby/1"
    ).then((response)=>{
      console.log(response.data);
      let datas = response.data;
      // filter meals whose status is = available
      this.menus = datas.filter(data =>
        data.status === "Available"
      )
      console.log("filtered", this.menus)
    })
  },
  computed:{
    isShowDetails(){
      return this.showDetails;
    }
  },
  methods:{
    // load meal by id to the reservation form when modal opens after clicking on meal buttton
    //meal id for api is gotten when clicked on meall button
  async detailModal(id,restaurant_id, price){
      console.log("why tf")
      this.user_id = localStorage.getItem("user_id")
      console.log(this.user_id)
    this.showDetails = !this.showDetails;
    await axios.get(`http://localhost:8000/meal/show/` +id
    ).then((response)=>{
      console.log("to reserve",response.data)
      this.reserve.price = response.data.price
      this.reserve.name = response.data.name
      this.reservations = response.data;
      this.reserve.restaurant_id = response.data.restaurant_id
      this.reserve.meal_id = id
      
    })
  },
  async confirmReserve(){
    console.log("reserve")
    this.reserve.user_id = localStorage.getItem("user_id")
    console.log(this.reserve.restaurant_id, this.reserve.user_id, this.reserve.quantity)
    
    if(this.reserve.restaurant_id && this.reserve.quantity && this.reserve.meal_id && this.reserve.user_id ){
      console.log("data ok")
      // condition for dine in
      if(this.reserve.reservation_date && this.reserve.number_seats)
      {
        this.reserve.amount = this.reserve.price * this.reserve.quantity + this.reserve_price
        await axios.post("http://localhost:8000/reservation-create",{
          restaurant_id:this.reserve.restaurant_id,
          quantity:this.reserve.quantity,
          meal_id:this.reserve.meal_id,
          user_id:this.reserve.user_id,
          number_seats:this.reserve.number_seats,
          reservation_date:this.reserve.reservation_date,
          amount:this.reserve.amount
        }
        ).then((response)=>{
          console.log(response.data)
          this.reservations = response.data;
          alert(response.data)          
          this.reserve.reservation_date = null;
          this.reserve.number_seats = null;
          this.reserve.amount = null;
          this.reserve.name = null;
          this.reserve.restaurant_id = null;
          this.reserve.quantity = null;
          this.reserve.meal_id = null;
          this.reserve.user_id = null;
          this.reserve.price = null;
          this.showDetails = false;
        })
      }else {
        this.reserve.amount = this.reserve.price * this.reserve.quantity + this.delivery_price 
        await axios.post("http://localhost:8000/reservation-create",{
          restaurant_id:this.reserve.restaurant_id,
          quantity:this.reserve.quantity,
          meal_id:this.reserve.meal_id,
          user_id:this.reserve.user_id,
          amount:this.reserve.amount
        }
        ).then((response)=>{
          console.log(response.data)
          alert(response.data)          
          this.reservations = response.data;
          this.reserve.amount = null;
          this.reserve.restaurant_id = null;
          this.reserve.quantity = null;
          this.reserve.meal_id = null;
          this.reserve.user_id = null;
          this.showDetails = false;
        })
      }
    }
  },
  // async chooseMeal(id,rest_id,price) {
  //     await axios.post("http://localhost:8000/reservation-create",
  //     {
  //         restaurant_id:rest_id,
  //         meal_id:id,
  //         table_number:5,
  //         tourist_id:1,
  //         amount:price,
  //         date:"16/02/2023",
  //         status:'Confirmed'
  //     }).then((response)=>{
  //       console.log("this",response.data)
  //   })

  //     // this.emitter.emit('choose-meal', id, rest_id);

  // }
  },
};
</script>

<style>

header{
  position: fixed !important;
}
.order-card{
  background-image:url('../images/cook.png');
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