<template>
<div id="bg">
    
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

	<div class="main">
        <ul>
            <li>
                <router-link to="/carrousel1">
                    <img src="../assets/images/b/appbanner-1.jpg"/>
                </router-link>
            </li>
            <li>
                <router-link to="/carrousel2">
                    <img src="../assets/images/b/appbanner-2.jpg"/>
                </router-link>
            </li>
            <li>
                <router-link to="/carrousel3">
                    <img src="../assets/images/b/appbanner-3.jpg"/>
                </router-link>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
        </ol>
    </div>
    <div class="sort1">
        <ul class="page">
            <li class="page1">
                <div>
                    <ul>
                        <li class="lei">
                            <router-link to="/groupon">
                                <div class="imgw">
                                    <img src="../assets/images/a/a1.png"/>
                                </div>
                                <p>团购</p>
                            </router-link>
                        </li>
                        <li class="lei">
                            <router-link to="/takeout">
                                <div>
                                    <img src="../assets/images/a/a2.png"/>
                                </div>
                                <p>外卖</p>
                            </router-link>
                        </li>
                        <li class="lei">
                            <router-link to="/buylimit">
                                <div>
                                    <img src="../assets/images/a/a3.png"/>
                                </div>
                                <p>限时抢购</p>
                            </router-link>
                        </li>
                        <li class="lei">
                            <router-link to="/recreation">
                                <div>
                                    <img src="../assets/images/a/a5.png"/>
                                </div>
                                <p>娱乐</p>
                            </router-link>
                        </li>
                        <li class="lei">
                            <router-link to="/hotel">
                                <div>
                                    <img src="../assets/images/a/a6.png"/>
                                </div>
                                <p>酒店</p>
                            </router-link>
                        </li>
                        <li class="lei">
                            <router-link to="/tripl">
                                <div>
                                    <img src="../assets/images/a/a7.png"/>
                                </div>
                                <p>旅游</p>
                            </router-link>
                        </li>
                        <li class="lei">
                            <router-link to="/ticket">
                                <div>
                                    <img src="../assets/images/a/a8.png"/>
                                </div>
                                <p>票务</p>
                            </router-link>
                        </li>
                        <li class="lei">
                            <router-link to="/services">
                                <div>
                                    <img src="../assets/images/a/b1.png"/>
                                </div>
                                <p>生活服务</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <div id="index">
        <div id="qg_title">
            <span class="left">限时抢购</span>
            <div class="right">距离结束
                <span class="time">
                    <span>00</span>天
                    <span>00</span>时
                    <span>00</span>分
                    <span>00</span>秒
                </span>
            </div>
        </div>
        <div id="qg_edit">
            <ul>
                <li>
                    <router-link to="/buylimit">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd>测试</dd>
                            <dd>
                                <span>￥50</span>
                                <s>￥60</s>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/buylimit">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd>测试</dd>
                            <dd>
                                <span>￥50</span>
                                <s>￥60</s>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/buylimit">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd>测试</dd>
                            <dd>
                                <span>￥50</span>
                                <s>￥60</s>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/buylimit">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd>测试</dd>
                            <dd>
                                <span>￥50</span>
                                <s>￥60</s>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/buylimit">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd>测试</dd>
                            <dd>
                                <span>￥50</span>
                                <s>￥60</s>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/buylimit">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd>测试</dd>
                            <dd>
                                <span>￥50</span>
                                <s>￥60</s>
                            </dd>
                        </dl>
                    </router-link>
                </li>
            </ul>
        </div>

        <div id="rmsj_title">
            <span class="left">热门商家</span>
            <div class="right">
                <router-link to="/hotsj"> 
                更多>>
                </router-link>
            </div>
        </div>
        <div id="rmsj_edit">
            <ul>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hot">
                        <dl>
                            <dt>
                                <img src="../assets/images/qianggou/a1.jpg"/>
                            </dt>
                            <dd class="sjtext">菲斯小铺</dd>
                            <dd class="sjtext1">
                                <span>2人关注</span>
                                <span>已售0</span>
                            </dd>
                        </dl>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="subtitle">
            <ul>
                <li>
                    <router-link to="/carrousel1">
                        <img src="../assets/images/b/app-banner-s1.jpg"/>
                    </router-link>
                </li>
                <li>
                    <router-link to="/carrousel2">
                        <img src="../assets/images/b/app-banner-s2.jpg"/>
                    </router-link>
                </li>
            </ul>
            <ol>
                <li class="active"></li>
                <li></li>
            </ol>
        </div>

        <div id="hottj_title">
            <span class="left">热门推荐</span>
            <div class="right">
                <router-link to="/hottj"> 
                更多>>
                </router-link>
            </div>
        </div>
        <div id="hottj_edit">
            <div class="hottjbg">
                <ul>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                    <li>  
                        <div class="">
                            <router-link to="/xld">
                                <img src="../assets/images/c/c2.jpg"/>
                            </router-link>
                        </div>
                        <p class="xbt">
                            <router-link to="/xld">喜来登酒店
                            </router-link>
                        </p>
                        <div class="rate">
                            <span>￥25</span>
                            <span>[优惠活动]</span>
                            <span>已售50</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
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
    
    #bg{
        background-color:#fafafa;
    }
    .main{
        position: relative;
        width:100%;
        margin-top: 50px;
        overflow: hidden;
        background-color:#fff;
    }
    .main,img{
        width:100%;
        display: block;
    }
    .main ul{
        width:300%;
        position: relative;
    }
    .main ul li{
        width: 33.3%;
        float: left;
    }
    ul li,ol li{
        list-style: none;
    }
    .main ol{
        width: 40px;
        height: 20px;
        position: absolute;
        left: 50%;
        margin-left: -26px;
        bottom: 0px;
    }
    .main ol li{
        float: left;
        width: 12px;
        height: 12px;
        margin: 4px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-sizing: border-box;
        cursor: pointer;
        background: black;
        opacity: 0.14;
    }
	.main .active{
        border: none;
        background: #06c1ae;
        opacity: 1;
    }
    .sort1{
        position: relative;
        width:100%;
        overflow: hidden;
        background-color:#fff;
        margin-bottom:10px;
        padding-bottom: 10px;
        border-bottom:1px solid #e6e6e6;
    }
    .sort1 .page{
        width: 200%;
    }
    .sort1 .page1{
        width: 50%;
    }
    .sort1 .page1>div{
        width:100%
    }
    .sort1 .page1>div{
        width:100%
    }
    .sort1 .lei{
        width: 25%;
        float: left;
        margin-top:10px;
        margin-botton:10px;
    }
    .lei>a{
        width: 25%;
        text-align: center;
        text-decoration: none;
        color:#999;
        font-size: 14px;
        font-family: '微软雅黑';
    }
    .lei>a>div{
        width: 40%;
        margin:0 auto;
        margin-bottom:5px;
    }
    #index{
        width:100%;
        margin-bottom:50px;
    }
    #qg_title{
        background-color:#fff;
        overflow: hidden;
        border-top:1px solid #e6e6e6;
        border-bottom:1px solid #e6e6e6;
    }
    #qg_title .left{
        float:left;
        margin:10px;   
        font-size: 18px;
        font-family: '微软雅黑';
    }
    #qg_title .right{
        float: left;
        font-size: 14px;
        color: #999;
        margin-left: 4px;
        margin-top: 16px;
    }
    #qg_title>.right .time{
        color: #ff6600;
    }
    #qg_title>.right .time span{
        background: #ff6600;
        color:#fff;
        padding:2px;
        margin-right: 2px;
        border-radius: 6px;
    }
    #qg_edit{
        padding: 10px;
        border-bottom: 1px solid #e6e6e6;
        background-color: #fff;
        margin-bottom:10px;
        overflow: hidden;
    }
    #qg_edit ul{
        width:360%;
        overflow: hidden;
    }
    #qg_edit ul>li{
        width:9%;
        float:left;
        margin-right:10px;
    }
    #qg_edit ul>li>a{
        text-align: center;
        text-decoration: none;
        color:#000;
    }
    dd{
        color:#999;
    }
    dd>span:nth-of-type(1){
        color:red;
        font-weight:bold;
    }
    dd>s{
        font-size:14px;
        color:#999; 
    }
    #rmsj_title{
        background-color:#fff;
        overflow: hidden;
        border-top:1px solid #e6e6e6;
        border-bottom:1px solid #e6e6e6;
    }
    #rmsj_title .left{
        float:left;
        margin:10px;   
        font-size: 18px;
        font-family: '微软雅黑';
    }
    #rmsj_title .right{
        float: right;
        font-size: 14px;
        color: #999;
        margin-right: 14px;
        margin-top: 16px;

    }
    #rmsj_title .right>a{
        text-decoration: none;
        color:#999;
        cursor:pointer;
    }
    #rmsj_edit{
        padding: 10px;
        border-bottom: 1px solid #e6e6e6;
        background-color: #fff;
        margin-bottom:10px;
        overflow: hidden;
    }
    #rmsj_edit ul{
        width:360%;
        overflow: hidden;
    }
    #rmsj_edit ul>li{
        width:9%;
        float:left;
        margin-right:10px;
    }
    #rmsj_edit ul>li>a{
        text-align: center;
        text-decoration: none;
        color:#000;
    }
    .sjtext{
        font-size:14px;
    }
    .sjtext1{
        font-size:14px;

    }
    .sjtext1>span:nth-of-type(1){
        font-weight:normal;
        color:#ff3c00;
    }
    .sjtext1>span:nth-of-type(2){
        font-size:12px;
    }

    .subtitle{
        position: relative;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 10px;
        border-bottom: 1px solid #e6e6e6;
    }
    .subtitle>ul{
        width: 200%;
        overflow: hidden;
    }
    .subtitle>ul>li{
        width: 50%;
        float:left;

    }
    .subtitle>ul>li>div{
        width:100%
    }
    .subtitle>ul>li>div{
        width:100%
    }
    .subtitle ol{
        width: 40px;
        height: 20px;
        position: absolute;
        left: 50%;
        margin-left: -26px;
        bottom: 0px;
    }
    .subtitle ol li{
        float: left;
        width: 12px;
        height: 12px;
        margin: 4px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-sizing: border-box;
        cursor: pointer;
        background: black;
        opacity: 0.14;
    }
    .subtitle .active{
        border: none;
        background: #06c1ae;
        opacity: 1;
    }


    #hottj_title{
        background-color:#fff;
        overflow: hidden;
        margin-bottom:10px;
        border-top:1px solid #e6e6e6;
        border-bottom:1px solid #e6e6e6;
    }
    #hottj_title .left{
        float:left;
        margin:10px;   
        font-size: 18px;
        font-family: '微软雅黑';
    }
    #hottj_title .right{
        float: right;
        font-size: 14px;
        color: #999;
        margin-right: 14px;
        margin-top: 16px;

    }
    #hottj_title .right>a{
        text-decoration: none;
        color:#999;
        cursor:pointer;
    }

    #hottj_edit{
        width:100%;
    }
    #hottj_edit .hottjbg{
        width:100%;
    }
    #hottj_edit .hottjbg>ul{
        width:100%;
        overflow: hidden;
    }
    #hottj_edit .hottjbg>ul>li{
        width: 42%;
        float: left;
        margin-left: 10px;
        margin-bottom: 16px;
        background-color: #fff;
        padding: 6px;

    }
    #hottj_edit .hottjbg>ul>li>.xbt{
        padding:6px 0;
        border-bottom:1px solid #e6e6e6;
    }
    #hottj_edit .hottjbg>ul>li>.xbt>a{
        font-size:16px;
        font-family: '微软雅黑';
        color:#000;
        text-decoration: none;
    }
    #hottj_edit .hottjbg>ul>li>.rate{
        padding:4px 0;
        font-size:12px;
        color:#a1a1a1;
    }
    #hottj_edit .hottjbg>ul>li>.rate>span:nth-of-type(1){
        font-size:14px;
        font-weight:bold;
        color:#ff3c00;
    }
    #hottj_edit .hottjbg>ul>li>.rate>span:nth-of-type(3){
        float:right;
    }
</style>

