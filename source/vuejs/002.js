(function(){
		var obj = {
			message: 'shenjinxiang'
		};
		new Vue({
				el: '#app',
				data: {
					message: "shenjinxiang"
				},
				methods: {
					changeMessage: function() {
						this.message = this.message.split('').reverse().join('');
					}
				}
		});
})();
