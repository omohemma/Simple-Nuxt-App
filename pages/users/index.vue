<template>
<div>
     <h2>Users Page</h2>
<div class="col-md-3">
  <input type="text" v-model="id" class="form-control mb-3">
    <button type="button" class="btn btn-primary btn-block" @click="loadUser">Load User</button>
</div>
  
</div>
   
</template>

<script>
export default {
  data(){
    return {
      id:''
    }
  },
  methods:{
    loadUser(){
        this.$router.push(`/users/${this.id}`);
      }
  }
}
</script>