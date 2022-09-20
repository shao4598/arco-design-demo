/*
 * @Author: chase shao4598@outlook.com
 * @Date: 2022-09-12
 * @LastEditors: chase shao4598@outlook.com
 * @LastEditTime: 2022-09-12
 * @FilePath: /arco-design-demo/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import router from './router';
import ArcoVue from '@arco-design/web-vue';
import './style.css'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);

app.use(router)
app.use(ArcoVue);
app.mount('#app');