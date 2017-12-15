//判断有没有swipper
		 window.onload=function(){
		 	if(!localStorage.getItem('swiper')){
		 		window.location.href='swiper.html';
		 	}
		 }
		 
		 
		//轮播图
		$(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {    
            speed: 1500,//设置滑动速度
            loop: true,
            autoplay:2000,             
		    direction: 'horizontal',//水平方向滑动		    
		    pagination: '.swiper-pagination',	
		    //以下两条用于解决swipeer写入到ajax请求后不能滑动的问题
		    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    	    
		  });                           
       });  
       
       //nav
       $(function(){
		$('.wrapper').navbarscroll();
	    })       
       
       $(function(){
       	 //热推
       $.ajax({
       	type:'get',
       	url: 'http://datainfo.duapp.com/shopdata/getGoods.php',       	
       	dataType:'jsonp',
       	success:function(data){
       		//动态获取swiper图片
       		for(let i=1;i<4;i++){       			
       			$('.swiper-wrapper').html($('.swiper-wrapper').html()+'<div class="swiper-slide"  > <img src="'+ JSON.parse(data[i+2].imgsUrl)[0] + '" style="width: 100%;"/></div>') 
       	    }
       		
       		//动态获取热推列表
       		for(var i=0;i<data.length;i++)
       		{  
     			//console.log(data[i].classID);
     			console.log(data[i].className); 
     			//需自行设置一个goodId属性，便于跳转到详情页获取goodsID
       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
       		}
       		
       		 //点击商品到详情页
             $('#goodlist > li').click(function(){
             	//hash方法
                 window.location.href= "info.html#"+this.getAttribute("goodId");
             });
          	}
          });   
          
          
        //点击购无车
        $('#cart').click(function(){
	    	if(!localStorage.getItem('userid')){
	    		alert("未登录,请前往登录");
	    		window.location.href="login.html";
	    	}
	    	else{
	    		window.location.href="cart.html";
	    	}
	    })
	     //棉服	     
        $('#three').click(function(){
            //首先清空原列表内容
         	$('#goodlist').empty(); 
         	    $.ajax({
		       	type:'get',
		       	url: 'http://datainfo.duapp.com/shopdata/getGoods.php', 
		       	data:{classID:3},
		       	dataType:'jsonp',
		       	success:function(data){       		
		       		for(var i=0;i<data.length;i++)
		       		{  		 
		     			console.log(data[i].goodsName); 		     			
		       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
		       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
		       		}
		       		 //点击商品到详情页
		             $('#goodlist > li').click(function(){
		             window.location.href= "info.html#"+this.getAttribute("goodId");
		              });
		        }
		    });    
        });
         
         //衬衫	     
        $('#one').click(function(){
            //首先清空原列表内容
         	$('#goodlist').empty(); 
         	$.ajax({
		       	type:'get',
		       	url: 'http://datainfo.duapp.com/shopdata/getGoods.php', 
		       	data:{classID:1},
		       	dataType:'jsonp',
		       	success:function(data){       		
		       		for(var i=0;i<data.length;i++)
		       		{  		 
		     			console.log(data[i].goodsName); 		     			
		       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
		       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
		       		}
		       		 //点击商品到详情页
		             $('#goodlist > li').click(function(){
		             window.location.href= "info.html#"+this.getAttribute("goodId");
		              });
		          	}
		    });    
        })
         
         //礼服	     
        $('#two').click(function(){
            //首先清空原列表内容
         	$('#goodlist').empty(); 
         	$.ajax({
		       	type:'get',
		       	url: 'http://datainfo.duapp.com/shopdata/getGoods.php', 
		       	data:{classID:2},
		       	dataType:'jsonp',
		       	success:function(data){       		
		       		for(var i=0;i<data.length;i++)
		       		{  		 
		     			console.log(data[i].goodsName); 		     			
		       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
		       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
		       		}
		       		 //点击商品到详情页
		             $('#goodlist > li').click(function(){
		             window.location.href= "info.html#"+this.getAttribute("goodId");
		              });
		          	}
		    });    
        })
         
         //短外套	     
        $('#four').click(function(){
            //首先清空原列表内容
         	$('#goodlist').empty(); 
         	$.ajax({
		       	type:'get',
		       	url: 'http://datainfo.duapp.com/shopdata/getGoods.php', 
		       	data:{classID:4},
		       	dataType:'jsonp',
		       	success:function(data){       		
		       		for(var i=0;i<data.length;i++)
		       		{  		 
		     			console.log(data[i].goodsName); 		     			
		       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
		       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
		       		}
		       		 //点击商品到详情页
		             $('#goodlist > li').click(function(){
		             window.location.href= "info.html#"+this.getAttribute("goodId");
		              });
		          	}
		    });    
        })
         
         //卫衣	     
        $('#five').click(function(){
            //首先清空原列表内容
         	$('#goodlist').empty(); 
         	$.ajax({
		       	type:'get',
		       	url: 'http://datainfo.duapp.com/shopdata/getGoods.php', 
		       	data:{classID:5},
		       	dataType:'jsonp',
		       	success:function(data){       		
		       		for(var i=0;i<data.length;i++)
		       		{  		 
		     			console.log(data[i].goodsName); 		     			
		       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
		       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
		       		}
		       		 //点击商品到详情页
		             $('#goodlist > li').click(function(){
		             window.location.href= "info.html#"+this.getAttribute("goodId");
		              });
		          	}
		        });    
        })
         
         //其他	     
        $('#six').click(function(){
            //首先清空原列表内容
         	$('#goodlist').empty(); 
         	$.ajax({
		       	type:'get',
		       	url: 'http://datainfo.duapp.com/shopdata/getGoods.php', 
		       	data:{classID:6},
		       	dataType:'jsonp',
		       	success:function(data){       		
		       		for(var i=0;i<data.length;i++)
		       		{  		 
		     			console.log(data[i].goodsName); 		     			
		       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
		       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
		       		}
		       		 //点击商品到详情页
		             $('#goodlist > li').click(function(){
		             window.location.href= "info.html#"+this.getAttribute("goodId");
		              });
		          	}
		    });    
         })
        
        
          //搜索框功能         
          $('#search').click(function(){
          	
          	var goods=document.getElementById('psearch');
          	console.log(goods.value);
          	
          	if(!goods.value)
          	{
          		alert('不能为空!');
          	}
          	else{
          		$.ajax({
          		type:'get',
          		url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
          	    dataType:'jsonp',
          	    data:{selectText:goods.value,linenumber:15},
          	    success:function(data){
          	    	console.log(data);
          	    	$('#goodlist').empty(); //请空原列表美容
          	    	
	          	    	for(var i=0;i<data.length;i++)
			       		{  		 
			     			console.log(data[i].goodsName); 		     			
			       			$('#goodlist').html($('#goodlist').html()+'<li class="dhot" goodId='+data[i].goodsID+'><img class="hot" src="'
			       			+data[i].goodsListImg+'" alt=""><p class="pt">'+data[i].goodsName.slice(0,9)+'...<br/><span style="color:red; font-weight:bolder;font-size: 0.3rem;">￥'+data[i][4]+'<span></p></li>');
			       		}
			       		 //点击商品到详情页
			             $('#goodlist > li').click(function(){
			             window.location.href= "info.html#"+this.getAttribute("goodId");
			             });
          	    	
          	    }//success函数结束
             })
          	}
          	
          })
       });
         
          