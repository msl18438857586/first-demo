<template>
  <div class="list">
    <!-- refs可以获取元素或者组件 -->
    <div class="container" @scroll="sLoadM" ref="eleScr">
      <ul class="con-items">
        <router-link v-for="item in pagelist" :key="item.id" tag="li" :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
           <p>{{item.info}}</p>
           <p>{{item.price}}</p>
        </router-link>
      </ul>
      <div class="btnbox">
      <button @click="loadMore" class="btn">
      {{hasMore?'点击加载更多':'没有更多了'}}
      </button>
      </div>
    </div>
  </div>
</template>
<script>
import {getPage} from '../api'
export default {
  name:"list",
  data(){
    return{
      page:0,
      pagelist:[],
      hasMore:true
    }
  },
   created(){
    this.getList()
    
  },
  methods:{
 async getList(page){
   let {data:{hasMore,pagedata}}=await getPage(this.page)
  //  要把原来的数据和重写的数据放在一起这样才是所有的数据
  // this.pagelist=this.pagelist.concat(pagedata);
  this.pagelist=[...this.pagelist,...pagedata]
  //  this.pagelist=pagedata;
   this.hasMore=hasMore

 },
 //滚动加载更多
 sLoadM(){
        //函数节流  函数防抖 规定在一定时间内触发一次
        setTimeout(()=>{
           let {clientHeight,scrollTop,scrollHeight}=this.$refs.eleScr
   if(scrollTop+clientHeight+20>scrollHeight){
     //加载更多
     this.loadMore()
   }

        },13)
  
 },
 //加载更多
 loadMore(){
   this.page++;//页数加一
   //如果hasmore为false表示没有更多了 就不再执行请求
   if(!this.hasMore){return}
   this.getList()
 }
  }

}
</script>
<style lang="less" scoped>
.con-items{
  box-sizing:border-box;
  padding:0 20px;
  li{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

</style>


