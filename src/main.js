import "./index.css";
import Vue from "vue"; //这里引入的不是vue.js 而是vue.runtime
import App from "./app.vue";
console.log(App)

new Vue({
    render(createElement){ //render 函数的作用是将虚拟的dom渲染成真实的dom
        
       return createElement(App) //这个是虚拟dom
    },
}).$mount("#app")