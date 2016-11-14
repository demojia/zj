/**
 * ��js�����ķ�����
 * 		? getEvent ���¼�����
 * 		? getTarget ���¼���Ŀ��
 * 		? preventDefault ��ȡ���¼���Ĭ����Ϊ
 * 		? stopPropagation ��ȡ���¼��Ľ�һ�������ð��
 * 	? addEventHandler :  ��element ��� evnetName�¼����䴦�����ΪfunHandler
 * 		? removeEventHandler : �Ƴ�elementԪ���ϵ�evnet�¼����䴦�����ΪfunHandler
 * 		? $ : ��ȡָ��idԪ��
 * 		? getElementByClassName : ��ȡָ��class����Ԫ�ؼ���
 * 		? getElementAttr : ��ȡcss�е�Ԫ������
 * 		? getViewportSize : ��ȡ������ӿڴ�С
 * 		? getScreenInfo : ��ȡ��ʾ������Ϣ
 * 		? getScrollLocation : ��ȡ�ӿ�����ҳ�е�λ��
 * 		? getPageScroll : ������λ��
 * 		? setCookie: ����cookie
 * 		? getCookie: ��ȡcookie
 * 		? removeHTMLTag: �����ַ���  ȥ��HTML��tag / ȥ����β�հ� / ȥ��&nbsp; / ȥ���������
 * 		? :
 * 		? :
 *
 *
 */

var comFunObj={

	/**
	 * ��������¼�����
	 * @param {Object} event �¼�����
	 */
	getEvent:function(event){
		return event?event:window.event;
	},


	/**
	 * ��������¼����� -- �¼���Ŀ��
	 * @param {Object} event �¼�����
	 */
	getTarget:function(event){
		return event.target||event.srcElement;
	},


	/**
	 * ��������¼����� -- ȡ���¼���Ĭ����Ϊ
	 * @param {Object} event �¼�����
	 */
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},


	/**
	 * ��������¼����� -- ȡ���¼��Ľ�һ�������ð��
	 * @param {Object} event �¼�����
	 */
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelable=true;
		}
	},


	/**
	 *  ��element ��� evnetName�¼��� �䴦�����ΪfunHandler
	 * @param {Object} targetElement : Ŀ��DIV
	 * @param {Object} evnet : �¼�
	 * @param {Object} funHandler : ������
	 */
	addEventHandler:function(targetElement,evnet,funHandler){
		if(targetElement.addEventListener){
			//DOM2������
			targetElement.addEventListener(evnet,funHandler,false);
		}
		else if(targetElement.attachEvent){
			// IE����  Ϊ������IE8֮ǰ�İ汾�����У��¼�����ǰ����Ҫ�ӡ�on��
			targetElement.attachEvent("on"+evnet,funHandler);
		}
		else{
			// ʹ��DOM0������
			targetElement["on"+evnet]=funHandler;
		}
	},


	/**
	 *  �Ƴ�elementԪ���ϵ�evnet�¼����䴦�����ΪfunHandler
	 * @param {Object} targetElement : Ŀ��DIV
	 * @param {Object} evnet : �¼�
	 * @param {Object} funHandler : ������
	 */
	removeEventHandler:function(targetElement,evnet,funHandler){
		if(targetElement.removeEventListener){
			//DOM2������
			targetElement.removeEventListener(evnet,funHandler,false);
		}
		else if(targetElement.detachEvent){
			// IE����  Ϊ������IE8֮ǰ�İ汾�����У��¼�����ǰ����Ҫ�ӡ�on��
			targetElement.detachEvent("on"+evnet,funHandler);
		}
		else{
			// ʹ��DOM0������
			targetElement["on"+evnet]=null;
		}
	},


	/**
	 * ��ȡָ��idԪ��
	 * @param {Object} div : Ԫ��idֵ
	 */
	$:function(div){
		return document.getElementById(div);
	},


	/**
	 * ��ȡָ��class����Ԫ�ؼ���
	 * @param {Object} className : ����
	 * @param {Object} element : Ԫ��
	 */
	getElementByClassName:function(className,element){
		if(document.getElementsByClassName){
			// �����֧�֣�ֱ�ӷ���
			return (document||element).getElementsByClassName(className);
		}
		// �������֧��getElementsByClassName
		var allTag=document.getElementsByTagName('*');

		var eleArr=new Array();

		for(var i=0;i<allTag.length;i++){
			// ȡ��һ��tag
			var ele=allTag[i];
			// �ָ���class��ʽ
			var eleClassNames=className.split(' ');
			for(var j=0;j<eleClassNames.length;j++){
				if(eleClassNames[j]==className){
					eleArr.push(ele);
					break;
				}
			}

		}

		return eleArr;
	},


	/**
	 * ��ȡcss�е�Ԫ������
	 * @param {Object} obj : Ԫ��
	 * @param {Object} attr : ����
	 */
	getElementAttr :function(div,attr){
		// ��Ϊjsֻ�ܻ�ȡ������ʽ,������Ҫ������ʽȡһ��
		// currentStyle ��IE�ṩ��
		// defaultView ���ڱ�׼������ṩ��
		if(div.currentStyle) {
			// IE��  element.currentStyle["name"]
			return div.currentStyle[attr];
		}
		else{
			// document.defaultView.getComputedStyle ����w3c��׼������ȡ��Ԫ�ص���ʽ��Ϣ��
			// ��Ϊ��Щ��ʽ�����ⲿcss�ļ�����ģ�������element.style��ȡ������
			return document.defaultView.getComputedStyle(div,false)[attr];
		}
	},


	/**
	 * ��ȡ������ӿڴ�С
	 * @ �޲���
	 */
	getViewportSize:function (){
		var  page_width=window.innerWidth,
			page_height=window.innerHeight;

		if(typeof page_width !="number"){
			// �鿴������Ƿ��ڱ�׼ģʽ
			if(document.compatMode=="CSS1Compat") {
				// ie6 ��׼ģʽ
				page_width=document.documentElement.clientWidth;
				page_height=document.documentElement.clientHeight;
			}
			else{
				// ie6 ����ģʽ��
				page_width=document.body.clientWidth;
				page_height=document.body.clientHeight;
			}
		}

		var  sizeObj={
			_width:page_width,
			_height:page_height
		}

		return sizeObj;
	},


	/**
	 * ��ȡ��ʾ������Ϣ
	 * @ �޲���
	 */
	getScreenInfo:function(){
		var arr=[];
		// ��
		arr.push("width : "+window.screen.width);
		// ��
		arr.push("height : "+window.screen.height);
		// ��ɫ��λ��
		arr.push("colorDepth : "+window.screen.colorDepth);
		// λ��
		arr.push("pixelDepth : "+window.screen.pixelDepth);
		return arr;
	},


	/**
	 * ��ȡ�ӿ�����ҳ�е�λ��
	 * @ �޲���
	 */
	getScrollLocation:function(){

		// ������ҳ�ĸ߶�
		var _scrollHeight= Math.max(document.body.scrollHeight,document.documentElement.clientHeight) ;

		// �ӿھ�����ҳ���˵ľ��루�����߿�
		var _scrollTop=document.body.scrollTop;

		// ������ҳ�Ŀ��
		var _scrollWidth=Math.max(document.body.scrollWidth,document.documentElement.clientWidth);

		// �ӿھ�����ҳ��ߵľ��루�����߿�
		var _scrollLeft=document.body.scrollLeft;

		return {
			sHeight:_scrollHeight,
			sTop:_scrollTop,
			sWidth:_scrollWidth,
			sLeft:_scrollLeft
		}
	},



	// ������λ�� 
	getPageScroll:function ()
	{
		var x, y;
		if(window.pageYOffset)
		{   // all except IE      
			y =window.pageYOffset;
			x = window.pageXOffset;
		} else if(document.documentElement && document.documentElement.scrollTop)
		{   // IE 6 Strict      
			y = document.documentElement.scrollTop;
			x = document.documentElement.scrollLeft;
		} else if(document.body) {    // all   
			// other IE      
			y = document.body.scrollTop;
			x = document.body.scrollLeft;
		}

		return {_left:x,_top:y};
	}  ,




	/**
	 * ����Cookie
	 * @ path ��·��
	 * @ name ��cookies��
	 * @ value ��cookiesֵ
	 * @ loseTime ������ʱ��
	 */
	setCookie:function (domain,path,name, value,loseTime) {
		var exp = new Date();
		exp.setTime(exp.getTime() + loseTime * 24 * 60 * 60 * 1000); // loseTime �����
		document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString()+";domain="+domain+";path="+path;
		return true;
	},


	/**
	 * ��ȡcookie
	 * @ name �� cookies��
	 */
	getCookie: function (name) //��ȡcookies
	{
		var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
		if (arr = document.cookie.match(reg)) {return unescape(arr[2]);}
		else {return null;}
	},


	/**
	 * �����ַ���  ȥ��HTML��tag / ȥ����β�հ� / ȥ��&nbsp; / ȥ���������
	 * @str: ��Ҫ�����ַ���
	 */
	removeHTMLTag:function(str){
		str = str.replace(/<\/?[^>]*>/g,''); //ȥ��HTML tag
		str = str.replace(/[ | ]*\n/g,'\n'); //ȥ����β�հ�
		str = str.replace(/\n[\s| | ]*\r/g,'\n'); // ȥ���������
		str=str.replace(/&nbsp;/ig,'');//ȥ��&nbsp;
		return str;
	}










};