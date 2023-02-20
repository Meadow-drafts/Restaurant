<template>
  <!-- component -->
<div class="element-container flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
<div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
  <div class="text-white">
    <div class="mb-8 flex flex-col items-center">
      <!-- <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" /> -->
      <h1 class="mb-2 font-bold text-5xl text-green-500" style="font-family: cursive;">Foodie</h1>
      <span class="text-gray-300">Create your Account</span>
    </div>
    <div>
      <div class="mb-4 text-lg">
        <input v-model="params.username" class="border-none bg-gray-400 bg-opacity-50 px-6 py-4 rounded-md text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="Username" />
      </div>

      <div class="mb-4 text-lg">
        <input v-model="params.email" class="border-none bg-gray-400 bg-opacity-50 px-6 py-4 rounded-md  text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="id@gmail.com" />
      </div>
      <div class="mb-4 text-lg">
        <input v-model="params.phone_number" class="border-none bg-gray-400 bg-opacity-50 px-6 py-4 rounded-md  text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="phone" placeholder="Phone number" />
      </div>
      <div class="mb-4 text-lg">
        <input v-model="params.address" class="border-none bg-gray-400 bg-opacity-50 px-6 py-4 rounded-md  text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="address" placeholder="Address" />
      </div>
      <div class="mb-4 text-lg">
        <input v-model="params.password" class="border-none bg-gray-400 bg-opacity-50 px-6 py-4 rounded-md  text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" />
      </div>
      <div class="mt-8 flex flex-col justify-center border-t-2 border-white p-2 text-lg text-black">
        <button  v-if="!isLoading" @click="clickSigin" 
        type="submit" 
        class="rounded-md bg-green-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-green-300">
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
                  <router-link to="/login">
                      <p class="text-white hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >LogIn</p>
                  </router-link>
              </p>
             </div> 
      </div>
  </div>
  </div>
</div>
</div>
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
            phone_number:"",
            address:"",
            password:""
        }
      };
    },
    components:{
      LoopingRhombusesSpinner,
      // Select2
    },
    mounted() {
      localStorage.clear("token","user_id");

    },
    methods:{
       async clickSigin(){
        this.isLoading = true;
        if(this.params.username && this.params.email && this.params.password && this.params.phone_number && this.params.address){
         await axios.post('http://localhost:8000/users/register',{
            username:this.params.username,
            email:this.params.email,
            phone_number:this.params.phone_number,
            address:this.params.address,
            password:this.params.password
         }).then((response)=>{
            console.log(response.data.errcode)
            if(response.data.errcode === 200){
              localStorage.setItem('token',response.data.token)
              localStorage.setItem('user_id',response.data.user_id)
             this.$router.push('/')    
             this.isLoading = false;          
            }else{
              alert("Registration Failed!");
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
  