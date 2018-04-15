<template lang="pug">
	div(id="app")
		div(id="menu")
			a(@click="createTask" class="btn") Create task
		div(id="tasklist")
			taskList(v-if="computedList.length > 0" :list="computedList")
			div(v-if="computedList.length == 0") 
				h3 TaskList are empty!
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
}

.btn {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50; /* Green */
    border-radius: 4px;
    font-size: 18px;
    padding: 12px 22px;    
    cursor: pointer
}

.menu{
	grid-column: 1/2;
    grid-row: 1
}    

.btn:hover {
    background-color: #4CAF50; /* Green */
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    color: white;
}

.btn:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.task{
	grid-column:1/2;
}
</style>
