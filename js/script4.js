

// THIS CODE IS THE ONE THAT WORKS!! DO NOT DELETE
/*
$(".frame-container").click(function(event) {
    var subtext = $(this).find(".frame-subtext");
    var content = $(this).find(".frame-content");
    var container = $(this).nextAll(".frame-container");
    var previous = $(this).prevAll();
    var column = $(this).find(".col");
    var clicks = $(this).data("clicks");
  
    if (!clicks) {
        $(container).fadeOut(function() {
            $(subtext).slideUp(function() {
                $(content).slideDown("slow");
            });
            $(previous).animate({marginLeft: "-2000px"},1500,"linear");
            $(column).addClass("remove"); //removes the margin-left of current
        });
    } else {
        $(content).slideUp("slow");
        $(subtext).slideDown("slow");
        $(previous).animate({marginLeft: "0px"},1200,"linear", function() {
            $(container).fadeIn();
            $(column).removeClass("remove"); //removes the margin-left of current
        });
    }
    $(this).data("clicks", !clicks);
});
*/





$(".frame-container").click(function(event) {
    var subtext = $(this).find(".frame-subtext");
    var content = $(this).find(".frame-content");
    var container = $(this).nextAll(".frame-container");
    var previous = $(this).prevAll();
    var column = $(this).find(".col");
    var thisFrame = $( ".frame-container" ).index( this );
    var cat = $(window).width();
    var clicks = $(this).data("clicks");
    // first user click
    if (!clicks) {
        //last child condition
        if (thisFrame === 3) {
            $(subtext).slideUp();
            $(content).slideDown("slow");
            $(previous).animate({marginLeft: "-2000px"},1500,"linear");
            $(column).addClass("remove"); //removes the margin-left of current
        } else {
            $(container).fadeOut(function() {
                /*$(subtext).slideUp(function() {
                    $(content).slideDown("slow");
                });*/
                $(subtext).slideUp("slow");
                $(content).slideDown("slow");
                $(previous).animate({marginLeft: "-2000px"},1500,"linear");
                $(column).addClass("remove"); //removes the margin-left of current
            });
        }
      //second user click
    } else {
      //first cild condition
      if (thisFrame === 0) {
            $(content).slideUp("slow");
            $(subtext).slideDown("slow");
            $(container).fadeIn();
      } else {
            $(content).slideUp("slow");
            $(subtext).slideDown("slow");
            $(previous).animate({marginLeft: "0px"},1200,"linear", function() {
                $(container).fadeIn();
                $(column).removeClass("remove"); //removes the margin-left of current
            });
      }
    }
    $(this).data("clicks", !clicks);
});





