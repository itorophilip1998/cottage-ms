<template>
  <div>
      <div class="doctors pt-5 mt-5  bg-light">
              <!-- header -->
          <header class="p-2">
          <!-- <h5 class=" p-2  font-weight-bold text-dark">Doctors</h5> -->
             <div class="card mt-3 shadow" v-for="(doctor, index) in doctors.doctors" :key="index">
               <img class="card-img-top" :src="`${doctor.img}`" alt="">  
               <div class="card-body text-justify">
                 <h4 class="card-title text-dark font-weight-bold">{{ doctor.name }} <i class="fa fa-tag text-danger" aria-hidden="true"></i></h4>
                 <p class="card-text">{{ doctor.description }}</p>
                 <div class="rating p-2"> 
                   <i v-for="item in doctor.rating" :key="item" class="fa fa-star  text-warning" aria-hidden="true"></i> <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  
                 </div>
                 <nuxt-link class="btn btn-primary" :to="`/appointment?email=${doctor.email}`">Book Appointment <i class="fa fa-handshake-o" aria-hidden="true"></i></nuxt-link> 
                 <a href="https://web.facebook.com" class="btn  float-right text-primary"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                 <a :href="`mailto:${doctor.email}`" class="btn  float-right text-danger"><i class="fa fa-comments-o" aria-hidden="true"></i></a>         
               </div>
             </div>

          </header>

                 <a class="btn btn-primary" href="https://www.kelinahospital.com/make-an-appointment">Meet External Doctors <i class="fa fa-handshake-o" aria-hidden="true"></i></a> 

          

      </div>
  </div>
</template>

<script>
import _doctors from "./db/doctor.json";
export default {
 data() {
   return {
     doctors:_doctors,

   }
 },
 methods:{
   meetDocFunc(doctor){

   }
 }
}
</script>


<style >

</style>

