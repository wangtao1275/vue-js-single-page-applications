<template>
  <div id="app">
    <app-header></app-header>
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
}
</script>

<style lang="scss">
  // $primary: #287ab1;
  // @import '~bulma';

  .columns{
    flex-wrap: wrap
  }
</style>
