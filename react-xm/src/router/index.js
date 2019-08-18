import {
    Home,
    Find,
    Order,
    Mine,
    Login
} from "@pages"


export const TabBarRouter = [
    {
        path:"/home",
        name:"首页",
        component:Home,
        meta:{
            tabBarFlag:true
        },
        icon:"\ue628"
    },
    {
        path:"/find",
        name:"发现",
        component:Find,
        meta:{
            tabBarFlag:true
        },
        icon:"\ue663"
    },
    {
        path:"/order",
        name:"订单",
        component:Order,
        meta:{
            tabBarFlag:true
        },
        icon:"\ue737"
    },
    {
        path:"/mine",
        name:"我的",
        component:Mine,
        meta:{
            tabBarFlag:true,
            Authrequired:true
        },
        icon:"\ue617"
    }
]

export const noTabBarRouter = [
    {
        path:"/login",
        name:"登陆",
        component:Login,
        meta:{
            tabBarFlag:false
        },
        icon:""
    }
]


export const routerConfig = TabBarRouter.concat(noTabBarRouter);