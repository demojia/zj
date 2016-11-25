<?php

	namespace Home\Controller;
	use Think\Controller;

	class WeatherController extends EmptyController
	{
		public function index()
		{
			$ch=curl_init();
			$city=I('post.city','盐城');
			$url='http://apis.baidu.com/apistore/weatherservice/citylist?cityname='.$city;
			$header=array('apikey:1140e4e3cd53dfc67d46a0b71141dc7c',);


			//添加apikey到header
			curl_setopt($ch,CURLOPT_HTTPHEADER,$header);
			curl_setOPT($ch,CURLOPT_RETURNTRANSFER,true);

			//执行HTTP请求
			curl_setopt($ch,CURLOPT_URL,$url);
			$res=curl_exec($ch);
			$obj=json_decode($res);


			dump($obj);
			//关闭JSON数据
			curl_close($ch);

			$this->assign('data',$obj);
			$this->assign('title','天气查询');
			$this->display('Weather/index');	
		}






		public function getweather()
		{
			$ch=curl_init();
			$city=I('post.city','盐城');
			$url = 'http://apis.baidu.com/apistore/weatherservice/citylist?cityname='.$city;
			$header=array('apikey:1140e4e3cd53dfc67d46a0b71141dc7c',);

			//添加apikey到header
			curl_setopt($ch,CURLOPT_HTTPHEADER,$header);
			curl_setOPT($ch,CURLOPT_RETURNTRASFER,1);
			curl_setopt($ch,CURLOPT_URL,$url);
			$res=curl_exec($ch);
			dump(json_decode($res));



		}
	}