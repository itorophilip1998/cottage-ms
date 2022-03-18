<template>
  <div>
        <div class="dashboard pt-5 mt-5  ">
          <!-- header -->
          <header>
          <!-- <h5 class=" p-2  font-weight-bold text-dark">Dashboard</h5> -->
              <ul class="scrolBox m-0">
                <li v-for="(list,index) in list1" :key="index" :class="`${list.bg} text-center pt-3 shadow`" @click="routeFunc(list.url)">
                     <i :class="list.icon"></i>
                     <small class="d-block mt-2">{{ list.name }}</small>
                </li>

              </ul>

          </header>


          <!-- profile -->
          <div class="profile p-2 bg-light pt-4">
            <h6><b>Hello</b> Mr. Wisdom  <nuxt-link to="/profile" class="fa fa-pencil btn btn-sm btn-outline-secondary float-right"> Edit</nuxt-link></h6>
    <hr>
                  <!-- sickness -->
           <div class="sickness row m-0 my-3">
             <span> <small>Sickness/deases  </small><i class="fa fa-tag text-primary" aria-hidden="true"></i></span>
              <div class="col-5 my-2 text-center p-4 rounded-x text-danger bg-white m-auto shadow m-2 " v-for="(sickness, index) in profile.sickness" :key="index">
                {{ sickness }}
                 </div>
          </div>
           <div class="profileBox"> 
             <div class="shadow-sm mt-1 border bg-white p-3 rounded-x"><small class="pops">Dob</small> {{ profile.dob }}</div>
             <div class="shadow-sm mt-1 border bg-white p-3 rounded-x"><small class="pops">Gender</small> {{ profile.gender }}</div>
             <div class="shadow-sm mt-1 border bg-white p-3 rounded-x"><small class="pops">Marital-Status</small> {{ profile.marital_status }}</div>
             <div class="shadow-sm mt-1 border bg-white p-3 rounded-x"><small class="pops">Address</small> {{ profile.address }}</div>
             <div class="shadow-sm mt-1 border bg-white p-3 rounded-x"><small class="pops">Phone</small> {{ profile.phone }}</div>

             <div class="shadow-sm mt-1 border bg-white p-3 rounded-x"><small class="pops">On-Treatment</small> {{ (profile.onTreatment)? 'Yes':'NO' }}</div>
             <div class="shadow-sm mt-1 border bg-white p-3 rounded-x"><small class="pops">Date-Stated</small> {{ profile.date_started }}</div>
           </div>
          </div>

        </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    sidebar:false,
      list1: [
         {
           name:'Home',
           url:'/',
           icon:'fa fa-home',
           bg:"bg-primary text-white"
         },
         {
           name:'Dashboard',
           url:'/dashboard',
           icon:'fas fa-tachometer-alt',
           bg:"bg-success text-white"

         },
         {
           name:'Drugs',
           url:'/drugs',
           icon:'fa fa-medkit',
           bg:"bg-danger text-white"


         },
         {
           name:'Doctors',
           url:'/doctors',
           icon:'fa fa-user-md',
           bg:"bg-warning text-white"


         },
         {
           name:'Prescriptions',
           url:'/prescription',
           icon:'fa  fa-stethoscope',
           bg:"bg-primary text-white"


         } 

      ],
       
       profile: {
        dob:"4th may 1992",
        gender:"female",
        marital_status:"single",
        address:"Oron",
        phone:"...",
        onTreatment:false,
        date_started:"2nd Jan 2021",
        sickness:[
          "Typhod","Fever","Maleria","Headache"
        ]

        

    }
  }
  },
  methods:{
    routeFunc(url){
      this.$router.push(url)
    }
  }


  }
</script>
<style >
.pops{
  position: absolute;
  margin-top:-17px;
  font-size:12px;
  color:var(--secondary)

}
.profileBox>div{
  font-size:16px;
  font-weight:bold;
  color:rgba(0, 0, 0, 0.836);
  text-transform: capitalize;
}
.scrolBox>li{
  border-radius:10px;
  display: inline-block;
  position: relative;
  margin:5px;
      min-width: 120px !important;
  height:100px !important;
     list-style: none;

}
.scrolBox{
    display: inline-flex;
    padding: 2px;
overflow-x: scroll;
     width:100% ;
    display: inline-flex !important;
}
</style>
