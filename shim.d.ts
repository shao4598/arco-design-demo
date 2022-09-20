/*
 * @Author: chase shao4598@outlook.com
 * @Date: 2022-09-20
 * @LastEditors: chase shao4598@outlook.com
 * @LastEditTime: 2022-09-20
 * @FilePath: /arco-design-demo/shim.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module "*.vue" {
    import { Component } from "vue";
    const component: Component;
    export default component;
}