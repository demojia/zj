function checkMobile(obj,callback){
	if(obj.value == "") return true;
	var reg0 = /^0?1((3|8)[0-9]|5[0-35-9]|4[57]|7[013678])\d{8}$/;   //130--139��180--189��150-159(154����)
	var my=false;
	if (reg0.test(obj.value))my=true;
	if (!my&&!callback){	
		if(confirm("�Բ�����������ֻ��������Ҫ�޸������ֻ�������")){
			obj.focus();
		}else{
			obj.value="";
		}
	}else if(!my&&callback){
		callback(obj,my);
	}
	return my;
}