<template>
  <div class="columns">
    <div class="column is-one-third" v-for="post in posts" :key="post.id">
      <app-post :link="post.rest_api_enabler.Link">
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <h3 slot="content" v-html="post.excerpt.rendered"></h3>
      </app-post>
    </div>
  </div>
</template>

<script>
import AppPostVue from './AppPost.vue';
import mainService from '../main.service'
  export default {
    components: {
      'app-post': AppPostVue
    },
    data() {
      return {
        id: this.$route.params.id,
        posts: []
      }
    },
    methods: {
      loadPosts() {
        let categoryId = 2
        if(this.id === 'mobile'){
          categoryId = 11
        }
        mainService.getPost(categoryId).then(data => {
          this.posts = data
        })
      }
    },
    watch: {
      '$route' (to, from){
        this.id = to.params.id
        this.loadPosts()
      }
    },
    created () {
      this.loadPosts()      
    },
  }
</script>
