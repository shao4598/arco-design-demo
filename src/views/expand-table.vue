<!--
 * @Author: chase shao4598@outlook.com
 * @Date: 2022-09-12
 * @LastEditors: chase shao4598@outlook.com
 * @LastEditTime: 2022-09-20
 * @FilePath: /arco-design-demo/src/views/arco-table.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-button type="primary" @click="onClick">button</a-button>
  <a-space>
    <span>checkStrictly:</span>
    <a-switch v-model="rowSelection.checkStrictly" />
  </a-space>
  <a-table
    :columns="columns"
    :data="dataList"
    v-model:expandedKeys="expandedKeys"
    :row-selection="rowSelection"
    style="margin-top: 20px"
    @expand="onExpand"
  />
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { TableRowSelection, TableData } from '@arco-design/web-vue';
function onClick() {
  if (!dataList.length) {
    return;
  }
  if (!dataList[0].children?.length) {
    return;
  }
  dataList[0].children.push({
    key: '999',
    name: 'Chase Shao',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  });
}

function onExpand(_: string | number, record: TableData) {
  const { children } = record;
  if (!children) {
    return;
  }
  children.push({
    key: '999',
    name: 'Chase Shao',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  });
}

const expandedKeys = ref<Array<string>>([]);

const rowSelection = reactive<TableRowSelection>({
  type: 'checkbox',
  showCheckedAll: true,
  checkStrictly: true,
});

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const dataList = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    children: [
      {
        key: '2',
        name: 'Alisa Ross',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com',
        children: [
          {
            key: '3',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            key: '4',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ],
      },
      {
        key: '5',
        name: 'Alisa Ross',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com',
      },
    ],
  },
  {
    key: '6',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    key: '7',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    key: '8',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
  {
    key: '9',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
]);
</script>
