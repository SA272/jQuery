$(document).ready(function() {
	
   $(".guess_box").click(checkForCode);
   
   //функция getRandom возвращает случайное число.
   function getRandom(num){
		let my_num = Math.floor(Math.random()*num);
		return my_num;
	}
	
	//Функция hideCode, скрывающая признак скидки.
	let hideCode = function() {
		let numRand = getRandom(4);
		$(".guess_box").each(function(index, value) {
			if(numRand == index) {
				$(this).append("<span id ='has_discount'></span>");
				return false;
			}
		});
	}
	
	hideCode();
	
	//Функция подсветки изображения.
	$(".guess_box").hover(
	function() {
		$(this).addClass("my_hover");
	},
	function() {
		$(this).removeClass("my_hover");
	});
	
	//Проверка кода.
    function checkForCode(){
	let discount;
	if($.contains(this, document.getElementById("has_discount")))
	{
		let my_num = getRandom(100);
		discount = "<p>Your Code: CODE"+my_num+"</p>";
	}else{
		discount = "<p>Sorry, no discount this time!</p>";
	}
	$(".guess_box").each(function(){
		if($.contains(this, document.getElementById("has_discount")))
		{
			$(this).addClass("discount");
		}else{
			$(this).addClass("no_discount");
		}
		$(this).unbind();
	});
	$("#result").append(discount);
	}
});