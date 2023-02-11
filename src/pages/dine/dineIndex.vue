<template>
  <div class="scrollbar-hide display">
    <div class="h-1/5">
      <carouselHero/>
    </div>
    <ShowCaseMenu/>
  </div>
</template>

<script>
import carouselHero from "./CarouselHero.vue";
import ShowCaseMenu from "./ShowCaseMenu.vue";
import axios from 'axios'
export default {
  name:'dineIndex',
  data(){
    return{

    }
  },
  async mounted(){
 let result = await axios.get(`http://localhost:8000/restaurant`);
 console.log(result)
  },
  components:{
    carouselHero,
    ShowCaseMenu,
  }
}

</script>

<style>
/*.slide{*/
/*  height: 10%;*/
/*}*/
*{
  /* font-family: cursive; */
  font-size: small;
}
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.display{

  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>