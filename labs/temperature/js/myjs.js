/*!
 *
 *
 * Copyright XiaoNan 2013-10-13
 *
 * 
 */
 
 	var newR, newG, newB;
	var timerIDCel,timerIDKel,timerIDFah,timerIDRan,timerIDDel,timerIDNew;
	var valueTC;
		
	$(function() {
		$( "#sliderTC" ).slider({
			animate: "fast",
			orientation: "vertical",
			value: 50,
			change: function( event, ui ) {
						valueTC = $( "#sliderTC" ).slider( "value");
						setHSVToRGB(210-210*(valueTC/100),100,85);
						$( "#tbg" ).animate({
    						backgroundColor: "rgb( " + newR + "," +  newG + "," + newB + ")"
  						});
						$( "#celsius" ).animate({
    						color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  						});
						$( "#kelvin" ).animate({
    						color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  						});
						$( "#fahrenheit" ).animate({
    						color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  						});
						$( "#rankine" ).animate({
    						color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  						});
						$( "#delisle" ).animate({
    						color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  						});
						$( "#newton" ).animate({
    						color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  						});
						timerIDCel = setInterval(numCel, 0.01);
						timerIDKel = setInterval(numKel, 0.01);
						timerIDFah = setInterval(numFah, 0.01);
						timerIDRan = setInterval(numRan, 0.01);
						timerIDDel = setInterval(numDel, 0.01);
						timerIDNew = setInterval(numNew, 0.01);
				}
		});
		$("#inputNum").keyup(calculator);
		$("#selectNum").change(calculator);
		
		$("#celsius").click(function(){
			  $('.ui-widget-content').animate({'background-position-x': '2%'}, 500, 'linear');
		}); 
		$("#kelvin").click(function(){
			  $('.ui-widget-content').animate({'background-position-x': '21%'}, 500, 'linear');
		});  
		$("#fahrenheit").click(function(){
			  $('.ui-widget-content').animate({'background-position-x': '41%'}, 500, 'linear');
		}); 
		$("#rankine").click(function(){
			  $('.ui-widget-content').animate({'background-position-x': '60%'}, 500, 'linear');
		}); 
		$("#delisle").click(function(){
			  $('.ui-widget-content').animate({'background-position-x': '79%'}, 500, 'linear');
		}); 
		$("#newton").click(function(){
			  $('.ui-widget-content').animate({'background-position-x': '99%'}, 500, 'linear');
		});
		
		$( "#switchCal2" ).click(function(){
			  $( ".cal2hidden" ).show(1000);
			  $( ".cal2hidden" ).switchClass( "cal2hidden", "cal2show", 1000 );
      		  $( ".cal1show" ).switchClass( "cal1show", "cal1hidden", 1000 );
			  $( ".cal1show" ).hide(1000);
      		return false;
   		});
		$( "#switchCal1" ).click(function(){
			  $( ".cal1hidden" ).show(1000);
			  $( ".cal1hidden" ).switchClass( "cal1hidden", "cal1show", 1000 );
			  $( ".cal2show" ).switchClass( "cal2show", "cal2hidden", 1000 );
			  $( ".cal2show" ).hide(1000);
      		return false;
   		});
		 
		valueTC = $( "#sliderTC" ).slider( "value");
		$("#celsius").text(Math.round(373.15*(valueTC/100)-273.15));
		$("#kelvin").text(Math.round(373.15*(valueTC/100)));
		$("#fahrenheit").text(Math.round(373.15*(valueTC/100)*9/5-459.67));
		$("#rankine").text(Math.round(373.15*(valueTC/100)*9/5));
		$("#delisle").text(Math.round((373.15-373.15*(valueTC/100))*3/2));
		$("#newton").text(Math.round((373.15*(valueTC/100)-273.15)*33/100));
	});
	
	
		function setHSVToRGB(_l,_m,_n) {
		if(_m == 0) {
		    _l = _m = _n = Math.round(255*_n/100);
 			newR = _l;
		    newG = _m;
    		newB = _n;
  			} else {
   			 _m = _m/100;
   			 _n = _n/100;
       	  p = Math.floor(_l/60)%6;
	   	  f = _l/60 - p;
	   	  a = _n*(1-_m);
	   	  b = _n*(1-_m*f);
	   	  c = _n*(1-_m*(1-f));
   	 	switch(p) {
     	 case 0:
    	    newR = _n; newG = c; newB = a;
    	    break;
    	  case 1:
     	   newR = b; newG = _n; newB = a;
     	   break;
     	 case 2:
     	   newR = a; newG = _n; newB = c;
    	    break;
     	 case 3:
     	   newR = a; newG = b; newB = _n;
     	   break;
     	 case 4:
     	   newR = c; newG = a; newB = _n;
      	  break;
    	  case 5:
     	   newR = _n; newG = a; newB = b;
     	   break;
 	   }
 	   	 newR = Math.round(255*newR);
 	  	 newG = Math.round(255*newG);
 	  	 newB = Math.round(255*newB);
 	 		}
		}


        function numCel() {
			var tempCel=Math.round(373.15*(valueTC/100)-273.15);
			//setInterval最小时间间隔过长，循环加速
			for (var j = 0; j < 3; j++){
            if (Number($("#celsius").html()) > tempCel) {
                $("#celsius").text(Number($("#celsius").html()) - 1);
            }
			else
			if(Number($("#celsius").html()) < tempCel ){
				$("#celsius").text(Number($("#celsius").html()) + 1);
			}
            else
			{
				clearInterval(timerIDCel);
			}
			}
        }

        function numKel() {
			var tempKel=Math.round(373.15*(valueTC/100));
			//setInterval最小时间间隔过长，循环加速
			for (var j = 0; j < 3; j++){
            if (Number($("#kelvin").html()) > tempKel) {
                $("#kelvin").text(Number($("#kelvin").html()) - 1);
            }
			else
			if(Number($("#kelvin").html()) < tempKel ){
				$("#kelvin").text(Number($("#kelvin").html()) + 1);
			}
            else
			{
				clearInterval(timerIDKel);
			}
			}
        }
        function numFah() {
			var tempFah=Math.round(373.15*(valueTC/100)*9/5-459.67);
			//setInterval最小时间间隔过长，循环加速
			for (var j = 0; j < 3; j++){
            if (Number($("#fahrenheit").html()) > tempFah) {
                $("#fahrenheit").text(Number($("#fahrenheit").html()) - 1);
            }
			else
			if(Number($("#fahrenheit").html()) < tempFah ){
				$("#fahrenheit").text(Number($("#fahrenheit").html()) + 1);
			}
            else
			{
				clearInterval(timerIDFah);
			}
			}
        }
        function numRan() {
			var tempRan=Math.round(373.15*(valueTC/100)*9/5);
			//setInterval最小时间间隔过长，循环加速
			for (var j = 0; j < 3; j++){
            if (Number($("#rankine").html()) > tempRan) {
                $("#rankine").text(Number($("#rankine").html()) - 1);
            }
			else
			if(Number($("#rankine").html()) < tempRan ){
				$("#rankine").text(Number($("#rankine").html()) + 1);
			}
            else
			{
				clearInterval(timerIDRan);
			}
			}
        }
        function numDel() {
			var tempDel=Math.round((373.15-373.15*(valueTC/100))*3/2);
			//setInterval最小时间间隔过长，循环加速
			for (var j = 0; j < 3; j++){
            if (Number($("#delisle").html()) > tempDel) {
                $("#delisle").text(Number($("#delisle").html()) - 1);
            }
			else
			if(Number($("#delisle").html()) < tempDel ){
				$("#delisle").text(Number($("#delisle").html()) + 1);
			}
            else
			{
				clearInterval(timerIDDel);
			}
			}
        }
        function numNew() {
			var tempNew=Math.round((373.15*(valueTC/100)-273.15)*33/100);
			//setInterval最小时间间隔过长，循环加速
			for (var j = 0; j < 3; j++){
            if (Number($("#newton").html()) > tempNew) {
                $("#newton").text(Number($("#newton").html()) - 1);
            }
			else
			if(Number($("#newton").html()) < tempNew ){
				$("#newton").text(Number($("#newton").html()) + 1);
			}
            else
			{
				clearInterval(timerIDNew);
			}
			}
        }
		
		function ForDight(Dight,How){  
            Dight = Math.round(Dight*Math.pow(10,How))/Math.pow(10,How);  
            return Dight;  
        }  

		function calculator() {
			var inNum = $("#inputNum").val();
			if(isNaN(inNum))
			{
				$("#celsius2").text("Ooooooops!");
				$("#kelvin2").text("Something is wrong.");
				$("#fahrenheit2").text("Is that a number?");
				$("#rankine2").text("Typing wrong spaces?");
				$("#delisle2").text("I can't understand it...");
				$("#newton2").text("Please input correct number.");	
			}
			if($("#inputNum").val().length == 0)
			{
				$("#celsius2").text("");
				$("#kelvin2").text("");
				$("#fahrenheit2").text("");
				$("#rankine2").text("");
				$("#delisle2").text("");
				$("#newton2").text("");	
			}
			else{
				if(inNum>100)
				{
				setHSVToRGB(0,100,85);
				$( "#tbg" ).animate({
    			backgroundColor: "rgb( 217,0,0)"
  				});
				$( "#celsius2" ).animate({
    			color: "rgb(217,0,0)"
  				});
				$( "#kelvin2" ).animate({
    			color: "rgb(217,0,0)"
  				});
				$( "#fahrenheit2" ).animate({
    			color: "rgb(217,0,0)"
  				});				
				$( "#rankine2" ).animate({
    			color: "rgb(217,0,0)"
  				});
				$( "#delisle2" ).animate({
    			color: "rgb(217,0,0)"
  				});			
				$( "#newton2" ).animate({
    			color: "rgb(217,0,0)"
  				});	
				}
				else if(inNum<-23)
				{
				setHSVToRGB(210-210*(inNum/100),100,85);
				$( "#tbg" ).animate({
    			backgroundColor: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});
				$( "#celsius2" ).animate({
    			color: "rgb( 0,0,0)"
  				});
				$( "#kelvin2" ).animate({
    			color: "rgb( 0,0,0)"
  				});
				$( "#fahrenheit2" ).animate({
    			color: "rgb( 0,0,0)"
  				});				
				$( "#rankine2" ).animate({
    			color: "rgb( 0,0,0)"
  				});
				$( "#delisle2" ).animate({
    			color: "rgb( 0,0,0)"
  				});			
				$( "#newton2" ).animate({
    			color: "rgb( 0,0,0)"
  				});	}
				else
				{
				setHSVToRGB(210-210*(inNum/100),100,85);
				$( "#tbg" ).animate({
    			backgroundColor: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});
				$( "#celsius2" ).animate({
    			color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});
				$( "#kelvin2" ).animate({
    			color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});
				$( "#fahrenheit2" ).animate({
    			color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});				
				$( "#rankine2" ).animate({
    			color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});
				$( "#delisle2" ).animate({
    			color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});			
				$( "#newton2" ).animate({
    			color: "rgb( " + newR + "," +  newG + "," + newB + ")"
  				});			
				}

			
			if(isNaN(inNum))
			{
				$("#celsius2").text("Ooooooops!");
				$("#kelvin2").text("Something is wrong.");
				$("#fahrenheit2").text("Is that a number?");
				$("#rankine2").text("Typing wrong spaces?");
				$("#delisle2").text("I can't understand it...");
				$("#newton2").text("Please input correct number.");
				$( "#celsius2" ).animate({
    			color: "rgb( 0,0,0)"
  				});
				$( "#kelvin2" ).animate({
    			color: "rgb( 0,0,0)"
  				});
				$( "#fahrenheit2" ).animate({
    			color: "rgb( 0,0,0)"
  				});				
				$( "#rankine2" ).animate({
    			color: "rgb( 0,0,0)"
  				});
				$( "#delisle2" ).animate({
    			color: "rgb( 0,0,0)"
  				});			
				$( "#newton2" ).animate({
    			color: "rgb( 0,0,0)"
  				});	
			}
			else if($('#selectNum').val()==1)
			{
				$("#celsius2").text(ForDight(inNum,5));
				$("#kelvin2").text(ForDight(inNum+273.15,5));
				$("#fahrenheit2").text(ForDight(inNum*9/5+32,5));
				$("#rankine2").text(ForDight((inNum+273.15)*9/5,5));
				$("#delisle2").text(ForDight((100-inNum)*3/2,5));
				$("#newton2").text(ForDight(inNum*33/100,5));
			}
			else if($('#selectNum').val()=="°K" || $('#selectNum').val()==2)
			{
				$("#celsius2").text(ForDight(inNum-273.15,5));
				$("#kelvin2").text(ForDight(inNum,5));
				$("#fahrenheit2").text(ForDight(inNum*9/5-459.67,5));
				$("#rankine2").text(ForDight(inNum*9/5,5));
				$("#delisle2").text(ForDight((373.15-inNum)*3/2,5));
				$("#newton2").text(ForDight((inNum-273.15)*33/100,5));
			}
			else if($('#selectNum').val()==3)
			{
				$("#celsius2").text(ForDight((inNum-32)*5/9,5));
				$("#kelvin2").text(ForDight((inNum+459.67)*5/9,5));
				$("#fahrenheit2").text(ForDight(inNum,5));
				$("#rankine2").text(ForDight(inNum+459.67,5));
				$("#delisle2").text(ForDight((212-inNum)*5/6,5));
				$("#newton2").text(ForDight((inNum-32)*11/60,5));
			}
			else if($('#selectNum').val()==4)
			{
				$("#celsius2").text(ForDight((inNum-491.67)*5/9,5));
				$("#kelvin2").text(ForDight(inNum*5/9,5));
				$("#fahrenheit2").text(ForDight(inNum-459.67,5));
				$("#rankine2").text(ForDight(inNum,5));
				$("#delisle2").text(ForDight((671.67-inNum)*5/6,5));
				$("#newton2").text(ForDight((inNum-491.67)*11/60,5));
			}
			else if($('#selectNum').val()==5)
			{
				$("#celsius2").text(ForDight(100-inNum*2/3,5));
				$("#kelvin2").text(ForDight(373.15-inNum*2/3,5));
				$("#fahrenheit2").text(ForDight(212-inNum*6/5,5));
				$("#rankine2").text(ForDight(671.67-inNum*6/5,5));
				$("#delisle2").text(ForDight(inNum,5));
				$("#newton2").text(ForDight(33-inNum*11/50,5));
			}
			else if($('#selectNum').val()==6)
			{
				$("#celsius2").text(ForDight(inNum*100/33,5));
				$("#kelvin2").text(ForDight(inNum*100/33+273.15,5));
				$("#fahrenheit2").text(ForDight(inNum*60/11+32,5));
				$("#rankine2").text(ForDight(inNum*60/11+491.67,5));
				$("#delisle2").text(ForDight((33-inNum)*50/11,5));
				$("#newton2").text(ForDight(inNum,5));
			}
			}
        }
