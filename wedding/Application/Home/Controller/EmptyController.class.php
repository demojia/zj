<?php

	namespace Home\Controller;
	use Think\Controller;

	class EmptyController extends Controller
	{
		public function _empty($name)
		{
			$this->display('Empty/404');
		}


	}

