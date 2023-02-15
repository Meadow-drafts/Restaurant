<template>
  
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <hollow-dots-spinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          color="#ff1d5e"
        />
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
              <div class="rounded border-2 p-7 m-10">              
                <p class="text-center p-5 font-bold text-4xl ">Register</p>
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
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >User Name</label
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
                    >Email</label
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
                      >Password</label
                      >
                    </div>
                  </div>
                  
                  <button
                  @click="clickSigin"
                      type="submit"
                      style="background-color: #307feb"
                      class="text-white mt-10 bg-yellow-700 hover:bg-yellow-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Submit</button >
                </div>
              <div class="text-center">
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <router-link to="/">
                        <p
                        href="#!"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >LogIn</p>
                        </router-link>
                </p>
               </div>                  
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  // import Select2 from 'vue3-select2-component';
  import { HollowDotsSpinner } from 'epic-spinners'
  import Sidebar from "../partials/Sidebar.vue";
  import axios from 'axios'
  export default {
    name: "Signin",
    data() {
      return {
        isLoading:true,
        params:{
            username: "",
            email:"",
            password:""
        }
      };
    },
    components:{
      // Select2
    },
    methods:{
       async clickSigin(){
        if(this.params){
         await axios.post('http://localhost:8000/users/register',{
            username:this.params.username,
            email:this.params.email,
            password:this.params.password
         }).then((response)=>{
            console.log(response.data.errcode)
            if(response.data.errcode === 200){
              localStorage.setItem('token',response.data.token)
              this.$router.push('/options')              
            }else{
              alert("Authentication Failed!")
            }
         }).catch((error)=>{
          alert(error)
         })   
        }else{
          alert('Enter correct data')

        }
    }  
        
    },
  };
  </script>
  
  <style>
.hollow-dots-spinner, .hollow-dots-spinner * {
      box-sizing: border-box;
    }

    .hollow-dots-spinner {
      height: 15px;
      width: calc(30px * 3);
    }

    .hollow-dots-spinner .dot {
      width: 15px;
      height: 15px;
      margin: 0 calc(15px / 2);
      border: calc(15px / 5) solid #ff1d5e;
      border-radius: 50%;
      float: left;
      transform: scale(0);
      animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
    }

    .hollow-dots-spinner .dot:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }

    .hollow-dots-spinner .dot:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }

    .hollow-dots-spinner .dot:nth-child(3) {
      animation-delay: calc(300ms * 3);

    }

    @keyframes hollow-dots-spinner-animation {
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }</style>