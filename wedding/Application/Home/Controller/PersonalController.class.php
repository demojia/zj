<?php

	namespace Home\Controller;
	use Think\Controller;

	class PersonalController extends EmptyController
	{
		public function index()
		{

			$loginphone=$_SESSION['user']['phone'];
			echo $loginphone;
			$data=M('user')->where("phone='{$loginphone}'")->select();
			$detail=M('user_info')->where("phone='{$loginphone}'")->select();
			$life=M('user_life')->where("phone='{$loginphone}'")->select();
			$couple=M('couple')->where("phone='{$loginphone}'")->select();

			// dump($couple);

			// dump($detail);
			// dump($life);
			$this->assign('list',$data);
			$this->assign('list1',$detail);
			$this->assign('list2',$life);
			$this->assign('list3',$couple);
			$this->assign('phone',$loginphone);
			$this->display('Personal/index');
		
		}

		public function add()
		{
			$this->display('Personal/add');
		}

		public function doadd()
		{
			$data=$_POST;
			$model=M('user_info');
			
			if($model->create()){
				if($model->add()>0){
					$this->success('添加成功',U('Personal/index'));
				}else{
					$this->error('添加失败');
				}
			}else{
					$this->error('添加失败');
				}
			}

		public function life()
		{
			$this->display('Personal/addlife');
		}


		public function addlife()
		{
			$data=$_POST;
			$model=M('user_life');
			
			if($model->create()){
				if($model->add()>0){
					$this->success('添加成功',U('Personal/index'));
				}else{
					$this->error('添加失败');
				}
			}else{
					$this->error('添加失败');
				}
			}

			public function couple()
			{
				$this->display('Personal/couple');
			}


			public function addcouple()
		{
			$data=$_POST;
			$model=M('couple');
			
			if($model->create()){
				if($model->add()>0){
					$this->success('添加成功',U('Personal/index'));
				}else{
					$this->error('添加失败');
				}
			}else{
					$this->error('添加失败');
				}
			}

			public function detail()
			{
				$this->display('Personal/detailindex');
			}

	
	
		}



		
	

