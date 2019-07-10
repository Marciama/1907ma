<template>
    <div>
        影院
        <mt-button type="default"  @click="show">default</mt-button>
        <mt-button size="large" >large</mt-button>
    </div>
</template>
<script>

import { Toast } from 'mint-ui';    //点击弹窗
export default {
    methods: {
        show(){
            Toast({
            iconClass:'fa fa-spinner fa-spin',
            position: 'middle',
            duration: 2000
            });
            // Toast({
            // message: '提示',
            // position: 'bottom',
            // duration: 2000
            // });
        }
    },
}
</script>
