<template>
    <div>
        <div class="back"  @click="go">
            <img src="../assets/img/back.png">
        </div>
        <div class="deImCon" >
            <img :src="filmIdObj.poster"/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            filmIdObj:{}
        }
    },
    created() {
        this.$axios.get(`/mz/gateway`,{
            params:{
                filmId:this.$route.params.id,
                k:Date.now()
            },
            headers:{
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15624937211163936137873"}`,
                "X-Host": `mall.film-ticket.film.info`
            }
        }).then((res)=>{
            //console.log(res.data.data.film);
            this.filmIdObj=res.data.data.film;
        }) 
    },
    methods: {
        go(){
           this.$router.go(-1); 
        }
    },
}
</script>
<style>
.back img{width:0.6rem; border-radius: 50%; }
.back{position: fixed;top:0.1rem;left:0.16rem;}
.deImCon img{width: 100%;height: 4.22rem;}
</style>
