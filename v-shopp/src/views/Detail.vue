<template>
    <div>
       
            <!-- 详情页 -->
      
            <!-- {{this.$route.params.id}} 没有计算属性时 computed -->
          <img :src="single.img" alt="">
          <p>{{single.name}}</p>
          <p>{{single.info}}</p>
          <p>{{single.price}}</p>  
    
       
    </div>
</template>
<script>
import {getDetail} from '../api'
export default {
    name:'detail',
    computed:{
        deId(){
            return this.$route.params.id
        }
    },
    data(){
        return {
            single:{}
        }
    },
    created(){
        this.Detail()
    },
    methods:{
        //发送请求
       async Detail(){
           let {data}=await getDetail(this.deId)
           this.single=data;
           console.log(this.single)
           if(JSON.stringify(this.single)=="{}"){
               this.$router.push("/list")
           }
           
       }
    }
}
</script>

