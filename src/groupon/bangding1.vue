<template id="bangding1">
	<div class="detail">
		<div class="dw">
			<ul>
				<li v-for="n in 10">
				<router-link to="/rankn1">11测试{{n}}</router-link>

				</li>

			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>
<style scoped> 
.dw{
	position: fixed;
		left: 0px;
		top: 84px;
		    width: 100%;
		        background-color: #fff;
	}
	.detail{
		position: absolute;
		left: 0px;
		top: 84px;
		width:100%;
		background-color: #fff;
		    z-index: 61;

	}
	.detail li{
	    width: 100%;
    	border-bottom: 1px solid #d3d3d3;
    	line-height: 44px;
    	font-family: "微软雅黑";
    	padding-left: 30px;
	}
	</style>