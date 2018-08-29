<template>
  <div class="hello">
    <nav class="navbar fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
      <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      富堡車行
      </a>
    </nav>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/banner_01.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/banner_02.jpg" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <h2>夠嗆，才敢大聲</h2>
              <p>這裡有一些普利珠...</p>
            </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/banner_03.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="container my-6">
      <div class="row">
        <div class="col">
          <i class="fas fa-dollar-sign fa-2x p-3"></i>
          <h4 class="font-weight-bold mb-3">零利率分期</h4>
          <h6>提供零利率分期優惠。</h6>
          <a href="#" class="more">了解更多 <i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="col">
          <i class="fas fa-truck fa-2x p-3"></i>
          <h4 class="font-weight-bold mb-3">免額外付費運送服務</h4>
          <h6>可享送貨到府，或一小時後在<br>
              全國富堡車行提取現貨商品。 </h6>
          <a href="#" class="more">了解更多 <i class="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </div>

    <div class="quote">
      <h2 class="font-weight-bold">「我做生意，我坦蕩蕩」</h2>
      <p class="trans">我本身奉公守法，如果今天我不對，我賠不是</p>
      <p> </p>
      <div class="container px-5 my-6">
        <div class="row">
            <div class="col">
            <i class="fas fa-motorcycle fa-2x px-2"></i>
            <p class="px-2">要換煞車皮</p>
            <br>
            <i class="fas fa-wrench fa-2x"></i>
            <p class="px-2">一定要拆坐墊</p>
            </div>
            <div class="col">
            <i class="fas fa-bullhorn fa-2x"></i>
            <p class="px-2">大聲就能搞定</p>
            <br>
            <i class="fas fa-gavel fa-2x"></i>
            <p class="px-2">我坦蕩蕩</p>
            </div>
            <div class="col">
            <i class="fas fa-bullhorn fa-2x"></i>
            <p class="px-2">大聲就能搞定</p>
            <br>
            <i class="fas fa-gavel fa-2x"></i>
            <p class="px-2">我坦蕩蕩</p>
            </div>
          </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <div class="col-feature">
          <img src="../assets/feature_01.jpg">
          <h5 class="font-weight-bold">換煞車皮一定要拆坐墊</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="col-feature">
          <img src="../assets/feature_02.jpg">
          <h5 class="font-weight-bold">皮帶龜裂.....普利珠啦！</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="col-feature">
          <img src="../assets/feature_03.jpg">
          <h5 class="font-weight-bold">空氣濾網是每5000公里要換一次</h5>
          </div>
        </div>
      </div>
    </div>
    <IsInView></IsInView>
  </div>
</template>

<script>
import IsInView from './IsInView.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  },
  components: {
    IsInView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped >
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
.carousel-caption {
  bottom: 20px;
}
.more:hover {
  margin: 0 10px;
  color:  $blue + 100;
}
.col-feature {
  padding: 30px 0px;
  img {
    padding: 30px 0px;
    border-radius: 50%;
    overflow: hidden;
    max-width: 250px;
    margin: auto;
  }
}
.feature-container {
  background-color: rgb(214, 214, 214);
}
.quote {
  height: 450px;
  background-image: url("../assets/quote_01.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% 80%;
  padding-top: 60px;
  color: white;
}
.my-6 {
  margin-top: $spacer * 5;
  margin-bottom: $spacer * 5;
}
.trans {
  color: greenyellow;
  opacity: 0;
}
#section-content-title {
  font-weight:bold;
}
#section-content {
  width: 300px;
  height: 100px;
}
</style>
