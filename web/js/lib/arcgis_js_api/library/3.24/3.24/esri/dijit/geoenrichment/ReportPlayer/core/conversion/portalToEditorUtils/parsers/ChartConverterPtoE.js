// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/ChartConverterPtoE","dojo/_base/lang esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/utils/ImageUtil esri/dijit/geoenrichment/utils/JsonXmlConverter ../../../charts/chartUtils/ChartJsonUtil ../../ConversionUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/ChartTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendTypes ./_FieldInfoBuilder".split(" "),function(w,
F,G,h,x,d,y,D,u){function v(a,d){return void 0===a?d:Number(a)||d}function H(a,d,f){return h.queryJson(a,"series").filter(function(a){return a.tags&&a.tags[0]&&"point"===a.tags[0].name}).map(function(c){if(!c.tags)return null;c.attributes=c.attributes||{};return{label:c.attributes.Text||"",color:A(c.attributes.color),thickness:c.attributes.thickness,points:c.tags.map(function(c,f){c.attributes=c.attributes||{};var k=a.attributes.type===y.GAUGE&&1===f,g=c.tags&&c.tags[0];if((g=(g=g&&g.attributes&&
g.attributes.f)&&u.getCalculatorOrScriptFieldInfo(g,d))||k){var k=(k=c.attributes.CaptionField)&&u.getCalculatorOrScriptFieldInfo(k,d),b=h.queryJson(c,"pointIcon")[0],b=b&&d.parsers.getParser("field").parseField(b.tags[0],b,null,d);return x.createChartPoint(g,c.attributes.Text,A(c.attributes.color),b,k)}}).filter(function(a){return!!a})}}).filter(function(a){return a&&a.points&&!!a.points.length})}function E(a,d){var f={gridLines:a.gridlines,gridLinesCentered:a.gridlinesCentered,gridLinesOpacity:v(a.gridlinesOpacity,
1),gridLinesColor:a.gridlinesColor,gridLinesThickness:Number(a.gridlinesThickness)||void 0,gridLinesStyle:a.gridlinesStyle,gridStripes:a.gridStripes,gridStripesColor:a.gridStripesColor,gridStripesColorAlt:a.gridStripesColorAlt};d&&w.mixin(f,{baseLine:a.baseLine,baseLineColor:a.baseLineColor,baseLineOpacity:v(a.baseLineOpacity,1),baseLineThickness:Number(a.baseLineThickness)||void 0,baseLineStyle:a.baseLineStyle,baseLineValue:a.baseLineValue});return f}function I(a){return(a=h.queryJson(a,"BackImage")[0])&&
a.tags&&"#text"===a.tags[0].name?G.base64DataToDataURL(a.tags[0].text):null}function J(a){if("string"!==typeof a)return 0;a=a.replace("%","");return"0"===a?0:a.replace("0.","").length}function A(a){a&&"string"===typeof a&&(a=6===a.length&&-1===a.indexOf("#")?"#"+a:F.toCSSColor(a));return a}return{portalToEditor:function(a,z,f){var c=h.queryJson(a,"comparisonInfo")[0],q;if(c){var r=c.attributes.name,k=f.templateJson.metadata.comparisonCalculatorsHash[r];k&&(q={calculatorName:r,chartType:c.attributes.chartType,
color:c.attributes.color,lineThickness:Number(c.attributes.lineThickness)||void 0,lineStyle:c.attributes.lineStyle,lineMarker:c.attributes.lineMarker,levels:k.levels})}var g=H(a,f,q);if(!g.length)return null;var b=a.attributes,t=h.queryJson(a,"chartTitle")[0],c=h.queryJson(a,"legend")[0],m=h.queryJson(a,"xAxis")[0],n=h.queryJson(a,"yAxis")[0],r=h.queryJson(a,"chartIcon"),r=h.queryJson(a,"chartIcon"),k=h.queryJson(a,"floatingIcon"),B=h.queryJson(a,"floatingText"),C=h.queryJson(a,"trigger");t.attributes=
t.attributes||{};c.attributes=c.attributes||{};var p=m&&m.attributes||{},l=n&&n.attributes||{},u=p,v=l;f.isGraphicReport&&1.3>f.revisionVersion&&(u=l,v=p);g.forEach(function(a){a.thickness=Number(a.thickness)});var e;y.isColumnBarLike(b.type)&&(e=1<g[0].thickness?"Large":1>g[0].thickness?"Small":"Medium");m=m&&m.tags&&m.tags[0].attributes&&m.tags[0].attributes;n=n&&n.tags&&n.tags[0].attributes&&n.tags[0].attributes;a=I(a);e={isChart:!0,type:b._type||b.type,isMultiFeatureChart:!!b.isMultiFeatureChart,
seriesItems:g,visualProperties:{width:d.ptToPx(b.width),height:d.ptToPx(b.height),backgroundColor:A(b.backColor),panelBackgroundColor:b.panelBackgroundColor,barBorders:b.barBorders,dataLabels:b.dataLabels,view3D:!!b.view3D,origin:Number(b.origin)||0,lineThickness:b.type===y.LINE&&g[0].thickness||void 0,columnThickness:e,backgroundImageData:a,dataLabelsDecimals:J(b.CustomPercentFormat||b.CustomValueFormat),title:{text:t.attributes.text,align:t.attributes.align&&t.attributes.align.toLowerCase(),style:d.ptToPxObj(d.parseStyleString(t.attributes.style))},
xAxis:Object.assign({show:"None"!==p.placement,showTicks:p.ticks,style:d.ptToPxObj(d.parseStyleString(p.style)),title:m&&m.text,titleStyle:m&&d.ptToPxObj(d.parseStyleString(m.style)),placement:"OtherSide"===p.placement?"OtherSide":void 0,labelsAngle:Number(p.labelsAngle)||0,showLine:p.line,lineColor:p.lineColor,ticksInside:p.ticksInside},E(u,!1)),yAxis:Object.assign({show:"None"!==l.placement,showTicks:l.ticks,style:d.ptToPxObj(d.parseStyleString(l.style)),title:n&&n.text,titleStyle:n&&d.ptToPxObj(d.parseStyleString(n.style)),
placement:"OtherSide"===l.placement?"OtherSide":void 0,labelsAngle:Number(l.labelsAngle)||0,showLine:l.line,lineColor:l.lineColor,ticksInside:l.ticksInside,showPercentIndicator:l.showPercentIndicator,showValuesAsWeightsInSeries:l.showValuesAsWeightsInSeries},E(v,!0)),legend:{type:c.attributes.type||D.SERIES},dataLabelsStyle:d.ptToPxObj(d.parseStyleString(b.dataLabelsStyle)),isStacked:b.isStacked,showColumnBarBackground:b.showColumnBarBackground,columnBarBackgroundColor:b.columnBarBackgroundColor,
renderColumnBarsInOppositeDirections:b.renderColumnBarsInOppositeDirections,columnBarGap:b.columnBarGap?d.ptToPx(b.columnBarGap):void 0,fillLineArea:b.fillLineArea,donutHolePercent:Number(b.donutHolePercent)||void 0,donutGap:Number(b.donutGap)||void 0,donutArcPercent:Number(b.donutArcPercent)||void 0,gaugeHolePercent:Number(b.gaugeHolePercent)||void 0,gaugeRangeMin:Number(b.gaugeRangeMin)||void 0,gaugeRangeMax:Number(b.gaugeRangeMax)||void 0,gaugeGap:Number(b.gaugeGap)||void 0,gaugeStartAngle:Number(b.gaugeStartAngle)||
void 0,gaugeArcPercent:Number(b.gaugeArcPercent)||void 0,gaugeLabelStyle:d.ptToPxObj(d.parseStyleString(b.gaugeLabelStyle))||void 0,gaugeLabelPlacement:b.gaugeLabelPlacement||void 0,gaugeShowArrow:b.gaugeShowArrow||void 0,gaugeArrowLineColor:b.gaugeArrowLineColor||void 0,gaugeArrowFillColor:b.gaugeArrowFillColor||void 0,ringBackgroundColor:b.ringBackgroundColor,showWholePictures:b.showWholePictures,dataLabelsInside:b.dataLabelsInside,dataLabelsStackedInColumns:b.dataLabelsStackedInColumns,dataLabelsHorizontalAlign:b.dataLabelsHorizontalAlign,
showAxisIcons:b.showAxisIcons,showChartIcons:b.showChartIcons,sorting:b.sorting}};e.visualProperties.legend.type===D.MIN_MAX?w.mixin(e.visualProperties.legend,{minMax:{placement:c.attributes.placement,placementOffset:Number(c.attributes.placementOffset)||0,titleStyle:d.ptToPxObj(d.parseStyleString(c.attributes.titleStyle)),minVariableLabelStyle:d.ptToPxObj(d.parseStyleString(c.attributes.minVariableLabelStyle)),maxVariableLabelStyle:d.ptToPxObj(d.parseStyleString(c.attributes.maxVariableLabelStyle))}}):
w.mixin(e.visualProperties.legend,{series:{placement:c.attributes.placement,placementOffset:Number(c.attributes.placementOffset)||0,hasBorder:c.attributes.hasBorder,labelParts:c.attributes.labelParts,style:d.ptToPxObj(d.parseStyleString(c.attributes.style))}});1.2>f.revisionVersion&&(void 0!==e.visualProperties.donutGap&&(e.visualProperties.donutGap/=2*Math.PI),void 0!==e.visualProperties.gaugeGap&&(e.visualProperties.gaugeGap/=2*Math.PI));r&&r.length&&(e.visualProperties.chartIcons=r.map(function(a){return a.tags&&
a.tags[0]?f.parsers.getParser("field").parseField(a.tags[0],a,null,f):null}));k&&k.length&&(e.visualProperties.floatingIcons=k.map(function(a){return f.parsers.getParser("section").parseTable(a.tags[0],f)}));B&&B.length&&(e.visualProperties.floatingTexts=B.map(function(a){return f.parsers.getParser("section").parseTable(a.tags[0],f)}));C&&C.length&&(e.visualProperties.conditionalStyling=f.parsers.getParser("field").parseFieldTrigger(C[0]));e.comparisonInfo=q;q={};z.attributes&&z.attributes.style&&
w.mixin(q,d.parseStyleString(z.attributes.style));d.ptToPxObj(q);x.provideDefaultValueForMissing(e,{font:q});x.cleanUpJson(e);return e}}});