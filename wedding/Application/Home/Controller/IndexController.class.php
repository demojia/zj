<?php

	namespace Home\Controller;
	use Think\Controller;

	class IndexController extends EmptyController
	{
		public function index()
		{
			// dump($_SESSION['user']['phone']);
			
			$model=M('lunbo');
			$data=$model->select();
			$this->assign('list',$data);
			
			if($_SESSION['user'])
			{
				$loginname=$_SESSION['user']['phone'];
				$this->assign('loginname',$loginname);
				$this->display();
			}else
			{
				$this->redirect('Login/index');
			}






			// if(1<2)
			// {

			// $this->display();
			// }else
			// {
			// 	$this->redirect("Login/index");
			// }
		}
	}