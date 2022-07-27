<template>
  <div style="padding-bottom:48px">
    <van-nav-bar :title="$route.meta.title" />
    <!-- 二级路由入口 -->
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'VueMusicIndex',

  data() {
    return {
        title:'',
        
    };
  },

  mounted() {
    // console.log(this.$route);
    // this.title=this.$route.meta.title
    
  },
//   watch:{
//     $route(newval){
//         console.log(newval);
//         this.title=newval.meta.title
//     }
//   },

  methods: {
    
  },
};
</script>

<style lang="less" scoped></style>
