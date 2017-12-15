$(function(){
	    //注册
		$("#zhuce").click(function(){
		  var userid=document.getElementById('id').value;
		  var psw=document.getElementById("password").value;
		  //如果两次密码不一致
		  if(psw!=document.getElementById("psw").value){
			 $('#psw').parent().append('<span id="sp" style="color:red;float:right;margin:-28px 10px 0 0; " >两次密码不一致</span>');
		   }
	      $.ajax({
			type:'get',
			//接口
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			data:{status:'register',userID:userid,password:psw},
			dataType:'json',
				//.parse(data)(拿到可读数据)
			success:function(data){					 
					console.log(data);
					if(data==0){
						 $('#id').parent().append('<span id="sp" style="color:red;float:right;margin:-28px 10px 0 0; " >用户名重名</span>');
					}
					
					else if(data==1){
						window.location.href="login.html";
					}					 
			},
			error:function(){
				alert('error');				
				
			}
		})
		})
})
