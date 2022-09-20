<!--
 * @Author: chase shao4598@outlook.com
 * @Date: 2022-09-12
 * @LastEditors: chase shao4598@outlook.com
 * @LastEditTime: 2022-09-20
 * @FilePath: /arco-design-demo/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-layout style="height: 400px">
    <a-layout-header>
      <a-menu mode="horizontal" @menu-item-click="onMenuClick">
        <a-menu-item key="/">Go to Home</a-menu-item>
        <a-menu-item key="/expand-table">Expand Table</a-menu-item>
        <a-menu-item key="/upload-file">Upload File</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function onMenuClick(key: string) {
  router.push(key);
}
</script>
