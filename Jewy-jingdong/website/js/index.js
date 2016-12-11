//顶部小广告关闭
$(function(){
	$('.close1').click(function(){
		$('#guanggao').hide();
	})
})
//选地址部分
$(function(){
	$('.xuanzhi li a').click(function(){
		var add=$(this).html()
		$('.beij a').html(add);		//赋值
		$('#active').attr('id','');		//去掉北京默认的样式
		$(this).attr('id','active');	//给点击后的赋给样式
	})
})
//轮播部分
		var i=0;
		var t;
//悬浮点点换图片
$('.lun-dian1 ul li').hover(function(){
	clearTimeout(t);
	var n=$(this).index();		//获取当前li的下标
	$('.lun-dian1 ul li').removeClass('active4');//去除点的active4的属性
	$(this).addClass('active4');				//添加点的active4的属性
	$('.lunbo a img').removeClass('active5');	//去除所有图片的active5属性
	$('.lunbo a img').eq(n).addClass('active5');//去除点的active4的属性
	i=n;		//赋值
},function(){
	t=setTimeout('lunBo()',2000);
})		

//点击左右切换图片
	$('.lun-l').click(function(){
		if(i==0){i=8;}
		i-=2;
		lunBo();		
	})
	$('.lun-r').click(function(){
		lunBo();		
	})
//	图片动起来，动次打次
	function lunBo(){
		clearTimeout(t)		
		i==7?i=0:i++;			//重置
		$('.lunbo a img').removeClass('active5');	//去除所有图片的active5属性
		$('.lun-dian1 ul li').removeClass('active4');//去除点的active4的属性
		$('.lunbo a img').eq(i).addClass('active5');//添加active5属性
		$('.lun-dian1 ul li').eq(i).addClass('active4');//添加点的active4的属性
		t=setTimeout('lunBo()',2000);		
	}	
	window.lunBo();
//lunBo();

//京东倒计时
function jiShi(){
	var home=new Date('2016/12/12 23:00:00');	//创建目标时间
	var now=new Date();	//当前时间
	var last=(home-now)/1000;			//剩余时间
	var h=Math.floor(last/3600);			//剩余小时
	var min=Math.floor((last-h*3600)/60);	//剩余分钟
	var s=Math.floor(last-h*3600-min*60);   //剩余秒数
	if(h<10){h='0'+h;}
	if(min<10){min='0'+min;}
	if(s<10){s='0'+s;}
	var a=$('.shi .xs1').html(h);
	var b=$('.fen .fen2').html(min);
	var c=$('.miao .miao3').html(s);;
	
	setTimeout('jiShi()',1000);
}
window.onload=jiShi;

//选项卡卖书部分
$(function(){
	$('.nav3 a').hover(function(){
//		菜单悬浮部分
		$('.nav3 a.active6').removeClass('active6');
		$(this).addClass('active6');		
//		var n=$('.nav3 a').index($(this));
		var n=$(this).index();
		$('.choice-xuan .choice-con').hide();	//当前所有的都隐藏
		$('.choice-con').eq(n).show();			//被点击的显示
		$('.nav3 span').css('left',n*80+'px')
	})
})

//底部左右点击换照片的广告
$(function(){
//	爱逛下边的小广告
	$('.jtou-l i').click(function(){
		$('.aiguang-gg ul').css('left',-570+'px');
	})
	$('.jtou-r i').click(function(){
		$('.aiguang-gg ul').css('left',0+'px');
	})
//	爱美丽下边的小广告
	$('.jtou-l1 i').click(function(){
		$('.aimeili-gg ul').css('left',-570+'px');
	})
	$('.jtou-r1 i').click(function(){
		$('.aimeili-gg ul').css('left',0+'px');
	})
//	家用电器下边的小广告
	$('.jtou-l2 i').click(function(){
		$('.jiadian-gg ul').css('left',-570+'px');
	})
	$('.jtou-r2 i').click(function(){
		$('.jiadian-gg ul').css('left',0+'px');
	})
//	爱搞机下边的小广告
	$('.jtou-l3 i').click(function(){
		$('.gaoji-gg ul').css('left',-570+'px');
	})
	$('.jtou-r3 i').click(function(){
		$('.gaoji-gg ul').css('left',0+'px');
	})
//	电脑数码下边的小广告
	$('.jtou-l4 i').click(function(){
		$('.shuma-gg ul').css('left',-1130+'px');
	})
	$('.jtou-r4 i').click(function(){
		$('.shuma-gg ul').css('left',0+'px');
	})
	//	玩3C下边的小广告
	$('.jtou-l5 i').click(function(){
		$('.wan3c-gg ul').css('left',-570+'px');
	})
	$('.jtou-r5 i').click(function(){
		$('.wan3c-gg ul').css('left',0+'px');
	})
	//	爱运动下边的小广告
	$('.jtou-l6 i').click(function(){
		$('.aiyundong-gg ul').css('left',-570+'px');
	})
	$('.jtou-r6 i').click(function(){
		$('.aiyundong-gg ul').css('left',0+'px');
	})
})

// 向下滚动一定位置顶部出现的搜索框
$(function(){
	$(window).scroll(function(){
		var gun=$(document).scrollTop();
		var winh=$('#miaosha').offset().top;
		if(gun>=winh){
			$('#top-search').slideDown(800);			
		}else{
			$('#top-search').hide();
		}
	}) 
})
// 屏幕左边楼梯效果
$(function(){	
	//楼梯出现
	$(window).scroll(function(){
		var gun=$(document).scrollTop();
		var winh=$('.xianshi').offset().top;
		if(gun>=winh){
			$('#louti').show();			
		}else{
			$('#louti').hide();
		}
	})
	var ceng=new Array();
	var i=0;
	//获取每个元素到顶部的距离	并得到一个数组
	$('.floor').each(function(i){
		ceng[i]=$('.floor').eq(i).offset().top-50;
//	console.log(ceng[i]);
	});
	
	// 换颜色部分
	$(window).bind('scroll',Mmd);
		function Mmd(){
		var juli=$(document).scrollTop();// 滚过的距离
	for(i=0;i<=ceng.length;i++){
		if(juli>=ceng[i]){
			$('#louti li').removeClass('active8');
			$('#louti li').eq(i).addClass('active8');
		}}
	}
	
	// 点击换楼层，换样式
	$('#louti li').click(function(){		
		$('#louti li').removeClass('active8');
		$(this).addClass('active8');	
		var n=$(this).index();	//获取当前li的下标
		//删除事件
		$(window).unbind('scroll',Mmd)
		//需要滚动的距离
		var h=ceng[n];
		$('body,html').animate({scrollTop:h},'fast',function(){
			$(window).bind('scroll',Mmd);
		});
	})
	//返回顶部
	$('#louti .goback').click(function(){
		$('body,html').animate({scrollTop:'0px'},'normal');
	})	
	
})
		// 屏幕右边
$(function(){
	//返回顶部
	$('.youjiang .ding').click(function(){
		$('body,html').animate({scrollTop:'0px'},'normal');
	})
	// 屏幕右边悬浮特效
	$('.tiaozhuang li').hover(function(){
		 c=$('.tiaozhuang li').index($(this));
		$('.tiaozhuang li span').eq(c).animate({left:'-60px'})
		$('.tiaozhuang li a').eq(c).css('background-color','#D70B1C')
		$('.tiaozhuang li span').eq(c).css('background-color','#D70B1C')
	},function(){
		$('.tiaozhuang li span').eq(c).animate({left:'35px'})
		$('.tiaozhuang li a').eq(c).css('background-color','#7A6E6E')
		$('.tiaozhuang li span').eq(c).css('background-color','#7A6E6E')
	})

	// 屏幕右下角悬浮特效
	$('.youjiang li').hover(function(){
		 c=$('.youjiang li').index($(this));
		$('.youjiang li i').eq(c).animate({left:'-60px'})
		$('.youjiang li a').eq(c).css('background-color','#D70B1C')
		$('.youjiang li i').eq(c).css('background-color','#D70B1C')
	},function(){
		$('.youjiang li i').eq(c).animate({left:'35px'})
		$('.youjiang li a').eq(c).css('background-color','#7A6E6E')
		$('.youjiang li i').eq(c).css('background-color','#7A6E6E')
	})
})

//瀑布流
$(window).scroll(function(){
//	图片数组
var arrImg=["image/gcm.jpg!q90.JPG","image/fuju.jpg!q90.JPG","image/shubiao.jpg!q90.JPG",
			"image/wly.jpg!q90.JPG","image/xtg.jpg!q90.JPG","image/hbyd.jpg!q90.JPG",
			"image/qpl.jpg!q90.JPG","image/lingdai.jpg!q90.JPG","image/zgx.jpg!q90.JPG",
			"image/xyzk.jpg!q90.JPG","image/ddys.jpg!q90.JPG","image/bhm.jpg!q90.JPG",
			"image/lyl.jpg!q90.JPG","image/zyyf.jpg!q90.JPG","image/rgt.jpg!q90.JPG"]
	//	距离底部还以多少没显示
	var botm=$(document).height()-$(document).scrollTop()-$(window).height();
	var hmggH=$('.bugou-con').height();
	if(botm<500&&hmggH<6000){
		var YuanLai = $('.bugou-con li').length;
		for(i=0;i<5;i++){
			var hmggimg = Math.floor(Math.random()*15);
			var hmggtxt='<li><a href="###"><img src='+arrImg[hmggimg]+'><p>【京东超市】洗发露 专业去屑 从不伤头发 淡淡余香</p><i>￥</i><span>45.9</span></a></li>'
			$('.bugou-con ul').append(hmggtxt);
		}
	}
})

//点击显示弹框
$(function(){
	$('.tankuang').click(function(){
		$('#denglu').show(300)
		$('.bg-tankuang').show()
	})
//	扫码登陆和账户登录事件
	$('.denglu-con-top a span').hover(function(){
		$('.denglu-con-top .active9').removeClass('active9');
		$(this).addClass('active9');
	},function(){		
		$('.denglu-con-top .active9').addClass('active9');
//		$(this).removeClass('active9');
	})
//	点击扫码登陆和账户登录事件
	$('.smdl').click(function(){
		$('.denglu-mid-box').css('left','-350px')
	})
	$('.zhdl').click(function(){
		$('.denglu-mid-box').css('left','0px')
	})
})
//点击关闭弹框
$(function(){
	$('.close2').click(function(){
		$('#denglu').hide(300)
		$('.bg-tankuang').hide()
	})
})
//悬浮扫码部分图片隐藏
$(function(){
	$('.saoma').hover(function(){
		$('.saoma-r').show()
		$('.saoma-l').css('transform','translateX(0px)')
	},function(){
		$('.saoma-r').hide()
		$('.saoma-l').css('transform','translateX(100px)')
	})
})
