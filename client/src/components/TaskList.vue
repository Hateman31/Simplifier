<template>
  <div class="tasklist">
    <task v-for="number in list" :number="number"></task>
  </div>
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
