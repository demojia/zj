<?php
	namespace Home\Controller;
	use Think\Controller;

	class MusicController extends EmptyController
	{
		public function index()
		{

			$url='http://music.163.com/api/playlist/detail?id=37880978&updateTime=-1';
	

			$ch=curl_init();
			//添加apikey到header
			curl_setopt($ch,CURLOPT_URL,$url);
			curl_setopt($ch,CURLOPT_HEADER,$header);
			curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
			// curl_setopt($ch,CURLOPT_BINARYTRANSFER,true);
		
			//执行HTTP请求
			$res=curl_exec($ch);

			$obj=json_decode($res);
			// echo '<pre>';
			// print_r($obj);
			// echo '</pre>';
			// dump($obj);
			$this->assign('title','珍爱电台');
			$this->assign('data',$obj);
			$this->display();





		}
	}













