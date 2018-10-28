// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoTooltipUtil",["dojo/string","./utils","esri/dijit/geoenrichment/utils/JsonXmlConverter","dojo/i18n!../../../../../../../nls/jsapi"],function(c,d,g,b){b=b.geoenrichment.dijit.ReportPlayer.FieldInfoDescriptions;var f={_buildMissingLabel:function(a){return c.substitute(b.missingVariableTooltip,{name:(a.variable.isScript?d.name.renderScriptName(a.variable.name):a.variable.id)||"",alias:a.alias||""})},
renderFieldInfoTooltipInTableCell:function(a){var e;a&&a.triggerJson&&a.triggerJson.fieldInfo&&(a=a.triggerJson.fieldInfo);if(a.isMissing)return f._buildMissingLabel(a);(e=d.fields.getTooltip(a.name))||(a.script?e=c.substitute(b.fieldDescriptionScript,{scriptName:d.name.renderScriptName(a.script.name),scriptAlias:a.script.alias}):a.hasVariable&&(e=c.substitute(b.fieldDescriptionVariable,{variableName:a.alias})));return e},renderFieldInfoHoverTooltipInTableCell:function(a){a&&a.triggerJson&&a.triggerJson.fieldInfo&&
(a=a.triggerJson.fieldInfo);return a.isMissing?f._buildMissingLabel(a):a.script?c.substitute(b.fieldDescriptionScriptShort,{scriptName:d.name.renderScriptName(a.script.name),scriptAlias:a.script.alias}):a.hasVariable?a.alias:a.isRichText?g.unrichHTML(a.richTextJson.xmlString):null}};return f});