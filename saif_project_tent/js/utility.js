/*!
// Contents
// ------------------------------------------------
1. Utility Bar
2. Spinner Loader
3. Tooltip Catalog
4. Selector
/*!---------- 1. UTILITY BAR ----------*/

var useremailaddress = "";

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return true;
  }
    alert("You have entered an invalid email address!");
    return false;
}




$(function() {
    $('.navbar-toggler').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.navbar-minimal').toggleClass('open');
    })
});
$(document).ready(function() {

    $("#exampleModal").modal('show');

    $("#load-prev-design").click(function(){
        exampleInputEmail1


        //load prev camp data
        useremailaddress = $("#exampleInputEmail1").val();
        console.log("The load design was clicked.");
        console.log(useremailaddress);

        debugger;


        
        $('.send-prop').text('SENDING ..');
        var getName = String(document.getElementById("mar-name").value);
        var getPhone = String(document.getElementById("mar-phone").value);
        var getEmail = String(document.getElementById("mar-email").value);
        var getType = String(document.getElementById("mar-type").value);
        var getMessage = String(document.getElementById("mar-msg").value);
        var getTerms = document.getElementById("mktoCheckbox_46078_1").checked;
        var getTotPrice = CampManufaktur.totalPrice;
        var img_1 = document.getElementById("screenshot-front").style.backgroundImage;
        img_1 = clearImgBase(img_1)
        var img_2 = document.getElementById("screenshot-back").style.backgroundImage;
        img_2 = clearImgBase(img_2)
        var img_3 = document.getElementById("screenshot-left").style.backgroundImage;
        img_3 = clearImgBase(img_3)
        var img_4 = document.getElementById("screenshot-right").style.backgroundImage;
        img_4 = clearImgBase(img_4)


        var sendingdata =  {
            name: getName,
            email: getEmail,
            phone: getPhone,
            type: getType,
            message: getMessage,
            sidingColor: CampManufaktur.colors.siding.label,
            sidingColorPrice: CampManufaktur.colors.siding.price,
            stripeColor: CampManufaktur.colors.stripe.label,
            stripeColorPrice: CampManufaktur.colors.stripe.price,
            lenght: CampManufaktur.tentSize.l,
            width: CampManufaktur.tentSize.w,
            height: CampManufaktur.tentSize.h,
            spline: CampManufaktur.tentSize.sp,
            areaPrice: CampManufaktur.tentSize.price,
            roofStyle: CampManufaktur.roofStyle.label,
            roofStylePrice: CampManufaktur.roofStyle.price,
            thickness: CampManufaktur.thickness.label,
            thicknessPrice: CampManufaktur.thickness.price,
            frontWindOne: CampManufaktur.windowsDoors['front'].windowOne.size,
            frontWindOnePrice: CampManufaktur.windowsDoors['front'].windowOne.price,
            frontWindTwo: CampManufaktur.windowsDoors['front'].windowTwo.size,
            frontWindTwoPrice: CampManufaktur.windowsDoors['front'].windowTwo.price,
            frontWindThree: CampManufaktur.windowsDoors['front'].windowThree.size,
            frontWindThreePrice: CampManufaktur.windowsDoors['front'].windowThree.price,
            frontDoor: CampManufaktur.windowsDoors['front'].door.size,
            frontDoorPrice: CampManufaktur.windowsDoors['front'].door.price,
            backWindOne: CampManufaktur.windowsDoors['back'].windowOne.size,
            backWindOnePrice: CampManufaktur.windowsDoors['back'].windowOne.price,
            backWindTwo: CampManufaktur.windowsDoors['back'].windowTwo.size,
            backWindTwoPrice: CampManufaktur.windowsDoors['back'].windowTwo.price,
            backWindThree: CampManufaktur.windowsDoors['back'].windowThree.size,
            backWindThreePrice: CampManufaktur.windowsDoors['back'].windowThree.price,
            backDoor: CampManufaktur.windowsDoors['back'].door.size,
            backDoorPrice: CampManufaktur.windowsDoors['back'].door.price,
            leftWindOne: CampManufaktur.windowsDoors['left'].windowOne.size,
            leftWindOnePrice: CampManufaktur.windowsDoors['left'].windowOne.price,
            leftWindTwo: CampManufaktur.windowsDoors['left'].windowTwo.size,
            leftWindTwoPrice: CampManufaktur.windowsDoors['left'].windowTwo.price,
            leftWindThree: CampManufaktur.windowsDoors['left'].windowThree.size,
            leftWindThreePrice: CampManufaktur.windowsDoors['left'].windowThree.price,
            leftDoor: CampManufaktur.windowsDoors['left'].door.size,
            leftDoorPrice: CampManufaktur.windowsDoors['left'].door.price,
            rightWindOne: CampManufaktur.windowsDoors['right'].windowOne.size,
            rightWindOnePrice: CampManufaktur.windowsDoors['right'].windowOne.price,
            rightWindTwo: CampManufaktur.windowsDoors['right'].windowTwo.size,
            rightWindTwoPrice: CampManufaktur.windowsDoors['right'].windowTwo.price,
            rightWindThree: CampManufaktur.windowsDoors['right'].windowThree.size,
            rightWindThreePrice: CampManufaktur.windowsDoors['right'].windowThree.price,
            rightDoor: CampManufaktur.windowsDoors['right'].door.size,
            rightDoorPrice: CampManufaktur.windowsDoors['right'].door.price,
            tprice: CampManufaktur.totalPrice,
            d_image_1: img_1,
            d_image_2: img_2,
            d_image_3: img_3,
            d_image_4: img_4,
        };

        debugger;
        if(ValidateEmail(useremailaddress) ==  true)
        {
            $("#exampleModal").modal('hide');
            

            document.getElementById("mar-email").value = useremailaddress;
            alert("tent loaded successfully");
            //load tent here
            
            $("#mar-email").val(useremailaddress);
        }
        else
        {

        }
        

      });

    $("#zoomIn").click(function() {
        var div = $(".tail img");
        startAnimation();

        function startAnimation() {
            div.css({
                "transform": "scale(1.3)",
                "-webkit-transform": "scale(1.3)",
                "-moz-transform": "scale(1.3)",
                "transition": "all 0.3s",
                "-webkit-transition": "all 0.3s",
                "-moz-transition": "all 0.3s"
            });
        }
    });
});
$(document).ready(function() {
    $("#zoomOut").click(function() {
        var div = $(".tail img");
        startAnimation();

        function startAnimation() {
            div.css({
                "transform": "scale(1)",
                "-webkit-transform": "scale(1)",
                "-moz-transform": "scale(1)",
                "transition": "all 0.3s",
                "-webkit-transition": "all 0.3s",
                "-moz-transition": "all 0.3s"
            });
        }
    });
}); /*!---------- 2. SPINNER LOADER ----------*/
var myVar;

function myFunction() {
    showPage()
}

function showPage() {
    document.getElementById("sk-circle").style.display = "none";
    document.getElementById("catalog").style.display = "block";
} /*!---------- 3. TOOLTIP CATALOG ----------*/
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
}); /*!---------- 4. SELECTOR ----------*/
$(document).ready(function() {
    var activeleftWindow = $('.front-windows-section')
    activeleftWindow = $('.front-left-window .window-type-selection').find('select')
    activeleftWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['front'].windowOne.label = $(this).val()
    })
    var activemiddleWindow = $('.front-windows-section')
    activemiddleWindow = $('.front-middle-window .window-type-selection').find('select')
    activemiddleWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['front'].windowTwo.label = $(this).val()
    })
    var activerightWindow = $('.front-windows-section')
    activerightWindow = $('.front-right-window .window-type-selection').find('select')
    activerightWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['front'].windowThree.label = $(this).val()
    })
    var bactiveleftWindow = $('.back-windows-section')
    bactiveleftWindow = $('.back-left-window .window-type-selection').find('select')
    bactiveleftWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['back'].windowOne.label = $(this).val()
    })
    var bactivemiddleWindow = $('.back-windows-section')
    bactivemiddleWindow = $('.back-middle-window .window-type-selection').find('select')
    bactivemiddleWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['back'].windowTwo.label = $(this).val()
    })
    var bactiverightWindow = $('.back-windows-section')
    bactiverightWindow = $('.back-right-window .window-type-selection').find('select')
    bactiverightWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['back'].windowThree.label = $(this).val()
    })
    var lactiveleftWindow = $('.left-windows-section')
    lactiveleftWindow = $('.left-left-window .window-type-selection').find('select')
    lactiveleftWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['left'].windowOne.label = $(this).val()
    })
    var lactivemiddleWindow = $('.left-windows-section')
    lactivemiddleWindow = $('.left-middle-window .window-type-selection').find('select')
    lactivemiddleWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['left'].windowTwo.label = $(this).val()
    })
    var bactiverightWindow = $('.left-windows-section')
    bactiverightWindow = $('.left-right-window .window-type-selection').find('select')
    bactiverightWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['left'].windowThree.label = $(this).val()
    })
    var ractiveleftWindow = $('.right-windows-section')
    ractiveleftWindow = $('.right-left-window .window-type-selection').find('select')
    ractiveleftWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['right'].windowOne.label = $(this).val()
    })
    var ractivemiddleWindow = $('.right-windows-section')
    ractivemiddleWindow = $('.right-middle-window .window-type-selection').find('select')
    ractivemiddleWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['right'].windowTwo.label = $(this).val()
    })
    var ractiverightWindow = $('.right-windows-section')
    ractiverightWindow = $('.right-right-window .window-type-selection').find('select')
    ractiverightWindow.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['right'].windowThree.label = $(this).val()
    })
    var leftWindowSize = $('.front-left-window .window-size').find('select')
    var middleWindowSize = $('.front-middle-window .window-size').find('select')
    var rightWindowSize = $('.front-right-window .window-size').find('select')
    var doorSize = $('.front-door-section .door-size-selection').find('select')
    leftWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['front'].windowOne.size = $(this).val()
        CampManufaktur.windowsDoors['front'].windowOne.price = getWindPrice($(this).val(), windowsT)
        setSumFrontSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    middleWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        console.log(CampManufaktur);
        CampManufaktur.windowsDoors['front'].windowTwo.size = $(this).val()
        CampManufaktur.windowsDoors['front'].windowTwo.price = getWindPrice($(this).val(), windowsT)
        setSumFrontSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    rightWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['front'].windowThree.size = $(this).val()
        CampManufaktur.windowsDoors['front'].windowThree.price = getWindPrice($(this).val(), windowsT)
        setSumFrontSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    doorSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['front'].door.size = $(this).val()
        CampManufaktur.windowsDoors['front'].door.price = getWindPrice($(this).val(), doorsT)
        setSumFrontSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    var bleftWindowSize = $('.back-left-window .window-size').find('select')
    var bmiddleWindowSize = $('.back-middle-window .window-size').find('select')
    var brightWindowSize = $('.back-right-window .window-size').find('select')
    var bdoorSize = $('.back-door-section .door-size-selection').find('select')
    bleftWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['back'].windowOne.size = $(this).val()
        CampManufaktur.windowsDoors['back'].windowOne.price = getWindPrice($(this).val(), windowsT)
        setSumBackSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    bmiddleWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['back'].windowTwo.size = $(this).val()
        CampManufaktur.windowsDoors['back'].windowTwo.price = getWindPrice($(this).val(), windowsT)
        setSumBackSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    brightWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['back'].windowThree.size = $(this).val()
        CampManufaktur.windowsDoors['back'].windowThree.price = getWindPrice($(this).val(), windowsT)
        setSumBackSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    bdoorSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['back'].door.size = $(this).val()
        CampManufaktur.windowsDoors['back'].door.price = getWindPrice($(this).val(), doorsT)
        setSumBackSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    var lleftWindowSize = $('.left-left-window .window-size').find('select')
    var lmiddleWindowSize = $('.left-middle-window .window-size').find('select')
    var lrightWindowSize = $('.left-right-window .window-size').find('select')
    var ldoorSize = $('.left-door-section .door-size-selection').find('select')
    lleftWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['left'].windowOne.size = $(this).val()
        CampManufaktur.windowsDoors['left'].windowOne.price = getWindPrice($(this).val(), windowsT)
        setSumLefttSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    lmiddleWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['left'].windowTwo.size = $(this).val()
        CampManufaktur.windowsDoors['left'].windowTwo.price = getWindPrice($(this).val(), windowsT)
        setSumLefttSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    lrightWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['left'].windowThree.size = $(this).val()
        CampManufaktur.windowsDoors['left'].windowThree.price = getWindPrice($(this).val(), windowsT)
        setSumLefttSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    ldoorSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['left'].door.size = $(this).val()
        CampManufaktur.windowsDoors['left'].door.price = getWindPrice($(this).val(), doorsT)
        setSumLefttSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    var rleftWindowSize = $('.right-left-window .window-size').find('select')
    var rmiddleWindowSize = $('.right-middle-window .window-size').find('select')
    var rrightWindowSize = $('.right-right-window .window-size').find('select')
    var rdoorSize = $('.right-door-section .door-size-selection').find('select')
    rleftWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['right'].windowOne.size = $(this).val()
        CampManufaktur.windowsDoors['right'].windowOne.price = getWindPrice($(this).val(), windowsT)
        setSumRightSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    rmiddleWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['right'].windowTwo.size = $(this).val()
        CampManufaktur.windowsDoors['right'].windowTwo.price = getWindPrice($(this).val(), windowsT)
        setSumRightSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    rrightWindowSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['right'].windowThree.size = $(this).val()
        CampManufaktur.windowsDoors['right'].windowThree.price = getWindPrice($(this).val(), windowsT)
        setSumRightSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    rdoorSize.change(function() {
        console.log($(this).attr('id'), $(this).val())
        CampManufaktur.windowsDoors['right'].door.size = $(this).val()
        CampManufaktur.windowsDoors['right'].door.price = getWindPrice($(this).val(), doorsT)
        setSumRightSide(CampManufaktur)
        renderSummary(CampManufaktur)
    })
    var adl = $('.Sides-style')
    adl = adl.find('.pl-card')
    adl.click(function() {
        adl.removeClass('active');
        $(this).addClass('active');
        CampManufaktur.roofStyle.label = $(this).find('p').text();
        console.log(CampManufaktur.roofStyle.label);
        CampManufaktur.roofStyle.price = getRoofStylePrice($(this).find('p').text(), roofStylesT)
        renderSummary(CampManufaktur)
    });
    var sidingc = $('.siding-colors')
    sidingc = sidingc.find('.pl-card')
    sidingc.click(function() {
        sidingc.removeClass('active');
        $(this).addClass('active');
        console.log($(this).parents('.panel.panel-default').find('a').html())
        CampManufaktur.colors.siding.label = $(this).find('p').text();
        console.log("the ref : " + $(this).attr('ref'));
        console.log("funtiopn : " + getColoPrice($(this).attr('ref'), sidingColorsT));
        CampManufaktur.colors.siding.price = getColoPrice($(this).attr('ref'), sidingColorsT)
        renderSummary(CampManufaktur)
    });
    var bottomc = $('.bottom-colors')
    bottomc = bottomc.find('.pl-card')
    bottomc.click(function() {
        bottomc.removeClass('active');
        $(this).addClass('active');
        CampManufaktur.colors.stripe.label = $(this).find('p').text();
        CampManufaktur.colors.stripe.price = getColoPrice($(this).attr('ref'), stripColorsT)
        renderSummary(CampManufaktur)
    });
    var thickness = $('.thickness')
    thickness = thickness.find('.pl-card')
    thickness.click(function() {
        thickness.removeClass('active');
        $(this).addClass('active');
        CampManufaktur.thickness.label = $(this).find('p').text();
        CampManufaktur.thickness.price = getProfileThickPrice(CampManufaktur.thickness.label, thicknessT)
        renderSummary(CampManufaktur)
    });
    var frontw = $('.front-wall')
    frontw = frontw.find('.pl-card')
    frontw.click(function() {
        initChangeSize()
        frontw.removeClass('active');
        $(this).addClass('active');
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
    backw = backw.find('.pl-card')
    backw.click(function() {
        initBackChangeSize()
        backw.removeClass('active');
        $(this).addClass('active');
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
    leftw = leftw.find('.pl-card')
    leftw.click(function() {
        initleftChangeSize()
        leftw.removeClass('active');
        $(this).addClass('active');
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
    rightw = rightw.find('.pl-card')
    rightw.click(function() {
        initrightChangeSize()
        rightw.removeClass('active');
        $(this).addClass('active');
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
});
$('.your-design').click(function() {
    $('#screenshot').toggle()
})