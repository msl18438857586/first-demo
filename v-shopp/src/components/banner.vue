<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:["swiperSlides"],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
   
  }
</script>
<style lang="less" >
  swiper{
    width: 100%;
    height: auto;
  }
  img{
    width: 100%;
    height: auto;
  }
  
</style>
