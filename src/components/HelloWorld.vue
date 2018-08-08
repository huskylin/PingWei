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
          <img class="d-block w-100" src="../assets/banner01.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/banner02.jpg" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <h2>夠嗆，才敢大聲</h2>
              <p>這裡有一些普利珠...</p>
            </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/banner03.jpg" alt="Third slide">
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
      <div class="d-flex flex-row justify-content-center m-5 p-5">
        <div id="section-content" class="d-block block-col mr-5">
          <i class="fas fa-dollar-sign fa-2x p-3"></i>
          <h5 id="section-content-title">零利率分期</h5>
          <h6>提供零利率分期優惠。</h6>
          <a href="#" class="more">了解更多 <i class="fas fa-chevron-right"></i></a>
        </div>
        <div id="section-content" class="d-block block-col ml-5">
          <i class="fas fa-truck fa-2x p-3"></i>
          <h5 id="section-content-title">免額外付費運送服務</h5>
          <h6>可享送貨到府，或一小時後在<br>
              全國富堡車行提取現貨商品。 </h6>
          <a href="#" class="more">了解更多 <i class="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
#section-content-title {
  font-weight:bold;
}
#section-content {
  width: 300px;
  height: 100px;
}
</style>
