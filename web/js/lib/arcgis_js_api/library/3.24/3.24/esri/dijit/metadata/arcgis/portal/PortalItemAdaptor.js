// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/arcgis/portal/PortalItemAdaptor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/Deferred ../../context/GxeAdaptor ../../../../kernel ../../../../request".split(" "),function(m,l,u,p,h,q,r,n){m=m([q],{itemRequiresRefresh:!1,portalItemContext:null,postCreate:function(){this.inherited(arguments)},afterEditDocumentLoad:function(c,b,a,d){var e,f=this.getItemContext(),g=f.getItem();if(g&&f.getAutoPullItem()&&!d&&(!b||b&&a))try{(e=c.documentType.newPortalItemTransformer(c))&&
e.pull(c,g)}catch(k){console.error(k)}},afterViewDocumentLoad:function(c,b){},deleteMetadata:function(){var c;return this.getItemContext().getAllowDeleteMetadata()?this.writeXml(null):(c=new h,c.reject("Metadata Adaptor: Delete metadata in not allowed."),c)},getAllowEditMetadata:function(){return this.getItemContext().getAllowEditMetadata()},getAllowDeleteMetadata:function(){return this.getItemContext().getAllowDeleteMetadata()},getAllowPullItem:function(){return this.getItemContext().getAllowPullItem()},
getAllowPushToItem:function(){return this.getItemContext().getAllowPushToItem()},getOriginalXml:function(){return this.getItemContext().getOriginalXml()},pullItem:function(c){var b=new h,a,d=this.getItemContext(),e=d.getItem();if(e&&d.getAllowPullItem())try{(a=c.documentType.newPortalItemTransformer(c))&&a.pull(c,e)}catch(f){console.error(f)}b.resolve();return b},saveXml:function(c,b,a){var d=new h,e=this.getItemContext(),f=e.getItem();if(!e.getAllowEditMetadata())return d.reject("Metadata Adaptor: Write XML in not allowed."),
d;var g=null,k;if(a&&e.getAllowPushToItem()&&f&&window.FormData)try{(k=c.documentType.newPortalItemTransformer(c))&&(g=k.generatePush(c,f))}catch(t){g=null,console.error(t)}if(null===g)return this.writeXml(b);this.writeXml(b).then(l.hitch(this,function(){this.updateItem(g).then(l.hitch(this,function(){this.itemRequiresRefresh=!0;d.resolve()}),l.hitch(this,function(a){console.error(a);d.resolve()}))}),l.hitch(this,function(a){d.reject(a)}));return d},getItemContext:function(){return this.portalItemContext},
makeMultiPartFormData:function(c){if(!window.FormData)return null;var b=new FormData,a,d=null;for(a in c)c.hasOwnProperty(a)&&(d=c[a],"snippet"!==a&&"description"!==a&&"text"!==a||null!=d||(d=""),b.append(a,d));return b},readXml:function(c){var b=new h,a=this.getItemContext(),d=a.getRestBaseUrl(),e=a.getToken(),a=a.getItemId();if(null===d)return b.reject("Metadata Adaptor: Unable to read XML, no restBaseUrl"),b;d=d+"content/items/"+encodeURIComponent(a);a={};null!==e&&(a.token=e);e={url:d+"/info/metadata/metadata.xml",
content:a,handleAs:c,preventCache:!0};"json"===c&&(e.callbackParamName="callback");n(e,{usePost:!0}).then(function(a){b.resolve(a)},function(a){b.resolve(null)});return b},updateItem:function(c){var b,a=this.getItemContext(),d=a.getRestBaseUrl(),e=a.getToken();b=a.getItemId();var f=a.getItemOwner(),g=a.getItemFolderId();c.f="json";null!==e&&(c.token=e);c=this.makeMultiPartFormData(c);if(!a.getAllowPushToItem())return b=new h,b.reject("Metadata Adaptor: Update portal item is not allowed."),b;if(null===
c)return b=new h,b.reject("Metadata Adaptor: Unable to update portal item, FormData is not supported on this browser."),b;if(null===d)return b=new h,b.reject("Metadata Adaptor: Unable to update portal item, no restBaseUrl"),b;a=d+"content/users/"+encodeURIComponent(f);"undefined"!==typeof g&&null!==g&&0<g.length&&(a+="/"+encodeURIComponent(g));a+="/items/"+encodeURIComponent(b)+"/update";return n({url:a,form:c,handleAs:"json",callbackParamName:"callback",preventCache:!0},{usePost:!0})},writeXml:function(c){var b,
a=this.getItemContext(),d=a.getRestBaseUrl(),e=a.getToken(),f=a.getItemId(),g=a.getItemOwner(),k=a.getItemFolderId();if(!a.getAllowEditMetadata())return b=new h,b.reject("Metadata Adaptor: Write XML in not allowed."),b;if(null===d)return b=new h,b.reject("Metadata Adaptor: Unable to write XML, no restBaseUrl"),b;a=d+"content/users/"+encodeURIComponent(g);"undefined"!==typeof k&&null!==k&&0<k.length&&(a+="/"+encodeURIComponent(k));a+="/items/"+encodeURIComponent(f);a=null===c?a+"/deleteinfo":a+"/update";
f=[];f.push("--387F8C2A-CFAB-443C-863B-B180E79B05F4",'Content-Disposition: form-data; name\x3d"f"',"","json");null!=e&&f.push("--387F8C2A-CFAB-443C-863B-B180E79B05F4",'Content-Disposition: form-data; name\x3d"token"',"",e);null===c?f.push("--387F8C2A-CFAB-443C-863B-B180E79B05F4",'Content-Disposition: form-data; name\x3d"infoFile"',"","metadata/metadata.xml"):(f.push("--387F8C2A-CFAB-443C-863B-B180E79B05F4",'Content-Disposition: form-data; name\x3d"overwrite"',"","true"),f.push("--387F8C2A-CFAB-443C-863B-B180E79B05F4",
'Content-Disposition: form-data; name\x3d"metadata"; filename\x3d"metadata.xml"',"Content-Type: text/xml","",c));f.push("--387F8C2A-CFAB-443C-863B-B180E79B05F4--","");e=f.join("\r\n");e={url:a,handleAs:"json",callbackParamName:"callback",preventCache:!0,headers:{"Content-Type":"multipart/form-data; boundary\x3d387F8C2A-CFAB-443C-863B-B180E79B05F4"},postData:e};this._started||this.startup();b=new h;n(e,{usePost:!0}).then(l.hitch(this,function(a){b.resolve(a);null===c?this.emit("metadata-delete",{response:a}):
this.emit("metadata-save",{response:a})}),l.hitch(this,function(a){b.reject(a)}));return b}});p("extend-esri")&&l.setObject("dijit.metadata.arcgis.portal.PortalItemAdaptor",m,r);return m});