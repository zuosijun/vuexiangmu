<template id="bangding">
	<div class="nr">
		<ul>
			<li v-for="n in 20">
				<router-link to="/xxnr" >
                    <div class="left">
                        <img src="../assets/images/qianggou/a1.jpg"/>
                    </div>
                    <div class="right">
                        <p class="text1">{{n}}{{n}}{{n}}锅里添香美食涮烤自助餐厅</p>
                        <p class="text2">{{n}}{{n}}{{n}}[宿州路]单人自助中餐</p>
                        <div>
                            <span class="strong">49.9</span>
                            <span class="strong-color">元</span>
                            <span class="tag">多优惠+</span>
                            <span class="line-right">已售50293</span>
                        </div>
                    </div>
                </router-link>
			</li>
		</ul>
	</div>
</template>
<style scoped> 
	.nr{
	    position: absolute;
		left: 0px;
		top: 0px;
		width:100%;
		background:#fff;
	}
	.nr>ul{
		width:100%;
	}
	.nr li{
	    width: 100%;
    	border-bottom: 1px solid #d3d3d3;
    	font-family: "微软雅黑";
    	padding:10px 14px;
    	overflow:hidden;
    	list-style: none;
	}
	.left{
		width:32%;
		float:left;
		padding-top: 4px;
	}
	.left>img{
		width:100%;
	}
	.right{
		width:60%;
		float:left;
		padding-left:10px;
	}
	.right>.text1{
		font-family: "微软雅黑";
		padding-bottom:10px;
	}
	.right>.text2{
		font-family: "微软雅黑";
		padding-bottom:10px;
		color:#666;
	}
	.strong{
	    font-size: 16px;
    	color: #06c1ae;
	}
	.strong-color{
		color: #06c1ae;
	}

	.tag{
	    background-color: #F19149;
    	color: #fff;
	    font-size: 14px;
	    border: .01rem solid #f90;
        display: inline-block;
    	padding: 4px;
	    border-radius:5px;
	}
	.line-right{
	    color: #666;
    	font-size: 14px;
    	float:right;
    	line-height: 30px;
	}
	</style>