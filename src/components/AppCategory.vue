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
import AppPost from './AppPost.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    'app-post': AppPost
  },
  computed: {
    ...mapGetters('postsModule', ['posts'])
  },
  methods: {
    loadPosts () {
      let categoryId = 2
      if (this.$route.params.id === 'mobile') {
        categoryId = 11
      }
      this.$store.dispatch('postsModule/updateCategory', categoryId)
    }
  },
  watch: {
    '$route' () {
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
  }
}
</script>
