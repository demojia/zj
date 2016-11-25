// 珍爱网2012新版广告轮播器（水平滚动简版）
// by numbuz@gmail.com
// on 2012-11-15
// 8个参数分别是：容器选择器、数据变量名、容器宽度、容器高度，导航高度，导航透明度，导航默认背景色，导航选中背景色。前2个必需，后6个可选）
// 例：advplayer($('#somediv'),somedata,200,100)

function advplayer(playercontainer,piclist,playerwidth,playerheight,navheight,navopacity,navbgc,navcurbgc,param){
	if(playercontainer){
		var p=playercontainer,
			t,
			pul=p.find('ul').length>0?p.find('ul'):$('<ul></ul>').appendTo(p),
			pol=p.find('ol').length>0?p.find('ol'):$('<ol></ol>').appendTo(p),
			pulsub='',
			polsub='';
		p.css({
			'width':playerwidth?playerwidth+'px':p.width(),
			'height':playerheight?playerheight+'px':p.height(),
			'overflow':'hidden',
			'position':'relative'
		});

		if(piclist){
			var pl=piclist,
				pn=pl.length;
				if(param&&param.constructor === Array){
					for(var k=0; k<param.length; k++){
						pl[param[k][0]].imghref += param[k][1];
					}
				}
			for(n=0;n<pn;n++){
				pulsub=pulsub+'<li><a href=\"'+pl[n].imghref+'\" target=\"_blank\" title=\"'+pl[n].imgtitle+'\"><img id=\"'+pl[n].imgAdvId+'\" src=\"'+pl[n].imgsrc+'\" alt=\"'+pl[n].imgtitle+'\"></a></li>';
				polsub=polsub+'<li></li>';
			}
			pul.append(pulsub).css({
					'width':'9990px',
					'left':'0',
					'top':'0',
					'position':'absolute'
				});
			pol.append(polsub).css({
					'width':'9990px',
					'height':navheight?navheight+'px':'7px',
					'opacity':navopacity?navopacity:'.6',
					'overflow':'hidden',
					'fontSize':'0',
					'left':'0',
					'bottom':'0',
					'position':'absolute'
				});
			var pw=p.width(),
				polh=pol.height(),
				puli=pul.find('li').css({
					'width':pw,
					'padding':'0',
					'margin':'0',
					'float':'left'
				}),
				poli=pol.find('li').css({
					'width':pw/pn,
					'height':'100%',
					'padding':'0',
					'margin':'0 1px 0 0',
					'background':navbgc?navbgc:'#fff',
					'float':'left',
					'position':'relative',
					'cursor':'pointer'
				});
			p.hover(function(){
				pol.stop().animate({
					'height':polh*2+2
				},200);
			},function(){
				pol.stop().animate({
					'height':polh
				},100);
			})
			var rollto=function(n){
					poli.removeClass('current').css({
						'background':navbgc?navbgc:'#fff',
						'cursor':'pointer'
					}).eq(n).addClass('current').css({
						'background':navcurbgc?navcurbgc:'#09f',
						'cursor':'default'
					});
					pul.stop().animate({
						'left':-n*pw
					},500);
				}
			var autoroll=function(){
					var n=poli.index(pol.find('li.current'));
					if(n<pn-1){
						rollto(n+1);
					}
					else{
						rollto(0);
					}
				}
			p.mouseover(function(){
				if(t){
					clearInterval(t);
				}
			}).mouseenter(function(){
				if(t){
					clearInterval(t);
				}
			}).mouseleave(function(){
				if(t){
					clearInterval(t);
				}
				t=setInterval(autoroll,3000);
			});
			poli.click(function(){
				var i=$(this).index();
				rollto(i);
			}).eq(0).addClass('current').css({
				'background':navcurbgc?navcurbgc:'#09f',
				'cursor':'default'
			});
			if(t){
				clearInterval(t);
			}
			t=setInterval(autoroll,3000);
		}
		else{
			$('<li>Failed to fetch data.</li>').appendTo(pul);
		}
	}
	else{alert('Failed to initialize advplayer.')}
}