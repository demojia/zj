<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>

<title><?php echo ($title); ?></title>

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
				<h2 class="left">编辑征婚资料</h2>
			</div>
			<form action="<?php echo U('Register/doregister');?>" method="post" onsubmit="return checkinputAll();">
	
			<div class="col-form">
				<label>我是一位：</label>
				<input type="radio" value='0' name='sex' checked>女&nbsp;&nbsp;&nbsp;
				<input type="radio" value='1' name='sex'>男
			</div><br>
			<div class="col-form">
				<label>我的年龄:</label>
				<input type="text" id='age' name='age'  style="height:30px;width:160px">

			</div>
			<br>

			<div class="col-form">
				<label>我的星座:</label>
				<input type="text" id='xingzuo' name='xingzuo'  style="height:30px;width:160px">

			</div>
			<br>
			
			<div class="col-form">
				
				<label>我的生日：</label>
				<input type="text" id='birthday' name='birth' placeholder="如：1996-01-22" style="height:30px;width:160px">
			</div><br>
		
			<div class="col-form">
				<label>所在省：</label>
			<input value="" type="text" id="province" name="w_province" style="height:30px;width:160px"/>

			</div>	<br>	

			<div class="col-form">
				<label>所在市：</label>
			<input value="" type="text" id="city" name="w_city" style="height:30px;width:160px"/>
				
			</div></br>		
				
					
			<div class="col-form">
				<label>婚姻状况：</label>
				<input type="radio" name='m_status' value='0' checked>未婚&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="radio" name='m_status' value='1'>已婚
				<input type="radio" name='m_status' value='2'>丧偶
			</div><br>
			
			<div class="col-form">
				<label>我的学历：</label>
				<select name="edu" id="edu" style="height:30px;width:160px">
					<option value="0">高中及以下学历</option>
					<option value="1">中专</option>
					<option value="2">大专</option>
					<option value="3">本科</option>
					<option value="4">硕士</option>
					<option value="5">博士</option>
				</select>
				
			</div><br>

			<div class="col-form">
				<label>我的月薪：</label>
				<select name="salary" id="salaries" style="height:30px;width:160px">
					<option value="0">3000-5000</option>
					<option value="1">5001-8000</option>
					<option value="2">8001-10000</option>
					<option value="3">10001-15000</option>
					<option value="4">15001-20000</option>
					<option value="5">20000以上</option>
				</select>
			</div>				<br>

			<div class="tody-reg-stutas">
			
			</div><br>

			<div class="col-form">
				<label>我的身高：</label>
				<select name="height" id="Yheight" style="height:30px;width:160px">
					<?php $__FOR_START_5258__=150;$__FOR_END_5258__=210;for($i=$__FOR_START_5258__;$i < $__FOR_END_5258__;$i+=1){ ?><option value="<?php echo ($i); ?>"><?php echo ($i); ?>cm</option><?php } ?>
				</select>
				
		
			</div><br>
			
			<div class="col-form">
				<label>我的手机号：</label>
				<input  placeholder="请输入您的手机号" type="text" name="phone" id="phone" style="height:30px;width:160px"/>
				
			</div>
			<br>

			<!-- 我的手机号 }-->

			<div class="col-form">
				<label>我的工作：</label>
				<input type="text" name="job" id="job" style="height:30px;width:160px"/>
				
			</div>
			<br>
			<div class="col-form">
				<label>创建密码：</label>
				<input  placeholder="请输入密码" type="password" name="pass" id="pass" style="height:30px;width:160px"/>
				
			</div><br>
			<div class="col-form">
				<label>确认密码：</label>
				<input placeholder="请再输入一次密码" type="password" name="repass" id="repass" style="height:30px;width:160px"/>
				
			</div>		<br>
			<div class="col-form">
			<label>验证码：</label>
			<img src="<?php echo U('Register/yzm');?>" id="yz_img" style="cursor:pointer">
				<input type="text" name="code" style='height:30px' placeholder="请输入验证码">
			</div>
			<div class="agreement clearfix">
				<label><input checked="true" type="checkbox" name="" id="AgreementInput" />已阅读和同意珍爱网的 <a href="serverrulenew.jsp.htm" tppabs="http://register.zhenai.com/register/serverrulenew.jsp" target="_blank">服务条款</a> 和 <a href="intimacy.jsp.htm" tppabs="http://register.zhenai.com/register/intimacy.jsp" target="_blank">信息保护政策</a><br />并同意将本人提供之信息由珍爱网提供线上/线下服务使用</label>
				<div id="AgreementCheck" class="check-form">
					<i></i><span>请阅读和同意左侧的条款</span><b></b><em></em>
				</div>
			</div><br>
			<input class="reg-btn" type="submit" value="免费注册 开启寻爱之旅" />
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
<script>

var msg='';
var zaphone=false;
var zapass=false;
var zarepass=false;
var zaheight=false;
var zasalary=false;
var zamarry=false;
var zaeducation=false;
var zabirth=false;
var zapro=false;
var zacity=false;
var zaage=false;
var zajob=false;
var zaxing=false;


// 验证手机号
$("#phone").blur(function(){
	$("#phone+p").remove();
	checkTel(this);
	$(this).after(msg);
});

$("#xingzuo").blur(function(){
	$("#xingzuo+p").remove();
	checkXing(this);
	$(this).after(msg);
});

$("#job").blur(function(){
	$("#job+p").remove();
	checkJob(this);
	$(this).after(msg);
});


$('#age').blur(function(){
	$('#age+p').remove();
	checkAge(this);
	$(this).after(msg);
});

$("#pass").blur(function(){
	$("#pass+p").remove();
	checkPass(this);
	$(this).after(msg);
});

$('#repass').blur(function(){
	$('#repass+p').remove();
	checkRepass(this);
	$(this).after(msg);
});

$('#birthday').blur(function(){
	$('#birthday+p').remove();
	checkBirth(this);
	$(this).after(msg);
});

$('#province').blur(function(){
	$('#province+p').remove();
	checkPro(this);
	$(this).after(msg);
});

$('#city').blur(function(){
	$('#city+p').remove();
	checkCity(this);
	$(this).after(msg);
});

function checkAge(obj)
{
	msg='';
	if($(obj).val().length==0){
		msg='<p>年龄必填呦</p>';
	}else{
		zaage=true;
	}
}

function checkXing(obj)
{
	msg='';
	if($(obj).val().length==0){
		msg='<p>星座必填呦</p>';
	}else{
		zaXing=true;
	}
}


function checkJob(obj)
{
	msg='';
	if($(obj).val().length==0){
		msg='<p>职业必填呦</p>';
	}else{
		zajob=true;
	}
}

function checkPro(obj)
{
	msg='';
	if($(obj).val().length==0){
		msg='<p>省份必填呦</p>';
	}else{
		zapro=true;
	}
}

function checkCity(obj)
{
	if($(obj).val().length==0){
		msg='<p>市名必填呦</p>';
	}else{
		zacity=true;
	}
}

function checkBirth(obj)
{
	msg='';
	if($(obj).val().length==0){
		msg="<p>生日必填呦</p>";
	}else{
		zabirth=true;
	}
}

function checkTel(obj)
{
	msg = '';
	if($(obj).val().length==0){
		msg = "<p class='error'>手机号不能为空</p>";
	}else{
		data = {"mobile":$(obj).val()};
		$.post("<?php echo U('Register/tel');?>",data,function(d){
			if(d){
				msg = "<p class='error'>手机号已经被注册</p>";
				$("#phone").after(msg);
			}else{
				msg = "<p class='success'>手机号可用</p>";
				zaphone = true;
				$("#phone").after(msg);
			}
		});
	}
}


function checkPass(obj)
{
	msg='';
	if($(obj).val().length==0){
		msg="<p>密码不能为空</p>";
	}else if($(obj).val().length<6){
		msg="<p>密码不少于6位</p>";
	}else{
		msg='<p>密码可用</p>';
		zapass=true;
	}
}

function checkRepass(obj)
{
	msg='';
	if($(obj).val()==$('#pass').val()){
		msg='<p>两次密码通过</p>';
		zarepass=true;
	}
	else{
		msg='<p>确认密码错误</p>';

	}
}


function checkinputAll(){

	if(zapro&&zacity&&zabirth&&zaphone&&zapass&&zarepass&&zaage){return true;}else{return false;}
}

var yz_img=$('#yz_img');
var src_img=yz_img.attr('src');
yz_img.click(function(){
	$(this).attr('src',src_img+'?yzm='+Math.random());

})




</script>	


</body>
</html>