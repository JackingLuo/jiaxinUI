//引入所有的组件
import jxButton from "./jxButton";

//存储组件的列表
const components=[
    jxButton
]

// 定义 install 方法，接收 Vue 作为参数。判断如果使用 use (全局)注册插件，则所有的组件都将被注册
const install =function (Vue) {
    if(install.installed)return
    components.map(component=>{Vue.component(component.name,component)})
}

//是否采用的是script引入（非npm安装）？
if(typeof window!=='undefined' && window.Vue){
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    jxButton
}