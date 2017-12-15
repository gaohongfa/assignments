        $(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',		    
		    pagination: '.swiper-pagination',	    
		  });                           
        });
       window.onload=function(){
       document.getElementById("try").onclick=function(){
         	 //在启动页走过一次后，设置localSorage设置一个值 
         	 //下次打开主页不在显示
             window.localStorage.setItem('swiper',true);         
             //window.location.href="index.html";       	
         }
       }
         