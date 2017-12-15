$(function(){
	     //已注册用户名fafa 密码ddd
		 $("#loga").click(function(){		  
		  var userid=document.getElementById('userid').value;
		  var psw=document.getElementById("psw").value;		 	
	      $.ajax({
			type:'get',
			//接口
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			data:{status:'login',userID:userid,password:psw},
			dataType:'json',
		    //.parse(data)(拿到可读数据)
			success:function(data){					 
					console.log(data);
					if(data==0){
						 $('#userid').parent().append('<span id="sp" style="color:red;float:right;margin:-28px 10px 0 0; " >用户名不存在</span>'); 
						 					 
					}
					else if(data==2){						 
						 $('#psw').parent().append('<span style="color:red;float:right;margin:-28px 10px 0 0; " >密码不正确</span>');					  
					}
					else{
						if(!window.localStorage){
						alert("你的浏览器不支持LocalStorage，请你更新浏览器");	
					     }	
					     //用户名 密码分别放入localStorage中
					    localStorage.setItem('userid',userid);
						window.location.href=" index.html";	
					}
			},
			error:function(){
				alert('error');				
			}
		})
		})
		 
});

window.onload=function(){
	     //点击注册账号跳转到注册账号页
		 document.getElementById("noid").onclick=function(){
		 	window.location.href="register.html";	
		 }
};
