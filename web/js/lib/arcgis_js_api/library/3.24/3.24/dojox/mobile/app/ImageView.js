//>>built
define("dojox/mobile/app/ImageView",["dojo","dijit","dojox","dojo/require!dojox/mobile/app/_Widget,dojo/fx/easing"],function(c,t,l){c.provide("dojox.mobile.app.ImageView");c.experimental("dojox.mobile.app.ImageView");c.require("dojox.mobile.app._Widget");c.require("dojo.fx.easing");c.declare("dojox.mobile.app.ImageView",l.mobile.app._Widget,{zoom:1,zoomCenterX:0,zoomCenterY:0,maxZoom:5,autoZoomLevel:3,disableAutoZoom:!1,disableSwipe:!1,autoZoomEvent:null,_leftImg:null,_centerImg:null,_rightImg:null,
_leftSmallImg:null,_centerSmallImg:null,_rightSmallImg:null,constructor:function(){this.panY=this.panX=0;this.handleLoad=c.hitch(this,this.handleLoad);this._updateAnimatedZoom=c.hitch(this,this._updateAnimatedZoom);this._updateAnimatedPan=c.hitch(this,this._updateAnimatedPan);this._onAnimPanEnd=c.hitch(this,this._onAnimPanEnd)},buildRendering:function(){this.inherited(arguments);this.canvas=c.create("canvas",{},this.domNode);c.addClass(this.domNode,"mblImageView")},postCreate:function(){this.inherited(arguments);
this.size=c.marginBox(this.domNode);c.style(this.canvas,{width:this.size.w+"px",height:this.size.h+"px"});this.canvas.height=this.size.h;this.canvas.width=this.size.w;var a=this;this.connect(this.domNode,"onmousedown",function(b){a.isAnimating()||(a.panX&&a.handleDragEnd(),a.downX=b.targetTouches?b.targetTouches[0].clientX:b.clientX,a.downY=b.targetTouches?b.targetTouches[0].clientY:b.clientY)});this.connect(this.domNode,"onmousemove",function(b){if(!a.isAnimating()&&(a.downX||0===a.downX)&&(a.downY||
0===a.downY)&&(!a.disableSwipe&&1==a.zoom||!a.disableAutoZoom&&1!=a.zoom)){var d=b.targetTouches?b.targetTouches[0].clientY:b.pageY;a.panX=(b.targetTouches?b.targetTouches[0].clientX:b.pageX)-a.downX;a.panY=d-a.downY;1==a.zoom?10<Math.abs(a.panX)&&a.render():(10<Math.abs(a.panX)||10<Math.abs(a.panY))&&a.render()}});this.connect(this.domNode,"onmouseout",function(b){!a.isAnimating()&&a.panX&&a.handleDragEnd()});this.connect(this.domNode,"onmouseover",function(b){a.downX=a.downY=null});this.connect(this.domNode,
"onclick",function(b){if(!a.isAnimating()&&null!=a.downX&&null!=a.downY){var d=b.targetTouches?b.targetTouches[0].clientX:b.pageX;b=b.targetTouches?b.targetTouches[0].clientY:b.pageY;if(14<Math.abs(a.panX)||14<Math.abs(a.panY))a.downX=a.downY=null,a.handleDragEnd();else if(a.downX=a.downY=null,!a.disableAutoZoom&&a._centerImg&&a._centerImg._loaded)if(1!=a.zoom)a.set("animatedZoom",1);else{var g=c._abs(a.domNode);a.zoomTo((d-g.x)/(a.size.w/a._centerImg.width)-a.panX,(b-g.y)/(a.size.h/a._centerImg.height)-
a.panY,a.autoZoomLevel)}}});c.connect(this.domNode,"flick",this,"handleFlick")},isAnimating:function(){return this._anim&&"playing"==this._anim.status()},handleDragEnd:function(){this.downX=this.downY=null;console.log("handleDragEnd");if(1==this.zoom){if(this.panX){var a=this._leftImg&&this._leftImg._loaded||this._leftSmallImg&&this._leftSmallImg._loaded,b=this._rightImg&&this._rightImg._loaded||this._rightSmallImg&&this._rightSmallImg._loaded;Math.abs(this.panX)<this._centerImg._baseWidth/2||!(0<
this.panX&&a||0>this.panX&&b)?this._animPanTo(0,c.fx.easing.expoOut,700):this.moveTo(this.panX)}}else if(this.panX||this.panY)this.zoomCenterX-=this.panX/this.zoom,this.zoomCenterY-=this.panY/this.zoom,this.panX=this.panY=0},handleFlick:function(a){1==this.zoom&&500>a.duration&&("ltr"==a.direction?this.moveTo(1):"rtl"==a.direction&&this.moveTo(-1),this.downX=this.downY=null)},moveTo:function(a){a=0<a?1:-1;var b;1>a?this._rightImg&&this._rightImg._loaded?b=this._rightImg:this._rightSmallImg&&this._rightSmallImg._loaded&&
(b=this._rightSmallImg):this._leftImg&&this._leftImg._loaded?b=this._leftImg:this._leftSmallImg&&this._leftSmallImg._loaded&&(b=this._leftSmallImg);this._moveDir=a;var d=this;b&&b._loaded?this._animPanTo(this.size.w*a,null,500,function(){d.panX=0;d.panY=0;0>a?d._switchImage("left","right"):d._switchImage("right","left");d.render();d.onChange(-1*a)}):(console.log("moveTo image not loaded!",b),this._animPanTo(0,c.fx.easing.expoOut,700))},_switchImage:function(a,b){var d="_"+a+"SmallImg",g="_"+a+"Img",
c="_"+b+"SmallImg",e="_"+b+"Img";this[g]=this._centerImg;this[d]=this._centerSmallImg;this[g]._type=a;this[d]&&(this[d]._type=a);this._centerImg=this[e];this._centerSmallImg=this[c];this._centerImg._type="center";this._centerSmallImg&&(this._centerSmallImg._type="center");this[e]=this[c]=null},_animPanTo:function(a,b,d,g){this._animCallback=g;this._anim=new c.Animation({curve:[this.panX,a],onAnimate:this._updateAnimatedPan,duration:d||500,easing:b,onEnd:this._onAnimPanEnd});this._anim.play();return this._anim},
onChange:function(a){},_updateAnimatedPan:function(a){this.panX=a;this.render()},_onAnimPanEnd:function(){this.panX=this.panY=0;this._animCallback&&this._animCallback()},zoomTo:function(a,b,d){this.set("zoomCenterX",a);this.set("zoomCenterY",b);this.set("animatedZoom",d)},render:function(){this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height);this._renderImg(this._centerSmallImg,this._centerImg,1==this.zoom?0>this.panX?1:0<this.panX?-1:0:0);1==this.zoom&&0!=this.panX&&(0<
this.panX?this._renderImg(this._leftSmallImg,this._leftImg,1):this._renderImg(this._rightSmallImg,this._rightImg,-1))},_renderImg:function(a,b,d){if((a=b&&b._loaded?b:a)&&a._loaded){b=this.canvas.getContext("2d");var c=a._baseWidth*this.zoom,f=a._baseHeight*this.zoom,e=Math.min(this.size.w,c),m=Math.min(this.size.h,f),c=this.dispWidth=e/c*a.width,f=this.dispHeight=m/f*a.height,h=Math.max(0,Math.round((a.width-c)/2+(Math.floor(Math.max(c/2,Math.min(a.width-c/2,this.zoomCenterX-this.panX/this.zoom)))-
a._centerX))),l=Math.max(0,Math.round((a.height-f)/2+(Math.floor(Math.max(f/2,Math.min(a.height-f/2,this.zoomCenterY-this.panY/this.zoom)))-a._centerY))),k=Math.round(Math.max(0,this.canvas.width-e)/2),q=Math.round(Math.max(0,this.canvas.height-m)/2),n=e,p=c;1==this.zoom&&d&&this.panX&&(0>this.panX?0<d?(e-=Math.abs(this.panX),k=0):0>d&&(e=Math.max(1,Math.abs(this.panX)-5),k=this.size.w-e):0<d?(e=Math.max(1,Math.abs(this.panX)-5),k=0):0>d&&(e-=Math.abs(this.panX),k=this.size.w-e),c=Math.max(1,Math.floor(e/
n*c)),0<d&&(h=h+p-c),h=Math.floor(h));try{b.drawImage(a,Math.max(0,h),l,Math.min(p,c),f,k,q,Math.min(n,e),m)}catch(r){console.log("Caught Error",r,"type\x3d",a._type,"oldDestWidth \x3d ",n,"destWidth",e,"destX",k,"oldSourceWidth\x3d",p,"sourceWidth\x3d",c,"sourceX \x3d "+h)}}},_setZoomAttr:function(a){this.zoom=Math.min(this.maxZoom,Math.max(1,a));1==this.zoom&&this._centerImg&&this._centerImg._loaded&&(this.isAnimating()||(this.zoomCenterX=this._centerImg.width/2,this.zoomCenterY=this._centerImg.height/
2),this.panX=this.panY=0);this.render()},_setZoomCenterXAttr:function(a){a!=this.zoomCenterX&&(this._centerImg&&this._centerImg._loaded&&(a=Math.min(this._centerImg.width,a)),this.zoomCenterX=Math.max(0,Math.round(a)))},_setZoomCenterYAttr:function(a){a!=this.zoomCenterY&&(this._centerImg&&this._centerImg._loaded&&(a=Math.min(this._centerImg.height,a)),this.zoomCenterY=Math.max(0,Math.round(a)))},_setZoomCenterAttr:function(a){if(a.x!=this.zoomCenterX||a.y!=this.zoomCenterY)this.set("zoomCenterX",
a.x),this.set("zoomCenterY",a.y),this.render()},_setAnimatedZoomAttr:function(a){this._anim&&"playing"==this._anim.status()||(this._anim=new c.Animation({curve:[this.zoom,a],onAnimate:this._updateAnimatedZoom,onEnd:this._onAnimEnd}),this._anim.play())},_updateAnimatedZoom:function(a){this._setZoomAttr(a)},_setCenterUrlAttr:function(a){this._setImage("center",a)},_setLeftUrlAttr:function(a){this._setImage("left",a)},_setRightUrlAttr:function(a){this._setImage("right",a)},_setImage:function(a,b){var d=
null,g=null;c.isString(b)?g=b:(g=b.large,d=b.small);if(!this["_"+a+"Img"]||this["_"+a+"Img"]._src!=g){var f=this["_"+a+"Img"]=new Image;f._type=a;f._loaded=!1;f._src=g;f._conn=c.connect(f,"onload",this.handleLoad);if(d){var e=this["_"+a+"SmallImg"]=new Image;e._type=a;e._loaded=!1;e._conn=c.connect(e,"onload",this.handleLoad);e._isSmall=!0;e._src=d;e.src=d}f.src=g}},handleLoad:function(a){a=a.target;a._loaded=!0;c.disconnect(a._conn);switch(a._type){case "center":this.zoomCenterX=a.width/2,this.zoomCenterY=
a.height/2}var b=a.height,d=a.width;d/this.size.w<b/this.size.h?(a._baseHeight=this.canvas.height,a._baseWidth=d/(b/this.size.h)):(a._baseWidth=this.canvas.width,a._baseHeight=b/(d/this.size.w));a._centerX=d/2;a._centerY=b/2;this.render();this.onLoad(a._type,a._src,a._isSmall)},onLoad:function(a,b,c){}})});