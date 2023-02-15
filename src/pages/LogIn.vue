<template>
  <section class="h-screen">
    <div class="px-6 h-full text-gray-800">
      <div
          class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div
            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
        >
          <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
          />
        </div>

        <!--        others-->
        <div class="xl:ml-20 xl:w-5/12 w-8/12 mb-12 md:mb-0 rounded border-2 p-7 m-10">
          <p class="text-center p-5 font-bold text-4xl ">LogIn</p>
              <hr class="border-b border-gray-200 shadow-md mb-12">
            <div class="">              
              
                <div class="relative z-0 w-full mb-6 group">
                  <input
                      v-model="params.username"
                      type="name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required/>
                  <label
                      for="floating_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >User Name</label
                  >
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                        v-model="params.password"
                        type="password"                     
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Password</label
                    >
                  </div>
                </div>
                <button
                @click="clickLogin"
                    type="submit"
                    style="background-color: #307feb"
                    class="text-white grid place-items-center mt-10 font-medium rounded-lg text-sm xs:w-full w-auto  px-5 py-2.5 text-center"
                >
                 <span v-if="!isLoading" >Submit</span> 
                  <looping-rhombuses-spinner
                    v-if="isLoading"
                    :animation-duration="2500"
                    :rhombus-size="15"
                    color="#f3f4f6"
                  />
                </button>
                
              </div>     
            <div class="text-center">
              <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <router-link to="/signin">          
                  <p
                    class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                    Register
                  </p>                   
            </router-link>
                
              </p>
            </div>       
            
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners'
import Sidebar from "../partials/Sidebar.vue";
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      isLoading:false,
      params:{
            username: "",
            password:""
        }
    };
  },
  components:{
    LoopingRhombusesSpinner,
  },
  methods:{
    async clickLogin(){
      console.log('why')
      this.isLoading = true ;
      if(this.params.username && this.params.password){
         await axios.post('http://localhost:8000/users/login',{
          username:this.params.username,
          password:this.params.password
         }
         ).then((response)=>{
            console.log(response.data.errcode)
            if(response.data.errcode === 200){
              this.isLoading = false;
              localStorage.setItem('token',response.data.token)
              this.$router.push('/options')              
            }else{
              alert("Authentication Failed!");
              this.isLoading = false;
            }
         }).catch((error)=>{
          alert(error)
          this.isLoading = false;
         })   
        }else{
          alert('Enter correct data')
          this.isLoading = false;

        }
    }
  },
};
</script>
