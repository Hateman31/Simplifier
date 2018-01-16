window.onload= function(){
	
	var stringCell = function(field,value){
		return {field:field,value:value,edit:false,type:'string'}
	};
	
	var binaryCell =  function(field,value = 0){
		return {field:field,value:value,edit:value == 0 ? true: false,type:'binary'}
	}
	
	var intervalCell = function(field,min,max,value = 1){
		return {
			min : min, 
			max : max,
			field: field,
			value: value,
			type: 'interval',
			edit: false
		}
	};
	
	var selectPosition = function  (field,selectedIndex = 0){
		var options = [
				{caption:'Driver',selected:false}	,
				{caption:'Coocker',selected:false}	
		]
		var position =  {
			options : options,
			field:field,
			value:options[selectedIndex].caption,
			edit:false,
			type:'selection'
		}
		
		position.options[selectedIndex].selected = true;
		return position
	};
    
    Vue.component('app-grid', {
      template: '#grid-template',
      props: {
        data: Array,
        columns: Array,
        filterKey: String
      },
      data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
          sortOrders[key] = 1
        })
        return {
          sortKey: '',
          sortOrders: sortOrders
        }
      },
      computed: {
        filteredData: function () {
          var sortKey = this.sortKey
          var filterKey = this.filterKey && this.filterKey.toLowerCase()
          var order = this.sortOrders[sortKey] || 1
          var data = this.data
          if (filterKey) {
            data = data.filter(function (row) {
              return Object.keys(row).some(function (key) {
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
              })
            })
          }
          if (sortKey) {
            data = data.slice().sort(function (a, b) {
              a = a[sortKey]
              b = b[sortKey]
              return (a === b ? 0 : a > b ? 1 : -1) * order
            })
          }
          return data
        }
      },
      filters: {
        capitalize: function (str) {
          return str.charAt(0).toUpperCase() + str.slice(1)
        }
      },
      methods: {
        sortBy: function (key) {
          this.sortKey = key
          this.sortOrders[key] = this.sortOrders[key] * -1
        },
        setFocus: function (cell){
			cell.edit = !cell.edit;
			console.log(cell.type)
		},
      }
    })
    
    var app = new Vue({
      el: '#app',
      data: {
        searchQuery: '',
        gridColumns: ['name', 'position','test','gym'],	
        gridData: []
      },
      mounted(){
		  this.getDataGrid('http://127.0.0.1:5000/users')
      }, 
      methods: {
		  getDataGrid: function(url) {
			  //~ var app = this
			  axios.get(url).then(response => {
				  this.gridData = response.data
			  }).catch(error => {console.log(error)})
		  }			  
	  }
    })
};
