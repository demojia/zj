/**
 * @author  heshimeng1987@qq.com
 */
var HasSelectHeight = false,
	ZAdistrictMap=syscode.district;
/**
 * 单选框
 * @param {Object} options id: id字符串如：#demo
 *                         data: 单选框数据，二维数组如：[[0,'男士'],[1,'女士']]
 *                         value: 默认值
 */
function ZARadio (options) {
	this.radio = $(options.id);
	this.input = this.radio.find('input');
	this.data = options.data;
	this.value = options.value;

	this.init();
};

ZARadio.prototype = {
	init: function(){
		this.createHTML();
		this.events();
		this.whenResize();
	},
	createHTML: function(){
		var html = '',
			that = this;
		$.each(this.data, function(){
			html += '<a'+(this[0]!==that.value?'':' class="select"')+' href="javascript:;" data-value="'+this[0]+'"><i></i><b>'+this[1]+'</b></a>';
		});
		this.radio.append( html );
	},
	events: function(){
		var that = this,
			item = this.radio.find('a');
		item.bind('click',function(){
			that.input.val( $(this).attr('data-value') );
			item.removeClass('select');
			$(this).addClass('select');
		});
	},
	whenResize:function(){
		var $body = $('body');
		var i=0;

		$(window).bind('resize',function(){
			if($body.width()<1200){
				$body.addClass('root1000');
			}else{
				$body.removeClass('root1000');
			}
		});
	}
};
/**
	 * 拖拽 依赖jQuery
	 * @param  {Object} options target:拖拽的jQuery对象,
	 *                          start:开始时的回调函数,
	 *                          move:拖拽时递归函数,
	 *                          min:最小范围如{x:0,y:0},
	 *                          max:最大范围
	 * @author: heshimeng1987@qq.com
	 */
	function Drag(options){
		this.target = options.target;
		this.start = options.start;
		this.parent = options.parent || $(document.body);
		this.move = options.move;
		this.end = options.end;
		this.min = options.min || null;
		this.max = options.max || null;
		var doc = $(document),
			that = this,
			pos,
			curPos,
			viewPos,
		down = function(e){
			that.strat && that.start();
			e.stopPropagation();
			e.preventDefault();
			pos = getPos.call(this,e);
			doc.bind('mousemove', move).bind('mouseup', up);
			return false;
		},
		getPos = function(e){
			viewPos = getElemViewPosition(that.parent[0]);
			return {
				x: (e.originalEvent.layerX || (e.originalEvent.x - $(this).position().left) || 0) + viewPos.left,
				y: (e.originalEvent.layerY || (e.originalEvent.y - $(this).position().top) || 0) + viewPos.top
			};
		},
		getParentPos = function(e){
			viewPos = getElemViewPosition(this);
			return {
				x:  viewPos.left,
				y:  viewPos.top
			};
		},
		move = function(e){
			curPos = {
				left: e.pageX - pos.x ,
				top: e.pageY - pos.y
			};
			if(that.min !== null || that.max !==null){
				curPos = {
					left: (that.min !== null && curPos.left < that.min.x) ? that.min.x : curPos.left,
					top: (that.min !== null && curPos.top < that.min.y) ? that.min.y : curPos.top
				};
				curPos = {
					left: (that.max !== null && curPos.left > that.max.x) ? that.max.x : curPos.left,
					top: (that.max !== null && curPos.top > that.max.y) ? that.max.y : curPos.top
				};
			}
			that.target.css(curPos);
			that.move&&that.move.call(this,curPos);
			return false;
		},
		up   = function(e){
			e.stopPropagation();
			e.preventDefault();
			doc.unbind('mousemove', move).unbind('mouseup', up);
			that.end && that.end();
			return false;
		},
		getElemViewPosition = function (elem) {
	        if (document.documentElement.getBoundingClientRect) {
	            var elemBCR = elem.getBoundingClientRect();
	            return {
	            	left: elemBCR.left,
	                top: elemBCR.top
	            };
	        }
   		};
		click = function (e){
			pos = getParentPos.call(this,e);
			that.strat && that.start();
			move(e);
			that.end && that.end();
			return false;
		};

		this.parent.bind('click', click);
		this.target.bind('mousedown', down);
	};


	function ZAHeightRuler(id, height, name){
			var ruler = $('#'+id),
			size = (parseInt(height)-140)*5+50,
			num = ruler.find('span').html( (height+'').length == 3?height+'cm':height ),
			input = ruler.find('input').val( height=="小于140"?139:height=='大于210'?211:height ),
			curValue = ruler.find('.cur-value'),
			curRule = ruler.find('.ruler'),
			_switch = ruler.find('.cur-height').animate({left: height=="小于140"?40:height=='大于210'?426:size },800);
			curValue.animate({left: height=="小于140"?9:height=='大于210'?396:size-30},800);
			curRule.animate({width:height=="小于140"?30:height=='大于210'?416:size-10});
		new Drag({
			target: _switch,
			min: {x:10,y:6},
			max: {x:428,y:6},
			parent: ruler,
			move: function(pos){
				curValue.css({left:pos.left-30});
				curRule.css({width:pos.left-10});
				num.html((function(){
					// if(pos.left == 10){
					// 	return '不限';
					// }
					if (pos.left < 50){
						return '小于140';
					}
					if(pos.left > 400){
						return '大于210';
					}
					return parseInt((pos.left-50)/5)+140 + 'cm';
				})());
			},
			end: function(){
				input.val( (function(t){
					HasSelectHeight = true;
					if(t=='小于140'){
						return 139;
					}
					if(t=='大于210'){
						return 211;
					}
					return parseInt(t);
				})(num.text()) );
			}
		});
	};


	/**
	 * 下拉表达
	 * @param {Object} options id: id字符串如 #selector
	 *                         data: 下拉框的数据,二维数组
	 *                         value: 默认值
	 *                         click: 选择时的回调函数
	 *                         height: 下拉框的高度
	 *                         width：宽度
	 */
	function ZASelector(options){
		    this.select = $(options.id);
		    this.data = options.data;
		    this.value = options.value;
		    this.height = options.height;
		    this.width = options.width;
			this.curValue = this.select.find('dt');
			this.list = this.select.find('dd');
			this.input = this.select.find('input');
			this.click = options.click;
			this.init();
	};
	ZASelector.prototype = {
		init: function(){
			this.height&&this.list.css({height:this.height,overflowY:'auto'});
			this.width&&this.select.css({width:this.width});
			this.create();
			this.events();
		},
		create: function(){
			var listHTML = '',
				that = this;
			if(typeof this.data !== 'string'){
				$.each(this.data, function(index, val) {
					if(val[0] == that.value){
						that.input.val( val[0] );
						that.curValue.html(val[1]);
					}
					 listHTML += '<a data-value="'+val[0]+'" href="javascript:;">'+val[1]+'</a>';
				});
			}else{
				listHTML = this.data;
			}
			this.list.append(listHTML);
			if(this.value === undefined && typeof this.data !=='string'){
				that.input.val( this.data[0][0] );
				that.curValue.html( this.data[0][1] );
			}
		},
		events: function(){
			var that = this;
			this.list.find('a').bind('click',function(){
				var pcode = $(this).attr('data-value');
				// that.input.val( $(this).attr('data-value') );
				that.input.val(pcode);
				that.curValue.html( $(this).text() );
				that.list.hide();
				that.click&&that.click.call(this, $(this).attr('data-value') );
			});
			this.select.bind('mouseover',function(){
				that.list.show();
				$(this).css({position:'relative'});
			})
			.bind('mouseout',function(){
				that.list.hide();
				$(this).css({position:''});
			});
		}
	};


	function ZABirthdaySelector(options){
		this.select = $(options.id);
		this.selects = this.select.find('dl');
		this.value = options.value&&options.value.split('-');
		this.yearSelect = this.selects.eq(0);
		this.monthSelect = this.selects.eq(1);
		this.daySelect = this.selects.eq(2);
		this.inputs = this.select.find('input');

		this.init();
	};
	ZABirthdaySelector.prototype = {
		init: function(){
			this.create();
			this.events();
		},
		create: function(){
			var that = this;
			new ZASelector({
				id:this.yearSelect,
				data:this.yearHTML(),
				click: function(){
					that.daySelect.find('p').remove();
					that.monthSelect.find('dd').show();
					that.monthSelect.addClass('za-item-selector-hover');
					new ZASelector({
						id: that.daySelect,
						data:that.dayHTML()
					});
				}
			});
			new ZASelector({
				id:this.monthSelect,
				data:this.monthHTML(),
				click: function(){
					that.daySelect.find('p').remove();
					that.daySelect.find('dd').show();
					that.daySelect.addClass('za-item-selector-hover');
					new ZASelector({
						id: that.daySelect,
						data:that.dayHTML()
					});
				}
			});
			new ZASelector({
				id: that.daySelect,
				data:'<p>请先选择年月</p>'
			});
		},
		yearHTML: function(){
			var i = 9,
				j,
				html = '',
				curYear = parseInt(((new Date().getFullYear())+'').substr(3,1));//今年最后一位
			for( ; i >= 3; i--){
				html +=  '<p><i>' + i + '0后:</i>';
				for( j = 0; j <= (i==9?curYear+2:9); j++){//没有考虑到未来00后。因为等00后18岁，哥等不了。
					html += '<a data-value="19'+i+''+j+'" href="javascript:;">19'+i+''+j+'</a>';
				}
				html += '</p>';
			}
			return html;
		},
		monthHTML: function(){
			var i = 1,
				html = '<p>';
			for( ; i <= 12; i++){
				html += '<a data-value="'+i+'" href="javascript:;">'+i+'</a>';
			}
			return html + '</p>';
		},
		dayHTML: function(){
			var year = this.inputs.eq(0).val(),
				month = this.inputs.eq(1).val(),
				i = 1,
				lastDay = new Date(year, month , 0).getDate(),//上个月的第零天就是当前月的最后一天
				html = '<p>';
				for( ; i <= lastDay; i++){
					html += '<a data-value="'+i+'" href="javascript:;">'+i+'</a>';
				}
				return html + '</p>';
		},
		events: function(){
			var that = this;
			this.selects.bind('mouseover', function(){
				$(this).addClass('za-item-selector-hover');
			})
			.bind('mouseout', function(){
				$(this).removeClass('za-item-selector-hover');
				var check = $('#BirthdayCheck');
    			if(!ZACheckInput.birthday())check.hide();
			});
		}
	};


function ZAdistrictSelector(options){
	this.selector = $(options.id);
	this.district = this.selector.find('dl');
	this.curValue = this.selector.find('dt');
	this.inputs = this.selector.find('input');
	this.data = ZAdistrictMap;

	this.init();
};

ZAdistrictSelector.prototype = {
	init: function(){
		this.create();
		this.events();
	},
	create: function(){
		var that = this;
		//省
		new ZASelector({
			id:this.district.eq(0),
			data:this.createProvince(),
			click: function(){
				that.district.eq(1).find('span').remove();
				that.curValue.eq(1).html('市/区');
				that.inputs.eq(1).val(-1);
				that.district.eq(1).addClass('za-item-selector-hover').find('dd').show();
				if(that.data['c'+that.inputs.eq(0).val()].d == '1'){
					that.district.eq(2).hide();
					that.inputs.eq(2).val(0);
				}else{
					that.district.eq(2).removeClass('za-item-selector-hover').show().find('dd').hide();
					that.curValue.eq(2).html('选择区/县');
					that.inputs.eq(2).val(-1);
				}
				//市
				new ZASelector({
					id: that.district.eq(1),
					data: that.createCity(),
					click: function(){
						that.curValue.eq(2).html('选择区/县');
						that.inputs.eq(2).val(-1);
						that.district.eq(2).find('span').remove();
						if(that.data['c'+that.inputs.eq(0).val()].d !== '1'){
							that.district.eq(2).addClass('za-item-selector-hover').find('dd').show();
						}
						//县
						new ZASelector({
							id: that.district.eq(2),
							data: that.createCounty(),
							click: function(value){
								that.inputs.eq(1).val( value );
							}
						});
					}
				});
			}
		});
	},
	createProvince: function(){
		var html = '';
		$.each(this.data, function(key, val){
			key = key.replace('c', '');
			html += '<span><a href="javascript:;" data-value="'+key+'">'+val.n+'</a></span>'+((key=='10105000'||key=='10129000')?'<div class="border"></div>':'');
		});
		return html;
	},
	createCity: function(){

		var html = '';
		$.each(this.data['c'+this.inputs.eq(0).val()], function(key, val){
			key = key.replace('c', '');
			if(typeof val == 'object')
				html += '<span><a href="javascript:;" data-value="'+key+'">'+val.n+'</a></span>';
		});
		return html;
	},
	createCounty: function(){
		var html = '';
		$.each(this.data['c'+this.inputs.eq(0).val()]['c'+this.inputs.eq(1).val()], function(key, val){
			key = key.replace('c', '');
			if(typeof val == 'object')
			html  += '<span><a href="javascript:;" data-value="'+key+'">'+val.n+'</a></span>';
		});
		return html;
	},
	events: function(){
		var that = this;
		this.district.bind('mouseover', function(){
			$(this).addClass('za-item-selector-hover');
		})
		.bind('mouseout', function(){
			$(this).removeClass('za-item-selector-hover');
			var check = $('#DistrictCheck');
    		if(!ZACheckInput.district())check.hide();
		});
	}
};



var flag=0;
var isTrue=false;
var nowDate = new Date();
var	curDateYear = nowDate.getFullYear();
var curDateMonth = nowDate.getMonth();
var curDateDay = nowDate.getDate();
var ZACheckInput = {
	sex: function(){
		if( $('#SexRadioInput').val() == '' ){
			$('#SexRadioCheck').show().find('span').html( '您忘了选择“性别”这项了。' );
			return false;
		}
		return true;
	},
	phone: function(elem){
		elem = $(elem);
		var regular = /^(1(([35][0-9])|(47)|70|[8][0123456789]))\d{8}$/,
			check = $(elem.attr('data-check'));
			if( elem.val().length == 0){
				check.show().removeClass('check-form-ok').find('span').html( '手机号不能为空。' );
				return false;
			}

			//check.show().addClass('check-form-ok');
			$.ajax({
					url:'http://i3.zastatic.com/register/validateMobile3.jsps',
					data:{mobile:elem.val(),d:Math.random()},
					dataType:"text",
					type:'get',
					async : false,
					success:function(result){
						if("yes"==result){
							flag=0;
							$('#checkCode').hide();
							check.show().addClass('check-form-ok');
							isTrue=true;
						}else if("no"==result){
							flag=0;
							$('#checkCode').hide();
							check.show().removeClass('check-form-ok').find('span').html( '手机号码错误。' );
							isTrue=false;
						}else if("exist"==result){
							flag=0;
							$('#checkCode').hide();
							check.show().removeClass('check-form-ok').find('span').html( '该手机号码已被使用。' );
						isTrue=false;
						}else if("existMoreFifty"==result){
							flag=1;
							//$("#imgCode").val('');
							$('#checkCode').show();
							check.show().addClass('check-form-ok');
							isTrue=true;
						}
					}
				});
			return isTrue;

	},
	phone1: function(elem){
		elem = $(elem);
		var regular = /^(1(([35][0-9])|(47)|70|[8][0123456789]))\d{8}$/,
			check = $(elem.attr('data-check'));
			if(elem.val().length == 0){
				check.show().removeClass('check-form-ok').find('span').html( '请输入手机号' );
				hidePhoneCode();
				return false;
			}
			if (elem.val() == lastCheckPhone) {
				return true;
			} else {
				lastCheckPhone = {};
				hidePhoneCode();
			}
			$.ajax({
					url:'http://i3.zastatic.com/register/validateMobile3.jsps',
					data:{mobile:elem.val(),d:Math.random()},
					dataType:"text",
					type:'get',
					success:function(result){
						if("yes"==result || "existMoreFifty"==result){
							flag=0;
							check.hide();
							showPhoneCode();
							lastCheckPhone = elem.val();
							isTrue=true;
						}else if("no"==result){
							flag=0;
							check.show().removeClass('check-form-ok').find('span').html( '请填写有效的手机号' );
							isTrue=false;
						}else if("exist"==result){
							flag=0;
							check.show().removeClass('check-form-ok').find('span').html( '该手机号码已被使用。' );
							isTrue=false;
						}
					}
				});
			return isTrue;
	},
	password: function(elem){
		elem = $(elem);
		function judgeRiskPwd(value) {
			//危险密码：13位以下纯数字，13位以下纯字母，9位以下
			var digitReg = /^\d{0,12}$/,
				letterReg = /^[a-zA-Z]{0,12}$/,
				length = value.length;

			if (digitReg.test(value) || letterReg.test(value) || length < 9) {
				return true;
			} else {
				return false;
			}
		}

		var regular = /[\w!@#$%^&*()_+|{}?><\-\]\\[\/]{6,20}/,
			check = $(elem.attr('data-check')),
			value = $.trim( elem.val() ),
			valueLength = value.length;
			$('#checkPswBox').hide();
			if( valueLength == 0){
				check.show().removeClass('check-form-ok').find('span').html( '密码不能为空。' );
				return false;
			}
			if( valueLength < 6){
		    	check.show().removeClass('check-form-ok').find('span').html( '密码少于6位数。' );
		    	return false;
			}
			if( valueLength > 20){
		    	check.show().removeClass('check-form-ok').find('span').html( '密码大于20位数。' );
		    	return false;
			}
			if( regular.test( value ) )	{
				if(judgeRiskPwd(value)){
					$('#checkPswBox').show().addClass('danger');
				}else{
					$('#checkPswBox').show().removeClass('danger');
				}
				check.hide();
		    	return true;
			}else{
		    	check.show().removeClass('check-form-ok').find('span').html( $(check).attr('data-worning') );
		    	return false;
			}
	},
	checkPSW: function(elem, pswID){
		elem = $(elem);
		var value = $.trim( elem.val() ),
			regular = /[a-zA-Z0-9]{6,20}/,
			valueLength = value.length,
			check = $(elem.attr('data-check'));
			if(valueLength == 0){
		    	check.show().removeClass('check-form-ok').find('span').html( $(check).attr('data-worning') );
		    	return false;
			}
			if( regular.test( value ) && value == $(pswID).val())	{
		    	check.show().addClass('check-form-ok');
		    	return true;
			}else{
		    	check.show().removeClass('check-form-ok').find('span').html( $(check).attr('data-worning') );
		    	return false;
			}
	},
	selector: function(elem){
		elem = $(elem);
		var value = elem.val(),
			check = $(elem.attr('data-check'));
			if( parseInt(value) < 0 ){
		    	check.show().removeClass('check-form-ok').find('span').html( $(check).attr('data-worning') );
		    	return false;
			}else{
		    	check.show().addClass('check-form-ok');
		    	return true;
			}
	},
	birthday: function(){
		var inputs = $('#BirthdaySelector input'),
			i = 0,
			check = $('#BirthdayCheck');
		for( ; i < 3; i++){
			if(inputs.eq(i).val()==-1){
				check.show().find('span').html( check.attr('data-worning') );
				return false;
			}
		}
		if((inputs.eq(0).val()==(curDateYear-18) && inputs.eq(1).val()>(curDateMonth+1)) || (inputs.eq(0).val()==(curDateYear-18) && inputs.eq(1).val()==(curDateMonth+1) && inputs.eq(2).val()>curDateDay) ){
				check.show().removeClass('check-form-ok').find('span').html( check.attr('data-checkError') );
				return false;
			}
		check.show().addClass('check-form-ok');
		return true;
	},
	district: function(){
		var input = $('#DistrictSelector input');
    	if( (input.eq(0).val()!=-1&&ZAdistrictMap['c'+input.eq(0).val()].d==1&&input.eq(1).val()!=-1) || (input.eq(0).val()!=-1&&input.eq(1).val()!=-1&&input.eq(2).val()!=-1)){
    		$('#DistrictCheck').show().addClass('check-form-ok');
    		return true;
    	}else{
    		$('#DistrictCheck').show().removeClass('check-form-ok').find('span').html( $('#DistrictCheck').attr('data-worning') );
    		return false;
    	}
	},
	agreement: function(elem){
		elem = $(elem);
		if( elem.attr('checked')!==undefined ){
			$('#AgreementCheck').hide();
			return true;
		}else{
			$('#AgreementCheck').show();
			return false;
		}
	},
	checkHeight: function(){
		if(!HasSelectHeight){
			$('#HeightRulerCheck').show().find('span').html('请选择身高');
		}
		$('.cur-height').bind('mousedown', function(){
			$('#HeightRulerCheck').show().find('span').html('注册后不可改');
		});
		return HasSelectHeight;
	},
	checkAll: function(){
		stat('1114','0','0','0');
		var ret=validateCode('#imgCode');
		if(!$("#imgCode").is(":visible")){
			if(this.phone('#MyPhoneInputID') + this.password('#MyPassword') + this.checkPSW('#CheckMyPSW', '#MyPassword') +  this.birthday()  +  this.district()  +  this.selector($('#MyEducation input'))  +  this.selector($('#MySalary input'))  +  this.agreement( '#AgreementInput' ) + this.sex() + this.checkHeight() + ret>=10){
				return true;
			}
		}else{
			if(this.phone('#MyPhoneInputID') + this.password('#MyPassword') + this.checkPSW('#CheckMyPSW', '#MyPassword') +  this.birthday()  +  this.district()  +  this.selector($('#MyEducation input'))  +  this.selector($('#MySalary input'))  +  this.agreement( '#AgreementInput' ) + this.sex() + this.checkHeight() + ret>10){
				return true;
			}
		}
		return false;
	},
	checkAll1: function(){

		var ret=validateCode('#imgCode');
		var vl=this.phone('#MyPhoneInputID') + this.password('#MyPassword') + this.checkPSW('#CheckMyPSW', '#MyPassword') +   this.selector($('#MyEducation input'))  +  this.selector($('#MySalary input')) +  this.agreement( '#AgreementInput' ) +ret ;
		if(!$("#imgCode").is(":visible")){
			if(vl>=6 ){
				return true;
			}
		}else{
			if(vl>6){
			return true;
			}
		}
		return false;
	},
	phoneCode: function(elem) {
	    elem = $(elem);
		if (elem.val().length == 0) {
			$('#PhoneCodeCheck').show().removeClass('check-form-ok').find('span').html('请输入验证码');
		} else if(!/^\w{4}$/.test(elem.val())) {
			$('#PhoneCodeCheck').show().removeClass('check-form-ok').find('span').html($('#PhoneCodeCheck').attr('data-worning'));
		} else {
		    if (elem.val() == lastValidatePhoneCode) {
				return true;
			} else {
				lastValidatePhoneCode = {};
			}
			return checkPhoneCode();
		}
		$('#PhoneCodeCheck').removeAttr('hideTip');
		return false;
	},
	checkReg66: function(){
		if(this.birthday()  +  this.district()  +  this.selector($('#MyEducation input'))  +  this.selector($('#MySalary input'))  +  this.agreement( '#AgreementInput' ) + this.sex() + this.checkHeight() >= 7){
				return true;
		}
		return false;
	}
};
