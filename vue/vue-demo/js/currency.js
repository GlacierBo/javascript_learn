

Vue.filter('currency',function(val){
	val = val || 0;
	return val + '元'
})

new Vue({
	el:'#app',
	data:{
		price : 10
	}
})
