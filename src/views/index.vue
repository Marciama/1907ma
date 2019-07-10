<template>
    <div >
        <div class="film">
            <router-link to="/home/film/now">正在上映</router-link>
           <router-link to="/home/film/coming">即将上映</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
.banner{height:4.2rem;}
.banner img{width: 100%;}
.film li{float: left;}
.film{height: 1rem;text-align: center;border-bottom: 1px solid #ccc;}
.film a{display: inline-block; width: 45%; line-height: 1rem;color: #191a1b;
font-size: 14px;}
.film .router-link-exact-active {color: #ff5f16;border-bottom: 1px solid #ff5f16;}
</style>
