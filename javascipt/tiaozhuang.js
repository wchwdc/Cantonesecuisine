// JavaScript Document
	//给a标签加过渡时间
	//当点击a标签时触发
	$("a").click(function () {
	
	//给页面加过度时间（使用自定义函数修改）
    $("html, body").animate({
		
		//scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。attr("href")返回属性的值。offset是返回元素的宽高包括四个属性：offsetWidth、offsetHeight、offsetTop、offsetLeft
		scrollTop: $($(this).attr("href")).offset().top -0+ "px"
	}, 3000);
 
		return false;//不要这句会有点卡顿，停止这个函数

	});