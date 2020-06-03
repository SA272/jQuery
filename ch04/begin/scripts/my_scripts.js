$(document).ready(function(){
	
 let v = false;
 let $f, $m;
 
  $("button#vegOn").click(function() {
   if (v == false) {
   $(".fish").parent().parent().detach();//Рыба
   
   $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mashroom</em></li>");//Гамбургеры
   $(".tofu").parent().parent().addClass("veg_leaf");
   
   $(".meat").after("<li class='tofu'><em>Tofu</em></li>");//Мясо
   $m = $(".meat").detach();
   $(".tofu").parent().parent().addClass("veg_leaf");
   
   v = true;}
  });//Конец vegOn
  
  $("button#restoreMe").click(function(){
	  
   if (v == true) {
   $(".portobello").parent().parent().removeClass("veg_leaf");
   $(".portobello").replaceWith("li class='hamburger'>Hamburger</li>");//Грибы
   
   $(".menu_entrees li").first().before($f);
   
   $(".tofu").parent().parent().removeClass("veg_leaf");
   $(".tofu").each(function(i){
    $(this).after($m[i]);
	});
	$(".tofu").remove();
   v = false;}
  })  
});