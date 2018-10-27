// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/FeatureTableWrapper/templates/FeatureTableWrapper.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d "_bcNode" class\x3d"esri-feature-table-wrapper-border-container" data-dojo-type\x3d"dijit.layout.BorderContainer" gutters\x3d"false"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d "_cpLeadingNode" class\x3d"esri-feature-table-wrapper-content-pane" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'leading\', liveSplitters:true"  style\x3d "width: 100%; height: 100%;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_gridNode" style\x3d "width: 100%; height: 100%;"\x3e\x3c/div\x3e    \r\n    \x3c/div\x3e   \r\n    \x3cdiv data-dojo-attach-point\x3d "_cpCenterNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'center\', liveSplitters:true" style\x3d "height: 100%; display:none;"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d "_cpTrailingNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'trailing\'" style\x3d "height: 100%; display:none;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/FeatureTableWrapper","dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_WidgetBase dojo/aspect dojo/Deferred dojo/has dojo/on dojo/string dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/_base/lang dojo/fx dojo/dom dojo/dom-construct dojo/dom-style dojo/dom-class dojo/dom-geometry dgrid/util/misc ../kernel ../IdentityManager ../layers/FeatureLayer ../dijit/FeatureTable ../dijit/FeatureLayerQueryStore dijit/Menu dijit/MenuItem dijit/a11yclick dijit/form/DropDownButton dijit/form/Button dijit/layout/BorderContainer dijit/layout/ContentPane dojo/text!./FeatureTableWrapper/templates/FeatureTableWrapper.html".split(" "),
function(m,y,z,J,u,A,l,v,k,B,C,h,K,L,n,p,M,N,q,D,O,w,E,r,F,G,t,P,Q,H,x,I){m=B([z,m,y],{declaredClass:"esri.dijit.FeatureTableWrapper",baseClass:"esri-feature-table-wrapper",templateString:I,domNode:null,featureLayer:null,editable:!0,hiddenFields:null,fieldInfos:null,gridOptions:null,dateOptions:null,selectedRows:null,selectedRowIds:null,outFields:null,syncSelection:!0,zoomToSelection:!0,showDataTypes:!1,showGridHeader:!0,showGridMenu:!0,showFeatureCount:!0,showColumnHeaderTooltips:!0,showRelatedRecords:!1,
showDestinationRelationships:!1,showAttachments:!1,batchCount:50,css:{relatedBC:"esri-feature-table-related-border-container",relatedCPLeading:"esri-feature-table-related-leading-content-pane",buttonNode:"esri-feature-table-button",columnChangeMenuNode:"esri-feature-table-column-change-menu",iconUIDown:"icon-ui-down",iconUIMenu:"icon-ui-menu",iconUIClose:"icon-ui-close"},showFieldDetails:!0,showCyclicalRelationships:!1,_columnRules:null,_relatedTableInfos:null,_subLayouts:null,_activePromises:null,
_popupDateFormats:{shortDate:{datePattern:"M/d/y"},shortDateLE:{datePattern:"d/M/y"},longMonthDayYear:{datePattern:"MMMM d, y"},dayShortMonthYear:{datePattern:"d MMM y"},longDate:{datePattern:"EEEE, MMMM d, y",selector:"date"},shortDateShortTime:{datePattern:"M/d/y",timePattern:"h:mm a",timeEnabled:!0},shortDateLEShortTime:{datePattern:"d/M/y",timePattern:"h:mm a",timeEnabled:!0},shortDateShortTime24:{datePattern:"M/d/y",timePattern:"H:mm",timeEnabled:!0},shortDateLEShortTime24:{datePattern:"d/M/y",
timePattern:"H:mm",timeEnabled:!0},shortDateLongTime:{datePattern:"M/d/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLELongTime:{datePattern:"d/M/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLongTime24:{datePattern:"M/d/y",timePattern:"H:mm:ss",timeEnabled:!0},shortDateLELongTime24:{datePattern:"d/M/y",timePattern:"H:mm:ss",timeEnabled:!0},longMonthYear:{datePattern:"MMMM y"},shortMonthYear:{datePattern:"MMM y"},year:{datePattern:"y"}},constructor:function(a,b){this.hiddenFields=[];this._columnRules=
{};this._relatedTableInfos=[];this._subLayouts=[];this._activePromises=[];this._buttonInfos={}},startup:function(){this.inherited(arguments);this._generatePrimaryTable()},destroy:function(){this.inherited(arguments);0<this._activePromises.length&&k.forEach(this._activePromises,function(a){a.cancel()})},_generateFeatureTable:function(a){var b=a.layer,d=a.node,e=isNaN(a.layerId)||null===a.layerId?isNaN(b.layerId)||null===b.layerId?null:b.layerId:a.layerId;a=a.filterIds||null;var c=[],f=!this.featureTable&&
this.showFieldDetails,g;this.layerInfos&&(g=(g=(g=(g=this.layerInfos[e]||null)?g.popupInfo:null)?g.fieldInfos:null)?this._updatePopupInfosDateFormat(g):null);e&&c.push(e);this.featureTable&&this.featureTable.featureLayer&&c.push(this.featureTable.featureLayer.layerId);k.forEach(this._relatedTableInfos,function(a){c.push(a.layer.layerId)});b=new E({featureLayer:b,editable:this.editable,fieldInfos:g,gridOptions:this.gridOptions,dateOptions:this.dateOptions,hiddenFields:this.hiddenFields,showAttachments:this.showAttachments,
showRelatedRecords:this.showRelatedRecords,showDestinationRelationships:this.showDestinationRelationships,showGridMenu:this.showGridMenu,showDataTypes:this.showDataTypes,showGridHeader:this.showGridHeader,showFeatureCount:this.showFeatureCount,menuFunctions:this.menuFunctions,batchCount:this.batchCount,showStatistics:this.showStatistics,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showFieldDetails:f,filterIds:a,visibleLayerIds:c,showCyclicalRelationships:this.showCyclicalRelationships},
d);b.own(l(b,"error",h.hitch(this,function(a){this.emit("error",a)})),l(b,"edits-complete",h.hitch(this,function(a){this.emit("edits-complete",a)})));b.startup();return b},_generatePrimaryTable:function(){var a=this._generateFeatureTable({layer:this.featureLayer,node:this._gridNode});this.featureTable=a;this._buttonInfos[a.id]={columnHider:this._generateColumnHiderButton(a)};a.on("show-related-records",h.hitch(this,function(b){var d=this._buttonInfos[a.id];this._removeButton(d.columnHider);d.columnHider=
null;a.showFieldDetails=!1;a.showFeatureCount=!1;a._updateGridHeaderText();this._shrinkTable({table:a,leadingPane:this._cpLeadingNode,centerPane:this._cpCenterNode,columnId:b.columnId}).then(h.hitch(this,function(e){d.column=this._generateColumnPickerButton(a);a.columns.push({unhidable:!0,label:"ft_related-records-small",field:"ft_related-records-small",get:function(c){c=a._getRelatedRecordsByIds(c[a.idProperty],b.relationship.id);return v.substitute(a._i18nStrings.parenValue,{value:c&&c.features?
c.features.length:0})}});a.grid.set("selectionMode","single");a.refresh();a.selectRows([b.row[a.idProperty]]);return this._generateRelatedRecordsTable({parentLayer:this.featureLayer,parentTable:e,relationshipInfos:b,attachNode:this._cpCenterNode})})).then(h.hitch(this,function(a){this._wireUpRelatedRecordsTable(a)}))}));a.on("show-detailed-field-view",h.hitch(this,function(b){var d=b.columnId,e=b.fieldInfo,c=this._buttonInfos[a.id];this._removeButton(c.columnHider);c.columnHider=null;a.showFeatureCount=
!1;a.showFieldDetails=!1;a._updateGridHeaderText();this._shrinkTable({table:a,leadingPane:this._cpLeadingNode,centerPane:this._cpCenterNode,columnId:d,finalWidth:this._cpLeadingNode.domNode.getBoundingClientRect().width/6}).then(h.hitch(this,function(){c.column=this._generateColumnPickerButton(a);this.emit("show-detailed-field-view",{columnId:d,table:a,fieldInfo:e})}))}))},_generateRelatedRecordsTable:function(a){var b=new u,d=a.relationshipInfos,e=a.attachNode,c=a.parentTable,f,g;g=k.map(d.records,
function(a){return a.attributes[c.idProperty]});e=this._generateSubLayout(e.domNode);a=this._generateFeatureLayer(d.relationship.relatedTableId);g=this._generateFeatureTable({layer:a,layerId:d.relationship.relatedTableId,node:e.gridContainer,filterIds:g});this._buttonInfos[g.id]={columnHider:this._generateColumnHiderButton(g),close:this._generateRelatedTableCloseButton(g)};f={layout:e,layer:a,table:g,relationshipInfos:d,parentTable:c};this._relatedTableInfos.push(f);this.own(l.once(g,"load",h.hitch(this,
function(){this._activePromises.splice(k.indexOf(b),1);b.resolve(f)})));this._activePromises.push(b);return b},_wireUpRelatedRecordsTable:function(a){var b=this._relatedTableInfos.indexOf(a),d=a.parentTable,e=a.relationshipInfos,c=a.table;this._setUpRelatedTableEvents(a,d);c.own(l(d,"row-select",h.hitch(this,function(a){var g=this.featureLayer.objectIdField;a=d._getRelatedRecordsByIds(a[0].data[g],e.relationship.id);var f=b===this._relatedTableInfos.length-1;if(a)if(a=k.map(a.features,function(a){return a.attributes[g]}),
c.set("filterIds",a),c._updateGridHeaderText(),c.dataStore instanceof r){if(f=c._generateCacheStore(a),c.grid.set("store",f),c.set("dataStore",f),b!==this._relatedTableInfos.length-1){a=a[0];var h={data:{}};h.data[g]=a;c.selectRows([a]);setTimeout(function(){c.emit("row-select",[h])},500)}}else c._updateGridHeaderText(),c.refresh(),b!==this._relatedTableInfos.length-1&&c.selectRows([a[0]]);else if(f)c.dataStore instanceof r&&(c.grid.store=null),c.set("filterIds",[]),c._updateGridHeaderText(),c.refresh();
else for(a=this._relatedTableInfos.length-1;a>=b;a--)if(f=this._relatedTableInfos[a].table)f.dataStore instanceof r&&(f.grid.store=null),f.set("filterIds",[]),c._updateGridHeaderText(),f.refresh()})))},_setUpRelatedTableEvents:function(a){var b=a.table,d=a.layout,e=a.layer;b.on("show-related-records",h.hitch(this,function(a){var c=this._buttonInfos[b.id];this._removeButton(c.columnHider);this._removeButton(c.close);c.columnHider=null;c.close=null;b.showFieldDetails=!1;b.showFeatureCount=!1;b._updateGridHeaderText();
this._shrinkTable({table:b,leadingPane:d.contentPaneLeading,centerPane:d.contentPaneCenter,columnId:a.columnId}).then(h.hitch(this,function(f){c.column=this._generateColumnPickerButton(b);b.columns.push({unhidable:!0,label:"ft_related-records-small",field:"ft_related-records-small",get:function(c){c=b._getRelatedRecordsByIds(c[b.idProperty],a.relationship.id);return v.substitute(b._i18nStrings.parenValue,{value:c&&c.features?c.features.length:0})}});b.grid.set("selectionMode","single");b.refresh();
b.selectRows([a.row[b.idProperty]]);return this._generateRelatedRecordsTable({parentLayer:e,parentTable:f,relationshipInfos:a,attachNode:d.contentPaneCenter})})).then(h.hitch(this,function(a){this._wireUpRelatedRecordsTable(a)}))}))},_generateFeatureLayer:function(a){var b=this.featureLayer._url.path,b=b.substring(0,b.lastIndexOf("/")+1);return new w(b+a,{mode:w.MODE_ONDEMAND,outFields:["*"],visible:!0})},_updatePopupInfosDateFormat:function(a){k.forEach(a,function(a){a.format&&a.format.dateFormat&&
(a.format.dateFormat=this._popupDateFormats[a.format.dateFormat])},this);return a},_showPane:function(a){p.set(a.domNode,"display","block")},_hidePane:function(a){p.set(a.domNode,"display","none")},_generateSubLayout:function(a){var b=new H({className:this.css.relatedBC,gutters:!1,design:"headline"}),d=new x({region:"leading",className:this.css.relatedCPLeading}),e=n.create("div",{},d.domNode),c=new x({region:"center",style:"display: none;"});b.addChild(d);b.addChild(c);b.placeAt(a);b.startup();return{borderContainer:b,
contentPaneLeading:d,contentPaneCenter:c,gridContainer:e}},_shrinkTable:function(a){var b=new u,d=a.table,e=a.leadingPane,c=a.centerPane,f=a.columnId,g=a.finalWidth||220;a=C.animateProperty({node:e.id,properties:{width:{start:function(){return e.domNode.getBoundingClientRect().width},end:h.hitch(this,function(){return g})}}}).play();l(a,"End",h.hitch(this,function(a){this._addHiddenColumnRules(d,f);this._showPane(c);this._bcNode.resize();d.resize();this._activePromises.splice(k.indexOf(b),1);b.resolve(d)}));
this._activePromises.push(b);return b},_removeTable:function(a){a=this.featureTable._findFirst(this._relatedTableInfos,"table",a);var b=k.indexOf(this._relatedTableInfos,a),d;this._hidePane(a.layout.contentPaneCenter);this._bcNode.resize();k.forEach(this._relatedTableInfos,function(a,c){if(c>=b){a.layout.borderContainer.destroy();var d=a.table;if(d.loaded&&d.dataStore)d.destroy();else d.on("load",d.destroy)}});this._relatedTableInfos.splice(b);0<this._relatedTableInfos.length?(a=this._relatedTableInfos[this._relatedTableInfos.length-
1].table,d=this._relatedTableInfos[this._relatedTableInfos.length-1]):a=this.featureTable;this._growTable({table:a,info:d||[]})},_growTable:function(a){var b=a.table,d=a.info;a=b.columns;var e,c=this._buttonInfos[b.id];this._removeHiddenColumnRules(b);c.column&&(this._removeButton(c.column),c.column=null);c.columnHider=this._generateColumnHiderButton(b);b===this.featureTable?(this._hidePane(this._cpCenterNode),p.set(this._cpLeadingNode.domNode,"width","100%"),this._bcNode.resize()):(e=d.layout.contentPaneLeading,
d=d.layout.contentPaneCenter,this._hidePane(d),p.set(e.domNode,"width","100%"),this._bcNode.resize(),c.close=this._generateRelatedTableCloseButton(b));"ft_related-records-small"===a[a.length-1].field&&(a.pop(),b.refresh());b.grid.set("selectionMode","extended");b.showFeatureCount=!0;b.showFieldDetails=!0;b._updateGridHeaderText();b.resize()},_addHiddenColumnRules:function(a,b){this._columnRules[a.id]&&this._removeHiddenColumnRules(a);var d=Object.keys(a.grid.columns),e="#"+q.escapeCssIdentifier(a.id)+
" .dgrid-column-",c=[],f,g,c=k.map(d,function(a,c){f=e+q.escapeCssIdentifier(c,"-");g=c===b;return q.addCssRule(f,g?"display: table-cell;":"display: none;")});this._columnRules[a.id]=c},_removeHiddenColumnRules:function(a){this._columnRules[a.id]&&(k.forEach(this._columnRules[a.id],function(a,d){a.remove()}),this._columnRules[a.id]=[])},_generateRelatedTableCloseButton:function(a){var b;b=n.create("div",{className:this.css.buttonNode+" "+this.css.iconUIClose,tabIndex:0},a._gridHeaderNode.domNode);
l(b,t,h.hitch(this,function(){this._removeButton(this._buttonInfos[a.id].close);this._removeTable(a)}));return{buttonNode:b}},_generateColumnHiderButton:function(a){var b;b=n.create("div",{className:this.css.buttonNode+" "+this.css.iconUIMenu,tabIndex:0},a._gridHeaderNode.domNode);l(b,t,function(){a.grid._toggleColumnHiderMenu()});return{buttonNode:b}},_generateColumnPickerButton:function(a){var b=a._gridHeaderNode.domNode,d,e;e=this._generateColumnPickerMenu(a);d=n.create("div",{className:this.css.buttonNode+
" "+this.css.iconUIDown,tabIndex:0},b);l(d,t,function(a){e._openMyself({target:a.target,delegatedTarget:d,iframe:null,coords:{x:a.pageX,y:a.pageY}})});return{buttonNode:d}},_generateColumnPickerMenu:function(a){var b=new F({className:this.css.columnChangeMenuNode});k.forEach(a.columns,function(d,e){var c=parseInt(d.id,10),f=a._findFirst(a.layerInfo.fieldInfos,"name",d.field);if("ft_related-records"!==d.type&&"ft_related-records-small"!==d.field&&"ft_attachments"!==d.type&&"esriFieldTypeOID"!==f.type&&
"esriFieldTypeGUID"!==f.type&&"esriFieldTypeGlobalID"!==f.type&&-1===k.indexOf(a._unsupportedFieldTypes,f.type)){var g=new G({label:d.label,onClick:h.hitch(this,function(){this._addHiddenColumnRules(a,c);this.emit("column-focus-change",{fieldInfo:f,column:d})})});b.addChild(g)}},this);b.startup();return b},_removeButton:function(a){a&&a.buttonNode&&a.buttonNode.parentNode&&a.buttonNode.parentNode.removeChild(a.buttonNode)}});A("extend-esri")&&h.setObject("dijit.FeatureTableWrapper",m,D);return m});