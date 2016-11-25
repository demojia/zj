<?php

	namespace Home\Controller;
	use Think\Controller;

	class LoginController extends EmptyController
	{
		public function index()
		{
			$this->display();
		}

		public function logining()
		{
			
			$row['phone']=$_POST['loginInfo'];
			$row['pass']=md5($_POST['password']);

			dump($row['phone']);
			dump($row['pass']);
			$model=M('user');
			$res=$model->where($row)->find();
			if($res)
			{
				session('user',$res);
				$this->success('登录成功',U('Index/index'));
			}else{
				$this->error('登录出错啦');
			}
			
		}

		public function loginout()
		{
			session('user',null);
			session('call',null);
			$this->display('Login/index');
		}

		public function repass()
		{
			$this->assign('title','重置密码');
			$this->display('Login/repass');
		}

		    public function send()
	    {
            //初始化必填
	   	
            $options['accountsid']='22e85b615d24399343fc07a72c1a641f'; //填写自己的
            $options['token']='0771e810e313aeb24f6ec4130b9a9c78'; //填写自己的
            //初始化 $options必填
            $ucpass = new \Org\Com\Ucpaas($options);

                    
                    //随机生成6位验证码
            srand((double)microtime()*1000000);//create a random number feed.
            $ychar="0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
            $list=explode(",",$ychar);
            for($i=0;$i<6;$i++){
            $randnum=rand(0,35); // 10+26;
            $authnum.=$list[$randnum];
            }
            //短信验证码（模板短信）,默认以65个汉字（同65个英文）为一条（可容纳字数受您应用名称占用字符影响），超过长度短信平台将会自动分割为多条发送。分割后的多条短信将按照具体占用条数计费。
            $appId = "403c625ad35144b294aee043e55a92b1";  //填写自己的
            $to = $_POST['to'];

            $templateId = "32800";
            $param=$authnum;
           $_SESSION['code']=$param;
         	// echo $_SESSION['code'];
         	$param;

            $arr=$ucpass->templateSMS($appId,$to,$templateId,$param);

            if (substr($arr,21,6) == 000000) {
                //如果成功就，这里只是测试样式，可根据自己的需求进行调节
                echo "短信验证码已发送成功，请注意查收短信";
                
            }else{
                //如果不成功
                echo "短信验证码发送失败，请联系客服";
                
            }
            
            
        }

	public function checkcode()
	{	
		
		if($_POST)
		{
			$code=I('post.data');

			if($code == $_SESSION['code'])
			{
				// echo '1';
				unset($_SESSION['code']);
				$this->ajaxReturn(1);
				
			}else{
				// echo '0';
				$this->ajaxReturn(0);
			}
	}else{
		// echo '0';
		$this->ajaxReturn(0);
	}
}


	public function ok()
	{
		if(empty($_POST)){
			$this->display('Login/index');
			exit;
		}


		$pass=md5(I('post.pass'));
		$phonee=I('post.to');
		$res=M('user')->where(array(phone=>$phonee))->save(array(pass=>$pass));

		if(res){
			$this->success('密码已更改，快去登录吧',U('Login/index'));
		}else{
			$this->error('还是原来的密码呦，再试试吧');
		}

		

	}

	}