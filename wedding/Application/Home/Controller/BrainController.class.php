<?php
	  namespace Home\Controller;
	  use Think\Controller;

	  class BrainController extends EmptyController
	  {

		public function index()
		{

			if(empty($_SESSION['user']))
			{
				//判断有无登录
				$this->redirect('Login/index');
				
			}
			
			

			$ch=curl_init();
			
			 $url = 'http://apis.baidu.com/txapi/huabian/newtop?num=5&page=2';
			$header=array('apikey:1140e4e3cd53dfc67d46a0b71141dc7c',);
			//添加apikey到header
			curl_setopt($ch,CURLOPT_HTTPHEADER,$header);
			curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
			//执行HTTP请求
			curl_setopt($ch,CURLOPT_URL,$url);
			$res=curl_exec($ch);

			$obj=json_decode($res);
			$newslist=$obj->newslist;
			// dump($obj);
		
			
			$this->assign('title','娱乐花边');
			$this->assign('data',$newslist);
			$this->display('Brain/index');
		}
	}
