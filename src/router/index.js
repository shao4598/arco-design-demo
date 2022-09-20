/*
 * @Author: chase shao4598@outlook.com
 * @Date: 2022-09-12
 * @LastEditors: chase shao4598@outlook.com
 * @LastEditTime: 2022-09-20
 * @FilePath: /arco-design-demo/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/home.vue'
import ExpandTable from '@/views/expand-table.vue'
import UploadFile from '@/views/upload-file.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/expand-table', component: ExpandTable },
    { path: '/upload-file', component: UploadFile },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;