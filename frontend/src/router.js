import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/index',
    name: 'index',
    component: (resolve)=>{require(['@/views/Home'], resolve)},
  },
  {
    path: '/about',
    name: 'About',
    component: (resolve)=>{require(['@/views/About'], resolve)},
  },
  {
    path: '/lineStatistics',
    name: 'lineStatistics',
    component: (resolve)=>{require(['@/views/lineStatistics'], resolve)},
  }
]

export default new VueRouter({routes})