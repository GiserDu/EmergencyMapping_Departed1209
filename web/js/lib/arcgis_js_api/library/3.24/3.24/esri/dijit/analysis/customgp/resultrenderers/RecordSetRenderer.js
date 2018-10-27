// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/resultrenderers/RecordSetRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"output-label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"labelContent"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"control-section"\x3e\r\n    \x3cdiv class\x3d"clear-node jimu-float-trailing" data-dojo-attach-point\x3d"clearNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"popup-menu-button jimu-float-trailing" data-dojo-attach-point\x3d"exportNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"magnify-node jimu-float-trailing" data-dojo-attach-point\x3d"magnifyNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"table-node" data-dojo-attach-point\x3d"tableNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/customgp/resultrenderers/RecordSetRenderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/on dojo/dom-geometry dijit/_TemplatedMixin dojo/store/Memory dgrid/OnDemandGrid dgrid/extensions/ColumnResizer ../common/dijit/Popup dojo/text!./RecordSetRenderer.html ../BaseResultRenderer ../utils".split(" "),function(h,e,f,c,b,g,k,w,m,n,p,q,r,t,u,v){return h([u,m],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-table",
templateString:t,postCreate:function(){this.inherited(arguments);var a=[];if(this.value.features&&0!==this.value.features.length){b.set(this.magnifyNode,"display","");if(!v.useDynamicSchema(this.param,this.config)&&this.param.defaultValue&&this.param.defaultValue.output&&this.param.defaultValue.output.fields&&0<this.param.defaultValue.output.fields.length)a=this.param.defaultValue.output.fields;else if(this.value.fields)a=this.value.fields;else if(this.value.features&&0<this.value.features.length)for(var d in this.value.features[0].attributes)a.push({name:d});
this.config.shareResults&&(b.set(this.clearNode,"display",""),g.set(this.clearNode,"title",this.nls.clear),this.own(k(this.clearNode,"click",e.hitch(this,function(){b.set(this.exportNode,"display","none");b.set(this.clearNode,"display","none");b.set(this.magnifyNode,"display","none");this.labelContent.innerHTML=this.nls.cleared;c.empty(this.tableNode);this.table&&this.table.destroy()}))));d=f.map(this.value.features,function(a){return a.attributes});g.set(this.magnifyNode,"title",this.nls.enlargeView);
this.own(k(this.magnifyNode,"click",e.hitch(this,this.magnifyTable)));this.config.showExportButton&&(g.set(this.exportNode,"title",this.nls.exportOutput),b.set(this.exportNode,"display",""));var a=f.map(a,function(a){return{label:a.alias||a.name,field:a.name}}),l;f.some(this.value.fields,function(a){if("esriFieldTypeOID"===a.type)return l=a.name,!0});d=new n({data:d,idProperty:l});this.table=new (h([p,q]))({columns:a,store:d});c.place(this.table.domNode,this.tableNode)}else b.set(this.clearNode,"display",
"none"),b.set(this.exportNode,"display","none"),b.set(this.magnifyNode,"display","none"),this.tableNode.innerHTML=this.nls.emptyResult},startup:function(){this.inherited(arguments);this.table.startup()},magnifyTable:function(){var a=c.create("div",{"class":"gp-table-magnified"});c.place(this.table.domNode,a);a=new r({content:a,titleLabel:this.param.tooltip||this.param.label||"",container:"main-page",onClose:e.hitch(this,function(){c.place(this.table.domNode,this.tableNode);this.table.resize()})});
b.set(a.domNode,{top:"5%",left:"5%",width:"90%",height:"90%"});a.startup();this.table.resize()}})});