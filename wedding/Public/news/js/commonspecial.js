/**
 * ר��ҳ�湫��js
 * Date: 2013/04/26
 * @author zhipeng.Chen
 * Date: 2013/06/20 shimeng.He �����﷨�淶�����ķ�ҳ�߼���
 */

var specialID = 0,
	redLightPage = false,
	redLightComment = false,
/**
 * ��ʼ�������б�
 * type:ר���
 */
initCommentBox = function(type){
	specialID = type;
	//commentPageAjax(type,1,false);
},

/**
 * ��ҳ����(index:ҳ��)
 */
paging = function(index){
	if(redLightPage){return;}
	redLightPage = true;
	//commentPageAjax(specialID,index,true);
	
},


/**
 * �ж���תҳ������Ƿ���Ч�ĺ���(index:ҳ��)
 */
JumpToPage = function(totalPage){
	JumpPage($("#jumpPageIndex").val(),totalPage);
},
/**
 * �ж���תҳ������Ƿ���Ч�ĺ���(index:ҳ��)
 */
JumpPage = function(pageIndex,totalPage){
	if(pageIndex==null||pageIndex==''){
		ZA.msgTip("����δ����ҳ��Ŷ^_^");
		return;
	}
	if(parseInt(pageIndex)>parseInt(totalPage)){
		ZA.msgTip("�������ҳ���������ҳ����Ŷ��");
		return;
	}
	if(parseInt(pageIndex)<=0){
		ZA.msgTip("����ҳ������ȷ��");
		return;
	}
	paging(pageIndex);
},
/**
 * ��ҳ
 * @param  �ɵķ�ҳ�߼�����
 * @return �µķ�ҳ�߼��ַ���
 * @author shimeng.He
 * Date: 2013/06/20 
 */
createPager = function(str){
		if(!str)return;
	var prev = str.match(/.+/)+'\n',//��һ��
		next = str.match(/(<a href='javascript:;'.+��һҳ<\/a>)|<span style='color:#ccc;'>��һҳ<\/span>/g)[0]+'\n',
		total = parseInt(str.match(/\d+ҳ<\/span>/g)[0]),
		curPage = parseInt(str.match(/value='\d+'/g)[0].replace(/[^\d]/g,'')),
		gotoHTML  = str.match(/<span>ת����.+JumpToPage\(\d+\);'><\/span>/),
		html = '',

		star = curPage < 3 ? 1 : curPage - 2,
		end  = curPage < 3 ? 5 : curPage + 2,

		head = curPage>3&&total>5 ? '<a href="javascript:;" onclick="paging(1);" class="lgray">1</a>':'',
		foot = curPage < total-2&&total>5 ? ((end!=total-1?'...':'')+'<a href="javascript:;" onclick="paging('+total+');" class="lgray">'+total+'</a>\n') : '';

		//����ҳ�����
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
 * ͶƱ
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
				ZA.warnTip("�ף������û��¼Ŷ ^_^");
	        }else if(data.state==0){
	        	$("#voteAmout_"+title+option).html(data.count);
	        	$("#votepre_"+title+option).css("width",data.percent+"%");
	        }
		},error: function(){
			ZA.msgTip("�����ˣ��Ժ������ԣ�");
		}
	})
},

/**
 * ���������
 */
savaAskQue = function(element){
	if(!ZAOption.login()){
		return;
	}
    var hnQuestion = $('#'+element);
    if(hnQuestion.val()==null || $.trim(hnQuestion.val()).length==0 || hnQuestion.val()=="������������ѯ���������......"){

    	ZA.msgTip("��Ҫ�������ѯʲô�أ�");
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
			ZA.friendTip("���������ύ�ɹ�^_^");
		},error: function(){
			ZA.msgTip('�����ˣ����Ժ�����^_^');
		}
	});
};