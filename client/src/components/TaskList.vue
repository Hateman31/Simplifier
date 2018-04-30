<template lang="pug">
  div(class="tasklist")
    task(
        class="task" 
        v-for="item in list" 
        :task="item" 
        :key="item.id"
    )
</template>

<script>
import task from './Task.vue'

export default {
  name: 'taskList',
  props:{
    list: Array
  },
  data () {
    return { }
  },
  components: {
      task
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
