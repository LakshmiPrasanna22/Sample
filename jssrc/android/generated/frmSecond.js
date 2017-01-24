function addWidgetsfrmSecond() {
    frmSecond.setDefaultUnit(kony.flex.DP);
    var flexTwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexTwo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexTwo.setDefaultUnit(kony.flex.DP);
    var lblMain = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMain",
        "isVisible": true,
        "left": "97dp",
        "skin": "slLabel",
        "text": "Hello Koniyan",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "71dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexTwo.add(lblMain);
    frmSecond.add(flexTwo);
};

function frmSecondGlobals() {
    frmSecond = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSecond,
        "enabledForIdleTimeout": false,
        "id": "frmSecond",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "frmBGColour"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmSecond.info = {
        "kuid": "7c0faa5194494147abf22935de184e14"
    };
};