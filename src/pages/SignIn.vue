<template>
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div
            class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-5 md:mb-0">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image"
            />
          </div>  
          <!--        Form-->
          <div class="xl:ml-20 xl:w-5/12 w-8/12 mb-12 md:mb-0">
              <div class="rounded border-2 p-10 m-10">              
                <p class="text-center p-5 font-bold text-4xl text-blue-500" style="font-family: cursive;">Register</p>
                <hr class="boeder-b-2 border-gray-200 shadow-md mb-12">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                        v-model="params.username"
                        type="name"
                        name="floating_name"
                        id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required/>
                    <label
                      for="floating_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    <div class="absolute inset-y-0 left-0  pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="ml-8">User Name</span>
                  </label
                    >
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                        v-model="params.email"
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required/>
                    <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >                  
                    
                    <div class="absolute inset-y-0 left-0  pointer-events-none">
                      <svg aria-hidden="true" class="w-6 h-6 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <span class="ml-8">Email</span></label
                    >
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                          v-model="params.password"
                          type="password"                     
                          name="floating_password"
                          id="floating_password"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                      />
                      <label
                        for="floating_password"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                      <div class="absolute inset-y-0 left-0  pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span  class="ml-8">Password</span>
                    </label
                      >
                    </div>
                  </div>
                  
                  <button
                  
                  @click="clickSigin"
                      type="submit"
                      style="background-color: #307feb"
                      class="grid place-items-center text-white xs:w-full w-auto mt-20 font-medium rounded-lg text-sm px-5 py-4 text-center"
                  >
                    <span v-if="!isLoading" >Submit</span>  
                    <looping-rhombuses-spinner
                    v-if="isLoading"
                    :animation-duration="2500"
                    :rhombus-size="15"
                    color="#fff"
                  />
                </button >
                <div class="text-center mt-10">
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <router-link to="/">
                        <p class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >LogIn</p>
                    </router-link>
                </p>
               </div> 
                </div>
                               
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  // import Select2 from 'vue3-select2-component';
  import { LoopingRhombusesSpinner } from 'epic-spinners'
  import Sidebar from "../partials/Sidebar.vue";
  import axios from 'axios'
  export default {
    name: "Signin",
    data() {
      return {
        isLoading:false,
        params:{
            username: "",
            email:"",
            password:""
        }
      };
    },
    components:{
      LoopingRhombusesSpinner,
      // Select2
    },
    methods:{
       async clickSigin(){
        this.isLoading = true;
        if(this.params.username && this.params.email && this.params.password){
         await axios.post('http://localhost:8000/users/register',{
            username:this.params.username,
            email:this.params.email,
            password:this.params.password
         }).then((response)=>{
            console.log(response.data.errcode)
            if(response.data.errcode === 200){
              localStorage.setItem('token',response.data.token)
             // this.$router.push('/options')    
             this.isLoading = false;          
            }else{
              alert("Authentication Failed!");
              this.isLoading = false;          
            }
         }).catch((error)=>{
          alert(error);
          this.isLoading = false;          
         })   
        }else{
          alert('Please fill the form');
          this.isLoading = false;          

        }
    }  
        
    },
  };
  </script>
  