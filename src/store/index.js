import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        title:'敲代码',
        complete: false
      },
      {
        title:'学习',
        complete: false
      },
      {
        title:'休息',
        complete: true
      }
    ]
  },
  getters: {
  },
  mutations: {
    //pay 添加的任务
    addTodo(state,payload){
      state.list.push(payload)
    },
    //pay 下标
    delTodo(state,payload){
      state.list.splice(payload,1)
    },
    
    clear(state,payload){
      //过滤之后的数组传进来
      state.list = payload
    }
    
  },
  actions: {
  },
  modules: {
  }
})
