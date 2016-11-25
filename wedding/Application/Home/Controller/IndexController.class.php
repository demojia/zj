<?php

	namespace Home\Controller;
	use Think\Controller;

	class IndexController extends EmptyController
	{
		public function index()
		{
			// dump($_SESSION['user']['phone']);
			$d=$_SESSION['user']['phone'];
			// echo $d;
			$model=M('lunbo');
			$data=$model->select();
			$this->assign('list',$data);

			$moduel=M('user');
			$row=$moduel->where("phone<>'{$d}'")->select();
			$this->assign('list1',$row);
			if($_SESSION['user'])
			{
				//保留手机号用作以后的session的判断
				$loginname=$_SESSION['user']['phone'];
				$this->assign('loginname',$loginname);
				$this->display();
			}else
			{
				//判断有无登录
				$this->redirect('Login/index');
			}
			
		}

		public function know()
		{
			$id=I('get.id/d');
			$phone=I('get.phone');
			$model1=M('user')->where(array(id=>$id))->select();
			$model2=M('couple')->where(array(phone=>$phone))->select();
			$model3=M('user_life')->where(array(phone=>$phone))->select();
			//遍历查询出的值
			foreach ($model1 as $value1){}
			foreach ($model2 as $value2){}
			foreach ($model3 as $value3){}
				// dump($value1);
				// dump($value2);
				// dump($value3);


			//用assign给html中的变量传递值
			$this->assign('name',$value1['username']);
			$this->assign('icon',$value1['icon']);
			$this->assign('w_province',$value1['w_province']);
			$this->assign('w_city',$value1['w_city']);
			$this->assign('edu',$value1['edu']);
			$this->assign('job',$value1['job']);
			$this->assign('age',$value1['age']);
			$this->assign('height',$value1['height']);
			$this->assign('m_status',$value1['m_status']);
			$this->assign('salary',$value1['salary']);
			$this->assign('xz',$value1['xingzuo']);
			$this->assign('house',$value3['house']);
			$this->assign('car',$value3['car']);
			$this->assign('child',$value2['child']);
			$this->assign('list2',$model2);
			$this->assign('list3'.$model3);
			$this->display('Index/know');
		}


		public function focus()
		{
			$id=I('post.id/d');
			//不同用户传过来的id进行查询
			$single=M('user')->find($id);
			// echo $single['username'];
			$data['fusername']=$single['username'];
			$data['username']=$_SESSION['user']['username'];
			// echo $data['username'];
			$model=M('focus');
			// dump($data);
			$row=$model->where("fusername='{$data['fusername']}' and username='{$data['username']}'")->select();


			if($row){
				echo 432;
			}else{
				//创建数据
				if($model->create($data))
				{
					if($model->add())
						{
							echo 2;
						}

					else{
							echo 3;
						}
				}
				else{
						echo 3;
					}
			}

			// $this->ajaxReturn($data);

		}


		
	}