<template>
  <div class="container">
    <h3>{{post.title}}</h3>
    <p class="lead">{{post.body}}</p>
    <nuxt-link to="/posts">Go Back to posts</nuxt-link>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        post: ''
      }
    },
    async asyncData({params}) {

      let {data} =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      return {post:data}
    },
    head() {
      return {
        title : this.post.title
      }
    },
    validate({params}){
      return /^\d+$/.test(params.id);
    }
  }
</script>
