<template>
 <!--楼梯3f-->
  <div class="floor" id="f3">
      <div class="floor_top">
        <img
          src="http://www.codeboy.com:9999/img/index/computer_icon.png"
          alt=""
        />
        热销单品 /3F
      </div>
      <div class="floor_content">
        <div class="food">
          <div class="desc">
            <p class="name">{{items[0].title}}</p>
            <p class="details">
              {{items[0].details}}
            </p>
            <p class="price">￥{{items[0].price}}</p>
            <div id="one" class="view">查看详情</div>
          </div>
          <img
            :src="imgURL+items[0].pic"
            alt=""
          />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">{{items[1].title}}</p>
            <p class="details">
              {{items[1].details}}
            </p>
            <p class="price">￥{{items[1].price}}</p>
            <div id="two" class="view">查看详情</div>
          </div>
          <img
           :src="imgURL+items[1].pic"
          />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">{{items[2].title}}</p>
            <p class="price">￥{{items[2].price}}</p>
            <div id="three" class="view">查看详情</div>
          </div>
          <img
            :src="imgURL+items[2].pic"
            alt=""
          />
        </div>
        <div class="product">
          <img
            :src="imgURL+items[3].pic"
            alt=""
          />
          <h2>{{items[3].title}}</h2>
          <p>￥{{items[3].price}}</p>
          <a href="product_details.html" id="four">查看详情</a>
        </div>
        <div class="product">
          <img
            :src="imgURL+items[4].pic"
            alt=""
          />
          <h2>{{items[4].title}}</h2>
          <p>￥{{items[4].price}}</p>
          <a href="product_details.html" id="five">查看详情</a>
        </div>
        <div class="product">
          <img
            :src="imgURL+items[5].pic"
            alt=""
          />
          <h2>{{items[5].title}}</h2>
          <p>￥{{items[5].price}}</p>
          <a href="product_details.html" id="fix">查看详情</a>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
  computed:{
    ...mapState(['imgURL']),
  },
    // props接收参数
    props:['items','title'],
    data() {
      return {
        imgURL: 'http://www.codeboy.com:9999/',
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/css/item_cat.css';
</style>