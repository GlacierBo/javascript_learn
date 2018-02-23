Vue.component('banlance',{
	template:`
	<div>
		<show @show-balance="show_balance = true"></show>
		<div v-if="show_balance">
		您的余额: $ 98亿
		</div>
	</div>
	`,
	data:function(){
		return{
			show_balance:false
		}
	}
});

Vue.component('show',{
	template:'<button @click="on_click()">显示余额</button>',
	methods:{
		on_click: function(){
			this.$emit('show-balance',{a:1,b:2});
		}
	}
})

new Vue({
	el:'#app'
})
