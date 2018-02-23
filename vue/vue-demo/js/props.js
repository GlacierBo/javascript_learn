Vue.component('alert',{
	template:'<button @click="on_click()">点击就送</button>',
	props:['msg'],
	methods:{
		on_click:function(){
			alert(this.msg);
		}
	}
})

new Vue({
 el:'#app'
})
