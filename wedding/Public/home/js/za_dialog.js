// 珍爱网2012提示层
// by poashuren77@gmail.com
// on 2012-12-07

var rejectInit = function() {
	$('.aui_state_focus').addClass('aui_state_warn');
}
var confirmInit = function() {
	$('.aui_state_focus').addClass('aui_state_warn');
}
var successInit = function() {
	$('.aui_state_focus').addClass('aui_state_friend');
}
var dialogInit = function() {
	$('.aui_state_focus').addClass('aui_state_original');
}

//初始不规则边框的弹层
var noRuleInit = function() {
	$('.aui_state_focus').addClass('aui_state_noBorder');
}

//灰色边框带关闭按钮，title要设为false
var grayFrame = function() {
	$('.aui_state_focus').addClass('aui_state_grayBorder');
}

//隐藏默认title
var hideTitle = function() {
	$('.aui_state_focus').find('.aui_title').css('display','none');
	//this.DOM.title.css("display","none");
	//$('.aui_state_focus').addClass('aui_state_hideTitle');
} 

//隐藏右上关闭
var hideClose = function() {
	/*	*/
	$('.aui_state_focus').find('.aui_titleBar').css({display:'none'});
	$('.aui_state_focus').find('.aui_title').css('display','none');

	$('.aui_state_focus').find('.aui_close').css({display:'none'});
	$('.aui_state_focus').find('.aui_header').css({background:'#000',height:0,zoom:1});
	
} 




if(window.ZA==null){
	window['ZA']={};
}

//content:提示内容；followid:指定id旁边弹出提示框，空默认为居中；t:提示框消失时间，空默认为1秒；
ZA.warnTip = function(content,followid,t) {
	return art.dialog({
				id:'Warn',
				title:false,
				content: content,
				fixed:followid?false:true,
				follow:followid?document.getElementById(followid):'',
				time:t||1,
				init: function () {
					rejectInit();
				}
			});
}

ZA.friendTip = function(content,followid,t){
	return art.dialog({
				id:'Friend',
				icon: 'succeed',
				title:false,
				content: content,
				padding:'20px 25px 20px 5px',
				time:t||1,
				follow:followid?document.getElementById(followid):'',
				fixed:followid?false:true,
				init:function(){
					successInit();
				}
			});
}

ZA.confirm = function(content,yes,no,okVal,cancelVal){
	return art.dialog({
				id:'Confirm',
				lock:true,
				opacity:0,
				title:false,
				content: content,
				padding:'20px 25px 5px',
				fixed:true,
				ok: function (here) {
					return yes.call(this,here);
				},
				okVal:okVal||'\u786e\u5b9a',
				cancelVal: cancelVal||'\u53d6\u6d88',
				cancel: function(here){
					return no && no.call(this, here);
				},
				init:function(){
					confirmInit();
				}
			});	
}

ZA.msgTip = function(content, fn, okVal){
	return	art.dialog({
				title:false,
				lock:true,
				opacity:0,
				content: content,
				padding:'20px 25px 5px',
				fixed:true,
				okVal:okVal||'\u786e\u5b9a',
				ok: typeof fn == 'function' ? fn : function(){},
				init:function(){
					confirmInit();
				}
	});
}