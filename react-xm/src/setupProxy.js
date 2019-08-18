const proxy = require("http-proxy-middleware");
//跨域配置
module.exports = (app)=>{
    app.use(proxy("/app",{
        target:"https://api.ricebook.com",
        changeOrigin:true
    }))
}