function a10_0x452f(){const _0x50da4a=['play','gameContext','src','6mNBqPd','warningSong','isAboutToShoot','778988JhhOyp','imageInstance','14070144tTLIwu','tracks','position','shootRocket','canvas','move','7729601XLyDZY','8GZgdYs','2950297eCWZrx','rocketSong','10VxbpUI','./images/warningShibex.png','757570RobSZO','pause','size','isGameOver','42VbpGjw','72040bPXJAl','image','ctx','speed','width','audio','54vmDHUc','146792OVKHyq','changeSprite','imagePath','./images/rocketFire.png','frameIndex','init'];a10_0x452f=function(){return _0x50da4a;};return a10_0x452f();}function a10_0x33ac(_0x4b8fe4,_0xac7681){const _0x452fd2=a10_0x452f();return a10_0x33ac=function(_0x33acb4,_0x5ca6a5){_0x33acb4=_0x33acb4-0xbf;let _0x438192=_0x452fd2[_0x33acb4];return _0x438192;},a10_0x33ac(_0x4b8fe4,_0xac7681);}const a10_0x5d8901=a10_0x33ac;(function(_0x19ee8b,_0x36a878){const _0x287c93=a10_0x33ac,_0x50d1c3=_0x19ee8b();while(!![]){try{const _0x563d57=parseInt(_0x287c93(0xc0))/0x1+parseInt(_0x287c93(0xd3))/0x2*(-parseInt(_0x287c93(0xd2))/0x3)+parseInt(_0x287c93(0xc9))/0x4*(parseInt(_0x287c93(0xce))/0x5)+-parseInt(_0x287c93(0xe3))/0x6*(-parseInt(_0x287c93(0xca))/0x7)+-parseInt(_0x287c93(0xda))/0x8*(parseInt(_0x287c93(0xd9))/0x9)+-parseInt(_0x287c93(0xcc))/0xa*(-parseInt(_0x287c93(0xc8))/0xb)+-parseInt(_0x287c93(0xc2))/0xc;if(_0x563d57===_0x36a878)break;else _0x50d1c3['push'](_0x50d1c3['shift']());}catch(_0x28cd2e){_0x50d1c3['push'](_0x50d1c3['shift']());}}}(a10_0x452f,0x665dc));const rocketWidth=0x78,rocketHeight=0x3c,rocketImage=a10_0x5d8901(0xdd),rocketSpeed=0x14;class Rocket_spacex{constructor(_0x127b1a,_0x5a9b5c,_0x32197e,_0x3038dd){const _0x4f57bf=a10_0x5d8901;this[_0x4f57bf(0xc6)]=_0x127b1a,this[_0x4f57bf(0xd5)]=_0x5a9b5c,this[_0x4f57bf(0xe1)]=_0x3038dd,this['position']={'x':_0x127b1a[_0x4f57bf(0xd0)]['width'],'y':_0x32197e},this['size']={'width':rocketWidth,'height':rocketHeight},this[_0x4f57bf(0xd4)]={'imageInstance':undefined,'imageSource':rocketImage},this[_0x4f57bf(0xd6)]=rocketSpeed,this[_0x4f57bf(0xdf)]();}[a10_0x5d8901(0xdf)](){const _0x123ec8=a10_0x5d8901;this[_0x123ec8(0xd4)][_0x123ec8(0xc1)]=new Image(),this[_0x123ec8(0xd4)][_0x123ec8(0xc1)][_0x123ec8(0xe2)]=this[_0x123ec8(0xd4)]['imageSource'];}['move'](){const _0x274698=a10_0x5d8901;this['position']['x']-=this[_0x274698(0xd6)];}}const warningSize=0x64,rocketWarningImage=a10_0x5d8901(0xcd),timeoutWarning=0xbb8,timeoutShoot=0x3e8;class Warning{constructor(_0x3f658a,_0x3453ec,_0x433cbd,_0x14c901){const _0x4f09ad=a10_0x5d8901;this[_0x4f09ad(0xc6)]=_0x3f658a,this[_0x4f09ad(0xd5)]=_0x3453ec,this['gameContext']=_0x14c901,this[_0x4f09ad(0xc4)]={'x':_0x3f658a['size'][_0x4f09ad(0xd7)]-0x3c,'y':_0x433cbd},this['size']={'width':warningSize,'height':warningSize},this[_0x4f09ad(0xd4)]={'imageInstance':undefined,'imagePath':rocketWarningImage,'frames':0x2,'frameIndex':0x0},this['isAboutToShoot']=![],this[_0x4f09ad(0xdf)]();}[a10_0x5d8901(0xdf)](){const _0x1691c1=a10_0x5d8901;this[_0x1691c1(0xd4)][_0x1691c1(0xc1)]=new Image(),this[_0x1691c1(0xd4)][_0x1691c1(0xc1)][_0x1691c1(0xe2)]=this[_0x1691c1(0xd4)][_0x1691c1(0xdc)],this[_0x1691c1(0xdb)]();}[a10_0x5d8901(0xc7)](_0x31db1a){const _0x2c1cc6=a10_0x5d8901;!this['isAboutToShoot']&&(this[_0x2c1cc6(0xc4)]['y']=_0x31db1a);}[a10_0x5d8901(0xdb)](){setTimeout(()=>{const _0x877d6b=a10_0x33ac;!this['gameContext'][_0x877d6b(0xd1)]&&(this[_0x877d6b(0xd4)][_0x877d6b(0xde)]=0x1,this[_0x877d6b(0xbf)]=!![],this['shootRocket']()),!this['gameContext'][_0x877d6b(0xd1)]?this[_0x877d6b(0xe1)][_0x877d6b(0xd8)]['tracks'][_0x877d6b(0xe4)]['play']():this[_0x877d6b(0xe1)][_0x877d6b(0xd8)][_0x877d6b(0xc3)][_0x877d6b(0xe4)][_0x877d6b(0xcf)]();},timeoutWarning);}[a10_0x5d8901(0xc5)](){const _0x52dcbc=a10_0x5d8901;!this[_0x52dcbc(0xe1)][_0x52dcbc(0xd1)]&&setTimeout(()=>{const _0x3855b8=_0x52dcbc;this[_0x3855b8(0xe1)]['createRocket'](this),this[_0x3855b8(0xe1)][_0x3855b8(0xd8)][_0x3855b8(0xc3)][_0x3855b8(0xcb)][_0x3855b8(0xe0)]();},timeoutShoot);}}