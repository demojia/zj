<?php

	namespace Home\Controller;
	use Think\Controller;

	class PersonalController extends EmptyController
	{
		public function index()
		{
			

			$loginphone=$_SESSION['user']['phone'];
			// echo $loginphone;
			$name=$_SESSION['user']['username'];
			$data=M('user')->where("phone='{$loginphone}'")->select();
			$detail=M('user_info')->where("phone='{$loginphone}'")->select();
			$life=M('user_life')->where("phone='{$loginphone}'")->select();
			$couple=M('couple')->where("phone='{$loginphone}'")->select();
			$focus=M('focus')->where(array(username=>$name))->select();
			// foreach ($focus as $value) {
				
			// }
			// $ids=M('user')->where(array(username=>'$value["fusername"]'))->select();
			$this->assign('title','个人中心');
		
			$this->assign('list',$data);
			$this->assign('list1',$detail);
			$this->assign('list2',$life);
			$this->assign('list3',$couple);
			$this->assign('list4',$focus);
			$this->assign('ids',$ids);
			$this->assign('phone',$loginphone);
			// $this->display('Personal/index');
			if($_SESSION['user'])
			{
				$loginname=$_SESSION['user']['phone'];
				$this->assign('loginname',$loginname);
				$this->display();
			}else
			{
				$this->redirect('Login/index');
			}
		
		}

		public function add()
		{

			$this->display('Personal/add');
		}

		public function doadd()
		{

			$data=$_POST;
			$shoujihao=$_POST['phone'];
			$model=M('user_info');
			$hao=M('user_info')->where(array(phone=>$shoujihao))->find();
			// dump($hao);exit;
			if($hao)
			{
				$this->redirect('Personal/index');
			}

			else{

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

			}
			


		public function life()
		{

			$this->display('Personal/addlife');
		}




		public function addlife()
		{
			$data=$_POST;
			$shoujihao=$_POST['phone'];
			$model=M('user_life');
			$hao=M('user_life')->where(array(phone=>$shoujihao))->find();
			
			if($hao)
			{
				$this->redirect('Personal/index');
			}else{

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
			}

			public function couple()
			{
				$this->display('Personal/couple');
			}


			public function addcouple()
		{
			$data=$_POST;
			$shoujihao=$_POST['phone'];
			$model=M('couple');
			$hao=M('couple')->where(array(phone=>$shoujihao))->find();
			if($hao){
				$this->redirect('Personal/index');
			}else{
				
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
			}

			public function detail()
			{
				$data=M('user_info')->where(array(phone=>$_SESSION['user']['phone']))->select();
				$this->assign('data',$data);
				$this->display('Personal/detailindex');
			}

			public function editinfo()
			{
				if(empty($_POST)){
					$this->redirect('Personal/detail');
					exit;
				}
				M('user_info')->create();


				if(M('user_info')->save() > 0){

					// echo M('user_info')->_sql();
					$this->success("编辑成功，正在返回...",'index');
				}else{

					// echo M('user_info')->_sql();
					$this->error('编辑失败...');
				}
			}

			public function lifeinfo()
			{
				$data=M('user_life')->where(array(phone=>$_SESSION['user']['phone']))->select();
				$this->assign('data',$data);
				$this->display('Personal/lifeindex');
			}

			public function lifeedit()
			{
				if(empty($_POST)){
					$this->redirect('Personal/detail');
					exit;
				}
				M('user_life')->create();


				if(M('user_life')->save() > 0){

					// echo M('user_info')->_sql();
					$this->success("编辑成功，正在返回...",'index');
				}else{

					// echo M('user_info')->_sql();
					$this->error('编辑失败...');
				}
			}

			public function editcouple()
			{
				$data=M('couple')->where(array(phone=>$_SESSION['user']['phone']))->select();
				$this->assign('data',$data);
				$this->display('Personal/coupleindex');
			}

			public function ec()
			{
				if(empty($_POST)){
					$this->redirect('Personal/detail');
					exit;
				}
				M('couple')->create();


				if(M('couple')->save() > 0){

					// echo M('couple')->_sql();
					$this->success("编辑成功，正在返回...",'index');
				}else{

					// echo M('couple')->_sql();
					$this->error('编辑失败...');
				}
			}




			public function tel()
		{
			$call=$_POST['mobile'];
			session('call',$call);
			$called=session('call');

			// $this->ajaxReturn($phone);
			// echo $_SESSION['user']['phone'];
			if($call!==$_SESSION['user']['phone'])
			{
				echo '1'.'<br>';
				echo $call.'<br>';
				echo $_SESSION['user']['phone'];
				echo $called;
			}
		}

		public function photo()
		{
			$model=M('user_photo');
			$id=$_SESSION['user']['id'];
			$data=$model->where(array(uid=>$id))->select();
			// dump($data);
			$this->assign('title','我的相册');
			$this->assign('list',$data);
			$this->display('Personal/photo');
		}

		public function dophoto()
		{
						if(!empty($_FILES))
			{
				$config=array(
					'maxSize' => 31457280,
					'rootPath' => 'Public',
					'savePath' => '/photo/',
					'saveName' => array('uniqid','za_'),
					'exts' => array('jpg','gif','png','jpeg'),
					'autoSub' => false,
					'subName' => array('date','Ymd'),
			);
				//实例化上传类
				$upload=new \Think\Upload($config);
				$info=$upload->upload();
				dump($info);
				if(!$info){
					$this->error($upload->getError());
				}else{

					foreach($info as $file){
						$dir=$file['rootPath'];

						$path=$file['savepath'];
						$pic=$file['savename'];			
						$showpic=M('user_photo');
						$showpic->create(); 
						$showpic->uid=$_SESSION['user']['id'];
						$showpic->picname=$pic;
						$showpic->time=time();
						// dump($_SESSION);exit;
						$showpic->name=$_SESSION['user']['username'];
						$showpic->add();
					}
					//实例化image类
					$image=new \Think\Image;
				
					$image->open('./Public/photo/'.$pic);
					//设置缩略图
					// $image->thumb(600,400)->save('./Public/photo/m_'.$pic);
					$image->thumb(95,100)->save('./Public/photo/s_'.$pic);

					
					$this->redirect('Personal/photo');
				}
			}
		}


			public function delper()
		{
			$picname=I('post.picname');
	        //执行删除
	        $dd= M('user_photo')->where("picname='$picname'")->delete();
	        //返回$dl

	        $this->ajaxReturn($dd);
		}

			public function delAll()
			{
				// dump($_POST);
				//接收ajax传过来的值
				$picname=I('post.picname');
				$ddd=M('user_photo')->where("picname='$picname'")->delete();
				//返回$ddd
				// if(!$ddd){
				// 	$ddd='';
				// }
				$this->ajaxReturn($ddd);
				// $this->redirect('Personal/photo');

			}


		

	
	
		}



		
	

