var routes = [
{
	path:'/',
	component:{
		template:
		`
		<h1>首页</h1>
		`
	}
},
{
	path:'/about',
	component:{
		template:
		`
		<h1>关于我们</h1>
		`
	}
},
{
	path:'/user/:name',
	component:{
		template:
		`
		<div>
		<h1>我叫:{{ $route.params.name}}</h1>
		<h2>我今年:{{ $route.query.age}}岁了</h2>
		<router-link to="more" append>更多信息</router-link>
		<router-view></router-view>
		</div>
		`
	},
	children:[
	{
		path:'more',
		component:{
			template:`
			<div>
			用户: {{ $route.params.name}} 的详细信息
			随便添加一点东西
			</div>
			`
		}
	}
	]
}
];

var router = new VueRouter ({
	routes:routes,
})

new Vue({
	el:'#app',
	router:router,
})
