new Vue({
	el: '#exercise',
  data: {
  	value: ''
  },
	methods: {
		alertMe: function() {
			alert('Holy Macaroni!');
		},
		changeValue: function(event) {
		  this.value = event.target.value
		}
	}
});
