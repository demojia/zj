var TopXiou = {
	xiou : $("#xiu_area"),
	popNode : $('#popIntroduce'),
	txtArr : ['把心胸敞开，让Ta走进来','说出你内心的话，让Ta更了解你','这一句无主情话，写给未来的Ta','我不是诗人，我不会写诗，我写的，都是爱'],
    popNodeHtml : '<div class="textarea_wrap"><textarea id="content" name="" cols="" rows=""></textarea><span>我不是诗人，我不会写诗，我写的，都是爱。</span></div><div class="action"><span class="limit_num">限<em>30-500</em>字</span><a id="sendDubai" class="btn_blue_M disabled" href="javascript:;"><strong>提交</strong></a></div>',
    showXiou : function() {
		this.xiou.prepend('<div class="show_items"><div class="show_items_inner"><div style="margin:50px 0 0 120px;"><span style="font-size:14px;">正在加载，请稍后...</span></div></div></div>');
		this.initStatus();
		this.xiou.attr("data", "1").addClass('showme_hover').find('.show_items').show();
	},
	initStatus : function() {
		$.ajax({
			url : 'http://album.zhenai.com/personal/isHasPhotoAndIntroduceAjax.jsps',
			type : 'get',
			dataType : 'jsonp',
			success : function(data){
			    TopXiou.xiou.find(".show_items_inner").html('<div class="item voice"><a href="http://profile.zhenai.com/voice/index.jsps" target="_blank" class="sound_record disabled"></a><p>录制语音档案</p></div><div class="item"><a href="javascript:;" class="upload_photo"></a><p>上传形象照</p></div><div class="item"><a href="javascript:;" class="send_introduce" ></a><p>发表内心独白</p></div>');
				if (data.photo == true){
					TopXiou.xiou.find('.upload_photo')
					.addClass('disabled')
					.unbind("click")
					.attr("href", "http://profile.zhenai.com/personal/getmemberphotos.jsps?r=" + Math.random())
					.attr("target", "_blank");
				}
				if (data.introduce == true) {
					TopXiou.xiou.find('.send_introduce')
					.addClass('disabled')
					.unbind("click")
					.attr("href", "http://profile.zhenai.com/register/newStep3Pre.jsps?r=" + Math.random())
					.attr("target", "_blank");
				}
				if(data.voice != true){
					TopXiou.xiou.find(".sound_record").removeClass("disabled");
				}
				if(data.voiceAble !=true ){
					TopXiou.xiou.find(".voice").remove();
					TopXiou.xiou.find(".show_items").addClass("show_items2W");
				}
				
				TopXiou.initPopNode();
			},
			error : function(){
			}
		});
	},
	initPopNode : function() {
		this.xiou.find('.send_introduce:not(.disabled)').bind('click', function() {
			// 统计点击量
			stat('1067', '0', '0', '0');
		
			TopXiou.popNode.html(TopXiou.popNodeHtml);
		
			$.dialog({
				title : '发表内心独白：',
				lock : true,
				opacity : 0.3,
				content : TopXiou.popNode[0],
				id : 'popIntroduce',
				padding : '0px 0px',
				init : function(){
					TopXiou.popNode.find('.textarea_wrap span').text(TopXiou.txtArr[Math.floor(Math.random()*4)]);
					TopXiou.initSendIntroduce();
				}
			});	
		});
		
		this.xiou.find('.upload_photo:not(.disabled)').bind('click', function(){
			stat('1065', '0', '0', '0');
			// 统计点击量
			seajs.use("iframeTools", function() {
				ZAOption.uploadPhoto(null, null, function(){
					ZA.friendTip('好棒，提交成功了！请等待红娘审核哟~~', '', 2);
					TopXiou.xiou.find(".upload_photo").addClass('disabled').unbind("click");
				
					// 统计上传成功的数量
					stat('1066', '0', '0', '0');
				});
			});
			return false;
		});
		
		this.popNode.find('.close_x').bind('click', function(){
			TopXiou.closeBox('popIntroduce');
		});
	},
	initSendIntroduce : function() {
		this.popNode.find('textarea').bind('blur', function(){
			var val = $.trim($(this).val());
			if(val==''){$(this).val('');$(this).next('span').show();}
			if(val.length>=30){
				TopXiou.popNode.find('.action .btn_blue_M').removeClass('disabled');
				$("#sendDubai").attr("href","javascript:TopXiou.sendDubai();");
			}else{
				TopXiou.popNode.find('.action .btn_blue_M').addClass('disabled');
				TopXiou.popNode.find('.limit_num').html('限<em>30-500</em>字');
			}
		}).bind('focus',function(){
			$(this).next('span').hide();
		}).bind('keyup propertychange',function(e){
			var val = $.trim($(this).val()), length=val.length, minLen=30, maxLen=500;
			if(length>=minLen){
				TopXiou.popNode.find('.action .btn_blue_M').removeClass('disabled');
			}else{
				TopXiou.popNode.find('.action .btn_blue_M').addClass('disabled');
			}
			if (length > maxLen && e.which!=8){
				this.value = this.value.substring(0, maxLen); 
				currLen =  this.value.length;
			}
			TopXiou.popNode.find('.limit_num').html('还可以输入<em>'+(maxLen-length)+'</em>字');
		});
	},
	sendDubai : function() {
		var content = $('#content').val();
		$.ajax({
			url:'http://images.zastatic.com/register/modifyIntroduceAjax.jsps',
			type:'post',
			data: {'content':encodeURI(content)},
			dataType:'json',
			success:function(data){
				ZA.friendTip('好棒，提交成功了！请等待红娘审核哟~~','',2);
				$('#content').val('');
				TopXiou.xiou.find('.send_introduce').addClass('disabled').unbind("click");
				TopXiou.closeBox('popIntroduce');
			},
			error:function(){
				alert("出错了!");
			}
		});
	},
	closeBox : function(boxId) {
		var box = $.dialog.list[boxId];
		if (box) {
			box.close();	
		}
	}
};

TopXiou.showXiou();