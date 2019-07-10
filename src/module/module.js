import Vue from 'vue'
Vue.directive("gd",(el,binding)=>{   //bind  update 方法的缩写    binding值 el元素
    var dis=Number(el.getAttribute("dis"));
    el.addEventListener("scroll",()=>{
        var st=el.scrollTop;
        //如果scrollTop大于210
        if(st>dis){
            binding.value.flag=true;
        }else{
            binding.value.flag=false;
        }
    })

})