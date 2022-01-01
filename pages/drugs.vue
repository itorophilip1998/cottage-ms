
<template>
  <div>
   <div class="drugsBox mt-5 pt-5 p-2 bg-light">
        <h5 class=" p-2  font-weight-bold text-dark">Drugs</h5>

         <div class="drugs row m-0 mt-3" v-for="(drug,index) in drugs.drugs" :key="index">
            <div class="card text-center shadow bg-white pt-3">
              <div class="card-body text-justify">
                <h4 class="card-title">{{ drug.name }}<i class="fa fa-tag text-danger" aria-hidden="true"></i> </h4>
                <p class="card-text ">{{ drug.description }}</p>
                <h3><span class=" text-dark mb-3">     <b>₦{{ drug.price }}.00</b>    </span></h3>
                <a :href="drug.url" class="btn btn-primary w-100 " >Buy  <i class="fas fa-shopping-cart    "></i> </a>
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
