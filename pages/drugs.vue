
<template>
  <div>
   <div class="drugsBox mt-5 pt-5 p-2 bg-light">
        <!-- <h5 class=" p-2  font-weight-bold text-dark">Drugs</h5> -->

         <div class="drugs row m-0 mt-3" v-for="(drug,index) in drugs.drugs" :key="index">
            <div class="card text-center shadow bg-white pt-3">
              <div class="card-body text-justify">
                <h4 class="card-title">{{ drug.name }}<i class="fa fa-tag text-danger" aria-hidden="true"></i>
                 <small v-if="drug.type=='Card'" class="badge badge-pill badge-danger rounded-pill float-right pt-1 shadow">{{drug.type}}</small>
                 <small v-if="drug.type=='Tablet'" class="badge badge-pill badge-info rounded-pill float-right pt-1 shadow">{{drug.type}}</small>
                 <small v-if="drug.type=='Syrub'" class="badge badge-pill badge-warning rounded-pill float-right pt-1 shadow">{{drug.type}}</small>
                 
                  </h4>
                <p class="card-text ">{{ drug.description }}</p>
                <h3><span class=" text-dark mb-3">     <b>₦{{ drug.price }}.00</b>    </span></h3>
                <a :href="drug.url" class="btn btn-primary w-100 shadow " >Buy  <i class="fas fa-shopping-cart    "></i> </a>
              </div>
            </div>
         </div>
   </div>

  </div>
</template>


<script>
import drugs from './db/drugs.json'
export default {
  data() {
    return {
        drugs

    }
  },
}
</script>
<style >
 
.badge{
  font-size:10px !important;
}
</style>
