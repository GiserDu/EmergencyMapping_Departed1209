// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/iconRendering/IconRenderer","dojo/_base/declare dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/Destroyable ../chartUtils/ChartTypes ../chartUtils/builder/ChartPlots ../chartUtils/plots/supportClasses/GaugeLabelPlacement ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder ../../supportClasses/TableUtil ../../infographics/infographicUtils/InfographicThemeUtil esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes".split(" "),
function(g,t,C,l,z,h,m,A,n,B,p,w,x,y){g=g(z,{renderIcons:function(a){this._destroyIcons();var b=this._getRenderFunction(a.chartType);b&&this[b](a);this._renderFloatingIcons(a)},_getRenderFunction:function(a){switch(a){case h.GAUGE:return"_renderDonutIcons";case h.DONUT:return"_renderDonutIcons";case h.RING:return"_renderRingIcons";case h.COLUMN:return"_renderColumnIcons";case h.BAR:return"_renderBarIcons"}return null},_renderDonutIcons:function(a){if(a.visualProperties.showChartIcons){var b=a.chart.getPlot(m.PRIMARY).getRenderResults();
if(b){var d=t.create("div",{"class":"chartContainer_chartIcon"},a.iconNode),e=b.radiusInner,f=0,c=1;a.chartType===h.GAUGE&&(c=Math.max(.6,b.ryMultiplier),a.visualProperties.gaugeLabelPlacement===A.INSIDE&&(f=b.chartIconOffset,e=Math.min(e,b.maxIconSize)));f=(a.chartH/c-e+f)/2+(b.chartShiftY||0);f=Math.min(f,a.chartH-e-10);l.set(d,{width:e+"px",height:e+"px",left:(a.chartW-e)/2+(b.chartShiftX||0)+"px",top:f+"px"});this._createIconSection(a,a.visualProperties.chartIcons&&a.visualProperties.chartIcons[0]||
this._getDefaultIcon(),e,d)}}},_renderRingIcons:function(a){if(a.visualProperties.showChartIcons){var b=a.chart.getPlot(m.PRIMARY).getRenderResults();if(b){b.slicePies.sort(function(a,b){return a.r-b.r});var d=b.slicePies[0],e=b.slicePies[b.slicePies.length-1],f=t.create("div",{"class":"chartContainer_chartIcon"},a.iconNode),c=0;b.labels?(c=Math.max(50,.8*Math.min(2*d.r,Math.min(b.maxLabelWidth,a.chartW-(e.cx+e.r)))),l.set(f,{width:c+"px",height:c+"px",left:Math.max(e.cx+e.r+15,e.cx+e.r+b.maxLabelWidth/
2-c/2)+"px",top:e.cy-c/2+"px"})):(c=1.4*d.r,l.set(f,{width:c+"px",height:c+"px",left:d.cx-c/2+"px",top:d.cy-c/2+"px"}));this._createIconSection(a,a.visualProperties.chartIcons&&a.visualProperties.chartIcons[0]||this._getDefaultIcon(),c,f)}}},_renderColumnIcons:function(a){this._renderAxisIcons(a,!0)},_renderBarIcons:function(a){this._renderAxisIcons(a,!1)},_renderAxisIcons:function(a,b){if(a.visualProperties.showAxisIcons){var d=this,e=a.chart.calculateGeometry(),f=a.chart.getPlot(m.PRIMARY).getMainShapes(),
c=f&&f.map(function(a){return a.rawNode});if(c){var q,r;e.series[0].data.forEach(function(a,b){void 0!==a.unsortedIndex&&(q=q||{},q[b]=a.unsortedIndex);r=r||{};r[b]=a.fill});var g;g=a.visualProperties.isStacked||a.comparisonInfo&&a.comparisonInfo.chartType===h.LINE?1:a.visualProperties.renderColumnBarsInOppositeDirections?Math.round(e.series.length/2):e.series.length;var n=x.position(a.iconNode);c.forEach(function(e,f){var m=q?q[f]:f,u=x.position(e),v=t.create("div",{"class":"chartContainer_chartIcon"},
a.iconNode),k=Math.min(50,(h.isBarLike(a.chartType)?a.chartH:a.chartW)/c.length);l.set(v,{width:k+"px",height:k+"px"});var p=a.visualProperties.xAxis.show?0:k/(b?2:3.5);b?l.set(v,{left:u.x-n.x+(u.w*g-k)/2+"px",bottom:-k+p+"px"}):l.set(v,{top:u.y-n.y+(u.h*g-k)/2+"px",left:-k+p+"px"});d._createIconSection(a,a.visualProperties.chartIcons&&a.visualProperties.chartIcons[m]||d._getDefaultIcon(),k,v,m,r&&r[f])})}}},_floatingIconsSection:null,_renderFloatingIcons:function(a){var b=a.visualProperties.floatingIcons;
if(b&&b.length){b.forEach(function(b){b=b.data.data[0].fieldInfos[b.data.columns[0].field].shapeJson;var d=a.viewModel.getChartDefaultStyles(a.theme);p.applyThemeSettingsToShapeJson(b,d)});var d={"class":"chartContainer_floatingIconSection"};d.initialWidth=a.chartW;d.json={type:w.DETAILS,stack:b};d.viewModel=a.viewModel;d.theme=a.theme;d.tableClass="chartContainerFloatingIconTable";d.hasFixedLayout=!1;d.parentWidget=a.parentWidget;this._provideParamsForFloatingIconSection(d,a);this._floatingIconsSection=
a.viewModel.layoutBuilder.createElement("section",d,a.iconNode);this._floatingIconsSection.setResizedHeight(a.chartH);this._floatingIconsSection.setViewMode(this._viewMode||y.EDIT)}},_provideParamsForFloatingIconSection:function(a,b){},_getDefaultIcon:function(){},_iconSections:null,_createIconSection:function(a,b,d,e,f,c){if(b&&(b.imageJson||b.shapeJson)){if(b.shapeJson){var g=a.viewModel.getChartDefaultStyles(a.theme);p.applyThemeSettingsToShapeJson(b.shapeJson,g);b.shapeJson.themeStyle&&c&&(b.shapeJson.themeStyle.borderColor=
c,b.shapeJson.themeStyle.fillColor=c)}b=B.createSingleCellTable({width:d,height:d,fieldInfo:b.imageJson?n.createFieldInfoFromImage(b.imageJson):n.createFieldInfoFromShape(b.shapeJson),cellStyle:{backgroundColor:"transparent"}});c={};c.initialWidth=d;c.json={type:w.DETAILS,stack:[b]};c.viewModel=a.viewModel;c.theme=a.theme;c.tableClass="chartContainerIconTable";c.hasFixedLayout=!0;c.parentWidget=a.parentWidget;this._provideParamsForIconSection(c,a);a=a.viewModel.layoutBuilder.createElement("section",
c,e);a.setResizedHeight(d);a.setViewMode(this._viewMode||y.EDIT);a.__unsortedIndex=f;this._iconSections.push(a)}},_getSectionUnsortedIndex:function(a){return a&&void 0!==a.__unsortedIndex?a.__unsortedIndex:-1},_provideParamsForIconSection:function(a,b,d){},_viewMode:null,setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._iconSections&&this._iconSections.forEach(function(b){b.setViewMode(a)}),this._floatingIconsSection&&this._floatingIconsSection.setViewMode(a))},_destroyIcons:function(){this._iconSections=
this._iconSections||[];this._iconSections.forEach(function(a){var b=a.domNode&&a.domNode.parentNode;a.destroy();b&&t.destroy(b)});this._iconSections.length=0;this._floatingIconsSection&&this._floatingIconsSection.destroy();this._floatingIconsSection=null},destroy:function(){this._destroyIcons();this.inherited(arguments)}});g.AXIS_ICON_MAX_SIZE=50;return g});