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
                <router-link to="/wears" @click="change1">
                    <span>全部分类</span>
                </router-link>
                <router-link to="/area">
                    <span>全城</span>
                </router-link>
                <router-link to="/rank">
                    <span>智能排序</span>
                </router-link>
                <router-view></router-view>

            </div>
		</div>
		
        <mt-swipe :auto="400000">
            <mt-swipe-item>
                <img src="../assets/images/b/appbanner-1.jpg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/images/b/appbanner-2.jpg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/images/b/appbanner-3.jpg"/>
            </mt-swipe-item>
        </mt-swipe>

	</div>
</template>

<style>
    #gp-model .mint-swipe-items-wrap {
    
    padding-bottom: 37%;
} 
</style>

<script>
	export default{
		
		methods:{
			change(){
				this.$router.go(-1)
			},
            change1(){
                this.$router.push({path:'/groupon'})
            }
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
</style>