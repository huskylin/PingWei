<template>
  <div class="quote">
    <h2 class="display-4 font-weight-bold">「我做生意，我坦蕩蕩」</h2>
    <p class="trans">我本身奉公守法，如果今天我不對，我賠不是</p>
    <p> </p>
    <div class="container px-5 my-6">
      <div class="row trans row-width">
          <div class="col">
          <i class="fas fa-motorcycle fa-2x"></i>
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
          <i class="fas fa-volume-up fa-2x"></i>
          <p class="px-2">因為這裡面有異音</p>
          <br>
          <i class="far fa-clock fa-2x"></i>
          <p class="px-2">歹勢，我沒空</p>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.quote {
  height: 500px;
  background-image: url("../assets/quote_01.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% 80%;
  padding-top: 60px;
  color: white;
}
.row-width {
  margin-left: 50px;
  margin-right: 50px;
}
.trans {
  margin-top: 50px;
  opacity: 0;
}
</style>
