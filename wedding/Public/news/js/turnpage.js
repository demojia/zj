/*currentpage:��ǰҳ*/
/*totalpage:��ҳ��*/
/*mode:��ҳ����ʾ��ҳ�б���*/
/*method:��ҳ���õĺ�����*/
function nav(currentpage,totalpage,mode,method){
   document.write(navNew(currentpage,totalpage,mode,method));
}


function navNew(currentpage,totalpage,mode,method){

         iStart = mode * (parseInt((currentpage-1) / mode))+ 1;

         iEnd = (iStart + mode) > totalpage ? totalpage: iStart + mode-1;
         preNavigator=currentpage<=1?1:currentpage-1;
          nextNavigator=parseInt(currentpage) + 1;
         nextNavigator=nextNavigator>totalpage?1:nextNavigator;
  
         var str="";
		 if(currentpage==1){
			 str+="<span style='color:#ccc;'>��һҳ</span>\n";
		  }else{
			str+="<a href='javascript:"+method+"("+preNavigator+")' class='lgray'>��һҳ</a>\n";
			}
		  var temp =iStart;
		  for( i = 0;i<mode;i++){
		  temp = iStart+i;
             if(currentpage==iStart+i){str+="<a href='javascript:"+method+"("+temp+")' class='sed'>"+temp+"</a>\n";}
			 else{str+="<a href='javascript:"+method+"("+temp+")' class='lgray' >"+temp+"</a>\n";}
			  if((iStart+i)>=iEnd){break;}
			}
		
		
		if(currentpage>=totalpage)
		{
			if(currentpage==totalpage){
				
				 str+="<span style='color:#ccc;'>��һҳ</span>\n";
			}else{
            str+="<a href='javascript:"+method+"("+nextNavigator+")' class='lgray'>��һҳ</a>\n";

			}
		
		}else{
		
			str+="<a href='javascript:"+method+"("+nextNavigator+")' class='lgray'>��һҳ</a>\n";

		}
    return str;
}

function jump(totalPage){	
	var pageIndex=document.getElementById("pageIndex").value;
	if(pageIndex==null || pageIndex == ""){
		alert("�Բ���������ҳ����");
		return false;
	}
	if(parseInt(pageIndex)>parseInt(totalPage)){
		alert("�Բ�������ҳ���������ҳ����");
		return false;
	}
	if(parseInt(pageIndex)<=0){
		alert("�Բ�������ҳ������ȷ��");
		return false;
	} 
	return true;
}
