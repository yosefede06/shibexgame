function a5_0x31d1(_0x2a84a7,_0x596e2f){const _0x387d0d=a5_0x387d();return a5_0x31d1=function(_0x31d180,_0x4e6c3b){_0x31d180=_0x31d180-0x1bf;let _0x5a97e6=_0x387d0d[_0x31d180];return _0x5a97e6;},a5_0x31d1(_0x2a84a7,_0x596e2f);}const a5_0x25c070=a5_0x31d1;(function(_0x2a7c30,_0x13a74f){const _0x310627=a5_0x31d1,_0x15be9c=_0x2a7c30();while(!![]){try{const _0x40916b=-parseInt(_0x310627(0x1d4))/0x1*(parseInt(_0x310627(0x1c7))/0x2)+parseInt(_0x310627(0x1cb))/0x3*(-parseInt(_0x310627(0x1c6))/0x4)+parseInt(_0x310627(0x1de))/0x5*(parseInt(_0x310627(0x1d0))/0x6)+-parseInt(_0x310627(0x1df))/0x7*(parseInt(_0x310627(0x1d1))/0x8)+parseInt(_0x310627(0x1d6))/0x9+-parseInt(_0x310627(0x1d9))/0xa+-parseInt(_0x310627(0x1dd))/0xb*(-parseInt(_0x310627(0x1c4))/0xc);if(_0x40916b===_0x13a74f)break;else _0x15be9c['push'](_0x15be9c['shift']());}catch(_0x858db8){_0x15be9c['push'](_0x15be9c['shift']());}}}(a5_0x387d,0xd887e));function a5_0x387d(){const _0x1f7591=['4538611aFSZFg','5CfjotU','7ngUWMn','speed','baseLine','canvas','move','src','24TWoaax','FPS','488INTjke','2HljMmZ','isExploding','frameIndex','imageInstance','4377esYfuc','explode','position','random','destroyBullet','8818350nhVWgb','1965224glmRBm','imageSource','gameCtx','1750537LvlNhR','init','10794123jfYbDR','./images/bullet-impact.png','current','4331760WVGDRR','shoot','image','explosion'];a5_0x387d=function(){return _0x1f7591;};return a5_0x387d();}class Bullet{constructor(_0x550068,_0x31d4ac,_0x5653f7,_0x1686ac,_0x38e6dc){const _0x3f41d9=a5_0x31d1;this[_0x3f41d9(0x1c1)]=_0x550068,this['ctx']=_0x31d4ac,this[_0x3f41d9(0x1d3)]=_0x38e6dc,this[_0x3f41d9(0x1cd)]={'x':_0x1686ac['x']+0x10,'y':_0x1686ac['y']},this[_0x3f41d9(0x1bf)]=0x14,this[_0x3f41d9(0x1c5)]=_0x5653f7,this[_0x3f41d9(0x1db)]={'shoot':{'imageInstance':undefined,'imageSource':'./images/bullet.png','size':{'width':0xa,'height':0x46}},'explosion':{'imageInstance':undefined,'imageSource':_0x3f41d9(0x1d7),'frames':0x2,'frameIndex':0x0,'size':{'width':0x32,'height':0x32}}},this[_0x3f41d9(0x1c8)]=![],this['init']();}[a5_0x25c070(0x1d5)](){const _0x4feb8a=a5_0x25c070,_0x1ae2d6=0xa;this[_0x4feb8a(0x1cd)]['x']=this['position']['x']+(Math['random']()*(0x2*_0x1ae2d6)-_0x1ae2d6),this[_0x4feb8a(0x1db)]['shoot'][_0x4feb8a(0x1ca)]=new Image(),this['image'][_0x4feb8a(0x1da)][_0x4feb8a(0x1ca)][_0x4feb8a(0x1c3)]=this[_0x4feb8a(0x1db)][_0x4feb8a(0x1da)][_0x4feb8a(0x1d2)],this[_0x4feb8a(0x1db)][_0x4feb8a(0x1dc)][_0x4feb8a(0x1ca)]=new Image(),this['image'][_0x4feb8a(0x1dc)][_0x4feb8a(0x1ca)][_0x4feb8a(0x1c3)]=this[_0x4feb8a(0x1db)]['explosion'][_0x4feb8a(0x1d2)],this[_0x4feb8a(0x1db)][_0x4feb8a(0x1d8)]=this[_0x4feb8a(0x1db)][_0x4feb8a(0x1da)][_0x4feb8a(0x1ca)],this[_0x4feb8a(0x1c2)]();}[a5_0x25c070(0x1c2)](_0x1f0d97){const _0xcb6bd7=a5_0x25c070;if(!this[_0xcb6bd7(0x1c8)])this[_0xcb6bd7(0x1cd)]['y']+=this[_0xcb6bd7(0x1bf)];else{const _0x28fa69=0x3c/this[_0xcb6bd7(0x1c5)]*_0x1f0d97;this['position']['x']-=_0x28fa69;}}[a5_0x25c070(0x1cc)](){const _0x527f86=a5_0x25c070;this['isExploding']=!![],this[_0x527f86(0x1cd)]['y']>this[_0x527f86(0x1c1)][_0x527f86(0x1c0)]?this[_0x527f86(0x1cd)]['y']=this[_0x527f86(0x1c1)][_0x527f86(0x1c0)]+0x14:this[_0x527f86(0x1cd)]['y']+=Math[_0x527f86(0x1ce)]()*(0x23-0x19)+0x14,this[_0x527f86(0x1cd)]['x']+=Math['random']()*(0x5+0x5)-0x1e,setTimeout(()=>{const _0x23cdea=_0x527f86;this[_0x23cdea(0x1db)][_0x23cdea(0x1dc)][_0x23cdea(0x1c9)]=0x1,setTimeout(()=>{const _0x17f010=_0x23cdea;this[_0x17f010(0x1d3)][_0x17f010(0x1cf)](this);},0x64);},0x32);}}