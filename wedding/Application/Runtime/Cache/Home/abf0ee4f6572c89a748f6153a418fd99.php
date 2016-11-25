<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>

<title>详细资料</title>

<link rel="stylesheet" href="/wedding/Public/home/register/entry.css-v=20150831.css" />
<link href="/wedding/Public/home/register/login.css-v=20131224.css"  type="text/css" charset="UTF-8"/>

<link href="/wedding/Public/home/register/button.css-v=20130918.css" media="screen"/>
<link href="/wedding/Public/home/register/newsite_layer.css" rel="stylesheet"  media="screen" charset="UTF-8"/>
<link href="/wedding/Public/home/register/lead_box.css" rel="stylesheet" charset="GBK"/>
<script src="/wedding/Public/home/register/jquery-1.8.3.min.js"></script>
<script src="/wedding/Public/home/register/sea.js"></script>
<script src="/wedding/Public/home/register/fixCore.js"></script>
<script src="/wedding/Public/home/register/global.js-v=20131122.js" charset="GBK"></script>
<script type="text/javascript" src="/wedding/Public/home/register/syscodeapi.js"></script>
<script src="/wedding/Public/home/register/entry.js-v=20150831.js" charset="GBK"></script>
<script type="text/javascript" src="/wedding/Public/home/register/za_dialog.js"></script>

<script type="text/javascript" src="/wedding/Public/home/register/commonOption.js-v=20131202.js"></script>
</head>
<body>

<script src="/wedding/Public/home/register/screenfix.js"></script>
<div class="header">
	<div class="frameW">
	<a class="logo" href="javascript:if(confirm(%27http://www.zhenai.com/  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.zhenai.com/%27" tppabs="http://www.zhenai.com/" title="珍爱网"></a>
	<p class="ad-word">相亲无难事，珍爱有红娘</p>
	<div class="tools">
		<a href="javascript:;" class="login" id="loginShowBar">登录</a>
		</div>
	</div>
</div>
<div class="wrapper frameW clearfix">
	<div class="col-left">
		<!-- <div class="border-top"></div> -->
		<div class="in">
			<div class="title-bar">
				<h2 class="left">编辑详细资料</h2>
			</div>
			<form action="<?php echo U('Personal/editinfo');?>" method="post" >
			<?php if(is_array($data)): foreach($data as $key=>$v): ?><input type="hidden" name="id" value="<?php echo ($v["id"]); ?>">
			<div class="col-form">
			<label>手机号：</label>
			<input id="Tel" type="text" name="phone" value="<?php echo ($v["phone"]); ?>" readonly style="height:30px;width:160px">
			</div>
			
			<div class="col-form">
			<label>体重：</label>
			<input type="text" name="weight" style="height:30px;width:160px" value="<?php echo ($v["weight"]); ?>">
			</div>

			<div class="col-form">
			<label>体型：</label>
			<select name="figure" id="figure" style="height:30px;width:160px" value="<?php echo ($v["figure"]); ?>">
				<option value="0" <?php if($v["figure"] == '0'): ?>selected<?php endif; ?>>偏瘦</option>
				<option value="1" <?php if($v["figure"] == '1'): ?>selected<?php endif; ?>>苗条</option>
				<option value="2" <?php if($v["figure"] == '2'): ?>selected<?php endif; ?>>偏胖</option>
				<option value="3" <?php if($v["figure"] == '3'): ?>selected<?php endif; ?>>肥胖</option>
			</select>
			</div>

		
			<div class="col-form">
			<label>公司：</label>
			<input type="text" name="company" style="height:30px;width:160px" value="<?php echo ($v["company"]); ?>">
			</div>

			<div class="col-form">
			<label>血型：</label>
			<input type="text" name="blood" style="height:30px;width:160px" value="<?php echo ($v["blood"]); ?>">
			</div>

			<div class="col-form">
			<label>民族：</label>
			<input type="text" name="minzu" style="height:30px;width:160px" value="<?php echo ($v["minzu"]); ?>">
			</div>

			<div class="col-form">
			<label>信仰</label>
			<input type="text" name="belief" style="height:30px;width:160px" value="<?php echo ($v["belief"]); ?>">
			</div>

			<div class="col-form">
				<label>身高：</label>
				<select name="height" style="height:30px;width:160px" value="<?php echo ($v["height"]); ?>">
					<?php $__FOR_START_7546__=150;$__FOR_END_7546__=210;for($i=$__FOR_START_7546__;$i < $__FOR_END_7546__;$i+=1){ ?><option value="<?php echo ($i); ?>"><?php echo ($i); ?>cm</option><?php } ?>
				</select>
				
		
			</div>

			<div class="col-form">
			<label>工作：</label>
			<input type="text" name="job" style="height:30px;width:160px" value="<?php echo ($v["job"]); ?>">
			</div><?php endforeach; endif; ?>
			<input class="reg-btn" type="submit" value="编辑资料" />
			</form>			
		</div>
	</div>
	<div class="col-right">
		<div class="sibe-bar">
			<div class="sibe-bar-about">
				<img src="/wedding/Public/home/register/bg2.png" alt="" />
				<dl>
					<dt><strong>9000</strong>万</dt>
					<dd>截止2015年12月，珍爱网会员注册量已经突破9000万</dd>
				</dl>
				<dl>
					<dt><strong>11</strong>年</dt>
					<dd>珍爱网成立于2005年，专注婚恋11年，经验丰富</dd>
				</dl>
				<dl>
					<dt><strong>3000</strong>位</dt>
					<dd>拥有庞大的专业红娘团队，3000位受过婚恋心理培训的红娘</dd>
				</dl>
				<dl>
					<dt><strong>NO.1</strong></dt>
					<dd>蝉联工信部中国婚恋行业第一品牌，获2013央视年度品牌</dd>
				</dl>
				<dl>
					<dt><strong>36</strong>家</dt>
					<dd>在全国一/二线城市拥有36家专业的线下服务门店</dd>
				</dl>
			</div>
			<div class="more-logins">
				
			</div>
		</div>
	</div>
</div>



</body>

</html>