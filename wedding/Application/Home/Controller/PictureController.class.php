<?php

	namespace Home\Controller;
	use Think\Controller;

	class PictureController extends EmptyController
	{
		public function index()
		{
			$this->display();
		}

		public function uploadfile()
		{
			if(!empty($_FILES))
			{
				$config=array(
					'maxSize' => 31457280,
					'rootPath' => 'Public',
					'savePath' => '/uploads/',
					'saveName' => array('uniqid','za_'),
					'exts' => array('jpg','gif','png','jpeg'),
					'autoSub' => false,
					'subName' => array('date','Ymd'),
			);
				$upload=new \Think\Upload($config);
				$image=$upload->upload();
				dump($image);
				if(!$image){
					$this->error($upload->getError());
				}else{
					$info=$image['photo']['savename'];
					$_SESSION['user']['icon']=$info;
					// $this->success('ok');
				}
			}

			$model=M('user');
			$id=$_SESSION['user']['id'];
	
			$res=$model->where("id='{$id}'")->save(array(icon=>$info));

			if($res)
			{
				$this->success('头像修改成功',U('Personal/index'));
				
			}else{
				$this->error('头像修改失败');
			}
			
		}
	}