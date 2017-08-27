	$(document).ready(
	    function () {
	       
	 // $("#parent-container").find("#hotel-child-container").attr("display","none");
	$("#return").click(function() {
		$(this).attr("disabled",true);
	    $("#departure-info-flex").append("<p id=\"returnText\"class=\"text-info\">Returning</p>");
	    $("#departure-input-box").append("<input class=\"datepicker\" id=\"returnDate\" value=\"mm/dd/yyyy\" type=\"text\">");
	    $('#departure-input-box').find('#returnDate').datepicker({changeMonth: true,changeYear: true,minDate:'0m+0d'});
	    $(".departure-info-input-text").css("width","100%");
	    $("#deparure-info-flex").css("width","680px");
	    $('#departure-input-box').css("width","630px");
	}
	);
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
	            minDate:'0m+0d'
	        }
	   );
	 $("#flight").click(function(){
	 		$("#hotel-child-container").css("display","none");
	 		$("#departure-info-flex").css("width","600px");
	 		$("#flight-child-container").css("display","block");
	 });
	 $("#hotels").click(function(){
	 			$("#flight-child-container").css("display","none");
	 			$("#hotel-child-container").css("display","block");
	 			$("#departure-info-input-text").css("width","100%");
	 			$("#departure-input-box").css("width","600px");
	 }
	 );
	 $("#oneWay").click(function(){
			$("#returnDate").remove();
			$("#returnText").remove();
			$("#return").removeAttr("disabled");
			$(".departure-info-input-text").css("width","100%");
			$("#departure-input-box").css("width","628px");
	}
	);
	}
	 );
	
	