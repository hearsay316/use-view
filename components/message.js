import Vue from "vue";
import messageComponent from "./message.vue";

let MessageContructor = Vue.extend(messageComponent)
const Message = (options)=>{
    let instance = new MessageContructor({
        data:options
    })
    instance.$mount()// 挂在组件
    document.body.appendChild(instance.$el)
    instance.visible = true
}
['success','error','warning'].forEach(type=>{
    Message[type]=function (options){
        options.type = type
        return Message(options)
    }
})
export {Message}
