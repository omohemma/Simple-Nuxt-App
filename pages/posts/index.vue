<template>
  <div class="container">
    <h2>Making API calls the Vue Way</h2>
    <hr>
    <h5 v-for="post in posts" :key="post.id">{{post.title}}</h5>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        posts: ''
      }
    },
    asyncData() {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          return {posts: response.data}
        })
        .catch((error) => {
          console.log(error);
        })
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
