const a5_0x4fd2b4=a5_0x1fc6;(function(_0x352b9c,_0x4f6449){const _0x163a44=a5_0x1fc6,_0x23d1bf=_0x352b9c();while(!![]){try{const _0x1614f2=-parseInt(_0x163a44(0x1ea))/0x1+-parseInt(_0x163a44(0x1d3))/0x2+-parseInt(_0x163a44(0x1d7))/0x3*(parseInt(_0x163a44(0x1dc))/0x4)+-parseInt(_0x163a44(0x1e9))/0x5*(parseInt(_0x163a44(0x1eb))/0x6)+parseInt(_0x163a44(0x1e0))/0x7*(parseInt(_0x163a44(0x1de))/0x8)+-parseInt(_0x163a44(0x1e7))/0x9+parseInt(_0x163a44(0x1d8))/0xa;if(_0x1614f2===_0x4f6449)break;else _0x23d1bf['push'](_0x23d1bf['shift']());}catch(_0x2bcfab){_0x23d1bf['push'](_0x23d1bf['shift']());}}}(a5_0x5409,0x7c4c6));function a5_0x5409(){const _0x48427d=['FPS','destroyBullet','speed','src','imageSource','canvas','6682977SWSHSF','position','2115ELkiRk','734391OnUQsi','4776jwjLHE','explosion','frameIndex','random','move','603120rVpvck','isExploding','init','shoot','3OltDnZ','24257230rpvITs','image','imageInstance','gameCtx','2199232OcaSFM','current','104iIhSfw','baseLine','402997VPkGsP'];a5_0x5409=function(){return _0x48427d;};return a5_0x5409();}function a5_0x1fc6(_0x492269,_0x586067){const _0x54098b=a5_0x5409();return a5_0x1fc6=function(_0x1fc6ef,_0x5c98bf){_0x1fc6ef=_0x1fc6ef-0x1d0;let _0x561467=_0x54098b[_0x1fc6ef];return _0x561467;},a5_0x1fc6(_0x492269,_0x586067);}class Bullet{constructor(_0x3a659e,_0x451976,_0x2cd50f,_0x8382c5,_0x1de2e9){const _0x1e0bb5=a5_0x1fc6;this['canvas']=_0x3a659e,this['ctx']=_0x451976,this[_0x1e0bb5(0x1db)]=_0x1de2e9,this['position']={'x':_0x8382c5['x']+0x10,'y':_0x8382c5['y']},this['speed']=0x14,this['FPS']=_0x2cd50f,this['image']={'shoot':{'imageInstance':undefined,'imageSource':'./images/bullet.png','size':{'width':0xa,'height':0x46}},'explosion':{'imageInstance':undefined,'imageSource':'./images/bullet-impact.png','frames':0x2,'frameIndex':0x0,'size':{'width':0x32,'height':0x32}}},this['isExploding']=![],this[_0x1e0bb5(0x1d5)]();}[a5_0x4fd2b4(0x1d5)](){const _0x386cf9=a5_0x4fd2b4,_0x1caaf8=0xa;this[_0x386cf9(0x1e8)]['x']=this[_0x386cf9(0x1e8)]['x']+(Math[_0x386cf9(0x1d1)]()*(0x2*_0x1caaf8)-_0x1caaf8),this[_0x386cf9(0x1d9)]['shoot'][_0x386cf9(0x1da)]=new Image(),this[_0x386cf9(0x1d9)][_0x386cf9(0x1d6)][_0x386cf9(0x1da)][_0x386cf9(0x1e4)]=this[_0x386cf9(0x1d9)][_0x386cf9(0x1d6)][_0x386cf9(0x1e5)],this[_0x386cf9(0x1d9)]['explosion'][_0x386cf9(0x1da)]=new Image(),this[_0x386cf9(0x1d9)][_0x386cf9(0x1ec)]['imageInstance'][_0x386cf9(0x1e4)]=this['image'][_0x386cf9(0x1ec)]['imageSource'],this[_0x386cf9(0x1d9)][_0x386cf9(0x1dd)]=this[_0x386cf9(0x1d9)][_0x386cf9(0x1d6)][_0x386cf9(0x1da)],this[_0x386cf9(0x1d2)]();}[a5_0x4fd2b4(0x1d2)](_0x174ee6){const _0x13502b=a5_0x4fd2b4;if(!this[_0x13502b(0x1d4)])this['position']['y']+=this[_0x13502b(0x1e3)];else{const _0x2f0a15=0x3c/this[_0x13502b(0x1e1)]*_0x174ee6;this['position']['x']-=_0x2f0a15;}}['explode'](){const _0x1f0fad=a5_0x4fd2b4;this[_0x1f0fad(0x1d4)]=!![],this['position']['y']>this[_0x1f0fad(0x1e6)]['baseLine']?this[_0x1f0fad(0x1e8)]['y']=this['canvas'][_0x1f0fad(0x1df)]+0x14:this[_0x1f0fad(0x1e8)]['y']+=Math['random']()*(0x23-0x19)+0x14,this[_0x1f0fad(0x1e8)]['x']+=Math['random']()*(0x5+0x5)-0x1e,setTimeout(()=>{const _0x12996a=_0x1f0fad;this['image'][_0x12996a(0x1ec)][_0x12996a(0x1d0)]=0x1,setTimeout(()=>{const _0x42f54c=_0x12996a;this[_0x42f54c(0x1db)][_0x42f54c(0x1e2)](this);},0x64);},0x32);}}