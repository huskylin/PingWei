<template>
    <div class="cssSelector">
        <div class="square">
        </div>
    </div>
</template>

<script>
// import anime from 'animejs'
export default {
  name: 'IsInView',
  mounted () {
    var items = document.querySelectorAll('.trans')
    const callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (this.isElementInViewport(items[i])) {
          items[i].classList.add('is-visible')
          /* anime({
            targets: '.is-visible',
            translateY: -250
          }) */
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
.is-visible {
  transform: matrix(1, 0, 0, 1, 0, -30);
  transition-delay: 0.7s;
  transition-duration: 0.7s, 0.7s, 0.7s;
  transition-property: transform, opacity, transform;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.33, 0.98), cubic-bezier(0.25, 0.46, 0.33, 0.98), cubic-bezier(0.25, 0.46, 0.33, 0.98);
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
