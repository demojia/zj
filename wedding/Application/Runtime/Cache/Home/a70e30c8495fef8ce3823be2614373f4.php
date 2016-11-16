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
					<li><a href="">我的珍爱</a></li>
					<li><a href="" rel="nofollow">搜索</a></li>
					<li><a href="" target="_blank" >
					直营门店
					</a></li>
					<li><a href="" rel="nofollow">珍心会员</a></li>
					<li><a href="" target="_blank" >成功故事</a></li>
					<li><a href="">他她说</a></li>		
				</ul>
			</menu>
			<div class="header-info message-info" id="jcMessageInfo">
				
			</div>
			
			
		</div>
	</section>
</header>
<body>
<div style="width:150px;height:150px;">
    <img style="width:200px;height:150px;" src="/wedding/Public/uploads/<?php echo ($_SESSION['user']['icon']); ?>">

</div>


<form action="<?php echo U('Picture/uploadfile');?>" method="post" enctype="multipart/form-data" >
<label>上传新头像：</label>
<input type="file" name="photo">
<input type="submit" value="上传头像">
</form>
   
</body>
</html>