<template>
  <div class="hello">
    <nav class="navbar fixed-top navbar-dark bg-dark">
      <a class="navbar-brand font-weight-bold" href="#">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      富堡車行
      </a>
    </nav>
    <Carousel></Carousel>
    <Feature></Feature>
    <Quote></Quote>
    <Service></Service>
    <Grid></Grid>
    <IsInView></IsInView>
  </div>
</template>

<script>
import IsInView from './IsInView.vue'
import Carousel from './Carousel.vue'
import Service from './Service.vue'
import Quote from './Quote.vue'
import Feature from './Feature.vue'
import Grid from './Grid.vue'
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  },
  components: {
    IsInView,
    Carousel,
    Service,
    Quote,
    Feature,
    Grid
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.my-6 {
  margin-top: $spacer * 5;
  margin-bottom: $spacer * 5;
}
</style>
