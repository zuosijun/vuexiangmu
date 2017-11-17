<template>
	<div>

		<div class="head1">
			<div class="location" @click="change">
				<p></p>
			</div>
			<div class="locaitonBtn"></div>
			<div class="coordinate">
				团购
			</div>
            <div id="dh">
                <router-link to="/wears" >
                    <span>全部分类</span>
                </router-link>
                <router-link to="/area">
                    <span>全城</span>
                </router-link>
                <router-link to="/rank">
                    <span>智能排序</span>
                </router-link>
                
            </div>
		</div>
        <router-view></router-view>
        <div class="dw1">
            <div class="nr">
                <ul>
                    <li v-for="n in 20">
                        <router-link to="/xxnr" >
                            <div class="left">
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </div>
                            <div class="right">
                                <p class="text1">锅里添香美食涮烤自助餐厅</p>
                                <p class="text2">[宿州路]单人自助中餐</p>
                                <div>
                                    <span class="strong">49.9</span>
                                    <span class="strong-color">元</span>
                                    <span class="tag">多优惠+</span>
                                    <span class="line-right"> 已售50293</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

	</div>
</template>

<script>
	export default{
		
		methods:{
			change(){
				this.$router.push('/home')
			},
            
		}
		
		
	}
</script>

<style scoped> 

    *{
        margin: 0;
        padding: 0;
    }

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
        width: 15%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        color: white;
        top: 0;
        left: 0;
        font-size: 14px;
    }
    .location>p{
        width: 16px;
    	height: 16px;
    	border: 1px solid white;
   		border-width: 0 1px 1px 0;
	    border-top-width: 0px;
	    border-right-width: 1px;
	    border-bottom-width: 1px;
 	    transform: rotate(135deg);
	    margin-left: 26px;
    	margin-top: 18px;
    }
    .locaitonBtn{
        background: url(../assets/images/a/location.png) no-repeat;
        position: absolute;
        width: 10%;
        height: 100%;
        top: 0;
        left: auto;
        right: 12px;
        background-size: 20px 20px;
        background-position: 10px 14px;
    }
    .coordinate{
        width: 70%;
        height: 63%;
        position: absolute;
        top: 10px;
        left: 15%;
        border-radius:30px;
        font-size: 22px;
    	font-family: "微软雅黑";
    	color: #fff;
    	text-align: center;
    	line-height: 26px;
    }
    
    #dh{
    	position:fixed;
        top:50px;
        left:0;
        width: 100%;
        height: 34px;
        background-color: #fff;
        z-index: 99;
    }
    #dh>a{
    	float:left;
    	width:33%;
    	text-align: center;
	    list-style: none;
        border-bottom: 1px solid #d3d3d3;
    	border-left: 1px solid #d3d3d3;
    	border-right: 1px solid #d3d3d3;
    	font-size: 16px;
    	font-family: "微软雅黑";
    	padding:6px 0;
    	text-decoration: none;
    }
    #dh>a:nth-of-type(3){
        width:32.7%;
    }
    #dh>a:nth-of-type(2),#dh>a:nth-of-type(3){
    	margin-left:-1px;
    }
    #dh>a>span{
    	display:block;
    	color:#000;
    }
    #dh>a>span:after{
    	content: "";
        display: inline-block;
        margin-left: 6px;
        width: 8px;
        height: 8px;
        border: 1px solid #000;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
        margin-top: 4px;
        vertical-align: top;
    }
    .mint-swipe{
        top:83px;
    }
    .mint-swipe-item>img{
        width:100%;
    }
    .nr{
        position: absolute;
        left: 0px;
        top: 84px;
        width:100%;
        background:#fff;
            z-index: 50;
                overflow: hidden;
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
    .dw1{
        position: absolute;
        left: 0px;
        top: 84px;
        width:100%;
    }
</style>