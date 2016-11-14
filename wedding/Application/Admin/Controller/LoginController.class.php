<?php

	namespace Admin\Controller;
	use Think\Controller;

	class LoginController extends Controller
	{
		public function login()
		{
			$this->display();
		}

		public function dologin()
		{
			
			$data['a_name']=$_POST['name'];
			$data['a_password']=$_POST['pass'];

			$model=M('admin');
			$res=$model->where($data)->find();

			if($res){
				

				$this->success('登录成功',U('Index/index'));
			}else{
				$this->error('登录失败',U('Login/login'));
			}
			
		}
	}