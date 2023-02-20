<!-- <template>
    <!-- component -->
  <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style="background-image:url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')">
  <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-white">
      <div class="mb-8 flex flex-col items-center">
        <!-- <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" /> -->
        <h1 class="mb-2 font-bold text-5xl text-green-500" style="font-family: cursive;">Foodie</h1>
        <span class="text-gray-300">Create your Account</span>
      </div>
      <div>
        <div class="mb-4 text-lg">
          <input v-model="params.username" class="border-none bg-gray-400 bg-opacity-50 px-6 py-4 rounded-md text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="username" />
        </div>
        <div class="mb-4 text-lg">
          <input v-model="params.password" class="border-none bg-gray-400 bg-opacity-50 px-6 py-4 rounded-md  text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" />
        </div>
        <div class="mt-8 flex flex-col justify-center border-t-2 border-white p-2 text-lg text-black">
          <button  v-if="!isLoading" @click="clickLogin" 
          type="submit" 
          class="rounded-md bg-green-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">
          Submit
          </button>
          <looping-rhombuses-spinner
            v-if="isLoading"
            :animation-duration="2500"
            :rhombus-size="15"
            color="#5fcbb2"
            style="margin-left:6rem"
                  />
        <div class="text-center mt-10">
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <router-link to="/signin">
                        <p class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >LogIn</p>
                    </router-link>
                </p>
               </div> 
        </div>
    </div>
    </div>
  </div>
  </div>
  </template> -->