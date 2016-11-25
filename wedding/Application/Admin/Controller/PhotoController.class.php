<?php

	namespace Admin\Controller;
	use Think\Controller;
	use Think\Page;

	class PhotoController extends Controller
	{
		public function index()
		{
			$photo=M('user_photo');
			$count=$photo->count();
			$num=4;
			$Page=new \Think\Page($count,$num);
			$Page->setConfig('prev','上一页');
			$Page->setConfig('next','下一页');
			$Page->setConfig('first','首页');

			$Page->setConfig('theme','%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END%');
			$show=$Page->show();
			// dump($show);
			$data=$photo->field('p.*,u.phone,u.username')->table('za_user_photo p,za_user u')->where("p.uid=u.id")->order('id')->limit($Page->firstRow.','.$Page->listRows)->select();
			// $cou=$Page->totalPages;
			$this->assign('title','相册管理');
			$this->assign('data',$data);
			$this->assign('show',$show);
			$this->assign('page',$cou);
			$this->display();
		}

		public function del()
		{
			  $picname=I('post.picname');
        //执行删除
			  // exit;
        $dl= M('user_photo')->where("picname='$picname'")->delete();
        //返回$dl
        $this->ajaxReturn($dl);
		}
	}
