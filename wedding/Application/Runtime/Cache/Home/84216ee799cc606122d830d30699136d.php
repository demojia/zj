<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<title>找回密码</title>
<link href="/wedding/Public/home/phone/css/main.css" rel="stylesheet" type="text/css" />
<script src="/wedding/Public/home/phone/js/jquery-1.8.3.min.js"></script>
<script src="/wedding/Public/home/phone/js/fixcore.js"></script>
<link href="/wedding/Public/home/phone/css/global.css" rel="stylesheet" media="screen">
<link href="/wedding/Public/home/phone/css/button.css" rel="stylesheet" media="screen">
<link rel="stylesheet" href="/wedding/Public/home/phone/css/public2.css" />
<script src="/wedding/Public/home/phone/js/lab.min.js"></script>
<script src="/wedding/Public/home/phone/js/sea.js"></script>
<script src="/wedding/Public/home/phone/js/global.js" charset="UTF-8"></script>
<link href="/wedding/Public/home/phone/css/areaform.css" rel="stylesheet" type="text/css" charset="GBK">
<link href="/wedding/Public/home/phone/css/wappublicity.css" rel="stylesheet" type="text/css" charset="GBK"/>
<script type="text/javascript" src="/wedding/Public/home/phone/js/syscodeapi.js" charset="gbk"></script>

<link href="/wedding/Public/home/phone/css/entryhelp.css"  rel="stylesheet" type="text/css" />
<link href="/wedding/Public/home/phone/css/box1.css" rel="stylesheet" type="text/css" />
<link href="/wedding/Public/home/phone/css/chongzhimima.css"  rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/wedding/Public/home/phone/js/commonvalidate.js"></script>

</head>
<body>
<header id="jcZAHeader" class="header">
    <section class="frameW top-bar clearfix">
        <a class="logo" href="javascipt:;" title="珍爱网"><i></i></a>
        <p class="ad-word">相亲无难事，珍爱有红娘</p>
        <div class="tools">
            <ul class="clearfix">
                <li class="mobile"><a href="javascript:;">手机版</a></li>
                <li class="collect"><a href="javascript:;">收藏本站</a></li>
                <li class="cust"><a href="javascript:;">在线客服</a></li>
                <li><a href="javascript:;" >安全中心</a></li>
                
                <li class="tel">红娘热线：4001-520520</li>
            </ul>
        </div>
    </section>
    <section class="nav-bar">
        <div class="frameW clearfix">
            <menu class="menu">
                <ul>
                    <li id="jcMenuBeauty" class="bg-scroll"></li>
                    <li><a href="<?php echo U('Index/index');?>">我的珍爱</a></li>
                    <li><a href="<?php echo U('Search/index');?>">搜索</a></li>
                    <li><a href="<?php echo U('Brain/index');?>">
                    珍爱花边</a></li>
                    <li><a href="http://profile.zhenai.com/zhenaiMail/zhenaiMail.jsps" rel="nofollow">珍心会员</a></li>
                    <li><a href="http://story.zhenai.com/" target="_blank" >成功故事</a></li>
                    <li><a href="http://t.zhenai.com/hnzone/articleIndex.do" target="_blank" rel="nofollow">他她说</a></li>
                    
                    
                    
                    
                    
                </ul>
            </menu>
            <div class="header-info user-info">
                <span class="topic"><em class="user-icon"></em></span>
                <ul>
                    <li><a href="http://profile.zhenai.com/v2/userdata/showInfo.do" rel="nofollow">编辑资料</a></li>
                    <li><a href="http://profile.zhenai.com/v2/verify/verifyIndex.do" rel="nofollow">诚信认证</a></li>
                    <li><a href="http://profile.zhenai.com/v2/photo/photoIndex.do" rel="nofollow">个人相册</a></li>
                    <li><a href="http://profile.zhenai.com/v2/userdata/pwdIndex.do" rel="nofollow">系统设置</a></li>
                    <li class="quit"><a href="http://album.zhenai.com/login/logout.jsps" rel="nofollow">退出</a></li>
                </ul>
            </div>
            <div class="header-info message-info" id="jcMessageInfo">
                
            </div>
            
            
        </div>
    </section>
</header>

  <div id="helpMainContent" class="clearfix">
        <div class="box_900">
            <div class="box_900_t">
                <strong>重置密码</strong>
            </div>
            <div class="box_900_m">
                <div id="contentDiv2">
                    <div class="box">
                    <?php echo ($_SESSION['code']); ?>
                        <form action="<?php echo U('Login/ok');?>" method="post" onsubmit="return checkinputAll();">
                    <table border="0" cellspacing="15">
                        <div style="height:60px;   postion:relative;top:30px;">
                            <tr>
                                <td>手机号:</td>
                                <td><input style="width:200p;height:25px" type="text" id="to" name="to"></td>
                                <td style="display:block;margin:7px" >* 请输入绑定的手机号</td>
                            </tr>                       
                            <tr>
                                <td >验证码:</td>
                                <td><input id="ve" style="postion:relative;top:30px;width:200p;height:25px" name="code" type="text"></td>
                                <td>
                                <input type="button" id="yz" style="height:20px;width:90px;" value="获取验证码">
                                </td>
                                <td  style="display:block;">*请输入接收到的验证码</td>
                            </tr>
                               <tr>
                                <td >新密码:</td>
                                <td><input name="pass" style="postion:relative;top:30px;width:200p;height:25px" type="text"></td> <td style="display:block;">* 请输入修改后的密码</td>
                            </tr>     
                        </div>
                        <div> 
                            <tr style="height:90px;postion:relative;top:70px;">
                                <td></td>
                                <td style="position:relative;top:10px;width:200p;height:25px">
                                <input  type="submit"  value="马上修改" >
                                </td>
                            </tr>

                        </div>
                    </table>
                </form>
                        <!--手机号码找回-->

                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：如果您已更换手机号，且没有验证邮箱，请致电客服15806181820进行修改。</p>
                    </div>
                </div>
            </div>
            <div class="box_900_b"></div>
        </div>
     </div>
</body>
 <script type="text/javascript">
    var zaphone=false;
    var zacode=false;
    

        $('#ve').blur(function(){
            $('#ve+p').remove();
            checkVe(this);
        
        });

        $('#to').blur(function(){
        $('#to+p').remove();
            checkTo(this);
        
        });




function checkVe(obj)
{
        msg = '';
        var yzm=$(obj).val();
        data = {"data":$(obj).val()};
        $.post("<?php echo U('Login/checkcode');?>",data,function(data){
            console.log('#########');
           
         console.log(data)
       
            if(data){
                if(yzm.length==0){
                msg = "<p class='success'>验证码不为空</p>";
                $("#ve").after(msg);
                        
                }else{
                msg = "<p class='success'>验证码通过</p>";
                 zacode= true;
                $("#ve").after(msg);
                    
                }
            }else{
                msg = "<p class='error'>验证码不正确</p>";
               
                $("#ve").after(msg);
            }
        });
    }


            function checkTo(obj)
        {
            msg='';
            var too=$(obj).val();
            console.log(too);
            if(too)
            {
                if(too.length==11)
                {
                    var reg=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                    if(reg.test(too))
                    {

                     msg='<p>手机号格式正确</p>';
                     zaphone=true;
                     $("#to").after(msg);
                    }else{
                        msg='<p>请输入正确手机号</p>';
                        $("#to").after(msg);
                    }
                }else if(too.length<11){
                    msg='<p>手机号必须为11位数字</p>';
                     $("#to").after(msg);

                }
            }
        
        }






    function checkinputAll(){

    if(zaphone&&zacode){return true;}else{return false;}
}


 </script>








 <script>

            $('#yz').click(function(){
                var phone = $('#to').val();

                $.ajax({
                    url:"<?php echo U('Login/send');?>",
                    data:{'to':phone},
                    type:'post',
                    async:true,
                    success:function(data){
                        console.log(1);
                    }
                })

            })
 </script>
</html>