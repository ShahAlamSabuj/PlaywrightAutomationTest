if (typeof __googlefc.fcKernelManager.run === 'function') {"use strict";this.default_ContributorServingResponseClientJs=this.default_ContributorServingResponseClientJs||{};(function(_){var window=this;
try{
var fo=function(a){for(var b=_.hc.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new _.Tc(c.join(""))},ho=function(a){return a?_.cf(a)||_.Yc(go):null},jo=function(a){a?(a?(a=_.Mc(a,3),a=null===a||void 0===a?null:new _.Tc(a)):a=null,a=a||fo(io)):a=null;return a},ko=function(a){"function"===typeof a&&a()},lo=function(a,b,c){a.addEventListener&&a.addEventListener(b,c)},mo=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)},no=function(a,b,c){var d=function(e){document.body?
(document.body.appendChild(a),ko(b)):0<e?_.r.setTimeout(function(){d(e-1)},100):ko(c)};d(3)},oo=function(a,b){var c=-1,d=a.indexOf(b);0<=d&&(c=Number(a.substring(d+b.length,a.indexOf(".",d))));return isNaN(c)?-1:c},po=function(a){this.l=_.u(a)};_.A(po,_.L);var qo=function(a){this.l=_.u(a)};_.A(qo,_.L);var ro=function(a){this.l=_.u(a)};_.A(ro,_.L);var so=function(a){this.l=_.u(a)};_.A(so,_.L);var to=function(a){this.l=_.u(a)};_.A(to,_.L);
var uo=function(a){var b=new _.mf;return _.ve(b,12,_.nf,a)},vo=function(a){this.l=_.u(a)};_.A(vo,_.L);var go=_.ad([""]),io=_.ad([""]);var wo=function(a){this.g=a},xo=function(a,b){var c=new to,d=new ro;b=_.O(d,1,b);c=_.F(c,2,b);c=uo(c);a.g.H(c)},yo=function(a){var b=new to;var c=new ro;var d=new qo;var e=new po;d=_.F(d,1,e);c=_.F(c,3,d);b=_.F(b,2,c);b=uo(b);a.g.H(b)};var zo=function(a,b,c,d){this.u=a;this.g=c;this.o=_.H(b,4)||_.r.location.hostname;this.i=new wo(d);this.j=new _.Vn(d,new _.eh(_.Tk(this.g)))};
zo.prototype.start=function(a,b){switch(a){case 1:xo(this.i,1);break;case 3:xo(this.i,3);break;case 2:xo(this.i,2);break;default:var c=this.j;a=_.D(this.g,_.zd,1);var d=this.g.getDefaultConsentRevocationText(),e=this.g.getDefaultConsentRevocationCloseText(),f=this.g.getDefaultConsentRevocationAttestationText(),g=this.o;_.Yn(c,0,0);_.Xn(c,a,d,e,f,g);b(null);return}c=_.Pc(_.Dn(null!=(e=null==(d=_.Uk(this.g))?void 0:_.Eb(d))?e:new _.Oc,a),6);(a=(a=_.Bf(this.u.document))&&null!=_.Nc(a,2)?_.K(a,2):null)&&
1===a&&_.Pm(c,10,!0);b(c)};var Ao=function(){this.i=[]};Ao.prototype.addEventListener=function(a,b){this.i.push(function(){a.call.apply(a,[b].concat(_.ia(_.hc.apply(0,arguments))))})};Ao.prototype.g=function(){for(var a=_.hc.apply(0,arguments),b=this.i,c=0;c<b.length;c++)b[c].apply(b,_.ia(a))};var Bo=new Map([[0,1],[1,3],[2,2]]),Co=new Map([[0,1],[1,2],[2,3]]),Do=function(a,b){this.B=a;this.A=b;this.u=new Ao},Eo=function(a,b){a.A.trace("Ad blocking detector "+a.g()+" signalled "+b);a.u.g(a.g(),b);var c=new so;var d=Bo.has(a.g())?Bo.get(a.g()):0;c=_.O(c,1,d);b=Co.has(b)?Co.get(b):0;b=_.O(c,2,b);a=a.B;c=new to;b=_.F(c,1,b);b=uo(b);a.g.H(b)};Do.prototype.addListener=function(a,b){this.u.addEventListener(function(c,d){a.call(b,c,d)})};var Fo=function(a,b,c){this.j=0;this.g=new Map;this.ea=function(){b.call(c)};this.i=a.length;if(0<this.i)for(var d=0;d<a.length;d++)this.g.set(a[d],!1);else this.ea()};Fo.prototype.notify=function(a){!1===this.g.get(a)&&(this.g.set(a,!0),++this.j>=this.i&&this.ea())};var Go=function(){this.g=null;this.i=new Ao},Io=function(a,b){for(var c=new Fo(b.map(function(e){return e.g()}),function(){Ho(a,1)},a),d=0;d<b.length;d++)b[d].addListener(function(e,f){1===f?0===e?Ho(a,2):Ho(a,3):c.notify(e)},a)},Ho=function(a,b){null===a.g&&(a.g=b,a.i.g(b))},Jo=function(a,b){a.i.addEventListener(function(c){b&&b.call(void 0,c)})};var Ko=function(a,b){this.j=a;this.A=b;this.g=0;this.i=[];this.u=this.o=null},Lo=function(a){if(-1!==a.g&&a.g>=a.A)a.u();else{a.g++;for(var b=0;b<a.i.length;++b){var c=a.i[b];if(0===c.offsetHeight||0===c.offsetWidth){a.o(c);return}}_.r.setTimeout(function(){Lo(a)},a.j)}},Mo=function(a,b,c){a.o=b;a.u=c;_.r.setTimeout(function(){Lo(a)},a.j)};var dp=function(a,b,c,d,e){Do.call(this,d,e);this.o=c;this.j=new Ko(a,b)};_.A(dp,Do);dp.prototype.g=function(){return 0};dp.prototype.i=function(){var a=this,b=ep(this);no(b,function(){a.j.i.push(b);Mo(a.j,function(){Eo(a,1);mo(b)},function(){Eo(a,0);mo(b)})},function(){Eo(a,2)})};
var ep=function(a){var b=document.createElement("div");b.className=a.o;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left="-10000px";b.style.top="-"+Math.floor(9990+20*Math.random())+"px";b.style.zIndex="-"+Math.floor(9990+20*Math.random())+"px";return b};var fp=function(a,b,c,d,e){Do.call(this,d,e);this.F=a;this.j=b;this.o=c;this.C=new _.vd(document)};_.A(fp,Do);fp.prototype.g=function(){return 2};var gp=function(a,b,c,d){if(null===b)ko(d);else{var e=_.xd(a.C.g,"IMG");e.style.display="none";no(e,function(){e.src=b;lo(e,"load",function(){ko(c);mo(e)});lo(e,"error",function(){ko(d);mo(e)})},function(){Eo(a,2)})}},ip=function(a,b,c){if(a.j)try{hp(a.F,a.j,b,c)}catch(d){gp(a,a.o,b,c)}else gp(a,a.o,b,c)};
fp.prototype.i=function(){var a=this;ip(this,function(){Eo(a,0)},function(){Eo(a,1)})};var jp=function(a,b,c,d,e){Do.call(this,d,e);this.j=a;this.o=b;this.C=c};_.A(jp,Do);jp.prototype.g=function(){return 1};var kp=function(a,b,c){hp(a.j,a.o,function(){_.r[a.C]?b():c()},function(){c()})};jp.prototype.i=function(){var a=this;kp(this,function(){Eo(a,0)},function(){Eo(a,1)})};var np=function(a,b,c,d,e,f){var g=new lp,h=new mp;this.F=a;this.J=b;this.g=c;this.C=d;this.A=e;this.o=g;this.u=h;this.j=f;this.B=new Go;new _.eh(_.Tk(this.A));this.i=new wo(f)},qp=function(a){var b=_.H(a.J,1);op(a.o,b);pp(a.o,function(){})},rp=function(a){a=_.q(a);for(var b=a.next();!b.done;b=a.next())b.value.addListener(function(){})},sp=function(a){var b=new dp(_.Hf(a.g,4),_.Hf(a.g,5),_.H(a.g,1),a.i,a.j),c=new jp(a.u,ho(_.D(a.g,_.zd,6)),_.H(a.g,7),a.i,a.j),d=new fp(a.u,ho(_.D(a.g,_.zd,2)),jo(_.D(a.g,
vo,3)),a.i,a.j);a=[b,c,d];rp(a);return{Wb:a,yc:function(){b.addListener(function(e,f){if(0===f||2===f)c.i(),d.i()});b.i()}}};np.prototype.run=function(a){if(JSON)if(_.r.frameElement){yo(this.i);var b=!0}else b=!1;else yo(this.i),b=!0;b||(qp(this),tp(this.u,this.o),up(this,a))};var up=function(a,b){var c=new zo(a.F,a.C,a.A,a.j);Jo(a.B,function(e){c.start(e,b)});var d=sp(a);Io(a.B,d.Wb);d.yc()};var vp=function(a){this.l=_.u(a)};_.A(vp,_.L);var wp=function(a){this.l=_.u(a)};_.A(wp,_.L);var xp=function(a){this.l=_.u(a)};_.A(xp,_.L);var yp=function(a){this.l=_.u(a)};_.A(yp,_.L);var zp=_.w(yp);var lp=function(){this.g=null;this.i=new Ao},op=function(a,b){a.g=new RegExp("^https?://"+b+"/.*$");var c=_.r.onerror;_.r.onerror=function(d,e,f){a.g&&a.i.g(a.g.test(e),e,d);c&&c(d,e,f)}},pp=function(a,b){a.i.addEventListener(b)};var mp=function(){this.g=new Map;this.i=new _.vd(document)},tp=function(a,b){pp(b,function(c,d,e){c||!d||"Script error"!==e&&"Syntax error"!==e||a.g.set(d,new Date)})},Ap=function(a,b,c,d){var e=new Date;lo(b,"load",function(){var f=_.r.navigator.userAgent;var g=oo(f,"MSIE ");f=0<=g?g:0<=f.indexOf("Trident/")?11:oo(f,"Edge/");-1!==f&&11>=f&&a.g.has(b.src)&&a.g.get(b.src)>=e?ko(d):ko(c)});lo(b,"error",function(){ko(d)})},hp=function(a,b,c,d){if(null===b)ko(d);else{var e=_.xd(a.i.g,"SCRIPT");Ap(a,e,
function(){ko(c);mo(e)},function(){ko(d);mo(e)});e.async=!0;_.Sm(e,b);a.i.g.getElementsByTagName("HEAD")[0].appendChild(e)}};var Bp=function(){};Bp.prototype.run=function(a,b,c){var d,e;return _.B(function(f){d=zp(_.Vm(b));e=new np(a,_.D(d,wp,1),_.D(d,xp,2),_.D(d,vp,3),_.D(d,_.Sk,7),c);return f.return(new Promise(function(g){e.run(function(h){g({ba:_.M(h)})})}))})};_.Wk(3,new Bp);
}catch(e){_._DumpException(e)}
}).call(this,this.default_ContributorServingResponseClientJs);
// Google Inc.

//# sourceURL=/_/mss/boq-content-ads-contributor/_/js/k=boq-content-ads-contributor.ContributorServingResponseClientJs.en_US.YcUW7FqhQ8k.es5.O/d=1/exm=kernel_loader,loader_js_executable,web_iab_tcf_v2_signal_executable/ed=1/rs=AJlcJMw-26T22xqd73HwoYjILgQPIb6Fvw/m=ad_blocking_detection_executable
__googlefc.fcKernelManager.run('\x5b\x5b\x5b3,\x22W1siaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20iXSxbImZkY19hZCBwYi1tb2QtYWQtZmxleCBhZDMwMHgyNTBfYm94IGFkcy1leHByZXNzIG5hdGl2ZS1zaWRlYmFyLWFkIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL3Nob3dfY29tcGFuaW9uX2FkLmpzP2ZjZFx1MDAzZHRydWUiXSxbbnVsbCxudWxsLCJodHRwczovL3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tL2Zhdmljb24uaWNvIl0sMTAwLDUsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9mL0FHU0tXeFZJS0k2d1N6RHEzZzM0YnFwVGFEMUFqQnJJRUI2SnFPcXBvVjdKTkFxQzMxcTJxWGNXSGNKMXJEVkFlTGRFR3pFcTVEMUp3VnV1WU5kVGdyMHRyX0ZzR0tacnQ0V3lYVXZ4ZzhKQi1YQ05nSndKa3Zsa1V4enpPblJON0tDYWJzVFNKakx5QmRWdVZySVo1aG41UUo4TkRzNDB6aHMtTkpRTHpFMFdMSzlNSkRZRnNoTm1aWlpwakZSeC9fLzMwMHg1MDBfYWQvYWRzaG93LS9TbXBBZHMuL2FkX3NlcnZlLi9hZHMvYmdfIl0sImYxOTQxYTFjLWE0NGMtNDA2OS04NjYzLWM3NDEwNmRhMmU1ZSIsW251bGwsbnVsbCwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vaW1nL3B4LmdpZiJdXSxbbnVsbCxudWxsLG51bGwsImF1dG9tYXRpb25leGVyY2lzZS5jb20iXSxudWxsLG51bGwsbnVsbCxbW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9mL0FHU0tXeFdtbjNZT3FvWEVYOXVlTG50emNnLW05Q3JBc1pBQk9UZ3RCbmp4WGRhV1FsbnViREdaeWQzdW5XaUU1RFdZZWRBYnY2bHRqZzVRckRMMlFCak5BYjJTVzV0MktYcDNBVDJES04yUlN0SVhvMTdXQkNfSTBjNHRkODhiZXgyMk54djdCWDhRamdcdTAwM2RcdTAwM2QiXSxudWxsLG51bGwsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9lbC9BR1NLV3hWdUdwOGlZdHNOYmFzeG5FVTVFUmNXWEVZeC1rcFlreE1seDYyVWJNN2w2ZTJMWV9EcGZSMnpmR1ZhSFVPU3B1dEFfT21CQ05HaU5vX3dYQ3dIVU5RdGM3Q0xYM1gwZldZeV9XWFEtME5uUndTZ3ktVVVGak9MWmJOS2N6cEtxRnBFX1FDWTRnXHUwMDNkXHUwMDNkIl0sW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9mL0FHU0tXeFhLd2o0VlBkSTI4MXRjX0pwTW14ZE1Fdms4U3Z5UzEyMzAxSEdfVU1aNm9OTXpZOTlBOTFqZ3NHNy1jbEhGdkN2RGFpZktJVU5hYXZLdU95ektIcWpZOTJXS3VPZk9JYVNYMEg5ekY4TzdxVDJ1WEJhSnROVng2Y3RkQTh4ZTFoSC1HYmp3S2dcdTAwM2RcdTAwM2QiXSxbbnVsbCxbNyw5XSxudWxsLDIsbnVsbCwiZW4iXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsImZkMzI3NzVlODE4M2UwNGUiLG51bGwsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9fL0NvbnRyaWJ1dG9yU2VydmluZ1dlYlN3aXRjaGJvYXJkSHR0cC9qc2Vycm9yIl1dXQ\\u003d\\u003d\x22\x5d\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxX7K1thCiT3GZ6y-TkwqthnUYWgN9Gp8mybXQeT6MmlZ8EqQhibkitgguAftKPA9hWRbpce9nrixpa6aOX_2xvE_bGgZP26rHTUUorh19sgXgjzoM8MWn8TyiwSeDibpyHvuckpJw\\u003d\\u003d\x22\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxUGAoJBI5dA1RvcjJps3iJ3gPBQy_bjnPcBUt5T1LmWt3xQ87EKMRafpgWI2D4myJs5ga7spXqwQqHtgkdPEGI5FmLfeWcrcBRwyE8emJ3Ta1RLh4_KOGJ6t_YpXR-Yl9TQ6NwYVg\\u003d\\u003d\x22\x5d\x5d');}