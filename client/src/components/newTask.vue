<template lang="pug">
  div( class="task")
    label Name
    input(v-model="name")
    label Description
    input(v-model="description")
    button(@click="save") Save
</template>

<script>
export default {
  name: 'newTask',
  props:{
  },
  data () {
    return {
		name:''
		,description:''
    }
  },
  methods:{
	save(){
		//~ this.$emit("saveTask")
		this.$emit("saveTask",{
			name: this.name,
			description:this.description
		})
		//~ console.log('haha')
	}  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
	display: grid
}
</style>
