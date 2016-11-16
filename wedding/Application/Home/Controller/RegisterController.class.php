<?php

	namespace Home\Controller;
	use Think\Controller;

	class RegisterController extends EmptyController
	{
		public function index()
		{
			$this->assign('title','珍爱注册');
			$this->display();
		}

		public function yzm()
		{
			$Verify=new \Think\Verify();
			$Verify->fontSize=25;
			$Verify->length=4;
			$Verify->codeSet='0123456789abcdefgAHKFOIUIOJFKDLHKFH';
			$Verify->imageW=200;
			$Verify->imageH=45;
			$Verify->entry();
		}

		public function doregister()
		{
			echo '1';
			dump($_POST);
			$_POST['registime']=date('Y-m-d');
			unset($_POST['repass']);
			$_POST['pass']=md5($_POST['pass']);
			
			$code=$_POST['code'];
			$Verify=new \Think\Verify();
			$res=$Verify->check($code);
			if(!$res)
			{
				$this->error('验证码错误');
				exit;
			}
			$model=M('user');
			
			if($model->create()){
				if($model->add()>0){
					$this->success('注册成功',U('Login/index'));
				}else{
					$this->error('注册失败');
				}
			}else{
					$this->error('注册失败');
				}
			}
	


		public function tel()
		{
			$phone=$_POST['mobile'];
			$model=M('user');
			
			$res=$model->where("phone='{$phone}'")->select();
			if($res){
				echo '1';
			}

		}


	}