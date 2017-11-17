<template>
	<div id="gp-model">

		<div class="head1">
			<div class="location" @click="change">
				<p></p>
			</div>
			<div class="locaitonBtn"></div>
			<div class="coordinate">
				团购
			</div>

            
		</div>
        <div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">全部分类</mt-tab-item>
                <mt-tab-item id="2">全城</mt-tab-item>
                <mt-tab-item id="3">只能排序</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容' + n" @click.native="change1(n)"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :title="'测试' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="n in 6" :title="'选项' + n" />
                </mt-tab-container-item>
            </mt-tab-container> 
        </div>
	</div>
</template>

<script>
	export default{
		data(){
            return{
            msg:'',
            selected:''
            }
        },
		methods:{
			change(){
				this.$router.go(-1)
			},
            change1(n){
                console.log(n)
                
            },
            
		}
		
		
	}
</script>

<style>
    #gp-model .mint-swipe-items-wrap {
    
    padding-bottom: 37%;

} 
#gp-model .mint-swipe{
        top:83px;
    }
    #gp-model .mint-swipe-item>img{
        width:100%;
    }
    #gp-model .mint-tab-item-label:after{
        content: "";
        display: inline-block;
        margin-left: 6px;
        width: 8px;
        height: 8px;
        border: 1px solid #000;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
        vertical-align: top;
    }
    #gp-model .mint-cell-wrapper{
    padding:0;
    }
    #gp-model .mint-cell-title {
        padding-left: 10px;
    }
</style>
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
    
    .mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    position: fixed;
    top: 50px;
    background-color: pink;
    width: 100%;
    }
    .mint-tab-container {
    top: 86px;
    }
    .mint-tab-item-label {
    line-height: 12px;
    font-size: 14px;
    font-family: "微软雅黑";
    }
    .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 0px solid #26a2ff; 
    color: #000; 
    margin-bottom: 0px; 

    }
    .mint-navbar .mint-tab-item {
    padding: 12px 0;
    }
    

</style>