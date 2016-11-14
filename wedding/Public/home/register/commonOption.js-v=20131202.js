//Date:2012��12��17��  author:longshun
//Ҫ��jquery1.3.2,artDialog
;(function($){

/**
 *�䰮��������
 *
 */
var ZAOption = function(){
  //new ZAOption.fn._init();
};
//ZAOption.fn = ZAOption.prototype = {
  
  /**
    *��ʼ��
	*/
  ZAOption._init = function(){
	
  },
  
    /**
    *����Ajax����(֧�ֿ���)
	*/
  ZAOption.ajax = function(url,data,callback){
	$.ajax({ 
		type:"GET",
		dataType: "jsonp",			
		url: url, 
		data: data,
		success: callback,
		error:function(x1,x2,x3){
			ZA.warnTip('�����ˣ����Ժ�����^_^');
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
			ZA.warnTip('�����ˣ����Ժ�����^_^');
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
    *��¼
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
   *�ֻ�����֤
   *
   */
  ZAOption.validMobile = function(modelType,data,callback){
	callback = callback || null;
	if(!ZAOption.login()){
		return;
	}
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+objectId,function(data){
		if(data.code == 0){
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
			}   
			return false;
		}else{
			 var url = "http://register.zhenai.com/commons/validMobile.jsps";
				art.dialog.data("modelType",arguments);
				artDialog.data("callback",callback);
				var dialog = art.dialog.open(url,{
					id:"validMobile",
					title:"�ֻ�����֤",
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
   *�ϴ�������
   *
   */
  ZAOption.uploadPhoto = function(modelType,data,callback,objPhoto,objName,isClear){
	callback = callback || function(){
		ZA.friendTip("ͼƬ�ϴ��ɹ���");
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
		title:"�ϴ�������",
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
   *���ﲨ
   * skipPhoto 0Ϊ��·�������ռ��
   * callback  �ص�����
   * leerSource ���͵� 
   * optionType  0ΪĬ�ϣ�1Ϊ��
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
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
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
						title:'������<span class="gift_title_name">'+data.msg+'</span>˵���ʲô',
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
					ZA.msgTip("������Ѿ���Է���10���ﲨ�ˣ���Ϣһ�£����������ɡ�");
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
   *������Ƭ
   *memberId  ��Ա 
   *back �Ƿ�ظ�
   *callback  �ص�
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
				ZA.friendTip("������Ƭ�ɹ���");
				return;
			}
			art.dialog({
				id:"sendCard",
				title:"����"+data.msg+"��������Ƭ",
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
  
  //����Ĭ�ϲ���
  ZAOption.giftDefaultConfig = {
	title:"",//���ӱ���
	typeId:null,//ָ������
	related:"",//����
	callback:null,//�ص�,
	tabFlag:0, //Ĭ�����Ź�
	showDefalutSuccess:true,
	monthlyFreeGift:0,   //monthlyFreeGift 1 ������  0 δ����� 
	//tabShow:"1,1,1,1,0,1"  //Ĭ�ϲ���ʾ�������TAB
	tabShow:{hot:1,pear:1,floor:1,birthday:1,night:0,giftpackage:1}
  }
   /*
   *������
   *memberId	��Ա   
   * roseFrom '9'��ʾ����������Ѱ��2014���'99'��ʾ����������ʥ������
   */
  ZAOption.sendGift = function(memberId,config,roseFrom){
	if(!ZAOption.login()){
		return;
	}
	
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
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
					title:"������",
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
						//�ص�������
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
					//Bug��ʱ�������
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
  
     /*����ɹ�ȡ����ť��Ӧ�¼�*/
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
   *����ɹ���ֵ��ť��Ӧ�¼�
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
	if($(_this).val() == '����������'){
	   $(_this).val('');
	}
  }
  ZAOption.giftPayBlurCoin = function(_this){
	if($(_this).val() == ''){
	   $(_this).val('����������');
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
  *�رյ���
  */
  ZAOption.closeTipDialog = function(id){
    var payDialog = art.dialog.list[id];
	if(payDialog){payDialog.close();}
  }
  ZAOption.showBuyGiftPackageDialog = function(){
     $.dialog({
			title:'��ܰ��ʾ',
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
   *������
   *typeId����
   *quantity����
   *batchInfo�Ƿ񸽼�
   *skipTicket�Ƿ�ʹ���Ż�ȯ1Ϊ��ʹ�ã�0ʹ��
   *payByCoinFlag ���������Ƿ񵯴�ȷ�Ͽ�(�Ǳ���)
   *giftEnter  �������(�Ǳ���)   
   *                1 �� �ҵ�����-����յ���������ʾ��
   */
  ZAOption.giftPay = function(memberId,typeId,quantity,batchInfo,callback,skipTicket,related,payByCoinFlag,giftEnter,roseFrom){
	
	if(!ZAOption.login()){
		return;
	}

	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
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
	
	var payFrom = ZAOption.giftPay.from ; //0 Ĭ�� 1 �������Ĺػ�  2����ҳ�ػ�
	var dialogId= ZAOption.giftPay.dialogId ; // ֧��ǰ����id
	//����
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
			var content='<div class="gift_nopay"><p class="content success"><span class="tred">'+targetRoseName+'</span>���յ����ͳ���<span class="tred">'+list+'</span>���Է�������ֵ���������<span class="tred">'+totalUsercp+'</span>��һ�������ĸ���ʹӴ˿����ˣ�</p>';
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
				title:'���ͳɹ�',
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
				title:'֧��',
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
					case 3://û�����
						//������֧������
						$.ajax({
							type:"POST",
							dataType: "json",
							async:false,
							url: "http://i0.zastatic.com/payment/createPayOrder.jsps",
							data: {"subjectType":"zheanaiMessenger","productId":10,"busId":bussinessId,"showType":2,"templatePay":1,"roseFrom":data.roseFrom},
							success:function(paycenterData){
								if(!paycenterData){
									ZA.msgTip("δ֪�������Ժ�����");
									return;
								}
								art.dialog({
									id: 'newpayBox',
									title:"֧��",
									padding:'0px',
									fixed:false,
									lock:true,
									opacity:0.5,
									content: paycenterData.data
								});
							},error:function(xmlHttpRequest, textStatus, errorThrown){
								ZA.msgTip("���س���");
								return;
							}
						});
						break;
					case 4://�������
						//������֧������
						$.ajax({
							type:"POST",
							dataType: "json",
							async:false,
							url: "http://i0.zastatic.com/payment/createPayOrder.jsps",
							data: {"subjectType":"zheanaiMessenger","productId":data.productId,"busId":data.busId,"showType":"1","templatePay":1, "totalBalance":data.totalBalance,"roseFrom":data.roseFrom},
							success:function(paycenterData){
								if(!paycenterData){
									ZA.msgTip("δ֪�������Ժ�����");
									return;
								}
								art.dialog({
									id: 'newpayBox',
									title:"֧��",
									padding:'0px',
									fixed:false,
									lock:true,
									opacity:0.5,
									content: paycenterData.data
								});
							},error:function(xmlHttpRequest, textStatus, errorThrown){
								ZA.msgTip("���س���");
								return;
							}
						});
						break;
					default :
						return;
					}
				},error:function(xmlHttpRequest, textStatus, errorThrown){
					art.dialog({
						title:"��ʾ",
						lock:true,
						opacity:0.3,
						content:"����ʧ�ܣ������ԣ�"
					});
				}
			});
			break;	
		case 4:
			var sendGiftDialog = art.dialog.list['sendGift'];
			var list=quantity+giftDetailInfo[typeId].description+giftDetailInfo[typeId].name;
			var totalUsercp=quantity*giftDetailInfo[typeId].usercp;
			var targetRoseName = data.nickname;
			
			//var content='<div class="gift_nopay"><p class="content success"><span class="tred">'+targetRoseName+'</span>���յ����ͳ���<span class="tred">'+list+'</span>���Է�������ֵ���������<span class="tred">'+totalUsercp+'</span>��һ�������ĸ���ʹӴ˿����ˣ�</p><p class="tip">�������䰮�ң�'+data.totalNeedPayCoin+'������ʣ���䰮�ң�'+data.zhenaicoinLeave+'��</p>';
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
			   //��ʾ��ֵ�䰮��
			   //if(coinNum <=0){
			   //  innerHtml = '<div class="guidepayBox">'+
				//			  '<h3>���ɳ�ֵ������ͨ����</h3>'+
				//			  '<ul class="clearfix">'+
				//				  '<li>��ֵ������<input type="radio" name="coin" id="coin1" value="10" checked><label for="coin1">10��</label></li>'+
				//				  '<li><input type="radio" name="coin" id="coin2" value="30"><label for="coin2" >30��</label></li>'+
				//				  '<li><input type="radio" name="coin" id="coin3" value="50"><label for="coin3" >50��</label></li>'+
				//				  '<li><input class="coinOther" type="radio" name="coin" id="coin4" value="-1"><label for="coin4">����</label><input class="coin_num" type="text" onfocus="ZAOption.giftPayFocusCoin(this)" onblur="ZAOption.giftPayBlurCoin(this)" onkeyup="ZAOption.giftPayKeyupCoin(this)" value="����������">��</li>'+
				//			  '</ul>'+
				//			  '</div>'+
				//			  '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.giftPayOkBtn()" class="btn_orange_L pay_now">������ֵ</a><a  href="javascript:void(0)" onclick="ZAOption.giftPayCancelBtn('+payFrom+');" class="btn_gray_L">ȡ��</a></p>'+
				//		      '<input type="hidden" class="orderSrc" value="36"/>';
			   //}else{
			   //  innerHtml = '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">ȷ��</a></p>';
			   //}
			   innerHtml = '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">ȷ��</a></p>';
			   return innerHtml;
			};
			var content='<div id="giftNoPay" class="gift_nopay">'+
							'<p class="content success"><span class="tred">'+targetRoseName+'</span>���յ����ͳ���<span class="tred">'+list+'</span>���Է�������ֵ���������<span class="tred">'+totalUsercp+'</span>��һ�������ĸ���ʹӴ˿����ˣ�</p>'+
							'<p class="tip">�������䰮�ң�<strong class="tred">'+data.totalNeedPayCoin+'</strong>������ʣ���䰮�ң�<strong class="tred">'+data.zhenaicoinLeave+'</strong>��</p>'+
							 createGiftChargedHtml(data.zhenaicoinLeave)+
						'</div>';
			seajs.use("http://images.zastatic.com//zhenai3/zhenai2012/css/layer/wish_gift.css?v=20130705", function() {
			    art.dialog({
				    title:'���ͳɹ�',
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
				title:'���ͳɹ�',
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
				title:'��ܰ��ʾ ',
				lock:true,
				opacity:0.3,
				content:'<p style="font-size:14px;line-height:30px;">�ÿ�ϧ������δ��֤�ֻ��ţ��������������Ŷ��</p>',
				okVal:'���ھ�ȥ��֤',
				ok:function(){window.open("http://profile.zhenai.com/profile/validateContactPre.jsps");},
				padding:'10px'
			});
			break;
		case 7:
		art.dialog({
			id: 'upZhenAiTongDialogId',
			title:'��ܰ��ʾ ',
			lock:true,
			fixed: true,
			opacity:0.3,
			padding:'0px 0px',
			content:'<div class="gift_nopay"><p class="content fail">'+data.msg+'<br></br></p> <p class="gift_nopay_bot"> <a href="http://profile.zhenai.com/payment/index.jsps" target="_blank" id="upgradeNow_00" class="btn_orange_M">��������</a> <a id="upgradeNow_01" href="http://profile.zhenai.com/payment/index.jsps" target="_blank">�˽�����䰮ͨ��Ա��Ȩ</a></p></div>'
		});
		$("#upgradeNow_00,#upgradeNow_01").live("click",function(){
			$.dialog.list['upZhenAiTongDialogId'] && $.dialog.list['upZhenAiTongDialogId'].close();
		});
		break;
		case 8:
			art.dialog({
			id: 'upZhenXinDialogId',
				title:'��ܰ��ʾ ',
				lock:true,
				fixed: true,
				opacity:0.3,
				padding:'0px 0px',
			content:'<div class="gift_nopay"><p class="content fail"> '+data.msg+'</p> <p class="gift_nopay_bot"> <a href="http://profile.zhenai.com/zhenXin/zhenXinIndex.jsps" target="_blank" id="upgradeNow_10" class="btn_orange_M">��������</a> <a id="upgradeNow_11" href="http://profile.zhenai.com/zhenXin/zhenXinIndex.jsps" target="_blank">�˽�������Ļ�Ա��Ȩ</a></p></div>'
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
			//�жϵ����ر��¼��Ƿ�Ϊ���X��ť������ǵĻ���Ϊtrue�����ǵĻ���Ϊfalse
			var closeTag = true;
			
			//�Ϗ���
			//var temphtml = '<div id="giftPayMothed" class="gift_pay_method" style="display:block;"><div class="method2"><p class="title"></a>ʹ���䰮�ң�������</p><p class="tip_text2">�����軨��<strong class="tred">'+data.totalNeedPayCoin+
			//		'</strong>���䰮�ң�����ʣ<strong class="tred">'+data.zhenaicoinBalance+'</strong>����</p><div class=\"pay_list\"><a  class="pay_and_send2" href="javascript:void(0);" title="��ֵ����"></a></div><div id="jcCoinTip" class="coin_tip22" style="display:none;"><span class="inner"></span><span class="outer"></span><p>�䰮�����䰮����ͨ��������ң��ɹ�����ʹ�������׵����߷��񣬱�ݣ�</p>'+
			//		'<p class="price">1���䰮��=2Ԫ</p></div></div></div>';					
			
			var temphtml ='<div id="lwyhPop" style="display:none;"><div class="topLiwuBg"><a href="javascript:;" id="close_0" class="liwuPop_guanbi">��</a></div><p class="lwtxts">���Ƿ���<span>'+targetRoseName+'</span>����<span>'+list+'</span>?</p><div class="greyBox"><p>�������䰮�ң�<span>'+data.totalNeedPayCoin+'</span>��������ʣ���䰮�ң�<span>'+data.zhenaicoinBalance+'</span>��</p></div><div class="liyhbtn"><a href="javascript:;" id="pay_and_send2" class="btn_orange_M">ȷ��</a><a href="javascript:;" id="close_1" class="btn_blue_M">ȡ��</a></div></div>'
			
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
			 * payByCoinFlag��ʾ�û��Ƿ�Ҫ����ʾ�۳��䰮�ң����ֻ��Ҫ��ʾ��ȡֵΪfalse���������ʾ��ȡֵΪtrue
			 */
			/* art.dialog({
				title:'���ѷ�ʽ',
				id: 'gifthisun1',
				lock:true,
				opacity:0.3,
				content:$tempHtml[0],
				//ok:function(){closeTag=false;ZAOption.giftPay(memberId,typeId,quantity,batchInfo,callback,skipTicket,related,true,giftEnter);},
				close:function()
				{

					//��ǰ����ʾ������㣬������ʱ��ȥ
					if(closeTag==true)
					{
						this.hide();
						var content='<div class="gift_nopay"><p class="content fail"><span class="tred">'+targetRoseName+'</span>�ղ��������ͳ���<span class="tred">'+list+'</span>���޷�֪��������⣬Ե�ֿ��ܾʹ˴����Ŷ��</p>';
						+'<br/></div>'
						art.dialog({
						id: 'gifthisun2',
						title:'֧��ʧ��',
						lock:true,
						fixed: true,
						opacity:0.3,
						padding:'0px 0px',
						content:content,
						ok:true,
						okVal:'֪����'
						}).show(); 
					} 
				},
				padding:'20px'
			}); */
			
		    if(callback){callback.call(callback,3);}
			break;
		case 10:
			ZA.msgTip('�ۣ����ͳ�������̫�����ˣ�<br />����ϵͳ������ɵ�ˣ��Ͳ�����ݺ����ˣ�');
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
						stat(2003,4,0,1);//�䰮�ҵ�������
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
																  '<p class="content success"><span class="tred">'+targetRoseName+'</span>���յ����ͳ���<span class="tred">'+list+'</span>���Է�������ֵ���������<span class="tred">'+totalUsercp+'</span>��һ�������ĸ���ʹӴ˿����ˣ�</p>'+
																  '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">ȷ��</a></p>'+
																  '</div>';
																  
												seajs.use("http://images.zastatic.com//zhenai3/zhenai2012/css/layer/wish_gift.css?v=20130705", function() {
													art.dialog({
														title:'��ֵ����ɹ�',
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
                                              '<p class="content success"><span class="tred">'+targetRoseName+'</span>���յ����ͳ���<span class="tred">'+list+'</span>���Է�������ֵ���������<span class="tred">'+totalUsercp+'</span>��һ�������ĸ���ʹӴ˿����ˣ�</p>'+
                                              '<p class="gift_nopay_bot"><a href="javascript:void(0)" onclick="ZAOption.zhenXinTip(\'' + targetRoseName + '\', \'' + list + '\', ' + data.objMemberId + ');" class="btn_orange_L pay_now">ȷ��</a></p>'+
                                              '</div>';
                                              
                            seajs.use("http://images.zastatic.com//zhenai3/zhenai2012/css/layer/wish_gift.css?v=20130705", function() {
                                art.dialog({
                                    title:'��ֵ����ɹ�',
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
                    title:'��������-��ֵ',
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
			var contentHtml = '<div class="gift_success2" id="jcGiftSuccess" style="display:block;"><h3>�����</h3><div class="pink_box"><div class="left_wrap"><p>���<span class="c_f60">' + targetRoseName + '</span>������<span class="c_f60">' + list + '</span>����ѷ��Ͷ�������Ta��ʱ���գ�����ȣ�Ե�־��������У�</p><a class="btn_pink_L" href="javascript:void(0);" onclick="ZAOption.sendGiftMsg(' + data.objMemberId + ');">���Ÿ���TA</a></div><div class="right_wrap"><p>������� <span class="c_f60">' + targetRoseName + '</span> ������������Է�ͬ�⣬���ǾͿ��Ի���鿴���֤��Ϣ��������ʵ������������ݺ����֤��Ƭ��</p><a class="btn_pink_L" href="javascript:void(0);" onclick="ZAOption.lookCardBefore(' + data.objMemberId + ');">�鿴TA�����֤��Ϣ</a></div></div></div>';
			seajs.use("http://images.zastatic.com/zhenai3/zhenai2012/css/layer/pop_gift.css?v=20141223", function() {
			    art.dialog({
					title:'�����ѷ��ͣ�',
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
	  
	  var contentHtml = '<div class="gift_success2" id="jcGiftSuccess" style="display:block;"><h3>�����</h3><div class="pink_box"><div class="left_wrap"><p>���<span class="c_f60">' + targetRoseName + '</span>������<span class="c_f60">' + list + '</span>��ʹ��1���䰮�ң����Ͷ�������Ta��ʱ���գ�һ�л�������֪ͨ�㣡</p><a class="btn_pink_L" href="javascript:void(0);" onclick="ZAOption.sendGiftMsg(' + objMemberId + ');">���Ÿ���TA</a></div></div></div>';
	  seajs.use("http://images.zastatic.com/zhenai3/zhenai2012/css/layer/pop_gift.css?v=20140310", function() {
	  	  art.dialog({
	  	  	  title:'�����ѷ��ͣ�',
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
	   	  		ZA.msgTip("δ֪�������Ժ�����");
	   	  		return;
	   	  	}
			if (data.status == 0) {
			    ZA.msgTip("�������ѷ��ͳɹ���");
			} else if (data.status == 1) {
			    ZA.msgTip("�������Ѹ����û����͹�2�ζ������ѣ��������ٷ���");
			} else if (data.status == 2) {
			    ZA.msgTip("���û��������յ�3���������ѣ��������ٷ���");
			} else if (data.status == 3) {
			    ZA.msgTip("���û������˶�������ţ�");
			} else if (data.status == 4) {
			    ZA.msgTip("���û����������˶������Σ�");
			} else if (data.status == 5) {
			    ZATemplatePay.zhenaiCoinTemplatePay({"orderAmount":10,"orderSrc":8,"templatePay":1});
			} else if (data.status == 6) {
			    ZA.msgTip("�Է�δ��֤�ֻ��ţ����ܷ��Ͷ��ţ�");
			} else if (data.status == 7) {
			    ZA.msgTip("�Է������ڣ�");
			} else {
			    ZA.msgTip("�������ѷ���ʧ�ܣ�");
			}
	   	  },error:function(xmlHttpRequest, textStatus, errorThrown){
	   	  	ZA.msgTip("���س���");
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
   *��Ը
   *memberId  ��Ա 
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
			//����ҳ��ʹ��̫��flash�رջ�ܿ������ԡ���.
			var giftWishDialog = art.dialog.list['giftWish'];
			if(giftWishDialog){
				giftWishDialog.content(data.data);
				giftWishDialog.show();
				return;
			}
			art.dialog({
				title:'TA�������Ը',
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
    *��Ҳ��Ҫ
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
				title:'�Ѽ����ҵ���ԸС��',
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
   *Ͷ��
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
		title:'Ͷ��<span class="gift_title_name">'+nickName+'</span>'
	},false);
  },
  
  /**
	*����
	* optionType  0ΪĬ�ϣ�1Ϊ��
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
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
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
						title:'����<span class="gift_title_name">'+data.msg+'</span>�ʵ��ʲô',
						lock:true,
						fixed: true,
						opacity:0.3,
						padding:'0px 0px',
						content:data.data
					});
					break;
				case 3:
					ZA.msgTip("������Ѿ���Է���10�������ˣ���Ϣһ�£����������ɡ�");
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
  
  //�������֤��Ϣ
  ZAOption.IdCarchCache = {};
  /**
	*�鿴���֤��Ϣ
	*memberid  ��ԱID
	*keep     �Ƿ������ܾ����ٴ�����
	*/
  ZAOption.lookCard = function(memberId,keep,sendIdCard,optionType){
	if(!ZAOption.login()){
		return;
	}
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
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
			title:"���֤��Ϣ",
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
				title:'�鿴<span class="torange">'+data.nickName+'</span>�����֤��Ϣ',
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
				title:'�鿴<span class="torange">'+data.nickName+'</span>�����֤��Ϣ',
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
				title:'�鿴<span class="torange">'+data.nickName+'</span>�����֤��Ϣ',
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
				title:'�鿴<span class="torange">'+data.nickName+'</span>�����֤��Ϣ',
				lock:true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
		    break;
		case 7:
			art.dialog({
				id:"lookCard",
				title:'�鿴<span class="torange">'+data.nickName+'</span>�������֤��Ϣ',
				lock:true,
				opacity:0.3,
				padding:0,
				content:data.data
			});
		    break;
		case 8:
			art.dialog({
				id:"lookCardView",
				title:'�鿴<span class="torange">'+data.nickName+'</span>�������֤��Ϣ',
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
	*��ע
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
			ZA.friendTip('�ѹ�ע^_^');
			if(callback){
				callback.call();
			}
			break;
		case 2:
			ZA.friendTip('�ѹ�ע^_^');
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
	*��ϵ����
	*/
  ZAOption.contact = function(memberId,skipPhoto,optionType){
	if(!ZAOption.login()){
		return;
	}
	
	$.getJSON('/v2/profile/caninteractRestrict.do?memberId='+memberId,function(data){
		if(data.code == 0){
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
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
						var tempHtml = $('<div class="matchmaker_lead_box"><p>�����ĵȴ�����绰�طã�<p>��Ҳ����ֱ�Ӳ���������ߣ�<span class="tel">4001-520-520</span></p><div class="act textCenter"><a class="btn_pink_L" href="http://profile.zhenai.com/lovestory/indexhnznone.jsps?f=profile"  target="_blank">�˽�������</a></div>');
						var dialog = art.dialog({
							title:"ί�к��﷢�ͳɹ�",
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
						var tempHtml = $('<div id="jcMatchmakerDelegate" class="matchmaker_delegate" style="display: block;"><p>��Ҫί�к���ǣ�ߴ��ţ��������պͶԷ�����������ã�<br /><a class="about" href="http://profile.zhenai.com/lovestory/indexhnznone.jsps" target="_blank">�˽��䰮ͨ�������</a></p><div class="act textCenter"><a id="weituo" class="btn_pink_L" href="javascript:;">ȷ��ί��</a></div>');
						var dialog = art.dialog({
							title:"ί�к���",
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
						title:"��ϵ�����ѷ���",
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
					ZA.msgTip("���Ѿ���Է����͹���ϵ�����ˣ���ȴ��Է���Ӧ^-^");
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
   *�����������
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
			var hide = data.msg == '��Ǹ�������������ϣ������޷����𻥶���';
			if(hide){
				art.dialog({
					title:'��ʾ',
					skin:'layer-tips-purple',
					content: data.msg,
					width: '460px',
					padding: '30px 0',
					fixed:'ture',
					okVal:'�����ҵ�����',
					lock: true,
					ok:function(){
						$.getJSON('http://i0.zastatic.com/v2/profile/publicMyInfo.do',function(d){
							if(d.code == 1){
								pubDialog.TTips1("���������ѿ���!");
							}
						});
					}
				});
			}else{
				pubDialog.TTips1(data.msg || "����ʧ�ܣ������³��ԣ�");
			}   
			return false;
		}else{
			 ZAOption.asyncAjax("http://i0.zastatic.com/im/checkChat.jsps", {"objectid" : objectId}, function(data) {
				  if (!data) {
					  return;
				  }
				  switch(data.code) {
				  case 0:
					  ZA.msgTip('����ǰ��������Ŷ');
					  break;
				  case 1:
					  window.open('http://profile.zhenai.com/zhenaiMail/zhenaiMail.jsps?source=41&openFormal=true&tipType=3&objectId='+objectId, '_blank');
					  break;
				  case 2:
					  ZA.msgTip('Ta�����ߣ������û����ܷ������죬�ȸ�Ta���ʼ����԰ɣ�');
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
    *������
	*/
  ZAOption.getTruth = function(memberId,callback){
	if(!ZAOption.login()){
		return;
	}

	ZAOption.ajax("http://album.zhenai.com/personal/rePhoto.jsps",{"objectId":memberId,truth:1},function(data){
		if(data.status==2){
			ZA.msgTip('���·��ͨ�����ѱ��Է������� ^_^');
		}else if(data.status==1){
			if(callback){
				callback.call();
			}
			ZA.friendTip('�����Ѿ�Biu Biu Biu�ķ���ȥ��Ӵ�����ĵȴ�Ŷ ^_^');
		}else{
			ZA.msgTip('���������TA��������������ĵȴ��� ^_^');
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

