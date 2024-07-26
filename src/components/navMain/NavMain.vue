<template>
  <div>
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete" />
          <span v-if="!item.editing">{{ item.title }}</span>
          <input v-else type="text" v-model="item.title" @keyup.enter="completeEdit(index)" />
          <button class="del" @click="del(item, index)">删除</button>
          <button class="update" @click="toggleEdit(item)">修改</button>
          <button v-if="item.editing" class="update" @click="completeEdit(index)">完成</button>
        </div>
      </div>
    </div>
    <div v-else>
      暂无任务
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },

  setup(props, ctx) {
    let del = (item, index) => {
      ctx.emit("del", index);
    };

    let toggleEdit = (item) => {
      item.editing = true; // 设置编辑状态为true
    };

    let completeEdit = (index) => {
      let item = props.list[index];
      item.editing = false; // 设置编辑状态为false，完成编辑
    };

    return {
      del,
      toggleEdit,
      completeEdit,
    };
  },
});
</script>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.item input[type="checkbox"] {
  margin-right: 10px;
}

.item .del,
.item .update {
  margin-left: auto;
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
}

.item .update {
  background-color: #4caf50;
  margin-left: 10px;
}

.item .del:hover,
.item .update:hover {
  background-color: #d32f2f;
}

.item .update:hover {
  background-color: #388e3c;
}
</style>
