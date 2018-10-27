// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/WGLBuffers",["require","exports","./enums","./Utils","../../../webgl/BufferObject"],function(p,q,l,d,r){Object.defineProperty(q,"__esModule",{value:!0});var t=new d.KeysGetter;p=function(){function f(e){this._usage=e;this.geometryMap=new Map}f.prototype.dispose=function(){for(var e=0,d=t.getKeys(this.geometryMap);e<d.length;e++){var g=this.geometryMap.get(d[e]);g.vao&&g.vao.dispose();g.indexBuffer&&g.indexBuffer.dispose();for(var h in g.vertexBufferMap)g.vertexBufferMap[h]&&
g.vertexBufferMap[h].dispose()}this.geometryMap.clear()};Object.defineProperty(f.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0});f.prototype.ensureBuffers=function(e,f,g){for(var h=0,a=t.getKeys(this.geometryMap);h<a.length;h++){var c=a[h];if(-1===f.indexOf(c)){var b=this.geometryMap.get(c);b.vao&&b.vao.dispose();b.indexBuffer&&b.indexBuffer.dispose();for(var k in b.vertexBufferMap)b.vertexBufferMap[k]&&b.vertexBufferMap[k].dispose()}this.geometryMap["delete"](c)}for(h=
0;h<f.length;h++){c=f[h];a=void 0;this.geometryMap.has(c)?(a=this.geometryMap.get(c),a.vao&&(a.vao.dispose(),a.vao=null)):(a={vertexBufferMap:{},indexBuffer:null,vao:null},this.geometryMap.set(c,a));b=void 0;c===l.WGLGeometryType.FILL?b=g?d.C_FILL_VERTEX_NAMES_VV:d.C_FILL_VERTEX_NAMES:c===l.WGLGeometryType.LINE?b=g?d.C_LINE_VERTEX_NAMES_VV:d.C_LINE_VERTEX_NAMES:c===l.WGLGeometryType.MARKER?b=g?d.C_ICON_VERTEX_NAMES_VV:d.C_ICON_VERTEX_NAMES:c===l.WGLGeometryType.TEXT&&(b=g?d.C_TEXT_VERTEX_NAMES_VV:
d.C_TEXT_VERTEX_NAMES);for(var n in a.vertexBufferMap)-1===b.indexOf(n)&&a.vertexBufferMap[n]&&(a.vertexBufferMap[n].dispose(),a.vertexBufferMap[n]=null);for(c=0;c<b.length;c++)k=b[c],a.vertexBufferMap[k]||(a.vertexBufferMap[k]=r.createVertex(e,this._usage));a.indexBuffer||(a.indexBuffer=r.createIndex(e,this._usage))}};f.prototype.get=function(e){return this.geometryMap.get(e)};f.prototype.has=function(e){return this.geometryMap.has(e)};f.prototype.upload=function(e,d,g,h){for(var a=0;a<d.length;a++){var c=
d[a],b=this.geometryMap.get(c);if(b){if(h){var k=e.geometries[c].indexBuffer.buffer;b.indexBuffer&&0<k.byteLength&&b.indexBuffer.setData(k)}for(var k=0,f=g;k<f.length;k++){var l=f[k],m=e.geometries[c].vertexBuffer[l];m&&(m=m.data.buffer,b.vertexBufferMap[l]&&0<m.byteLength&&b.vertexBufferMap[l].setData(m))}}}};return f}();q.default=p});