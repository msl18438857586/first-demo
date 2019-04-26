import axios from "axios"
//设置默认访问路径
axios.defaults.baseURL="http://localhost:3011";
//请求拦截 响应拦截 interceptor拦截器 
//响应拦截
axios.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    Promise.reject(err)
})

export let getHomeAll=()=>{
    return axios.get("/all")
}
//获取分页数据
export let getpage=(page)=>{
    return axios.get(`page?page=${page}`);
}