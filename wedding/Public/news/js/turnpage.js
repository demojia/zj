/*currentpage:当前页*/
/*totalpage:总页数*/
/*mode:分页条显示的页列表数*/
/*method:翻页调用的函数名*/
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
			 str+="<span style='color:#ccc;'>上一页</span>\n";
		  }else{
			str+="<a href='javascript:"+method+"("+preNavigator+")' class='lgray'>上一页</a>\n";
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
				
				 str+="<span style='color:#ccc;'>下一页</span>\n";
			}else{
            str+="<a href='javascript:"+method+"("+nextNavigator+")' class='lgray'>下一页</a>\n";

			}
		
		}else{
		
			str+="<a href='javascript:"+method+"("+nextNavigator+")' class='lgray'>下一页</a>\n";

		}
    return str;
}

function jump(totalPage){	
	var pageIndex=document.getElementById("pageIndex").value;
	if(pageIndex==null || pageIndex == ""){
		alert("对不起请输入页数！");
		return false;
	}
	if(parseInt(pageIndex)>parseInt(totalPage)){
		alert("对不起输入页数超过最大页数！");
		return false;
	}
	if(parseInt(pageIndex)<=0){
		alert("对不起输入页数不正确！");
		return false;
	} 
	return true;
}
