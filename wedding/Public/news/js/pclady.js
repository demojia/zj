function fill(data){
/*	var css = '<style>'
	+'	.pclady_list{padding: 20px; border:1px solid #E0E0E0; border-radius:3px; background:#fff}'
	+'	.pclady_list .sidemod_title{margin-bottom:20px}'
	+'	.pclady_list .pclady_photo{float: left;width: 86px;height: 118px;}'
	+'	.pclady_list .pclady_photo img{width: 100%;height: 100%;}'
	+'	.pclady_list .pclady_item{margin-bottom: 8px;}'
	+'	.pclady_list .pclady_p1,.pclady_list .pclady_p2{margin-left: 96px;}'
	+'	.pclady_list .pclady_p1{padding: 4px 0;font-size: 16px;line-height: 20px;color: #000;}'
	+'	.pclady_list a{color: #333;}'
	+'	.pclady_list .pclady_p2{font-size: 12px;line-height: 18px;color: #999;}'
	+'	.pclady_list .pclady_p3{font-size: 16px;line-height: 24px;color: #000;}'
	+'</style>';*/

	var html = '';
	html+='<div class="pclady_list sidemod" id="pcladyList">';
	html+='	<div class="sidemod_title">情感门诊室<span class="line"></span></div>';
	for(var i=0;i<data.json.length;i++){
		html+='	<div class="pclady_item clearfix">';
		html+='		<div class="pclady_photo">';
		html+='			<a href="'+data.json[i].link+'" target="_blank"><img src="'+data.json[i].img+'" alt="" /></a>';
		html+='		</div>';
		html+='		<p class="pclady_p1"><a href="'+data.json[i].link+'" target="_blank" class="pp1-js">'+data.json[i].title+'</a></p>';
		html+='		<p class="pclady_p2 pp2-js">'+data.json[i].summary+'</p>';
		html+='	</div>';
	}
	html+='</div>';
	//var $pcladyList = $(css+html).appendTo('.side_right');
	var $pcladyList = $(html).appendTo('.side_right');
	$(".pp2-js").wordLimit(34);
}

$(function(){
	(function($){
		$.fn.wordLimit = function(num){	
			this.each(function(){	
				if(!num){
					var copyThis = $(this.cloneNode(true)).hide().css({
						'position': 'absolute',
						'width': 'auto',
						'overflow': 'visible'
					});	
					$(this).after(copyThis);
					if(copyThis.width()>$(this).width()){
						$(this).text($(this).text().substring(0,$(this).text().length-4));
						$(this).html($(this).html()+'...');
						copyThis.remove();
						$(this).wordLimit();
					}else{
						copyThis.remove(); //清除复制
						return;
					}	
				}else{
					var maxwidth=num;
					if($(this).text().length>maxwidth){
						$(this).text($(this).text().substring(0,maxwidth));
						$(this).html($(this).html()+'...');
					}
				}					 
			});
		}		  
	})(jQuery);

	$.ajax({
	 	url: "http://emotion.pclady.com.cn/talk/1511/intf9187.html",
	 	dataType: 'jsonp'
	});
});