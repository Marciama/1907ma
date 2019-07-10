<template>
    <div>
        <div>
            <ul class="city">
                <li v-for="(city,index)  in citylist">
                    <h3  v-if="index===0||index!==0 && citylist[index-1].letter!== city.letter" :ref="city.letter" > {{city.letter}}</h3>
                    <p>{{city.name}} </p>
                </li>
            </ul>
            <ol class=" cityStr">
                <li v-for="item in cityStr" @click="go(item)" >{{item}}</li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            citylist:[],
            cityStr:""
        }
    },
    created() {
        this.getLetters();
        this.$axios.get("/mz/gateway",{
            params:{
                k:Date.now()
            },
            headers:{
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15624937211163936137873"}`,
                "X-Host": "mall.film-ticket.city.list"
            }
        }).then((res)=>{
           
            var arr=res.data.data.cities.sort((a,b)=>{
                //按拼音排序
                return a.pinyin.localeCompare(b.pinyin)
            }).map((item)=>{
                return{
                    'letter':item.pinyin[0].toUpperCase(),
                    'name':item.name
                }
            })
            this.citylist=arr
            //console.log(arr);
        })
    },
    methods: {
        getLetters(){
            var str="";
            for(var i=65;i<91;i++){
                if(String.fromCharCode(i)==="U"||String.fromCharCode(i)==="O"||
                String.fromCharCode(i)==="I"||String.fromCharCode(i)==="V") continue;

                str+=String.fromCharCode(i)
            };
            this.cityStr=str;
            //console.log(str);
        },
        go(letter){
            var top=this.$refs[letter][0].offsetTop;
            document.documentElement.scrollTop=top; //滚动的高度等于 offsetTop实现显示跳转
            //console.log(top)
        }
    },
}
</script>

<style>

.city h3{line-height: 0.6rem;background: #F4F4F4;padding-left:0.3rem; }
.city p{line-height: 0.96rem;font-size: 0.28rem;padding-left:0.3rem;border-bottom: 1px solid #F7F7F7;}
.cityStr{position: fixed;right: 0; top:26%;}
</style>
