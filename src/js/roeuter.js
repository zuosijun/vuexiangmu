import VueRouter from 'vue-router'


import home  from  '../home/home.vue'
import groupon  from  '../groupon/groupon.vue'
import groupon2  from  '../groupon/groupon2.vue'
import detail  from  '../groupon/bangding.vue'
import detail1  from  '../groupon/bangding1.vue'
import detail2  from  '../groupon/bangding2.vue'
import bang  from  '../groupon/bang.vue'
import bang1  from  '../groupon/bang1.vue'
import bang2  from  '../groupon/bang2.vue'

export default new VueRouter({
	routes:[
		{path:'*',redirect:'/home'},
		{path:'/home',component:home,},
		{path:'/groupon',component:groupon,
			children:[
				{path:'/wears',component:detail,	
					children:[
					{path:'/rankn',component:bang}
					]
				},
				{path:'/area',component:detail1,
					children:[
						{path:'/rankn1',component:bang1}
						]
				},
				{path:'/rank',component:detail2,
					children:[
					{path:'/rankn2',component:bang2}
					]
				},
			]},
		{path:'/nearby',component:groupon2,
			
		},
		// {path:'/my',component:menu},
		// {path:'/hot',component:menuone}
	]

})
