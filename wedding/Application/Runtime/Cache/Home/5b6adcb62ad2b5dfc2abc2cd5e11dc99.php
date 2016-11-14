<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<head>
<meta charset="UTF-8"/>


<title>珍爱网会员登录_珍爱网会员登录首页_珍爱网登录首页</title>
<link href="/wedding/Public/Home/css/main.css" rel="stylesheet" type="text/css" />
<script src="/wedding/Public/Home/js/jquery-1.8.3.min.js"></script>
<script src="/wedding/Public/Home/js/fixcore.js"></script>

<link href="/wedding/Public/Home/css/global.css" rel="stylesheet" media="screen">
<link href="/wedding/Public/Home/css/button.css" rel="stylesheet" media="screen">

<link rel="stylesheet" href="/wedding/Public/Home/css/public2.css" />
<script src="/wedding/Public/Home/js/lab.min.js"></script>
<script src="/wedding/Public/Home/js/sea.js"></script>
<script src="/wedding/Public/Home/js/global.js"></script>
<link href="/wedding/Public/Home/css/areaform.css" rel="stylesheet" type="text/css" >
<link href="/wedding/Public/Home/css/wappublicity.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/wedding/Public/Home/js/syscodeapi.js"></script>
<script type="text/javascript">

/* Baidu Statistics Begin*/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?2c8ad67df9e787ad29dbd54ee608f5d2";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
/* Baidu Statistics End*/

/** SEO Statistics Begin */
(function(){
	seajs.use("http://i1.zastatic.com/zhenai3/zhenai2015/js/seo/seo.js", function(seo){
		seo.init(5);
	});
})();
/** SEO Statistics End */

</script>



 


<script type="text/javascript">
UA = navigator.userAgent.toLowerCase();
url = window.location.toString();
var paramLoginZAT = "" == "1";
var loginZAT=url.indexOf('login.zhenai.com')!=-1 || paramLoginZAT;
if ((UA.indexOf('iphone') != -1 || UA.indexOf('mobile') != -1
		|| UA.indexOf('android') != -1 || UA.indexOf('ipad') != -1
		|| UA.indexOf('windows ce') != -1 || UA.indexOf('ipod') != -1)
		&& UA.indexOf('ipod') == -1 && !loginZAT) {
		location.href = "http://m.zhenai.com/v2/login/login.do";
}
</script>

<link href="/wedding/Public/Home/css/landed.css" rel="stylesheet" media="screen">
<script language="javascript">

/* Baidu Statistics Begin*/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?2c8ad67df9e787ad29dbd54ee608f5d2";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
/* Baidu Statistics End*/

var memberid= getCookieMemberid();
function showLocalCookie() {
	var loginInfoname = document.getElementById('loginInfoname').value;
	if(loginInfoname.length > 0&&loginInfoname!='手机号/会员ID/邮箱'){
		$('.closeX').show();
		return ;
	}	
	var loginCookie=getCookieIMValue('rmpwd','logininfo');
	if(loginCookie){
		document.getElementById('loginInfoname').value=loginCookie;
		$('.closeX').show();
	}
}
</script>
</head>
<body>
  <script >
$(document).ready(function(){
	$('.hot-event').nav({
		t:5500,	//轮播时间
		a:1500  //过渡时间
	});
	
});
</script>
<!--展示jquery_end-->

<div class="landedPageTop">
  <div class="centerBox">
    <div class="L_D_logo"><a href="http://www.zhenai.com" class="aaa"></a></div>
    <p class="L_D_txt">每个渴望爱的人 都值得被珍爱<br>
      红娘热线：4001-520-520</p>
    <p class="L_D_reg">单身中，还没账号？！立即<a href="<?php echo U('Register/index');?>">免费注册</a></p>
  </div>
</div>
<div class="wrapBox"> 
 <!--大图轮播-->
  <div class="C_T_Box">
    <div class="slides_container hot-event">
      <div class="switch-nav"></div>
      <div class="one_screen event-item"></div>
      <div class="tow_screen event-item"></div>
      <div class="onBox">
        <div class="mattum switch-tab"><a onclick="return false;" href="javascript:void(0);" class="current"></a><a onclick="return false;" href="javascript:void(0);"></a></div>
      </div>
      <div class="numBg"></div>
    </div>
  </div>
  
  <!--大图轮播-->
  <div class="regBox">
    <div class="regBg"></div>
    <div class="logBox">
      <div class="LoginBgTop"></div>
      <div class="LoginBgRet">
        <p class="dltxt">登录珍爱网</p>
          <form id="form1" name="form1" action="/wedding/index.php/Home/Login/logining" method="post">
        <!-- 未登录申请猎婚跳转到登录 用来控制跳转到申请猎婚进入的页面 -->
          <input type="hidden" id="loginZAT" name="loginZAT"/>
          <input type="hidden" name="formHuntWedding" value=""/>
          <input type="hidden" name="fromurl" id="fromurl" value=""/>
          <input type="hidden" name="whichTV" id="whichTV" value=""/>
          <input type="hidden" name="fid" id="fid" value=""/>
          <input type="hidden" name="mid" id="mid" value=""/>
          <input type="hidden" name="redirectUrl" id="redirectUrl" value=""/>
          <input type="hidden" name="isTpRedirect" id="isTpRedirect" value=""/>
          <input name="loginmode" id="loginmode" type="hidden" value=""/>
          <input name="whereLogin" id="whereLogin" type="hidden" value="login_page"/> 
          <input name="rememberpassword" type="hidden" value="1"/>
        <!-- 页面 -->
        <p class="entpro" >
        <span class="enterThe" id="errLoginfo" style="display:none;" >请输入账号</span>
         <span class="for_reg"><a href="javascript:void(0);" class="problem scweb" id="problem" style="display:none;">问题反馈</a></span>
        </p>
        
         <div class="I_D_box">
        <input type="text" class="phoneId greytxt" name="loginInfo" value="手机号/会员ID/邮箱" id="loginInfoname" />
        <span class="closeX" style="display:none;">X</span>
        </div>
        <div class="P_W_box">
        <input type="password" class="passId" name="password" id="passwordbt" value="">
        <span class="txt_dim" id="fakeValue"  >密码</span>
        </div>
        
        <div class="tipBox">
          <p class="lodp">
            <input type="checkbox" id="clic"  name="autoLogin"/>
            <label for="clic" title="建议不要在网吧等公用电脑上使用此功能">下次自动登录</label>
          </p>
          <a href="http://register.zhenai.com/login/findPasswordNav.jsps">忘记密码？</a></div>
        <a href="javascript:void(0)" class="loginBtn"  id="btnSub" >立即登录</a> </div>
        </form>
      <div class="LoginBgBtm">
        <div class="otherBox"> <a href="<?php echo U('Register/index');?>">免费注册</a>
        
        </div>
      </div>
    </div>
  </div>
</div>
<div class="phonetxtBox clearfix">
  <p class="phoneai">手机珍爱网，随时随地上演爱：</p>
  <div class="anzuoBox"><a href="http://i0.zastatic.com/imwap/app/za_weblogin.apk" class="tipTxt" target="_blank">Android客户端下载</a>
  <a href="http://i0.zastatic.com/imwap/app/za_weblogin.apk" class="downlod" target="_blank">下载</a>
   <div class="ew_code android_code"><a class="a_code" href="http://i0.zastatic.com/imwap/app/za_weblogin.apk" target="_blank"></a></div>
  </div>
  <div class="iphoneBox"><a href="https://itunes.apple.com/cn/app/zhen-ai-wang/id575846819?mt=1" class="tipTxt" target="_blank">iphone客户端下载</a>
  <a href="https://itunes.apple.com/cn/app/zhen-ai-wang/id575846819?mt=1" class="downlod" target="_blank">下载</a>
   <div class="ew_code apple_code"> <a class="a_code" href="https://itunes.apple.com/cn/app/zhen-ai-wang/id575846819?mt=1" target="_blank"></a></div>
  </div>
  <div class="mobileBox"><a href="http://m.zhenai.com" class="tipTxt" target="_blank">手机访问 m.zhenai.com</a>
  <a href="http://m.zhenai.com" class="downlod" target="_blank">下载</a>
  <div class="ew_code phone_code"><a class="a_code" href="http://m.zhenai.com" target="_blank"></a></div>
  </div>
</div>
<div class="footBox">
  <div class="footctn">
    <div class="infoLeft">
      <p class="aboutTxt"><a target="_blank" href="http://about.zhenai.com/">关于我们</a>|<a target="_blank" href="http://tv.zhenai.com/MeiTiGuanZhu/index.x">媒体关注</a>|<a target="_blank" href="http://contact.zhenai.com/">联系我们</a>|<a href="http://www.zhenai.com/job/">加入我们</a>|<a target="_blank" href="http://lj.zhenai.com/96333partner/links.html">合作伙伴</a>|<a target="_blank" href="http://profile.zhenai.com/personal/getguestbookbegin.jsps">意见反馈</a>|<a href="http://www.zhenai.com/anquan/" target="_blank">安全征婚</a>|<a href="http://www.zhenai.com/sitemap.html" target="_blank">网站地图</a> </p>
      <p>品牌：11年专业婚恋服务&nbsp; 专业：庞大的资深红娘队伍&nbsp; 真实：诚信会员验证体系&nbsp; </p>
      <p>客服热线：4001-520-520 （周一至周日：9:00-21:00）   客服信箱：kefu@zhenai.com</p>
      <p><a style="color: #95999e;" href="http://profile.zhenai.com/v2/sys/reportEntry.do" target="_blank">违法和不良信息举报</a>&nbsp;&nbsp;违法和不良信息举报专线：4008829288&nbsp;&nbsp;举报信箱：<a style="color: #95999e;" href="mailto:jubao@zhenai.com">jubao@zhenai.com</a></p>
    </div>
    <div class="infoRight">
      <p>Copyright &copy; 2005-2016 版权所有：深圳市珍爱网信息技术有限公司<br>
        增值电信业务经营许可证粤B2-20040382号 粤ICP备09157619</p>
      <p>
      	<a target="_blank" href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403301900797"><img align="absmiddle" alt="国际联网备案" src="picture/sznet110wangan.gif"></a> 
      	<a target="_blank" href="http://www.sznet110.gov.cn/netalarm/index.jsp"><img align="absmiddle" alt="深圳网警备案" src="picture/sznet110gangting.gif"></a> 
      	<a target="_blank" href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1761973720" style="display: none;"><img align="absmiddle" alt="中国互联网协会" src="picture/3atrust.gif"></a>
      	<a title="诚信示范网站" href="https://search.szfw.org/cert/l/CX20150630010588010670" class="link4" target="_blank" rel="nofollow"><img align="absmiddle" alt="诚信示范网站" src="picture/cert.png"></a>
       	<a target="_blank" title="深圳网监备案" href="http://szcert.ebs.org.cn/6398bd09-b195-4fd9-a010-e1fea403a766" class="link5" rel="nofollow"></a>
       	<a title="AAA级信用企业" href="http://www.itrust.org.cn/Home/Index/itrust_certifi?wm=1761973720" class="link7" target="_blank" rel="nofollow">
            <img src="picture/rate.png" alt="AAA级信用企业"/>
         </a>
      </p>
    </div>
  </div>
</div>
<div class="feedbackPop" id="feedbackPop" style="display:none;">
      <div class="fbTxt">
      <textarea class="userTxt" id="userTxt"  onkeyup="checkLength(this);" onblur="if(this.value==''){this.value='详细说说你遇到的问题或建议，这能帮助我们快速定位原因并解决问题，谢谢！';}" onfocus="if(this.value=='详细说说你遇到的问题或建议，这能帮助我们快速定位原因并解决问题，谢谢！'){this.value='';}">详细说说你遇到的问题或建议，这能帮助我们快速定位原因并解决问题，谢谢！</textarea>
      <p>（你还可以输入<span id="leavings">1000</span>字）</p></div>
      <div class="putlr">
      <input type="text" id="zaProof" class="phoneNo" value="请输入你的珍爱ID/手机号" onblur="if(this.value==''){this.value='请输入你的珍爱ID/手机号';}" onfocus="if(this.value=='请输入你的珍爱ID/手机号'){this.value='';}">
      <input type="text" id="QQ"  class="qqNo" value="请输入你的QQ号码" onblur="if(this.value==''){this.value='请输入你的QQ号码';}" onfocus="if(this.value=='请输入你的QQ号码'){this.value='';}"></div>
      <p class="graytt">请留下您的联系方式以便我们工作人员能尽快联系到您解决问题</p>
     <a href="javascript:void(0);" class="tjBtn" title="提交" id="tjBtn"></a>
</div>
<script src="/wedding/Public/Home/js/jquery.nav.js"></script>
<script src="/wedding/Public/Home/js/jquery.artdialog.js"></script>
<script src="/wedding/Public/Home/js/za_dialog.js"></script>
<script language="javascript">
function checkValue() {
    $('#errLoginfo').hide();
	var str = $.trim(document.getElementById("loginInfoname").value);
	var passwordbt = document.getElementById("passwordbt").value;
	var $imgCode = $("#imgCode");
	if (str == "" || str == null || str=='手机号/会员ID/邮箱') {
		displayerr('loginInfoname',"请输入手机号/会员ID/邮箱！");
		return false;
	} else {
		if(passwordbt == null || passwordbt == '') {
			displayerr('passwordbt',"请输入密码！");
			return false;
		} 
	if($imgCode &&  $imgCode.length > 0 && $imgCode.css("display") != "none"){
			 var code = $("#imgCode").val();
			 if(!code){
				 displayerr("imgCode","请输入验证码！");
				 return false;
			 }
			 if($.trim(code).length < 4){
				 displayerr("imgCode","验证码错误！");
				 return false; 
			 }
		}
		if (isNumber(str) || isNoEmail(str)) {
			if (isNumber(str)) {
				if(str.length > 19) {
					displayerr("errLoginfo","您输入的ID号不存在！");
					return false;
				}
				document.getElementById("loginmode").value = "2";
				document.getElementById("btnSub").innerHTML="登录中...";
			    $('#errLoginfo').hide();
				return true;
			}
			if (isNoEmail(str)) {
				document.getElementById("loginmode").value = "3";
				document.getElementById("btnSub").value="登录中...";	
				return true;
			}
		} else {
			displayerr("loginInfoname","您输入账号格式不正确！");
			return false;
		}
		
	}
	
}

function displayerr(inputfield,err){
   $('#errLoginfo').html(err).show();
   $('#problem').show();
   setTimeout(function(){
	   if(inputfield){
		   var show = document.getElementById(inputfield);
		   var val =show.value;
	       $(show).addClass('green');
	       show.focus();
	       if(val!='手机号/会员ID/邮箱'){
	           show.value='';
	           show.value=val;
	       }
	   }
   },500)
   
}
$(function(){
	//是否珍爱通登录(login.zhenai.com)
	// $('#loginZAT').val(loginZAT?"1":"0");
	
	if(!document.getElementById('passwordbt').value){
		$('#fakeValue').hide();
	}
	$('#errLoginfo').hide();
	$('#btnSub').click(function(){
		if(!checkValue())
			return false;
		document.getElementById('form1').submit();
		return false;
	});
    $('#loginInfoname,.txt_dim,#imgCode,#zaProof,#QQ,#userTxt,.passId').hover(function(){
        $(this).addClass('green');
        },function(){
        $('.green').toggleClass('green');
    });
    $('#loginInfoname').blur(function(){
    	if (this.value.replace(/(^\s*)|(\s*$)/g,'') ==''||this.value=='手机号/会员ID/邮箱'){
    		this.value = '手机号/会员ID/邮箱';
    		$('.closeX').hide();
    		$(this).removeClass("blacktxt");
    		$(this).addClass("greytxt");
    		
    	}else{
    		$('.closeX').show();
    	}
    	return false;
    }).focus(function(){
       if (this.value =='手机号/会员ID/邮箱'){this.value =''}
       $(this).removeClass("greytxt");
       $(this).addClass("blacktxt");
	  
    });
    $('.closeX').click(function(){
    	$('#loginInfoname').removeClass("blacktxt")
    	$('#loginInfoname').addClass("greytxt")
		document.getElementById("loginInfoname").value = '手机号/会员ID/邮箱';
		$('.closeX').hide();
	});
  document.body.onkeydown=function(e)
    {
	  e = (window.event) ? event : e;
	  var k = e.keyCode;
	  if (k == 13) {
		  $('#btnSub').trigger('click');
	  }
    }
  $('#refreshCode').click(function(){
		$('#codeImg').attr('src', '/login/verifyImg.jsps?loginInfo=&t=' + Math.random());
		return false
	});

  $('#fakeValue').click(function(){
	  $("#passwordbt").focus();
      $(this).hide();
  });

  $('#passwordbt').blur(function(){
	  if($(this).val()=='')
	  $(".txt_dim").show(); 
 }).focus(function(){
	 $('.txt_dim').hide();
   })
 
    showLocalCookie();
	//登录账号提示用=====start=====
	var newLoginInfo = '';
	var flag = false;
	if(newLoginInfo!=null && newLoginInfo!='' && newLoginInfo!=undefined){
		//显示上一次输入的账号
		document.getElementById("loginInfoname").value = newLoginInfo;
		flag = true;
	}else{
		//显示上一次登录成功的账号
		var logininfo = GetCookieIM ("logininfo");
		if(logininfo!=null && logininfo!=undefined && logininfo!=''){
			var logininfos=logininfo.split("^~");
			if(logininfos!=null && logininfos!=undefined){
				var cookieValue = logininfos[1];
				var temp= cookieValue.split("=");
				document.getElementById("loginInfoname").value = temp[1];
				flag = true;
			}
		}
	}
	if(flag){
		$('.closeX').show();
	}
	//登录账号提示用=====end=====

	var errmsg = "";
	if(errmsg.length > 0){
		var showNode = (errmsg.indexOf("密码") >= 0)? "passwordbt":"loginInfoname";
		displayerr(showNode,errmsg);
		if(errmsg.indexOf("不存在")>=0){
			$('.for_reg').html('<a href="http://register.zhenai.com/register/newregister.jsps?fromurl=" class="reggo">立即注册</a>或<a style="" id="problem" class="problem scweb" href="javascript:void(0);">问题反馈</a>')
		}
	}
	var errCodemsg ='';
	if(errCodemsg){
		displayerr("imgCode",errCodemsg);
	}
	
	
})
function isNumber(str)
   {
    var strP=/^\d+(\.\d+)?$/;
     if(""==str){ 
     return false; 
     } 
   if(!strP.test(str))
   { return false;}else{
  return true;
  }

   }
function isNoEmail(str) {    
     var  strartu=str.lastIndexOf("@"); 
     var  sdown=str.indexOf("@");
     var isNostr=str.substring(str.lastIndexOf("@") + 1,str.length);
     var stu=isNostr.lastIndexOf(".")+1; 
     var sdn=isNostr.indexOf("."); 
     if(strartu=='-1'||stu=='-1'){
     return false;
     }
     if(strartu==sdown&&stu!=sdn)
     {
     return   true;   
     }else{   
     return   false; 
     }	
}
</script>
<script>
$(function(){
	$(".phonetxtBox").find("div").hover(function(){
		$(this).find(".ew_code").show();
		},function(){	
		$(this).find(".ew_code").hide();	
		})
})



$(function() {
	$('#problem').click(function() {
		$.dialog({
			title: '亲，你在登录中遇到了什么问题？觉得哪里不好用？请告诉我们，帮助我们改进。',
			lock: true,
			opacity: 0.3,
			content: $('#feedbackPop')[0],
			id: 'feedbackPop',
			padding: '0px'
		});
	});
	$('#tjBtn').click(function(){
		var content = document.getElementById('userTxt').value;
		if (!content||content=='详细说说你遇到的问题或建议，这能帮助我们快速定位原因并解决问题，谢谢！') {
			ZA.msgTip('请说说你遇到的问题或建议');
			return false;
		}
		if(content.length>1000){
			ZA.msgTip('您的输入已经超过1000字');
			return false;
		}
		var QQ = document.getElementById('QQ').value;
		var zaProof = document.getElementById('zaProof').value;
		if ((!QQ||QQ=='请输入你的QQ号码') && (!zaProof||zaProof=='请输入你的珍爱ID/手机号')) {
			ZA.msgTip('请填入至少一个联系方式');
			return false;
		}
		if (!isNumber(QQ) && !isNumber(zaProof)) {
			ZA.msgTip('请填入联系方式正确的格式');
			return false;
		}
		if (!isNumber(QQ))
			QQ = 0;
		if (!isNumber(zaProof))
			zaProof = 0;
		$.ajax({
			url: "/login/sugguest.jsps",
			dataType: "json",
			data: {
				"QQ": QQ,
				"zaProof": zaProof,
				"content": escape(content)
			},
			type: "POST",
			success: function(data) {
				if (data.success == 1) {
					ZA.friendTip('提交成功！非常感谢你对珍爱网的支持。我们会尽快处理你的问题或建议', null, 2);
				} else if (data.success == 2){
					ZA.msgTip('联系方式不存在');
				}else{
					ZA.msgTip('网络错误');
				}
			}
		});
		artDialog.get('feedbackPop').close();
	});
	


});
function checkLength(which) {
	var maxChars = 1000; //
	if(which.value.length > maxChars){
		alert("您出入的字数超多限制!");
		// 超过限制的字数了就将 文本框中的内容按规定的字数 截取
		which.value = which.value.substring(0,maxChars);
		return false;
	}else{
		var curr = maxChars - which.value.length; //250 减去 当前输入的
		document.getElementById("leavings").innerHTML = curr.toString();
		return true;
	}
}

</script>
<script>
if($("#loginInfoname").val() == ""){
	$("#loginInfoname").val('');
}
</script>
<!-- 用户搜索习惯代码  跟踪15天-->
<script type="text/javascript">
	var bd_cpro_rtid="PjDLrHR";
</script>
<script type="text/javascript" src="/wedding/Public/Home/js/rt.js"></script>
<noscript>
<div style="display:none;">
<img height="0" width="0" style="border-style:none;" src="/wedding/Public/Home/picture/rt.jpg" />
</div>
</noscript> 
<!-- 901088渠道过来的用户才显示以下代码 -->
</body>
</html>