/**
 * 此js包含的方法：
 * 		? getEvent ：事件对象
 * 		? getTarget ：事件的目标
 * 		? preventDefault ：取消事件的默认行为
 * 		? stopPropagation ：取消事件的进一步捕获或冒泡
 * 	? addEventHandler :  给element 添加 evnetName事件，其处理程序为funHandler
 * 		? removeEventHandler : 移除element元素上的evnet事件，其处理程序为funHandler
 * 		? $ : 获取指定id元素
 * 		? getElementByClassName : 获取指定class名的元素集合
 * 		? getElementAttr : 获取css中的元素属性
 * 		? getViewportSize : 获取浏览器视口大小
 * 		? getScreenInfo : 获取显示器的信息
 * 		? getScrollLocation : 获取视口在网页中的位置
 * 		? getPageScroll : 滚动条位置
 * 		? setCookie: 设置cookie
 * 		? getCookie: 读取cookie
 * 		? removeHTMLTag: 处理字符换  去除HTML、tag / 去除行尾空白 / 去掉&nbsp; / 去除多余空行
 * 		? :
 * 		? :
 *
 *
 */

var comFunObj={

	/**
	 * 跨浏览器事件对象
	 * @param {Object} event 事件对象
	 */
	getEvent:function(event){
		return event?event:window.event;
	},


	/**
	 * 跨浏览器事件对象 -- 事件的目标
	 * @param {Object} event 事件对象
	 */
	getTarget:function(event){
		return event.target||event.srcElement;
	},


	/**
	 * 跨浏览器事件对象 -- 取消事件的默认行为
	 * @param {Object} event 事件对象
	 */
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},


	/**
	 * 跨浏览器事件对象 -- 取消事件的进一步捕获或冒泡
	 * @param {Object} event 事件对象
	 */
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelable=true;
		}
	},


	/**
	 *  给element 添加 evnetName事件， 其处理程序为funHandler
	 * @param {Object} targetElement : 目标DIV
	 * @param {Object} evnet : 事件
	 * @param {Object} funHandler : 处理函数
	 */
	addEventHandler:function(targetElement,evnet,funHandler){
		if(targetElement.addEventListener){
			//DOM2级方法
			targetElement.addEventListener(evnet,funHandler,false);
		}
		else if(targetElement.attachEvent){
			// IE方法  为了能在IE8之前的版本上运行，事件类型前边需要加“on”
			targetElement.attachEvent("on"+evnet,funHandler);
		}
		else{
			// 使用DOM0级方法
			targetElement["on"+evnet]=funHandler;
		}
	},


	/**
	 *  移除element元素上的evnet事件，其处理程序为funHandler
	 * @param {Object} targetElement : 目标DIV
	 * @param {Object} evnet : 事件
	 * @param {Object} funHandler : 处理函数
	 */
	removeEventHandler:function(targetElement,evnet,funHandler){
		if(targetElement.removeEventListener){
			//DOM2级方法
			targetElement.removeEventListener(evnet,funHandler,false);
		}
		else if(targetElement.detachEvent){
			// IE方法  为了能在IE8之前的版本上运行，事件类型前边需要加“on”
			targetElement.detachEvent("on"+evnet,funHandler);
		}
		else{
			// 使用DOM0级方法
			targetElement["on"+evnet]=null;
		}
	},


	/**
	 * 获取指定id元素
	 * @param {Object} div : 元素id值
	 */
	$:function(div){
		return document.getElementById(div);
	},


	/**
	 * 获取指定class名的元素集合
	 * @param {Object} className : 类名
	 * @param {Object} element : 元素
	 */
	getElementByClassName:function(className,element){
		if(document.getElementsByClassName){
			// 浏览器支持，直接返回
			return (document||element).getElementsByClassName(className);
		}
		// 浏览器不支持getElementsByClassName
		var allTag=document.getElementsByTagName('*');

		var eleArr=new Array();

		for(var i=0;i<allTag.length;i++){
			// 取第一个tag
			var ele=allTag[i];
			// 分割多个class样式
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
	 * 获取css中的元素属性
	 * @param {Object} obj : 元素
	 * @param {Object} attr : 属性
	 */
	getElementAttr :function(div,attr){
		// 因为js只能获取行内样式,所以需要换个方式取一下
		// currentStyle 是IE提供的
		// defaultView 则于标准浏览器提供的
		if(div.currentStyle) {
			// IE用  element.currentStyle["name"]
			return div.currentStyle[attr];
		}
		else{
			// document.defaultView.getComputedStyle 这是w3c标准方法，取得元素的样式信息，
			// 因为有些样式是在外部css文件定义的，所以用element.style是取不到的
			return document.defaultView.getComputedStyle(div,false)[attr];
		}
	},


	/**
	 * 获取浏览器视口大小
	 * @ 无参数
	 */
	getViewportSize:function (){
		var  page_width=window.innerWidth,
			page_height=window.innerHeight;

		if(typeof page_width !="number"){
			// 查看浏览器是否处于标准模式
			if(document.compatMode=="CSS1Compat") {
				// ie6 标准模式
				page_width=document.documentElement.clientWidth;
				page_height=document.documentElement.clientHeight;
			}
			else{
				// ie6 混杂模式下
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
	 * 获取显示器的信息
	 * @ 无参数
	 */
	getScreenInfo:function(){
		var arr=[];
		// 宽
		arr.push("width : "+window.screen.width);
		// 高
		arr.push("height : "+window.screen.height);
		// 颜色的位数
		arr.push("colorDepth : "+window.screen.colorDepth);
		// 位深
		arr.push("pixelDepth : "+window.screen.pixelDepth);
		return arr;
	},


	/**
	 * 获取视口在网页中的位置
	 * @ 无参数
	 */
	getScrollLocation:function(){

		// 整个网页的高度
		var _scrollHeight= Math.max(document.body.scrollHeight,document.documentElement.clientHeight) ;

		// 视口距离网页顶端的距离（包含边框）
		var _scrollTop=document.body.scrollTop;

		// 整个网页的宽度
		var _scrollWidth=Math.max(document.body.scrollWidth,document.documentElement.clientWidth);

		// 视口距离网页左边的距离（包含边框）
		var _scrollLeft=document.body.scrollLeft;

		return {
			sHeight:_scrollHeight,
			sTop:_scrollTop,
			sWidth:_scrollWidth,
			sLeft:_scrollLeft
		}
	},



	// 滚动条位置 
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
	 * 设置Cookie
	 * @ path ：路经
	 * @ name ：cookies名
	 * @ value ：cookies值
	 * @ loseTime ：过期时间
	 */
	setCookie:function (domain,path,name, value,loseTime) {
		var exp = new Date();
		exp.setTime(exp.getTime() + loseTime * 24 * 60 * 60 * 1000); // loseTime 天过期
		document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString()+";domain="+domain+";path="+path;
		return true;
	},


	/**
	 * 读取cookie
	 * @ name ： cookies名
	 */
	getCookie: function (name) //读取cookies
	{
		var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
		if (arr = document.cookie.match(reg)) {return unescape(arr[2]);}
		else {return null;}
	},


	/**
	 * 处理字符换  去除HTML、tag / 去除行尾空白 / 去掉&nbsp; / 去除多余空行
	 * @str: 需要处理字符串
	 */
	removeHTMLTag:function(str){
		str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
		str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
		str = str.replace(/\n[\s| | ]*\r/g,'\n'); // 去除多余空行
		str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
		return str;
	}










};