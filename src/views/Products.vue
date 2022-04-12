<template>
  <div>

    <!-- 路由切换的组件：先配置与路径的对应关系，自动替换掉router-view -->
    <!-- -->
    <!-- banner部分 -->
       <!-- banner部分-->
    <div class="store">
      <img src="http://www.codeboy.com:9999/img/index/index_guild.png" />
    </div>

    <!--笔记本电脑列表-->
    <div class="store_action">
      <div class="store_action_left">
        <div class="store_action_left_content">
          <div id="plist">
            <div class="salc_top">笔记本电脑</div>
            <div class="salc_content">
              <img
                class="loading"
                src="http://www.codeboy.com:9999/img/loading.gif"
              />
            </div>
            <!--分页条-->
            <div class="pager"></div>
          </div>
        </div>
      </div>
      <div class="store_action_right rt">
        <div class="store_action_right_top">
          <p>
            <img
              src="http://www.codeboy.com:9999/img/foodstore/foodstore_icon2.png"
              alt=""
            />商家公告
          </p>
          <div>
            <p>本店推出全网最低价套餐，保证比其他平台的价格要低！</p>
            <p>不要葱、姜、蒜等这些忌口暂时无法坐不了，敬请谅解！</p>
            <p>晚上10点以后订餐需另加送餐费2元！谢谢合作！</p>
          </div>
        </div>
        <div class="store_action_right_cart">
          <div class="store_action_right_cart_top">
            购物车 <span class="clear rt">清空</span>
          </div>
          <div class="store_action_right_cart_content">
            <div></div>
            <!--<div id="5">-->
            <!--<span>精选双人餐</span>-->
            <!--<div><span class="cart_reduc lf">-</span><input type="text" value="1" class="lf"/><span class="cart_add lf">+</span></div>-->
            <!--<span class="rt pc">￥:<span class="cart_unit_price">20.00</span></span>-->
            <!--</div>-->
          </div>
          <div class="sarc">
            <div class="total_price lf">
              <img
                src="http://www.codeboy.com:9999/img/foodstore/foodstore_car_2.png"
                alt=""
              />￥:<span>0.00</span>
            </div>
            <div class="settle lf">
              <a href="cart.html" style="color: #fff">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
   
    data() {
      return {
        data: null,
      }
      },
       mounted() {
      this.getData()
    },
    
    methods: {
      getData() {
        const url='product/list.php'
        this.axios.get(url).then(res=>{
          this.data=res.data
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/css/products.css'
</style>