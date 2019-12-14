<template>
  <div class="container">
    <h2>Making API calls the Vue Way</h2>
    <hr>
    <div class="container row">
      <Card v-for="post in posts" :key="post.id" :post="post" class="mx-auto">{{post.title}}</Card>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Card from "@/components/Card";
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        post: ''
      }
    },
    async asyncData({store}) {

      let {data} =  await axios.get('https://jsonplaceholder.typicode.com/posts');
      //return {posts:data}
      store.dispatch('setPosts',data);

      //
      // return axios.get('https://jsonplaceholder.typicode.com/posts')
      //   .then((response) => {
      //     return {posts: response.data}
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   })
    },
    head() {
      return {
        title : 'List Of posts'
      }
    },
    computed:{
      ...mapGetters(['posts'])
      // allPosts() {
      //   return this.$store.getters.posts;
      // }
    },
    components:{
      Card
    }
  }
</script>


<!--<script>-->
<!--  import axios from 'axios'-->
<!--  export default {-->
<!--    data(){-->
<!--      return {-->
<!--        posts : []-->
<!--      }-->
<!--    },-->
<!--    mounted() {-->
<!--      axios.get('https://jsonplaceholder.typicode.com/posts')-->
<!--        .then((response)=>{-->
<!--            this.posts = response.data;-->
<!--      })-->
<!--        .catch((error)=>{-->
<!--            console.log(error);-->
<!--      })-->

<!--    }-->
<!--  }-->
<!--</script>-->
