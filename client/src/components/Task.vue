<template lang="pug">
  div( class="task")
    div(id="head")
        h1(@click="verbose = !verbose;") # {{ task.number+' '+task.name }} !
    div(id="body" v-if="verbose")
        div(id="description")
            p {{task.description}}
        button Catch
</template>

<script>
export default {
  name: 'task',
  props:{
    task: Object
  },
  data () {
    return {
      verbose: false
    }
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
