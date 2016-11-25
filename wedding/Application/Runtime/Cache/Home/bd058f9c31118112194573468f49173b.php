<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
	<title>优质会员信息</title>
	
<meta charset="GBK">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<link rel="stylesheet" href="/wedding/Public/home/geren/css/public_44e62d1.css"/>
<link rel="stylesheet" href="/wedding/Public/home/geren/css/common_c6ba449.css"/>
<script src="/wedding/Public/home/geren/js/lab.min_e842152.js"></script>
<script src="/wedding/Public/home/geren/js/sea_7e06016.js"></script>
<script src="/wedding/Public/home/geren/js/sea-config_621fcc5.js"></script>


	<link rel="stylesheet" href="/wedding/Public/home/geren/css/profile_14afa2e.css"/>
</head>
<body>

<header class="ol-header">
	<section class="frameW clearfix">
		<a class="ol-logo" href="http://www.zhenai.com/" title="珍爱网"></a>
		<a class="ol-word" href="/offline/index.do">直营门店</a>
		<menu id="ol-nav" class="ol-nav">
			<ul>
				<li id="j-menuBeauty" class="menu-scroll"></li>
				<li><a href="/offline/index.do">首页</a></li>
				<li><a href="/offline/serviceIntroduce.do">服务介绍</a></li>
				<li><a href="/offline/handsomes.do" rel="nofollow">优质会员</a></li>
				<li><a href="/offline/loveStoryIndex.do" rel="nofollow">成功故事</a></li>
				<li><a href="/offline/activityIndex.do">精彩活动</a></li>
				<li><a href="/offline/hnIndex.do">红娘风采</a></li>
				<li><a href="/offline/storeIndex.do">门店地址</a></li>
			</ul>
		</menu>
	</section>
</header>
<section class="ol-placeholder"></section>
<!-- 头部end -->
	<article class="ol-banner2"></article>
	<article class="frameW profileCon">
		<section class="bbp">
			<div class="memberInfo clearfix">
				<div class="memberPhoto">
					<img src="/wedding/Public/uploads/<?php echo ($icon); ?>" alt="" />
				</div>
				<div class="memberBaseInfo">
					<p class="brief-name"><?php echo ($name); ?>
					<p class="brief-info"><?php echo ($age); ?> / <?php echo ($height); ?>cm /
					<?php if($salary == '5'): ?>20000以上
                <?php elseif($salary == '0'): ?>3000-5000
                <?php elseif($salary == '1'): ?>5001-8000
                <?php elseif($salary == '2'): ?>8001-10000
                <?php elseif($salary == '3'): ?>10001-15000
                <?php elseif($salary == '4'): ?>10001-20000<?php endif; ?>元</p>
					<ul class="brief-list clearfix">
						<li><span>工作地：</span><?php echo ($w_province); ?>-<?php echo ($w_city); ?></li>
						<li><span>学历：</span>
				<?php if($edu == '0'): ?>高中及以下学历
                <?php elseif($edu == '1'): ?>中专
                <?php elseif($edu == '2'): ?>大专
                <?php elseif($edu == '3'): ?>本科
                <?php elseif($edu == '4'): ?>硕士
                <?php elseif($edu == '5'): ?>博士<?php endif; ?>
						</li>
						<li><span>职业：</span><?php echo ($job); ?></li>
						<li><span>婚况：</span>
					 <?php if($m_status == '0'): ?>未婚
                    <?php elseif($m_status == '1'): ?>离异
                    <?php elseif($m_status == '2'): ?>丧偶<?php endif; ?>
				</li>
						<li><span>有无子女：</span>
 					<?php if($child == '0'): ?>有
                    <?php elseif($child == '1'): ?>没有<?php endif; ?>
						</li>
						<li><span>星座：</span><?php echo ($xz); ?></li>
						<li><span>是否购房：</span>
					<?php if($house == '0'): ?>有
                    <?php elseif($house == '1'): ?>没有<?php endif; ?>
						</li>
						<li><span>是否买车：</span>
					<?php if($car == '0'): ?>有
                    <?php elseif($car == '1'): ?>没有<?php endif; ?>
						</li>
					</ul>

					<div class="info-text">
						<span>内心独白：</span>
						<div class="dubai">
							<p data-content="一位美丽善良的姑娘，非诚勿扰">一位美丽善良的姑娘，非诚勿扰<a class="open" href="javascript:;">更多&gt;&gt;</a></p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bbp wraper2">
			<div class="otherInfo clearfix">
				<div class="info-img">
					<img src="/wedding/Public/home/geren/picture/icon4_7e093de.png" alt="" />
					<h3>择偶要求</h3>
				</div>
				<div class="info-txt">
					<?php if(is_array($list2)): foreach($list2 as $key=>$value): ?><ul class="info-txt-list clearfix">
						<li><span>性别：</span>
					<?php if($value["sex"] == '0'): ?>男
                        <?php elseif($value["sex"] == '1'): ?>女<?php endif; ?>
						</li>
						<li><span>年龄：</span><?php echo ($value["age"]); ?></li>
						<li><span>身高：</span><?php echo ($value["height"]); ?></li>
						<li><span>城市：</span><?php echo ($value["w_province"]); ?>-<?php echo ($value["w_city"]); ?></li>
						<li><span>学历：</span>
					<?php if($edu == '0'): ?>高中及以下学历
                <?php elseif($edu == '1'): ?>中专
                <?php elseif($edu == '2'): ?>大专
                <?php elseif($edu == '3'): ?>本科
                <?php elseif($edu == '4'): ?>硕士
                <?php elseif($edu == '5'): ?>博士<?php endif; ?>	
						</li>
						<li><span>月收入：</span>
				<?php if($value["salary"] == '5'): ?>20000以上
                <?php elseif($value["salary"] == '0'): ?>3000-5000
                <?php elseif($value["salary"] == '1'): ?>5001-8000
                <?php elseif($value["salary"] == '2'): ?>8001-10000
                <?php elseif($value["salary"] == '3'): ?>10001-15000
                <?php elseif($value["salary"] == '4'): ?>10001-20000<?php endif; ?>
						</li>
						<li><span>婚况：</span>
				 <?php if($value["m_status"] == '0'): ?>未婚
                    <?php elseif($value["m_status"] == '1'): ?>离异
                    <?php elseif($value["m_status"] == '2'): ?>丧偶<?php endif; ?>
						</li>
						<li><span>是否要孩子：</span>
				 		<?php if($value["child"] == '0'): ?>要
                        <?php elseif($value["child"] == '1'): ?>不想要<?php endif; ?>
						</li>
						<li><span>职业：</span>
				 <?php if($value["job"] == '0'): ?>不限
                    <?php elseif($value["job"] == '1'): ?>服務類
                    <?php elseif($value["job"] == '2'): ?>IT<?php endif; ?>
						</li>
						<li><span>是否抽烟：</span>
					 <?php if($value["job"] == '0'): ?>不限
                    <?php elseif($value["job"] == '1'): ?>不抽<?php endif; ?>
						</li>
						<li><span>是否喝酒：</span>
				 <?php if($value["job"] == '0'): ?>不限
                    <?php elseif($value["job"] == '1'): ?>不抽<?php endif; ?>
						</li>
					</ul><?php endforeach; endif; ?>
				</div>
			</div>
			
		</section>
	</article>
	
<!-- 城市列表start -->
<div class="hot-city">
	<div class="city-wrap frameW">
        <div class="city-list clearfix">
			城市：
	           <a href="javascript:;">北京</a>
	           <a href="javascript:;">上海</a>
	           <a href="javascript:;">深圳</a>
	           <a href="javascript:;">广州</a>
	           <a href="javascript:;">苏州</a>
	           <a href="javascript:;">温州</a>
	           <a href="javascript:;">杭州</a>
	           <a href="javascript:;">宁波</a>
	           <a href="javascript:;">福州</a>
	           <a href="javascript:;">厦门</a>
	           <a href="javascript:;">济南</a>
	           <a href="javascript:;">青岛</a>
	           <a href="javascript:;">大连</a>
	           <a href="javascript:;">沈阳</a>
	           <a href="javascript:;">天津</a>
	           <a href="javascript:;">郑州</a>
	           <a href="javascript:;">合肥</a>
	           <a href="javascript:;">武汉</a>
	           <a href="javascript:;">长沙</a>
	           <a href="javascript:;">重庆</a>
	           <a href="javascript:;">成都</a>
	           <a href="javascript:;">西安</a>
	           <a href="javascript:;">昆明</a>
	           <a href="javascript:;">南宁</a>
		</div>
	</div>
</div>
<!-- 城市列表end -->
<!-- 尾部 start -->
<footer class="footer">
    <div class="frameW clearfix">
        <div class="about">
            <div class="quick">
            <a href="javascript:;" >关于我们</a>|
            <a href="javascript:;" >媒体关注</a>|
            <a href="javascript:;" >联系我们</a>|
            <a href="javascript:;" >加入我们</a>|
            <a href="javascript:;" >合作伙伴</a>|
            <a href="javascript:;">意见反馈</a>|
            <a href="javascript:;" >网站地图</a>|
            <a href="javascript:;">帮助中心</a>|
            <a href="javascript:;">珍爱会员</a>|
            <a href="javascript:;" >珍爱相亲</a>
        </div>
            <div class="brand grayL"><span>品牌：11年专业婚恋服务</span>&nbsp;&nbsp;<span>专业：庞大的资深红娘队伍</span>&nbsp;&nbsp;<span>真实：诚信会员验证体系</span></div>
            <div class="contact grayL"><span>客服热线：4001-520-520（周一至周日：9:00-21:00）</span><span>客服信箱：kefu@zhenai.com（周一至周五：10:00-19:00）</span></div>
            <div class="contact grayL"><span><a style="color:#9f9f9f;" href="http://profile.zhenai.com/v2/sys/reportEntry.do" target="_blank" rel="nofollow">违法和不良信息举报</a></span>&nbsp;&nbsp;<span>违法和不良信息举报专线：4008829288</span>&nbsp;&nbsp;<span>举报信箱：<a style="color: #9f9f9f;" href="mailto:jubao@zhenai.com" class="underlines" rel="nofollow">jubao@zhenai.com</a></span></div>
        </div>
        <div class="copyright grayL">
        	<p>Copyright &copy; 2005-2016 版权所有：深圳市珍爱网信息技术有限公司<br>增值电信业务经营许可证粤B2-20040382号 粤ICP备09157619</p>
        	<div class="out-link">
            	<a title="深圳网警备案" href="javascript:;" class="link2" rel="nofollow"></a>
            	<a title="国际联网备案" href="javascript:;" class="link1" rel="nofollow"></a>
            	<a title="深圳举报中心" href="javascript:;" class="link6" rel="nofollow"></a>
                <a title="违法和不良信息举报中心" href="javascript:;" class="link3" ></a>  
                <a title="诚信示范网站" href="javascript:;" class="link4" rel="nofollow"></a>
                <a title="AAA级信用企业" href="javascript:;" class="link7" rel="nofollow"></a>
            </div>
        </div>
    </div>
</footer>
<!-- 尾部 end -->
</body>
</html>