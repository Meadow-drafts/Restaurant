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

export default {
  name:'dineIndex',
  data(){
    return{

    }
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
  font-family: cursive;
  font-size: small;
}
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.display{
  background-image:url("../../images/background-img.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>