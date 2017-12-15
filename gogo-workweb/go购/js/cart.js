 
		 
		 $(function(){
		 	console.log(localStorage.key(0));
		 	 //查看购物车
         	   $.ajax({
	         		type:"get",	         		
			       	url: 'http://datainfo.duapp.com/shopdata/getCar.php',	
			       	dataType:'jsonp',
			       	data:{userID:localStorage.key(0)},			       	 
			       	success:function(data){
			       		if(data.length==0){
			       			console.log("购物车没有东西哦");
			       		}
			       		
			       		for(let i=0;i<data.length;i++){
			       			console.log(data[i].goodsName);
			       			$('.cul').html($('.cul').html()+`<li class="cli"> 			        
					            <input type="checkbox" name="check"  class="box"/> 
					        	<img src="`+data[i].goodsListImg+`" class="cpic">
				        	    <div class="ctext">`+ data[i].goodsName.slice(0,9)+`...` +` </div>	
				        	    <div class="cprice">￥<span class="p">`+data[i].price+`</span>
				        	    	<!--加减-->	
								        　<ul class="btn-numbox"> 
								            <li>
								                <ul class="count">
								                    <li><span id="num-jian" class="num-jian">-</span></li>
								                    <li><input type="text" class="input-num" id="input-num" value="`+data[i].number+`" /></li>
								                    <li><span id="num-jia" class="num-jia">+</span></li>
								                </ul>
								            </li>
								            
								　　　  </ul>
								     <!--垃圾桶-->
								    <img src="img/timg.jpg"  goodId="`+data[i].goodsID+`" class="timg"/>
				        	   </div>  
				          </li>`);
			       		}
					  
					 //如果清空子选项框的对号，则将全选选项框的对号清空。  
					 //要在ajax请求完之后 再获取
				     $(".box").bind({  
				             change:function(){  
				             console.log(123);
				              $(".box").each(function()//遍历每个.box的checkbox  
				                  {  
				              if($(this).prop("checked")==false)//如果box取消选中  
				                  {  
				                  $(this).removeAttr("checked");//先删除它的checked属性，便于统计被选中的box  
				                  $("#all").removeAttr("checked");  
				                  
				                  }  
				              else  
				                  {  
				                  $(this).prop("checked",true);//如果box被选中，页面显示选中  
				                  $(this).attr("checked","checked");//checked属性值设置为checked  
				                  }  
				                  });  
				
				         var checkedLength=$(".box[checked='checked']").length;//attr方法赋值checked都为计算出子checkbox的长度  
				         var subLength=$(".box").length;  
				         //如果所有的子checkbox个数不等于选中的checkbox的个数，就取消全选框的对号  
				         if(subLength!=checkedLength)  
				             {  
				             $("#all").prop("checked",false);  
				             
				             }  
				         else  
				             {//如果所有的子checkbox被选中，全选框也全选中  
				             $("#all").attr("checked","checked");  
				             $("#all").prop("checked",true);  
				             //合计
					 	        var heji=document.getElementById('heji');
					 	        var arrp=document.getElementsByClassName('p'); 
					   	        var input_num = document.getElementsByClassName("input-num");
					   	        var sum=0;
					   	             for(let i=0;i<arrp.length;i++){
					   	             //console.log(input_num[i].value);
					   	        	 sum+=parseInt(arrp[i].innerHTML)*parseInt(input_num[i].value) ;//合计值等于每一个商品价格乘以数量
		   	                         heji.innerHTML=sum;
					   	             }
		   	        
				             }  		          
				        }  
				      });  
			       	 
			       	}
			       		
	         	})
         	
		 })
		  window.onload=function(){
		  	var goodId=window.location.hash.slice(1);	
	 	    //加减
	 		var num_jia = document.getElementsByClassName("num-jia");
		    var num_jian = document.getElementsByClassName("num-jian");
		    var input_num = document.getElementsByClassName("input-num");
		   
		    for(let i=0;i<input_num.length;i++){//必须使用let不能使用var 否则会变量共享		    	
		    	num_jia[i].onclick = function() { 
		    		//console.log(input_num[i]);
 		            input_num[i].value = parseInt(input_num[i].value) + 1;
 		            
 		            //点击加号更新购物车
			         	$.ajax({
			         		type:"get",
					       	url: 'http://datainfo.duapp.com/shopdata/updatecar.php',		        
					       	data:{userID:localStorage.key(0),goodsID:arrimg[i].getAttribute('goodId'),number:input_num[i].value},
					       	success:function(data){
					       		if(data==1){
					       			console.log("更新商品数量成功");
					       	     }
					       		if(data==0){
					       			console.log("更新商品数量失败");
					       		}
					       	}
					       		
			         	});//ajax请求结束
		         }		
		        num_jian[i].onclick = function() { 
		        if(input_num[i].value <= 0) {
		            input_num[i].value = 0;
		        } else { 
		            input_num[i].value = parseInt(input_num[i].value) - 1;
		            //点击减号更新购物车
			         	$.ajax({
			         		type:"get",
					       	url: 'http://datainfo.duapp.com/shopdata/updatecar.php',		        
					       	data:{userID:localStorage.key(0),goodsID:arrimg[i].getAttribute('goodId'),number:input_num[i].value},
					       	success:function(data){
					       		if(data==1){
					       			console.log("更新商品数量成功");
					       	     }
					       		if(data==0){
					       			console.log("更新商品数量失败");
					       		}
					       	}
					       		
			         	});//ajax请求结束
		        }		
		      }
		    }
		    
 	       
		      
			//垃圾桶     
			var arrcli=[]; //用于放列表元素的数组
			var arrimg=[]; //由于放列表中垃圾桶元素的数组
		    arrcli=document.getElementsByClassName('cli');
			arrimg=document.getElementsByClassName('timg');
			console.log('列表长度：'+arrcli.length);
				for(let i=0;i<arrcli.length;i++){		  	 
				  	arrimg[i].onclick=function(){		  		
				  	console.log(arrimg[i].getAttribute('goodId'));
				  	arrcli[i].style.display='none'; //点击垃圾桶图标，对应所在列表元素隐藏
				  	
				  	 //更新购物车
			         	$.ajax({
			         		type:"get",
					       	url: 'http://datainfo.duapp.com/shopdata/updatecar.php',		        
					       	data:{userID:localStorage.key(0),goodsID:arrimg[i].getAttribute('goodId'),number:0},
					       	success:function(data){
					       		if(data==1){
					       			console.log("删除商品成功");
					       	     }
					       		if(data==0){
					       			console.log("删除商品失败");
					       		}
					       	}
					       		
			         	});//ajax请求结束
				  	  }
				   }				 
			    }
 	        
 	        
	   
	 //全选和反选
	  $(function()  
        {  
       //因为有两个allcheck选项框，判断它们的长度，只要长度大于1,就全选中,长度小于1就全取消  
        $("#all").click(function(){  
            //判断checkall的属性checked的值是否是checked。  
            //如果是所有的选项框都打上对号  
            //如果不是，将所有的选项框的对号清空  
            
            //合计
 	        var heji=document.getElementById('heji');
 	        var arrp=document.getElementsByClassName('p'); 
   	        var input_num = document.getElementsByClassName("input-num");
   	        var sum=0;
   	             for(let i=0;i<arrp.length;i++){
   	             //console.log(input_num[i].value);
   	        	 sum+=parseInt(arrp[i].innerHTML)*parseInt(input_num[i].value) ;//合计值等于每一个商品价格乘以数量
   	             }
   	        
   	        //全选按钮实现
            if($("#all").prop("checked")==true)  
                {  
                $("input:checkbox").prop("checked",true);  
                $("input:checkbox").attr("checked","checked");                  
	             heji.innerHTML=sum;//当全选时 价格显示合计总额
                 }  
            else  
	             {  
	                $("input:checkbox").prop("checked",false);  
	                $("input:checkbox").removeAttr("checked");  
	                heji.innerHTML=0; //全选取消时 合计为0
	              }    
	        });  
	        
		  
        });  