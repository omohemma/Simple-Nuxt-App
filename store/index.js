//create store
import axios from "axios";

export const state = () => ({
  posts: {}
});

//getters
export const getters = {
  posts(state) {
    return state.posts;
  },
  getPostByid: (state) => (id) => {
    return state.posts.find(post => post.id === id)
  }
};

// mutations
export const mutations = {
  SET_POSTS(state,posts){
    state.posts = posts;
  }
};

// actions

export const actions = {
  setPosts({commit},posts){
    commit("SET_POSTS",posts);
  }

  // async nuxtServerInit({commit}){
  //   let {data} = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   );
  //   commit("SET_POSTS",data);
  // }
};


