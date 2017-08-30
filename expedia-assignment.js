	$(document).ready(
	    function () {
	    	$("#return-text").hide();
	    	$("#returning").hide();
	  $("#button-container").tabs(); 
	  $("#trip-button-flex").tabs();    
	$("#return").click(function() {
		$("#return-text").show();
		$("#returning").show();
	});
	$("#checkIn").datepicker({
					changeMonth: true,
					changeYear: true,
					minDate: '0m+0d'
	});
	$("#checkOut").datepicker({
					changeMonth: true,
					changeYear: true,
					minDate: '0m+1d'
	});
	 $(".datepicker").datepicker({
	            changeMonth: true,
	            changeYear: true,
	            minDate:'0m+0d',
	            showAnim: "fadeIn",
	            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	        }
	   );
	 $("#button-container #flights").click(function(){
	 		$("#hotel-child-container").css("display","none");
	 		$("#departure-info-flex").css("width","600px");
	 		$("#flight-child-container").css("display","flex");
	 		$("#parent-container").css("background","url(\"https://productimages.withfloats.com/actual/5909a04fff82870b5c402b8e.jpg\")");
	 });
	 $("#hotels").click(function(){
	 			$("#flight-child-container").css("display","none");
	 			$("#parent-container").css("background","url(\"http://www.aceprofitsacademy.com/wp-content/uploads/2016/01/shutterstock_95926138_gdk5a6.jpg\")");
	 			$("#hotel-child-container").css("display","flex");
	 			$("#hotel-child-container").find("#button-container").tabs(); 
	 			$("#departure-info-input-text").css("width","100%");
	 			$("#departure-input-box").css("width","600px");
	 }
	 );
	 $("#oneWay").on("click",function(){
			$("#return-text").hide();
	    	$("#returning").hide();
			$(".departure-info-input-text").css("width","100%");
			$("#departure-input-box").css("width","628px");
			}
	);
	 var val=0;
	 $("#rooms").on("change",function(){
	 				$("#adultsText").hide();
	 				$("#childrenText").hide();
	 				$("#extraRoom #adults").hide();
	 				$("#extraRoom #children").hide();
	 				 val=$("#rooms option:selected").val();
	 				
	 				for(i=val;i>0;i--)
	 				{
	 					$("#extraRoom").append("<div id=\"extraRooms\"><div id=\"roomNumber\"><p id=\"roomnum\">Room</p><select id=\"adults\"><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option></select></div></div>");
                    // <select id=\"children\">
                    //     <option value=0>0</option>
                    //     <option value=1>1</option>
                    //     <option value=2>2</option>
                    //     <option value=3>3</option>
                    //     <option value=4>4</option>
                    //     <option value=5>5</option>
                    //     <option value=6>6</option>
                    // </select></div></div>);
	 				}
	 });
	}
	 );
	
	