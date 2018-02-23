Vue.component('like',{
	template:'<button @click="toggle_like()">{{ like_count }}</button>',
	data: function() {
		return {
			like_count:10,
			liked:false,
		}
	},
	methods:{
		toggle_like:function(){
			if(!this.liked)
			 this.like_count++;
			else
			 this.like_count--;
			this.liked = !this.liked;
		}
	}
})

new Vue({
	el:'#app'
})