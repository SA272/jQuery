$(document).ready(function() {
	$("#btn1").mouseenter(function(){
		$("#header").addClass("hover");
		$("#header").removeClass("no_hover");
	});
	$("#btn2").mouseleave(function(){
		$("#header").removeClass("hover");
		$("#header").addClass("no_hover");
	});
});