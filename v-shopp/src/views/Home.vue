<template>
  <div class="home">
    <div class="container">
      <div class="spinner" v-if="showloading" >
         <div class="rect1"></div>
         <div class="rect2"></div>
         <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
</div>
<template v-else>
    <banner :swiperSlides="sliders"></banner>
    
     <div>
       <ul>
         <li v-for="item in homeList" :key="item.id">
           <img :src="item.img" >
           <p>{{item.name}}</p>
           <p>{{item.info}}</p>
           <p>{{item.price}}</p>
         </li>
       </ul>

     </div>
</template>

    </div>
  <!-- <msg :abc="val"></msg> -->
  <!-- 用标签的形式使用 -->  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//  引入子组件  import msg from "@/components/msg"
// import msg from "../components/msg"
import banner from '../components/banner'
// 把api导入到首页中
import {getHomeAll} from '../api'
// 结构赋值出来getbanner的方法
export default {
  name: 'home',
  components: {
    banner
  },
  data(){
  return{
    sliders:[],
    homeList:[],
    showloading:true
  }
  },
   created(){
   this.getAll()
},
    methods:{
      // //轮播
      // async getslider(){
      // let {data:sliders} = await getBanner()
      //  this.sliders=sliders;
      // },
      // //详情页
      //  async getlist(){
      // let {data:homeList} = await getHome()
      //  this.homeList=homeList;
      // }
      async getAll(){
        let [{data:sliders},{data:homeList}]=await getHomeAll()
        this.silders=sliders;
        this.homeList=homeList;
        this.showloading=false;
      }
    } 

  
  }

// created(){
  //   getBanner().then(res=>{
  //     let {data}=res
  //     this.sliders=data
  //   })
  // }
  // async created(){
    //     getBanner().then(res=>{
    //      console.log(res)
    // })
//        let {data:sliders} = await getBanner()
//        this.sliders=sliders;
// let {data:homeList} = await getHome()
//        this.homeList=homeList;
//     }
</script>

