$(function() {




    var sendBtn = document.getElementById('send-prop');
    sendBtn.addEventListener('click', function(event) {
        // if (terms.checked) {
        event.preventDefault();

        $('.send-prop').text('SENDING ..');
        var getName = String(document.getElementById("mar-name").value);
        var getPhone = String(document.getElementById("mar-phone").value);
        var getEmail = String(document.getElementById("mar-email").value);
        var getType = String(document.getElementById("mar-type").value);
        var getMessage = String(document.getElementById("mar-msg").value);
        var getTerms = document.getElementById("mktoCheckbox_46078_1").checked;
        var getTotPrice = CampManufaktur.totalPrice;



        //Image aTTRIBUTE
        var img_1 = document.getElementById("screenshot-front").style.backgroundImage;
        img_1 =  clearImgBase(img_1)
        var img_2 = document.getElementById("screenshot-back").style.backgroundImage;
        img_2 =  clearImgBase(img_2)
        var img_3 = document.getElementById("screenshot-left").style.backgroundImage;
        img_3 =  clearImgBase(img_3)
        var img_4 = document.getElementById("screenshot-right").style.backgroundImage;
        img_4 =  clearImgBase(img_4)



        $.ajax({
                type: 'POST',
                url: './mailer/mailer.php',
                data: {
                    name: getName,
                    email: getEmail,
                    phone: getPhone,
                    type: getType,
                    message : getMessage,
                    // colors >
                    sidingColor : CampManufaktur.colors.siding.label ,  sidingColorPrice : CampManufaktur.colors.siding.price,
                    stripeColor : CampManufaktur.colors.stripe.label ,  stripeColorPrice : CampManufaktur.colors.stripe.price ,
                    //Tent Sizes
                    lenght : CampManufaktur.tentSize.l ,
                    width  : CampManufaktur.tentSize.w ,
                    height  : CampManufaktur.tentSize.h ,
                    spline  : CampManufaktur.tentSize.sp ,
                    areaPrice : CampManufaktur.tentSize.price ,
                    //Roof
                    roofStyle    : CampManufaktur.roofStyle.label  , roofStylePrice :CampManufaktur.roofStyle.price ,

                    //thickness
                    thickness    : CampManufaktur.thickness.label  , thicknessPrice :CampManufaktur.thickness.price ,
                    //Front Openings
                    frontWindOne  : CampManufaktur.windowsDoors['front'].windowOne.size  ,frontWindOnePrice  : CampManufaktur.windowsDoors['front'].windowOne.price  ,
                    frontWindTwo  : CampManufaktur.windowsDoors['front'].windowTwo.size  ,frontWindTwoPrice  : CampManufaktur.windowsDoors['front'].windowTwo.price  ,
                    frontWindThree  : CampManufaktur.windowsDoors['front'].windowThree.size  ,frontWindThreePrice  : CampManufaktur.windowsDoors['front'].windowThree.price  ,
                    frontDoor  : CampManufaktur.windowsDoors['front'].door.size  ,frontDoorPrice  : CampManufaktur.windowsDoors['front'].door.price  ,
                    //Back Openings
                    backWindOne  : CampManufaktur.windowsDoors['back'].windowOne.size  ,backWindOnePrice  : CampManufaktur.windowsDoors['back'].windowOne.price  ,
                    backWindTwo  : CampManufaktur.windowsDoors['back'].windowTwo.size  ,backWindTwoPrice  : CampManufaktur.windowsDoors['back'].windowTwo.price  ,
                    backWindThree  : CampManufaktur.windowsDoors['back'].windowThree.size  ,backWindThreePrice  : CampManufaktur.windowsDoors['back'].windowThree.price  ,
                    backDoor  : CampManufaktur.windowsDoors['back'].door.size  ,backDoorPrice  : CampManufaktur.windowsDoors['back'].door.price  ,
                    //Left Openings
                    leftWindOne  : CampManufaktur.windowsDoors['left'].windowOne.size  ,leftWindOnePrice  : CampManufaktur.windowsDoors['left'].windowOne.price  ,
                    leftWindTwo  : CampManufaktur.windowsDoors['left'].windowTwo.size  ,leftWindTwoPrice  : CampManufaktur.windowsDoors['left'].windowTwo.price  ,
                    leftWindThree  : CampManufaktur.windowsDoors['left'].windowThree.size  ,leftWindThreePrice  : CampManufaktur.windowsDoors['left'].windowThree.price  ,
                    leftDoor  : CampManufaktur.windowsDoors['left'].door.size  ,leftDoorPrice  : CampManufaktur.windowsDoors['left'].door.price  ,
                    //Right Openings
                    rightWindOne  : CampManufaktur.windowsDoors['right'].windowOne.size  ,rightWindOnePrice  : CampManufaktur.windowsDoors['right'].windowOne.price  ,
                    rightWindTwo  : CampManufaktur.windowsDoors['right'].windowTwo.size  ,rightWindTwoPrice  : CampManufaktur.windowsDoors['right'].windowTwo.price  ,
                    rightWindThree  : CampManufaktur.windowsDoors['right'].windowThree.size  ,rightWindThreePrice  : CampManufaktur.windowsDoors['right'].windowThree.price  ,
                    rightDoor  : CampManufaktur.windowsDoors['right'].door.size  ,rightDoorPrice  : CampManufaktur.windowsDoors['right'].door.price  ,

                    // terms :getTerms ,
                    tprice: CampManufaktur.totalPrice,
                    d_image_1: img_1 ,
                    d_image_2: img_2 ,
                    d_image_3: img_3 ,
                    d_image_4: img_4 ,

                }


            })
            //
            .done(function(response) {
                console.log(response);
                event.preventDefault();
                $('.send-prop').text('PROPOSAL SENT.');

                setTimeout(function(){




                }, 3000);

            })
            .fail(function(response) {
              console.log(response);
            });

    });

});
function clearImgBase(base){
  base = base.replace('data:image/png;base64,', '');
  base = base.replace(')', '');
  base = base.replace('(', '');
  base = base.replace('"', '');
  base = base.replace('url', '');
  base = base.replace('"', '');
  return base
}
