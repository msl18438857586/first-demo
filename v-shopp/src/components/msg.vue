<template>
    <div>
        <span>{{msg}}</span>
        <span>组件传值{{abc}}</span>
    </div>
</template>
<!--子组件 在components-->
<script>
// 在template模板中data是一个函数
export default {
    props:{
        abc:{
            default:()=>([1,2])
        }
    },
    // props:['abc'],
  
  data(){
      return {
          msg:"msg组件"
      }
  }
}
</script>
