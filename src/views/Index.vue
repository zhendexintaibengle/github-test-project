<template>
<!-- 若页面某一部分使用网络请求的内容，通过v-if配合template判断局部 -->
  <div v-if="data">
     <!-- banner部分-->
     <!-- options:配置项 
     ref快速绑定变量和dom元素
     -->
    
     <swiper 
     @mouseout.native="startPlay" 
     @mouseover.native="stopPlay" 
     ref="swiper"
     class="swiper" 
     :options="swiperOption"
     >
     <swiper-slide v-for="c in data.carouselItems" :key="c.cid">
       <img :src="imgURL+c.img" alt=""/>
     </swiper-slide>
     <div class="swiper-pagination" slot='pagination'></div>
     <!-- 按钮 -->
     <div class="swiper-button-prev" slot="button-prev"></div>
     <div class="swiper-button-next" slot="button-next"></div>
     </swiper>
   

    <!--楼梯1f-->
    <index-floor title="首页推荐 / 1F" :items="data.recommendedItems"/>
    <!--楼梯2f-->
    <index-floor title="最新上架 / 2F" :items="data.newArrivalItems"/>
    <!--楼梯3f-->
    <index-floor title="热销单品 / 3F" :items="data.toSaleItems"/>

  </div>
</template>

<script>
import IndexFloor from '../components/IndexFloor.vue'
import {mapState} from 'vuex'
  export default {
  computed:{
    ...mapState(['imgURL']),
  },
  components: { IndexFloor },
    // 发请求 获取首页数据 
    // js部分3件事:1data负责存本地 2methods写请求方法 3mounted触发
  data() {
    return {
      data: null,
      // imgURL:'http://www.codeboy.com:9999/',
      swiperOption:{
        pagination:{
          el:'.swiper-pagination',
          clickable:true,//小圆点可点击
        },
      loop:true,//循环滚动
      effect:'cube',//特效slide fade cube coverflow  flip
      //自动滚动
      autoplay:{
        delay:1000,//自动切换的间隔，单位ms
        // 用户操作swiper后，是否停止自动滚动
        disableOnInteraction:false,
      },
      // 
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      }
      },
    }
  },
  mounted(){
    this.getData()
  },
  methods: {
    // 鼠标进入停止自动滚动
    stopPlay(){
    startPlay('atopPlay...')
    console.log(this.$refs)
    this.$refs.swiper.$swiper.autoplay.stop()
    },
    startPlay(){
      console.log('startPlay...')
      this.$refs.swiper.$swiper.autoplay.start()
    },
    // http://www.codeboy.com:9999/data/存放了所有数据接口
    getData() {
      const url='product/index.php'
      this.axios.get(url).then(res=>{
        console.log(res);
        this.data=res.data
      })
    }
  },
  }
</script>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
<style lang="scss" scoped>
@import '../assets/css/item_cat.css';
</style>

<style lang="scss">
.swiper{
  margin:10px auto;
  width: 1000px;
  span.swiper-pagination-bullet{
    width:16px;
    height:16px;
  }
}
</style>

