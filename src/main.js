//引入
import Vue from 'vue'
import App from './App.vue'
import '@/assets/mobile/flexible.js'
import '@/assets/styles/reset.css'
//引入router
import router from './router'
//按需引入
import { NavBar,Tabbar, TabbarItem,Cell, CellGroup,Grid, GridItem,Image as VanImage,Icon,Search,Tag,List  } from 'vant';
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);

//演示接口的用法
// import {getRecommendListApi} from '@/apis'
// console.log(getRecommendListApi());
// async function fn(){
//   try{
//     const res = await getRecommendListApi()
//     console.log(res);
//     // console.log(aaa);
//   } catch(e){
//     console.log('错了')
//   }
// }

// fn()




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
