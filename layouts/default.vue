<template>
  <div>
    <!-- sidebar -->
 <div  v-if="sidebar">
      <div id="sidebar">
    <div class="handler   mb-2 p-2">

        <nuxt-link to="/" class="brand text-secondary">
          <img src="~assets/images/logo.jpeg" class="brandlogo" alt="">
            Cottage Hospital Ukana</nuxt-link>
              <div class="contentBox ">
                  <span  class="text-secondary" @click="toggler()">x</span>
            </div>
    </div>
    <div class="img text-center">
        <img src="~assets/images/avater.png" class="logo" alt="">
    </div>
    <div class="profile-info text-center py-3">
      <button class="btn btn-light mb-2   pt-1 ml-1 shadow-sm btn-sm " @click="logout();" >logout <i class="fa fa-sign-out" aria-hidden="true"></i></button>
      <h5 class="text-dark mb-0 pb-0">Itoro Emmanuel Philip</h5>
        <small class="text-muted mt-0 pt-0">Itorophilip1998@gmail.com</small>

    </div>
    <div class="list border-top" >
        <ul class="p-1 pt-3">
          <li v-for="list in list1"   @click="navigate(list.url);"   :class="`${($route.path==list.url)? 'li lia':''}`"  :key="list.id">
            <i     :class="`${ ($route.path==list.url)? 'lia':''}  ${ list.icon}`"  ></i>
            <span  >{{list.name}} </span>
          </li>
        </ul>
    </div>
  </div>
  <div class="overlay" @click="toggler()"></div>
 </div>
 <!-- header -->
     <header class="handler border-bottom  fixed-top bg-white  shadow mb-2 p-2" >
        <div class="navbar-light pt-1" v-if="!sidebar">
                  <button class="navbar-toggler-icon  p-2 btn btn-default float-right" @click="toggler()"></button>
        </div>

       <nuxt-link to="/" class="brand text-secondary">
          <img src="~assets/images/logo.jpeg" class="brandlogo" alt="">
            Cottage Hospital Ukana</nuxt-link>
  </header>

  <Nuxt class="mt-5"/>
  <Footer v-if="$route.path=='/'"/>
   <!-- <div id="preloader"></div> -->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import Footer from "./footer";
export default {
  components:{
    Footer
  },
data() {
  return {
    sidebar:false,
      list1: [
         {
           name:'Home',
           url:'/',
           icon:'fa fa-home',

         },
         {
           name:'Dashboard',
           url:'/dashboard',
           icon:'fas fa-tachometer-alt',

         },
         {
           name:'Drugs',
           url:'/drugs',
           icon:'fa fa-medkit',


         },
         {
           name:'Meet a Doctor',
           url:'/doctors',
           icon:'fa fa-user-md',


         },
         {
           name:'My Prescriptions',
           url:'/prescription',
           icon:'fa  fa-stethoscope',


         },
         {
           name:'My Drugs Calender',
           url:'/calender',
           icon:'fas fa-calendar-check  ',


         },

      ]
  }
},
methods: {
  toggler(){
     this.sidebar=!this.sidebar;
  },
  navigate(route){
      this.$router.push(route)
      this.toggler();
  },
  logout(){
    this.$router.push('/login')
    this.toggler();
  }
},
}
</script>

<style >

.contentBox {
      font-family: monospace;
    font-size: 23px;
    position: absolute;
    z-index: 3;
    top: 28px;
    right: -45px;
    background: white;
    padding: 5px 20px 5px 14px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
}
 #sidebar{
  animation-name: myanimation;
  animation-duration: 0.4s !important;
  animation-fill-mode:backwards ;
  animation-timing-function: ease;
  animation-iteration-count: 1;
}
@keyframes myanimation{

  0%{
      left: -300px;
   }
  100%{
      left: 0px;
      }

}
.fa-bars{
  font-size:20px !important;
  color:rgb(43, 42, 42) !important;
}
#sidebar{
  z-index:3;
  width:240px;
  background: var(--white);
  position:fixed;
  height:100vh;
  left:0;
  top:0;
  /* display: none; */
}
.overlay{
  background: rgba(0,0,0,0.5);
  top:0;
  left:0;
  bottom:0;
  right:0;
  height:100vh;
  position:fixed;
  z-index:2;


}
.logo{
width:120px;
height:120px;
border-radius:50%;
border:3px solid rgba(241, 236, 236, 0.856);
}
li>i{
  color:var(--secondary);
  margin-left:10px;
  margin-right:10px;

}
li>i{
  font-size:20px !important;
}
li{
  list-style:none !important ;
  padding:6px;
  color:var(--dark);
  font-size:18px !important;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
li:hover , li:hover i,.lia{
  list-style:none !important ;
  padding:6px;
  background:var(--primary);
  color:white !important;

}
li:hover, .li {
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
}
</style>
