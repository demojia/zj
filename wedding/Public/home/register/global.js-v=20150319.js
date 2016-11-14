// 珍爱网2012新版全局js
// by numbuz@gmail.com
// on 2012-11-03

var damnie=$.browser.msie,brover=parseInt($.browser.version,10),damnie6=damnie&&brover<7,damnie7=damnie&&brover<8&&brover>6,damnie8=damnie&&brover<9&&brover>7;
try{
	document.execCommand("BackgroundImageCache",false,true);
}catch(e){}

function getCookieRealValue(cookiesvalue,splitname){
	return getCookieIMValue(cookiesvalue,splitname);
} 

function getcookieForSearchHead(levelB,prov){
	var result = getCookieIMValue("ooo",levelB);
	if(prov=='province'){
		if(result.length>5){
			return result.substring(0,5)+"000";
		}
	}
	return result;
} 
function getcookieForShareHead(levelB,prov){
	var svalue = getcookieForSearchHead(levelB,prov);
	if(svalue==null || svalue==''){
		if(prov=='province'){
			return -1;
		}		
		return prov;
	}
	return svalue;
} 


$(function(){
	//收藏網站
	var addfav=$('a.bookmark');
	addfav.click(function(){
		try{
			window.external.addFavorite(location.href,document.title);
		}catch(e1){
			try{
				window.sidebar.addPanel(document.title,'http://www.zhenai.com/','');
			}catch(e2){
				alert("Windows: Ctrl+D, Mac: Cmd+D");
			}
		}
		return false;
	});
	//下拉菜單
	var gnmenu=$('#gnloggedin>li');
	gnmenu.hover(function(){
		$(this).addClass('current').find('ul').stop().slideDown(200);
	},function(){
		$(this).removeClass('current').find('ul').stop().slideUp(100);
	});
	
	//秀自己
	/*
	$('#xiu_area').hover(function() {
		var data = $(this).attr("data");
		if (!data) {
			seajs.use(["artDialog", "artDialogCss", "commonOption", "za_dialog", "topXiou.js"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/js/widget/topXiou.js*/]);
		} else {
			$(this).addClass('showme_hover').find('.show_items').show();
		}
	}, function(){
		$(this).removeClass('showme_hover').find('.show_items').hide();
	});
	*/
	
	// 滚动登录条 
	var $trundleLoginBar = $('.trundle_login_bar');
	//点击和输入 input
	$trundleLoginBar.find('.input_login').focus(function(){
		$(this).parent().addClass('ph_focus');	
	}).blur(function(){
		$(this).parent().removeClass('ph_focus');	
		//var val = $.trim($(this).val());
		if($(this).val() == ''){
			$(this).siblings('.trundle_label').show();
		}else{
			$(this).siblings('.trundle_label').hide();
		}
	}).keydown(function(){
			$(this).siblings('.trundle_label').hide();
	}).trigger('blur');
	$trundleLoginBar.find('.trundle_label').click(function(){$(this).siblings('.input_login').focus();});
	//向下滚动大于120px时显示滚动登录条
	$(window).scroll(function(){
		if($(document).scrollTop() >120){
				$trundleLoginBar.fadeIn(300);
		}else{
			$trundleLoginBar.fadeOut(300);
		}
	});

})
//
function stat(resourceId,accessPoint,sParam,isPV) {
	var ref=document.referrer;
	var url='http://cdnlog.zhenai.com/visit/?resourceId='+resourceId+'&accessPoint='+accessPoint+'&sParam='+sParam+'&isPV='+isPV+'&referer='+encodeURIComponent(ref?ref:'');
	$.ajax({
	url:url,
	dataType:"jsonp",
	success: function(data){
	}
	})
} 

function appendZhenxin(val){
	var html = "";
	html += '<div id="buyService" class="buy-service">';
	html += '<div class="floor floor-1 select" type="1">';
	html += '<div class="floor-border">';
	html += '<div class="title">使用珍爱币，轻松购买珍心会员、礼物等各类在线征婚服务！</div><div class="servie-box clearfix">';
	html += '<div class="servie-radio fl"><b class="radio"></b></div>';
	html += '<div class="servie-icon ocin-icon fl"></div><div class="servie-info fl">';
	html += '<div class="servie-name">'+val+'个珍爱币</div>';
	html += '<div class="servie-price">折后价：<span class="orange">'+val*2+'</span>元</div>';
	html += '</div></div></div></div>';
	html += '<div class="floor floor-2 clearfix" type="2">';
	html += '<div class="floor-border"><div class="mark"></div>';
	html += '<div class="title">现在升级珍心会员，即可免费获得30个珍爱币，更超值！</div>';
	html += '<div class="servie-box clearfix"><div class="servie-radio fl"><b class="radio"></b></div>';
	html += '<div class="servie-icon vip-icon fl"></div><div class="servie-info fl">';
	html += '<div class="servie-name">30个珍爱币 (免费)</div><div class="servie-price">珍心会员12个月     优惠价：<span class="orange">399</span>元 </div>';
	html += '</div></div></div></div>';
	html += '<div class="servie-btn-box"><a href="javascript:;" class="servie-btn" id="confirmBuy">确认购买</a></div></div>';
	
	seajs.use("micro_payment.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/micro_payment.css*/, function() {
		art.dialog({
			title:'购买服务',
			padding:'0px',
			fixed:false,
			lock:true,
			opacity:0.5,
			content: $(html)[0],
			id: 'buyService'
			// init:function(){noRuleInit();}
		});
		
		$('#buyService').on('click','.close',function(){
			art.dialog({id:'buyService'}).close();
		}).on('click','.floor',function(){
			var _this=$(this);

			_this.addClass('select').siblings('.floor').removeClass('select');
		});
	});
		
}

var minTemplate = {
    temp: {},
    target: {},
    index: 0, 
    getId: function (elem) {
        return document.getElementById(elem);
    },
    base: function (template, json, fn) {
        var result = '';
        if (Object.prototype.toString.call(json) === '[object Array]') {
            for(var i = 0, len = json.length; i < len; i++){
            	json[i].index = i;
	            result += template.replace(/\{([^{}]+)\}/g, function (match, key) {
	                return fn === undefined ? json[i][key] : fn(key, json[i][key], json[i]);
	            });
            }
            return result;
        } else {
            alert('只接收数组形式的JSON数据！');
        }
    },
    pro: function (config) {
        this.temp[config.temp] = this.temp[config.temp] || this.getId(config.temp)
        this.target[config.target] = this.target[config.target] || this.getId(config.target);
		if (this.target[config.target] && this.temp[config.temp]) {
			this.target[config.target].innerHTML = (config.insertType ? this.target[config.target].innerHTML : '') +
			this.base(this.temp[config.temp].innerHTML, config.json, config.filter);
		}
    }
};

