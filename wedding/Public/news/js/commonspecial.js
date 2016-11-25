/**
 * 专题页面公共js
 * Date: 2013/04/26
 * @author zhipeng.Chen
 * Date: 2013/06/20 shimeng.He 更新语法规范，更改翻页逻辑。
 */

var specialID = 0,
	redLightPage = false,
	redLightComment = false,
/**
 * 初始化评论列表
 * type:专题号
 */
initCommentBox = function(type){
	specialID = type;
	//commentPageAjax(type,1,false);
},

/**
 * 分页函数(index:页码)
 */
paging = function(index){
	if(redLightPage){return;}
	redLightPage = true;
	//commentPageAjax(specialID,index,true);
	
},


/**
 * 判断跳转页面参数是否有效的函数(index:页码)
 */
JumpToPage = function(totalPage){
	JumpPage($("#jumpPageIndex").val(),totalPage);
},
/**
 * 判断跳转页面参数是否有效的函数(index:页码)
 */
JumpPage = function(pageIndex,totalPage){
	if(pageIndex==null||pageIndex==''){
		ZA.msgTip("您还未输入页数哦^_^");
		return;
	}
	if(parseInt(pageIndex)>parseInt(totalPage)){
		ZA.msgTip("您输入的页数超过最大页数了哦！");
		return;
	}
	if(parseInt(pageIndex)<=0){
		ZA.msgTip("输入页数不正确！");
		return;
	}
	paging(pageIndex);
},
/**
 * 翻页
 * @param  旧的翻页逻辑代码
 * @return 新的翻页逻辑字符串
 * @author shimeng.He
 * Date: 2013/06/20 
 */
createPager = function(str){
		if(!str)return;
	var prev = str.match(/.+/)+'\n',//第一行
		next = str.match(/(<a href='javascript:;'.+下一页<\/a>)|<span style='color:#ccc;'>下一页<\/span>/g)[0]+'\n',
		total = parseInt(str.match(/\d+页<\/span>/g)[0]),
		curPage = parseInt(str.match(/value='\d+'/g)[0].replace(/[^\d]/g,'')),
		gotoHTML  = str.match(/<span>转到第.+JumpToPage\(\d+\);'><\/span>/),
		html = '',

		star = curPage < 3 ? 1 : curPage - 2,
		end  = curPage < 3 ? 5 : curPage + 2,

		head = curPage>3&&total>5 ? '<a href="javascript:;" onclick="paging(1);" class="lgray">1</a>':'',
		foot = curPage < total-2&&total>5 ? ((end!=total-1?'...':'')+'<a href="javascript:;" onclick="paging('+total+');" class="lgray">'+total+'</a>\n') : '';

		//避免页码错误
		end = end > total ? total : end;
		if(end == total)star = end - 4;
		star = star < 1 ? 1 : star;
		
		head+=(star>2)?'...':'\n';
		
		for( ; star <= end ;){
			html += '<a href="javascript:;" onclick="paging('+star+');" class="'+(star==curPage?'sed':'lgray')+'">'+(star++)+'</a>\n';
		}

		return prev + head + html + foot + next + gotoHTML;
		
},

/**
 * 投票
 */
vote = function(i,title,option){
	if(!ZAOption.login()){
		return;
	}
	$.ajax({ 
		type:"POST",
		dataType: "jsonp",
		async: false,
		url: "http://t.zhenai.com/common/specialVote.do",
		data: {"specialType":specialID,"title":title,"option":option},
		success: function(data){
			if(data.state==1){
				ZA.warnTip("亲，你好像还没登录哦 ^_^");
	        }else if(data.state==0){
	        	$("#voteAmout_"+title+option).html(data.count);
	        	$("#votepre_"+title+option).css("width",data.percent+"%");
	        }
		},error: function(){
			ZA.msgTip("出错了，稍后请重试！");
		}
	})
},

/**
 * 向红娘提问
 */
savaAskQue = function(element){
	if(!ZAOption.login()){
		return;
	}
    var hnQuestion = $('#'+element);
    if(hnQuestion.val()==null || $.trim(hnQuestion.val()).length==0 || hnQuestion.val()=="请您输入想咨询红娘的问题......"){

    	ZA.msgTip("你要向红娘咨询什么呢？");
    	hnQuestion.focus();
    	return;
    }
    var encodeQuestion=encodeURIComponent(hnQuestion.val());
	$.ajax({ 
		type:"POST",
		dataType: "jsonp",
		async: false,
		url: "http://t.zhenai.com/common/savaAskQue.do",
		data: {"content":encodeQuestion},
		success: function(data){
			hnQuestion.val("");
			ZA.friendTip("您的提问提交成功^_^");
		},error: function(){
			ZA.msgTip('出错了，请稍后再试^_^');
		}
	});
};