<template>
	<div class="head1">
		<div class="location">
			广州
		</div>
		<div class="locaitonBtn"></div>
		<div class="nbyobo"></div>
		<div class="coordinate">
			<router-link to="/seek">				
				<span>请输入你想找的内容</span>				
			</router-link>
		</div>
	</div>
</template>
<style scoped>
	
	.head1{
		position:fixed;
		top:0px;
		left:0;
		width: 100%;
		height: 50px;
    	background-color: #06c1ae;
    	z-index: 99;
    	display: -webkit-box;
	}
	.location{
	    width: 24%;
    	height: 100%;
   		line-height: 50px;
    	text-align: center;
    	color: white;
    	top: 0;
    	left: 0;
    	font-size: 14px;
	}
	.location:after{
		content: "";
    	display: inline-block;
    	margin-left: 6px;
    	width: 8px;
    	height: 8px;
    	border: 1px solid white;
    	border-width: 0 1px 1px 0;
    	border-top-width: 0px;
    	border-right-width: 1px;
    	border-bottom-width: 1px;
    	border-left-width: 0px;
    	transform: rotate(45deg);
    	margin-top: 18px;
    	vertical-align: top;
	}
	.locaitonBtn{
	    background: url(../assets/images/a/location.png) no-repeat;
    	position: absolute;
    	width: 10%;
    	height: 100%;
    	top: 0;
    	left: auto;
    	right: 50px;
    	background-size: 20px 20px;
    	background-position: 10px 14px;
    }
    .nbyobo{
    	background: url(../assets/images/a/qrcode.png) no-repeat;
    	position: absolute;
    	width: 10%;
    	height: 100%;
    	top: 0;
    	left: auto;
    	right: 12px;
    	background-size: 20px 20px;
    	background-position: 6px 15px;
    }
    .coordinate{
	    width: 50%;
    	height: 63%;
   		position: absolute;
    	top: 10px;
		left: 24%;
    	border-radius:30px;
    	background:rgba(17, 88, 81, .11);
    }
    .coordinate>a{
    	text-decoration: none;
	    display: block;
    	color: #115851;
    	height: 100%;
    }
    .coordinate span{
    	    float: left;
   		font-size: 14px;
    	line-height: 30px;
    	margin-left: 5px;
    	color: white;
    	opacity: .3;
    }


</style>