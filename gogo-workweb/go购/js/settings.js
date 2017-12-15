window.onload=function(){
			if(localStorage.getItem('userid')){
				document.getElementById('name').innerHTML=localStorage.getItem('userid');
			    document.getElementById('pname').innerHTML='会员名： '+localStorage.getItem('userid');
			   }
			else{
				
				document.getElementById('neirong').innerHTML=`<div style="font-size:0.5rem; text-align:center; line-height:1.5rem;"> 未登录，请前往登录 
				                                                 <button id="denglu">登录</button>
				                                              </div>`;
			    document.getElementById('out').style.display='none';
			    document.getElementById('denglu').onclick=function(){
			     	window.location.href="login.html";
			     }
			}
			
			 document.getElementById('out').onclick=function(){
		  	 localStorage.clear();
		  	 window.location.href="index.html";
		   }
			
		}