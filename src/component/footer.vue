	<template>
		<main>
			<router-link to="/home">
				<div class="icon on"></div>
				<p>首页</p>
			</router-link>
			<router-link to="/nearby">
				<div class="icon bp5"></div>
				<p>附近</p>
			</router-link>
			<router-link to="/buy">
				<div class="icon bp4"></div>
				<p>抢购</p>
			</router-link>
			<router-link to="/attention">
				<div class="icon bp3"></div>
				<p>关注</p>
			</router-link>
			<router-link to="/my">
				<div class="icon bp2"></div>
				<p>我的</p>
			</router-link>
			
		</main>
	</template>

	<style scoped>
		main{
			position:fixed;
			bottom:0px;
			left:0;
			width:100%;
			height:50px;
			background:#eeeeee;
		}
		main>a{
			float:left;
			width:20%;
			text-align: center;
			text-decoration: none;
			color:#666666;
		}
		.icon{
		    width: 20px;
   			height: 20px;
    		margin: 0 auto;
    		margin-top: 6px;
    		background: url(../assets/images/a/footIco.png) no-repeat center top;
    		background-size: 100% auto;
		}
		.on{
			background-image: url(../assets/images/a/footIco_on.png);
		}
		.bp5{
		    background-position: center -80px;
		}
		.bp4{
		    background-position: center -20px;
		}
		.bp3{
		    background-position: center -40px;
		}
		.bp2{
		    background-position: center -60px;
		}
		main>a>p{
		    margin: 0;
    		font-size: 14px;
    		font-family: '微软雅黑';

		}
		
	</style>