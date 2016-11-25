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
				<h2 class="left">编辑择偶条件</h2>
			</div>
			<form action="<?php echo U('Personal/ec');?>" method="post">
			<?php if(is_array($data)): foreach($data as $key=>$v): ?><input type="hidden" name="id" value="<?php echo ($v["id"]); ?>">
			<div class="col-form">
			<label>手机号：</label>
			<input type="text" readonly name="phone" value="<?php echo ($_SESSION['user']['phone']); ?>" style="height:30px;width:160px">
			</div>
			
			<div class="col-form">
			<label>性别：</label>
			<select name="sex" style="height:30px;width:160px">
			<option value="0" <?php if($v["sex"] == '0'): ?>selected<?php endif; ?> >男</option>
			<option value="1" <?php if($v["sex"] == '1'): ?>selected<?php endif; ?>>女</option>
			
			</select>
			</div>


			<div class="col-form">
			<label>体型：</label>
			<select name="figure" style="height:30px;width:160px">
			<option value="0" <?php if($v["figure"] == '0'): ?>selected<?php endif; ?>>不限</option>
			<option value="1" <?php if($v["figure"] == '1'): ?>selected<?php endif; ?>>苗条</option>
			<option value="2" <?php if($v["figure"] == '2'): ?>selected<?php endif; ?>>正常</option>
		
			</select>
			</div>

			<div class="col-form">
				<label>我的学历：</label>
				<select name="edu" id="edu" style="height:30px;width:160px">
					<option value="0" <?php if($v["edu"] == '0'): ?>selected<?php endif; ?>>高中及以下学历</option>
					<option value="1" <?php if($v["edu"] == '1'): ?>selected<?php endif; ?>>中专</option>
					<option value="2" <?php if($v["edu"] == '2'): ?>selected<?php endif; ?>>大专</option>
					<option value="3" <?php if($v["edu"] == '3'): ?>selected<?php endif; ?>>本科</option>
					<option value="4" <?php if($v["edu"] == '4'): ?>selected<?php endif; ?>>硕士</option>
					<option value="5" <?php if($v["edu"] == '5'): ?>selected<?php endif; ?>>博士</option>
				</select>
				
			</div>

						<div class="col-form">
				<label>我的月薪：</label>
				<select name="salary" id="salaries" style="height:30px;width:160px">
					<option value="0" <?php if($v["salary"] == '0'): ?>selected<?php endif; ?>>3000-5000</option>
					<option value="1" <?php if($v["salary"] == '1'): ?>selected<?php endif; ?>>5001-8000</option>
					<option value="2" <?php if($v["salary"] == '2'): ?>selected<?php endif; ?>>8001-10000</option>
					<option value="3" <?php if($v["salary"] == '3'): ?>selected<?php endif; ?>>10001-15000</option>
					<option value="4" <?php if($v["salary"] == '4'): ?>selected<?php endif; ?>>15001-20000</option>
					<option value="5" <?php if($v["salary"] == '5'): ?>selected<?php endif; ?>>20000以上</option>
				</select>
			</div>	

			<div class="col-form">
				<label>婚姻状况：</label>
				<input type="radio" name='m_status' value='0' <?php if($v["sex"] == '0'): endif; ?> checked>未婚&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="radio" name='m_status' value='1' <?php if($v["sex"] == '1'): endif; ?> checked>离异
				<input type="radio" name='m_status' value='2' <?php if($v["sex"] == '2'): endif; ?> checked>丧偶
			</div>


			<div class="col-form">
			<label>年龄：</label>
			<select name="age" style="height:30px;width:160px">
			<option value="0" <?php if($v["age"] == '0'): ?>selected<?php endif; ?>>18-24</option>
			<option value="1" <?php if($v["age"] == '1'): ?>selected<?php endif; ?>>25-30</option>
			<option value="2" <?php if($v["age"] == '2'): ?>selected<?php endif; ?>>31-40</option>
			</select>
			</div>

			<div class="col-form">
			<label>职业：</label>
			<select name="job" style="height:30px;width:160px">
			<option value="0" <?php if($v["job"] == '0'): ?>selected<?php endif; ?>>不限</option>
			<option value="1" <?php if($v["job"] == '1'): ?>selected<?php endif; ?>>服务类</option>
			<option value="2" <?php if($v["job"] == '2'): ?>selected<?php endif; ?>>IT类</option>
			</select>
			</div>


			<div class="col-form">
			<label>是否喝酒：</label>
			<select name="drink" style="height:30px;width:160px">
			<option value="0" <?php if($v["drink"] == '0'): ?>selected<?php endif; ?>>偶尔</option>
			<option value="1" <?php if($v["drink"] == '1'): ?>selected<?php endif; ?>>不喝</option>
			<option value="2" <?php if($v["drink"] == '2'): ?>selected<?php endif; ?>>酗酒</option>
			</select>
			</div>


			<div class="col-form">
			<label>是否抽烟：</label>
			<select name="smoke" style="height:30px;width:160px">
			<option value="0" <?php if($v["smoke"] == '0'): ?>selected<?php endif; ?>>偶尔</option>
			<option value="1" <?php if($v["smoke"] == '1'): ?>selected<?php endif; ?>>不抽</option>
		
			</select>
			</div>

			<div class="col-form">
				<label>身高：</label>
				<select name="height" style="height:30px;width:160px">
					<?php $__FOR_START_25474__=150;$__FOR_END_25474__=210;for($i=$__FOR_START_25474__;$i < $__FOR_END_25474__;$i+=1){ ?><option value="<?php echo ($i); ?>"><?php echo ($i); ?>cm</option><?php } ?>
				</select>
				
		
			</div>


		
			<div class="col-form">
			<label>是否要孩子：</label>
			<select name="baby" style="height:30px;width:160px">
			<option value="0" <?php if($v["baby"] == '0'): ?>selected<?php endif; ?>>想</option>
			<option value="1" <?php if($v["baby"] == '1'): ?>selected<?php endif; ?>>不想</option>
			</select>
			</div>

			<div class="col-form">
			<label>有没有孩子：</label>
			<select name="child" style="height:30px;width:160px">
			<option value="0" <?php if($v["child"] == '0'): ?>selected<?php endif; ?>>有</option>
			<option value="1" <?php if($v["child"] == '1'): ?>selected<?php endif; ?>>没有</option>
			</select>
			</div>


			<div class="col-form">
			<label>工作省：</label>
			<input type="text" name="w_province" style="height:30px;width:160px" value="<?php echo ($v["w_province"]); ?>">
			</div>

			<div class="col-form">
			<label>工作地区：</label>
			<input type="text" value="<?php echo ($v["w_city"]); ?>" name="w_city" style="height:30px;width:160px">
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