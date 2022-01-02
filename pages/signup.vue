<template>
  <div class="p-2 pt-5 bg-light vh-100">


       <form class="py-3">
            <div class="form-titile pb-3">
              <h5 class="m-0">Create new Account!</h5>
            <small class="text-muted">Register a new account in Cottage Hospital</small>
            </div>

            <div class="form-group mt-4">
              <input type="text"
                class="form-control p-4" name="" id="" aria-describedby="helpId" placeholder="Email">
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>
            <div class="form-group mt-4">
              <input type="password"
                class="form-control p-4" name="" id="" aria-describedby="helpId" placeholder="Password">
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>
            <div class="form-group mt-4">
              <input type="password"
                class="form-control p-4" name="" id="" aria-describedby="helpId" placeholder="Confirm Password">
              <small id="helpId" class="form-text text-danger d-none">Help text</small>
            </div>
            <div class="form-group mt-4">
              <button
                class="  btn btn-primary shadow w-100"  > Signup <i class="fa fa-pencil" aria-hidden="true"></i></button>
            </div>


            <div class="form-group ">
              <button type="button"
                class="btn  shadow col-12 btn-light  border text-primary border-primary" @click="$router.push('/login')"  > I have account already! </button>
            </div>

        </form>
  </div>
</template>

<script>
export default {

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
