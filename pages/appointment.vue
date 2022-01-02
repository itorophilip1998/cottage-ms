<template>
  <div>
      <div class="doctors pt-5 mt-5  bg-light">
              <!-- header -->
          <header class="p-2"> 
               <div class="card mt-3 shadow" >
               <img class="card-img-top" :src="`${filterDoc [0].img}`" alt="">  
               <div class="card-body text-justify">
                 <h4 class="card-title text-dark ">Meet <span class="font-weight-bold "> {{ filterDoc[0].name}}</span><i class="fa fa-tag text-danger" aria-hidden="true"></i></h4>
                <div class="freedays"> 
                  <button class="btn ">
                        Days Available<i class="fa fa-long-arrow-right" aria-hidden="true"></i> 
                  </button>
                  <div class="row text-center">
                  <div v-for="item in filterDoc[0].freeDays" :key="item" :class="`d-inline-block rounded-circle text-muted  border font-weight-bold shadow date ${(item.on)?'newDate':''}`" >{{ item.days }}</div>
                   </div>
                </div>
                    <form class="py-3 pt-1"> 
 
                    <div class="form-group mt-4">
                      <small id="helpId" class="form-text text-muted pl-1">Fix Date</small>
                         <input type="date" class="form-control shadow p-4" placeholder="" id="">
                      <small id="helpId" class="form-text text-danger d-none">Help text</small>
                    </div>
                 
                    <div class="form-group mt-4">
                      <textarea class="form-control shadow p-2" id="" cols="30" rows="7" placeholder="Why do you want to meet the doctor?"></textarea>
                      <small id="helpId" class="form-text text-danger d-none">Help text</small>
                    </div>
                   

               <div class="rating p-2"> 
                   <i v-for="item in filterDoc[0].rating" :key="item" class="fa fa-star  text-muted shadow" aria-hidden="true"></i> <i class="fa fa-long-arrow-right" aria-hidden="true"></i>  
                 </div>
                 <nuxt-link class="btn btn-primary" :to="`/appointment?email=${filterDoc[0].email}`">Book Appointment <i class="fa fa-handshake-o" aria-hidden="true"></i></nuxt-link> 
                 <a href="https://web.facebook.com" class="btn  float-right text-primary"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                 <a :href="`mailto:${filterDoc[0].email}`" class="btn  float-right text-danger"><i class="fa fa-comments-o" aria-hidden="true"></i></a>         
                     
                 </form>

        
               </div>
             </div>

           
          </header>

      </div>
  </div>
</template>

<script>
import _doctors from "./db/doctor.json";
export default {
 data() {
   return {
     doctors:_doctors.doctors,

   }
 },
 computed:{
    filterDoc(){
      return this.doctors.filter(doctor=> {
        if(doctor.email.match(this.$route.query.email)){
          return doctor;
        }
      }
      )
    }
 },
 methods:{
   meetDocFunc(doctor){

   }
 }
}
</script>


<style >
.date{
  width: 40px !important;
  height: 40px !important;
      line-height: 2.4;
  margin:auto ;

}
.newDate{
  background: var(--success);
  color: var(--white) !important;
}
</style>

