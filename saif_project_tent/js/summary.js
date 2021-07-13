var CampManufaktur = {
    tentSize: {
        l: 290,
        w: 290,
        h: 200,
        sp: 15,
        price: 00
    },
    colors: {
        siding: {
            label: "grau",
            price: 00
        },
        stripe: {
            label: "rot",
            price: 00
        },
    },
    roofStyle: {
        label: "DELUX MODEL",
        price: 00
    },
    thickness: {
        label: "4CM",
        price: 00
    },
    windowsDoors: {
        'front': {
            windowOne: {
                label: "none",
                size: "none",
                price: 00
            },
            windowTwo: {
                label: "none",
                size: "none",
                price: 00
            },
            windowThree: {
                label: "none",
                size: "none",
                price: 00
            },
            door: {
                size: "200x94",
                price: 00
            },
            price: 00
        },
        'back': {
            windowOne: {
                label: "90x154",
                size: "90x154",
                price: 00
            },
            windowTwo: {
                label: "none",
                size: "none",
                price: 00
            },
            windowThree: {
                label: "none",
                size: "none",
                price: 00
            },
            door: {
                size: "none",
                price: 00
            },
            price: 00
        },
        'left': {
            windowOne: {
                label: "none",
                size: "none",
                price: 00
            },
            windowTwo: {
                label: "none",
                size: "none",
                price: 00
            },
            windowThree: {
                label: "none",
                size: "none",
                price: 00
            },
            door: {
                size: "200x94",
                price: 00
            },
            price: 00
        },
        'right': {
            windowOne: {
                label: "none",
                size: "none",
                price: 00
            },
            windowTwo: {
                label: "none",
                size: "none",
                price: 00
            },
            windowThree: {
                label: "none",
                size: "none",
                price: 00
            },
            door: {
                size: "200x94",
                price: 00
            },
            price: 00
        },
    },
    totalPrice: 1200
}
var windowsT = [],
    doorsT = [],
    sidingColorsT = [],
    stripColorsT = [],
    roofStylesT = [],
    thicknessT = [];
finalList = [];

function getData(gurl) {

    debugger;
    var listOfAll = [],
        simpleList = [];
    //$.ajax(gurl).done(function(result) {



        var result = "Tent size in m²,Price (€),height(m),Price (€),Strip size (height) in cm,Price (€),REF,Siding,Price (€),REF,Strip color(bottom color),Price (€),Roof style,Price (€),Profile Tickness,Price,Windows (cmxcm),Price,Doors(cmxcm),Price\n1m²,500,2,1,1m,50,s-01,grau,1,sc-01,grau,1,DELUX MODEL,1,4CM,50,120x104,20,200x64,50\n,,,,,,s-02,leinendruck-creme,1,sc-02,leinendruck-creme,1,PREMUIM BUILDING,1.2,5CM,60,120x124,21,200x94,51\n,,,,,,s-03,anthrazit-dunkelgrau-mittelgrau,1,sc-03,anthrazit-dunkelgrau-mittelgrau,1,,,,,120x154,22,200x124,52\n,,,,,,s-04,blau-weis-weinrot-mittelgrau,1,sc-04,blau-weis-weinrot-mittelgrau,1,,,,,120x204,23,200x200,53\n,,,,,,s-05,beige-rot-braun-helicreme,1,sc-05,beige-rot-braun-helicreme,1,,,,,200x94,24,200x204,54\n,,,,,,s-06,anthrazit-weis-gelb-mittelgrau,1,sc-06,anthrazit-weis-gelb-mittelgrau,1,,,,,120x254,25,none,0\n,,,,,,s-07,dunkelgrau-weis-rot-mittelgrau,1,sc-07,dunkelgrau-weis-rot-mittelgrau,1,,,,,90x154,26,,\n,,,,,,s-08,weinrot-creme-grau,1,sc-08,weinrot-creme-grau,1,,,,,120x194,27,,\n,,,,,,s-09,dunkelbraun-orange-ocker-beige,1,sc-09,dunkelbraun-orange-ocker-beige,1,,,,,120x204,28,,\n,,,,,,s-10,anthrazit-dunkelgrau-mittelgrau,1,sc-10,anthrazit-dunkelgrau-mittelgrau,1,,,,,120x254,29,,\n,,,,,,s-11,blau-dunkelgrau-hellgrau,10,sc-11,blau-dunkelgrau-hellgrau,1,,,,,120x204,30,,\n,,,,,,s-12,petrol-gelb-wasserblau-grauweis,1,sc-12,petrol-gelb-wasserblau-grauweis,1,,,,,none,0,,\n,,,,,,s-13,mittelgrau,1,sc-13,mittelgrau,1,,,,,,,,\n,,,,,,s-14,dunkelgrau,1,sc-14,dunkelgrau,1,,,,,,,,\n,,,,,,s-15,dunkelbraun,1,sc-15,dunkelbraun,1,,,,,,,,\n,,,,,,s-16,beige,1,sc-16,beige,1,,,,,,,,\n,,,,,,s-17,weinrot,1,sc-17,weinrot,1,,,,,,,,\n,,,,,,s-18,hellcreme,1,sc-18,hellcreme,1,,,,,,,,\n,,,,,,s-19,blau,1,sc-19,blau,1,,,,,,,,\n,,,,,,s-20,creme,1,sc-20,creme,1,,,,,,,,\n,,,,,,s-21,grauweis,1,sc-21,grauweis,1,,,,,,,,\n,,,,,,s-22,petrol,1,sc-22,petrol,1,,,,,,,,\n,,,,,,s-23,Tmittelgrau,1,sc-23,Tmittelgrau,1,,,,,,,,\n,,,,,,s-24,anthrazit,1,sc-24,anthrazit,1,,,,,,,,\n,,,,,,s-25,blau,1,sc-25,blau,1,,,,,,,,\n,,,,,,s-26,hellgrau,1,sc-26,hellgrau,1,,,,,,,," ;

        debugger;

        let dataTable = result.split("\n");
        for (var i = 1; i < dataTable.length; i++) {
            var temp = dataTable[i].split(',');
            simpleList.push(temp);
            if (temp[16] !== "" && temp[17] !== "") {
                windowsT.push({
                    size: temp[16],
                    price: temp[17]
                });
            }
            if (temp[18] !== "" && temp[19] !== "") {
                doorsT.push({
                    size: temp[18],
                    price: temp[19]
                });
            }
            if (temp[6] !== "" && temp[7] !== "") {
                sidingColorsT.push({
                    ref: temp[6],
                    color: temp[7],
                    price: temp[8]
                });
            }
            if (temp[9] !== "" && temp[10] !== "") {
                stripColorsT.push({
                    ref: temp[9],
                    color: temp[10],
                    price: temp[11]
                });
            }
            if (temp[12] !== "" && temp[13] !== "") {
                roofStylesT.push({
                    style: temp[12],
                    price: temp[13]
                });
            }
            if (temp[14] !== "" && temp[15] !== "") {
                thicknessT.push({
                    size: temp[14],
                    price: temp[15]
                });
            }
            if (temp[1] !== "") {
                listOfAll.push({
                    areaPrice: temp[1]
                })
            }
            if (temp[3] !== "") {
                listOfAll.push({
                    heightPrice: temp[3]
                })
            }
            if (temp[5] !== "") {
                listOfAll.push({
                    stripePrice: temp[5]
                })
            }
        }

        debugger;

        debugger;
        console.log(simpleList);
        for (var i = 0; i < simpleList.length; i++) {
            finalList.push(simpleList[i][16])
            finalList.push(simpleList[i][17])
        }


        debugger;
        console.log(finalList);
        //setTentAreaPrice(CampManufaktur)
        CampManufaktur.windowsDoors['right'].windowOne.size = "none"
        CampManufaktur.windowsDoors['right'].windowTwo.size = "none"
        CampManufaktur.windowsDoors['right'].windowThree.size = "none"
        CampManufaktur.windowsDoors['right'].door.size = "200x94"
        CampManufaktur.windowsDoors['right'].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['right'].windowOne.size, windowsT)
        CampManufaktur.windowsDoors['right'].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['right'].windowTwo.size, windowsT)
        CampManufaktur.windowsDoors['right'].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['right'].windowThree.size, windowsT)
        CampManufaktur.windowsDoors['right'].door.price = getWindPrice(CampManufaktur.windowsDoors['right'].door.size, doorsT)
        setSumRightSide(CampManufaktur)
        CampManufaktur.windowsDoors['back'].door.size = "none"
        CampManufaktur.windowsDoors['back'].windowTwo.size = "none"
        CampManufaktur.windowsDoors['back'].windowThree.size = "none"
        CampManufaktur.windowsDoors['back'].windowOne.size = "90x154"
        CampManufaktur.windowsDoors['back'].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['back'].windowOne.size, windowsT)
        CampManufaktur.windowsDoors['back'].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['back'].windowTwo.size, windowsT)
        CampManufaktur.windowsDoors['back'].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['back'].windowThree.size, windowsT)
        CampManufaktur.windowsDoors['back'].door.price = getWindPrice(CampManufaktur.windowsDoors['back'].door.size, doorsT)
        setSumBackSide(CampManufaktur)
        CampManufaktur.windowsDoors['front'].windowOne.size = "none"
        CampManufaktur.windowsDoors['front'].windowTwo.size = "none"
        CampManufaktur.windowsDoors['front'].windowThree.size = "none"
        CampManufaktur.windowsDoors['front'].door.size = "200x94"
        CampManufaktur.windowsDoors['front'].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['front'].windowOne.size, windowsT)
        CampManufaktur.windowsDoors['front'].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['front'].windowTwo.size, windowsT)
        CampManufaktur.windowsDoors['front'].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['front'].windowThree.size, windowsT)
        CampManufaktur.windowsDoors['front'].door.price = getWindPrice(CampManufaktur.windowsDoors['front'].door.size, doorsT)
        setSumFrontSide(CampManufaktur)
        CampManufaktur.windowsDoors['left'].windowOne.size = "none"
        CampManufaktur.windowsDoors['left'].windowTwo.size = "none"
        CampManufaktur.windowsDoors['left'].windowThree.size = "none"
        CampManufaktur.windowsDoors['left'].door.size = "200x94"
        CampManufaktur.windowsDoors['left'].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['left'].windowOne.size, windowsT)
        CampManufaktur.windowsDoors['left'].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['left'].windowTwo.size, windowsT)
        CampManufaktur.windowsDoors['left'].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['left'].windowThree.size, windowsT)
        CampManufaktur.windowsDoors['left'].door.price = getWindPrice(CampManufaktur.windowsDoors['left'].door.size, doorsT)
        setSumLefttSide(CampManufaktur)
        CampManufaktur.colors.siding.price = getColoPrice("s-01", sidingColorsT)
        CampManufaktur.colors.stripe.price = getColoPrice("sc-01", stripColorsT)
        CampManufaktur.roofStyle.price = getRoofStylePrice(CampManufaktur.roofStyle.label, roofStylesT)
        CampManufaktur.thickness.price = getProfileThickPrice(CampManufaktur.thickness.label, thicknessT)
        renderSummary(CampManufaktur)


        debugger;
    //});
    return listOfAll
}


debugger;



//dataPricing = getData("https://cors-anywhere.herokuapp.com/www.google.com");

dataPricing = getData("https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSumHFbKDy7NufHzQ7mh-xB5irVYA-9_2f_W5DUSOfmQAVhIF-rxbk2vD2D05JAwC4PHDe26RVLIgni/pub?output=csv")
console.log(dataPricing);



debugger;
setTentAreaPrice(CampManufaktur);
renderSummary(CampManufaktur);


debugger;
function renderSummary(ob) {
    setTotalPrice(ob)
    $('#l-siding-color').text("SIDING: " + ob.colors.siding.label);
    $('#p-siding-color').text("$" + ob.colors.siding.price);
    $('#l-stripe-color').text("STRIPE COLOR: " + ob.colors.stripe.label);
    $('#p-stripe-color').text("$" + ob.colors.stripe.price)
    $('#total_COLORS').text("$" + (ob.colors.siding.price + ob.colors.stripe.price))
    $('#l-roof-style').text("* " + ob.roofStyle.label);
    $('#p-roof-style').text("$" + ob.roofStyle.price);
    $('#total_ROOF').text("$" + ob.roofStyle.price)
    $('#l-THICKNESS').text("* " + ob.thickness.label);
    $('#p-THICKNESS').text("$" + ob.thickness.price);
    $('#total_THICKNESS').text("$" + ob.thickness.price)
    $('#l-tent-size').text("lenght: " + ob.tentSize.l + "cm");
    $('#w-tent-size').text("Width: " + ob.tentSize.w + "cm");
    $('#h-tent-size').text("height: " + ob.tentSize.h + "cm");
    $('#ps-tent-size').text("sp height: " + ob.tentSize.sp + "cm")
    $('#total_TENT').text("$" + ob.tentSize.price)
    if (ob.windowsDoors['front'].windowOne.size !== "none") {
        $('#s-front-window-1').removeClass('d-none')
        $('#P-s-front-window-1').removeClass('d-none')
        $('#s-front-window-1').text("Window: " + ob.windowsDoors['front'].windowOne.size + "-");
        $('#P-s-front-window-1').text("$" + ob.windowsDoors['front'].windowOne.price);
    } else {
        $('#s-front-window-1').addClass('d-none')
        $('#P-s-front-window-1').addClass('d-none')
    }
    if (ob.windowsDoors['front'].windowTwo.size !== "none") {
        $('#s-front-window-2').removeClass('d-none')
        $('#P-s-front-window-2').removeClass('d-none')
        $('#s-front-window-2').text("Window: " + ob.windowsDoors['front'].windowTwo.size + "-");
        $('#P-s-front-window-2').text("$" + ob.windowsDoors['front'].windowTwo.price);
    } else {
        $('#s-front-window-2').addClass('d-none')
        $('#P-s-front-window-2').addClass('d-none')
    }
    if (ob.windowsDoors['front'].windowThree.size !== "none") {
        $('#s-front-window-3').removeClass('d-none')
        $('#P-s-front-window-3').removeClass('d-none')
        $('#s-front-window-3').text("Window: " + ob.windowsDoors['front'].windowThree.size + "-");
        $('#P-s-front-window-3').text("$" + ob.windowsDoors['front'].windowThree.price);
    } else {
        $('#s-front-window-3').addClass('d-none')
        $('#P-s-front-window-3').addClass('d-none')
    }
    if (ob.windowsDoors['front'].door.size !== "none") {
        $('#s-front-door').removeClass('d-none')
        $('#P-s-front-door').removeClass('d-none')
        $('#s-front-door').text("Door: " + ob.windowsDoors['front'].door.size + "-");
        $('#P-s-front-door').text("$" + ob.windowsDoors['front'].door.price);
    } else {
        $('#s-front-door').addClass('d-none')
        $('#P-s-front-door').addClass('d-none')
    }
    $("#total_front_price").text("$" + ob.windowsDoors['front'].price)
    if (ob.windowsDoors['back'].windowOne.size !== "none") {
        $('#s-back-window-1').removeClass('d-none')
        $('#P-s-back-window-1').removeClass('d-none')
        $('#s-back-window-1').text("Window: " + ob.windowsDoors['back'].windowOne.size + "-");
        $('#P-s-back-window-1').text("$" + ob.windowsDoors['back'].windowOne.price);
    } else {
        $('#s-back-window-1').addClass('d-none')
        $('#P-s-back-window-1').addClass('d-none')
    }
    if (ob.windowsDoors['back'].windowTwo.size !== "none") {
        $('#s-back-window-2').removeClass('d-none')
        $('#P-s-back-window-2').removeClass('d-none')
        $('#s-back-window-2').text("Window: " + ob.windowsDoors['back'].windowTwo.size + "-");
        $('#P-s-back-window-2').text("$" + ob.windowsDoors['back'].windowTwo.price);
    } else {
        $('#s-back-window-2').addClass('d-none')
        $('#P-s-back-window-2').addClass('d-none')
    }
    if (ob.windowsDoors['back'].windowThree.size !== "none") {
        $('#s-back-window-3').removeClass('d-none')
        $('#P-s-back-window-3').removeClass('d-none')
        $('#s-back-window-3').text("Window: " + ob.windowsDoors['back'].windowThree.size + "-");
        $('#P-s-back-window-3').text("$" + ob.windowsDoors['back'].windowThree.price);
    } else {
        $('#s-back-window-3').addClass('d-none')
        $('#P-s-back-window-3').addClass('d-none')
    }
    if (ob.windowsDoors['back'].door.size !== "none") {
        $('#s-back-door').removeClass('d-none')
        $('#P-s-back-door').removeClass('d-none')
        $('#s-back-door').text("Door: " + ob.windowsDoors['back'].door.size + "-");
        $('#P-s-back-door').text("$" + ob.windowsDoors['back'].door.price);
    } else {
        $('#s-back-door').addClass('d-none')
        $('#P-s-back-door').addClass('d-none')
    }
    $("#total_back_price").text("$" + ob.windowsDoors['back'].price)
    if (ob.windowsDoors['left'].windowOne.size !== "none") {
        $('#s-left-window-1').removeClass('d-none')
        $('#P-s-left-window-1').removeClass('d-none')
        $('#s-left-window-1').text("Window: " + ob.windowsDoors['left'].windowOne.size + "-");
        $('#P-s-left-window-1').text("$" + ob.windowsDoors['left'].windowOne.price);
    } else {
        $('#s-left-window-1').addClass('d-none')
        $('#P-s-left-window-1').addClass('d-none')
    }
    if (ob.windowsDoors['left'].windowTwo.size !== "none") {
        $('#s-left-window-2').removeClass('d-none')
        $('#P-s-left-window-2').removeClass('d-none')
        $('#s-left-window-2').text("Window: " + ob.windowsDoors['left'].windowTwo.size + "-");
        $('#P-s-left-window-2').text("$" + ob.windowsDoors['left'].windowTwo.price);
    } else {
        $('#s-left-window-2').addClass('d-none')
        $('#P-s-left-window-2').addClass('d-none')
    }
    if (ob.windowsDoors['left'].windowThree.size !== "none") {
        $('#s-left-window-3').removeClass('d-none')
        $('#P-s-left-window-3').removeClass('d-none')
        $('#s-left-window-3').text("Window: " + ob.windowsDoors['left'].windowThree.size + "-");
        $('#P-s-left-window-3').text("$" + ob.windowsDoors['left'].windowThree.price);
    } else {
        $('#s-left-window-3').addClass('d-none')
        $('#P-s-left-window-3').addClass('d-none')
    }
    if (ob.windowsDoors['left'].door.size !== "none") {
        $('#s-left-door').removeClass('d-none')
        $('#P-s-left-door').removeClass('d-none')
        $('#s-left-door').text("Door: " + ob.windowsDoors['left'].door.size + "-");
        $('#P-s-left-door').text("$" + ob.windowsDoors['left'].door.price);
    } else {
        $('#s-left-door').addClass('d-none')
        $('#P-s-left-door').addClass('d-none')
    }
    $("#total_left_price").text("$" + ob.windowsDoors['left'].price)
    if (ob.windowsDoors['right'].windowOne.size !== "none") {
        $('#s-right-window-1').removeClass('d-none')
        $('#P-s-right-window-1').removeClass('d-none')
        $('#s-right-window-1').text("Window: " + ob.windowsDoors['right'].windowOne.size + "-");
        $('#P-s-right-window-1').text("$" + ob.windowsDoors['right'].windowOne.price);
    } else {
        $('#s-right-window-1').addClass('d-none')
        $('#P-s-right-window-1').addClass('d-none')
    }
    if (ob.windowsDoors['right'].windowTwo.size !== "none") {
        $('#s-right-window-2').removeClass('d-none')
        $('#P-s-right-window-2').removeClass('d-none')
        $('#s-right-window-2').text("Window: " + ob.windowsDoors['right'].windowTwo.size + "-");
        $('#P-s-right-window-2').text("$" + ob.windowsDoors['right'].windowTwo.price);
    } else {
        $('#s-right-window-2').addClass('d-none')
        $('#P-s-right-window-2').addClass('d-none')
    }
    if (ob.windowsDoors['right'].windowThree.size !== "none") {
        $('#s-right-window-3').removeClass('d-none')
        $('#P-s-right-window-3').removeClass('d-none')
        $('#s-right-window-3').text("Window: " + ob.windowsDoors['right'].windowThree.size + "-");
        $('#P-s-right-window-3').text("$" + ob.windowsDoors['right'].windowThree.price);
    } else {
        $('#s-right-window-3').addClass('d-none')
        $('#P-s-right-window-3').addClass('d-none')
    }
    if (ob.windowsDoors['right'].door.size !== "none") {
        $('#s-right-door').removeClass('d-none')
        $('#P-s-right-door').removeClass('d-none')
        $('#s-right-door').text("Door: " + ob.windowsDoors['right'].door.size + "-");
        $('#P-s-right-door').text("$" + ob.windowsDoors['right'].door.price);
    } else {
        $('#s-right-door').addClass('d-none')
        $('#P-s-right-door').addClass('d-none')
    }
    $("#total_right_price").text("$" + ob.windowsDoors['right'].price)
    $('.total-price').text(ob.totalPrice);
}

function setTotalPrice(ob) {
    var sum = parseFloat(ob.tentSize.price) + parseFloat(ob.colors.siding.price) + parseFloat(ob.colors.stripe.price) + parseFloat(ob.roofStyle.price) + parseFloat(ob.thickness.price) +
        parseFloat(ob.windowsDoors['front'].price) +
        parseFloat(ob.windowsDoors['back'].price) +
        parseFloat(ob.windowsDoors['left'].price) +
        parseFloat(ob.windowsDoors['right'].price)
    ob.totalPrice = sum.toFixed(2)
}

function setTentAreaPrice(ob) {
    var area = (parseFloat(ob.tentSize.l) / 100) * (parseFloat(ob.tentSize.w) / 100)
    console.log(area);
    var areaPrice = area * parseFloat(dataPricing[0].areaPrice)
    var stripePrice = ob.tentSize.sp * (parseFloat(dataPricing[2].stripePrice) / 100)
    var res = areaPrice + stripePrice
    ob.tentSize.price = res.toFixed(2)
}

function setSumRightSide(ob) {
    var sum = ob.windowsDoors['right'].windowOne.price +
        ob.windowsDoors['right'].windowTwo.price +
        ob.windowsDoors['right'].windowThree.price +
        ob.windowsDoors['right'].door.price;
    ob.windowsDoors['right'].price = sum.toFixed(2)
}

function setSumFrontSide(ob) {
    var sum = ob.windowsDoors['front'].windowOne.price +
        ob.windowsDoors['front'].windowTwo.price +
        ob.windowsDoors['front'].windowThree.price +
        ob.windowsDoors['front'].door.price;
    ob.windowsDoors['front'].price = sum.toFixed(2)
}

function setSumBackSide(ob) {
    var sum = ob.windowsDoors['back'].windowOne.price +
        ob.windowsDoors['back'].windowTwo.price +
        ob.windowsDoors['back'].windowThree.price +
        ob.windowsDoors['back'].door.price
    ob.windowsDoors['back'].price = sum.toFixed(2)
}

function setSumLefttSide(ob) {
    var sum = ob.windowsDoors['left'].windowOne.price +
        ob.windowsDoors['left'].windowTwo.price +
        ob.windowsDoors['left'].windowThree.price +
        ob.windowsDoors['left'].door.price
    ob.windowsDoors['left'].price = sum.toFixed(2)
}

function correctRender() {
    var spans = $('#summary-list span')
    console.log(spans);
    for (var i = 0; i < spans.length; i++) {
        if (spans.eq(i).text() == "none") {
            spans.eq(i).hide()
        } else {
            spans.eq(i).show()
        }
    }
}

function getColoPrice(ref, table) {
    for (var i = 0; i < table.length; i++) {
        if (normStr(ref) == normStr(table[i].ref)) {
            return parseFloat(table[i].price)
            break;
        }
    }
}

function getWindPrice(label, table) {
    for (var i = 0; i < table.length; i++) {
        if (normStr(label) == normStr(table[i].size)) {
            return parseFloat(table[i].price)
            break;
        }
    }
}

function getRoofStylePrice(label, table) {
    for (var i = 0; i < table.length; i++) {
        if (normStr(label) == normStr(table[i].style)) {
            return parseFloat(table[i].price)
            break;
        }
    }
}

function getProfileThickPrice(label, table) {
    label = label.split(' ')
    for (var i = 0; i < table.length; i++) {
        if (normStr(label[0]) == normStr(table[i].size)) {
            return parseFloat(table[i].price)
            break;
        }
    }
}

function normStr(str) {
    if (str != undefined) {
        return str.split(' ').join('').toLowerCase()
    }
}

function correctPrice(price) {
    price = price.replace(",", ".");
    price = price.replace("", "");
    console.log(price);
    price = price.replace("$", "");
    console.log(price);
    price = price.replace("€", "");
    console.log(price);
    price = parseFloat(price)
    return price
}

function intPricesInCards(list, group) {
    console.log(list.length);
    card = $('.pl-card');
    for (var i = 0; i < card.length; i++) {
        priceHolder = card.eq(i).find('.cd-explore')
        label = card.eq(i).find('p');
        for (var j = 0; j < list.length; j++) {
            if (list[j].label === label.text()) {
                priceHolder.text("$" + parseFloat(list[j].price))
            } else {}
        }
    }
}

function updateUiPricesCabinetry(list, group) {
    card = group.find('.pl-card');
    for (var i = 0; i < card.length; i++) {
        var priceHolder = card.eq(i).find('.cd-explore')
        var label = card.eq(i).find('p');
        for (var j = 0; j < list.length; j++) {
            if (list[j].label === label.text()) {
                priceHolder.text("$" + parseFloat(list[j].priceBs))
            } else {}
        }
    }
}

function updateUiPricesColors(list, group, sel) {
    card = group.find('.pl-card');
    for (var i = 0; i < card.length; i++) {
        var priceHolder = card.eq(i).find('.cd-explore')
        var label = card.eq(i).find('p');
        for (var j = 0; j < list.length; j++) {
            if (list[j].label === label.text()) {
                if (sel === "Beanstock") {
                    priceHolder.text("$" + parseFloat(list[j].price))
                } else if (sel === "Classic Bean") {
                    priceHolder.text("$" + parseFloat(list[j].priceCS))
                } else if (sel === "Meanbean") {
                    priceHolder.text("$" + parseFloat(list[j].priceMB))
                } else if (sel === "MeanerBean") {
                    priceHolder.text("$" + parseFloat(list[j].priceMM))
                } else {}
            }
        }
    }
}

function inintLay0(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}

function inintLay1(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "200x64"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}

function inintLay2(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}

function inintLay3(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "200x64"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}

function inintLay4(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "200x64"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}

function inintLay5(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}

function inintLay6(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}

function inintLay7(side) {
    CampManufaktur.windowsDoors['' + side + ''].windowOne.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.size = "none"
    CampManufaktur.windowsDoors['' + side + ''].windowThree.size = "120x104"
    CampManufaktur.windowsDoors['' + side + ''].door.size = "200x64"
    CampManufaktur.windowsDoors['' + side + ''].windowOne.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowOne.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowTwo.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowTwo.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].windowThree.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].windowThree.size, windowsT)
    CampManufaktur.windowsDoors['' + side + ''].door.price = getWindPrice(CampManufaktur.windowsDoors['' + side + ''].door.size, doorsT)
    setSumFrontSide(CampManufaktur)
    renderSummary(CampManufaktur)
}