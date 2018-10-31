window.onload = function(){
//	吸顶js
	var obj = document.getElementById("banner_1");
			    var ot = obj.offsetTop+150;  //当前对象到其上级层顶部的距离.
			    document.onscroll = function () {
			        var st = document.body.scrollTop || document.documentElement.scrollTop;
			       // console.log(st)  cs ww
			        obj.setAttribute("data-fixed",st >= ot?"fixed":"");
			    }
	
	
	
	
	
	//商品1的三个按钮
	var oYao_mai_Btns1 = document.getElementById("yao_mai_Btns1");
	var oYao_mai1_Btn1 = oYao_mai_Btns1.getElementsByTagName("input")[0];
	var oYao_mai1_Btn2 = oYao_mai_Btns1.getElementsByTagName("input")[2];
	var oYao_mai1_Txt = oYao_mai_Btns1.getElementsByTagName("input")[1];
	
	//	商品2的三个按钮
	var oYao_mai_Btns2 = document.getElementById("yao_mai_Btns2");
	var oYao_mai2_Btn1 = oYao_mai_Btns2.getElementsByTagName("input")[0];
	var oYao_mai2_Btn2 = oYao_mai_Btns2.getElementsByTagName("input")[2];
	var oYao_mai2_Txt = oYao_mai_Btns2.getElementsByTagName("input")[1];
	
	//商品1合计
	var oYao_mai1_sum_per = document.getElementById("yao_mai_price_red1");
	var oYao_mai1_sum = oYao_mai1_sum_per.getElementsByTagName("span")[0];
	
	//商品2合计
	var oYao_mai2_sum_per = document.getElementById("yao_mai_price_red2");
	var oYao_mai2_sum = oYao_mai2_sum_per.getElementsByTagName("span")[0];
	
	//总计
	var all_sum1 = document.getElementById("jie_suan");
	var all_sum = all_sum1.getElementsByTagName("i")[0];
	
	//商品1的减号
	oYao_mai1_Btn1.onclick=function(){
		if(parseInt(oYao_mai1_Txt.value)>0){
			var jian_yi = parseInt(oYao_mai1_Txt.value)-1;
			oYao_mai1_Txt.value= jian_yi;
		}
		var sum1 = parseInt(oYao_mai1_Txt.value)*189;
		
		//商品1的总和
		oYao_mai1_sum.innerHTML=sum1;
		
		//所有总和
		var sum = parseInt(oYao_mai1_Txt.value)*189+parseInt(oYao_mai2_Txt.value)*2599;
		all_sum.innerHTML=sum;
	}
	
	//商品1的加号
	oYao_mai1_Btn2.onclick=function(){
		var jia_yi = parseInt(oYao_mai1_Txt.value)+1;
		oYao_mai1_Txt.value= jia_yi;
			
		var sum1 = parseInt(oYao_mai1_Txt.value)*189;
		
		//商品1的总和
		oYao_mai1_sum.innerHTML=sum1;
		
		//所有总和
		var sum = parseInt(oYao_mai1_Txt.value)*189+parseInt(oYao_mai2_Txt.value)*2599;
		all_sum.innerHTML=sum;
	}
	
	
	//商品2的减号
	oYao_mai2_Btn1.onclick=function(){
		if(parseInt(oYao_mai2_Txt.value)>0){
			var jian_yi = parseInt(oYao_mai2_Txt.value)-1;
			oYao_mai2_Txt.value= jian_yi;
		}
		var sum2 = parseInt(oYao_mai2_Txt.value)*2599;
		
		//商品2的总和
		oYao_mai2_sum.innerHTML=sum2;
		
		//所有总和
		var sum = parseInt(oYao_mai1_Txt.value)*189+parseInt(oYao_mai2_Txt.value)*2599;
		all_sum.innerHTML=sum;
	}
	
	//商品2的加号
	oYao_mai2_Btn2.onclick=function(){
		var jian_yi = parseInt(oYao_mai2_Txt.value)+1;
		oYao_mai2_Txt.value= jian_yi;
		
		var sum2 = parseInt(oYao_mai2_Txt.value)*2599;
		
		//商品2的总和
		oYao_mai2_sum.innerHTML=sum2;
		
		//所有总和
		var sum = parseInt(oYao_mai1_Txt.value)*189+parseInt(oYao_mai2_Txt.value)*2599;
		all_sum.innerHTML=sum;
	}
}
