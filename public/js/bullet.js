function a5_0x57ea(){const _0x483767=['shoot','./images/bullet-impact.png','41404opcwPQ','speed','1588224QTtvPd','./images/bullet.png','canvas','explode','imageSource','destroyBullet','40565HsoYYO','image','src','baseLine','ctx','init','current','33RQBdXO','370YsTowQ','explosion','242861oDLdbt','88vZRTKi','878210upsXXZ','move','position','isExploding','621630NpQqEA','gameCtx','random','imageInstance','2QxCqCw','frameIndex','57051apOmYO','FPS'];a5_0x57ea=function(){return _0x483767;};return a5_0x57ea();}function a5_0x1c54(_0x419caa,_0x1837d7){const _0x57eac0=a5_0x57ea();return a5_0x1c54=function(_0x1c54c4,_0x3e6cee){_0x1c54c4=_0x1c54c4-0x1d6;let _0x4a491e=_0x57eac0[_0x1c54c4];return _0x4a491e;},a5_0x1c54(_0x419caa,_0x1837d7);}const a5_0x2c2f0c=a5_0x1c54;(function(_0x4e7ac1,_0x1562c6){const _0x2b3fb8=a5_0x1c54,_0x426725=_0x4e7ac1();while(!![]){try{const _0x9de768=-parseInt(_0x2b3fb8(0x1e4))/0x1*(-parseInt(_0x2b3fb8(0x1ee))/0x2)+parseInt(_0x2b3fb8(0x1e1))/0x3*(parseInt(_0x2b3fb8(0x1f4))/0x4)+-parseInt(_0x2b3fb8(0x1e6))/0x5+parseInt(_0x2b3fb8(0x1ea))/0x6+parseInt(_0x2b3fb8(0x1da))/0x7*(-parseInt(_0x2b3fb8(0x1e5))/0x8)+parseInt(_0x2b3fb8(0x1f0))/0x9*(-parseInt(_0x2b3fb8(0x1e2))/0xa)+parseInt(_0x2b3fb8(0x1f6))/0xb;if(_0x9de768===_0x1562c6)break;else _0x426725['push'](_0x426725['shift']());}catch(_0x5460e5){_0x426725['push'](_0x426725['shift']());}}}(a5_0x57ea,0x1fedd));class Bullet{constructor(_0x5cf76c,_0x596326,_0xb262a3,_0x1cdc16,_0x3e02b9){const _0x57d5b9=a5_0x1c54;this[_0x57d5b9(0x1d6)]=_0x5cf76c,this[_0x57d5b9(0x1de)]=_0x596326,this['gameCtx']=_0x3e02b9,this[_0x57d5b9(0x1e8)]={'x':_0x1cdc16['x']+0x10,'y':_0x1cdc16['y']},this['speed']=0x14,this[_0x57d5b9(0x1f1)]=_0xb262a3,this[_0x57d5b9(0x1db)]={'shoot':{'imageInstance':undefined,'imageSource':_0x57d5b9(0x1f7),'size':{'width':0xa,'height':0x46}},'explosion':{'imageInstance':undefined,'imageSource':_0x57d5b9(0x1f3),'frames':0x2,'frameIndex':0x0,'size':{'width':0x32,'height':0x32}}},this[_0x57d5b9(0x1e9)]=![],this[_0x57d5b9(0x1df)]();}[a5_0x2c2f0c(0x1df)](){const _0x5e6a12=a5_0x2c2f0c,_0x4316e2=0xa;this[_0x5e6a12(0x1e8)]['x']=this[_0x5e6a12(0x1e8)]['x']+(Math[_0x5e6a12(0x1ec)]()*(0x2*_0x4316e2)-_0x4316e2),this[_0x5e6a12(0x1db)][_0x5e6a12(0x1f2)]['imageInstance']=new Image(),this[_0x5e6a12(0x1db)]['shoot'][_0x5e6a12(0x1ed)][_0x5e6a12(0x1dc)]=this[_0x5e6a12(0x1db)]['shoot'][_0x5e6a12(0x1d8)],this[_0x5e6a12(0x1db)][_0x5e6a12(0x1e3)][_0x5e6a12(0x1ed)]=new Image(),this[_0x5e6a12(0x1db)][_0x5e6a12(0x1e3)][_0x5e6a12(0x1ed)]['src']=this[_0x5e6a12(0x1db)]['explosion'][_0x5e6a12(0x1d8)],this[_0x5e6a12(0x1db)][_0x5e6a12(0x1e0)]=this[_0x5e6a12(0x1db)][_0x5e6a12(0x1f2)][_0x5e6a12(0x1ed)],this[_0x5e6a12(0x1e7)]();}[a5_0x2c2f0c(0x1e7)](_0x28d16a){const _0xa60a52=a5_0x2c2f0c;if(!this[_0xa60a52(0x1e9)])this[_0xa60a52(0x1e8)]['y']+=this[_0xa60a52(0x1f5)];else{const _0x27426f=0x3c/this['FPS']*_0x28d16a;this[_0xa60a52(0x1e8)]['x']-=_0x27426f;}}[a5_0x2c2f0c(0x1d7)](){const _0x544c0b=a5_0x2c2f0c;this['isExploding']=!![],this['position']['y']>this['canvas'][_0x544c0b(0x1dd)]?this[_0x544c0b(0x1e8)]['y']=this[_0x544c0b(0x1d6)][_0x544c0b(0x1dd)]+0x14:this[_0x544c0b(0x1e8)]['y']+=Math[_0x544c0b(0x1ec)]()*(0x23-0x19)+0x14,this[_0x544c0b(0x1e8)]['x']+=Math[_0x544c0b(0x1ec)]()*(0x5+0x5)-0x1e,setTimeout(()=>{const _0x5d500e=_0x544c0b;this[_0x5d500e(0x1db)]['explosion'][_0x5d500e(0x1ef)]=0x1,setTimeout(()=>{const _0xd42322=_0x5d500e;this[_0xd42322(0x1eb)][_0xd42322(0x1d9)](this);},0x64);},0x32);}}