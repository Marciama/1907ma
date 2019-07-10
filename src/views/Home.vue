<template>
  <div class="home">

    <router-view></router-view>
    <div class="buttom ">
      <ul class="clear">
        <li>
            <router-link  to="/home/film">
            <span class="iconfont icon-dianying"></span>
            <span class="move">电影</span>
            </router-link>
        </li>
        <li>
          <router-link  to="/home/cinema">
           <span class="iconfont icon-yingyuana"></span>
            <span  class="move">影院</span>
          </router-link>
        </li>
        <li>
           <router-link  to="/home/tw">
           <span class="iconfont icon-youhui"></span>
           <span  class="move">特惠</span>
           </router-link>
        </li>
        <li>
          <router-link  to="/home/user">
            <span class="iconfont icon-wode"></span>
            <span  class="move">我的</span>
          </router-link>
        </li>
      </ul>
      
     
      
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
  },
}
</script>
<style>
@import '../assets/reset.css';
.buttom{width:100%;position:fixed;bottom: 0; text-align: center;border-top:1px solid #ccc;background: #fff;}
.buttom li{float: left;width: 25%;}
.iconfont{position: relative;top:0;font-size: 0.4rem;}
.buttom a{
  display: inline-block;width: 100%;color: #797d82;line-height: 1rem;position: relative;
}
.move{width: 100%;display: inline-block;position: absolute;top:0.36rem;left:0;}
.buttom .router-link-active{color: #ff5f16;}

</style>
