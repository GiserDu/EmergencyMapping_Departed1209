// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/customgp/common/dijit/URLInput",["dojo/_base/declare","dojo/_base/html","dijit/form/ValidationTextBox","dojox/validate/regexp","dojo/i18n!../nls/main"],function(c,d,e,f,g){return c([e],{required:!0,invalidMessage:"Invalid url.",trim:!0,rest:!0,allowNamed:!0,allowLocal:!0,declaredClass:"esri.dijit.analysis.customgp.common.dijit.URLInput",postMixInProperties:function(){this.inherited(arguments);this.invalidMessage=(this.nls=g.urlInput)?this.nls.invalidUrl:"Invalid Url"},
postCreate:function(){this.inherited(arguments);d.addClass(this.domNode,"jimu-url-input")},validator:function(b){if(!1===this.required&&""===b)return!0;if(isFinite(b))return!1;var a="^"+f.url({allowNamed:this.allowNamed,allowLocal:this.allowLocal}),a=new RegExp(a,"g");a.lastIndex=0;a=a.test(b);return this.rest?(b=/\/rest\/services/gi.test(b),a&&b):a}})});