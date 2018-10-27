// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/supportClasses/InfographicValueController",["dojo/_base/declare","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer"],function(d,e){function f(a){var b=-Infinity;a.forEach(function(a){b=Math.max(b,a)});return b}return d(null,{_sections:null,_variableTables:null,constructor:function(){this._sections=[]},_samplePercentValues:[52,30,18,90,70,100],_realValues:null,setVariableTables:function(a){this._variableTables=a;this._realValues=
null},addSection:function(a){this._sections.push(a);this._realValues=null},_tryCollectRealValues:function(){if(this._realValues)return this._realValues;var a=this._sections[0].viewModel.dynamicReportInfo.fieldData;this._realValues=this._variableTables.map(function(b){return e.getFieldDataValue(b.variable.fieldInfo,a)})},getValueInfo:function(a){var b=!a.viewModel.dynamicReportInfo;a=this._sections.indexOf(a);if(b){var c=this._samplePercentValues.slice();c.length=this._sections.length;var d=f(c),b=
c.map(function(a){return a/d}),c=c[a];return{number:100*c,percent:c,normalizedValue:b[a]}}this._tryCollectRealValues();var e=f(this._realValues),b=this._realValues.map(function(a){return a/e}),c=this._realValues[a];return{number:c,percent:c,normalizedValue:b[a]}}})});