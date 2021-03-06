function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flexMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexMain.setDefaultUnit(kony.flex.DP);
    var btnNext = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnNext",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_096c49d7e929489b9a00060ea7901e72,
        "skin": "slButtonGlossBlue",
        "text": "Click ME!!",
        "top": "155dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "117dp",
        "skin": "slLabel",
        "text": "Hello Kony!!!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "29dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexMain.add(btnNext, lblHeader);
    frmHome.add(flexMain);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
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
    frmHome.info = {
        "kuid": "f2a1d30b0ab54c9fb9b5b2a5e66cc500"
    };
};