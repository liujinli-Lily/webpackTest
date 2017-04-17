	// webpack对多个模块依赖进行打包
	require("./module1"); 
	//css
	// require('../css/main.scss');
	require('../css/index.css'); 
	// let loader = require('./bind');
	// console.log(loader); 

	$(".tab_change li").click(function(){
		var c_index = $(this).index();
		$(".tab_change li").removeClass("on");
		$(this).addClass("on");
		$(".div").children("div").eq(c_index).show().siblings("div").hide();
	})