	$(document).ready(
	    function () {
	       
	 
	$("#return").click(function() {
		$(this).attr("disabled",true);
	    $("#departure-info-flex").append("<p id=\"returnText\"class=\"text-info\">Returning</p>");
	    $("#departure-input-box").append("<input id=\"returnDate\" value=\"mm/dd/yyyy\" type=\"text\">");
	    $('#departure-input-box').find('#datepicker').datepicker();
	    $(".deparure-info-input-flex").css("width","710px");
	    $(".departure-info-input-text").css("width","710px");
	    $('#departure-input-box').css("width","710px")
	}
	);
	 $(".datepicker").datepicker({
	            changeMonth: true,
	            changeYear: true
	        });
	 
	 
	 $("#oneWay").click(function(){
			$("#returnDate").remove();
			$("#returnText").remove();
			$("#return").removeAttr("disabled");
	}
	);
	}
	 );
	
	