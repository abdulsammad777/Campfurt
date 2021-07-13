var  map = function (n, start1, stop1, start2, stop2, withinBounds) {
    var newval = ((n - start1)/(stop1 - start1)) * (stop2 - start2) + start2;
      return newval;
  }

var rangechange = function(clone,range){
    var val = map(range.val() , 290 , 1300 ,  0 , 100   );
    // //console.log(val)
    var adp =  map(val , 0 , 100 , 0 , 12 ) ;
    var fval = map(range.val() ,290 , 1300 , 0 , 10)

    //console.log(adp);
    clone.css("width", "calc(" + val +"%"+ " - " + adp + "px)");
    return val
}
var widthrangechange = function(clone,range){
    var val = map(range.val() , 290 , 1300 ,  0 , 100   );
    // //console.log(val)
    var adp =  map(val , 0 , 100 , 0 , 10 ) ;
    var fval = map(range.val() ,290 , 1300 , 0 , 10)



    //console.log(adp);
    clone.css("width", "calc(" + val +"%"+ " - " + adp + "px)");
    return val
}
var sprangechange = function(clone,range){
    var val = map(range.val() , 15 , 150 ,  0 , 100   );
    // //console.log(val)
    var adp =  map(val , 0 , 100 , 0 , 12 ) ;
    var fval = map(range.val() ,15 , 150 , 0 , 10)



    //console.log(adp);
    clone.css("width", "calc(" + val +"%"+ " - " + adp + "px)");
    return val
}
var heightrangechange = function(clone,range){
    var val = map(range.val() , 200 , 500 ,  0 , 100   );
    // //console.log(val)
    var adp =  map(val , 0 , 100 , 0 , 12 ) ;
    var fval = map(range.val() ,200 , 500 , 0 , 10)

    //console.log(adp);
    clone.css("width", "calc(" + val +"%"+ " - " + adp + "px)");
    return val
}

var rangeclone = $(".rangeclone")
var rangeclonethickness = $(".rangeclonethickness")
var rangeclonewidth = $(".rangeclonewidth")
var rangeclonestripe = $(".rangeclonestripe")

var lenght = $("#D-lenght")
var width =  $("#D-width")
var height =  $("#D-height")
var stripe =  $("#stripe-height")

stripe.on('input',function (){
   sprangechange(rangeclonestripe  , $(this) )
    var cmValue  = $(this).val()


    $(".stripe-height").text(cmValue + 'cm');
    mValue  =  parseInt(cmValue).toFixed(2)
    //console.log(mValue);
    CampManufaktur.tentSize.sp = mValue;
    setTentAreaPrice(CampManufaktur)

    renderSummary(CampManufaktur)
})

height.on('input',function (){
    heightrangechange(rangeclonethickness  , $(this) )
    var cmValue  = $(this).val()

    $(".height-value").text(cmValue + 'cm');
    mValue  =  parseInt(cmValue).toFixed(2)
    //console.log(mValue);
    CampManufaktur.tentSize.h = mValue;
    renderSummary(CampManufaktur)
})


width.on('input',function (){
    widthrangechange(rangeclonewidth  , $(this) )
    var cmValue  = $(this).val()

    $(".width-value").text(cmValue + 'cm');
    mValue  =  parseInt(cmValue).toFixed(2)
    //console.log(mValue);
    CampManufaktur.tentSize.w = mValue;
    setTentAreaPrice(CampManufaktur)
    
    renderSummary(CampManufaktur)
showCondition($(this).val(),leftwalltShow,leftwalltShowsecondShow)
showCondition($(this).val(),rightwalltShow,rightwalltShowsecondShow)

})


var leftwalltShow = $(".left-wall .show-condition")
var leftwalltShowsecondShow = $(".left-wall .show-condition.show-condition1")

var rightwalltShow = $(".right-wall .show-condition")
var rightwalltShowsecondShow = $(".right-wall .show-condition.show-condition1")

var frontwalltShow = $(".front-wall .show-condition")
var frontwalltShowsecondShow = $(".front-wall .show-condition.show-condition1")

var backwalltShow = $(".back-wall .show-condition")
var backwalltShowsecondShow = $(".back-wall .show-condition.show-condition1")

lenght.on('input', function (){

    rangechange(rangeclone  , $(this))
    var cmValue  = $(this).val()
    $(".lenght-value").text(cmValue + 'cm');

    mValue  =  parseInt(cmValue).toFixed(2)
    CampManufaktur.tentSize.l = mValue;
    setTentAreaPrice(CampManufaktur)
    renderSummary(CampManufaktur)
    showCondition($(this).val(),frontwalltShow,frontwalltShowsecondShow)
    showCondition($(this).val(),backwalltShow,backwalltShowsecondShow)

})
//--------------------------------------------
