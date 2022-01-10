<template>
  <div class="p-2 bg-light">
            <form class="pt-5 mt-4">
            <div class="form-titile pb-3">
              <h5 class="m-0 lt ">Edit yout profile
                <button      class="  btn float-right btn-primary shadow "  > Done </button></h5>
            </div>
              <div class="form-group mt-2">
              <input type="text"
                class="form-control p-4" name="" id="" aria-describedby="helpId" placeholder="Phone">
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>

            <div class="form-group mt-4">
              <small id="helpId" class="form-text text-muted">Date of Birth</small>
              <input type="date"
                class="form-control p-4" name="" id="" aria-describedby="helpId" placeholder="Email">
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>
            <div class="form-group mt-4">

               <div class="form-check form-check-inline">
                 <label class="form-check-label">
                   <input class="form-check-input" type="radio" name="gender" id="" value="checkedValue"> Male
                 </label>
               </div>
               <div class="form-check form-check-inline">
                 <label class="form-check-label">
                   <input class="form-check-input" type="radio" name="gender" id="" value="checkedValue"> Female
                 </label>
               </div>
            </div>
            <div class="form-group mt-2">
              <input type="text"
                class="form-control p-4" name="" id="" aria-describedby="helpId" placeholder="Address">
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>
            <div class="form-group mt-2">

               <div class="form-check form-check-inline">
                 <label class="form-check-label">
                   <input class="form-check-input" type="radio" name="status" id="" value="checkedValue"> Single
                 </label>
               </div>
               <div class="form-check form-check-inline">
                 <label class="form-check-label">
                   <input class="form-check-input" type="radio" name="status" id="" value="checkedValue"> Married
                 </label>
               </div>
               <div class="form-check form-check-inline">
                 <label class="form-check-label">
                   <input class="form-check-input" type="radio" name="status" id="" value="checkedValue"> Divorce
                 </label>
               </div>
            </div>

        </form>

          <div class="form-group border p-2 rounded-x">
              <input type="text"
                class="form-control p-4"  @change="sicknessFunc()" v-model="sickness" name="" id="" maxlength="10"  minlength="3" aria-describedby="helpId" placeholder="List any sickness you are suffering (4)">
              <small id="helpId" v-if="sicknessError" class="form-text text-danger ">Only Four Sickness is required</small>

                <div class="row m-0 mt-3 ds">
              <small v-for="(item,index) in sicknessList" :key="index" id="helpId" class="form-text text-danger p-2   border border-danger mt-2 text-center rounded-x  col-5 mx-auto">{{ item }}<small class="closeMe " @click="closeMeFunc(item,index)">x</small></small>
                </div>
            </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sickness:null,
      sicknessError:false,
      sicknessList:[]
    }
  },
 methods: {
   closeMeFunc(item,i){
      this.sicknessList.splice(i, 1);
      this.sicknessError=false;
      this.sickness=null;

   },
    sicknessFunc(){
      if(this.sicknessList.length>3){
        this.sicknessError=true;
        return false;
      }
      this.sicknessError=false;
    (this.sickness) ?this.sicknessList.push(this.sickness):"";
    this.sickness=null;

  }
 },
}
</script>
<style >
.ds>small{
  font-size: 13px !important;
  margin-top: 14px !important;
}
  .lt{
    line-height: 2;
  }
 .closeMe {
    color: white;
    background: var(--secondary);
    border-radius: 50%;
    padding: 0px 6px 1px;
    font-size: 14px;
    position: absolute !important;
   top: -10px;
    right: -5px;
  }
</style>
