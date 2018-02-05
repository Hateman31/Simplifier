<template>
  <div id="app">
	  <taskList v-if="computedList.length > 0" :list="computedList"></taskList>
	  <h3 v-if="computedList.length == 0">TaskList are empty!</h3>
      <a @click="createTask">Create task</a>
  </div>
</template>

<script>
import taskList from './components/TaskList'

export default {
  name: 'App',
  mounted(){
    this.getList()
  },
  data(){
      return {
        list:[]
      }
  },
  components: {
    taskList,
  },
  methods:{
    getList: function(){
        this.list = []
    },
    createTask: function(){
		this.list.unshift(this.last_number+1)
        //~ fetch(
            //~ '/new',
            //~ {
              //~ method:'POST',
              //~ headers:{
				//~ 'Content-Type':'application/json;charset=utf-8'
			  //~ },
              //~ body: JSON.stringify({'text':'New task are sended!'})
            //~ }
        //~ ).then(function(text) {  
            //~ console.log('Request successful', text);  
        //~ }) 
    }
  },
  computed:{
    computedList: function(){
		return this.list.length !== 0 ?  this.list : []
    },
    last_number: function(){
		return this.list.length !== 0 ?  this.list[0] : 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
