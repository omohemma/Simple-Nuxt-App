<template>
  <div class="container">
    <h3>{{post.title}}</h3>
    <p class="lead">{{post.body}}</p>
    <nuxt-link to="/posts">Go Back to posts</nuxt-link>
  </div>
</template>


<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {
        post:''
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
    computed:{
      // post(){
      //   let post_id = this.$route.params.id;
      //   return this.$store.getters.getPostByid(post_id);
      // }
    },
    validate({params}){
      return /^\d+$/.test(params.id);
    }
  }
</script>
