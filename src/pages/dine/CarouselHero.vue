<template>

</template>

<script>

import Header from "../../partials/Header.vue";
import axios from "axios";
export default{
  name:'carouselHero',
  components: {Header},
  data: () => ({
    text:'Dine in',
    active: 0,
    showMenu: false,
    // showDetails:false,
    // reservations:[],

  }),
  computed:{
    // isShowDetails(){
    //   return this.showDetails;
    // }
  },
  mounted() {
    let token = localStorage.getItem('token')
     
  },
  methods:{
  //   async detailModal(){
  //     this.loadIds
  //   this.showDetails = !this.showDetails;
  //   await axios.get(`http://localhost:8000/reservation_specific/3/1`
  //   ).then((response)=>{
  //     console.log(response.data)
  //     this.reservations = response.data;
  //   })
  // },
  loadIds(){
  
  }
  }
}
</script>


<style>
*{
  margin: 0;
}
.left-full {
  left: -100%;
}
.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}
.carousel-item.active {
  left: 0;
}
.title{
  position:absolute;
  top:20%;
  left:30%;
}
.images{
  position:absolute;
  bottom:0;
  width:100%;
}
header{
  position: absolute;
  top:0;
}

.adjust img,
video {
  max-width: 100%;
  height: 10px;
}
.slide {
  background-image: url(" ../../images/cook.png");

}
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