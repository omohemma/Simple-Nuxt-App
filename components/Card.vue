<template>
  <div>
    <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">{{post.id}}</div>
      <div class="card-body">
        <h5 class="card-title"><nuxt-link :to="{name:'posts-id',params:{id:post.id}}">{{post.title}}</nuxt-link></h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      post:Object
    }
  }
</script>
