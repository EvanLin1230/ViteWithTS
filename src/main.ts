/** pinia - 是一種類似於以前的 vuex 的 store(狀態管理器)，後來發現 pinia 有更完整的支援度 */
import { createPinia } from 'pinia';
const pinia = createPinia();

/** 路由 -  */
import router from './router';

/** css */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './style.css'

/** vue 起始方法 */
import { createApp } from 'vue'
import App from './App.vue' // 第一個頁面
const app = createApp(App); // 創建實例

app.use(pinia); // 加入 pinia
app.use(router); // 加入 router

app.mount('#app'); // 將畫面渲染至 index.html 的 <div id="app"></div>
