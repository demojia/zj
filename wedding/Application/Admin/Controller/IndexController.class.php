<?php
	
	namespace Admin\Controller;
	use Think\Controller;

	class IndexController extends Controller
	{
		public function Index()
		{
		
			// if(1>2)
			// {
			// echo '1';
			$this->display();
			// }
			// else{
			// 	echo '2';
			// 	$this->redirect("Login/login");
			// }
			// echo U('__PUBLIC__');
		}

		public function indexx()
		{
			$this->display();
		}
	}