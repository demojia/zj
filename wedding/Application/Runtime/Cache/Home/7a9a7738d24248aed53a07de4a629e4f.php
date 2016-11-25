<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE HTML>
<html style="padding-bottom: 54px;">
<head>
    <meta charset="UTF-8">

    <title>404</title>
 
    <link href="/wedding/Public/404/css/demo.css" rel="stylesheet" media="all" />

    <script type="text/javascript">
        var txt = "http://www.jq22.com/demo/jQuery40420161113";
        window.g1 = txt.substr(0, 3);
        window.g2 = txt.substr(0, 19);
    </script>
    <script src="/wedding/Public/404/js/pace.min.js" charset="GBK"></script>
    <link href="/wedding/Public/404/css/pace-theme-barber-shop.css" rel="stylesheet" />
    <script src="/wedding/Public/404/js/jquery.min.js"></script>
    <script src="/wedding/Public/404/js/jquery.qrcode.min.js"></script>
    <script type="text/javascript">

        var theme_list_open = false;

        $(document).ready(function () {
            function fixHeight() {
                var headerHeight = $("#switcher").height();
                $("#iframe").attr("height", $(window).height()-54+ "px");
            }
            $(window).resize(function () {
                fixHeight();
            }).resize();

            $('.icon-monitor').addClass('active');

            $(".icon-mobile-3").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width-3');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-mobile-2").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width-2');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-mobile-1").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width');
                $('.icon-tablet,.icon-mobile,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-tablet").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('tablet-width');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-monitor").click(function () {
                $("#by").css("overflow-y", "hidden");
                $('#iframe-wrap').removeClass().addClass('full-width');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });
        });
    </script>
    <script type="text/javascript">
        function Responsive($a) {
            if ($a == true) $("#Device").css("opacity", "100");
            if ($a == false) $("#Device").css("opacity", "0");
            $('#iframe-wrap').removeClass().addClass('full-width');
            $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
            $(this).addClass('active');
            return false;
        };
    </script>
</head>
<body id="by" style="overflow-y: hidden" >
    <div id="switcher">
		页面出错了，正在返回首页.....
    </div>
    <div id="iframe-wrap">
        <iframe id="iframe" scrolling="no" src="http://www.jq22.com/demo/jQuery40420161113" frameborder="0"  width="100%">
        </iframe>

    </div>
 

    

    <script type="text/javascript">
        $(document).ready(function () {
            $(".fdr").click(function () {
                $(".fdad").hide();
            });
        });
    </script>

    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?b3a3fc356d0af38b811a0ef8d50716b8";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
</script>


<script>
 function reloadyemian()//最好不要用reload这个关键字因为很容易和其它函数冲突 
{ 
	
window.location.href="<?php echo U('Index/index');?>"; 
} 

 window.setTimeout("reloadyemian();",3000); 
</script> 



</body>
</html>