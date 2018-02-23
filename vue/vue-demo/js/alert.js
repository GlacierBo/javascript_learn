Vue.component('alert',{
	template:'<button @click="on_click">弹弹弹</button>',
	methods:{
		on_click:function(){
			alert('Yo.Boy.');
		}
	}
});

new Vue({
	el:'#app'
})

