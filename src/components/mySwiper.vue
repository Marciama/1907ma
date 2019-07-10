<template>
    <div>
       <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgList">
                <img :src="item.imgUrl">
            </div>
       `    </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
    
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
export default {
    data() {
        return {
            imgList:[]
        }
    },
    created() {
        this.$axios.get("/mz/gateway?type=2&cityId=110100&k=5431730",{
           "headers":{
                    "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15624937211163936137873"}`,
                    "X-Host": `mall.cfg.common-banner`
            }
        }).then((res)=>{
            this.imgList=res.data.data
        })
    },
    mounted() {
       
    },
    watch: {
       imgList(){
           //保证数据变了   保证dom完成
           //nextTick延迟回调函数执行   直到dom完成
           this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                },
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                }
                })   
           })
                 
       } 
    },
}
</script>
<style>
.swiper-container{height:4.2rem;width: 100%;}
.swiper-container img{width: 100%;}
</style>


