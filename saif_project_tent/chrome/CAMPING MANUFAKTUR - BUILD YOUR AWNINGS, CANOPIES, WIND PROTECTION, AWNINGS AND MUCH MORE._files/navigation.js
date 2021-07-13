/*!

// NAVIGATION - Contents //Works with point .5 of CSS

// ------------------------------------------------

*/



//SCROLL DOWN FOR MOBILE SIZE

$('.go-konfig').click(function(){

	window.scrollTo(0 , document.body.scrollHeight*2)

	console.log(document.body.scrollHeight);

	console.log("afafafasasf");

})

$('.go-up').click(function(){

	window.scrollTo(0 ,0)

})



//Home Navigation

function openNav() {

	document.getElementById("mySidenav").style.width = "0%";

	document.getElementById("mySidenav-2").style.width = "100%";

	}

function closeNav() {

	document.getElementById("mySidenav-2").style.width = "0";

	document.getElementById("mySidenav").style.width = "100%";

	}

//Second Level Navigation

function openNav3() {

	document.getElementById("mySidenav").style.width = "0%";

	document.getElementById("mySidenav-3").style.width = "100%";

	}

function closeNav3() {

	document.getElementById("mySidenav-3").style.width = "0";

	document.getElementById("mySidenav").style.width = "100%";

	}

function openNav4() {

	document.getElementById("mySidenav").style.width = "0%";

	document.getElementById("mySidenav-4").style.width = "100%";

	}

function closeNav4() {

	document.getElementById("mySidenav-4").style.width = "0";

	document.getElementById("mySidenav").style.width = "100%";

	}





/*!reset all sidenav before opening mySidenav7(summary)*/

function openNav7() {

	document.getElementById("mySidenav-3").style.width = "0";
	document.getElementById("mySidenav-4").style.width = "0";
	document.getElementById("mySidenav-10").style.width = "0";
	document.getElementById("mySidenav").style.width = "0%";
	document.getElementById("mySidenav-7").style.width = "100%";

	}
function openNavCata() {

	document.getElementById("mySidenav-3").style.width = "0";

	document.getElementById("mySidenav-4").style.width = "0";
	document.getElementById("mySidenav-10").style.width = "0";

	// document.getElementById("mySidenav-5").style.width = "0";

	// document.getElementById("mySidenav-6").style.width = "0";

	// document.getElementById("mySidenav-12").style.width = "0";

	// document.getElementById("mySidenav-15").style.width = "0";

	document.getElementById("mySidenav").style.width = "0%";

	// document.getElementById("mySidenav-19").style.width = "0";



	document.getElementById("mySidenav-7").style.width = "0%";
	document.getElementById("mySidenav-cata").style.width = "100%";

	}

//end reset

function showHome(){

	document.getElementById("mySidenav-2").style.width = "0";

	document.getElementById("mySidenav-3").style.width = "0";

	document.getElementById("mySidenav-4").style.width = "0";

	document.getElementById("mySidenav-5").style.width = "0";

	document.getElementById("mySidenav-6").style.width = "0";

	document.getElementById("mySidenav-12").style.width = "0";

	document.getElementById("mySidenav-13").style.width = "0";

	document.getElementById("mySidenav-15").style.width = "0";

	document.getElementById("mySidenav-19").style.width = "0%";

	document.getElementById("mySidenav-7").style.width = "0%";

	document.getElementById("mySidenav").style.width = "100%";



}

function closeNav7() {

	document.getElementById("mySidenav-7").style.width = "0";

	document.getElementById("mySidenav").style.width = "100%";

	}




//Third Level Navigation

function openNav5() {

	document.getElementById("mySidenav").style.width = "0%";

	document.getElementById("mySidenav-5").style.width = "100%";

	}

function closeNav5() {
document.getElementById("mySidenav-5").style.width = "0";
document.getElementById("mySidenav").style.width = "100%";
}




function openNav3and1() {
	document.getElementById("mySidenav-3-1").style.width = "100%";
	document.getElementById("mySidenav-4").style.width = "0%";
	}

function closeNav3and1() {
	document.getElementById("mySidenav-3-1").style.width = "0%";
	document.getElementById("mySidenav-4").style.width = "100%";
	}
	function openNav3and2() {
		document.getElementById("mySidenav-3-2").style.width = "100%";
		document.getElementById("mySidenav-4").style.width = "0%";
		}

	function closeNav3and2() {
		document.getElementById("mySidenav-3-2").style.width = "0%";
		document.getElementById("mySidenav-4").style.width = "100%";
		}

		function openNav3and3() {
			document.getElementById("mySidenav-3-3").style.width = "100%";
			document.getElementById("mySidenav-4").style.width = "0%";
			}

		function closeNav3and3() {
			document.getElementById("mySidenav-3-3").style.width = "0%";
			document.getElementById("mySidenav-4").style.width = "100%";
			}
			function openNav3and4() {
				document.getElementById("mySidenav-3-4").style.width = "100%";
				document.getElementById("mySidenav-4").style.width = "0%";
				}
	
			function closeNav3and4() {
				document.getElementById("mySidenav-3-4").style.width = "0%";
				document.getElementById("mySidenav-4").style.width = "100%";
				}

				function openNav6and1() {
					document.getElementById("mySidenav-6-1").style.width = "100%";
					document.getElementById("mySidenav-6").style.width = "0%";
					}
		
				function closeNav6and1() {
					document.getElementById("mySidenav-6-1").style.width = "0%";
					document.getElementById("mySidenav-6").style.width = "100%";
					}
					function openNav6and2() {
						document.getElementById("mySidenav-6-2").style.width = "100%";
						document.getElementById("mySidenav-6").style.width = "0%";
						}
			
					function closeNav6and2() {
						document.getElementById("mySidenav-6-2").style.width = "0%";
						document.getElementById("mySidenav-6").style.width = "100%";
						}
						function openNav6and3() {
							document.getElementById("mySidenav-6-3").style.width = "100%";
							document.getElementById("mySidenav-6").style.width = "0%";
							}
				
						function closeNav6and3() {
							document.getElementById("mySidenav-6-3").style.width = "0%";
							document.getElementById("mySidenav-6").style.width = "100%";
							}
							function openNav6and4() {
								document.getElementById("mySidenav-6-4").style.width = "100%";
								document.getElementById("mySidenav-6").style.width = "0%";
								}
					
							function closeNav6and4() {
								document.getElementById("mySidenav-6-4").style.width = "0%";
								document.getElementById("mySidenav-6").style.width = "100%";
								}
	



function openNav6() {

document.getElementById("mySidenav").style.width = "0%";

document.getElementById("mySidenav-6").style.width = "100%";

}

function closeNav6() {

document.getElementById("mySidenav-6").style.width = "0";

document.getElementById("mySidenav").style.width = "100%";

}

function openNav9() {

document.getElementById("mySidenav").style.width = "0%";

document.getElementById("mySidenav-9").style.width = "100%";

}

function closeNav9() {

	console.log("nav9");

document.getElementById("mySidenav-9").style.width = "0";

document.getElementById("mySidenav").style.width = "100%";

}

function openNav10() {

document.getElementById("mySidenav").style.width = "0%";

document.getElementById("mySidenav-10").style.width = "100%";

}

function closeNav10() {

document.getElementById("mySidenav-10").style.width = "0";

document.getElementById("mySidenav").style.width = "100%";

}

function openNav11() {

document.getElementById("mySidenav-7").style.width = "0%";

document.getElementById("mySidenav-10").style.width = "100%";

}

function openNav100() {

	document.getElementById("mySidenav").style.width = "0%";

	document.getElementById("mySidenav-100").style.width = "100%";

	}

	function closeNav100() {

		console.log("nav9");

	document.getElementById("mySidenav-100").style.width = "0";

	document.getElementById("mySidenav").style.width = "100%";

	}

//-----------------layout doors and windows -------------------
//-------------------------------------------------------------
var testSide = "back"
var testdoor ="door"
var testwindow ="window"
$("#testdoor").click(function(){
	openside(testSide,testdoor)
})
$("#testwindow").click(function(){
	openside(testSide,testwindow)
})

   function openside(wallSide,wallpart){
      if(wallSide == "front"){
		document.getElementById("mySidenav-7").style.width = "0%";
		document.getElementById("mySidenav-3").style.width = "0%";
		document.getElementById("mySidenav-4").style.width = "0%";
		document.getElementById("mySidenav-5").style.width = "0%";
		document.getElementById("mySidenav-3-1").style.width = "0%";
		document.getElementById("mySidenav-3-2").style.width = "0%";
		document.getElementById("mySidenav-3-3").style.width = "0%";
		document.getElementById("mySidenav-3-4").style.width = "0%";
		document.getElementById("mySidenav-6").style.width = "0%";
		document.getElementById("mySidenav-6-1").style.width = "100%";
		document.getElementById("mySidenav-6-2").style.width = "0%";
		document.getElementById("mySidenav-6-3").style.width = "0%";
		document.getElementById("mySidenav-6-4").style.width = "0%";
		document.getElementById("mySidenav-2").style.width = "0%";
         if(wallpart == "door"){
			 if($("#front-door-headingThree a").hasClass("collapsed")){
				$("#front-door-headingThree a").click()
			 } else{

			 }
		 }else if(wallpart == "window"){
			 $("#front-windows-headingTwo a ").click()
		}
	
	  }else if(wallSide == "back"){
		document.getElementById("mySidenav-7").style.width = "0%";
		document.getElementById("mySidenav-3").style.width = "0%";
		document.getElementById("mySidenav-4").style.width = "0%";
		document.getElementById("mySidenav-5").style.width = "0%";
		document.getElementById("mySidenav-3-1").style.width = "0%";
		document.getElementById("mySidenav-3-2").style.width = "0%";
		document.getElementById("mySidenav-3-3").style.width = "0%";
		document.getElementById("mySidenav-3-4").style.width = "0%";
		document.getElementById("mySidenav-6").style.width = "0%";
		document.getElementById("mySidenav-6-1").style.width = "0%";
		document.getElementById("mySidenav-6-2").style.width = "100%";
		document.getElementById("mySidenav-6-3").style.width = "0%";
		document.getElementById("mySidenav-6-4").style.width = "0%";
		document.getElementById("mySidenav-2").style.width = "0%";
		if(wallpart == "door"){
    if($("#back-door-headingThree a").hasClass("collapsed")){
       $("#back-door-headingThree a").click()
    } else{
        
    }
}else if(wallpart == "window"){
    $("#back-windows-headingTwo a ").click()
}
	
	}else if(wallSide == "left"){
		document.getElementById("mySidenav-7").style.width = "0%";
		document.getElementById("mySidenav-3").style.width = "0%";
		document.getElementById("mySidenav-4").style.width = "0%";
		document.getElementById("mySidenav-5").style.width = "0%";
		document.getElementById("mySidenav-3-1").style.width = "0%";
		document.getElementById("mySidenav-3-2").style.width = "0%";
		document.getElementById("mySidenav-3-3").style.width = "0%";
		document.getElementById("mySidenav-3-4").style.width = "0%";
		document.getElementById("mySidenav-6").style.width = "0%";
		document.getElementById("mySidenav-6-1").style.width = "0%";
		document.getElementById("mySidenav-6-2").style.width = "0%";
		document.getElementById("mySidenav-6-3").style.width = "100%";
		document.getElementById("mySidenav-6-4").style.width = "0%";
		document.getElementById("mySidenav-2").style.width = "0%";
		if(wallpart == "door"){
			if($("#left-door-headingThree a").hasClass("collapsed")){
			   $("#left-door-headingThree a").click()
			} else{
				
			}
		}else if(wallpart == "window"){
			$("#left-windows-headingTwo a ").click()
		}
		  
	}else if(wallSide == "right"){
		document.getElementById("mySidenav-7").style.width = "0%";
		document.getElementById("mySidenav-3").style.width = "0%";
		document.getElementById("mySidenav-4").style.width = "0%";
		document.getElementById("mySidenav-5").style.width = "0%";
		document.getElementById("mySidenav-3-1").style.width = "0%";
		document.getElementById("mySidenav-3-2").style.width = "0%";
		document.getElementById("mySidenav-3-3").style.width = "0%";
		document.getElementById("mySidenav-3-4").style.width = "0%";
		document.getElementById("mySidenav-6").style.width = "0%";
		document.getElementById("mySidenav-6-1").style.width = "0%";
		document.getElementById("mySidenav-6-2").style.width = "10%";
		document.getElementById("mySidenav-6-3").style.width = "0%";
		document.getElementById("mySidenav-6-4").style.width = "100%";
		document.getElementById("mySidenav-2").style.width = "0%";
		if(wallpart == "door"){
			if($("#right-door-headingThree a").hasClass("collapsed")){
			   $("#right-door-headingThree a").click()
			} else{
				
			}
		}else if(wallpart == "window"){
			$("#right-windows-headingTwo a ").click()
		}
	}
   }

//close from summary nav

function openNav1FromSumm() {

	document.getElementById("mySidenav-7").style.width = "0%";
	document.getElementById("mySidenav-3").style.width = "0%";
	document.getElementById("mySidenav-4").style.width = "0%";
	document.getElementById("mySidenav-5").style.width = "0%";
	document.getElementById("mySidenav-3-1").style.width = "0%";
	document.getElementById("mySidenav-3-2").style.width = "0%";
	document.getElementById("mySidenav-3-3").style.width = "0%";
	document.getElementById("mySidenav-3-4").style.width = "0%";
	document.getElementById("mySidenav-6").style.width = "0%";
	document.getElementById("mySidenav-6-1").style.width = "0%";
	document.getElementById("mySidenav-6-2").style.width = "0%";
	document.getElementById("mySidenav-6-3").style.width = "0%";
	document.getElementById("mySidenav-6-4").style.width = "0%";
	document.getElementById("mySidenav-2").style.width = "100%";

	}

function openNav1FromSumm3() {

	document.getElementById("mySidenav-7").style.width = "0%";

	document.getElementById("mySidenav-3").style.width = "0%";


	document.getElementById("mySidenav-4").style.width = "100%";

	document.getElementById("mySidenav-5").style.width = "0%";
	document.getElementById("mySidenav-3-1").style.width = "0%";
	document.getElementById("mySidenav-3-2").style.width = "0%";
	document.getElementById("mySidenav-3-3").style.width = "0%";
	document.getElementById("mySidenav-3-4").style.width = "0%";

	document.getElementById("mySidenav-6").style.width = "0%";
	document.getElementById("mySidenav-6-1").style.width = "0%";
	document.getElementById("mySidenav-6-2").style.width = "0%";
	document.getElementById("mySidenav-6-3").style.width = "0%";
	document.getElementById("mySidenav-6-4").style.width = "0%";

	document.getElementById("mySidenav-2").style.width = "0%";


	}

function openNav1FromSumm4() {

	document.getElementById("mySidenav-7").style.width = "0%";

	document.getElementById("mySidenav-3").style.width = "100%";


	document.getElementById("mySidenav-4").style.width = "0%";

	document.getElementById("mySidenav-5").style.width = "0%";
	document.getElementById("mySidenav-3-1").style.width = "0%";
	document.getElementById("mySidenav-3-2").style.width = "0%";
	document.getElementById("mySidenav-3-3").style.width = "0%";
	document.getElementById("mySidenav-3-4").style.width = "0%";

	document.getElementById("mySidenav-6").style.width = "0%";
	document.getElementById("mySidenav-6-1").style.width = "0%";
	document.getElementById("mySidenav-6-2").style.width = "0%";
	document.getElementById("mySidenav-6-3").style.width = "0%";
	document.getElementById("mySidenav-6-4").style.width = "0%";

	document.getElementById("mySidenav-2").style.width = "0%";

	}

function openNav1FromSumm5() {

	document.getElementById("mySidenav-7").style.width = "0%";

	document.getElementById("mySidenav-3").style.width = "0%";


	document.getElementById("mySidenav-4").style.width = "0%";

	document.getElementById("mySidenav-5").style.width = "100%";
	document.getElementById("mySidenav-3-1").style.width = "0%";
	document.getElementById("mySidenav-3-2").style.width = "0%";
	document.getElementById("mySidenav-3-3").style.width = "0%";
	document.getElementById("mySidenav-3-4").style.width = "0%";

	document.getElementById("mySidenav-6").style.width = "0%";
	document.getElementById("mySidenav-6-1").style.width = "0%";
	document.getElementById("mySidenav-6-2").style.width = "0%";
	document.getElementById("mySidenav-6-3").style.width = "0%";
	document.getElementById("mySidenav-6-4").style.width = "0%";

	document.getElementById("mySidenav-2").style.width = "0%";


	}

function openNav1FromSumm6() {

	document.getElementById("mySidenav-7").style.width = "0%";
	document.getElementById("mySidenav-3").style.width = "0%";
	document.getElementById("mySidenav-4").style.width = "0%";
	document.getElementById("mySidenav-5").style.width = "0%";
	document.getElementById("mySidenav-3-1").style.width = "0%";
	document.getElementById("mySidenav-3-2").style.width = "0%";
	document.getElementById("mySidenav-3-3").style.width = "0%";
	document.getElementById("mySidenav-3-4").style.width = "0%";
	document.getElementById("mySidenav-6").style.width = "100%";
	document.getElementById("mySidenav-6-1").style.width = "0%";
	document.getElementById("mySidenav-6-2").style.width = "0%";
	document.getElementById("mySidenav-6-3").style.width = "0%";
	document.getElementById("mySidenav-6-4").style.width = "0%";
	document.getElementById("mySidenav-2").style.width = "0%";

	}

function openNav1FromSumm100() {

		document.getElementById("mySidenav-7").style.width = "0%";

		document.getElementById("mySidenav-3").style.width = "0%";

	document.getElementById("mySidenav-4").style.width = "0%";

	document.getElementById("mySidenav-5").style.width = "0%";

	document.getElementById("mySidenav-6").style.width = "0%";

	document.getElementById("mySidenav-61").style.width = "0%";

	document.getElementById("mySidenav-62").style.width = "0%";

	document.getElementById("mySidenav-63").style.width = "0%";

	document.getElementById("mySidenav-8").style.width = "0%";

	document.getElementById("mySidenav-9").style.width = "0%";

	document.getElementById("mySidenav-2").style.width = "0%";

		document.getElementById("mySidenav-100").style.width = "100%";

		}



function openNav1FromSumm8() {

	document.getElementById("mySidenav-7").style.width = "0%";

	document.getElementById("mySidenav-3").style.width = "0%";

	document.getElementById("mySidenav-4").style.width = "0%";

	document.getElementById("mySidenav-5").style.width = "0%";

	document.getElementById("mySidenav-6").style.width = "0%";

	document.getElementById("mySidenav-61").style.width = "0%";

	document.getElementById("mySidenav-62").style.width = "0%";

	document.getElementById("mySidenav-63").style.width = "0%";

	document.getElementById("mySidenav-2").style.width = "0%";

	document.getElementById("mySidenav-9").style.width = "0%";

	document.getElementById("mySidenav-100").style.width = "0%";

	document.getElementById("mySidenav-8").style.width = "100%";

	}

function openNav1FromSumm9() {

	document.getElementById("mySidenav-7").style.width = "0%";

	document.getElementById("mySidenav-3").style.width = "0%";

	document.getElementById("mySidenav-4").style.width = "0%";

	document.getElementById("mySidenav-5").style.width = "0%";

	document.getElementById("mySidenav-6").style.width = "0%";

	document.getElementById("mySidenav-61").style.width = "0%";

	document.getElementById("mySidenav-62").style.width = "0%";

	document.getElementById("mySidenav-63").style.width = "0%";

	document.getElementById("mySidenav-8").style.width = "0%";

	document.getElementById("mySidenav-2").style.width = "0%";

	document.getElementById("mySidenav-100").style.width = "0%";

	document.getElementById("mySidenav-9").style.width = "100%";

	}





function closeNav12() {

	document.getElementById("mySidenav-12").style.width = "0";

	document.getElementById("mySidenav-4").style.width = "100%";

	}

function openNav15() {

	document.getElementById("mySidenav-4").style.width = "100%";

	document.getElementById("mySidenav-15").style.width = "100%";

	}

function closeNav15() {

	document.getElementById("mySidenav-15").style.width = "0";

	document.getElementById("mySidenav-4").style.width = "100%";

	}

//Summary Navigation

function closeNav18() {

	document.getElementById("mySidenav-7").style.width = "0";

	document.getElementById("mySidenav-2").style.width = "100%";

	}

function closeNavtable() {

	document.getElementById("mySidenav-7").style.width = "0";

	document.getElementById("mySidenav-4").style.width = "100%";

	}

// function closeNav9() {

// 	document.getElementById("mySidenav-7").style.width = "0";

// 	document.getElementById("mySidenav-3").style.width = "100%";

// 	}

// function closeNav10() {

// 	document.getElementById("mySidenav-7").style.width = "0";

// 	document.getElementById("mySidenav-5").style.width = "100%";

// 	}

function closeNav11() {

	document.getElementById("mySidenav-7").style.width = "0";

	document.getElementById("mySidenav-6").style.width = "100%";

	}

function closeNav14() {

	document.getElementById("mySidenav-7").style.width = "0";

	document.getElementById("mySidenav-12").style.width = "100%";

	}

function closeNav16() {

	document.getElementById("mySidenav-7").style.width = "0";

	document.getElementById("mySidenav-15").style.width = "100%";

	}

function closeNav20() {

	document.getElementById("mySidenav-7").style.width = "0";

	document.getElementById("mySidenav-19").style.width = "100%";

	}

//Catalogue Navigation

function openNav13() {

	document.getElementById("mySidenav").style.width = "0%";

	document.getElementById("mySidenav-13").style.width = "100%";

	}

function closeNav13() {

	document.getElementById("mySidenav-13").style.width = "0%";

	document.getElementById("mySidenav").style.width = "100%";

	}
