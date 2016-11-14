<?php

	namespace Home\Controller;
	use Think\Controller;

	class LoginController extends Controller
	{
		public function index()
		{
			$this->display();
		}

		public function logining()
		{
			
			$row['phone']=$_POST['loginInfo'];
			$row['password']=$_POST['password'];

			dump($row['phone']);
			dump($row['password']);
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
			$this->display('Login/index');
		}
	}