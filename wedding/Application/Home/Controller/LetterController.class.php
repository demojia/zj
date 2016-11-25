<?php
	namespace Home\Controller;
	use Think\Controller;

	class LetterController extends EmptyController
	{
		public function index()
		{
			$id=I('get.id');
			$model=M('user')->field('username,age,icon,height,w_province,w_city')->where(array(id=>$id))->find();
			$count=M('user_photo')->where(array(uid=>$id))->count();
			// echo $model['username'];
			$this->assign('username',$model['username']);
			$this->assign('height',$model['height']);
			$this->assign('age',$model['age']);
			$this->assign('w_p',$model['w_province']);
			$this->assign('w_c',$model['w_city']);
			$this->assign('icon',$model['icon']);
			$this->assign('count',$count);
			$this->assign('title','发信');
			$this->display('Letter/index');

		}

		public function send()
		{

			$_POST['suser']=$_SESSION['user']['username'];
			$_POST['ruser']=I('post.name');
			$_POST['lstatus']=0;
			$_POST['time']=date('Y-m-d');
			$_POST['lecont']=I('post.lecontent');
			

			if(M('letter')->create()){
				if(M('letter')->add()>0){
				
					$this->redirect('Letter/mail','','5','发送成功，正在前往邮箱');
				}else{
					$this->redirect('Letter/index','','5','发送失败，正在前往邮箱');
				}
			}else{
				$this->redirect('Letter/index','','5','发送失败，正在前往邮箱');
			}

	


			
		}

		public function mail()
		{
			$this->display('Letter/mail');
		}
	}