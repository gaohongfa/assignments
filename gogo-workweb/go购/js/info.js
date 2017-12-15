        //console.log(localStorage.key(0));
		//轮播图
		$(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',		    
		    pagination: '.swiper-pagination',
		    //以下两条用于解决swipeer写入到ajax请求后不能滑动的问题
		    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
		  });                           
        });
       
       
       $(function(){
       	 //获取详情
       var goodId=window.location.hash.slice(1);
       $.ajax({
       	type:"get",
       	url:'http://datainfo.duapp.com/shopdata/getGoods.php',
       	dataType:'jsonp',
       	data:{goodsID:goodId},
       	success:function(data){
       		console.log(data[0]);
       		
       		//商品名
      		$('#cname').html($('#cname').html()+data[0].goodsName);
      		
      		//价格
      		$('#price').html($('#price').html()+`<span style="font-size: 0.25rem;"> ￥</span>`+data[0].price); 
      		
      		//轮播图
      	    $("#0").html($("#0").html()+`<img src="`+ data[0].goodsListImg+ ` " style="width:100% ; " />`);
      		$("#1").html($("#1").html()+`<img src="`+JSON.parse(data[0].imgsUrl)[0]+ ` " style="width: 100% ;"/>`);
      		$("#2").html($("#2").html()+`<img src="`+JSON.parse(data[0].imgsUrl)[1]+ ` " style="width: 100%"/>`);
      		
      		//加入购物车
            $('#cart').click(function(){
         	//window.location.href= "cart.html#"+ goodId;
         	//console.log(goodId);
         	    if(!localStorage.getItem('userid')){
         	    	alert('未登录 请前往登录');
         	    	window.location.href="login.html";
         	    }
         	    else{
         	    //更新购物车
	         	$.ajax({
	         		type:"get",
			       	url: 'http://datainfo.duapp.com/shopdata/updatecar.php',		        
			       	data:{userID:localStorage.key(0),goodsID:goodId,number:1},
			       	success:function(data){
			       		if(data==1){
			       			    
			       			   //添加购物车时的弹框提示
                                var layer=document.createElement("div");
							    layer.id="layer";							 
							    var style=
							    {
							        background:"black",
							        position:"absolute", 
							        width:"3rem",
							        height:"0.8rem",
							        left:"2rem",
							        top:"7.5rem",
							        borderRadius:"0.5rem"
							    }
							    layer.innerHTML="<p style='color: white; font-size: 0.3rem;text-align: center;margin-top: 0.2rem;'>添加成功！</p>";
							    for(var i in style)
							        layer.style[i]=style[i];   
							    if(document.getElementById("layer")==null)
							    {
							    	//console.log(123);
							        document.body.appendChild(layer);
							        setTimeout(function(){
							        	document.body.removeChild(layer);							        	
							        },1500)
							        
							    }
		  
			       			console.log("成功加入购物车");
			       	     }
			       		if(data==0){
			       			console.log("加入购物车失败");
			       		}
			       	}
			       		
	         	})
         	    
         	  }//else结束
         	
         });
       	}
       });
       })
       