
var homerUrl="http://images.zastatic.com";


// �Ƿ����
var TIME15=false;

// ������ߵ�
var maxTop=0;


// �ӿڴ�С
var pageSize=comFunObj.getViewportSize();
var _width=pageSize._width;
var _height=pageSize._height;


comFunObj.addEventHandler(window,"load",function(){


	addHtml();
	resetRedioSex();
	resetRedioMarriage();
	// djtim();



	comFunObj.$("regSex").value="0";
	comFunObj.$("sel_boy").style.color="#9b63b3";
	changeRedio("sel_boy_a","redio2.png");


	comFunObj.$("regMarriage").value="1";
	comFunObj.$("sel_Marriage_1").style.color="#9b63b3";
	changeRedio("sel_Marriage_1_a","redio2.png");


	// ����رհ�ť
	var cover_header_close=comFunObj.$("cover_header_close");
	comFunObj.addEventHandler(cover_header_close,"click",function(){

		var cover_bg=comFunObj.$("cover_bg");
		cover_bg.style.display="none";
		var cover_div=comFunObj.$("cover_div_bg");
		cover_div.style.display="none";

		// timeDown(comFunObj.$("djdiv"));

		// ��¼ʱ��
		comFunObj.setCookie(".zhenai.com","/","scapeTimeCookie",getNowtime(),1);
	});


	// �� 
	var sel_boy=comFunObj.$("sel_boy");
	comFunObj.addEventHandler(sel_boy,"click",function(){
		resetRedioSex();
		sel_boy.style.color="#9b63b3";
		comFunObj.$("regSex").value="0";

		changeRedio("sel_boy_a","redio2.png");
	});


	// Ů
	var sel_girl=comFunObj.$("sel_girl");
	comFunObj.addEventHandler(sel_girl,"click",function(){
		resetRedioSex();
		sel_girl.style.color="#9b63b3";
		comFunObj.$("regSex").value="1";

		changeRedio("sel_girl_a","redio2.png");

	});


	// δ��
	var sel_Marriage_1=comFunObj.$("sel_Marriage_1");
	comFunObj.addEventHandler(sel_Marriage_1,"click",function(){
		resetRedioMarriage();
		sel_Marriage_1.style.color="#9b63b3";
		var regMarriage     =  comFunObj.$("regMarriage");
		regMarriage.value="1";

		changeRedio("sel_Marriage_1_a","redio2.png");

	});



	// ����
	var sel_Marriage_3=comFunObj.$("sel_Marriage_3");
	comFunObj.addEventHandler(sel_Marriage_3,"click",function(){
		resetRedioMarriage();
		sel_Marriage_3.style.color="#9b63b3";
		var regMarriage =  comFunObj.$("regMarriage");
		regMarriage.value="3";

		changeRedio("sel_Marriage_3_a","redio2.png");

	});



	// ɥż
	var sel_Marriage_4=comFunObj.$("sel_Marriage_4");
	comFunObj.addEventHandler(sel_Marriage_4,"click",function(){
		resetRedioMarriage();
		sel_Marriage_4.style.color="#9b63b3";
		var regMarriage =  comFunObj.$("regMarriage");
		regMarriage.value="4";

		changeRedio("sel_Marriage_4_a","redio2.png");
	});


	// �ύ��
	var submit=comFunObj.$("submit");
	comFunObj.addEventHandler(submit,"click",function(){
		var regMarriage =  comFunObj.$("regMarriage").value;
		var regSex =  comFunObj.$("regSex").value;

		if(regMarriage==""){
			return;
		}

		if (regSex=="")
		{
			return;
		}

		comFunObj.$("registerForm").submit();
	});



	// ������ʱ�򴥷��¼�
	comFunObj.addEventHandler(window,"scroll",function(){

		var sObj=comFunObj.getScrollLocation();
		var stl=comFunObj.getPageScroll()
		//console.log("scroll -> ҳ��",sObj.sWidth," ҳ�ߣ�",sObj.sHeight," top: ",stl._top," left: ",stl._left);
		var pageObj=comFunObj.getViewportSize();
		//console.log("scroll -> �ӿڿ� ��",pageObj._width," �ӿڸ� ��",pageObj._height);

		// ����cover_div����
		var cover_div=comFunObj.$("cover_div_bg");
		cover_div.style.top=((pageObj._height-430)/2+stl._top)+"px";
		cover_div.style.left=((pageObj._width-416)/2+stl._left)+"px";

		if(stl._top>=maxTop){
			maxTop=stl._top;
			//console.log("scroll -> maxTop: ",maxTop);
		}
		else{
			//console.log(" scroll -> maxTop: ",maxTop);

			if(comFunObj.$("cover_bg").style.display=="none"){
				//console.log("scroll -> ���ϻ���");
				showTipsWin();
			}
		}

	});

});


// �������С�ı�ʱ
comFunObj.addEventHandler(window,"resize",function(){

	var pageSize1=comFunObj.getViewportSize();
	var _width1=pageSize1._width;
	var _height1=pageSize1._height;

	// �ڸǲ�
	var cover_bg=comFunObj.$("cover_bg");
	cover_bg.style.height=(_height1)+"px";
	cover_bg.style.width=(_width1)+"px";
	cover_bg.style.top="0px";
	cover_bg.style.left="0px";

	var pageObj1=comFunObj.getViewportSize();
	var stl1=comFunObj.getPageScroll()
	// ����cover_div����
	var cover_div=comFunObj.$("cover_div_bg");
	cover_div.style.top=((pageObj1._height-430)/2+stl1._top)+"px";
	cover_div.style.left=((pageObj1._width-416)/2+stl1._left)+"px";

});



// ��ʾ����
function showTipsWin(){

	var isSEO=comFunObj.getCookie("isSEO");

	//console.log("showTipsWin-> TIME15 : ",TIME15," isSEO:",isSEO);

	var nowT=getNowtime();
	var scapeTimeCookie=comFunObj.getCookie("scapeTimeCookie");
	if(scapeTimeCookie==null||scapeTimeCookie==""){
		scapeTimeCookie=0;
	}
	var timeScope=parseInt(nowT)-parseInt(scapeTimeCookie);

	//console.log("showTipsWin-> nowT: "+nowT+" scapeTimeCookie: "+scapeTimeCookie+" timeScope:"+timeScope);

	// console.log("time15 :",parseInt(timeScope)>15000);
	if(parseInt(timeScope)>120000){
		TIME15=true;
	}


	if(TIME15==true&&isSEO=="1"){
	//console.log(" ------- show tipswindown -------- ");
	//	if(TIME15==true){

		var pageObj=comFunObj.getViewportSize();
		// �ڸǲ�
		var cover_bg=comFunObj.$("cover_bg");
		cover_bg.style.height=(pageObj._height)+"px";
		cover_bg.style.top="0px";
		cover_bg.style.left="0px";
		cover_bg.style.display="block";


		// ��div
		var cover_div=comFunObj.$("cover_div_bg");
		cover_div.style.display="block";


		TIME15=false;

		ajaxStat_homer(1983,1,comFunObj.getCookie("sid"),0);
	}

}



function getNowtime(){
	var nowDate=new Date();
	// console.log("getNowtime -> :  ",nTime);
	return nowDate.getTime();
}


function ajaxStat_homer (resourceId,accessPoint,sParam,isPV) {
	var ref=document.referrer;
	var url='http://cdnlog.zhenai.com/visit/?resourceId='+resourceId+'&accessPoint='+accessPoint+'&sParam='+sParam+'&isPV='+isPV+'&referer='+encodeURIComponent(ref?ref:'');
	$.ajax({
		url:url,
		dataType:"jsonp",
		success: function(data){
		}
	})
}



function addHtml(){

	var cover_bg = document.createElement("div");
	cover_bg.id="cover_bg";
	cover_bg.className="cover_bg";
	cover_bg.style.display="none";

	var cover_div = document.createElement("div");
	cover_div.id="cover_div_bg";
	cover_div.className="cover_div_bg";
	cover_div.style.display="none";
	cover_div.innerHTML ="<span id='cover_header_close' class='cover_header_close'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/close.png'></span><div id='cover_div'class='cover_div' >  <div class='cover_header'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/header.png'> 	</div><div class='regist_article'><form id='registerForm' action='http://register.zhenai.com/register/channelRegister.jsps?from=seo' method='post'>	<div class='search_item_homer' id='ZuiSex'>	<span class='search_item_png search_item_png_sex'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/iconsex.png'></span><span class='search_item_tit'>�Ա�</span><span id='sel_boy' data-val='0' class='iRadio'>	<a id='sel_boy_a' href='javascript:void;'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/redio1.png'></a>��ʿ</span><span id='sel_girl' data-val='1' class='iRadio'>	<a id='sel_girl_a' href='javascript:void;'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/redio1.png'></a>Ůʿ</span><input value='' type='hidden' name='baseInfo.sex' id='regSex'></div>	<div class='search_item_homer'>	<span class='search_item_png search_item_png_hy'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/iconmer.png'></span><span class='search_item_tit'>����״����</span><span id='sel_Marriage_1' data-val='1' class='iRadio'><a id='sel_Marriage_1_a'  href='javascript:void;'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/redio1.png'></a>δ��</span>	<span id='sel_Marriage_3' data-val='3' class='iRadio'><a id='sel_Marriage_3_a'  href='javascript:void;'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/redio1.png'></a>����</span><span id='sel_Marriage_4' data-val='4' class='iRadio'><a id='sel_Marriage_4_a'  href='javascript:void;'><img src='"+homerUrl+"/zhenai3/zhenai2015/img/tipswindown/redio1.png'></a>ɥż</span><input value='' type='hidden' name='baseInfo.marriage' id='regMarriage' ></div><div class='search_item_xline'></div></form><div><a class='search_btn_homer' href='#' id='submit' >����ע��</a><a href='http://profile.zhenai.com/login/loginactionindex.jsps' class='search_content_a' >�����ʺţ������¼</a> </div>";

	document.body.appendChild(cover_bg);
	document.body.appendChild(cover_div);

}






// ���ð�ť
function resetRedioSex(){

	comFunObj.$("regSex").value="";

	comFunObj.$("sel_boy").style.color="#333333";
	changeRedio("sel_boy_a","redio1.png");

	comFunObj.$("sel_girl").style.color="#333333";
	changeRedio("sel_girl_a","redio1.png");


}


// ��ʼ����ť
function resetRedioMarriage(){

	comFunObj.$("regMarriage").value="";

	comFunObj.$("sel_Marriage_1").style.color="#333333";
	changeRedio("sel_Marriage_1_a","redio1.png");

	comFunObj.$("sel_Marriage_3").style.color="#333333";
	changeRedio("sel_Marriage_3_a","redio1.png");

	comFunObj.$("sel_Marriage_4").style.color="#333333";
	changeRedio("sel_Marriage_4_a","redio1.png");

}

// �޸İ�ť��ɫ
function changeRedio(div,imgName){
	comFunObj.$(div).innerHTML = '';
	var img=document.createElement("img");
	img.src=homerUrl+"/zhenai3/zhenai2015/img/tipswindown/" +imgName;
	img.style.width="100%";
	img.style.display="block";
	comFunObj.$(div).appendChild(img)
}

