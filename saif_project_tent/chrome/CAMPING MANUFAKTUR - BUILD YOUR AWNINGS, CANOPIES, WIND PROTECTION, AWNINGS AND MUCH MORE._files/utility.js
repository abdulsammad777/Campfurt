/*!

// Contents

// ------------------------------------------------



 1. Utility Bar

 2. Spinner Loader

 3. Tooltip Catalog

 4. Selector



/*!---------- 1. UTILITY BAR ----------*/



//open utility bar

$(function () {

    $('.navbar-toggler').on('click', function(event) {

		event.preventDefault();

		$(this).closest('.navbar-minimal').toggleClass('open');

	})

});



//zoom image

$(document).ready(function(){

    $("#zoomIn").click(function(){

        var div = $(".tail img");

        startAnimation();

        function startAnimation(){

            div.css({"transform": "scale(1.3)",

					 "-webkit-transform": "scale(1.3)",

					 "-moz-transform": "scale(1.3)",

					 "transition": "all 0.3s",

					 "-webkit-transition": "all 0.3s",

					 "-moz-transition": "all 0.3s"});

        }

    });

});



$(document).ready(function(){

    $("#zoomOut").click(function(){

        var div = $(".tail img");

        startAnimation();

        function startAnimation(){

            div.css({"transform": "scale(1)",

					 "-webkit-transform": "scale(1)",

					 "-moz-transform": "scale(1)",

					 "transition": "all 0.3s",

					 "-webkit-transition": "all 0.3s",

					 "-moz-transition": "all 0.3s"});

        }

    });

});



/*!---------- 2. SPINNER LOADER ----------*/



var myVar;



function myFunction() {

	// myVar = setTimeout(showPage, 3000);

  showPage()

}



function showPage() {

	document.getElementById("sk-circle").style.display = "none";

	document.getElementById("catalog").style.display = "block";

	}



/*!---------- 3. TOOLTIP CATALOG ----------*/



	$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();

});



/*!---------- 4. SELECTOR ----------*/



$(document).ready(function(){

/* select active front windows and size */
//------------------front type selection -------------------

var activeleftWindow = $('.front-windows-section')
activeleftWindow = $('.front-left-window .window-type-selection').find('select')
activeleftWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['front'].windowOne.label = $(this).val()

})
var activemiddleWindow = $('.front-windows-section')
activemiddleWindow = $('.front-middle-window .window-type-selection').find('select')
activemiddleWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['front'].windowTwo.label = $(this).val()

})

var activerightWindow = $('.front-windows-section')
activerightWindow = $('.front-right-window .window-type-selection').find('select')
activerightWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['front'].windowThree.label = $(this).val()
})
//------------------front type selection end -------------------

//------------------back type selection -----------------------
var bactiveleftWindow = $('.back-windows-section')
bactiveleftWindow = $('.back-left-window .window-type-selection').find('select')
bactiveleftWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['back'].windowOne.label = $(this).val()

})
var bactivemiddleWindow = $('.back-windows-section')
bactivemiddleWindow = $('.back-middle-window .window-type-selection').find('select')
bactivemiddleWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['back'].windowTwo.label = $(this).val()

})

var bactiverightWindow = $('.back-windows-section')
bactiverightWindow = $('.back-right-window .window-type-selection').find('select')
bactiverightWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['back'].windowThree.label = $(this).val()

})
//------------------back type selection end -------------------

//------------------left type selection -----------------------
var lactiveleftWindow = $('.left-windows-section')
lactiveleftWindow = $('.left-left-window .window-type-selection').find('select')
lactiveleftWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['left'].windowOne.label = $(this).val()

})
var lactivemiddleWindow = $('.left-windows-section')
lactivemiddleWindow = $('.left-middle-window .window-type-selection').find('select')
lactivemiddleWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['left'].windowTwo.label = $(this).val()

})

var bactiverightWindow = $('.left-windows-section')
bactiverightWindow = $('.left-right-window .window-type-selection').find('select')
bactiverightWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['left'].windowThree.label = $(this).val()

})
//-
//------------------left type selection end -------------------

//------------------right type selection     -------------------
var ractiveleftWindow = $('.right-windows-section')
ractiveleftWindow = $('.right-left-window .window-type-selection').find('select')
ractiveleftWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['right'].windowOne.label = $(this).val()

})
var ractivemiddleWindow = $('.right-windows-section')
ractivemiddleWindow = $('.right-middle-window .window-type-selection').find('select')
ractivemiddleWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['right'].windowTwo.label = $(this).val()

})

var ractiverightWindow = $('.right-windows-section')
ractiverightWindow = $('.right-right-window .window-type-selection').find('select')
ractiverightWindow.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['right'].windowThree.label = $(this).val()

})
//------------------right type selection end -------------------








//-------- front size selection --------------------------------------
var leftWindowSize = $('.front-left-window .window-size').find('select')
var middleWindowSize = $('.front-middle-window .window-size').find('select')
var rightWindowSize = $('.front-right-window .window-size').find('select')
var doorSize = $('.front-door-section .door-size-selection').find('select')

// console.log($('front-one-window .window-size'))
leftWindowSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['front'].windowOne.size = $(this).val()
CampManufaktur.windowsDoors['front'].windowOne.price = getWindPrice($(this).val() ,  windowsT)
setSumFrontSide(CampManufaktur)

renderSummary(CampManufaktur)

})
middleWindowSize.change(function(){
  console.log($(this).attr('id') , $(this).val())
  console.log(CampManufaktur);
  CampManufaktur.windowsDoors['front'].windowTwo.size = $(this).val()
  CampManufaktur.windowsDoors['front'].windowTwo.price = getWindPrice($(this).val() ,  windowsT)
  setSumFrontSide(CampManufaktur)

  renderSummary(CampManufaktur)

  })
rightWindowSize.change(function(){
    console.log($(this).attr('id') , $(this).val())
    CampManufaktur.windowsDoors['front'].windowThree.size = $(this).val()
    CampManufaktur.windowsDoors['front'].windowThree.price = getWindPrice($(this).val() ,  windowsT)
    setSumFrontSide(CampManufaktur)

    renderSummary(CampManufaktur)

    })

doorSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['front'].door.size = $(this).val()
CampManufaktur.windowsDoors['front'].door.price = getWindPrice($(this).val() ,  doorsT)
setSumFrontSide(CampManufaktur)

renderSummary(CampManufaktur)

})
//-------- front size selection end --------------------------------------
//-------- back size selection -------------------------------------------
var bleftWindowSize = $('.back-left-window .window-size').find('select')
var bmiddleWindowSize = $('.back-middle-window .window-size').find('select')
var brightWindowSize = $('.back-right-window .window-size').find('select')
var bdoorSize = $('.back-door-section .door-size-selection').find('select')

// console.log($('back-one-window .window-size'))
bleftWindowSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['back'].windowOne.size = $(this).val()
CampManufaktur.windowsDoors['back'].windowOne.price = getWindPrice($(this).val() ,  windowsT)
setSumBackSide(CampManufaktur)

renderSummary(CampManufaktur)


})
bmiddleWindowSize.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['back'].windowTwo.size = $(this).val()
  CampManufaktur.windowsDoors['back'].windowTwo.price = getWindPrice($(this).val() ,  windowsT)
  setSumBackSide(CampManufaktur)

  renderSummary(CampManufaktur)


  })
brightWindowSize.change(function(){
    console.log($(this).attr('id') , $(this).val())
    CampManufaktur.windowsDoors['back'].windowThree.size = $(this).val()
    CampManufaktur.windowsDoors['back'].windowThree.price = getWindPrice($(this).val() ,  windowsT)
    setSumBackSide(CampManufaktur)

    renderSummary(CampManufaktur)


    })

bdoorSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['back'].door.size = $(this).val()
CampManufaktur.windowsDoors['back'].door.price = getWindPrice($(this).val() ,  doorsT)
setSumBackSide(CampManufaktur)

renderSummary(CampManufaktur)

})
//-------- back size selection end --------------------------------------

//-------- left size selection ------------------------------------------
var lleftWindowSize = $('.left-left-window .window-size').find('select')
var lmiddleWindowSize = $('.left-middle-window .window-size').find('select')
var lrightWindowSize = $('.left-right-window .window-size').find('select')
var ldoorSize = $('.left-door-section .door-size-selection').find('select')

// console.log($('left-one-window .window-size'))
lleftWindowSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['left'].windowOne.size = $(this).val()
CampManufaktur.windowsDoors['left'].windowOne.price = getWindPrice($(this).val() ,  windowsT)
setSumLefttSide(CampManufaktur)
renderSummary(CampManufaktur)

})
lmiddleWindowSize.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['left'].windowTwo.size = $(this).val()
  CampManufaktur.windowsDoors['left'].windowTwo.price = getWindPrice($(this).val() ,  windowsT)
  setSumLefttSide(CampManufaktur)

  renderSummary(CampManufaktur)

  })
lrightWindowSize.change(function(){
    console.log($(this).attr('id') , $(this).val())
    CampManufaktur.windowsDoors['left'].windowThree.size = $(this).val()
    CampManufaktur.windowsDoors['left'].windowThree.price = getWindPrice($(this).val() ,  windowsT)
    setSumLefttSide(CampManufaktur)

    renderSummary(CampManufaktur)

    })

ldoorSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['left'].door.size = $(this).val()
CampManufaktur.windowsDoors['left'].door.price = getWindPrice($(this).val() ,  doorsT)
setSumLefttSide(CampManufaktur)

renderSummary(CampManufaktur)

})
//-------- left size selection end --------------------------------------

//-------- right size selection ------------------------------------------
var rleftWindowSize = $('.right-left-window .window-size').find('select')
var rmiddleWindowSize = $('.right-middle-window .window-size').find('select')
var rrightWindowSize = $('.right-right-window .window-size').find('select')
var rdoorSize = $('.right-door-section .door-size-selection').find('select')

// console.log($('right-one-window .window-size'))
rleftWindowSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['right'].windowOne.size = $(this).val()
CampManufaktur.windowsDoors['right'].windowOne.price = getWindPrice($(this).val() ,  windowsT)
setSumRightSide(CampManufaktur)
renderSummary(CampManufaktur)

})
rmiddleWindowSize.change(function(){
  console.log($(this).attr('id') , $(this).val())
  CampManufaktur.windowsDoors['right'].windowTwo.size = $(this).val()
  CampManufaktur.windowsDoors['right'].windowTwo.price = getWindPrice($(this).val() ,  windowsT)
  setSumRightSide(CampManufaktur)
  renderSummary(CampManufaktur)

  })
rrightWindowSize.change(function(){
    console.log($(this).attr('id') , $(this).val())
    CampManufaktur.windowsDoors['right'].windowThree.size = $(this).val()
    CampManufaktur.windowsDoors['right'].windowThree.price = getWindPrice($(this).val() ,  windowsT)
    setSumRightSide(CampManufaktur)
    renderSummary(CampManufaktur)

    })

rdoorSize.change(function(){
console.log($(this).attr('id') , $(this).val())
CampManufaktur.windowsDoors['right'].door.size = $(this).val()
CampManufaktur.windowsDoors['right'].door.price = getWindPrice($(this).val() ,  doorsT)
setSumRightSide(CampManufaktur)
renderSummary(CampManufaktur)

})
//-------- right size selection end --------------------------------------





var adl = $('.Sides-style')

adl   =  adl.find('.pl-card')

adl.click(function(){

  adl.removeClass('active');

  $(this).addClass('active');
  CampManufaktur.roofStyle.label = $(this).find('p').text();
  console.log(CampManufaktur.roofStyle.label);
  CampManufaktur.roofStyle.price = getRoofStylePrice( $(this).find('p').text() , roofStylesT)
  renderSummary(CampManufaktur)

});

var sidingc = $('.siding-colors')

sidingc   =  sidingc.find('.pl-card')

sidingc.click(function(){

  sidingc.removeClass('active');

  $(this).addClass('active');
  console.log( $(this).parents('.panel.panel-default').find('a').html())
  CampManufaktur.colors.siding.label = $(this).find('p').text();
  console.log( "the ref : " +$(this).attr('ref'));
  console.log("funtiopn : " +  getColoPrice( $(this).attr('ref') , sidingColorsT));
    CampManufaktur.colors.siding.price = getColoPrice( $(this).attr('ref') , sidingColorsT)
    renderSummary(CampManufaktur)

});


var bottomc = $('.bottom-colors')

bottomc   =  bottomc.find('.pl-card')

bottomc.click(function(){

  bottomc.removeClass('active');

  $(this).addClass('active');
  CampManufaktur.colors.stripe.label = $(this).find('p').text();
  // CampManufaktur.colors.stripe.price = getColoPrice(CampManufaktur.colors.stripe.label ,  stripColorsT)
  CampManufaktur.colors.stripe.price = getColoPrice( $(this).attr('ref') , stripColorsT)

    renderSummary(CampManufaktur)

});

var thickness = $('.thickness')

thickness   =  thickness.find('.pl-card')

thickness.click(function(){

  thickness.removeClass('active');

  $(this).addClass('active');
  CampManufaktur.thickness.label = $(this).find('p').text();
  CampManufaktur.thickness.price = getProfileThickPrice(CampManufaktur.thickness.label ,  thicknessT)
    renderSummary(CampManufaktur)

});

var frontw = $('.front-wall')

frontw   =  frontw.find('.pl-card')
frontw.click(function(){
  initChangeSize()
  frontw.removeClass('active');
  // initWindowsAndDoors()
  $(this).addClass('active');
  // CampManufaktur.windowsDoors.front.label = $(this).find('p').text();
  if ($(this).attr('lay') == "0") {
    inintLay0('front')
  }
  if ($(this).attr('lay') == "1") {
    inintLay1('front')
  }
  if ($(this).attr('lay') == "2") {
    inintLay2('front')
  }
  if ($(this).attr('lay') == "3") {
    inintLay3('front')
  }
  if ($(this).attr('lay') == "4") {
    inintLay4('front')
  }
  if ($(this).attr('lay') == "5") {
    inintLay5('front')
  }
  if ($(this).attr('lay') == "6") {
    inintLay6('front')
  }
  if ($(this).attr('lay') == "7") {
    inintLay7('front')
  }

});
var backw = $('.back-wall')

backw   =  backw.find('.pl-card')

backw.click(function(){
  initBackChangeSize()
  backw.removeClass('active');

  $(this).addClass('active');
  // CampManufaktur.windowsDoors.back.label = $(this).find('p').text();
  if ($(this).attr('lay') == "0") {
    inintLay0('back')
  }
  if ($(this).attr('lay') == "1") {
    inintLay1('back')
  }
  if ($(this).attr('lay') == "2") {
    inintLay2('back')
  }
  if ($(this).attr('lay') == "3") {
    inintLay3('back')
  }
  if ($(this).attr('lay') == "4") {
    inintLay4('back')
  }
  if ($(this).attr('lay') == "5") {
    inintLay5('back')
  }
  if ($(this).attr('lay') == "6") {
    inintLay6('back')
  }
  if ($(this).attr('lay') == "7") {
    inintLay7('back')
  }

});
var leftw = $('.left-wall')

leftw   =  leftw.find('.pl-card')

leftw.click(function(){
  initleftChangeSize()
  leftw.removeClass('active');

  $(this).addClass('active');
  // CampManufaktur.windowsDoors.left.label = $(this).find('p').text();
  if ($(this).attr('lay') == "0") {
    inintLay0('back')
  }
  if ($(this).attr('lay') == "1") {
    inintLay1('back')
  }
  if ($(this).attr('lay') == "2") {
    inintLay2('back')
  }
  if ($(this).attr('lay') == "3") {
    inintLay3('back')
  }
  if ($(this).attr('lay') == "4") {
    inintLay4('back')
  }
  if ($(this).attr('lay') == "5") {
    inintLay5('back')
  }
  if ($(this).attr('lay') == "6") {
    inintLay6('back')
  }
  if ($(this).attr('lay') == "7") {
    inintLay7('back')
  }
});

var rightw = $('.right-wall')

rightw   =  rightw.find('.pl-card')

rightw.click(function(){
  initrightChangeSize()
  rightw.removeClass('active');

  $(this).addClass('active');
  // CampManufaktur.windowsDoors.right.label = $(this).find('p').text();
  if ($(this).attr('lay') == "0") {
    inintLay0('right')
  }
  if ($(this).attr('lay') == "1") {
    inintLay1('right')
  }
  if ($(this).attr('lay') == "2") {
    inintLay2('right')
  }
  if ($(this).attr('lay') == "3") {
    inintLay3('right')
  }
  if ($(this).attr('lay') == "4") {
    inintLay4('right')
  }
  if ($(this).attr('lay') == "5") {
    inintLay5('right')
  }
  if ($(this).attr('lay') == "6") {
    inintLay6('right')
  }
  if ($(this).attr('lay') == "7") {
    inintLay7('right')
  }

});


//select  options

// var ldl = $('.options')

// ldl   =  ldl.find('.pl-card')

// ldl.click(function(){
//  if ($(this).hasClass('active')){
//   $(this).removeClass('active')
//  }else{
//   $(this).addClass('active');
//   $('#none').removeClass('active');
//  }
//  getActiveOptions()
// });

// var lds = $('.options')
// lds  =  lds.find('.pl-card')
// $('#no-option').click(function(){
//   lds.removeClass('active');
//   $('#no-option').addClass('active');
//   CampManufaktur.options = ["None"]
//   renderSummary(CampManufaktur)
// });

});
// function getActiveOptions(){
//   var act = $('.options').find('.pl-card.active')
//   CampManufaktur.options = []
//   for (var i = 0; i < act.length; i++) {
//         CampManufaktur.options.push(act.eq(i).find('p').text())
//   }
//   renderSummary(CampManufaktur)
// }
//SCREEN SHOT COLLAPSE

$('.your-design').click(function () {

  $('#screenshot').toggle()

})
