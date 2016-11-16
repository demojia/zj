<?php

	namespace Admin\Controller;
	use Think\Controller;
	use Think\Image;

	class lunboController extends Controller
	{
		public function index()
		{
			$model=M('lunbo');
			$countpic=$model->count(id);
			$data=$model->select();
			$this->assign('data',$data);
			$this->assign('countpic',$countpic);
			$this->assign('title',轮播图管理);
			$this->display();


		} 

		public function add()
		{
			$this->display('Lunbo/add');
		}

		// public function doadd()
		// {
		// 	if(!empty($_FILES))
		// 	{
		// 		$config=array(
		// 			'maxSize' => 31457280,
		// 			'rootPath' => 'Public',
		// 			'savePath' => '/lunbo/',
		// 			'saveName' => array('uniqid','za_'),
		// 			'exts' => array('jpg','gif','png','jpeg'),
		// 			'autoSub' => false,
		// 			'subName' => array('date','Ymd'),
		// 	);
		// 		$upload=new \Think\Upload($config);
		// 		$image=$upload->upload();
		// 		dump($image);
		// 		if(!$image){
		// 			$this->error($upload->getError());
		// 		}else{

		// 			$map['pic']=$image['pic']['savename'];
		// 			$map['path']=$image['pic']['savepath'];
					

		// 		}
		// 	}
		// 	$model=M('lunbo');
		// 	$res=$model->add($map);
		// 	$sql=$model->_sql();
		// 	// echo $sql;
		// 	if($res)
		// 	{
		// 		$this->success('图片上传成功',U('Lunbo/index'));
				
		// 	}else{
		// 		$this->error('图片上传失败');
		// 	}



		// }





		public function doadd()
		{
			if(!empty($_FILES))
			{
				$config=array(
					'maxSize' => 31457280,
					'rootPath' => 'Public',
					'savePath' => '/lunbo/',
					'saveName' => array('uniqid','za_'),
					'exts' => array('jpg','gif','png','jpeg'),
					'autoSub' => false,
					'subName' => array('date','Ymd'),
			);
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
						$showpic=M('lunbo');
						$showpic->create();
						$showpic->pic=$pic;
						$showpic->path='/public/'.$path;
						$showpic->m_pic='m_'.$pic;
						$showpic->s_pic='s_'.$pic;
						$showpic->add();
					}

					$image=new \Think\Image;
				
					$image->open('./Public/lunbo/'.$pic);
					$image->thumb(600,400)->save('./Public/lunbo/m_'.$pic);
					$image->thumb(250,200)->save('./Public/lunbo/s_'.$pic);

					
					$this->redirect('index');
				}
			}
			// $model=M('lunbo');
			// $res=$model->add($map);
			// $sql=$model->_sql();
			// // echo $sql;
			// if($res)
			// {
			// 	$this->success('图片上传成功',U('Lunbo/index'));
				
			// }else{
			// 	$this->error('图片上传失败');
			// }



		}



 




		public function del()
		{
			//判断有无传递ID
			if(empty($_GET['id'])){
				$this->redirect('Admin/Lunbo/index');
				exit;
			}

			$id=I('get.id/d');
			if(M('lunbo')->delete($id)>0){
				$this->success('删除成功',U('index'));

			}else{
				$this->error('删除失败....',U('index'));
			}
		}

		public function edit($id)
		{
			$id=I('get.id/d');
			$data=M('lunbo')->find($id);
			$this->assign('title','添加用户');
			$this->assign('data',$data);
			$this->display('Lunbo/edit');
		}

		public function doedit()
		{
			// dump($_POST);
			$id=I('post.id/d');
			if(!empty($_FILES))
			{
				$config=array(
					'maxSize' => 31457280,
					'rootPath' => 'Public',
					'savePath' => '/lunbo/',
					'saveName' => array('uniqid','za_'),
					'exts' => array('jpg','gif','png','jpeg'),
					'autoSub' => false,
					'subName' => array('date','Ymd'),
			);
				$upload=new \Think\Upload($config);
				$image=$upload->upload();
				if(!$image){
					$this->error($upload->getError());
				}else{
					// $info=$image['pic']['savename'];
					// $path=$image['pic']['savepath'];

					$map['pic']=$image['pic']['savename'];
				
					
					// $this->success('ok');
				}
			}

		

			$model=M('lunbo');
			$res=$model->where("id='{$id}'")->save($map);
	
			$sql=$model->_sql();

			// echo $sql;
			if($res)
			{
				$this->success('图片上传成功',U('Lunbo/index'));
				
			}else{
				$this->error('图片上传失败');
			}
		}
	}

