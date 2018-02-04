<template>
  <div id="app">
      <task v-for="number in computedList" :number="number"></task>
      <a @click="createTask">Create task</a>
  </div>
</template>

<script>
import task from './components/task'

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
    task
  },
  methods:{
    getList: function(){
        this.list = [1,2]
    },
    createTask: function(){
        fetch(
            '/new',
            {
              method:'POST',
              headers:{
				'Content-Type':'application/json;charset=utf-8'
			  },
              body: JSON.stringify({'text':'New task are sended!'})
            }
        ).then(function(text) {  
            console.log('Request successful', text);  
        }) 
    }
  },
  computed:{
    computedList: function(){
        if(this.list !== [])
            return this.list
        else
            return []
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
