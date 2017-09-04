	$(document).ready(
	    function () {
	    	$("#return-text").hide();
	    	$("#returning").hide();
	  // $("#button-container").tabs(); 
	  // $("#trip-button-flex").tabs();    
	$("#return").click(function() {
		$("#oneWay").css("background-color","inherit");
		$("#return").css("background-color","blue");
		$("#oneWay").css("")
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
	 		$("#button-container #flights").css("background-color","blue");
	 		$("#button-container #hotels").css("background-color","inherit");
	 		$("#parent-container").css("background","url(\"https://productimages.withfloats.com/actual/5909a04fff82870b5c402b8e.jpg\")");
	 });
	 $("#hotels").click(function(){
	 			$("#flight-child-container").css("display","none");
	 			$("#parent-container").css("background","url(\"http://www.aceprofitsacademy.com/wp-content/uploads/2016/01/shutterstock_95926138_gdk5a6.jpg\")");
	 			$("#hotel-child-container").css("display","flex");
	 			$("#button-container #flights").css("background-color","inherit");
	 			$("#button-container #hotels").css("background-color","blue");
	 			// $("#hotel-child-container").find("#button-container").tabs(); 
	 			$("#departure-info-input-text").css("width","100%");
	 			$("#departure-input-box").css("width","600px");
	 }
	 );
	 $("#oneWay").on("click",function(){
			$("#return-text").hide();
	    	$("#returning").hide();
	    	$("#oneWay").css("background-color","blue");
			$("#return").css("background-color","inherit");
			$(".departure-info-input-text").css("width","100%");
			$("#departure-input-box").css("width","600px");
			}
	);
	 var val=0;
	 $("#rooms").on("change",function(){
	 				$("#rooms-info").empty();
	 				 val=$("#rooms option:selected").val();
	 				 var appendRooms="<div id=\"room-info-flex\">\
	 				 <p id=\"adultsText\" class=\"text-info\">Adults(18+)</p>\
	 				 <p id=\"childenText\" class=\"text-info\">Children(0-17)</p>\
	 				 </div>";
	 				 var appendRoomInfo="<div id=\"room-input-box\">\
                    <select id=\"adults\">\
                        <option value=\"1\">1</option>\
                        <option value=\"2\">2</option>\
                        <option value=\"3\">3</option>\
                        <option value=\"4\">4</option>\
                        <option value=\"5\">5</option>\
                        <option value=\"6\">6</option>\
                    </select>\
                    <select id=\"children\">\
                        <option value=\"0\">0</option>\
                        <option value=\"1\">1</option>\
                        <option value=\"2\">2</option>\
                        <option value=\"3\">3</option>\
                        <option value=\"4\">4</option>\
                        <option value=\"5\">5</option>\
                        <option value=\"6\">6</option>\
                    </select>\
                    </div>";
	 				for(i=0;i<val;i++)
	 				{
	 					 var individualRoom = "<div id=\"roomNumber\"><p>Room " + (i + 1) + "</p></div>";
	 					$("#rooms-info").append(individualRoom);
	 					$("#rooms-info").append(appendRooms);
  						$("#rooms-info").append(appendRoomInfo);
  						}
	 });
	}
	 );
	
	