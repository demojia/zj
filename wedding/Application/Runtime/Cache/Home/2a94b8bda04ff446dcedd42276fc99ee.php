<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
<html>
<head>
	<title>珍爱你的真爱</title>
    <meta name="keywords" content="珍爱网VIP,珍爱网门店,珍爱网线下门店,珍爱网线下VIP">
	<meta name="description" content="珍爱网每一个人都值得被珍爱，珍爱网线下门店重磅出击，珍爱网VIP会员一对一红娘服务，人工红娘帮您筛选合适对象，成功率更高。人工红娘您值得信赖，欢迎来珍爱网门店体验。" />
	
<meta charset="GBK">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<link href="http://i2.zastatic.com/zhenai3/zhenai2015/img/favicon.ico" type="image/x-icon" rel="icon" />
<link href="http://i2.zastatic.com/zhenai3/zhenai2015/img/favicon.ico" type="image/x-icon" rel="shortcut icon" />
<link rel="stylesheet" href="/wedding/Public/home/css/public_44e62d1.css"/>
<link rel="stylesheet" href="/wedding/Public/home/css/common_c6ba449.css"/>
<script src="/wedding/Public/home/js/lab.min_e842152.js"></script>
<script src="/wedding/Public/home/js/sea_7e06016.js"></script>
<script src="/wedding/Public/home/js/sea-config_300e430.js"></script>
<link rel="stylesheet" href="/wedding/Public/home/css/index_6738c59.css"/>
<style type="text/css">
	.aa{
		text-decoration: none;
		color:white;
	}
</style>
</head>
<body>
<header class="ol-header">
	<section class="frameW clearfix">
		<a class="ol-logo" href="javascript:;/" title="珍爱网"></a>
		<!-- <a class="ol-word" href="javascript:;">珍爱你的珍爱</a> -->
		<menu id="ol-nav" class="ol-nav">
			<ul>
				<li id="j-menuBeauty" class="menu-scroll"></li>
				<li><a href="/offline/index.do">首页</a></li>
				<li><a href="<?php echo U('hesay/index');?>">星座说</a></li>
				<li><a href="/offline/handsomes.do" rel="nofollow">优质会员</a></li>
				<li><a href="/offline/loveStoryIndex.do" rel="nofollow">成功故事</a></li>
				<li><a href="<?php echo U('Personal/index');?>">个人中心</a></li>
				<li><a href="<?php echo U('Weather/index');?>">查看天气</a></li>
				
				<?php
 if($_SESSION['user']['phone']) { echo '<li>welcome:<span style="color:pink;font-size:14px">'.$_SESSION['user']['username'].'</span></li>'; }else{ echo '<a href="">请登录寻找良缘</a>'; } ?>
				<li><a href="<?php echo U('Login/loginout');?>">退出</a></li>
			</ul>
		</menu>
	</section>
</header>
<section class="ol-placeholder"></section>
<!-- 头部end -->
	<article class="ol-banner">
	    <!--焦点图-->
		<div class="g-slide">
			<ul class="g-slide-wrapper">

			<?php if(is_array($list)): foreach($list as $key=>$val): ?><li style="display: block">
<a style="background-image:url(/wedding/Public/lunbo/<?php echo ($val["pic"]); ?>);"></a>			
<!-- <a style="background-image:url(/wedding/Public/lunbo/<$val.pic}>);"></a> -->
</li><?php endforeach; endif; ?>
			</ul>
			<!-- 页码 -->
			<div class="g-slidebox">
				<div class="slideWrap">
					<ul class="dot-wrap"></ul>
				</div>
			</div>
			<!-- 按钮 -->
			<a href="javascript:;" class="ctrl-slide g-prev">上一张</a>
			<a href="javascript:;" class="ctrl-slide g-next">下一张</a>
		</div>
		<!--焦点图 end-->


	</article>

	<article class="ol-wrap2">
		<section class="frameW">
			<h2>精选优质会员</h2>
			<div class="handle">
<!-- 				<ul id="j-switch">
					<li data-sex="0" class="btnR2 cur">只看女会员</li>
					<li data-sex="1" class="btnP2">只看男会员</li>
				</ul> -->
			</div>
			<div class="menberBox">
				<div id="j-menberBox" class="menberBox">
				<ul class="menberList clearfix" style="display:block;">
					<?php if(is_array($list1)): foreach($list1 as $key=>$res): ?><li class="menberItem" data-id="156">
							
							<img src="/wedding/Public/uploads/<?php echo ($res["icon"]); ?>" alt="" />
							<div class="top"></div>
							
							<a class="aa" href="<?php echo U('Index/know');?>?id=<?php echo ($res["id"]); ?>&phone=<?php echo ($res["phone"]); ?>">
							<div class="menberInfo">
								<h3><?php echo ($res["username"]); ?></h3>
								<p><?php echo ($res["birth"]); ?></p>
								<p><?php echo ($res["height"]); ?></p>
								<ul class="list1">
									<li>职业：<?php echo ($res["job"]); ?></li>
									<li>收入：
								<?php if($res["salary"] == '5'): ?>20000以上
				                <?php elseif($res["salary"] == '0'): ?>3000-5000
				                <?php elseif($res["salary"] == '1'): ?>5001-8000
				                <?php elseif($res["salary"] == '2'): ?>8001-10000
				                <?php elseif($res["salary"] == '3'): ?>10001-15000
				                <?php elseif($res["salary"] == '4'): ?>10001-20000<?php endif; ?>
									</li>
									<li><h2><a class="focus" href="javascript:;" rel="<?php echo ($res["id"]); ?>">关注Ta</a></h2></li>
								</ul>
							</div>
						</a>
					</li><?php endforeach; endif; ?>
		</ul>
			</div>
			</div>
			<div class="VIPbox"></div>
		</section>
	</article>
		<article class="ol-wrap1">
		<section class="frameW">
			<h2>珍爱网VIP服务特色</h2>
			<ul class="teseList">
				<li class="teseItem teseItem1">
					<div class="itemPhoto">
						<div class="itemBg"></div>
						<i class="icon1"></i>
						<i class="icon2"></i>
						<span class="cover"></span>
					</div>
					<p class="itemTxt"><b>线下门店全直营</b>不做加盟，打造一流品质服务</p>
				</li>
				<li class="teseItem teseItem2">
					<div class="itemPhoto">
						<div class="itemBg"></div>
						<i class="icon1"></i>
						<i class="icon2"></i>
						<span class="cover"></span>
					</div>
					<p class="itemTxt"><b>红娘服务一对一</b>资深红娘团队，专业婚恋测评</p>
				</li>
				<li class="teseItem teseItem3">
					<div class="itemPhoto">
						<div class="itemBg"></div>
						<i class="icon1"></i>
						<i class="icon2"></i>
						<span class="cover"></span>
					</div>
					<p class="itemTxt"><b>全国会员可共享</b>9000万优质会员，专业匹配推荐</p>
				</li>
				<li class="teseItem teseItem4">
					<div class="itemPhoto">
						<div class="itemBg"></div>
						<i class="icon1"></i>
						<i class="icon2"></i>
						<span class="cover"></span>
					</div>
					<p class="itemTxt"><b>门店相亲保安全</b>多彩相亲派对，安全约见场所</p>
				</li>
				<li class="teseItem teseItem5">
					<div class="itemPhoto">
						<div class="itemBg"></div>
						<i class="icon1"></i>
						<i class="icon2"></i>
						<span class="cover"></span>
					</div>
					<p class="itemTxt"><b>身份验证百分百</b>资料严格审查，安全隐私保护</p>
				</li>
			</ul>
		</section>
	</article>
	<article class="ol-wrap3">
		<section class="frameW">
			<h2>成功故事</h2>
			<div class="handle clearfix">
				<a class="more" href="#" target="_blank" rel="nofollow">查看更多&gt;</a>
			</div>
			<div class="succStory">
				<span class="square square1"></span>
				<span class="square square2"></span>
				<span class="square square3"></span>
				<ul id="j-stroyList" class="stroyList clearfix">
					
						<li class="stroyItem ">
							<a class="blockA" href="#" target="_blank" rel="nofollow">
								<span class="succImg"><img src="/wedding/Public/home/picture/1361380319869_2.jpg" alt="" /></span>
								<div class="succTxt">
									<h3>珍惜缘分，爱你一生！</h3>
									<p>欣然&amp;Grant&nbsp;&nbsp;&nbsp;&nbsp;会员状态：已结婚</p>
								</div>
							</a>
						</li>
					
						<li class="stroyItem even">
							<a class="blockA" href="#" target="_blank" rel="nofollow">
								<span class="succImg"><img src="/wedding/Public/home/picture/1409887049945_2.jpg" alt="" /></span>
								<div class="succTxt">
									<h3>缘分，有时就是分分钟</h3>
									<p>娇娇妹&amp;Mondler&nbsp;&nbsp;&nbsp;&nbsp;会员状态：已结婚</p>
								</div>
							</a>
						</li>
					
						<li class="stroyItem ">
							<a class="blockA" href="#" target="_blank" rel="nofollow">
								<span class="succImg"><img src="/wedding/Public/home/picture/1331284759135_2.jpg" alt="" /></span>
								<div class="succTxt">
									<h3>我们结婚咯</h3>
									<p>康康&amp;公主晚安&nbsp;&nbsp;&nbsp;&nbsp;会员状态：已结婚</p>
								</div>
							</a>
						</li>
					
						<li class="stroyItem even">
							<a class="blockA" href="#" target="_blank" rel="nofollow">
								<span class="succImg"><img src="/wedding/Public/home/picture/1407913047050_2.jpg" alt="" /></span>
								<div class="succTxt">
									<h3>谋事在人，成事在天</h3>
									<p>小宇&amp;晨星&nbsp;&nbsp;&nbsp;&nbsp;会员状态：已结婚</p>
								</div>
							</a>
						</li>
					
				</ul>
			</div>
		</section>
	</article>
	<article class="ol-wrap4">
		<section class="frameW">
			<h2>红娘风采</h2>
			<div class="handle clearfix">
				<a class="more" href="#" target="_blank">查看更多&gt;</a>
			</div>
			<div class="hnListBox">
				<ul id="j-hnList" class="hnList clearfix">
					
						<li class="hnItem">
							<a href="#" target="_blank">
								<span class="imgBox"><img src="/wedding/Public/home/picture/1452076384243.jpg" alt=""></span>
								<ul class="txtBox">
									<li><span>祝老师</span></li>
									<li>婚恋建议：世间所有的相遇，都是久别重逢，也许你对爱情失望过，对...</li>
								</ul>
							</a>
						</li>
					
						<li class="hnItem">
							<a href="#" target="_blank">
								<span class="imgBox"><img src="/wedding/Public/home/picture/1452075872445.jpg" alt=""></span>
								<ul class="txtBox">
									<li><span>李老师</span></li>
									<li>婚恋建议：爱情和婚姻都是需要经营的，学会相互包容，才能相濡以沫...</li>
								</ul>
							</a>
						</li>
					
						<li class="hnItem">
							<a href="#" target="_blank">
								<span class="imgBox"><img src="/wedding/Public/home/picture/1452076562962.jpg" alt=""></span>
								<ul class="txtBox">
									<li><span>张老师</span></li>
									<li>婚恋建议：用心把握每一个属于自己缘分，用心去经营，相信自已一定...</li>
								</ul>
							</a>
						</li>
					
						<li class="hnItem">
							<a href="#" target="_blank">
								<span class="imgBox"><img src="/wedding/Public/home/picture/1452075395816.jpg" alt=""></span>
								<ul class="txtBox">
									<li><span>张老师</span></li>
									<li>婚恋建议：相识容易相处难。种下一棵果树不去浇灌却期待它硕果累累...</li>
								</ul>
							</a>
						</li>
					
				</ul>
			</div>
		</section>
	</article>

	<article class="ol-wrap5">
		<section class="frameW">
			<h2>珍爱网直营门店</h2>
			<div class="handle clearfix">
				<a class="more" href="#" target="_blank">查看更多&gt;</a>
			</div>
			<div class="mdListBox">
				<ul id="j-mdList" class="mdList clearfix">
					<li class="mdItem">
						<a href="#">
							<img src="/wedding/Public/home/picture/tianjin.jpg" alt="">
							<p>珍爱网天津小白楼店</p>
						</a>
					</li>
					<li class="mdItem">
						<a href="#">
							<img src="/wedding/Public/home/picture/suzhou.jpg" alt="">
							<p>珍爱网苏州圆融时代店</p>
						</a>
					</li>
					<li class="mdItem">
						<a href="#">
							<img src="/wedding/Public/home/picture/chengdu.jpg" alt="">
							<p>珍爱网成都来福士店</p>
						</a>
					</li>
					<li class="mdItem">
						<a href="#">
							<img src="/wedding/Public/home/picture/beijing.jpg" alt="">
							<p>珍爱网北京西直门店</p>
						</a>
					</li>
				</ul>
			</div>
		</section>
	</article>
	
<!-- 城市列表start -->
<div class="hot-city">
	<div class="city-wrap frameW">
        <div class="city-list clearfix">
			城市：
	           <a href="javascript:;">北京</a>
	           <a href="javascript:;">深圳</a>
	           <a href="javascript:;">广州</a>
	           <a href="javascript:;">无锡</a>
	           <a href="javascript:;">上海</a>
	           <a href="javascript:;">苏州</a>
	           <a href="javascript:;">温州</a>
	           <a href="javascript:;">杭州</a>
	           <a href="javascript:;">宁波</a>
	           <a href="javascript:;">福州</a>
	           <a href="javascript:;">厦门</a>
	           <a href="javascript:;">济南</a>
	           <a href="javascript:;">青岛</a>
	           <a href="javascript:;">大连</a>
	           <a href="javascript:;">沈阳</a>
	           <a href="javascript:;">天津</a>
	           <a href="javascript:;">郑州</a>
	           <a href="javascript:;">合肥</a>
	           <a href="javascript:;">武汉</a>
	           <a href="javascript:;">长沙</a>
	           <a href="javascript:;">重庆</a>
	           <a href="javascript:;">成都</a>
	           <a href="javascript:;">西安</a>
	           <a href="javascript:;">昆明</a>
	           <a href="javascript:;">南宁</a>
		</div>
	</div>
</div>
<!-- 城市列表end -->
<!-- 尾部 start -->
<footer class="footer">
    <div class="frameW clearfix">
        <div class="about">
            <div class="quick">
            <a href="javascript:;">关于我们</a>|
            <a href="javascript:;" rel="nofollow">媒体关注</a>|
            <a href="javascript:;">联系我们</a>|
            <a href="javascript:;">加入我们</a>|
            <a href="javascript:;">合作伙伴</a>|
            <a href="javascript:;">意见反馈</a>|
            <a href="javascript:;">安全征婚</a>|
            <a href="javascript:;">网站地图</a>
            </div>
            <div class="brand grayL"><span>品牌：11年专业婚恋服务</span>&nbsp;&nbsp;
            <span>专业：庞大的资深红娘队伍</span>&nbsp;&nbsp;
            <span>真实：诚信会员验证体系</span>
            </div>
            <div class="contact grayL">
            <span>客服热线：4001-520-520（周一至周日：9:00-21:00）</span>
            <span>客服信箱：kefu@zhenai.com</span>
            </div>
            <div class="contact grayL">
            <span><a style="color:#9f9f9f;" href="">违法和不良信息举报</a>
            </span>&nbsp;&nbsp;
            <span>违法和不良信息举报专线：4008829288</span>&nbsp;&nbsp;
            <span>举报信箱：<a style="color: #9f9f9f;" href="" class="underlines">jubao@zhenai.com</a></span>
            </div>
        </div>
        <div class="copyright grayL">
        	<p>Copyright &copy; 2005-2016 版权所有：深圳市珍爱网信息技术有限公司<br>增值电信业务经营许可证粤B2-20040382号 粤ICP备09157619</p>
        	<div class="out-link">
            	<a title="深圳网警备案" href="javascript:;" class="link2"></a>
            	<a title="国际联网备案" href="javascript:;" class="link1"></a>
            	<a title="深圳举报中心" href="javascript:;" class="link6"></a>
                <a title="违法和不良信息举报中心" href="javascript:;" class="link3"></a>  
                <a title="诚信示范网站" href="javascript:;" class="link4"></a>
                <a title="AAA级信用企业" href="javascript:;" class="link7"></a>
            </div>
        </div>
    </div>
</footer>
<!-- 尾javascript:;部 end -->
<script src="/wedding/Public/home/js/jquery-1.8.3.min_e128811.js"></script>
	<script>
	$LAB.script("http://i3.zastatic.com/zhenai3/zhenai2015/js/lib/slide.min_aeda8e8.js")
		.wait(function(){
			$('.g-slide').ckSlide({
				autoPlay: true
			});
		})

		$('.focus').click(function(){
			var love=$(this);
			var id=love.attr('rel');
			console.log(id);
			$.ajax({
				type:'post',
				url:'<?php echo U("Index/focus");?>',
				data:"id="+id,
				success:function(data){
					if(data==2){
						alert('您已成功关注');
					}else{
						alert("您已经关注过了，不能重复关注");
					}
				}
			});
			return false;
		})
	</script>
</body>
</html>