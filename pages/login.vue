<template>
  <div class="p-2 pt-5 mt-4 bg-light vh-100">


       <form class="py-3 pt-4">
            <div class="form-titile pb-3">
              <h5 class="m-0">Welcome Back!</h5>
            <small class="text-muted">Sign in to Cottage Hospital</small>
            </div>

            <div class="form-group mt-4">
              <input type="text"
                class="form-control p-4" name="" id="" aria-describedby="helpId" placeholder="Email">
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>
            <div class="form-group mt-4">
              <input type="password"
                class="form-control p-4" name="" id="" aria-describedby="helpId" ref="password" placeholder="Password">
                  <i v-if="!passwordCheckData" class="fa fa-eye link password-check  text-primary" @click="passwordCheck('show')" ></i>
                <i  v-if="passwordCheckData" class="fa fa-eye-slash password-check  link text-primary" @click="passwordCheck('open')" ></i>
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>
            <div class="form-group mt-4">
              <button
                class="  btn btn-primary shadow w-100"  > Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
            </div>


            <div class="form-group ">
              <button type="button"
                class="  btn  shadow col-12 btn-light  border text-primary border-primary" @click="$router.push('/signup')"  > Create new Account </button>
            </div>

        </form>
  </div>
</template>

<script>
export default {
data() {
  return {
    passwordCheckData:false,
  }
},
methods: {
   passwordCheck(data){
             if (data=="show") {
                 this.passwordCheckData=!this.passwordCheckData;
                 this.$refs.password.type="text"
             }
             else{
                this.passwordCheckData=!this.passwordCheckData;
                this.$refs.password.type="password"

             }
        }
},
}
</script>
<style >
.mini-line{
  padding:1px;
  width:30%;
  height:2px;
  background:lightgray;
  display:inline-block;
}
</style>
