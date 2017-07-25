
window.onload=function()
	{
		console.log("哈哈哈哈哈哈哈哈哈哈哈");
		var star1=document.getElementById('star1');
		var star2=document.getElementById('star2');
		var star3=document.getElementById('star3');
		var star4=document.getElementById('star4');
		var star5=document.getElementById('star5');
		var star6=document.getElementById('star6');
		var star7=document.getElementById('star7');
		var star8=document.getElementById('star8');
		var star9=document.getElementById('star9');
		var star10=document.getElementById('star10');
		var star11=document.getElementById('star11');
		var star12=document.getElementById('star12');
		var reward1=document.getElementById('reward1');

		var Spacecraft=document.getElementById('Spacecraft');
		var Scorediv=document.getElementById('Score');
		var CrazyM=document.getElementById('CrazyM');
		var uip=document.getElementById('uip');
		var basespeed=1.25;
		var speed=2;

		var score=0;
		var hightscore=0;

		var midcont=document.getElementById('midcont');

		//控制台
		var Console=document.getElementById('Console');
		var shubiaoxy=document.getElementById('shubiaoxy');
		var Spcxy=document.getElementById('Spcxy');
		var star1xy=document.getElementById('star1xy');
		var gamestate=document.getElementById('gamestate');
		var reward1xy=document.getElementById('reward1xy');

		


		//宇宙飞船坐标
		var spx1=null;
		var spx2=null;
		var spy1=null;
		var spy2=null;

		//星球1坐标
		var star1x1=null;
		var star1x2=null;
		var star1y1=null;
		var star1y2=null;
		//星球2坐标
		var star2x1=null;
		var star2x2=null;
		var star2y1=null;
		var star2y2=null;
		//星球3坐标
		var star3x1=null;
		var star3x2=null;
		var star3y1=null;
		var star3y2=null;
		//星球4坐标
		var star4x1=null;
		var star4x2=null;
		var star4y1=null;
		var star4y2=null;
		//星球5坐标
		var star5x1=null;
		var star5x2=null;
		var star5y1=null;
		var star5y2=null;
		//星球6坐标
		var star6x1=null;
		var star6x2=null;
		var star6y1=null;
		var star6y2=null;
		//星球7坐标
		var star7x1=null;
		var star7x2=null;
		var star7y1=null;
		var star7y2=null;
		//星球8坐标
		var star8x1=null;
		var star8x2=null;
		var star8y1=null;
		var star8y2=null;
		//星球9坐标
		var star9x1=null;
		var star9x2=null;
		var star9y1=null;
		var star9y2=null;
		//星球10坐标
		var star10x1=null;
		var star10x2=null;
		var star10y1=null;
		var star10y2=null;
		//星球11坐标
		var star11x1=null;
		var star11x2=null;
		var star11y1=null;
		var star11y2=null;
		//星球12坐标
		var star12x1=null;
		var star12x2=null;
		var star12y1=null;
		var star12y2=null;

		//奖励1坐标
		var reward1x1=null;
		var reward1x2=null;	
		var reward1y1=null;	
		var reward1y2=null;	

		document.onmousemove = function (ev) {

	        var oEvent = ev || event;
	        var scrollLeft = oEvent.clientX;
	        var scrollTop = oEvent.clientX;
	        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        	marginlr=(document.body.offsetWidth-midcont.clientWidth)/2;

	        Spacecraft.style.left=oEvent.clientX+scrollLeft-marginlr-25+'px';
   			Spacecraft.style.top=oEvent.clientY+scrollTop-800-25+'px';
   			//控制台
   			shubiaoxy.innerHTML="鼠标坐标："+(oEvent.clientX+scrollLeft)+','+ (oEvent.clientY+scrollTop);

   			marginlr=(document.body.offsetWidth-midcont.clientWidth)/2;
   			if (marginlr<0) 
   			{
   				marginlr=0;
   			}
   			spx1=Spacecraft.offsetLeft;
   			spx2=Spacecraft.offsetLeft+50;
   			spy1=Spacecraft.offsetTop;
   			spy2=Spacecraft.offsetTop+50;


   			Spcxy.innerHTML="plt("+spx1+","+spy1+")"+"prt("+spx2+","+spy1+")"+"<br>"+"plb("+spx1+","+spy2+")"+"prb("+spx2+","+spy2+")";




	    };

		//获取Rank数据
		
		function loadXMLDoc()
		{
		var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		    {

		    	 var jsontext=JSON.parse(xmlhttp.responseText);
			    document.getElementById("top1").innerHTML=jsontext.dataList[0].ip+" Normal mode:"+jsontext.dataList[0].nm+" Crazy mode:"+jsontext.dataList[0].cm+" All Score:"+jsontext.dataList[0].allm;
			    document.getElementById("top2").innerHTML=jsontext.dataList[1].ip+" Normal mode:"+jsontext.dataList[1].nm+" Crazy mode:"+jsontext.dataList[1].cm+" All Score:"+jsontext.dataList[1].allm;
			    document.getElementById("top3").innerHTML=jsontext.dataList[2].ip+" Normal mode:"+jsontext.dataList[2].nm+" Crazy mode:"+jsontext.dataList[2].cm+" All Score:"+jsontext.dataList[2].allm;
			    document.getElementById("top4").innerHTML=jsontext.dataList[3].ip+" Normal mode:"+jsontext.dataList[3].nm+" Crazy mode:"+jsontext.dataList[3].cm+" All Score:"+jsontext.dataList[3].allm;
			    document.getElementById("top5").innerHTML=jsontext.dataList[4].ip+" Normal mode:"+jsontext.dataList[4].nm+" Crazy mode:"+jsontext.dataList[4].cm+" All Score:"+jsontext.dataList[4].allm;
		    }
		  }
		xmlhttp.open("GET","js/getscore.php",true);
		xmlhttp.send();
		}
	    loadXMLDoc();

	    //超出区域清零
	    function DANGERZoneCK()
	    {
	    	if (spx2<star1x1||spx1>star12x2||spy2<0||spy1>600) 
	    	{
	    		updataScore()
	    		score=0;
	    	}
	    }
	    var DANGERZoneCK=setInterval(DANGERZoneCK,1);


		
		function updataScore()
		{
			var ip=uip.innerHTML;
	    		if (score>hightscore)
	    		{
	    			hightscore=score;

	    		}else
	    		{	
	    			var nm=0;
	    			var cm=0;
	    			var allm=0;
	    			if (hightscore>200)
	    			{
	    				nm=200;
	    				cm=hightscore-nm;
	    				allm=nm+cm;
	    			}else
	    			{
	    				nm=hightscore;
	    				cm=0;
	    				allm=nm+cm;
	    			}
	    			var xmlhttp;
					if (window.XMLHttpRequest)
					  {// code for IE7+, Firefox, Chrome, Opera, Safari
					  xmlhttp=new XMLHttpRequest();
					  }
					else
					  {// code for IE6, IE5
					  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
					  }
					xmlhttp.onreadystatechange=function()
					  {
		 				}
				xmlhttp.open("GET","js/setscore.php?ip="+ip+"&nm="+nm+"&cm="+cm+"&allm="+allm,true);
				xmlhttp.send();
	    		}
		}

	    function ckstarTop()
	    {

	    	//星球1坐标
	    	star1x1=star1.offsetLeft;
	    	star1x2=star1.offsetLeft+100;
	    	star1y1=star1.offsetTop;
	    	star1y2=star1.offsetTop+100;
	    	star1xy.innerHTML="1plt("+star1x1+","+star1y1+")"+"prt("+star1x2+","+star1y1+")"+"<br>"+"plb("+star1x1+","+star1y2+")"+"prb("+star1x2+","+star1y2+")";

	    	//星球2坐标
	    	star2x1=star2.offsetLeft;
	    	star2x2=star2.offsetLeft+100;
	    	star2y1=star2.offsetTop;
	    	star2y2=star2.offsetTop+100;
	    	star2xy.innerHTML="2plt("+star2x1+","+star2y1+")"+"prt("+star2x2+","+star2y1+")"+"<br>"+"plb("+star2x1+","+star2y2+")"+"prb("+star2x2+","+star2y2+")";

	    	//星球2坐标
	    	star3x1=star3.offsetLeft;
	    	star3x2=star3.offsetLeft+100;
	    	star3y1=star3.offsetTop;
	    	star3y2=star3.offsetTop+100;
	    	star3xy.innerHTML="3plt("+star3x1+","+star3y1+")"+"prt("+star3x2+","+star3y1+")"+"<br>"+"plb("+star3x1+","+star3y2+")"+"prb("+star3x2+","+star3y2+")";

	    	//星球4坐标
	    	star4x1=star4.offsetLeft;
	    	star4x2=star4.offsetLeft+100;
	    	star4y1=star4.offsetTop;
	    	star4y2=star4.offsetTop+100;
	    	star4xy.innerHTML="4plt("+star4x1+","+star4y1+")"+"prt("+star4x2+","+star4y1+")"+"<br>"+"plb("+star4x1+","+star4y2+")"+"prb("+star4x2+","+star4y2+")";

	    	//星球5坐标
	    	star5x1=star5.offsetLeft;
	    	star5x2=star5.offsetLeft+100;
	    	star5y1=star5.offsetTop;
	    	star5y2=star5.offsetTop+100;
	    	star5xy.innerHTML="5plt("+star5x1+","+star5y1+")"+"prt("+star5x2+","+star5y1+")"+"<br>"+"plb("+star5x1+","+star5y2+")"+"prb("+star5x2+","+star5y2+")";

	    	//星球6坐标
	    	star6x1=star6.offsetLeft;
	    	star6x2=star6.offsetLeft+100;
	    	star6y1=star6.offsetTop;
	    	star6y2=star6.offsetTop+100;
	    	star6xy.innerHTML="6plt("+star6x1+","+star6y1+")"+"prt("+star6x2+","+star6y1+")"+"<br>"+"plb("+star6x1+","+star6y2+")"+"prb("+star6x2+","+star6y2+")";

	    	//星球7坐标
	    	star7x1=star7.offsetLeft;
	    	star7x2=star7.offsetLeft+100;
	    	star7y1=star7.offsetTop;
	    	star7y2=star7.offsetTop+100;
	    	star7xy.innerHTML="7plt("+star7x1+","+star7y1+")"+"prt("+star7x2+","+star7y1+")"+"<br>"+"plb("+star7x1+","+star7y2+")"+"prb("+star7x2+","+star7y2+")";

	    	//星球8坐标
	    	star8x1=star8.offsetLeft;
	    	star8x2=star8.offsetLeft+100;
	    	star8y1=star8.offsetTop;
	    	star8y2=star8.offsetTop+100;
	    	star8xy.innerHTML="8plt("+star8x1+","+star8y1+")"+"prt("+star8x2+","+star8y1+")"+"<br>"+"plb("+star8x1+","+star8y2+")"+"prb("+star8x2+","+star8y2+")";

	    	//星球9坐标
	    	star9x1=star9.offsetLeft;
	    	star9x2=star9.offsetLeft+100;
	    	star9y1=star9.offsetTop;
	    	star9y2=star9.offsetTop+100;
	    	star9xy.innerHTML="9plt("+star9x1+","+star9y1+")"+"prt("+star9x2+","+star9y1+")"+"<br>"+"plb("+star9x1+","+star9y2+")"+"prb("+star9x2+","+star9y2+")";

	    	//星球10坐标
	    	star10x1=star10.offsetLeft;
	    	star10x2=star10.offsetLeft+100;
	    	star10y1=star10.offsetTop;
	    	star10y2=star10.offsetTop+100;
	    	star10xy.innerHTML="10plt("+star10x1+","+star10y1+")"+"prt("+star10x2+","+star10y1+")"+"<br>"+"plb("+star10x1+","+star10y2+")"+"prb("+star10x2+","+star10y2+")";

	    	//星球11坐标
	    	star11x1=star11.offsetLeft;
	    	star11x2=star11.offsetLeft+100;
	    	star11y1=star11.offsetTop;
	    	star11y2=star11.offsetTop+100;
	    	star11xy.innerHTML="11plt("+star11x1+","+star11y1+")"+"prt("+star11x2+","+star11y1+")"+"<br>"+"plb("+star11x1+","+star11y2+")"+"prb("+star11x2+","+star11y2+")";

	    	//星球12坐标
	    	star12x1=star12.offsetLeft;
	    	star12x2=star12.offsetLeft+100;
	    	star12y1=star12.offsetTop;
	    	star12y2=star12.offsetTop+100;
	    	star12xy.innerHTML="12plt("+star12x1+","+star12y1+")"+"prt("+star12x2+","+star12y1+")"+"<br>"+"plb("+star12x1+","+star12y2+")"+"prb("+star12x2+","+star12y2+")";


	    	/*
			lt(x1y1)
			rt(x2y1)
			lb(x1y2)
			rb(x2y2)
	    	*/
	    	
	    	if(spx1>star1x1&&spx1<star1x2&&spy1>star1y1&&spy1<star1y2||spx2>star1x1&&spx2<star1x2&&spy1>star1y1&&spy1<star1y2||spx1>star1x1&&spx1<star1x2&&spy2>star1y1&&spy2<star1y2||spx2>star1x1&&spx2<star1x2&&spy2>star1y1&&spy2<star1y2)
	    	{
	    		updataScore();
				score=0;
	    	}else if(spx1>star2x1&&spx1<star2x2&&spy1>star2y1&&spy1<star2y2||spx2>star2x1&&spx2<star2x2&&spy1>star2y1&&spy1<star2y2||spx1>star2x1&&spx1<star2x2&&spy2>star2y1&&spy2<star2y2||spx2>star2x1&&spx2<star2x2&&spy2>star2y1&&spy2<star2y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star3x1&&spx1<star3x2&&spy1>star3y1&&spy1<star3y2||spx2>star3x1&&spx2<star3x2&&spy1>star3y1&&spy1<star3y2||spx1>star3x1&&spx1<star3x2&&spy2>star3y1&&spy2<star3y2||spx2>star3x1&&spx2<star3x2&&spy2>star3y1&&spy2<star3y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star4x1&&spx1<star4x2&&spy1>star4y1&&spy1<star4y2||spx2>star4x1&&spx2<star4x2&&spy1>star4y1&&spy1<star4y2||spx1>star4x1&&spx1<star4x2&&spy2>star4y1&&spy2<star4y2||spx2>star4x1&&spx2<star4x2&&spy2>star4y1&&spy2<star4y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star5x1&&spx1<star5x2&&spy1>star5y1&&spy1<star5y2||spx2>star5x1&&spx2<star5x2&&spy1>star5y1&&spy1<star5y2||spx1>star5x1&&spx1<star5x2&&spy2>star5y1&&spy2<star5y2||spx2>star5x1&&spx2<star5x2&&spy2>star5y1&&spy2<star5y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star6x1&&spx1<star6x2&&spy1>star6y1&&spy1<star6y2||spx2>star6x1&&spx2<star6x2&&spy1>star6y1&&spy1<star6y2||spx1>star6x1&&spx1<star6x2&&spy2>star6y1&&spy2<star6y2||spx2>star6x1&&spx2<star6x2&&spy2>star6y1&&spy2<star6y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star7x1&&spx1<star7x2&&spy1>star7y1&&spy1<star7y2||spx2>star7x1&&spx2<star7x2&&spy1>star7y1&&spy1<star7y2||spx1>star7x1&&spx1<star7x2&&spy2>star7y1&&spy2<star7y2||spx2>star7x1&&spx2<star7x2&&spy2>star7y1&&spy2<star7y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star8x1&&spx1<star8x2&&spy1>star8y1&&spy1<star8y2||spx2>star8x1&&spx2<star8x2&&spy1>star8y1&&spy1<star8y2||spx1>star8x1&&spx1<star8x2&&spy2>star8y1&&spy2<star8y2||spx2>star8x1&&spx2<star8x2&&spy2>star8y1&&spy2<star8y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star9x1&&spx1<star9x2&&spy1>star9y1&&spy1<star9y2||spx2>star9x1&&spx2<star9x2&&spy1>star9y1&&spy1<star9y2||spx1>star9x1&&spx1<star9x2&&spy2>star9y1&&spy2<star9y2||spx2>star9x1&&spx2<star9x2&&spy2>star9y1&&spy2<star9y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star10x1&&spx1<star10x2&&spy1>star10y1&&spy1<star10y2||spx2>star10x1&&spx2<star10x2&&spy1>star10y1&&spy1<star10y2||spx1>star10x1&&spx1<star10x2&&spy2>star10y1&&spy2<star10y2||spx2>star10x1&&spx2<star10x2&&spy2>star10y1&&spy2<star10y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star11x1&&spx1<star11x2&&spy1>star11y1&&spy1<star11y2||spx2>star11x1&&spx2<star11x2&&spy1>star11y1&&spy1<star11y2||spx1>star11x1&&spx1<star11x2&&spy2>star11y1&&spy2<star11y2||spx2>star11x1&&spx2<star11x2&&spy2>star11y1&&spy2<star11y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else if(spx1>star12x1&&spx1<star12x2&&spy1>star12y1&&spy1<star12y2||spx2>star12x1&&spx2<star12x2&&spy1>star12y1&&spy1<star12y2||spx1>star12x1&&spx1<star12x2&&spy2>star12y1&&spy2<star12y2||spx2>star12x1&&spx2<star12x2&&spy2>star12y1&&spy2<star12y2)
	    	{
	    		updataScore();
	    		score=0;
	    	}else 
	    	{
	    		gamestate.innerHTML='';
	    	}
	    }
	    var ckstar=setInterval(ckstarTop,1);
		function fallen()
		{
			var randomNum=Math.round(Math.random()*11);
			
			switch(randomNum)
			{
			case 0:
			  star1.style.transition="all linear "+speed+"s";
			  star1.style.top="800px";
			  break;
			case 1:
			  star2.style.transition="all linear "+speed+"s";
			  star2.style.top="800px";
			  break;
			case 2:
			  star3.style.transition="all linear "+speed+"s";
			  star3.style.top="800px";
			  break;
			case 3:
			  star4.style.transition="all linear "+speed+"s";
			  star4.style.top="800px";
			  break;
			case 4:
			  star5.style.transition="all linear "+speed+"s";
			  star5.style.top="800px";
			  break;
			case 5:
 			  star6.style.transition="all linear "+speed+"s";
			  star6.style.top="800px";
			  break;
			case 6:
			  star7.style.transition="all linear "+speed+"s";
			  star7.style.top="800px";
			  break;
			case 7:
			  star8.style.transition="all linear "+speed+"s";
			  star8.style.top="800px";
			  break;
			case 8:
			  star9.style.transition="all linear "+speed+"s";
			  star9.style.top="800px";
			  break;
			case 9:
			  star10.style.transition="all linear "+speed+"s";
			  star10.style.top="800px";
			  break;
			case 10:
			  star11.style.transition="all linear "+speed+"s";
			  star11.style.top="800px";
			  break;
			case 11:
			  star12.style.transition="all linear "+speed+"s";
			  star12.style.top="800px";
			  break;
			}
		}
		var randomfall=setInterval(fallen,500);
		var randomfall=setInterval(fallen,300);
		var randomfall=setInterval(fallen,700);
		var randomfall=setInterval(fallen,900);
		var randomfall=setInterval(fallen,1100);

		function ckfallenH()
		{
			tw1=star1.offsetTop;
			tw2=star2.offsetTop;
			tw3=star3.offsetTop;
			tw4=star4.offsetTop;
			tw5=star5.offsetTop;
			tw6=star6.offsetTop;
			tw7=star7.offsetTop;
			tw8=star8.offsetTop;
			tw9=star9.offsetTop;
			tw10=star10.offsetTop;
			tw11=star11.offsetTop;
			tw12=star12.offsetTop;

			if(tw1>midcont.clientHeight) 
			{
				star1.style.transition="left ease 1s";
				star1.style.top="-100px";
				score++;
			}else if(tw2>midcont.clientHeight)
			{
				star2.style.transition="left ease 1s";
				star2.style.top="-100px";
				score++;
			}else if(tw3>midcont.clientHeight)
			{
				star3.style.transition="left ease 1s";
				star3.style.top="-100px";
				score++;
			}else if(tw4>midcont.clientHeight)
			{
				star4.style.transition="left ease 1s";
				star4.style.top="-100px";
				score++;
			}else if(tw5>midcont.clientHeight)
			{
				star5.style.transition="left ease 1s";
				star5.style.top="-100px";
				score++;
			}else if(tw6>midcont.clientHeight)
			{
				star6.style.transition="left ease 1s";
				star6.style.top="-100px";
				score++;
			}else if(tw7>midcont.clientHeight)
			{
				star7.style.transition="left ease 1s";
				star7.style.top="-100px";
				score++;
			}else if(tw8>midcont.clientHeight)
			{
				star8.style.transition="left ease 1s";
				star8.style.top="-100px";
				score++;
			}else if(tw9>midcont.clientHeight)
			{
				star9.style.transition="left ease 1s";
				star9.style.top="-100px";
				score++;
			}else if(tw10>midcont.clientHeight)
			{	
				star10.style.transition="left ease 1s";
				star10.style.top="-100px";
				score++;
			}else if(tw11>midcont.clientHeight)
			{
				star11.style.transition="left ease 1s";
				star11.style.top="-100px";
				score++;
			}else if(tw12>midcont.clientHeight)
			{
				star12.style.transition="left ease 1s";
				star12.style.top="-100px";
				score++;
			}
		}
		var ckfallenHloop=setInterval(ckfallenH,1);


		function ckgetScore()
		{
			reward1x1=reward1.offsetLeft;
			reward1x2=reward1.offsetLeft+60;
			reward1y1=reward1.offsetTop;
			reward1y2=reward1.offsetTop+60;


	    	if(spx1>reward1x1&&spx1<reward1x2&&spy1>reward1y1&&spy1<reward1y2||spx2>reward1x1&&spx2<reward1x2&&spy1>reward1y1&&spy1<reward1y2||spx1>reward1x1&&spx1<reward1x2&&spy2>reward1y1&&spy2<reward1y2||spx2>reward1x1&&spx2<reward1x2&&spy2>reward1y1&&spy2<reward1y2)
	    	{
	    		reward1.style.transition='background ease 0.1s';
				reward1.style.left='-60px';
	    		score=score+10;
	    	}


			reward1xy.innerHTML='reward lt=('+reward1x1+','+reward1y1+') rt=('+reward1x1+','+reward1y2+') lb=('+reward1x2+','+reward1y1+') rb('+reward1x2+','+reward1y2+')'
		}
		var ckgetScore=setInterval(ckgetScore,1)

		function reward()
		{	var rewardNum=Math.random()*100;
			console.log(rewardNum);
			if (rewardNum<=30)
			 {
			 	reward1.style.transition='all linear 2s';
				reward1.style.left='100%';
			 }else
			 {

			 }
			
		}
		var rewardSlide=setInterval(reward,2000);
		function ckreward()
		{
			if(reward1.offsetLeft>=midcont.clientWidth)
			{
				reward1.style.transition='background ease 0.1s';
				reward1.style.left='-60px';
			} 
		}
		var ckreward=setInterval(ckreward,1);

		function setrewardTop()
		{
			reward1.style.top=Math.random()*580+'px';
		}
		var setrewardTop=setInterval(setrewardTop,500);


		function setBaseSpeed(i)
		{
			basespeed=i;
		}
		//疯狂模式

			
			var speedset=setInterval(function()
				{
					if (score==0) 
					{
						setBaseSpeed(1.5);
						CrazyM.style.display='none';
						
					}else if(score>=1&&score<50) 
					{
						setBaseSpeed(1.25);
						
					}else if(score>=50&&score<100) 
					{
						setBaseSpeed(1);
					}else if(score<=100&&score<150) 
					{
						setBaseSpeed(0.75);
					}else if(score>=150&&score<200) 
					{
						setBaseSpeed(0.5);
					}else if(score>=200)
					{
						setBaseSpeed(0.25);
						CrazyM.style.display='block';
					}
					speed=Math.random()*1.5+basespeed;
				},1);



		function setScore()
		{
			if (score==42) 
			{
				Scorediv.innerHTML='你的终极问题是什么？'
			}else
			{
				Scorediv.innerHTML=score;
			}
			
			
		}
		var setScore=setInterval(setScore,1);

		function setSpecimg()
		{	
			if (score>200)
			 {
			 	Spacecraft.style.backgroundImage="url(img/spc"+Math.floor(Math.random()*5+1)+".png)";
			 }else
			 {
			 	Spacecraft.style.backgroundImage="url(img/spc1.png)";
			 }
				
		}
		var setSpecimg=setInterval(setSpecimg,100);
		//判断Chrome浏览器最小化
/*		

		if(document.addEventListener){
		document.addEventListener('webkitvisibilitychange',function(){
		console.log(document.webkitVisibilityState);
		})}
		//IE
		if(document.addEventListener){
		document.addEventListener('msvisibilitychange',function(){
		console.log(document.msVisibilityState);
		});
		//FF
		if(document.addEventListener){
		document.addEventListener('mozvisibilitychange',function(){
		console.log(document.mozVisibilityState);
		});
		*/
	}