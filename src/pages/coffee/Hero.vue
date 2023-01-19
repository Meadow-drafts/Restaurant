<template>
  <div class="main">
    <div class="w-full h-full bg-center hero mb-0 bg-cover"

    >
      <span id="blackOverlay" class="w-full h-full absolute opacity-0 bg-black"></span>

      <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 75vh;">
        <!--      header-->
        <header class="absolute fixed w-full text-3xl bg-transparent border-b-2 border-black">
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

        <div
            class="absolute top-0 w-full h-full">

        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-black font-semibold text-7xl">Welcome To Expresso Yourself</h1>
                <p
                    class="mt-4 text-2xl text-yellow-200"
                >Creamy and Hot To serve</p>
              </div>
            </div>
          </div>
        </div>


      </div>

<!--      Restaurant Information-->
      <div class="w-full " style="" >
        <div class="flex-row flex">
          <div class=" w-2/3 mt-28  md:flex md:justify-between  bg-stone-800 p-5">
            <div class=" grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-lg font-semibold text-yellow-200 uppercase">676831115</h2>
                <ul class="text-white ">
                  <li class="mb-4 w-1/2">
                    <p class="hover:underline">
                      A small river named Duden flows by their place and supplies.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-lg font-semibold text-yellow-200 uppercase">198est 21th Street</h2>
                <ul class="text-white ">
                  <li class="mb-4 w-1/2">
                    <p class="hover:underline">
                      203 Fake St. Mountain View, San Francisco, California, USA.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-lg font-semibold text-yellow-200 uppercase">Open Monday to Friday</h2>
                <ul class="text-white ">
                  <li class="mb-4 w-1/2">
                    <p class="hover:underline">
                      8:00am - 9:00pm
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

<!--         Reservation From -->
          <div class="w-1/3 p-5 mb-6 md:mb-0" style="background-color:#c49b63;">

            <form>
              <p class="text-center text-lg underline">Make Your Reservation</p>

              <div class="relative z-0 w-full mb-6 group">
                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-b-black appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
              </div>

              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-b-black appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                  <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-b-black appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                  <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time</label>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-b-black appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                  <label for="floating_phone" class="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-b-black  appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                  <label for="floating_company" class="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Table Number</label>
                </div>
              </div>
              <button type="submit" class="text-white bg-yellow-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
<!--About us Section-->
    <div class=" ">
      <div class=" h-full text-gray-800">
        <div class="flex  flex-wrap  h-full">
<!--          about us img-->
          <div class="grow-0 shrink-1 md:shrink-0  lg:items-left relative  basis-auto w-50 mb-12 md:mb-0">
            <img
                src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                class="w-full"
                alt="Sample image"
            />
          </div>
          <!-- about us text card-->
          <div class="xl:ml-20 p-5 ml-24 mt-10 text-white  w-2/3 mb-12  absolute bg-black  ">
          <h2 class="text-6xl text-yellow-200">Our Story</h2>
            <p class="font-sans text-lg">On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand times and everything that was
              left from its origin would be the word "and" and the Little Blind Text should turn around and
              return to its own, safe country. But nothing the copy said could convince her and so it didn’t
              take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole
              and dragged her into their agency, where they abused her for their.</p>
          </div>
        </div>
      </div>
    </div>
<!--    our services-->
  <div>
    <img :src="services" alt="">
  </div>
<!--    menu-->
    <div class="flex relative items-center w-screen min-h-screen" style="font-family: 'Muli', sans-serif;">
      <div class="container ml-auto mr-auto flex justify-center flex-wrap items-start">
        <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
          <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold">
            Our Menu
          </h1>
        </div>
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

        <div class="mr-5">
          <div class="w-full  mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
        <div class="mr-5">
          <div class="w-full  mb-5 bg-white rounded-lg m-h-64  transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt=""
                   class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
        <div class="mr-5">
          <div class="w-full  mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlmZmVyZW50JTIwY29mZmVlJTIwZmxhdm9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""
                   class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
        <div class="mr-5">
          <div class="w-full  mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="https://images.unsplash.com/photo-1461010083959-8a5727311252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpZmZlcmVudCUyMGNvZmZlZSUyMGZsYXZvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""
                   class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
        <div class="mr-5">
          <div class="w-full  mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlp1NowasdEEsNdIC-d8x1A1QK6z46lrowg&usqp=CAU" alt=""
                   class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
        <div class="mr-5">
          <div class="w-full  mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="data:image/jpeg;base64,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" alt=""
                   class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
        <div class="mr-5">
          <div class="w-full  mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="data:image/jpeg;base64,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" alt=""
                   class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
        <div class="mr-5">
          <div class="w-full mb-5  bg-white rounded-lg m-h-64 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure class="">
              <img src="data:image/jpeg;base64,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" alt=""
                   class="h-64 w-64" />
            </figure>
            <div style="background-color: #c49b63; color: black" class=" p-4 flex flex-col">
              <div>
                <h5 class="text-white text-2xl font-bold leading-none">
                  Expresso
                </h5>
                <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
              </div>
              <div class="flex items-center">
                <div class="text-lg text-white font-light">
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
 </div>

  <footer class="bg-black h-1/6">
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
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
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

export default {
  name:'Hero',
  data(){
    return{
    services:'./src/images/services.png',
    heroImg:'./src/images/heroImg.avif'
    }
  }
};
</script>

<style>
.main{
  background-image:url("../../images/background-img.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.hero{
  background-image:url("../../images/heroImg.avif");
  background-repeat: no-repeat;
  background-size: cover;
}
header{
  position: fixed !important;
}
</style>