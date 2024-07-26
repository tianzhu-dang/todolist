<template>
  <div class="container">
    <div>
      已完成{{isComplete}} / 全部{{list.length}}
    </div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent,ref} from 'vue'
export default defineComponent ({
    name: 'navFooter',
    props:{
      list:{
        type: Array,
        required: true
      }
    },
    setup(props,ctx) {
      let isComplete = computed(()=>{
        let arr = props.list.filter(item =>{
          return item.complete
        })
        return arr.length
      })
     
      let clear = ()=>{
        let arr = props.list.filter(item =>{
          return item.complete === false
        })
        ctx.emit('clear',arr)
      }
      return {
        isComplete,
        clear
        
      }
        
    }
 
})
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container > div {
  font-size: 1.1em;
}

.btn {
  display: flex;
  align-items: center;
}

.btn button {
  padding: 8px 12px;
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn button:hover {
  background-color: #007acc;
}
</style>
