<template lang="pug">
	div(id="app")
		div(id="mainpage" v-if="page == 'main'")
			div(id="menu")
				a(@click="createTask" class="btn" v-if="!new_task") Create task
			newTask(v-if="new_task" @saveTask="save_task")
			div(id="tasklist")
				taskList(v-if="computedList.length > 0" :list="computedList")
				div(v-if="computedList.length == 0") 
					h3 List is empty!
		div(id="taskpage" v-if="page == 'task'")
</template>

<script>
import taskList from './components/TaskList'
import newTask from './components/newTask'

export default {
  name: 'App',
  mounted(){
    this.getList()
  },
  data(){
      return {
        list:[]
        ,new_task: false
        ,page: 'main'
      }
  },
  components: {
    taskList,
    newTask,
  },
  methods:{
    getList: function(){
        this.list = []
    },
    createTask(){
		this.new_task = true 
    },
    save_task(task){
		this.new_task = false
		task.number = this.last_number+1
		this.list.unshift(task)
		//~ console.log(task)
	}
  },
  computed:{
    computedList: function(){
		return this.list.length !== 0 ?  this.list : []
    },
    last_number: function(){
		return this.list.length !== 0 ?  this.list[0].number : 0
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

#mainpage{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  grid-row-gap: 20px;
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
