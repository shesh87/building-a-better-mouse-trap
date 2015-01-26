
$(".frame-container").click(function() {
	$(this).find(".frame-content").slideToggle("slow"); //show frame content
	$(this).find(".frame-subtext").toggle("slow"); //hide subtext
	$(this).find("+ .frame-container .col").toggleClass("remove"); //removes margin of right div
	$(this).find(".col").toggleClass("remove"); //removes margin of current div
    $(this).prevAll().slideToggle("slow"); //hides divs left of current
    //$(this).prevAll().animate({marginLeft: hideWidth}, 300);
    //code to get prev divs to collapse/toggle horizontal not vertical (work in progress)
});