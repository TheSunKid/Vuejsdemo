<template>
    <div id="slideshow">
        <div class="slideText">
          <div class="clearfix" style="font-weight: 600;font-style: normal">
              <p class="slideshow__title">Black Friday is coming!</p><div class="clearfix"></div>
          </div><div class="clearfix" style="font-weight: 600;font-style: normal">
              <p class="slideshow__subtitle">Up to 50% off your full look</p><div class="clearfix"></div>
          </div><div class="clearfix" style="font-weight: 600;font-style: normal">
              <p class="slideshow__description">Got right here</p><div class="clearfix"></div>
          </div><div class=""></div>
        </div>
      <img class="mySlides" src="https://cdn.shopify.com/s/files/1/0158/1413/1812/files/01_Home1-5.jpg?v=1548316595">
    </div>  
</template>
<script>
export default {
  data() {
    return {
    }
  },
  components: {
  },
  methods: {},
  created: function () {
  }
}
</script>
<style scoped>

#slideshow{
  position:relative
}
.slideText{
  position:absolute;
  top:50%;
  left:43%;
}
.slideshow__title,.slideshow__subtitle,.slideshow__description{
    line-height: 36px;
    font-size: 30px;
    letter-spacing: 0.05em;
    color:black;
    font-weight:bold;
    background-color:white;
}
.mySlides{
  max-width:100%;
}

</style>
