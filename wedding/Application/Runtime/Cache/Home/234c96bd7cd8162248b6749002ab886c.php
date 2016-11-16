<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">

<title>个人中心</title>

<link rel="stylesheet" href="/wedding/Public/home/personal/css/public_44e62d1.css"/>

<link rel="stylesheet" href="/wedding/Public/home/personal/css/threeparty_b29ccd2.css" />
<link rel="stylesheet" href="/wedding/Public/home/personal/css/threepartypop_161810e.css" />
<link rel="stylesheet" href="/wedding/Public/home/personal/css/ablums_4795796.css" />
<link rel="stylesheet" href="/wedding/Public/home/personal/css/love_gen_layer.css" />
<link rel="stylesheet" href="/wedding/Public/home/personal/css/threeparty_b29ccd2.css" />

<link rel="stylesheet" href="/wedding/Public/home/personal/css/tipswin_ae73909.css" />
<script type="text/javascript" src="/wedding/Public/home/personal/js/comlj_737338d.js" charset="UTF-8"></script>
<script type="text/javascript" src="/wedding/Public/home/personal/js/tipswin_5ed77b4.js" charset="UTF-8"></script>
<script src="/wedding/Public/home/personal/js/lab.min_e842152.js"></script>
<script src="/wedding/Public/home/personal/js/sea_7e06016.js"></script>
<script src="/wedding/Public/home/personal/js/sea-config_300e430.js"></script>



</head>


   		<body class="skinWrap">
		<script src="/wedding/Public/home/personal/js/screenfix_608df31.js"></script>
   



<header id="jcZAHeader" class="header">
	<section class="frameW top-bar clearfix">
		<a class="logo" href="http://www.zhenai.com/" title="珍爱网"><i></i></a>
		<p class="ad-word">相亲无难事，珍爱有红娘</p>
		<div class="tools">
			<ul class="clearfix">
				<li class="mobile"><a href="http://mo.zhenai.com" target="_blank" title="珍爱网app下载">手机版</a></li>
				<li class="collect"><a href="javascript:;">收藏本站</a></li>
				<li class="cust"><a href="javascript:;">在线客服</a></li>
				<li><a href="http://www.zhenai.com/anquan/" target="_blank" >安全中心</a></li>
				
				<li class="tel">红娘热线：4001-520520</li>
			</ul>
		</div>
	</section>
	<section class="nav-bar">
		<div class="frameW clearfix">
			<menu class="menu">
				<ul>
					<li id="jcMenuBeauty" class="bg-scroll"></li>
					<li><a href="http://profile.zhenai.com/v2/personal/home.do" rel="nofollow">我的珍爱</a></li>
					<li><a href="http://search.zhenai.com/v2/search/pinterest.do" rel="nofollow">搜索</a></li>
					<li><a href="http://t.zhenai.com" target="_blank" >
					直营门店
					</a></li>
					<li><a href="http://profile.zhenai.com/zhenaiMail/zhenaiMail.jsps" rel="nofollow">珍心会员</a></li>
					<li><a href="http://story.zhenai.com/" target="_blank" >成功故事</a></li>
					<li><a href="http://t.zhenai.com/hnzone/articleIndex.do" target="_blank" rel="nofollow">他她说</a></li>
					
					
					
					
					
				</ul>
			</menu>
			<div class="header-info user-info">
				<span class="topic"><em class="user-icon"></em></span>
				<ul>
                    <li><a href="http://profile.zhenai.com/v2/userdata/showInfo.do" rel="nofollow">编辑资料</a></li>
                    <li><a href="http://profile.zhenai.com/v2/verify/verifyIndex.do" rel="nofollow">诚信认证</a></li>
                    <li><a href="http://profile.zhenai.com/v2/photo/photoIndex.do" rel="nofollow">个人相册</a></li>
                    <li><a href="http://profile.zhenai.com/v2/userdata/pwdIndex.do" rel="nofollow">系统设置</a></li>
                    <li class="quit"><a href="http://album.zhenai.com/login/logout.jsps" rel="nofollow">退出</a></li>
                </ul>
			</div>
			<div class="header-info message-info" id="jcMessageInfo">
				
			</div>
			
			
		</div>
	</section>
</header>

<section class="mod-top-ceiling bord ceiling-js hide">
    <div class="ceiling-box clearfix">
       <div class="ceiling-photo fl">
           <a href="javascript:;"><img src="picture/default08.jpg" alt="会员98003284照片" /></a>
       </div> 
       <dl  class="ceiling-dl">
            <dt class="ceiling-dt lh20">
                <h1 class="ceiling-name ib fl fs24 lh32 blue"></h1>  
                <p class="ceiling-age fs14 lh22 c5e">24岁，广东深圳，170cm，3000元以下</p>
            </dt>
            <dd class="ceiling-dd">
         
				

            </dd>
       </dl>
    </div>
</section>


<div class="skin-content posr">
  	

  <div class="skin-body">
  	<article class="myhome-wrap frameW clearfix">
    <!-- 个人信息简介 -->
    <section class="mod-brief-info bgff radius-3 bord">
        <div style="background:white;border:0;width:300px;height:300px" class="photo-album fl">
           
                <div >
                <img style="height:300px;width:300px" src="/wedding/Public/uploads/<?php echo ($_SESSION['user']['icon']); ?>">
                <h3><a href="<?php echo U('Picture/index');?>">上传头像</a></h3>
               </div>
        </div>
        <div class="brief-top p30">
            <p class="brief-name lh32 blue">
                <a class="name fs24">会员<?php echo ($phone); ?></a>
            </p>
            <p class="brief-info fs14 lh32 c9f">ID：<?php echo ($phone); ?>
                <span class="brief-item">积分：<span class="red">2</span></span>
                <!-- <a class="check-login-time check-time-js" href="javascript:;">查看最后登录时间</a> -->
                <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><a class="check-login-time check-time-js" href="javascript:;" title="<?php echo ($vo["registime"]); ?>">查看注册时间</a>
                
            </p>
        </div> 
        <div class="brief-center p20">
            <table class="brief-table">
                <tr>
                    <td>年龄：<?php echo ($vo["age"]); ?></td>
                    <td>身高：<?php echo ($vo["height"]); ?>cm</td>
                    <td>月收入：
                    <?php if($vo["salary"] == '5'): ?>20000以上
                <?php elseif($vo["salary"] == '0'): ?>3000-5000
                <?php elseif($vo["salary"] == '1'): ?>5001-8000
                <?php elseif($vo["salary"] == '2'): ?>8001-10000
                <?php elseif($vo["salary"] == '3'): ?>10001-15000
                <?php elseif($vo["salary"] == '4'): ?>10001-20000<?php endif; ?></td>
                </tr>
                <tr>
                    <td>婚况：
                    <?php if($vo["m_status"] == '0'): ?>未婚
                    <?php elseif($vo["m_status"] == '1'): ?>已婚
                    <?php elseif($vo["m_status"] == '2'): ?>丧偶<?php endif; ?></td>
                    <td>学历：
                <?php if($vo["edu"] == '0'): ?>高中及以下学历
                <?php elseif($vo["edu"] == '1'): ?>中专
                <?php elseif($vo["edu"] == '2'): ?>大专
                <?php elseif($vo["edu"] == '3'): ?>本科
                <?php elseif($vo["edu"] == '4'): ?>硕士
                <?php elseif($vo["edu"] == '5'): ?>博士<?php endif; ?></td>

                    <td>工作地：<?php echo ($vo["w_province"]); echo ($vo["w_city"]); ?></td>
                </tr>
                <tr>
                    <td>职业： <?php echo ($vo["job"]); ?></td>
                    
                    <td>星座：<?php echo ($vo["xingzuo"]); ?></td>
                    
                
                </tr><?php endforeach; endif; else: echo "" ;endif; ?>
            </table>
        </div>
        <div class="brief-bottom">
    

            <div class="icon-group">	
                
                <a id="attention" href="javascript:;" class="tp-icon tp-icon-watch">关注</a>
                <a id="complaint" href="javascript:;" class="tp-icon tp-icon-report">举报/拉黑</a>
                <a href="<?php echo U('Personal/add');?>">添加详细资料让Ta认识你</a>　　　
                <a href="<?php echo U('Personal/life');?>">添加生活状况让Ta认识你</a>　　　
                <a href="<?php echo U('Personal/couple');?>">添加择偶条件</a>
                
            </div>
        </div>
    </section>
    
    <!-- 个人信息详情 -->
    <section class="mod-person-area mt20 clearfix">
        <!-- 展示个人信息 -->
        <section class="mod-person-info fl bgff radius-3 bord">
            <div class="mod-tab-info" id="infoTab">
                <ul class="info-title clearfix info-btn-js">
                    <li class="fl selected"><a href="javascript:;">内心独白</a><b class="line"></b></li>
                    <li class="fl"><a href="javascript:;">自我描述</a><b class="line"></b></li>
                </ul>
                <div class="info-content">
                    <div class="info-item slider info-inner">
                    	
                        <div class="info-text">
                        	<p class="fs14 lh20 c5e slider-area-js">Ta有点害羞,需要你的鼓励,来<a href="javascript:;" field="introduceContent">邀请TA填写内心独白</a>吧<span class="info-mark"></span></p>
                            
                        </div>
                        <div class="info-op">
                        </div>
                        
                    </div>
                    <div class="info-item slider info-describe hide">
                    	
                        <div class="info-text">
                        	<p class="fs14 lh20 c5e slider-area-js">想要听听TA对自己的想法？来<a href="javascript:;" field="describe">邀请TA补充自我描述</a>吧<span class="info-mark"></span></p>
                            
                        </div>
                        <div class="info-op">
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="info-floor floor-data posr clearfix">
            	
                <div class="floor-photo fl tac">
                    <b class="floor-icon floor-icon-data"></b>
                    <p class="fs16 c5e lh32">详细资料 </p>
                </div>
                <div class="floor-content">
                    <table class="floor-table">
                        <?php if(is_array($list1)): foreach($list1 as $key=>$v): ?><tr>
                            <td><span class="label">体重：</span><span field=""><?php echo ($v["weight"]); ?>Kg</span></td>
                            <td><span class="label">血型：</span><span field=""><?php echo ($v["blood"]); ?></span></td>
                        </tr>
                        <tr>
                            <td><span class="label">体型：</span><span field="">
                            <?php if($v["figure"] == '0'): ?>偏瘦
                            <?php elseif($v["figure"] == '1'): ?>苗条
                            <?php elseif($v["figure"] == '2'): ?>偏胖
                            <?php elseif($v["figure"] == '3'): ?>肥胖<?php endif; ?>
                            </span></td>
                            <td><span class="label">职业：</span><span field=""><?php echo ($v["job"]); ?></span></td>
                        </tr>
                        <tr>
                            <td><span class="label">民族：</span><span field=""><?php echo ($v["minzu"]); ?></span></td>
                            <td><span class="label">公司：</span><span field=""><?php echo ($v["company"]); ?></span></td>
                        </tr>
                        <tr>
                            <td><span class="label">信仰：</span><span field=""><?php echo ($v["belief"]); ?></span></td>
                            <td><a href="<?php echo U('Personal/detail');?>">编辑</a></td>
                        </tr><?php endforeach; endif; ?>
                        
                    </table>
                </div>
            </div>
            <div class="info-floor floor-life posr clearfix">
           		
                <div class="floor-photo fl tac">
                    <b class="floor-icon floor-icon-life"></b>
                    <p class="fs16 c5e lh32">生活状况  </p>
                </div>
                <div class="floor-content">
                    <table class="floor-table">
                    <?php if(is_array($list2)): foreach($list2 as $key=>$vv): ?><tr>
                            <td><span class="label">住房条件：</span><span field="">
                                <?php if($vv["house"] == '0'): ?>没有
                                <?php elseif($vv["house"] == '1'): ?>有
                                <?php elseif($vv["house"] == '2'): ?>打算买<?php endif; ?>
                            </span></td>
                            <td><span class="label">有无结婚想法：</span><span field="">
                             <?php if($vv.t-marry == '0'): ?>想
                                <?php elseif($vv.t-marry == '1'): ?>不想<?php endif; ?>   
                            </span></td>
                        </tr>
                        <tr>
                            <td><span class="label">是否购车：</span><span field="">
                            <?php if($vv["car"] == '0'): ?>没有
                                <?php elseif($vv["car"] == '1'): ?>有
                                <?php elseif($vv["car"] == '2'): ?>打算买<?php endif; ?>      
                            </span></td>
                           <td><span class="label">是否吸烟：</span><span field="">
                          <?php if($vv["smoke"] == '0'): ?>偶尔
                                <?php elseif($vv["smoke"] == '1'): ?>不抽<?php endif; ?>                   
                            </span></td> 
                        </tr>
                        <tr>

                        
                        </tr>
                        <tr>
                            <td><span class="label">是否喝酒：</span><span field="">
                       <?php if($vv["drink"] == '0'): ?>偶尔
                                <?php elseif($vv["drink"] == '1'): ?>不喝
                                <?php elseif($vv["drink"] == '2'): ?>酗酒<?php endif; ?>            
                            </span></td>
                            <td><span class="label">较大的消费：</span><span field=""><?php echo ($vv["spend_max"]); ?>元</span></td>
                        </tr>
                        <tr>
                            <td><span class="label">厨艺：</span><span field="">
                           <?php if($vv["drink"] == '0'): ?>不做
                                <?php elseif($vv["drink"] == '1'): ?>偶尔
                                <?php elseif($vv["drink"] == '2'): ?>经常做<?php endif; ?>          
                            </span></td>
                            
                        </tr>
                        <tr>
                            <td><span class="label">家务：</span><span field="">
                         <?php if($vv["house"] == '0'): ?>不做
                                <?php elseif($vv["house"] == '1'): ?>偶尔
                                <?php elseif($vv["house"] == '2'): ?>经常做<?php endif; ?>           
                            </span></td>
                            <td><a href="<?php echo U('Personal/life');?>">编辑</a></td>
                        </tr><?php endforeach; endif; ?>
                    </table>
                </div>
            </div>

            
            
            <div class="info-floor floor-term posr clearfix">
            	
                <div class="floor-photo fl tac">
                    <b class="floor-icon floor-icon-term"></b>
                    <p class="fs16 c5e lh32">择偶条件  </p>
                </div>
                <div class="floor-content">
                    <table class="floor-table">
                    <?php if(is_array($list3)): foreach($list3 as $key=>$value): ?><tr>
                            <td><span class="label">性别：</span>
                            <span field="">
                                <?php if($value["sex"] == '0'): ?>男
                                <?php elseif($value["sex"] == '1'): ?>女<?php endif; ?>
                                </span>
                            </td>
                            <td><span class="label">体型：</span><span field="">
                                <?php if($value["figure"] == '0'): ?>不限
                                <?php elseif($value["figure"] == '1'): ?>苗条
                                <?php elseif($value["figure"] == '2'): ?>正常<?php endif; ?>
                            </span></td>
                        </tr>
                        <tr>
                            <td><span class="label">年龄：</span><span field="">
                                <?php if($value["age"] == '0'): ?>18-24
                                <?php elseif($value["age"] == '1'): ?>25-30
                                <?php elseif($value["age"] == '2'): ?>31-40<?php endif; ?>
                            </span></td>
                            <td><span class="label">职业：</span>
                            <span field="">
                                <?php if($value["job"] == '0'): ?>不限
                                <?php elseif($value["job"] == '1'): ?>服務類
                                <?php elseif($value["job"] == '2'): ?>IT<?php endif; ?>
                                
                            </span></td>
                        </tr>
                        <tr>
                            <td><span class="label">身高：
                            </span><span field=""><?php echo ($value["height"]); ?>cm</span></td>

                            <td><span class="label">是否抽烟：</span><span field="">
                                  <?php if($vv["smoke"] == '0'): ?>偶尔
                                <?php elseif($vv["smoke"] == '1'): ?>不抽
                                <?php elseif($vv["smoke"] == '2'): ?>不限<?php endif; ?>      
                            </span></td>
                        </tr>
                        <tr>
                            <td><span class="label">学历：</span><span field="">
                                 <?php if($vo["edu"] == '0'): ?>高中及以下学历
                            <?php elseif($vo["edu"] == '1'): ?>中专
                            <?php elseif($vo["edu"] == '2'): ?>大专
                            <?php elseif($vo["edu"] == '3'): ?>本科
                            <?php elseif($vo["edu"] == '4'): ?>硕士
                            <?php elseif($vo["edu"] == '5'): ?>博士<?php endif; ?>
                            </span></td>
                            <td><span class="label">是否喝酒：</span><span field="">
                                 <?php if($vv["drink"] == '0'): ?>偶尔
                                <?php elseif($vv["drink"] == '1'): ?>不喝
                                <?php elseif($vv["drink"] == '2'): ?>不限<?php endif; ?>     
                            </span></td>
                        </tr>
                        <tr>
                            <td><span class="label">月收入：</span><span field="">
                                <?php if($vo["salary"] == '5'): ?>20000以上
                                    <?php elseif($vo["salary"] == '0'): ?>3000-5000
                                    <?php elseif($vo["salary"] == '1'): ?>5001-8000
                                    <?php elseif($vo["salary"] == '2'): ?>8001-10000
                                    <?php elseif($vo["salary"] == '3'): ?>10001-15000
                                    <?php elseif($vo["salary"] == '4'): ?>10001-20000<?php endif; ?>
                            </span></td>
                            <td><span class="label">有没有孩子：</span><span field="">
                                <?php if($value["baby"] == '0'): ?>有
                                <?php elseif($value["baby"] == '1'): ?>沒有<?php endif; ?>
                            </span></td>
                        </tr>
                        <tr>
                            <td><span class="label">婚况：</span><span field="">
                                 <?php if($vo["m_status"] == '0'): ?>未婚
                                    <?php elseif($vo["m_status"] == '1'): ?>已婚
                                    <?php elseif($vo["m_status"] == '2'): ?>丧偶<?php endif; ?>
                            </span></td>
                            <td><span class="label">是否想要孩子：</span><span field="">
                                  <?php if($value["child"] == '0'): ?>要
                                <?php elseif($value["child"] == '1'): ?>不想要<?php endif; ?>
                            </span></td>
                        </tr>
                        <tr>
                            <td><span class="label">工作地区：</span><span field=""><?php echo ($value["w_province"]); echo ($value["w_city"]); ?></span></td>
                 
                            <td><a href="<?php echo U('Personal/editcouple');?>">编辑</a></td><?php endforeach; endif; ?>
                        </tr>
                    </table>
                </div>
                
            </div>
        </section>
        <!-- 右侧栏 -->
        <aside class="mod-person-aside fr">
            <!-- 收到礼物 -->
            <div style="display:none" class="receive-gift mb10 bgff radius-3 bord">
                <div class="info-title">
                    <span class="c33 bgff">Ta收到的礼物 </span><span class="c9e bgff">(<span id="giftNum" class="red bgff">15</span>个)</span>
                </div>
                <div class="gift-area posr gift-roll-js">
                    <div class="gift-list-box posa clearfix ">
                    </div>
                </div>
                <div class="gift-btn tar">
                    <a href="javascript:;" class="gift-btn-left disable"></a>
                    <a href="javascript:;" class="gift-btn-right"></a>
                </div>
            </div>
            
            <!-- 珍爱币和珍心会员 -->
            
            
           
            <!-- 游戏广告begin -->
            
            <!-- 游戏广告end -->
           
            
            	<!-- 超级秋波广告 -->
	      <!--       <div class="mb10 bgff radius-3 bord imgAdvMod">
	            	<a href="http://profile.zhenai.com/personal/superLeerSend.jsps?source=profileIndex" target="_blank"><img src="picture/guide_side_5_1a38037.jpg"  alt="超级秋波"/></a>
	            </div> -->
	             <!-- 超级秋波广告 end-->
            	
            
        </aside>
    </section>
	</article>
  </div>
  <div class="skin-footer">
  </div>
</div>




	<!--线上相亲会-->
	<div id="onlineDate" style="display:none">
	    <a href="http://profile.zhenai.com/v2/wechatXqh/xqhlist.do" target="_blank" onclick="ajaxStat(1979,11,0,0);" >
	      <span id="onlineDate_btn">下一步</span>
	    </a>
	    <span id="onlineDate_close"></span>
	</div>
	
	
<script type="text/javascript">

$LAB.script("http://i3.zastatic.com/zhenai3/zhenai2015/js/lib/jquery-1.8.3.min_e128811.js").wait(function(){
	$.ajax({
	    type:"GET",
	    dataType: "json",
	    url:"/v2/wechatXqh/showFlow.do",
	    success:function(result){
	    	if(!result || result.code == 0){
				return;
			}
	    	
	        if(result.data == true){
	        	document.getElementById("onlineDate").style.display = "block";
	        	ajaxStat(1979,12,0,0);
	        }
	    }
	});
});

//线上相亲会关闭按钮
function closeDate() {
    var onlineClose = document.getElementById("onlineDate_close");
    var onlineDate = document.getElementById("onlineDate");
    var px = 0;
    var closeTime = 0;
//关闭div
//var px= document.defaultView.getComputedStyle(onlineDate,false)["bottom"];
    if (onlineDate.currentStyle) {
        // IE用  element.currentStyle["name"]
        px = onlineDate.currentStyle["bottom"];
        closeTime = 2;
    }
    else {
        px = document.defaultView.getComputedStyle(onlineDate, false)["bottom"];
        closeTime = 20;
    }
//console.log(px.substring(0,px.length-2));
    var botm = px.substring(0, px.length - 2);
    onlineClose.onclick = function () {
        var timeID = setInterval(function () {
            onlineDate.style.bottom = botm + "px";
            botm-=5;
            if (botm == (-220)) {
                clearInterval(timeID);
            }
        }, closeTime);
        $.ajax({
            type:"POST",
            dataType: "json",
            url:"/v2/wechatXqh/close.do"
        }); 
    }
}
closeDate();
</script>




		<div class="hot-city seo-city">
			<div class="city-wrap frameW">
				<div class="city-list clearfix limit-44">
				
					
						
					<p class="breadNav">
						当前位置：<a href="http://www.zhenai.com">珍爱首页</a><span>&gt;</span><a href="http://www.zhenai.com/jiaoyou/shenzhen">深圳交友</a><span>&gt;</span><a href="http://www.zhenai.com/jiaoyou/baoan">宝安交友</a><span>&gt;</span><a href="http://www.zhenai.com/jiaoyou/baoan/nan">宝安男士交友</a>
					</p>	
						
					
					
				
					<p>周边征婚：<a target="_blank" href="http://www.zhenai.com/zhenghun/guangdong">广东征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/shenzhen">深圳征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/baoan">宝安征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/chaozhou">潮州征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/zhongshan3">中山征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/shaoguan">韶关征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/heyuan">河源征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/yunfu">云浮征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/shanwei">汕尾征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/yangjiang">阳江征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/zhanjiang">湛江征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/foshan">佛山征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/meizhou">梅州征婚</a><a target="_blank" href="http://www.zhenai.com/zhenghun/guangzhou">广州征婚</a><br/></p>
				
				</div>
			</div>
		</div>
	

<footer class="footer">
    <div class="frameW clearfix">
        <div class="about">
            <div class="quick"><a target="_blank" href="http://about.zhenai.com/" >关于我们</a>|<a target="_blank" href="http://tv.zhenai.com/MeiTiGuanZhu/index.x" rel="nofollow">媒体关注</a>|<a target="_blank" href="http://contact.zhenai.com/" >联系我们</a>|<a target="_blank" href="http://www.zhenai.com/job/" >加入我们</a>|<a target="_blank" href="http://about.zhenai.com/huoban" rel="nofollow">合作伙伴</a>|<a target="_blank" href="http://profile.zhenai.com/personal/getguestbookbegin.jsps" rel="nofollow">意见反馈</a>|<a href="http://www.zhenai.com/sitemap.html" target="_blank">网站地图</a>
            |<a href="http://www.zhenai.com/ahelpcenter/index.jsp" target="_blank">帮助中心</a>|<a href="http://album.zhenai.com" target="_blank">珍爱会员</a>|<a href="http://city.zhenai.com/" target="_blank">珍爱相亲</a></div>
            <div class="brand grayL"><span>品牌：11年专业婚恋服务</span>&nbsp;&nbsp;<span>专业：庞大的资深红娘队伍</span>&nbsp;&nbsp;<span>真实：诚信会员验证体系</span></div>
            <div class="contact grayL"><span>客服热线：4001-520-520（周一至周日：9:00-21:00）</span><span>客服信箱：kefu@zhenai.com（周一至周五：10:00-19:00）</span></div>
            <div class="contact grayL"><span><a style="color:#9f9f9f;" href="http://profile.zhenai.com/v2/sys/reportEntry.do" target="_blank" rel="nofollow">违法和不良信息举报</a></span>&nbsp;&nbsp;<span>违法和不良信息举报专线：4008829288</span>&nbsp;&nbsp;<span>举报信箱：<a style="color: #9f9f9f;" href="mailto:jubao@zhenai.com" class="underlines" rel="nofollow">jubao@zhenai.com</a></span></div>
        </div>
        <div class="copyright grayL">
        	<p>Copyright &copy; 2005-2016 版权所有：深圳市珍爱网信息技术有限公司<br>增值电信业务经营许可证粤B2-20040382号 粤ICP备09157619</p>
        	<div class="out-link">
            	<a target="_blank" title="深圳网警备案" href="http://szgabm.qq.com/" class="link2" rel="nofollow"></a>
            	<a target="_blank" title="国际联网备案" href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403301900797" class="link1" rel="nofollow"></a>
            	<a title="深圳举报中心" href="http://szwljb.gov.cn/" class="link6" target="_blank"  rel="nofollow"></a>
                <a title="违法和不良信息举报中心" href="http://www.12377.cn/" class="link3" target="_blank"  rel="nofollow"></a>  
                <a title="诚信示范网站" href="https://search.szfw.org/cert/l/CX20150630010588010670" class="link4" target="_blank" rel="nofollow"></a>
                <a title="AAA级信用企业" href="http://www.itrust.org.cn/Home/Index/itrust_certifi?wm=1761973720" class="link7" target="_blank" rel="nofollow"></a>
            </div>
        </div>
    </div>
</footer>
<iframe id="complaintFrame" name="complaintFrame" style="display:none"></iframe>
<script>
$LAB.script("http://i3.zastatic.com/zhenai3/zhenai2015/js/lib/jquery-1.8.3.min_e128811.js").wait()
	.script("http://images.zastatic.com/zhenai3/zhenai2012/js/lib/artDialog/jquery.artDialog.js?skin=default").wait()
	.script("http://images.zastatic.com/zhenai3/zhenai2012/js/lib/artDialog/plugins/iframeTools.js")
	.script("http://images.zastatic.com/zhenai3/zhenai2012/js/widget/za_dialog.js")
	.script("http://images.zastatic.com/zhenai3/zhenai2012/js/third_party/commonOption.js")
    .wait(function(){
    	//Seo Statistics
    	seoStat(4);
    	
    	
    	
    	<!-- 游戏广告打桩 start-->
    	
    	<!-- 游戏广告打桩 end-->
    	
    	
	    seajs.use(['zhenai2015/js/threeParty/index.js'],function(main){
	    	main.init({
	    		memberInfo : $.parseJSON('{"sex":0,"occupation":"不限","workCity":"广东深圳","isVip":false,"ZXHideFlag":false,"marriage":"未婚","education":"大学本科","photo":"http://photo.zhenai.com/images/personal/default08.jpg","online":"6小时内登录过","zhenXinType":0,"hasPhoto":false,"height":170,"nickName":"会...","isZhenXin":false,"infoPercent":24,"isStar":false,"vipHideFlag":false,"age":24,"isVerifyStatusAbnormal":false,"memberId":98003284,"fullName":"会员98003284","salary":"3000元以下"}'),
	    		userInfo : $.parseJSON(''),
	    		isLogin : false,
	    		isMyself : false,
	    		isStarTester:''==='true'?true:false,
	    		isNewPriceUser:false
	        });
	    });
	   
	});
</script>

<script type="text/javascript">
try{
	var gdt_tracker=gdt_tracker||[];
	gdt_tracker.push(["set_source_id","10011"]);
	gdt_tracker.push([ "add_action", "USERINFO",
	                   "242a20b5abf9fb7d53ea91d8309884a8", // 用户ID
	                   "会员98003284", // 姓名
	                   "男" , // 性别 , 可选值: 男, 女
	                   "24" , // 年龄
	                   "--", // 体重， 单位 kg
	                   "170", // 身高， 单位 cm
	                   {
	                   "address" : "广东深圳", // 住址
	                   "income" : "3000", // 收入， 单位 元
	                   "marriage" : "未婚", // 婚姻状态， 可选值:未婚， 已婚
	                   "education" : "本科" // 教育程度， 可选值：博士,研究生，本科，高中，初中，小学，幼儿园
	                   }
	                   ]);
	gdt_tracker.push(["send"]);
	(function(){
		var doc=document,h=doc.getElementsByTagName('head')[0],s=doc.createElement('script');
		s.async=true;
		s.src='http://qzs.qq.com/qzone/biz/res/gt.js';
		h&&h.insertBefore(s,h.firstChild);
	})();
}catch(e){
	
}
</script>
</body>
</html>