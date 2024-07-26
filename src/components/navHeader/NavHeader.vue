<template>
    <div>
        <span >工号：46978--TodoList</span>
        <input 
        placeholder="输入任务名称" 
        v-model="value" 
        @keydown.enter="enter"
        />
    </div>
  
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'navHeader',
    setup(props,ctx) {
        let value = ref('');
        let enter = () =>{
            ctx.emit('add',value.value)
            value.value = ''
        }

        return {
            value,
            enter
        };
    }
});
</script>

<style lang="less" scoped>

div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

span {
  font-size: 1.2em;
  font-weight: bold;
}

input {
  flex: 1;
  margin: 0 auto; /* 让输入框居中 */
  padding: 6px; /* 减少输入框的内边距 */
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 0.9em; /* 缩小输入框的字体大小 */
}

input:focus {
  outline: none;
  border-color: dodgerblue;
  box-shadow: 0 0 5px dodgerblue;
}
</style>
