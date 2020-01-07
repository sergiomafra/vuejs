new Vue({
	el: '#exercise',
	data: {
		name: 'Sérgio Mafra',
		age: 31,
		linkToImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Five_Pointed_Star_Solid.svg'
	},
	methods: {
		ageTimesThree: function() {
			return this.age * 3;
		},
		randomGenerator: function() {
			return Math.random();
		}
	}
});
