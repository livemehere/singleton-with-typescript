import AxiosManager from "./AxiosManager";

AxiosManager.addCount();
console.log(AxiosManager)

setTimeout(()=>{
    console.log(AxiosManager)
},1000)