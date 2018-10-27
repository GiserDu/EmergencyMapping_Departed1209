// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/TileData","require exports ./MemoryRequirements ./TileBufferData ./TileDisplayData ./Utils ./WGLDisplayList ./WGLDisplayRecord ./util/Reader ./util/Writer".split(" "),function(C,D,r,u,v,w,x,y,z,A){var B=new w.ValuesGetter,q=new r.default,n=new r.default;return function(){function g(){this.tileBufferData=this.tileDisplayData=null}g.prototype.reshuffle=function(){q.reset();var c=this._collectDisplayRecords(),a;for(a in c)for(var b=c[a],e=0,f=b;e<
f.length;e++){var d=f[e];q.needMore(d.geometryType,d.meshData?d.meshData.vertexCount:d.vertexCount,d.meshData?d.meshData.indexData.length:d.indexCount)}e=c.length;f=new u;for(a=0;a<e;++a){f.geometries[a].indexBuffer=new Uint32Array(Math.round(1.15*q.indicesFor(a)));var d=[],h;for(h in this.tileBufferData.geometries[a].vertexBuffer)d.push(this.tileBufferData.geometries[a].vertexBuffer[h].stride);var d=g._computeVertexAlignment(d),b=Math.round(1.15*q.verticesFor(a)),d=g._align(b,d),k;for(k in this.tileBufferData.geometries[a].vertexBuffer)b=
this.tileBufferData.geometries[a].vertexBuffer[k].stride,f.geometries[a].vertexBuffer[k]={stride:b,data:new Uint32Array(Math.round(d*b/4))}}n.reset();this.tileDisplayData.displayList=new x;for(a=0;a<e;++a){b=c[a];h=0;for(k=b;h<k.length;h++)d=k[h],d.meshData||d.readMeshDataFromBuffers(this.tileBufferData.geometries[a].vertexBuffer,this.tileBufferData.geometries[a].indexBuffer),d.writeMeshDataToBuffers(n.verticesFor(a),f.geometries[a].vertexBuffer,n.indicesFor(a),f.geometries[a].indexBuffer),d.meshData=
null,n.needMore(a,d.vertexCount,d.indexCount);this.tileDisplayData.displayList.addToList(b)}this.tileBufferData=f};g.prototype.getStrides=function(){for(var c=[],a=0;a<this.tileBufferData.geometries.length;++a){var b=this.tileBufferData.geometries[a];c[a]={};for(var e in b.vertexBuffer)c[a][e]=b.vertexBuffer[e].stride}return c};g.prototype._guessSize=function(){for(var c=this.tileDisplayData.displayObjects,a=Math.min(c.length,4),b=0,e=0;e<a;e++)b=Math.max(b,c[e].displayRecords.length);return 2*(12*
c.length+c.length*b*40)};g.prototype.serialize=function(){var c=this.tileBufferData.serialize(),a=this.tileBufferData.getBuffers(),b=this.tileDisplayData.serialize(new A.default(this._guessSize())).buffer();a.push(b);return{result:{displayData:b,bufferData:c},transferList:a}};g.deserialize=function(c){var a=v.deserialize(new z.default(c.displayData));c=u.deserialize(c.bufferData);var b=new g;b.tileDisplayData=a;b.tileBufferData=c;return b};g.bind=function(c,a){var b=new g;b.tileDisplayData=c;b.tileBufferData=
a;return b};g.create=function(c,a){var b=new g;b.tileDisplayData=new v;b.tileDisplayData.displayObjects=c;for(var e=[0,0,0,0],f=[0,0,0,0],d=[[],[],[],[]],h=0;h<c.length;h++)for(var k=0,m=c[h].displayRecords;k<m.length;k++){var l=m[k];d[l.geometryType].push(l);e[l.geometryType]+=l.meshData.vertexCount;f[l.geometryType]+=l.meshData.indexData.length}h=new u;k=[a.fill||{},a.line||{},a.icon||{},a.text||{}];for(m=0;4>m;m++){var l=new Uint32Array(f[m]),p;p=k[m];var q=e[m],n={},t=void 0;for(t in p){var r=
{data:new Uint32Array(q*p[t]/4),stride:p[t]};n[t]=r}p=n;y.writeAllMeshDataToBuffers(d[m],p,l);h.geometries[m]={indexBuffer:l,vertexBuffer:p}}b.tileBufferData=h;return b};g._align=function(c,a){var b=c%a;return 0===b?c:c+(a-b)};g._computeVertexAlignment=function(c){for(var a=!1,b=!1,e=0;e<c.length;e++){var f=c[e];2===f%4?a=!0:0!==f%4&&(b=!0)}return b?4:a?2:1};g.prototype._collectDisplayRecords=function(){for(var c=[[],[],[],[]],a=0,b=B.getValues(this.tileDisplayData.displayObjectRegistry);a<b.length;a++)for(var e=
0,f=b[a].displayRecords;e<f.length;e++){var d=f[e];c[d.geometryType].push(d)}return c};return g}()});