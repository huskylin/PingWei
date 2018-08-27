<template>
    <div class="cssSelector">
        <div class="square">
        </div>
    </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'IsInView',
  mounted () {
    var items = document.querySelectorAll('.trans')
    const callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (this.isElementInViewport(items[i])) {
          items[i].classList.add('is-in-view')
          anime({
            targets: '.is-in-view',
            translateY: -250
          })
        }
      }
    }
    window.addEventListener('load', callbackFunc)
    window.addEventListener('scroll', callbackFunc)
  },
  methods: {
    isElementInViewport: function (el) {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    go () {
    }
  }
}
</script>

<style>
.square {
    pointer-events: none;
    position: relative;
    width: 128px;
    height: 128px;
    margin: 1px;
    background-color: currentColor;
    font-size: 12px;
    color: #2c3e50;
}
.is-in-view {
    color: red;
}
</style>
