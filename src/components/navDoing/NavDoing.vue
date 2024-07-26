<template>
  <div class="container">
    <div>
      正在进行 {{unComplete}}
    </div>
  </div>
</template>

<script>
import {computed, defineComponent,ref} from 'vue'
export default defineComponent ({
    name: 'navDoing',
    props:{
      list:{
        type: Array,
        required: true
      }
    },
    setup(props,ctx) {
      let unComplete = computed(()=>{
        let arr = props.list.filter(item =>{
          return item.complete === false
        })
        return arr.length
      })
     
      
      return {
        unComplete,
        
      }
        
    }
 
})
</script>

<style lang="less" scoped>
.container {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 15px;
}

.container > div {
  font-size: 18px;
  color: #333;
  line-height: 1.5;
}
</style>
