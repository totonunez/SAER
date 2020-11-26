import React, { Component } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = { 
  series:[{
    name: 'Profit',
    data:[100,200,30,100,300]
  }]
}

export default class UserGastosComunes extends Component {


  
    render() {
        return (
            <div>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Gastos comunes</title>
        <style id="applicationStylesheet" type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.mediaViewInfo {\n\t\t--web-view-name: User Gastos comunes;\n\t\t--web-view-id: User_Gastos_comunes;\n\t\t--web-scale-on-resize: true;\n\t\t--web-center-horizontally: true;\n\t\t--web-center-vertically: true;\n\t\t--web-enable-deep-linking: true;\n\t}\n\t:root {\n\t\t--web-view-ids: User_Gastos_comunes;\n\t}\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t\tborder: none;\n\t}\n\t#User_Gastos_comunes {\n\t\tposition: absolute;\n\t\twidth: 1920px;\n\t\theight: 1080px;\n\t\tbackground-color: rgba(247,241,241,0.529);\n\t\toverflow: hidden;\n\t\t--web-view-name: User Gastos comunes;\n\t\t--web-view-id: User_Gastos_comunes;\n\t\t--web-scale-on-resize: true;\n\t\t--web-center-horizontally: true;\n\t\t--web-center-vertically: true;\n\t\t--web-enable-deep-linking: true;\n\t}\n\t@keyframes fadein {\n\t\n\t\t0% {\n\t\t\topacity: 0;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t\n\t}\n\t#Imagen_2 {\n\t\tposition: absolute;\n\t\twidth: 246px;\n\t\theight: 121px;\n\t\tleft: 204px;\n\t\ttop: 258px;\n\t\toverflow: visible;\n\t}\n\t#DatoRectanguloGastoDepto {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.DatoRectanguloGastoDepto {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 105px;\n\t\theight: 21px;\n\t\tleft: 209px;\n\t\ttop: 283px;\n\t}\n\t#Rectngulo_14 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_14 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 80px;\n\t\theight: 15px;\n\t\tleft: 209px;\n\t\ttop: 268px;\n\t}\n\t#DatoGastoDepto {\n\t\tleft: 214px;\n\t\ttop: 285px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 45px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 11px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gasto_Despto {\n\t\tleft: 214px;\n\t\ttop: 268px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 37px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 7px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_t {\n\t\tposition: absolute;\n\t\twidth: 246px;\n\t\theight: 121px;\n\t\tleft: 697px;\n\t\ttop: 268px;\n\t\toverflow: visible;\n\t}\n\t#Rectngulo_15 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_15 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 105px;\n\t\theight: 21px;\n\t\tleft: 702px;\n\t\ttop: 293px;\n\t}\n\t#RectanguloGastoAgua {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.RectanguloGastoAgua {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 75px;\n\t\theight: 15px;\n\t\tleft: 702px;\n\t\ttop: 278px;\n\t}\n\t#DatoGastoAgua {\n\t\tleft: 706px;\n\t\ttop: 295px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 45px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 11px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gasto_Agua {\n\t\tleft: 706px;\n\t\ttop: 278px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 40px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_y {\n\t\tposition: absolute;\n\t\twidth: 247px;\n\t\theight: 121px;\n\t\tleft: 214px;\n\t\ttop: 483px;\n\t\toverflow: visible;\n\t}\n\t#RectanguloGastoEstacionamiento {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.RectanguloGastoEstacionamiento {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 105px;\n\t\theight: 21px;\n\t\tleft: 219px;\n\t\ttop: 508px;\n\t}\n\t#Rectngulo_18 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_18 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 105px;\n\t\theight: 15px;\n\t\tleft: 219px;\n\t\ttop: 493px;\n\t}\n\t#DatoGastoEstacionamiento {\n\t\tleft: 222px;\n\t\ttop: 510px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 45px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 11px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gasto_Estacionamiento {\n\t\tleft: 222px;\n\t\ttop: 494px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 67px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 7px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_ {\n\t\tposition: absolute;\n\t\twidth: 246px;\n\t\theight: 121px;\n\t\tleft: 706px;\n\t\ttop: 483px;\n\t\toverflow: visible;\n\t}\n\t#RectanguloMontoMes {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.RectanguloMontoMes {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 105px;\n\t\theight: 21px;\n\t\tleft: 711px;\n\t\ttop: 508px;\n\t}\n\t#Rectngulo_20 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_20 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 80px;\n\t\theight: 15px;\n\t\tleft: 711px;\n\t\ttop: 493px;\n\t}\n\t#DatoMontoMes {\n\t\tleft: 715px;\n\t\ttop: 510px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 45px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 11px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Monto_del_mes {\n\t\tleft: 715px;\n\t\ttop: 493px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 44px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 7px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Rectngulo_11 {\n\t\tfill: rgba(218,218,218,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectngulo_11 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 1919px;\n\t\theight: 154px;\n\t\tleft: 0px;\n\t\ttop: 0px;\n\t}\n\t#Reclamos {\n\t\tleft: 712px;\n\t\ttop: 50px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 127px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 30px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Gastos_Comunes {\n\t\tleft: 1093px;\n\t\ttop: 50px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 231px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 31px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Bodega {\n\t\tleft: 1506px;\n\t\ttop: 52px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 105px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 31px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_bc {\n\t\tposition: absolute;\n\t\twidth: 244px;\n\t\theight: 120px;\n\t\tleft: 226px;\n\t\ttop: 720px;\n\t\toverflow: visible;\n\t}\n\t#RectanguloInteresMora {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.RectanguloInteresMora {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 104px;\n\t\theight: 21px;\n\t\tleft: 231px;\n\t\ttop: 745px;\n\t}\n\t#Trazado_1 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Trazado_1 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 105.521px;\n\t\theight: 15.362px;\n\t\tleft: 230.158px;\n\t\ttop: 729.66px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#DatoInteresMora {\n\t\tleft: 238px;\n\t\ttop: 745px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 45px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 11px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Imagen_2_bg {\n\t\tposition: absolute;\n\t\twidth: 244px;\n\t\theight: 120px;\n\t\tleft: 711px;\n\t\ttop: 720px;\n\t\toverflow: visible;\n\t}\n\t#DatoRectanguloDeuda {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.DatoRectanguloDeuda {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 106px;\n\t\theight: 21px;\n\t\tleft: 715px;\n\t\ttop: 745px;\n\t}\n\t#Rectangulo {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Rectangulo {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 106px;\n\t\theight: 15px;\n\t\tleft: 715px;\n\t\ttop: 730px;\n\t}\n\t#DatoDeuda {\n\t\tleft: 720px;\n\t\ttop: 747px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 45px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 11px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Inters_por_mora {\n\t\tleft: 237px;\n\t\ttop: 730px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 56px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 8px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Deuda {\n\t\tleft: 722px;\n\t\ttop: 730px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 26px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 9px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Cristbal__Eduardo {\n\t\tleft: 53px;\n\t\ttop: 25px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 147px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 35px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Rectngulo_25 {\n\t\tfill: transparent;\n\t}\n\t.Rectngulo_25 {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 214px;\n\t\theight: 13px;\n\t\tleft: 511px;\n\t\ttop: 202px;\n\t}\n\t#Lnea_16 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_16 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 2px;\n\t\theight: 744.496px;\n\t\tleft: 647.075px;\n\t\ttop: 192.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_17 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_17 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 1591.997px;\n\t\theight: 6px;\n\t\tleft: 172.339px;\n\t\ttop: 450.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#Lnea_18 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_18 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 1611.999px;\n\t\theight: 8.631px;\n\t\tleft: 164.339px;\n\t\ttop: 680.869px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#AprobarPlanilla {\n\t\tfill: rgba(105,74,213,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.AprobarPlanilla {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 201px;\n\t\theight: 75px;\n\t\tleft: 1449px;\n\t\ttop: 980px;\n\t}\n\t#RegistrarReclamo {\n\t\tfill: rgba(32,209,91,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.RegistrarReclamo {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 194px;\n\t\theight: 75px;\n\t\tleft: 1697px;\n\t\ttop: 980px;\n\t}\n\t#Aprobar_Planilla {\n\t\tleft: 1470px;\n\t\ttop: 1004px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 141px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 20px;\n\t\tcolor: rgba(255,247,247,1);\n\t}\n\t#Registrar_Reclamo {\n\t\tleft: 1715px;\n\t\ttop: 1004px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 159px;\n\t\twhite-space: nowrap;\n\t\ttext-align: center;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 20px;\n\t\tcolor: rgba(255,255,255,1);\n\t}\n\t#Imagen_2_bv {\n\t\tposition: absolute;\n\t\twidth: 246px;\n\t\theight: 121px;\n\t\tleft: 1341px;\n\t\ttop: 268px;\n\t\toverflow: visible;\n\t}\n\t#Lnea_21 {\n\t\tfill: transparent;\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Lnea_21 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 1px;\n\t\theight: 752px;\n\t\tleft: 1229.336px;\n\t\ttop: 192.5px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#RectanguloTotalPagar {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.RectanguloTotalPagar {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 121.311px;\n\t\theight: 23px;\n\t\tleft: 1341.479px;\n\t\ttop: 271px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t}\n\t#DatoRectanguloTotalPagar {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.DatoRectanguloTotalPagar {\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 122px;\n\t\theight: 32px;\n\t\tleft: 1341px;\n\t\ttop: 294px;\n\t}\n\t#Total_a_pagar {\n\t\tleft: 1367px;\n\t\ttop: 274px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 74px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 13px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#DatoTotalPAgar {\n\t\tleft: 1369px;\n\t\ttop: 300px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 60px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: lighter;\n\t\tfont-size: 16px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n\t#Trazado_3 {\n\t\tfill: rgba(255,255,255,1);\n\t\tstroke: rgba(112,112,112,1);\n\t\tstroke-width: 1px;\n\t\tstroke-linejoin: miter;\n\t\tstroke-linecap: butt;\n\t\tstroke-miterlimit: 4;\n\t\tshape-rendering: auto;\n\t}\n\t.Trazado_3 {\n\t\toverflow: visible;\n\t\tposition: absolute;\n\t\twidth: 64px;\n\t\theight: 54px;\n\t\tleft: 1829px;\n\t\ttop: 50px;\n\t\ttransform: matrix(1,0,0,1,0,0);\n\t\t--web-animation: fadein 0.3s ease-out;\n\t\t--web-action-type: page;\n\t\t--web-action-target: sign_in.html;\n\t\tcursor: pointer;\n\t}\n\t#Salir {\n\t\tleft: 1839px;\n\t\ttop: 62px;\n\t\tposition: absolute;\n\t\toverflow: visible;\n\t\twidth: 42px;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: Segoe UI;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 22px;\n\t\tcolor: rgba(0,0,0,1);\n\t}\n" }} />
        <div id="User_Gastos_comunes">

        <HighchartsReact highcharts = {Highcharts} options={options} />

          <svg className="DatoRectanguloGastoDepto">
            <rect id="DatoRectanguloGastoDepto" rx={0} ry={0} x={0} y={0} width={105} height={21}>
            </rect>
          </svg>
          
          <svg className="Rectngulo_14">
            <rect id="Rectngulo_14" rx={0} ry={0} x={0} y={0} width={80} height={15}>
            </rect>
          </svg>


          <div id="DatoGastoDepto">
            <span>$ 234.802</span>
          </div>

          <div id="Gasto_Despto">
            <span>Gasto Despto</span>
          </div>

          <svg className="Rectngulo_15">
            <rect id="Rectngulo_15" rx={0} ry={0} x={0} y={0} width={105} height={21}>
            </rect>
          </svg>

          <svg className="RectanguloGastoAgua">
            <rect id="RectanguloGastoAgua" rx={0} ry={0} x={0} y={0} width={75} height={15}>
            </rect>
          </svg>
          <svg className="patata">
            <rect id="RectanguloGastoAgua" rx={0} ry={0} x={0} y={0} width={100} height={45}>
            </rect>
          </svg>

          <div id="DatoGastoAgua" >
            <span>$ 234.802</span>
          </div>

          <div id="Gasto_Agua">
          <span>Agua</span>
          </div>



          <svg className="RectanguloGastoEstacionamiento">
            <rect id="RectanguloGastoEstacionamiento" rx={0} ry={0} x={0} y={0} width={105} height={21}>
            </rect>
          </svg>



          <svg className="Rectngulo_18">
            <rect id="Rectngulo_18" rx={0} ry={0} x={0} y={0} width={105} height={15}>
            </rect>
          </svg>

          <div id="DatoGastoEstacionamiento">
            <span>$ 234.802</span>
          </div>

          <div id="Gasto_Estacionamiento">
            <span>Gasto Estacionamiento</span>
          </div>




          <svg className="RectanguloMontoMes">
            <rect id="RectanguloMontoMes" rx={0} ry={0} x={0} y={0} width={105} height={21}>
            </rect>
          </svg>




          <svg className="Rectngulo_20">
            <rect id="Rectngulo_20" rx={0} ry={0} x={0} y={0} width={80} height={15}>
            </rect>
          </svg>
          <div id="DatoMontoMes">
            <span>$ 234.802</span>
          </div>
          <div id="Monto_del_mes">
            <span>Monto del mes</span>
          </div>




          <svg className="Rectngulo_11">
            <rect id="Rectngulo_11" rx={0} ry={0} x={0} y={0} width={1919} height={154}>
            </rect>
          </svg>
          <div id="Reclamos">
            <span>Reclamos</span>
          </div>
          <div id="Gastos_Comunes">
            <span>Gastos Comunes</span>
          </div>
          <div id="Bodega">
            <span>Bodega</span>
          </div>

          <svg className="RectanguloInteresMora">
            <rect id="RectanguloInteresMora" rx={0} ry={0} x={0} y={0} width={104} height={21}>
            </rect>
          </svg>
          <svg className="Trazado_1" viewBox="0 0 105.521 15.362">
            <path id="Trazado_1" d="M 0 0 L 105.5209503173828 0 L 105.5209503173828 15.3617115020752 L 0 15.3617115020752 L 0 0 Z">
            </path>
          </svg>
          <div id="DatoInteresMora">
            <span>$ 234.802</span>
          </div>

          <svg className="DatoRectanguloDeuda">
            <rect id="DatoRectanguloDeuda" rx={0} ry={0} x={0} y={0} width={106} height={21}>
            </rect>
          </svg>

          <svg className="Rectangulo">
            <rect id="Rectangulo" rx={0} ry={0} x={0} y={0} width={106} height={15}>
            </rect>
          </svg>
          <div id="DatoDeuda">
            <span>$ 234.802</span>
          </div>
          <div id="Inters_por_mora">
            <span>Interés por mora</span>
          </div>
          <div id="Deuda">
            <span>Deuda</span>
          </div>
          <div id="Cristbal__Eduardo">
            <span>Cristóbal <br />Eduardo</span>
          </div>
          <svg className="Rectngulo_25">
            <rect id="Rectngulo_25" rx={0} ry={0} x={0} y={0} width={214} height={13}>
            </rect>
          </svg>
          <svg className="Lnea_16" viewBox="0 0 1 744.495">
            <path id="Lnea_16" d="M 0 0 L 1 744.4948120117188">
            </path>
          </svg>
          <svg className="Lnea_17" viewBox="0 0 1591.994 5">
            <path id="Lnea_17" d="M 0 5 L 1591.994140625 0">
            </path>
          </svg>
          <svg className="Lnea_18" viewBox="0 0 1611.994 7.631">
            <path id="Lnea_18" d="M 0 0 L 1611.994140625 7.630859375">
            </path>
          </svg>
          <svg className="AprobarPlanilla">
            <rect id="AprobarPlanilla" rx={16} ry={16} x={0} y={0} width={201} height={75}>
            </rect>
          </svg>
          <svg className="RegistrarReclamo">
            <rect id="RegistrarReclamo" rx={19} ry={19} x={0} y={0} width={194} height={75}>
            </rect>
          </svg>

          <div id="Aprobar_Planilla">
            <span>Aprobar Planilla</span>
          </div>
          
          <div id="Registrar_Reclamo">
            <span>Registrar Reclamo</span>
          </div>

          <svg className="Lnea_21" viewBox="0 0 1 752">
            <path id="Lnea_21" d="M 0 0 L 0 752">
            </path>
          </svg>
          <svg className="RectanguloTotalPagar" viewBox="0 0 121.311 23">
            <path id="RectanguloTotalPagar" d="M 0 0 L 37.13742065429688 0 L 121.3109130859375 0 L 121.3109130859375 23 L 0 23 L 0 0 Z">
            </path>
          </svg>



          <svg className="DatoRectanguloTotalPagar">
            <rect id="DatoRectanguloTotalPagar" rx={0} ry={0} x={0} y={0} width={122} height={32}>
            </rect>
          </svg>

          <div id="Total_a_pagar">
            <span>Total a pagar</span>
          </div>
          <div id="DatoTotalPAgar">
            <span>$533.202</span>
          </div>
          <svg className="Trazado_3" viewBox="0 0 64 54">
            <path onclick="application.goToTargetView(event)" id="Trazado_3" d="M 27 0 L 37 0 C 51.91168975830078 0 64 12.08831119537354 64 27 C 64 38.75031280517578 56.49396133422852 48.74749755859375 45.74683380126953 52.55171203613281 C 43.19585037231445 53.45666885375977 40.161376953125 54 37 54 L 27 54 C 12.08831119537354 54 0 41.91168975830078 0 27 C 0 12.08831119537354 12.08831119537354 0 27 0 Z">
            </path>
          </svg>
          <div id="Salir">
            <span>Salir</span>
          </div>
        </div>

            </div>
        )
    }
}
