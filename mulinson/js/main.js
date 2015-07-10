window.onload = function(){
	var back_top =document.getElementById('back_top');
    var btn = document.getElementById('btn');
    var timer = null;
    // 获取页面的可视高度
    var clientHeight = document.documentElement.clientHeight;
    var isTop = true;
    // 滚动条滚动后触发
    window.onscroll = function (){
    	// 获取滚动条滚动的就高度
    	var slTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(slTop >= clientHeight){
            back_top.style.display = 'block';
        } else {
        	back_top.style.display = 'none';
        }
        // 当滚动条滚动时清空timer
        if(!isTop){
        	clearInterval(timer);
        }
        isTop = false;
    }
    btn.onclick = function (){
    	// 获取滚动条滚动的高度
    	var slTop = document.documentElement.scrollTop || document.body.scrollTop;
    	timer = setInterval( function(){
            var changespeed = slTop/2
            document.documentElement.scrollTop = document.body.scrollTop = -slTop + changespeed; 
    	},30);
    	// 当滚动高度为0时清空timer
        if (!slTop) {
        	clearInterval(timer);
        };
    }
}