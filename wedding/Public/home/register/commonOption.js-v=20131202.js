//Date:2012年12月17日  author:longshun
//要求jquery1.3.2,artDialog
;(function($){

/**
 *珍爱公共弹层
 *
 */
var ZAOption = function(){
  //new ZAOption.fn._init();
};
//ZAOption.fn = ZAOption.prototype = {
  
  /**
    *初始化
	*/
  ZAOption._init = function(){
	
  },
  
    /**
    *公用Ajax请求(支持跨域)
	*/
  ZAOption.ajax = function(url,data,callback){
	$.ajax({ 
		type:"GET",
		dataType: "jsonp",			
		url: url, 
		data: data,
		success: callback,
		error:function(x1,x2,x3){
			ZA.warnTip('出错了，请稍后再试^_^');
		}
	});
  },
  
  ZAOption.asyncAjax = function(url,data,callback){
	$.ajax({ 
		type:"POST",
		dataType: "json",			
		url: url,
		async:false,
		data: data,
		success: callback,
		error:function(){
			ZA.warnTip('出错了，请稍后再试^_^');
		}
	});
  },
  
  ZAOption.makeUrl = function (url,data){
	if(data){
		var count=0;
		for(var obj in data){
			if(!obj || !data[obj]){
				continue;
			}
			if(count==0){
				url += "?"+obj+"="+ data[obj];
			}else{
				url += "&"+obj+"="+ data[obj];
			}
			count++;
		}
	}
	return url;
  },
  
  /**
    *登录
	*/
  ZAOption.login = function(callback){
	var memberId = getCookieMemberid();
	if(!memberId || memberId < 1){
		var dialog = art.dialog.list["login"];
		if(dialog){
			dialog.show();
            callback && callback();
			return;
		}
		seajs.use("login.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/login.css*/,function(){
			ZAOption.ajax("http://profile.zhenai.com/commons/login.jsps",{}, function(data){
				var dialog = art.dialog({
					id:"login",
					title:"",
					lock:true,
					fixed: true,
					opacity:0.3,
					padding:'0px 0px',
					content:data.data,
					init:function(){
						this.DOM.title.css("display","none");
					},
					close:function(){
						this.hide();
						return false;
					}
				}).show();
                callback && callback();
			});
		});
		
		return false;
	}
	return true;
  },
  ZAOption.login2 = function(callback){
	var memberId = getCookieMemberid();
	if(!memberId || memberId < 1){
		var dialog = art.dialog.list["login"];
		if(dialog){
			dialog.show();
            callback && callback();
			return;
		}
		seajs.use("login.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/login.css*/,function(){
			ZAOption.asyncAjax("http://i0.zastatic.com/commons/login.jsps",{}, function(data){
				var dialog = art.dialog({
					id:"login",
					title:"",
					lock:true,
					fixed: true,
					opacity:0.3,
					padding:'0px 0px',
					content:data.data,
					init:function(){
						this.DOM.title.css("display","none");
					},
					close:function(){
						this.hide();
						return false;
					}
				}).show();
                callback && callback();
			});
		});
		
		return false;
	}
	return true;
  },
  
  /**
   *手机号验证
   *
   */
  ZAOption.validMobile = function(modelType,data,callback){
	callback = callback || null;
	if(!ZAOption.login()){
		return;
	}
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+objectId,function(data){
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			 var url = "http://register.zhenai.com/commons/validMobile.jsps";
				art.dialog.data("modelType",arguments);
				artDialog.data("callback",callback);
				var dialog = art.dialog.open(url,{
					id:"validMobile",
					title:"手机号验证",
					lock:true,
					fixed: true,
					opacity:0.3,
					padding:'0px 0px',
					init:function(){
						dialog.size(600,230);
						dialog.position("50%","50%");
					}
				},true);
			return false;
		}
	});
	
  },
 
  
 /**
   *上传形象照
   *
   */
  ZAOption.uploadPhoto = function(modelType,data,callback,objPhoto,objName,isClear){
	callback = callback || function(){
		ZA.friendTip("图片上传成功！");
	};
	if(!ZAOption.login()){
		return;
	}
	artDialog.data("modelType",arguments);
	artDialog.data("data",data);
	artDialog.data("callback",callback);
	
	var url = "http://profile.zhenai.com/commons/uploadPhoto.jsps";
    if(objPhoto){
	  url+="?objDefalutPhoto=";
	  url+=objPhoto;
	}
	 if(objName){
	  url+="&objName=";
	  url+=objName;
	}
	var dialog = art.dialog.list["uploadPhoto"];
	if(dialog){
		var iframe = dialog.iframe.contentWindow;
		iframe.updateUploadPhotoTip();
		
		if($(iframe.document).find(".uppic_zhenxin:hidden").length==1){
			if($.browser.mozilla) {
				$(iframe.document).find(".uppic_zhenxin").show();
			}
		}
		
		dialog.iframe.style.display="block";
		dialog.show();
		dialog.position("50%","50%");
		return;
	}
	
	dialog = art.dialog.open(url,{
		id:"uploadPhoto",
		title:"上传形象照",
		lock:true,
		opacity:0.3,
		//fixed: true,
		padding:'0px 0px',
		//fixed: true,
		init:function(){
			dialog.size(600,530);
			dialog.position("50%","50%");
		},
		close:function(){
			 if(!isClear){
                this.hide();
                return false;
            }
		}
	},true);
  },
  
  /**
   *发秋波
   * skipPhoto 0为不路过形象照检查
   * callback  回调函数
   * leerSource 发送地 
   * optionType  0为默认，1为简单
   */
  ZAOption.sendLeer = function(memberId,skipPhoto,callback,leerSource,optionType){
	if(!ZAOption.login()){
		return;
	}
	
	if(!skipPhoto){
		skipPhoto=0;
	}
	if(!optionType){
		optionType=0;
	}

	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			callback = callback || null;
			artDialog.data("callback",callback);

			seajs.use("popmod.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/popmod.css*/,function(){

			ZAOption.ajax("http://profile.zhenai.com/commons/checkSendLeer.jsps",{"memberId":memberId,"skipPhoto":skipPhoto,"leerSource":leerSource,"optionType":optionType}, function(data){
				if(!data){return;}
				switch(data.code){
				case 0:
					ZA.msgTip(data.msg);
					break;
				case 1:
					art.dialog({
						id:"sendLeer",
						title:'看看对<span class="gift_title_name">'+data.msg+'</span>说点儿什么',
						lock:true,
						fixed: true,
						opacity:0.3,
						padding:'0px 0px',
						content:data.data
					});
					
					break;
				case 3:
					ZA.msgTip(data.msg);
					break;
				case 4:
					ZA.msgTip("你今天已经向对方发10个秋波了，休息一下，明儿再来吧。");
					break;
				case 20:
					ZAOption.validMobile(ZAOption.ModelConfig.sendLeer,{"memberId":memberId,"skipPhoto":skipPhoto,"nickName":data.msg},function(){
						ZAOption.sendLeer(memberId,skipPhoto,callback,leerSource,optionType);
					});
					break;
				case 21:
					ZAOption.uploadPhoto(ZAOption.ModelConfig.sendLeer,{"memberId":memberId,"skipPhoto":skipPhoto,"nickName":data.msg},function(){
						ZAOption.sendLeer(memberId,1,callback,leerSource,optionType);
					});
					break;
				
				}
			});

			});
		}
	});
	
	
     
  },
  
  /**
   *发送名片
   *memberId  会员 
   *back 是否回复
   *callback  回调
   */
  ZAOption.sendCard = function(memberId,back,callback,optionType){
	callback = callback || null;
	if(!back){
		back=false;
	}

	if(!optionType){
		optionType=0;
	}
	artDialog.data("callback",callback);
	if(!ZAOption.login()){
		return;
	}
	var arg = arguments;
	ZAOption.ajax("http://profile.zhenai.com/commons/checkSendCard.jsps", {"memberId":memberId,"http://i0.zastatic.com/zhenai3/zhenai2012/js/third_party/callingCard.back":back,"optionType":optionType},function(data){
		if(!data){return;}
		switch(data.code){
		case 0:
			ZA.msgTip(data.msg);
			break;
		case 1:
			if(optionType==1){
				ZA.friendTip("发送名片成功！");
				return;
			}
			art.dialog({
				id:"sendCard",
				title:"给“"+data.msg+"”发送名片",
				lock:true,
				fixed: false,
				padding:0,
				opacity:0.3,
				content:data.data
			});
			break;
		case 3:
			ZA.msgTip(data.msg);
			break;
		case 4:
			ZA.warnTip(data.msg);
			break;
		case 20:
			ZAOption.validMobile(ZAOption.ModelConfig.sendCard,arg,function(){
				 ZAOption.sendCard(memberId,back,callback,optionType);
			});
			break;
		
		
		}
	});
	
  },
  
  //礼物默认参数
  ZAOption.giftDefaultConfig = {
	title:"",//附加标题
	typeId:null,//指定礼物
	related:"",//回赠
	callback:null,//回调,
	tabFlag:0, //默认热门馆
	showDefalutSuccess:true,
	monthlyFreeGift:0,   //monthlyFreeGift 1 已买礼宝  0 未买礼包 
	//tabShow:"1,1,1,1,0,1"  //默认不显示晚间柔情TAB
	tabShow:{hot:1,pear:1,floor:1,birthday:1,night:0,giftpackage:1}
  }
   /*
   *送礼物
   *memberId	会员   
   * roseFrom '9'表示送礼物来自寻爱2014活动，'99'表示送礼物来自圣诞礼物
   */
  ZAOption.sendGift = function(memberId,config,roseFrom){
	if(!ZAOption.login()){
		return;
	}
	
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			if(roseFrom === undefined){
       roseFrom=0;
	}	
	var defaults = ZAOption.giftDefaultConfig;
	if(config){
		var tab = config["tabShow"];
		for(var i in defaults){
			if (config[i] === undefined) config[i] = defaults[i];		
		};
		var tabShowConfig = defaults["tabShow"];
		if(tab){
		   for(var i in tabShowConfig){
		     if(tab[i] === undefined) config["tabShow"][i] = tabShowConfig[i];
		   }
		}
	}else{
		config = defaults;
	}
	
	var dialog = artDialog.list['sendGift'];
	if(dialog){
		artDialog.data("sendGiftCallback",config.callback);
		ZAGilf.initGift(config);
		ZAGilf.setObjInfo(memberId);
		dialog.show();
		dialog.position("50%","50%");
	}else{
		seajs.use("pop_gift.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/pop_gift.css*/,function(){
		ZAOption.ajax("http://profile.zhenai.com/commons/sendGiftView.jsps",{"roseFrom":roseFrom,"memberId":memberId},function(data){
			if(!data){return}
			dialog = art.dialog({
					id:"sendGift",
					title:"送礼物",
					padding:'0px 0px',
					lock:true,
					fixed: true,
					opacity:0.3,
					content:data.data,
					init:function(){
						  hideTitle();
						  hideClose();
					},
					close: function () {
						this.hide();
						//回调有问题
						var curCallback = artDialog.data("sendGiftCallback");
						curCallback && curCallback();
						//if(curCallback){
						//	curCallback.call(curCallback,0);
						//}
						return false;
					}
				}).hide();
				artDialog.data("sendGiftCallback",config.callback);
				var count = 0;
				function showGiftInit(){
					//Bug临时解决方案
					while(!window.ZAGilf && count < 1000){
						setTimeout(showGiftInit,100);
						count++;
						return;
					}
					ZAGilf.initGift(config);
					if (data.zhenXinType && data.zhenXinType == 1) {
						$('#send_gift_step1').find(".bd_h ul").attr("zhenxintype", 1);
						$('#send_gift_step1').find(".gift_list p.price").css('text-decoration', 'line-through');
					}
				}
				setTimeout(showGiftInit,100);	
			});

			});
		}
		return false;
		}
	});
	
	
  },
  
     /*送礼成功取消按钮响应事件*/
  ZAOption.giftPayCancelBtn = function(payFrom){
     var giftPayDialog = art.dialog.list['giftPay'];
	 if(giftPayDialog){
					giftPayDialog.close();
				}
	if(payFrom!=1){
					window.location.reload();
				}
  },
   /*
   *送礼成功充值按钮响应事件
   */
  ZAOption.giftPayOkBtn = function(){
    if(!ZAOption.login()){
		return;
	}
	var coinNum = $("#giftNoPay ul li input[name=coin]:checked").val();
	if(coinNum == -1){
	   coinNum = $("#giftNoPay ul li .coin_num").val().replace(/\D/g,'');
	   if(coinNum <=0){
	     $("#giftNoPay ul li .coin_num").focus();
	     return false;
	   }
	}
	var orderSrcT = $("#giftNoPay .orderSrc").val();
	var giftPayDialog = art.dialog.list['sendgiftsuccess'];
	if(giftPayDialog){
	   giftPayDialog.close();
	}
	ZATemplatePay.zhenaiCoinTemplatePay({"orderAmount":coinNum,"orderSrc":orderSrcT,"templatePay":1});
	return false;
  },
  ZAOption.giftPayFocusCoin = function(_this){
    $("#coin4").attr("checked","checked");
	if($(_this).val() == '请输入整数'){
	   $(_this).val('');
	}
  }
  ZAOption.giftPayBlurCoin = function(_this){
	if($(_this).val() == ''){
	   $(_this).val('请输入整数');
	}
  } 
  ZAOption.giftPayKeyupCoin = function(_this){
    var intVaule = $(_this).val().replace(/\D/g,'');
	if(intVaule.length >3){
	   intVaule = intVaule.substr(0,3);
	   $(_this).val(intVaule);
	}else{
	   $(_this).val(intVaule);
	}
  }
  /*
  *关闭弹窗
  */
  ZAOption.closeTipDialog = function(id){
    var payDialog = art.dialog.list[id];
	if(payDialog){payDialog.close();}
  }
  ZAOption.showBuyGiftPackageDialog = function(){
     $.dialog({
			title:'温馨提示',
			lock:true,
			opacity:0.3,
			content: $('#pop_tipBox2')[0],
			id: 'pop_tipBox2',
			padding:'0px 0px',
			init:function(){
				$("#gifts_submit_jump").bind("click",function(){
				    var packageDialog = art.dialog.list['pop_tipBox2'];
	                if(packageDialog){packageDialog.close();}
					window.open("http://profile.zhenai.com/personal/loadGiftPackage.jsps");
				});
			}
		});
 }
 
 
  
  /*
   *买礼物
   *typeId礼物
   *quantity数量
   *batchInfo是否附加
   *skipTicket是否使用优惠券1为不使用，0使用
   *payByCoinFlag 赠送礼物是否弹窗确认框(非必须)
   *giftEnter  礼物入口(非必须)   
   *                1 ： 我的礼物-最近收到的礼物提示框
   */
  ZAOption.giftPay = function(memberId,typeId,quantity,batchInfo,callback,skipTicket,related,payByCoinFlag,giftEnter,roseFrom){
	
	if(!ZAOption.login()){
		return;
	}

	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			if(!skipTicket){
		skipTicket=0;
	}
	if(!related){
		related="";
	}
    if(roseFrom === undefined){
       roseFrom=0;
	}
	
	var payFrom = ZAOption.giftPay.from ; //0 默认 1 服务中心关怀  2资料页关怀
	var dialogId= ZAOption.giftPay.dialogId ; // 支付前弹窗id
	//赠送
	ZAOption.asyncAjax("http://i0.zastatic.com/commons/sendGiftPayView.jsps",{"memberId":memberId,"rosevo.typeId":typeId,"rosevo.quantity":quantity,"rosevo.batchInfo":batchInfo,"skipTicket":skipTicket,"rosevo.related":related,"payFrom":payFrom,"payByCoinFlag":payByCoinFlag,"giftEnter":giftEnter,"roseFrom":roseFrom},function(data){

		if(!data){return}

		var sendGiftDialog = art.dialog.list['sendGift'];
		if(sendGiftDialog){
			sendGiftDialog.hide();
		}
		switch(data.code){
		case 0:
			ZA.msgTip(data.msg);
			if(callback){
				callback.call(callback,0);
			}
			break;
		case 1:
			var list=quantity+giftDetailInfo[typeId].description+giftDetailInfo[typeId].name;
			var totalUsercp=quantity*giftDetailInfo[typeId].usercp;
			var targetRoseName = data.nickname;
			var content='<div class="gift_nopay"><p class="content success"><span class="tred">'+targetRoseName+'</span>已收到您送出的<span class="tred">'+list+'</span>，对方的魅力值因你而增长<span class="tred">'+totalUsercp+'</span>，一段浪漫的感情就从此开启了！</p>';
			function giftSendSuccessCallback1(){
				var giftPayDialog = art.dialog.list['giftPay'];
				if(giftPayDialog){
					giftPayDialog.close();
				}
				if(payFrom!=1){
					window.location.reload();
				}
			}
			art.dialog({
				title:'赠送成功',
				lock:true,
				opacity:0.3,
				fixed: true,
				padding:'0px 0px',
				content:content,
				ok:true,
				close:giftSendSuccessCallback1
			});
			var payDialogX = art.dialog.list[dialogId];
			if(payDialogX){
				payDialogX.close();
			}
			if(callback){
				callback.call(callback,1);
			}
			break;
		case 2:
			art.dialog({
				title:'支付',
				id:'giftPay',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:'0px 0px',
				content:data.data,
				close:function(){
					if(sendGiftDialog){
						sendGiftDialog.show();
					}
					return true;
				}
			}).show();
			break;
		case 3:
			var bussinessId=data.busId;
			ZAOption.giftPay.roseBusId=bussinessId;
			ZAOption.giftPay.roseMemberId = memberId;
			ZAOption.giftPay.roseTypeId = typeId;
			ZAOption.giftPay.roseQuantity = quantity;
			
			$.ajax({
				type:"POST",
				dataType: "json",
				async:false,
				url: "http://i0.zastatic.com/personal/createTotalRechargeOrder.jsps",
				data: {"otherproductId":10,"subjectType":"zheanaiMessenger","bizNo":"000004","bussinessId":bussinessId,"roseFrom":data.roseFrom},
				success: function(data){
					switch(data.code){
					case 3://没有余额
						//换成是支付弹窗
						$.ajax({
							type:"POST",
							dataType: "json",
							async:false,
							url: "http://i0.zastatic.com/payment/createPayOrder.jsps",
							data: {"subjectType":"zheanaiMessenger","productId":10,"busId":bussinessId,"showType":2,"templatePay":1,"roseFrom":data.roseFrom},
							success:function(paycenterData){
								if(!paycenterData){
									ZA.msgTip("未知错误，请稍后重试");
									return;
								}
								art.dialog({
									id: 'newpayBox',
									title:"支付",
									padding:'0px',
									fixed:false,
									lock:true,
									opacity:0.5,
									content: paycenterData.data
								});
							},error:function(xmlHttpRequest, textStatus, errorThrown){
								ZA.msgTip("加载出错");
								return;
							}
						});
						break;
					case 4://部分余额
						//换成是支付弹窗
						$.ajax({
							type:"POST",
							dataType: "json",
							async:false,
							url: "http://i0.zastatic.com/payment/createPayOrder.jsps",
							data: {"subjectType":"zheanaiMessenger","productId":data.productId,"busId":data.busId,"showType":"1","templatePay":1, "totalBalance":data.totalBalance,"roseFrom":data.roseFrom},
							success:function(paycenterData){
								if(!paycenterData){
									ZA.msgTip("未知错误，请稍后重试");
									return;
								}
								art.dialog({
									id: 'newpayBox',
									title:"支付",
									padding:'0px',
									fixed:false,
									lock:true,
									opacity:0.5,
									content: paycenterData.data
								});
							},error:function(xmlHttpRequest, textStatus, errorThrown){
								ZA.msgTip("加载出错");
								return;
							}
						});
						break;
					default :
						return;
					}
				},error:function(xmlHttpRequest, textStatus, errorThrown){
					art.dialog({
						title:"提示",
						lock:true,
						opacity:0.3,
						content:"加载失败，请重试！"
					});
				}
			});
			break;	
		case 4:
			var sendGiftDialog = art.dialog.list['sendGift'];
			var list=quantity+giftDetailInfo[typeId].description+giftDetailInfo[typeId].name;
			var totalUsercp=quantity*giftDetailInfo[typeId].usercp;
			var targetRoseName = data.nickname;
			
			//var content='<div class="gift_nopay"><p class="content success"><span class="tred">'+targetRoseName+'</span>已收到您送出的<span class="tred">'+list+'</span>，对方的魅力值因你而增长<span class="tred">'+totalUsercp+'</span>，一段浪漫的感情就从此开启了！</p><p class="tip">共消费珍爱币：'+data.totalNeedPayCoin+'个，还剩余珍爱币：'+data.zhenaicoinLeave+'个</p>';
			function giftSendSuccessCallback4(){
				
				var giftPayDialog = art.dialog.list['giftPay'];
				if(giftPayDialog){
					giftPayDialog.close();
				}
				if(payFrom!=1){
					window.location.reload();
				}
			}
			var createGiftChargedHtml = function(coinNum){
			   var innerHtml = '';
			   //提示充值珍爱币
			   //if(coinNum <=0){
			   //  innerHtml = '<div class="guidepayBox">'+
				//			  '<h3>轻松充值，送礼畅通无阻</h3>'+
				//			  '<ul class="clearfix">'+
				//				  '<li>充值数量：<input type="radio" name="coin" id="coin1" value="10" checked><label for="coin1">10个</label></li>'+
				//				  '<li><input type="radio" name="coin" id="coin2" value="30"><label for="coin2" >30个</label></li>'+
				//				  '<li><input type="radio" name="coin" id="coin3" value="50"><label for="coin3" >50个</label></li>'+
				//				  '<li><input class="coinOther" type="radio" name="coin" id="coin4" value="-1"><label for="coin4">其他</label><input class="coin_num" type="text" onfocus="ZAOption.giftPayFocusCoin(this)" onblur="ZAOption.giftPayBlurCoin(this)" onkeyup="ZAOption.giftPayKeyupCoin(this)" value="请输入整数">个</li>'+
				//			  '</ul>'+
				//			  '</div>'+
				//			  '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.giftPayOkBtn()" class="btn_orange_L pay_now">立即充值</a><a  href="javascript:void(0)" onclick="ZAOption.giftPayCancelBtn('+payFrom+');" class="btn_gray_L">取消</a></p>'+
				//		      '<input type="hidden" class="orderSrc" value="36"/>';
			   //}else{
			   //  innerHtml = '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">确定</a></p>';
			   //}
			   innerHtml = '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">确定</a></p>';
			   return innerHtml;
			};
			var content='<div id="giftNoPay" class="gift_nopay">'+
							'<p class="content success"><span class="tred">'+targetRoseName+'</span>已收到你送出的<span class="tred">'+list+'</span>，对方的魅力值因你而增加<span class="tred">'+totalUsercp+'</span>，一段浪漫的感情就从此开启了！</p>'+
							'<p class="tip">共消费珍爱币：<strong class="tred">'+data.totalNeedPayCoin+'</strong>个，还剩余珍爱币：<strong class="tred">'+data.zhenaicoinLeave+'</strong>个</p>'+
							 createGiftChargedHtml(data.zhenaicoinLeave)+
						'</div>';
			seajs.use("http://images.zastatic.com//zhenai3/zhenai2012/css/layer/wish_gift.css?v=20130705", function() {
			    art.dialog({
				    title:'赠送成功',
				    lock:true,
				    fixed: true,
				    opacity:0.3,
				    id:'sendgiftsuccess',
				    padding:'0px 0px',
				    content:content
				    //close:giftSendSuccessCallback4
			    });
			});
			
			var payDialogX = art.dialog.list[dialogId];
			if(payDialogX){
				payDialogX.close();
			}
			if(callback){
				callback.call(callback,1);
			}
			
			break;
		case 5:
			var content=data.data;
			function giftSendSuccessCallback5(){
				var giftPayDialog = art.dialog.list['new_yearBox'];
				if(giftPayDialog){
					giftPayDialog.close();
				}
			//	window.location.href=currentUrl;
				window.location.reload();
			}
			art.dialog({
				title:'赠送成功',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:'0px 0px',
				content:content,
				id:'thanksForGift',
				ok:null,
				close:true
			});
			if(callback){
				callback.call(callback,1);
			}
			break;

		case 6:
			art.dialog({
				title:'温馨提示 ',
				lock:true,
				opacity:0.3,
				content:'<p style="font-size:14px;line-height:30px;">好可惜啊！您未验证手机号，不能送免费礼物哦！</p>',
				okVal:'现在就去验证',
				ok:function(){window.open("http://profile.zhenai.com/profile/validateContactPre.jsps");},
				padding:'10px'
			});
			break;
		case 7:
		art.dialog({
			id: 'upZhenAiTongDialogId',
			title:'温馨提示 ',
			lock:true,
			fixed: true,
			opacity:0.3,
			padding:'0px 0px',
			content:'<div class="gift_nopay"><p class="content fail">'+data.msg+'<br></br></p> <p class="gift_nopay_bot"> <a href="http://profile.zhenai.com/payment/index.jsps" target="_blank" id="upgradeNow_00" class="btn_orange_M">立即升级</a> <a id="upgradeNow_01" href="http://profile.zhenai.com/payment/index.jsps" target="_blank">了解更多珍爱通会员特权</a></p></div>'
		});
		$("#upgradeNow_00,#upgradeNow_01").live("click",function(){
			$.dialog.list['upZhenAiTongDialogId'] && $.dialog.list['upZhenAiTongDialogId'].close();
		});
		break;
		case 8:
			art.dialog({
			id: 'upZhenXinDialogId',
				title:'温馨提示 ',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:'0px 0px',
			content:'<div class="gift_nopay"><p class="content fail"> '+data.msg+'</p> <p class="gift_nopay_bot"> <a href="http://profile.zhenai.com/zhenXin/zhenXinIndex.jsps" target="_blank" id="upgradeNow_10" class="btn_orange_M">立即升级</a> <a id="upgradeNow_11" href="http://profile.zhenai.com/zhenXin/zhenXinIndex.jsps" target="_blank">了解更多珍心会员特权</a></p></div>'
			});
			$("#upgradeNow_10,#upgradeNow_11").live("click",function(){
				$.dialog.list['upZhenXinDialogId'] && $.dialog.list['upZhenXinDialogId'].close();
			}) 
			break;
		case 9:
			var sendGiftDialog = art.dialog.list['sendGift'];
			var list=quantity+giftDetailInfo[typeId].description+giftDetailInfo[typeId].name;
			var totalUsercp=quantity*giftDetailInfo[typeId].usercp;
			var targetRoseName = data.nickname;
			var giftEnter = data.giftEnter;
			//判断弹窗关闭事件是否为点击X按钮，如果是的话则为true，不是的话则为false
			var closeTag = true;
			
			//老弾层
			//var temphtml = '<div id="giftPayMothed" class="gift_pay_method" style="display:block;"><div class="method2"><p class="title"></a>使用珍爱币，送礼物</p><p class="tip_text2">礼物需花费<strong class="tred">'+data.totalNeedPayCoin+
			//		'</strong>个珍爱币，您仅剩<strong class="tred">'+data.zhenaicoinBalance+'</strong>个。</p><div class=\"pay_list\"><a  class="pay_and_send2" href="javascript:void(0);" title="充值送礼"></a></div><div id="jcCoinTip" class="coin_tip22" style="display:none;"><span class="inner"></span><span class="outer"></span><p>珍爱币是珍爱网的通用虚拟货币，可购买信使、礼物、告白等在线服务，便捷！</p>'+
			//		'<p class="price">1个珍爱币=2元</p></div></div></div>';					
			
			var temphtml ='<div id="lwyhPop" style="display:none;"><div class="topLiwuBg"><a href="javascript:;" id="close_0" class="liwuPop_guanbi">×</a></div><p class="lwtxts">您是否向<span>'+targetRoseName+'</span>赠送<span>'+list+'</span>?</p><div class="greyBox"><p>需消费珍爱币：<span>'+data.totalNeedPayCoin+'</span>个，现在剩余珍爱币：<span>'+data.zhenaicoinBalance+'</span>个</p></div><div class="liyhbtn"><a href="javascript:;" id="pay_and_send2" class="btn_orange_M">确定</a><a href="javascript:;" id="close_1" class="btn_blue_M">取消</a></div></div>'
			
			var $tempHtml = $(temphtml);
			$tempHtml.find("#pay_and_send2").click(function(){
				ZAOption.openGift(memberId,typeId,quantity,batchInfo,callback,skipTicket,related,giftEnter);
				art.dialog({id: 'lwyhPop'}).close();
			});
			$tempHtml.find("#close_1,#close_0").click(function(){
				art.dialog({id: 'lwyhPop'}).close();
			});

			art.dialog({
				title:false,
				padding:'0px',
				fixed:true,
				lock:true,
				opacity:0.5,
				content: $tempHtml[0],
				id: 'lwyhPop', 
				init:function(){noRuleInit();}
            });
			
			/**
			 * payByCoinFlag表示用户是否要被提示扣除珍爱币，如果只是要提示则取值为false，如果不提示则取值为true
			 */
			/* art.dialog({
				title:'付费方式',
				id: 'gifthisun1',
				lock:true,
				opacity:0.3,
				content:$tempHtml[0],
				//ok:function(){closeTag=false;ZAOption.giftPay(memberId,typeId,quantity,batchInfo,callback,skipTicket,related,true,giftEnter);},
				close:function()
				{

					//以前的提示错过弾层，现在暂时隐去
					if(closeTag==true)
					{
						this.hide();
						var content='<div class="gift_nopay"><p class="content fail"><span class="tred">'+targetRoseName+'</span>收不到你想送出的<span class="tred">'+list+'</span>，无法知道你的心意，缘分可能就此错过了哦！</p>';
						+'<br/></div>'
						art.dialog({
						id: 'gifthisun2',
						title:'支付失败',
						lock:true,
						fixed: true,
						opacity:0.3,
						padding:'0px 0px',
						content:content,
						ok:true,
						okVal:'知道了'
						}).show(); 
					} 
				},
				padding:'20px'
			}); */
			
		    if(callback){callback.call(callback,3);}
			break;
		case 10:
			ZA.msgTip('哇，你送出的礼物太贵重了！<br />送礼系统被你吓傻了，送不出这份厚礼了！');
			break;
		case 11:
            seajs.use("zhenaiPay",function(zhenaiPay){
                var orderAmount = 0;
				var isZhenxinPlayer = data.isZhenxinPlayer;
                var dom = $(data.data).on("click",".pay_and_send",function(){
                
                    orderAmount = $("#giftPayMothed").find(".method1 li input[type=radio]:checked").val();
                    art.dialog.list['giftPayMothed'].close();

					if(isZhenxinPlayer && orderAmount <= 50){
						appendZhenxin(orderAmount);
						stat(2003,4,0,1);//珍爱币导流弹层
						setTimeout(function(){
							if($("#confirmBuy").length){
								$("#confirmBuy").click(function(){
									var type = $(".select").attr("type");
									art.dialog({id:'buyService'}).close();
									if(type == 2){
										if(isZhenxinPlayer && orderAmount <= 50){
											var giftCount = 30;
											zhenaiPay.pay({
												productId:114,
												paymentChannel:29,
												orderSrc:4,
												giftCount:giftCount
											});
										}
									}else{
										zhenaiPay.pay({
											productId:9,
											zhenaiCoinOrderAmount:orderAmount,
											zhenaiCoinOrderSrc:2,
											busId:data.busId,
											succCallback:function(){
												var list=quantity+giftDetailInfo[typeId].description+giftDetailInfo[typeId].name;
												var totalUsercp=quantity*giftDetailInfo[typeId].usercp;
												var targetRoseName = data.nickname;
												
												var content='<div id="giftNoPay" class="gift_nopay">'+
																  '<p class="content success"><span class="tred">'+targetRoseName+'</span>已收到你送出的<span class="tred">'+list+'</span>，对方的魅力值因你而增加<span class="tred">'+totalUsercp+'</span>，一段浪漫的感情就从此开启了！</p>'+
																  '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">确定</a></p>'+
																  '</div>';
																  
												seajs.use("http://images.zastatic.com//zhenai3/zhenai2012/css/layer/wish_gift.css?v=20130705", function() {
													art.dialog({
														title:'充值送礼成功',
														lock:true,
														fixed: true,
														opacity:0.3,
														id:'sendgiftsuccess',
														padding:'0px 0px',
														content:content
													});
												});
												return false;
											}
										});
									}
								});
							}else{
								setTimeout(arguments.callee,100);
							}
						},0);
					}else{
						zhenaiPay.pay({
                        productId:9,
                        zhenaiCoinOrderAmount:orderAmount,
                        zhenaiCoinOrderSrc:2,
                        busId:data.busId,
                        succCallback:function(){
                            var list=quantity+giftDetailInfo[typeId].description+giftDetailInfo[typeId].name;
                            var totalUsercp=quantity*giftDetailInfo[typeId].usercp;
                            var targetRoseName = data.nickname;
                            
                            var content='<div id="giftNoPay" class="gift_nopay">'+
                                              '<p class="content success"><span class="tred">'+targetRoseName+'</span>已收到你送出的<span class="tred">'+list+'</span>，对方的魅力值因你而增加<span class="tred">'+totalUsercp+'</span>，一段浪漫的感情就从此开启了！</p>'+
                                              '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">确定</a></p>'+
                                              '</div>';
                                              
                            seajs.use("http://images.zastatic.com//zhenai3/zhenai2012/css/layer/wish_gift.css?v=20130705", function() {
                                art.dialog({
                                    title:'充值送礼成功',
                                    lock:true,
                                    fixed: true,
                                    opacity:0.3,
                                    id:'sendgiftsuccess',
                                    padding:'0px 0px',
                                    content:content
                                });
                            });
                            return false;
                        }
						});
					}
                    
                    
                });
				
                art.dialog({
                    title:'赠送礼物-充值',
                    id:'giftPayMothed',
                    lock:true,
                    fixed: true,
                    opacity:0.3,
                    padding:'0px 0px',
                    content:dom[0]
                }).show();
            
            });
			break;
		case 12:
		    var status = data.status;
		    if(callback && status == 1){
				callback.call(callback,2);
			}
		    break;
		case 13:
		    var targetRoseName = data.nickname;
		    var list=quantity+giftDetailInfo[typeId].description+giftDetailInfo[typeId].name;
			var contentHtml = '<div class="gift_success2" id="jcGiftSuccess" style="display:block;"><h3>你可以</h3><div class="pink_box"><div class="left_wrap"><p>你给<span class="c_f60">' + targetRoseName + '</span>赠送了<span class="c_f60">' + list + '</span>，免费发送短信提醒Ta及时查收！告别苦等，缘分尽在掌握中！</p><a class="btn_pink_L" href="javascript:void(0);" onclick="ZAOption.sendGiftMsg(' + data.objMemberId + ');">短信告诉TA</a></div><div class="right_wrap"><p>你可以向 <span class="c_f60">' + targetRoseName + '</span> 发出请求，如果对方同意，你们就可以互相查看身份证信息，包括真实姓名、出生年份和身份证照片。</p><a class="btn_pink_L" href="javascript:void(0);" onclick="ZAOption.lookCardBefore(' + data.objMemberId + ');">查看TA的身份证信息</a></div></div></div>';
			seajs.use("http://images.zastatic.com/zhenai3/zhenai2012/css/layer/pop_gift.css?v=20141223", function() {
			    art.dialog({
					title:'礼物已发送！',
					lock:true,
					fixed: true,
					opacity:0.3,
					id:'jcGiftSuccess',
					padding:'0px 0px',
					content:contentHtml
				});
			});
		    break;
		case 15:
	      ZA.msgTip(data.msg);
		  break;
		}
	});
		}
	});
	
	
	
  }
  
  ZAOption.zhenXinTip = function(targetRoseName, list, objMemberId) {
	  var giftPayDialog = art.dialog.list['sendgiftsuccess'];
	  if (giftPayDialog) {
	      giftPayDialog.close();
	  }
	  
	  var contentHtml = '<div class="gift_success2" id="jcGiftSuccess" style="display:block;"><h3>你可以</h3><div class="pink_box"><div class="left_wrap"><p>你给<span class="c_f60">' + targetRoseName + '</span>赠送了<span class="c_f60">' + list + '</span>，使用1个珍爱币，发送短信提醒Ta及时查收，一有回音马上通知你！</p><a class="btn_pink_L" href="javascript:void(0);" onclick="ZAOption.sendGiftMsg(' + objMemberId + ');">短信告诉TA</a></div></div></div>';
	  seajs.use("http://images.zastatic.com/zhenai3/zhenai2012/css/layer/pop_gift.css?v=20140310", function() {
	  	  art.dialog({
	  	  	  title:'礼物已发送！',
	  	  	  lock:true,
	  	  	  fixed: true,
	  	  	  opacity:0.3,
	  	  	  id:'jcGiftSuccess',
	  	  	  padding:'0px 0px',
	  	  	  content:contentHtml
	  	  });
	  });
  }
  
  ZAOption.openYearZhenXin = function() {
      var giftPayDialog = art.dialog.list['jcGiftSuccess'];
	  if (giftPayDialog) {
	      giftPayDialog.close();
	  }
      ZAPay.zhenXinPay(22, 7, false, false, 1);
	  return false;
  }
  
  ZAOption.lookCardBefore = function(objMemberId) {
      var giftPayDialog = art.dialog.list['jcGiftSuccess'];
	  if (giftPayDialog) {
	      giftPayDialog.close();
	  }
	  ZAOption.lookCard(objMemberId);
	  return false;
  }
  
  ZAOption.sendGiftMsg = function(objMemberId) {
      var giftPayDialog = art.dialog.list['jcGiftSuccess'];
	  if (giftPayDialog) {
	      giftPayDialog.close();
	  }

	  $.ajax({
	   	  type:"POST",
	   	  dataType: "json",
	   	  async:false,
	   	  url: "http://i0.zastatic.com/commons/sendGiftXinShi.jsps",
	   	  data: {"objMemberId":objMemberId},
	   	  success:function(data){
	   	  	if(!data){
	   	  		ZA.msgTip("未知错误，请稍后重试");
	   	  		return;
	   	  	}
			if (data.status == 0) {
			    ZA.msgTip("短信提醒发送成功！");
			} else if (data.status == 1) {
			    ZA.msgTip("您今天已给该用户发送过2次短信提醒，请明天再发！");
			} else if (data.status == 2) {
			    ZA.msgTip("该用户今天已收到3条短信提醒，请明天再发！");
			} else if (data.status == 3) {
			    ZA.msgTip("该用户设置了短信免打扰！");
			} else if (data.status == 4) {
			    ZA.msgTip("该用户对你设置了短信屏蔽！");
			} else if (data.status == 5) {
			    ZATemplatePay.zhenaiCoinTemplatePay({"orderAmount":10,"orderSrc":8,"templatePay":1});
			} else if (data.status == 6) {
			    ZA.msgTip("对方未验证手机号，不能发送短信！");
			} else if (data.status == 7) {
			    ZA.msgTip("对方不存在！");
			} else {
			    ZA.msgTip("短信提醒发送失败！");
			}
	   	  },error:function(xmlHttpRequest, textStatus, errorThrown){
	   	  	ZA.msgTip("加载出错");
	   	  	return;
	   	  }
	  });
  }
  
  ZAOption.openGift = function(memberId,typeId,quantity,batchInfo,callback,skipTicket,related,giftEnter){

	var log1 = art.dialog.list['gifthisun1'];
	if(log1) log1.close();
	var log2 = art.dialog.list['gifthisun2'];
	if(log2) log2.close();
    closeTag=false;
	ZAOption.giftPay(memberId,typeId,quantity,batchInfo,callback,skipTicket,related,true,giftEnter);
  }
   /*
   *心愿
   *memberId  会员 
   */
  ZAOption.giftWish = function(memberId,callback){
	if(!ZAOption.login()){
		return;
	}

	ZAOption.ajax("http://album.zhenai.com/commons/showGiftWish.jsps",{"memberId":memberId},function(data){
		if(!data){return}
		switch(data.code){
		case 0:
			ZA.warnTip(data.msg);
			break;
		case 1:
			if(callback){
				callback.call();
			}
			//由于页面使用太多flash关闭会很卡，所以。。.
			var giftWishDialog = art.dialog.list['giftWish'];
			if(giftWishDialog){
				giftWishDialog.content(data.data);
				giftWishDialog.show();
				return;
			}
			art.dialog({
				title:'TA最近的心愿',
				id:'giftWish',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:'0px 0px',
				content:data.data,
				close:function(){
					this.hide();
					return false;
				}
			}).show();
			break;
		case 2:
			break;
		}
		
	});	
	
  },
  
  /**
    *我也想要
	*
	*/
  ZAOption.addGiftWish = function(typeId,callback){
	callback = callback || null;
	ZAOption.ajax("http://album.zhenai.com/commons/addGiftWish.jsps",{"roseType.typeId":typeId},function(data){
		if(!data){return}
		switch(data.code){
		case 0:
			ZA.warnTip(data.msg);
			break;
		case 1:
			if(callback){
				callback.call();
			}
			art.dialog({
				title:'已加入我的心愿小屋',
				id:'addGiftWish',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:'0px 0px',
				content:data.data
			}).show();
			break;
		case 2:
			break;
		}
		
	});	
  },
  
   /*
   *投诉
   */
  ZAOption.complaint = function(memberId){
	if(!ZAOption.login()){
		return;
	}
	ZAOption.complaintView(memberId,'');
	

  },
  
  ZAOption.complaintView = function(memberId,nickName){
	art.dialog.open("http://profile.zhenai.com/commons/complaintView.jsps?memberId="+memberId,{
		id:"complaint",
		height:"530px",
		width:"750px",
		lock:true,
		fixed: true,
		opacity:0.3,
		title:'投诉<span class="gift_title_name">'+nickName+'</span>'
	},false);
  },
  
  /**
	*问问
	* optionType  0为默认，1为简单
	*/
  ZAOption.question = function(memberId,skipPhoto,optionType){
	if(!ZAOption.login()){
		return;
	}

	if(!skipPhoto){
		skipPhoto=0;
	}
	if(!optionType){
		optionType=0;
	}
	
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			seajs.use("popmod.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/popmod.css*/,function(){

			ZAOption.ajax("http://profile.zhenai.com/commons/checkQuestion.jsps",{"memberId":memberId,"skipPhoto":skipPhoto,"optionType":optionType}, function(data){
				if(!data){return;}
				switch(data.code){
				case 0:
					ZA.msgTip(data.msg);
					break;
				case 1:
					art.dialog({
						id:"question",
						title:'想向<span class="gift_title_name">'+data.msg+'</span>问点儿什么',
						lock:true,
						fixed: true,
						opacity:0.3,
						padding:'0px 0px',
						content:data.data
					});
					break;
				case 3:
					ZA.msgTip("你今天已经向对方发10个问问了，休息一下，明儿再来吧。");
					break;
				case 20:
					ZAOption.validMobile(ZAOption.ModelConfig.question,{"memberId":memberId,"skipPhoto":skipPhoto,"nickName":data.msg},function(){
						ZAOption.question(memberId,skipPhoto,optionType);
					});
					break;
				case 21:
					ZAOption.uploadPhoto(ZAOption.ModelConfig.question,{"memberId":memberId,"skipPhoto":skipPhoto,"nickName":data.msg},function(){
						ZAOption.question(memberId,1,optionType);
					});
					break;
				
				}
			});

			});
			return false;
		}
	});
	
	
  },
  
  //保存身份证信息
  ZAOption.IdCarchCache = {};
  /**
	*查看身份证信息
	*memberid  会员ID
	*keep     是否跳过拒绝，再次请求
	*/
  ZAOption.lookCard = function(memberId,keep,sendIdCard,optionType){
	if(!ZAOption.login()){
		return;
	}
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			if(!keep){
		keep=0;
	}
	if(!sendIdCard){
		sendIdCard=0;
	}
	if(!optionType){
		optionType=0;
	}
	var idCardInfo = ZAOption.IdCarchCache[memberId];
	if(idCardInfo){
		art.dialog({
			id:"lookCardDetail",
			title:"身份证信息",
			lock:true,
			fixed: true,
			opacity:0.3,
			content:idCardInfo
		}).show();
		return;
	}

	seajs.use(["approve_idpup.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/approve_idpup.css*/,"approve_info.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/approve_info.css*/],function(){

	ZAOption.ajax("http://profile.zhenai.com/commons/checkLookCard.jsps",{"memberId":memberId,"keep":keep,"sendIdCard":sendIdCard},function(data){
		if(!data){return;}
		switch(data.code){
		case 0:
			ZA.msgTip(data.msg);
			break;
		case 1:
			art.dialog({
				id:"lookCardView",
				title:'查看<span class="torange">'+data.nickName+'</span>的身份证信息',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
			break;
		case 2:
			ZAOption.IdCarchCache[memberId]=data.data;
			art.dialog({
				id:"lookCardDetail",
				title:'查看<span class="torange">'+data.nickName+'</span>的身份证信息',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
			break;
		case 3:
		case 5:
			art.dialog({
				id:"lookCard",
				title:'查看<span class="torange">'+data.nickName+'</span>的身份证信息',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
			break;
		case 6:
			//ZA.msgTip(data.msg);
			//ZA.confirm(data.msg,function(){
			//	ZAOption.lookCard(memberId,1);
			//})
			art.dialog({
				id:"lookCard",
				title:'查看<span class="torange">'+data.nickName+'</span>的身份证信息',
				lock:true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
		    break;
		case 7:
			art.dialog({
				id:"lookCard",
				title:'查看<span class="torange">'+data.nickName+'</span>的身份认证信息',
				lock:true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
		    break;
		case 8:
			art.dialog({
				id:"lookCardView",
				title:'查看<span class="torange">'+data.nickName+'</span>的身份认证信息',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
			break;
		case 20:
			ZAOption.validMobile(ZAOption.ModelConfig.lookCard,{"memberId":memberId,"skipPhoto":0,"nickName":data.msg},function(){
				ZAOption.lookCard(memberId,optionType);
			});
			break;
		}
	});
   
    });
		}
	});
	
  },
  
   /**
	*关注
	*/
  ZAOption.attention = function(memberId,callback){
	if(!ZAOption.login()){
		return;
	}

	ZAOption.ajax("http://profile.zhenai.com/commons/attention.jsps",{"memberId":memberId},function(data){
		if(!data){return;}
		switch(data.code){
		case 0:
			ZA.msgTip(data.msg);
			break;
		case 1:
			ZA.friendTip('已关注^_^');
			if(callback){
				callback.call();
			}
			break;
		case 2:
			ZA.friendTip('已关注^_^');
			if(callback){
				callback.call();
			}
			break;
		case 20:
			ZAOption.validMobile(ZAOption.ModelConfig.attention,{"memberId":memberId,"nickName":data.msg},function(){
				ZAOption.attention(memberId,callback);
			});
			break;
		
		}
	});
  },
  
  /**
	*联系请求
	*/
  ZAOption.contact = function(memberId,skipPhoto,optionType){
	if(!ZAOption.login()){
		return;
	}
	
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			if(!skipPhoto){
				skipPhoto=0;
			}
			if(!optionType){
				optionType=0;
			}
			seajs.use("popmod.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/popmod.css*/,function(){
			ZAOption.ajax("http://profile.zhenai.com/commons/contact.jsps",{"memberId":memberId,"skipPhoto":skipPhoto,"optionType":optionType},function(data){
				if(!data){return;}

				function freeMailBack(){
					seajs.use(["matchmaker_c.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/matchmaker_c.css*/,"artDialog"],function(){
						var tempHtml = $('<div class="matchmaker_lead_box"><p>请耐心等待红娘电话回访！<p>您也可以直接拨打红娘热线：<span class="tel">4001-520-520</span></p><div class="act textCenter"><a class="btn_pink_L" href="http://profile.zhenai.com/lovestory/indexhnznone.jsps?f=profile"  target="_blank">了解红娘服务</a></div>');
						var dialog = art.dialog({
							title:"委托红娘发送成功",
							lock:true,
							opacity:0.3,
							padding:0,
							content:tempHtml[0]
						});
						tempHtml.find(".btn_pink_L").click(function(){
							dialog.close();
						});
					});
				}
				function showConfirm() {
					seajs.use(["matchmaker_c.css"/*tpa=http://images.zastatic.com/zhenai3/zhenai2012/css/layer/matchmaker_c.css*/,"artDialog"],function(){
						var tempHtml = $('<div id="jcMatchmakerDelegate" class="matchmaker_delegate" style="display: block;"><p>我要委托红娘牵线搭桥，助我早日和对方步入婚姻殿堂！<br /><a class="about" href="http://profile.zhenai.com/lovestory/indexhnznone.jsps" target="_blank">了解珍爱通红娘服务</a></p><div class="act textCenter"><a id="weituo" class="btn_pink_L" href="javascript:;">确定委托</a></div>');
						var dialog = art.dialog({
							title:"委托红娘",
							lock:true,
							opacity:0.3,
							padding:0,
							content:tempHtml[0]
						});
						tempHtml.find("#weituo").click(function(){
							dialog.close();
							ZAOption.contact(memberId,skipPhoto,2);
						});
					});
				}
				switch(data.code){
				case 0:
					ZA.msgTip(data.msg);
					break;
				case 1:
					if(optionType==1){
						ZA.friendTip(data.msg);
						return;
					}else if(optionType==2){
						freeMailBack();
						return;
					}else if(optionType==3){
						showConfirm();
						return;
					}
					art.dialog({
						title:"联系请求已发送",
						lock:true,
						opacity:0.3,
						padding:0,
						content:data.data
					});
					break;
				case 2:
					if(optionType===2 || optionType===3){
						freeMailBack();
						return;
					}
					ZA.msgTip("你已经向对方发送过联系请求了，请等待对方回应^-^");
					break;
				case 3:
					ZA.msgTip(data.msg);
					break;
				case 20:
					ZAOption.validMobile(ZAOption.ModelConfig.contact,{"memberId":memberId,"skipPhoto":skipPhoto,"nickName":data.msg},function(){
						ZAOption.contact(memberId,skipPhoto,optionType);
					});
					break;
				case 21:
					ZAOption.uploadPhoto(ZAOption.ModelConfig.contact,{"memberId":memberId,"skipPhoto":skipPhoto,"nickName":data.msg},function(){
						ZAOption.contact(memberId,1,optionType);
					});
			
				
				}
			});
			});
			return false;
		}
	});
	
	
  },
  
  /**
   *申请红娘来电
   */
  ZAOption.callMe = function(memberId,callback){
	if(!ZAOption.login()){
		return;
	}

	ZAOption.ajax("http://profile.zhenai.com/commons/selfApplyCallMe.jsps",{"memberId":memberId},function(data){
		if(!data){return;}
		switch(data.code){
		case 0:
			ZA.msgTip(data.msg);
			break;
		case 1:
			ZA.msgTip(data.msg);
			if(callback){
				callback.call();
			}
			break;
		}
	  }
	);
	
  },
  
  ZAOption.chat = function(memberId, objectId) {
      if (!ZAOption.login()) {
	      return;
	  }

	  var result = $.ajax({
			url:'http://i0.zastatic.com/v2/profile/caninteractRestrict.do',
			data:{'memberId':objectId},
			async: false
		}).responseText;
		var data = $.parseJSON(result);
	  
		if(data.code == 0){
			var hide = data.msg == '抱歉！你已隐藏资料，所以无法发起互动！';
			if(hide){
				art.dialog({
					title:'提示',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'公开我的资料',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("您的资料已开启!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "操作失败，请重新尝试！");
			}   
			return false;
		}else{
			 ZAOption.asyncAjax("http://i0.zastatic.com/im/checkChat.jsps", {"objectid" : objectId}, function(data) {
				  if (!data) {
					  return;
				  }
				  switch(data.code) {
				  case 0:
					  ZA.msgTip('您当前不可聊天哦');
					  break;
				  case 1:
					  window.open('http://profile.zhenai.com/zhenaiMail/zhenaiMail.jsps?source=41&openFormal=true&tipType=3&objectId='+objectId, '_blank');
					  break;
				  case 2:
					  ZA.msgTip('Ta不在线，在线用户才能发起聊天，先给Ta发邮件留言吧！');
					  break;
				  case 3:
					  openChat(memberId, objectId, '', null);
					  break;
				  }
			  });
			return false;
		}
     
  },
  
  /**
    *求真相
	*/
  ZAOption.getTruth = function(memberId,callback){
	if(!ZAOption.login()){
		return;
	}

	ZAOption.ajax("http://album.zhenai.com/personal/rePhoto.jsps",{"objectId":memberId,truth:1},function(data){
		if(data.status==2){
			ZA.msgTip('额，此路不通，你已被对方屏蔽了 ^_^');
		}else if(data.status==1){
			if(callback){
				callback.call();
			}
			ZA.friendTip('请求已经Biu Biu Biu的发出去了哟，耐心等待哦 ^_^');
		}else{
			ZA.msgTip('你今天已向TA求过真相啦，耐心等待嘛 ^_^');
		}
	});
  }
  
ZAOption.global={
     hasValidMoblie : false,
	 hasDefaultPhoto: false,
	 uploadPhotoInit : false,
	 validMobileSource : 0
};

ZAOption.ModelConfig = {
	"defalut":0,
	"sendLeer":1,
	"question":2,
	"sendCard":3,
	"attention":4,
	"sendGift":5,
	"sendGiftWish":6,
	"contact":7,
	"praise":8,
	"lookCard":9,
	"complaint":10,
	"validMobile":11,
	"uploadPhoto":11
};

window.ZAOption = $.ZAOption = ZAOption;
})($);


function stat(resourceId,accessPoint,sParam,isPV) {
  var ref=document.referrer;
  var url='http://cdnlog.zhenai.com/visit/?resourceId='+resourceId+'&accessPoint='+accessPoint+'&sParam='+sParam+'&isPV='+isPV+'&referer='+encodeURIComponent(ref?ref:'')+"&r="+Math.random();
  $.getScript(url);
};

