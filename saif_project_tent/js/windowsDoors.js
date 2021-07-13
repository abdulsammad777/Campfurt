var fwindowType = $("#front-left-window")
var fwindowType1 = $("#front-middle-window")
var fwindowType2 = $("#front-right-window")
var fsignleSize = $("#front-windows-single")
var fdoubleSize = $("#front-windows-double")
var ftripleSize = $("#front-windows-triple")
var fsignleSizeMiddle = $("#front-windows-single-1")
var fdoubleSizeMiddle = $("#front-windows-double-1")
var ftripleSizeMiddle = $("#front-windows-triple-1")
var fsignleSizeRight = $("#front-windows-single-2")
var fdoubleSizeRight = $("#front-windows-double-2")
var ftripleSizeRight = $("#front-windows-triple-2")
var bwindowType = $("#back-left-window")
var bwindowType1 = $("#back-middle-window")
var bwindowType2 = $("#back-right-window")
var bsignleSize = $("#back-windows-single")
var bdoubleSize = $("#back-windows-double")
var btripleSize = $("#back-windows-triple")
var bsignleSizeMiddle = $("#back-windows-single-1")
var bdoubleSizeMiddle = $("#back-windows-double-1")
var btripleSizeMiddle = $("#back-windows-triple-1")
var bsignleSizeRight = $("#back-windows-single-2")
var bdoubleSizeRight = $("#back-windows-double-2")
var btripleSizeRight = $("#back-windows-triple-2")
var lwindowType = $("#left-left-window")
var lwindowType1 = $("#left-middle-window")
var lwindowType2 = $("#left-right-window")
var lsignleSize = $("#left-windows-single")
var ldoubleSize = $("#left-windows-double")
var ltripleSize = $("#left-windows-triple")
var lsignleSizeMiddle = $("#left-windows-single-1")
var ldoubleSizeMiddle = $("#left-windows-double-1")
var ltripleSizeMiddle = $("#left-windows-triple-1")
var lsignleSizeRight = $("#left-windows-single-2")
var ldoubleSizeRight = $("#left-windows-double-2")
var ltripleSizeRight = $("#left-windows-triple-2")
var rwindowType = $("#right-left-window")
var rwindowType1 = $("#right-middle-window")
var rwindowType2 = $("#right-right-window")
var rsignleSize = $("#right-windows-single")
var rdoubleSize = $("#right-windows-double")
var rtripleSize = $("#right-windows-triple")
var rsignleSizeMiddle = $("#right-windows-single-1")
var rdoubleSizeMiddle = $("#right-windows-double-1")
var rtripleSizeMiddle = $("#right-windows-triple-1")
var rsignleSizeRight = $("#right-windows-single-2")
var rdoubleSizeRight = $("#right-windows-double-2")
var rtripleSizeRight = $("#right-windows-triple-2")
var changeSize = function(windowType, single, double, triple) {
    windowType.change(function() {
        if (windowType.val() == "Single") {
            single.show()
            double.hide()
            triple.hide()
        } else if (windowType.val() == 'Double') {
            single.hide()
            double.show()
            triple.hide()
        } else if (windowType.val() == 'Triple') {
            single.hide()
            double.hide()
            triple.show()
        }
    })
}
changeSize(fwindowType, fsignleSize, fdoubleSize, ftripleSize)
changeSize(fwindowType1, fsignleSizeMiddle, fdoubleSizeMiddle, ftripleSizeMiddle)
changeSize(fwindowType2, fsignleSizeRight, fdoubleSizeRight, ftripleSizeRight)
changeSize(bwindowType, bsignleSize, bdoubleSize, btripleSize)
changeSize(bwindowType1, bsignleSizeMiddle, bdoubleSizeMiddle, btripleSizeMiddle)
changeSize(bwindowType2, bsignleSizeRight, bdoubleSizeRight, btripleSizeRight)
changeSize(lwindowType, lsignleSize, ldoubleSize, ltripleSize)
changeSize(lwindowType1, lsignleSizeMiddle, ldoubleSizeMiddle, ltripleSizeMiddle)
changeSize(lwindowType2, lsignleSizeRight, ldoubleSizeRight, ltripleSizeRight)
changeSize(rwindowType, rsignleSize, rdoubleSize, rtripleSize)
changeSize(rwindowType1, rsignleSizeMiddle, rdoubleSizeMiddle, rtripleSizeMiddle)
changeSize(rwindowType2, rsignleSizeRight, rdoubleSizeRight, rtripleSizeRight)
const initChangeSize = function() {
    fsignleSize.show()
    fdoubleSize.hide()
    ftripleSize.hide()
    fsignleSizeMiddle.show()
    fdoubleSizeMiddle.hide()
    ftripleSizeMiddle.hide()
    fsignleSizeRight.show()
    fdoubleSizeRight.hide()
    ftripleSizeRight.hide()
    fwindowType.val("Select Your type:")
    fwindowType1.val("Select Your type:")
    fwindowType2.val("Select Your type:")
    fsignleSize.val("Select Your size:")
    fdoubleSize.val("Select Your size:")
    ftripleSize.val("Select Your size:")
    fsignleSizeMiddle.val("Select Your size:")
    fdoubleSizeMiddle.val("Select Your size:")
    ftripleSizeMiddle.val("Select Your size:")
    fsignleSizeRight.val("Select Your size:")
    fdoubleSizeRight.val("Select Your size:")
    ftripleSizeRight.val("Select Your size:")
}
const initBackChangeSize = function() {
    bsignleSize.show()
    bdoubleSize.hide()
    btripleSize.hide()
    bsignleSizeMiddle.show()
    bdoubleSizeMiddle.hide()
    btripleSizeMiddle.hide()
    bsignleSizeRight.show()
    bdoubleSizeRight.hide()
    btripleSizeRight.hide()
    bwindowType.val("Select Your type:")
    bwindowType1.val("Select Your type:")
    bwindowType2.val("Select Your type:")
    bsignleSize.val("Select Your size:")
    bdoubleSize.val("Select Your size:")
    btripleSize.val("Select Your size:")
    bsignleSizeMiddle.val("Select Your size:")
    bdoubleSizeMiddle.val("Select Your size:")
    btripleSizeMiddle.val("Select Your size:")
    bsignleSizeRight.val("Select Your size:")
    bdoubleSizeRight.val("Select Your size:")
    btripleSizeRight.val("Select Your size:")
}
const initleftChangeSize = function() {
    lsignleSize.show()
    ldoubleSize.hide()
    ltripleSize.hide()
    lsignleSizeMiddle.show()
    ldoubleSizeMiddle.hide()
    ltripleSizeMiddle.hide()
    lsignleSizeRight.show()
    ldoubleSizeRight.hide()
    ltripleSizeRight.hide()
    lwindowType.val("Select Your type:")
    lwindowType1.val("Select Your type:")
    lwindowType2.val("Select Your type:")
    lsignleSize.val("Select Your size:")
    ldoubleSize.val("Select Your size:")
    ltripleSize.val("Select Your size:")
    lsignleSizeMiddle.val("Select Your size:")
    ldoubleSizeMiddle.val("Select Your size:")
    ltripleSizeMiddle.val("Select Your size:")
    lsignleSizeRight.val("Select Your size:")
    ldoubleSizeRight.val("Select Your size:")
    ltripleSizeRight.val("Select Your size:")
}
const initrightChangeSize = function() {
    rsignleSize.show()
    rdoubleSize.hide()
    rtripleSize.hide()
    rsignleSizeMiddle.show()
    rdoubleSizeMiddle.hide()
    rtripleSizeMiddle.hide()
    rsignleSizeRight.show()
    rdoubleSizeRight.hide()
    rtripleSizeRight.hide()
    rwindowType.val("Select Your type:")
    rwindowType1.val("Select Your type:")
    rwindowType2.val("Select Your type:")
    rsignleSize.val("Select Your size:")
    rdoubleSize.val("Select Your size:")
    rtripleSize.val("Select Your size:")
    rsignleSizeMiddle.val("Select Your size:")
    rdoubleSizeMiddle.val("Select Your size:")
    rtripleSizeMiddle.val("Select Your size:")
    rsignleSizeRight.val("Select Your size:")
    rdoubleSizeRight.val("Select Your size:")
    rtripleSizeRight.val("Select Your size:")
}
var frontLayout = {
    layout: $(".front-wall").find('.pl-card'),
    middledoor: $(".front-wall .front-middle-door"),
    leftdoor: $(".front-wall .front-left-door"),
    bgwindowinactive: $(".front-wall .windows .panel-heading"),
    windowunbind: $(".front-wall .windows .panel-heading").find('a').first(),
    bgdoorinactive: $(".front-wall .doors .panel-heading"),
    doorunbind: $(".front-wall .doors .panel-heading").find('a').first(),
    leftwindow: $(".front-wall .front-left-window"),
    middlewindow: $(".front-wall .front-middle-window"),
    rightwindow: $(".front-wall .front-right-window"),
    colapsDoor: "#collapseThree-front-door",
    colapsWindow: "#collapseTwo-front-layout"
}
frontLayout.bgdoorinactive.css('background', 'grey')
frontLayout.doorunbind.attr('href', '')
frontLayout.bgwindowinactive.css('background', 'grey')
frontLayout.windowunbind.attr('href', '')
var backLayout = {
    layout: $(".back-wall").find('.pl-card'),
    middledoor: $(".back-wall .back-middle-door"),
    leftdoor: $(".back-wall .back-left-door"),
    bgwindowinactive: $(".back-wall .windows .panel-heading"),
    windowunbind: $(".back-wall .windows .panel-heading").find('a').first(),
    bgdoorinactive: $(".back-wall .doors .panel-heading"),
    doorunbind: $(".back-wall .doors .panel-heading").find('a').first(),
    leftwindow: $(".back-wall .back-left-window"),
    middlewindow: $(".back-wall .back-middle-window"),
    rightwindow: $(".back-wall .back-right-window"),
    colapsDoor: "#collapseThree-back-door",
    colapsWindow: "#collapseTwo-back-layout"
}
backLayout.bgdoorinactive.css('background', 'grey')
backLayout.doorunbind.attr('href', '')
backLayout.bgwindowinactive.css('background', 'grey')
backLayout.windowunbind.attr('href', '')
var leftLayout = {
    layout: $(".left-wall").find('.pl-card'),
    middledoor: $(".left-wall .left-middle-door"),
    leftdoor: $(".left-wall .left-left-door"),
    bgwindowinactive: $(".left-wall .windows .panel-heading"),
    windowunbind: $(".left-wall .windows .panel-heading").find('a').first(),
    bgdoorinactive: $(".left-wall .doors .panel-heading"),
    doorunbind: $(".left-wall .doors .panel-heading").find('a').first(),
    leftwindow: $(".left-wall .left-left-window"),
    middlewindow: $(".left-wall .left-middle-window"),
    rightwindow: $(".left-wall .left-right-window"),
    colapsDoor: "#collapseThree-left-door",
    colapsWindow: "#collapseTwo-left-layout"
}
leftLayout.bgdoorinactive.css('background', 'grey')
leftLayout.doorunbind.attr('href', '')
leftLayout.bgwindowinactive.css('background', 'grey')
leftLayout.windowunbind.attr('href', '')
var rightLayout = {
    layout: $(".right-wall").find('.pl-card'),
    middledoor: $(".right-wall .right-middle-door"),
    leftdoor: $(".right-wall .right-left-door"),
    bgwindowinactive: $(".right-wall .windows .panel-heading"),
    windowunbind: $(".right-wall .windows .panel-heading").find('a').first(),
    bgdoorinactive: $(".right-wall .doors .panel-heading"),
    doorunbind: $(".right-wall .doors .panel-heading").find('a').first(),
    leftwindow: $(".right-wall .right-left-window"),
    middlewindow: $(".right-wall .right-middle-window"),
    rightwindow: $(".right-wall .right-right-window"),
    colapsDoor: "#collapseThree-right-door",
    colapsWindow: "#collapseTwo-right-layout"
}
rightLayout.bgdoorinactive.css('background', 'grey')
rightLayout.doorunbind.attr('href', '')
rightLayout.bgwindowinactive.css('background', 'grey')
rightLayout.windowunbind.attr('href', '')
const changelayout = function(ob) {
    ob.layout.click(function() {
        var door = $(this).attr("data-door")
        var window = $(this).attr("data-window")
        switch (door) {
            case 'no':
                ob.middledoor.hide()
                ob.leftdoor.hide()
                ob.bgdoorinactive.css('background', 'grey')
                ob.doorunbind.attr('href', '')
                break;
            case 'left':
                ob.middledoor.hide()
                ob.leftdoor.show()
                ob.bgdoorinactive.css('background-color', 'white')
                ob.doorunbind.attr('href', ob.colapsDoor)
                break;
            case 'middle':
                ob.middledoor.show()
                ob.leftdoor.hide()
                ob.bgdoorinactive.css('background-color', 'white')
                ob.doorunbind.attr('href', ob.colapsDoor)
                break;
        }
        switch (window) {
            case 'no':
                ob.leftwindow.hide()
                ob.middlewindow.hide()
                ob.rightwindow.hide()
                ob.bgwindowinactive.css('background', 'grey')
                ob.windowunbind.attr('href', '')
                break;
            case 'middle':
                ob.leftwindow.hide()
                ob.middlewindow.show()
                ob.rightwindow.hide()
                ob.bgwindowinactive.css('background-color', 'white')
                ob.windowunbind.attr('href', ob.colapsWindow)
                break;
            case 'leftandMiddle':
                ob.leftwindow.show()
                ob.middlewindow.show()
                ob.rightwindow.hide()
                ob.bgwindowinactive.css('background-color', 'white')
                ob.windowunbind.attr('href', ob.colapsWindow)
                break;
            case 'leftandRight':
                ob.leftwindow.show()
                ob.middlewindow.hide()
                ob.rightwindow.show()
                ob.bgwindowinactive.css('background-color', 'white')
                ob.windowunbind.attr('href', ob.colapsWindow)
                break;
            case 'all':
                ob.leftwindow.show()
                ob.middlewindow.show()
                ob.rightwindow.show()
                ob.bgwindowinactive.css('background-color', 'white')
                ob.windowunbind.attr('href', ob.colapsWindow)
                break;
            case 'left':
                ob.leftwindow.show()
                ob.middlewindow.hide()
                ob.rightwindow.hide()
                ob.bgwindowinactive.css('background-color', 'white')
                ob.windowunbind.attr('href', ob.colapsWindow)
                break;
        }
    })
}
changelayout(frontLayout)
changelayout(backLayout)
changelayout(leftLayout)
changelayout(rightLayout)
var showCondition = function(value, fcondition, scondition) {
    if (value < 350) {
        fcondition.hide()
        scondition.hide()
    } else if (value > 350 && value < 500) {
        fcondition.show()
        scondition.hide()
        console.log("first", fcondition)
    } else if (value > 500) {
        scondition.show()
        fcondition.show()
        console.log("second", scondition)
    }
}