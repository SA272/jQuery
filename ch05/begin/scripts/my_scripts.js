$(document).ready(function(){
	let headclix = 0, eyesclix = 0, noseclix = 0, mouthclix = 0; //Объявление переменных
	lightning_one();
	lightning_two();
	lightning_three();
	
	$("#head").click(function() {
		if(headclix < 9){$(this).animate({left:"-=367px"},500);
		 headclix += 1;
		} else { headclix = 0; $(this).animate({left:"0px"},500);
		}
	});
	
	$("#eyes").click(function() {
		if(eyesclix < 9){$(this).animate({left:"-=367px"},500);
		eyesclix += 1;
		} else { eyesclix = 0; $(this).animate({left:"0px"},500);
		}
	});
    
	$("#nose").click(function() {
		if(noseclix < 9){$(this).animate({left:"-=367px"},500);
		noseclix += 1;
		} else { noseclix = 0; $(this).animate({left:"0px"},500);
		}
	});
    
	$("#mouth").click(function() {
		if(mouthclix < 9){$(this).animate({left:"-=367px"},500);
		mouthclix += 1;
		} else { mouthclix = 0; $(this).animate({left:"0px"},500);
		}
	});	
});//Конец документа

function lightning_one(){
	$("#container #lightning1").fadeIn(250).fadeOut(250);
	setTimeout("lightning_one()",4000);
};

function lightning_two(){
	$("#container #lightning2").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_two()",5000);
};

function lightning_three(){
	$("#container #lightning3").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_three()",7000);
};