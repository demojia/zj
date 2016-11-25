<?php

	namespace Home\Controller;
	use Think\Controller;

	class SearchController extends EmptyController
	{
		public function index()
		{

			if(empty($_SESSION['user']))
			{
				//保留手机号用作以后的session的判断
				$this->redirect('Login/index');
			
			}
				//判断有无登录
		
			

			$sex=$_POST['sex'];
			$education=$_POST['education'];
			$salary=$_POST['salary'];
			$key=$_POST['keyword'];
			$model=M('user');
			//记录用户总数
			// $count=M('user')->count();
			// echo $data;


			
			if(empty($_POST)){
				if($_SESSION['user']['sex']==1){

			
				$count=$model->where('sex=0 and edu>=0')->count();
				}else{
			
				$count=$model->where('sex=1 and edu>=0')->count();
				}
			}else{
				
				
				$count=$model->where("sex={$sex} and edu={$education} and salary={$salary} ")->count();
				// echo $model->_sql();
			}
			if($_POST['keyword']){
		
				$count=$model->where(array(username=>$key))->count();
			}



			$Page=new \Think\Page($count,5);
			$Page->setConfig('prev','上一页');
			$Page->setConfig('next','下一页');
			$Page->setConfig('theme', '%HEADER%');
			$show=$Page->show();//分页显示输出



			if(empty($_POST)){
				if($_SESSION['user']['sex']==1){

				$data=$model->where('sex=0 and edu>=0')->limit($Page->firstRow . ',' . $Page->listRows)->select();
				
				}else{
				$data=$model->where('sex=1 and edu>=0')->limit($Page->firstRow . ',' . $Page->listRows)->select();
		
				}
			}else{
				
				$data=$model->where("sex={$sex} and edu={$education} and salary={$salary} ")->limit($Page->firstRow . ',' . $Page->listRows)->select();
			
				// echo $model->_sql();
			}
			if($_POST['keyword']){
				$data=$model->where(array(username=>$key))->limit($Page->firstRow . ',' . $Page->listRows)->select();
	
			}
			if(empty($data)){
				$tishi="暂无匹配的良人呦，再看看吧";
			}
			$this->assign('tishi',$tishi);
			$this->assign('data',$data);
			$this->assign('page',$show);
			$this->assign('title','会员搜索');
			$this->display();
		}
	}
