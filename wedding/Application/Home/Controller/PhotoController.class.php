<?php

	namespace Home\Controller;
	use Think\Controller;
	class PhotoController extends EmptyController
	{
		
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