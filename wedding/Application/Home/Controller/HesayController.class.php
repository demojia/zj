<?php

	namespace Home\Controller;
	use Think\Controller;

	class HesayController extends EmptyController
	{
		public function index()
		{
			$ch=curl_init();
			$me=I('post.me','水瓶');
			$he=I('post.he','巨蟹');
			 $url = 'http://apis.baidu.com/txapi/xingzuo/xingzuo?me='.$me.'&he='.$he;
			$header=array('apikey:1140e4e3cd53dfc67d46a0b71141dc7c',);
			//添加apikey到header
			curl_setopt($ch,CURLOPT_HTTPHEADER,$header);
			curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
			//执行HTTP请求
			curl_setopt($ch,CURLOPT_URL,$url);
			$res=curl_exec($ch);

			$obj=json_decode($res);
			dump($obj);
			$model=M('xingzuo')->select();
			$this->assign('list',$model);
			$this->assign('data',$obj);
			$this->assign('title','星座配对');
			$this->display();
		}
	}

	