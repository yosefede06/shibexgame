const a12_0x593f76=a12_0x1393;(function(_0x2d61de,_0x4a9eb5){const _0x187eb2=a12_0x1393,_0x401f18=_0x2d61de();while(!![]){try{const _0x29c9f0=parseInt(_0x187eb2(0x180))/0x1+-parseInt(_0x187eb2(0x168))/0x2+parseInt(_0x187eb2(0x169))/0x3*(-parseInt(_0x187eb2(0x17c))/0x4)+-parseInt(_0x187eb2(0x187))/0x5+parseInt(_0x187eb2(0x188))/0x6*(parseInt(_0x187eb2(0x177))/0x7)+parseInt(_0x187eb2(0x167))/0x8*(-parseInt(_0x187eb2(0x17f))/0x9)+-parseInt(_0x187eb2(0x174))/0xa*(-parseInt(_0x187eb2(0x17b))/0xb);if(_0x29c9f0===_0x4a9eb5)break;else _0x401f18['push'](_0x401f18['shift']());}catch(_0x28de7e){_0x401f18['push'](_0x401f18['shift']());}}}(a12_0x3017,0xe1231));function a12_0x1393(_0x3247e5,_0x404e8a){const _0x30171e=a12_0x3017();return a12_0x1393=function(_0x1393e4,_0x208cae){_0x1393e4=_0x1393e4-0x167;let _0x3dac72=_0x30171e[_0x1393e4];return _0x3dac72;},a12_0x1393(_0x3247e5,_0x404e8a);}const rocketWidth=0x78,rocketHeight=0x3c,rocketImage=a12_0x593f76(0x17a),rocketSpeed=0x14;class Rocket_spacex{constructor(_0x3a755b,_0x4a41d9,_0x5a0167,_0x242d8f){const _0x19a801=a12_0x593f76;this[_0x19a801(0x175)]=_0x3a755b,this[_0x19a801(0x176)]=_0x4a41d9,this[_0x19a801(0x171)]=_0x242d8f,this[_0x19a801(0x172)]={'x':_0x3a755b[_0x19a801(0x181)][_0x19a801(0x182)],'y':_0x5a0167},this[_0x19a801(0x181)]={'width':rocketWidth,'height':rocketHeight},this[_0x19a801(0x17d)]={'imageInstance':undefined,'imageSource':rocketImage},this['speed']=rocketSpeed,this[_0x19a801(0x179)]();}[a12_0x593f76(0x179)](){const _0x49da0a=a12_0x593f76;this[_0x49da0a(0x17d)]['imageInstance']=new Image(),this['image']['imageInstance'][_0x49da0a(0x186)]=this[_0x49da0a(0x17d)][_0x49da0a(0x16f)];}['move'](){const _0x3313f2=a12_0x593f76;this[_0x3313f2(0x172)]['x']-=this[_0x3313f2(0x17e)];}}const warningSize=0x64,rocketWarningImage=a12_0x593f76(0x170),timeoutWarning=0xbb8,timeoutShoot=0x3e8;class Warning{constructor(_0x2dbb84,_0x25bfc0,_0x27084b,_0x114081){const _0x14104c=a12_0x593f76;this[_0x14104c(0x175)]=_0x2dbb84,this[_0x14104c(0x176)]=_0x25bfc0,this[_0x14104c(0x171)]=_0x114081,this[_0x14104c(0x172)]={'x':_0x2dbb84['size'][_0x14104c(0x182)]-0x3c,'y':_0x27084b},this[_0x14104c(0x181)]={'width':warningSize,'height':warningSize},this[_0x14104c(0x17d)]={'imageInstance':undefined,'imagePath':rocketWarningImage,'frames':0x2,'frameIndex':0x0},this[_0x14104c(0x184)]=![],this['init']();}['init'](){const _0x3fdcfb=a12_0x593f76;this[_0x3fdcfb(0x17d)]['imageInstance']=new Image(),this['image']['imageInstance'][_0x3fdcfb(0x186)]=this[_0x3fdcfb(0x17d)][_0x3fdcfb(0x16a)],this[_0x3fdcfb(0x183)]();}[a12_0x593f76(0x189)](_0x3b4acb){const _0x477da6=a12_0x593f76;!this[_0x477da6(0x184)]&&(this[_0x477da6(0x172)]['y']=_0x3b4acb);}[a12_0x593f76(0x183)](){setTimeout(()=>{const _0x59500d=a12_0x1393;!this[_0x59500d(0x171)][_0x59500d(0x16d)]&&(this[_0x59500d(0x17d)]['frameIndex']=0x1,this[_0x59500d(0x184)]=!![],this[_0x59500d(0x173)]()),!this[_0x59500d(0x171)]['isGameOver']?this[_0x59500d(0x171)]['audio']['tracks'][_0x59500d(0x16c)]['play']():this[_0x59500d(0x171)][_0x59500d(0x178)]['tracks']['warningSong'][_0x59500d(0x185)]();},timeoutWarning);}['shootRocket'](){const _0x207086=a12_0x593f76;!this[_0x207086(0x171)][_0x207086(0x16d)]&&setTimeout(()=>{const _0x3edb18=_0x207086;this[_0x3edb18(0x171)]['createRocket'](this),this['gameContext'][_0x3edb18(0x178)][_0x3edb18(0x18a)][_0x3edb18(0x16e)][_0x3edb18(0x16b)]();},timeoutShoot);}}function a12_0x3017(){const _0x192262=['width','changeSprite','isAboutToShoot','pause','src','8142330VJXTVN','6FiRnWT','move','tracks','789664NYTFiT','2055266YxZPeH','899898zmHrHi','imagePath','play','warningSong','isGameOver','rocketSong','imageSource','./images/warningShibex.png','gameContext','position','shootRocket','740ZCnwWV','canvas','ctx','5020421HWPfBh','audio','init','./images/rocketFire.png','468831ZymITB','8YjScVO','image','speed','72Mztxaw','1096699zvGxgm','size'];a12_0x3017=function(){return _0x192262;};return a12_0x3017();}