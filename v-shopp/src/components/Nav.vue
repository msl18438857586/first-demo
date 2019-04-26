<template>
  <div id="nav">
      <router-link exact to="/"><i class="iconfont icon-shouye-"></i>首页</router-link> 
      <router-link to="/list"><i class="iconfont icon-Group-"></i>列表</router-link>
      <router-link to="/gw"><i class="iconfont icon-gouwuche"></i>购物车</router-link>
      <router-link to="/geren"><i class="iconfont icon-user"></i>个人中心</router-link>
    </div>
</template>

<style lang="less">
   #nav{
  display:flex;
  justify-content:center;
  align-item:center;
  position:fixed;
  width:100%;
  bottom:0;
  height:56px;
  border-top:1px solid pink;
  a{
    flex:1;
    text-align:center;
    display:flex;
    flex-direction:column;
    text-decoration:none;
       &.router-link-active{
   color:red;
  }
    i{
      font-size:30px;
    }

  }
 
}
</style>

