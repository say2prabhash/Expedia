	$(document).ready(
	    function () {
	    	$("#return-text").hide();
	    	$("#returning").hide();
	  $("#button-container").tabs(); 
	  $("#trip-button-flex").tabs();    
	$("#return").click(function() {
		$("#return-text").show();
		$("#returning").show();
	    // $("#departure-info-flex").append("<p id=\"returnText\"class=\"text-info\">Returning</p>");
	    // $("#departure-input-box").append("<input class=\"datepicker\" id=\"returnDate\" value=\"mm/dd/yyyy\" type=\"text\">");
	    // $('#departure-input-box').find('#returnDate').datepicker({changeMonth: true,changeYear: true,minDate:'0m+0d'});
	    // $(".departure-info-input-text").css("width","100%");
	    // $("#deparure-info-flex").css("width","680px");
	    // $('#departure-input-box').css("width","630px");
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
	 		$("#flight-child-container").css("display","block");
	 });
	 $("#hotels").click(function(){
	 			$("#flight-child-container").css("display","none");
	 			$("#hotel-child-container").css("display","block");
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
	}
	 );
	
	