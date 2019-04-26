import axios from "axios"
axios.defaults.baseURL="http://localhost:3300"
//响应拦截
axios.interceptors.response.use(res=>{
    return res.data},err=>{
      Promise.reject(err)
    }
)
//banner接口
export let getBanner=()=>{
  // silder自定义
  return  axios.get("/slider")
}
export let getHome=()=>{
  return  axios.get("/hot")
}
//分页请求
export let getPage=(page)=>{
  return  axios.get(`/list?page=${page}`)
}
// 请求详情
export let getDetail=(id)=>{
  return  axios.get(`/detail?id=${id}`)
}
//使用promise.all
export let getHomeAll=()=>{
  return axios.all([getBanner(),getHome()])
}
