window.onload=function(){
//	吸顶
	var obj = document.getElementById("banner_1");
			    var ot = obj.offsetTop+150;  //当前对象到其上级层顶部的距离.
			    document.onscroll = function () {
			        var st = document.body.scrollTop || document.documentElement.scrollTop;
			       // console.log(st)  cs ww
			        obj.setAttribute("data-fixed",st >= ot?"fixed":"");
			    }
	
	
//	加减
	var oJia_ge = document.getElementById("shou_jia");
	var oB = oJia_ge.getElementsByTagName("b")[0];
	
	var oTitle1 = document.getElementById("xq_right_p1");
	var oTitle2 = document.getElementById("xq_right_p2");
	
	var oBtn1 = document.getElementById("ban_ben1");
	var oBtn2 = document.getElementById("ban_ben2");
	var oBtn3 = document.getElementById("ban_ben3");
	var oBtn4 = document.getElementById("ban_ben4");
	
	var oShuLiang = document.getElementById("shu_liang");
	var oInput1 = oShuLiang.getElementsByTagName("input")[0];
	var oTxt = oShuLiang.getElementsByTagName("input")[1];
	var oInput2 = oShuLiang.getElementsByTagName("input")[2];
	
	
	oBtn1.onclick = function(){
		oTitle1.innerHTML="小米游戏本15.6英寸 i5 8GB内存 1050Ti";
		oTitle2.innerHTML="小米游戏本15.6英寸 i5 8GB内存 1050Ti";
		oB.innerHTML = "5999";
	}
	oBtn2.onclick = function(){
		oTitle1.innerHTML="小米游戏本15.6英寸 i5 8GB内存 1060";
		oTitle2.innerHTML="小米游戏本15.6英寸 i5 8GB内存 1060";
		oB.innerHTML = "6999";
	}
	oBtn3.onclick = function(){
		oTitle1.innerHTML="小米游戏本15.6英寸 i7 8GB内存 1060";
		oTitle2.innerHTML="小米游戏本15.6英寸 i7 8GB内存 1060";
		oB.innerHTML = "7999";
	}
	oBtn4.onclick = function(){
		oTitle1.innerHTML="小米游戏本15.6英寸 i7 16GB内存 1060";
		oTitle2.innerHTML="小米游戏本15.6英寸 i7 16GB内存 1060";
		oB.innerHTML = "8999";
	}
	
	parseInt(oTxt.value)
	
	oInput1.onclick = function(){
		if(parseInt(oTxt.value)>0){
			var jian_yi = parseInt(oTxt.value)-1;
			oTxt.value= jian_yi;
		}
	}
	oInput2.onclick = function(){
			var jia_yi = parseInt(oTxt.value)+1;
			oTxt.value= jia_yi;
	}
}
