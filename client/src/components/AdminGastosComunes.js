import React, { Component } from 'react'

export default class AdminGastosComunes extends Component {
    render() {
        return (
            <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Gastos Comunes</title>
        <style id="applicationStylesheet" type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.mediaViewInfo {\n\t\t--web-view-name: Admin Gastos Comunes;\n\t\t--web-view-id: Admin_Gastos_Comunes;\n\t\t--web-scale-on-resize: true;\n\t\t--web-center-horizontally: true;\n\t\t--web-center-vertically: true;\n\t\t--web-enable-deep-linking: true;\n\t}\n\t:root {\n\t\t--web-view-ids: Admin_Gastos_Comunes;\n\t}\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t\tborder: none;\n\t}\n\t#Admin_Gastos_Comunes {\n\t\tposition: absolute;\n\t\twidth: 1920px;\n\t\theight: 1080px;\n\t\tbackground-color: rgba(247,241,241,1);\n\t\toverflow: hidden;\n\t\t--web-view-name: Admin Gastos Comunes;\n\t\t--web-view-id: Admin_Gastos_Comunes;\n\t\t--web-scale-on-resize: true;\n\t\t--web-center-horizontally: true;\n\t\t--web-center-vertically: true;\n\t\t--web-enable-deep-linking: true;\n\t}\n\t#Imagen_2 {\n\t\tposition: absolute;\n\t\twidth: 194px;\n\t\theight: 95px;\n\t\tleft: 262px;\n\t\ttop: 569px;\n\t\toverflow: visible;\n\t}\n\t#Rectngulo_13 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_13 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 99px;\n\t\theight: 16px;\n\t\tleft: 266px;\n\t\ttop: 591px;\n\t}\n\t#Rectngulo_14 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_14 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 76px;\n\t\theight: 14px;\n\t\tleft: 266px;\n\t\ttop: 577px;\n\t}\n\t#_234802 {\n\t\tleft: 271px;\n\t\ttop: 592px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 33px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gato_Despto {\n\t\tleft: 271px;\n\t\ttop: 577px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 22px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 4px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_t {\n\t\tposition: absolute;\n\t\twidth: 193px;\n\t\theight: 95px;\n\t\tleft: 717px;\n\t\ttop: 569px;\n\t\toverflow: visible;\n\t}\n\t#Rectngulo_15 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_15 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 100px;\n\t\theight: 16px;\n\t\tleft: 721px;\n\t\ttop: 591px;\n\t}\n\t#Rectngulo_16 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_16 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 69px;\n\t\theight: 14px;\n\t\tleft: 721px;\n\t\ttop: 577px;\n\t}\n\t#_234802_w {\n\t\tleft: 725px;\n\t\ttop: 592px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 33px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gasto_Agua {\n\t\tleft: 725px;\n\t\ttop: 577px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 25px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 5px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_y {\n\t\tposition: absolute;\n\t\twidth: 195px;\n\t\theight: 96px;\n\t\tleft: 256px;\n\t\ttop: 749px;\n\t\toverflow: visible;\n\t}\n\t#Rectngulo_17 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_17 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 100px;\n\t\theight: 18px;\n\t\tleft: 258px;\n\t\ttop: 769px;\n\t}\n\t#Rectngulo_18 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_18 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 100px;\n\t\theight: 12px;\n\t\tleft: 258px;\n\t\ttop: 757px;\n\t}\n\t#_234802_ {\n\t\tleft: 264px;\n\t\ttop: 772px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 33px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gasto_Estacionamiento {\n\t\tleft: 264px;\n\t\ttop: 758px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 39px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 4px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_ {\n\t\tposition: absolute;\n\t\twidth: 195px;\n\t\theight: 96px;\n\t\tleft: 721px;\n\t\ttop: 757px;\n\t\toverflow: visible;\n\t}\n\t#Rectngulo_19 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_19 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 98px;\n\t\theight: 18px;\n\t\tleft: 725px;\n\t\ttop: 778px;\n\t}\n\t#Rectngulo_20 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_20 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 75px;\n\t\theight: 12px;\n\t\tleft: 725px;\n\t\ttop: 766px;\n\t}\n\t#_234802_ba {\n\t\tleft: 728px;\n\t\ttop: 781px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 33px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Monto_del_mes {\n\t\tleft: 728px;\n\t\ttop: 766px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 26px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 4px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Rectngulo_11 {\n\t\tfill: rgba(218,218,218,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_11 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 1919px;\n\t\theight: 154px;\n\t\tleft: 0px;\n\t\ttop: 0px;\n\t}\n\t#Jorge_Elliot {\n\t\tleft: 36px;\n\t\ttop: 77px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 151px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 31px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Reclamos {\n\t\tleft: 1149px;\n\t\ttop: 50px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 127px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gastos_Comunes {\n\t\tleft: 1519px;\n\t\ttop: 53px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 231px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 31px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_bc {\n\t\tposition: absolute;\n\t\twidth: 195px;\n\t\theight: 96px;\n\t\tleft: 256px;\n\t\ttop: 942px;\n\t\toverflow: visible;\n\t}\n\t#Rectngulo_21 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_21 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 96px;\n\t\theight: 17px;\n\t\tleft: 264px;\n\t\ttop: 964px;\n\t}\n\t#Trazado_1 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Trazado_1 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 98.406px;\n\t\theight: 12.903px;\n\t\tleft: 259.881px;\n\t\ttop: 950.417px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#_234802_bf {\n\t\tleft: 267px;\n\t\ttop: 964px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 33px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_bg {\n\t\tposition: absolute;\n\t\twidth: 195px;\n\t\theight: 96px;\n\t\tleft: 717px;\n\t\ttop: 942px;\n\t\toverflow: visible;\n\t}\n\t#Rectngulo_23 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_23 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 100px;\n\t\theight: 17px;\n\t\tleft: 721px;\n\t\ttop: 964px;\n\t}\n\t#Rectngulo_24 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_24 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 100px;\n\t\theight: 14px;\n\t\tleft: 721px;\n\t\ttop: 950px;\n\t}\n\t#_234802_bj {\n\t\tleft: 725px;\n\t\ttop: 965px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 33px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Inters_por_mora {\n\t\tleft: 251px;\n\t\ttop: 949px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 56px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Deuda {\n\t\tleft: 727px;\n\t\ttop: 948px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 26px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 9px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Rectngulo_25 {\n\t\tfill: transparent;\n\t}\n\t.Rectngulo_25 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 214px;\n\t\theight: 13px;\n\t\tleft: 178px;\n\t\ttop: 257px;\n\t}\n\t#Lnea_16 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_16 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 6px;\n\t\theight: 527.496px;\n\t\tleft: 658.101px;\n\t\ttop: 540.388px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_17 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_17 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 1453.504px;\n\t\theight: 6px;\n\t\tleft: 206.5px;\n\t\ttop: 713.153px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_18 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_18 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 1461.5px;\n\t\theight: 1.369px;\n\t\tleft: 198.5px;\n\t\ttop: 902.365px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_21 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_21 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 6px;\n\t\theight: 492.497px;\n\t\tleft: 1192.765px;\n\t\ttop: 555.388px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_6 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_6 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\theight: 263.004px;\n\t\tleft: 307.5px;\n\t\ttop: 227.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_7 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_7 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 4.804px;\n\t\theight: 262.015px;\n\t\tleft: 620.5px;\n\t\ttop: 227.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_8 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_8 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 2.904px;\n\t\theight: 262.007px;\n\t\tleft: 900.5px;\n\t\ttop: 227.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_9 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_9 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 1.005px;\n\t\theight: 262px;\n\t\tleft: 1180.5px;\n\t\ttop: 227.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_10 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_10 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\theight: 263.004px;\n\t\tleft: 1502.5px;\n\t\ttop: 227.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Prorrateado {\n\t\tleft: 110px;\n\t\ttop: 228px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 148px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Fondo_de_Reserva {\n\t\tleft: 368px;\n\t\ttop: 228px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 220px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Agua {\n\t\tleft: 715px;\n\t\ttop: 228px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 67px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Electricidad {\n\t\tleft: 963px;\n\t\ttop: 228px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 140px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Combustible {\n\t\tleft: 1259px;\n\t\ttop: 228px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 155px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Multas_e_inters_por_atraso_ {\n\t\tleft: 1570px;\n\t\ttop: 208px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 197px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#vacio_ca {\n\t\tleft: 127px;\n\t\ttop: 303px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 121px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 53px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#ID13000 {\n\t\tleft: 686px;\n\t\ttop: 303px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 155px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 53px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#ID32000 {\n\t\tleft: 968px;\n\t\ttop: 303px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 155px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 53px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#ID4500 {\n\t\tleft: 1274px;\n\t\ttop: 303px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 127px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 53px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#ID13000_b {\n\t\tleft: 1576px;\n\t\ttop: 303px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 155px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 53px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Administrador {\n\t\tleft: 36px;\n\t\ttop: 23px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 127px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 20px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Trazado_3 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Trazado_3 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 64px;\n\t\theight: 54px;\n\t\tleft: 1838px;\n\t\ttop: 50px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Salir {\n\t\tleft: 1850px;\n\t\ttop: 62px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 42px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 22px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#vacio_ca {\n\t\tleft: 127px;\n\t\ttop: 303px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 121px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 53px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#vacio_cb {\n\t\tleft: 404px;\n\t\ttop: 299px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 121px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 53px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Rectngulo_45 {\n\t\tfill: rgba(32,209,91,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_45 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 151px;\n\t\theight: 53px;\n\t\tleft: 1556px;\n\t\ttop: 436px;\n\t}\n\t#cargar_ {\n\t\tleft: 1604px;\n\t\ttop: 446px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 57px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 20px;\n\t\tcolor: rgba(255,255,255,1);\n\t}\n\t#Rectngulo_46 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_46 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 1708px;\n\t\theight: 342px;\n\t\tleft: 71px;\n\t\ttop: 179px;\n\t}\n" }} />
        <div id="Admin_Gastos_Comunes">
          <img id="Imagen_2" src="Imagen_2.png" srcSet="Imagen_2.png 1x, Imagen_2@2x.png 2x" />
          <svg className="Rectngulo_13">
            <rect id="Rectngulo_13" rx={0} ry={0} x={0} y={0} width={99} height={16}>
            </rect>
          </svg>
          <svg className="Rectngulo_14">
            <rect id="Rectngulo_14" rx={0} ry={0} x={0} y={0} width={76} height={14}>
            </rect>
          </svg>
          <div id="_234802">
            <span>$ 234.802</span>
          </div>
          <div id="Gato_Despto">
            <span>Gato Despto</span>
          </div>
          <img id="Imagen_2_t" src="Imagen_2_t.png" srcSet="Imagen_2_t.png 1x, Imagen_2_t@2x.png 2x" />
          <svg className="Rectngulo_15">
            <rect id="Rectngulo_15" rx={0} ry={0} x={0} y={0} width={100} height={16}>
            </rect>
          </svg>
          <svg className="Rectngulo_16">
            <rect id="Rectngulo_16" rx={0} ry={0} x={0} y={0} width={69} height={14}>
            </rect>
          </svg>
          <div id="_234802_w">
            <span>$ 234.802</span>
          </div>
          <div id="Gasto_Agua">
            <span>Gasto Agua</span>
          </div>
          <img id="Imagen_2_y" src="Imagen_2_y.png" srcSet="Imagen_2_y.png 1x, Imagen_2_y@2x.png 2x" />
          <svg className="Rectngulo_17">
            <rect id="Rectngulo_17" rx={0} ry={0} x={0} y={0} width={100} height={18}>
            </rect>
          </svg>
          <svg className="Rectngulo_18">
            <rect id="Rectngulo_18" rx={0} ry={0} x={0} y={0} width={100} height={12}>
            </rect>
          </svg>
          <div id="_234802_">
            <span>$ 234.802</span>
          </div>
          <div id="Gasto_Estacionamiento">
            <span>Gasto Estacionamiento</span>
          </div>
          <img id="Imagen_2_" src="Imagen_2_.png" srcSet="Imagen_2_.png 1x, Imagen_2_@2x.png 2x" />
          <svg className="Rectngulo_19">
            <rect id="Rectngulo_19" rx={0} ry={0} x={0} y={0} width={98} height={18}>
            </rect>
          </svg>
          <svg className="Rectngulo_20">
            <rect id="Rectngulo_20" rx={0} ry={0} x={0} y={0} width={75} height={12}>
            </rect>
          </svg>
          <div id="_234802_ba">
            <span>$ 234.802</span>
          </div>
          <div id="Monto_del_mes">
            <span>Monto del mes</span>
          </div>
          <svg className="Rectngulo_11">
            <rect id="Rectngulo_11" rx={0} ry={0} x={0} y={0} width={1919} height={154}>
            </rect>
          </svg>
          <div id="Jorge_Elliot">
            <span>Jorge Elliot</span>
          </div>
          <div id="Reclamos">
            <span>Reclamos</span>
          </div>
          <div id="Gastos_Comunes">
            <span>Gastos Comunes</span>
          </div>
          <img id="Imagen_2_bc" src="Imagen_2_bc.png" srcSet="Imagen_2_bc.png 1x, Imagen_2_bc@2x.png 2x" />
          <svg className="Rectngulo_21">
            <rect id="Rectngulo_21" rx={0} ry={0} x={0} y={0} width={96} height={17}>
            </rect>
          </svg>
          <svg className="Trazado_1" viewBox="0 0 98.406 12.903">
            <path id="Trazado_1" d="M 0 0 L 98.4061279296875 0 L 98.4061279296875 12.9030237197876 L 0 12.9030237197876 L 0 0 Z">
            </path>
          </svg>
          <div id="_234802_bf">
            <span>$ 234.802</span>
          </div>
          <img id="Imagen_2_bg" src="Imagen_2_bg.png" srcSet="Imagen_2_bg.png 1x, Imagen_2_bg@2x.png 2x" />
          <svg className="Rectngulo_23">
            <rect id="Rectngulo_23" rx={0} ry={0} x={0} y={0} width={100} height={17}>
            </rect>
          </svg>
          <svg className="Rectngulo_24">
            <rect id="Rectngulo_24" rx={0} ry={0} x={0} y={0} width={100} height={14}>
            </rect>
          </svg>
          <div id="_234802_bj">
            <span>$ 234.802</span>
          </div>
          <div id="Inters_por_mora">
            <span>Interés por mora</span>
          </div>
          <div id="Deuda">
            <span>Deuda</span>
          </div>
          <svg className="Rectngulo_25">
            <rect id="Rectngulo_25" rx={0} ry={0} x={0} y={0} width={214} height={13}>
            </rect>
          </svg>
          <svg className="Lnea_16" viewBox="0 0 5 527.487">
            <path id="Lnea_16" d="M 5 0 L 0 527.4866943359375">
            </path>
          </svg>
          <svg className="Lnea_17" viewBox="0 0 1453.5 5">
            <path id="Lnea_17" d="M 0 0 L 1453.5 5">
            </path>
          </svg>
          <svg className="Lnea_18" viewBox="0 0 1461.5 0.369">
            <path id="Lnea_18" d="M 0 0.369140625 L 1461.5 0">
            </path>
          </svg>
          <svg className="Lnea_21" viewBox="0 0 5 492.487">
            <path id="Lnea_21" d="M 0 0 L 5 492.4866943359375">
            </path>
          </svg>
          <svg className="Lnea_6" viewBox="0 0 1 263">
            <path id="Lnea_6" d="M 1 0 L 0 263">
            </path>
          </svg>
          <svg className="Lnea_7" viewBox="0 0 3.804 262">
            <path id="Lnea_7" d="M 3.8037109375 0 L 0 262">
            </path>
          </svg>
          <svg className="Lnea_8" viewBox="0 0 1.904 262">
            <path id="Lnea_8" d="M 1.904296875 0 L 0 262">
            </path>
          </svg>
          <svg className="Lnea_9" viewBox="0 0 0.005 262">
            <path id="Lnea_9" d="M 0.0048828125 0 L 0 262">
            </path>
          </svg>
          <svg className="Lnea_10" viewBox="0 0 1 263">
            <path id="Lnea_10" d="M 0 0 L 1 263">
            </path>
          </svg>
          <div id="Prorrateado">
            <span>Prorrateado</span>
          </div>
          <div id="Fondo_de_Reserva">
            <span>Fondo de Reserva</span>
          </div>
          <div id="Agua">
            <span>Agua</span>
          </div>
          <div id="Electricidad">
            <span>Electricidad</span>
          </div>
          <div id="Combustible">
            <span>Combustible</span>
          </div>
          <div id="Multas_e_inters_por_atraso_">
            <span>Multas e interéspor atraso </span>
          </div>
          <div id="vacio_ca">
            <span>vacio</span>
          </div>
          <div id="ID13000">
            <span>13.000</span>
          </div>
          <div id="ID32000">
            <span>32.000</span>
          </div>
          <div id="ID4500">
            <span>4.500</span>
          </div>
          <div id="ID13000_b">
            <span>13.000</span>
          </div>
          <div id="Administrador">
            <span>Administrador</span>
          </div>
          <svg className="Trazado_3" viewBox="0 0 64 54">
            <path id="Trazado_3" d="M 27 0 L 37 0 C 51.91168975830078 0 64 12.08831119537354 64 27 C 64 38.75031280517578 56.49396133422852 48.74749755859375 45.74683380126953 52.55171203613281 C 43.19585037231445 53.45666885375977 40.161376953125 54 37 54 L 27 54 C 12.08831119537354 54 0 41.91168975830078 0 27 C 0 12.08831119537354 12.08831119537354 0 27 0 Z">
            </path>
          </svg>
          <div id="Salir">
            <span>Salir</span>
          </div>
          <div id="vacio_ca">
            <span>vacio</span>
          </div>
          <div id="vacio_cb">
            <span>vacio</span>
          </div>
          <svg className="Rectngulo_45">
            <rect id="Rectngulo_45" rx={19} ry={19} x={0} y={0} width={151} height={53}>
            </rect>
          </svg>
          <div id="cargar_">
            <span>cargar</span><br />
          </div>
          <svg className="Rectngulo_46">
            <rect id="Rectngulo_46" rx={36} ry={36} x={0} y={0} width={1708} height={342}>
            </rect>
          </svg>
        </div>
            </div>
        )
    }
}
