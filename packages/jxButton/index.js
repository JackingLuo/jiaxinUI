import jxButton from "./src/jxButton.vue";

// 为组件提供 install 安装方法，供按需引入
jxButton.install=function(Vue){
    Vue.component(jxButton.name,jxButton)
}

export default jxButton