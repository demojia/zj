define(function(require,exports,module){
	return{
		init:function(opt){
            var sid=opt.sessionId;
             if(sid==null || sid ==''){
                 return;
             }
             _fmOpt = {
                partner: 'zhenaiwang',
                appName: 'zhenai_web',
                token: sid,
            };
            var cimg = new Image(1,1);
            cimg.onload = function() {
                _fmOpt.imgLoaded = true;
            };
            cimg.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=zhenaiwang&appName=zhenai_web&tokenId=" + _fmOpt.token;
            var fm = document.createElement('script'); fm.type = 'text/javascript'; fm.async = true;
            fm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.fraudmetrix.cn/fm.js?ver=0.1&t=' + (new Date().getTime()/3600000).toFixed(0);
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fm, s);
		}
	}
});