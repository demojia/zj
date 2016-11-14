define(function(require,exports,module){
	return {
		init: function(entry){
			this.seoStat(entry);
		},
		seoStat: function(entry){
			var that = this;
			var channelId='903477';
			var ref = document.referrer;
			var subid = that.getSubId(ref);
			if(entry && subid > 0){
				var href = window.location.href;
				var topicId= that.getTopic(href);
				if(topicId>0){
					if(subid<10){
					   subid=topicId + "0" + subid;
					}else{
						subid=topicId + "" + subid;
					}
				}
				var url='http://cdnlog.zhenai.com/track/?channelId='+channelId+'&subid='+entry+subid+'&referer='+encodeURIComponent(ref?ref:'');
				$.ajax({
					url:url,
					dataType:"jsonp",
					success: function(data){}
				});
				var exp = new Date();
				exp.setTime(exp.getTime() + 1 * 24 * 60 * 60 * 1000); //N天过期
				document.cookie = "isSEO=1;expires=" + exp.toGMTString()+";path=/;domain=.zhenai.com;";
			}
		},
		getSubId: function(refer){
			var subId = 0;
			if(!refer){
				return -1;
			}
			if(/baidu.com/.test(refer)){
				return 1;
			}else if(/haosou.com|\.so.com/.test(refer)){
				return 2;
			}else if(/sogou.com/.test(refer)){
				return 3;
			}else if(/sm.cn/.test(refer)){
				return 4;
			}else if(/google.com/.test(refer)){
				return 5;
			}else if(/yahoo.com/.test(refer)){
				return 6;
			}else if(/bing/.test(refer)){
				return 7;
			}else if(/youdao.com/.test(refer)){
				return 8;
			}else if(/easou.com/.test(refer)){
				return 9;
			}else if(/zhenai.com/.test(refer)){
				return 0;
			}
			return -1;
		},
		getTopic: function(refer){
			var subId = 0;
			if(!refer){
				return -1;
			}
			if(/zhenai.com\/zhenghun/.test(refer)){
				return 1;
			}else if(/city.zhenai.com/.test(refer)){
				return 2;
			}else if(/zhenai.com\/jiaoyou/.test(refer)){
				return 3;
			}else if(/zhenai.com\/topic/.test(refer)){
				return 4;
			}else if(/zhenai.com\/list/.test(refer)){
				return 5;
			}
			return -1;
		}
	}
});