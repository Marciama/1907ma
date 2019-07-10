<template>
    <div   class="box"  ref="box"  v-gd="vis"  dis="210"> 
        <div class="myheader" v-show="vis.flag">
            <div class="title">
                 <!-- <span>北京</span>  -->
                 <span>电影</span>
            </div>
            <div class="film">
                <router-link to="/home/film/now">正在上映</router-link>
                <router-link to="/home/film/coming">即将上映</router-link>
            </div>
        </div>
         

         <!--城市 -->
         <div class="selectCity" @click="goCity" >
             <span>北京</span>
         </div>
        <!-- swiper -->
        <div class="swiper">
            <mySwiper></mySwiper>
        </div>

        <div class="film">
            <router-link to="/home/film/now">正在上映</router-link>
           <router-link to="/home/film/coming">即将上映</router-link>
        </div>
        <router-view></router-view>
        <div class="films">
            <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">

                <li class="clear"   v-for="item in list " @click="goDetial(item.filmId)">
                    <div class="imgcon">
                        <img  :src="item.poster"/>
                    </div>

                    <div class="film-desc">
                        <div class="film-name">
                            <p>{{item.name}}</p>
                        </div>
                        
                        <div class="film-grade">
                        <p>观众评分{{item.grade}}</p>
                        </div>
                        <div class="film-actors">
                            <p>主演： <span v-for="itm in  item.actors" >{{itm.name}} </span></p>
                        </div>
                        <div class="film-nation">
                            <p > <span>{{item.nation}}</span>|<span>{{item.runtime}}分钟</span> </p>
                        </div>
                    </div>
                    <div class="film-buy">
                        <span>购票</span> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import mySwiper from './mySwiper'
//引入无限滚动
import { InfiniteScroll } from 'mint-ui'; 
import { Toast } from 'mint-ui'; //弹窗
export default {
    data(){
        return{
            type:'',
            list:[],
            vis:{
                flag:false,
            },
           
            loading:false,    // false 表示可以发请求  true 不可发请求
            page:1        //默认第一页
        }
    },
    //!!!!
    created() {
        this.$router.push("/home/film/now");
    },
    components:{
        mySwiper
    },
    methods: {
         loadMore(){
           this.page++;
           this.getDate();          //获取数据
        },
        getDate(){
            if(this.page>5){
                Toast({
                message:'已到底部',
                position: 'bottom',
                duration: 2000
                });
                return;
            }
            var type=this.type==="now"? 1:2;
            this.loading=true; //同时只能发一次请求   停止发请求
            this.$axios.get(`/mz/gateway?`,{
                params:{
                    cityId:110100,
                    pageNum:this.page,
                    pageSize:10,
                    type,
                    k:Date.now()
                },
                headers:{
                    "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15624937211163936137873"}`,
                    "X-Host": `mall.film-ticket.film.list`
                }
            }).then((res)=>{
                this.list=this.list.concat(res.data.data.films);
                this.loading=false ;           //加入列表后发请求
            })
        },
        resetList(){
            this.list=[];
            this.loading=false;  //发请求
            this.page=1
        },
        goDetial(id){
            this.$router.push("/detial/"+id)
        },
        goCity(){
            this.$router.push("/city") 
        }
    },

    watch: {   
        $route:{
            handler(newv,oldv){
                //console.log(newv.path);
                if(newv.path==="/home/film"){
                    this.$router.push("/home/film/now")
                }else{
                    //  进入路由  /home/film/coming
                    this.type=newv.params.type;
                    this.resetList();//变路由 清空
                    this.getDate();
                }
            },
            deep:true,
            immediate:false
        },

    },
}
</script>
<style>
.films img{width: 100px;}
.box{position:fixed;top:0;left:0;right: 0;bottom: 0;overflow: auto; }/*  充满  监听滚动必须有*/
.myheader{line-height:0.88rem;background: #fff;position: fixed;top:0;left:0;width: 100%;text-align: center;
font-size: 17px;z-index: 3;}
.myheader .title{ border-bottom: 1px solid #F2F2F2;background: #fff;}
.swiper{height: 4.2rem;background: #ccc;}

.selectCity{background:rgba(0,0,0,0.3);font-size: 0.26rem;position: fixed;top:0.32rem;left: 0.2rem;z-index: 2;border-radius:0.3rem; color: #fff;}
.selectCity span{display: inline-block;line-height: 0.6rem;padding: 0 0.1rem;width: 1rem;text-align: center;}


.films li {height: 100px;width: 100%;padding:15px 10px;text-align: left;border-bottom: 1px solid #F3F3F3;}
.films li .imgcon {width: 18%;height: 100%;}
.films ul{margin-bottom: 50px;}
.films li .imgcon img {height: 100%;width: 100%;}
.imgcon ,.film-desc,.film-buy{float: left;}
.film-desc{height: 100%; padding: 0 10px; width: 50%}
.film-desc .film-actors p{width: 4rem; white-space: nowrap;overflow: hidden;text-overflow:ellipsis;}
.film-name{padding-bottom: 20px;}
.film-grade,.film-actors,.film-nation{color:#797D82;font-size: 12px;}
.film-buy{width: 23%;color: #ff5f16;text-align: center;font-size: 12px;height: 100%;}
.film-buy span{border: 1px solid #ff5f16;padding: 5px 10px;border-radius: 4px;position: relative;top:44%;z-index: 1;}

</style>
