
<template>
  <div>
   <div class="drugsBox mt-5 pt-5 p-2">
        <h5 class=" p-2  font-weight-bold text-dark">Drugs</h5>

         <div class="drugs row m-0 mt-3" v-for="(drug,index) in drugs.drugs" :key="index">
            <div class="card text-center">
              <img class="card-img-top mx-auto" :src="drug.image" alt="">
              <div class="card-body">
                <h4 class="card-title">{{ drug.name }} </h4>
                <p class="card-text">{{ drug.description }}</p>
                <h6 class="">\


                   {{ drug.price }}</h6>
                <!-- naira -->
              </div>
            </div>
         </div>
   </div>

  </div>
</template>


<script>
import drugs from './drugs.json'
export default {
  data() {
    return {
        drugs
    }
  },
}
</script>
<style >
.card-img-top{
  width:100px;
}
</style>
