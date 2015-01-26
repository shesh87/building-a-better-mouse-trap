
/*
function slideFrame() { //slides frame/image row left to right 
	$(".frame-container").click(function() {
	    var clicks = $(this).data("clicks");
	    if (!clicks) {
	        $(this).prevAll().animate( {
	            marginLeft: "-2000px"
	        },1500,"linear");
	    } else {
	        $(this).prevAll().animate( {
	            marginLeft: "0px"
	        },1500,"linear");
	    }
	    $(this).data("clicks", !clicks);
	});
}
slideFrame();




function hiddenContent() { //hide & shows hidden content
	$(".frame-container").click(function() {
		var all = $(this).find(".frame-subtext").prevAll();
		$(this).find(".frame-content").slideToggle("slow"); //shows hidden text of current
		$(this).find(".frame-subtext").toggle("slow"); //hides subtext of current
		$(this).prevAll().find(".frame-subtext").toggle("slow"); //hides subtext of previous elements
		$(this).find("+ .frame-container .col").toggleClass("remove"); //removes the margin-left of right element
		$(this).find(".col").toggleClass("remove"); //removes the margin-left of current
		$(this).nextAll(".frame-container").toggleClass("move"); //hides next elements
	});
}
hiddenContent();
*/

/*
function slideFrame2() {
	$(".frame-container").click(function() {
	    var clicks = $(this).data("clicks");
	    if (!clicks) {
            $(this).nextAll(".frame-container").fadeOut("slow");
            $(this).find(".frame-subtext").slideUp("slow");
	        $(this).prevAll().animate( {
	            marginLeft: "-2000px"
	        },1500,"linear");
            $(this).find(".frame-content").fadeIn("slow");
	    } else {
            $(this).find(".frame-content").fadeOut("slow");
            $(this).find(".frame-subtext").slideDown("slow");
	        $(this).prevAll().animate( {
	            marginLeft: "0px"
	        },1500,"linear");
            $(this).nextAll(".frame-container").fadeIn("slow");
	    }
	    $(this).data("clicks", !clicks);
	});
}
slideFrame2();
*/




function slideFrame2() {
	$(".frame-container").click(function() {
	    var clicks = $(this).data("clicks");
	    if (!clicks) {
             //store content
            $(this).nextAll(".frame-container").fadeOut("fast");
            $(this).find(".frame-subtext").slideUp("slow"); //slide out subtext
            $(this).find(".frame-content").slideDown("slow");
            $(this).prevAll().animate( {
	            marginLeft: "-2000px"
	        },1500,"linear");
	        $(this).find(".col").addClass("remove"); //removes the margin-left of current
	    } else {
	    	$(this).find(".frame-content").slideUp("slow");
            $(this).find(".frame-subtext").slideDown("slow");
            $(this).prevAll().animate( {
	            marginLeft: "0px"
	        },1500,"linear");
	        $(this).nextAll(".frame-container").fadeIn("fast");
	        $(this).find(".col").removeClass("remove"); //adds the margin-left of current

	        /*$(this).prevAll().animate( { //slides frame row right
	            marginLeft: "0px"
	        },1500,"linear",function() {
	        	$(then).fadeIn("slow"); //fades containers in after animation is complete
	        });*/
	    }
	    $(this).data("clicks", !clicks);
	});
}
slideFrame2();







