const a12_0x1ad66d=a12_0x3a5e;function a12_0x1d4b(){const _0x3738dd=['isDead','shootRocket','createRocket','722968ZgityE','./images/warningShibex.png','position','imageInstance','imageSource','ctx','66253bLZUye','size','warningSong','frameIndex','audio','1516440bkAcGk','speed','6hByiiI','width','1310hYdZoT','rocketSong','121832BeZhWz','move','imagePath','play','image','init','5178572agranS','837YnLgqm','player','src','canvas','35970WtrGCb','6LOIeoP','254059wzznCC','isAboutToShoot','tracks','changeSprite','isGameOver','gameContext','./images/rocketFire.png'];a12_0x1d4b=function(){return _0x3738dd;};return a12_0x1d4b();}(function(_0x329028,_0x525cb3){const _0x1d90bb=a12_0x3a5e,_0x1b3099=_0x329028();while(!![]){try{const _0x1a8d31=-parseInt(_0x1d90bb(0x92))/0x1*(-parseInt(_0x1d90bb(0xa9))/0x2)+-parseInt(_0x1d90bb(0x91))/0x3*(parseInt(_0x1d90bb(0x9c))/0x4)+-parseInt(_0x1d90bb(0x83))/0x5*(parseInt(_0x1d90bb(0x90))/0x6)+parseInt(_0x1d90bb(0x8b))/0x7+parseInt(_0x1d90bb(0x85))/0x8*(parseInt(_0x1d90bb(0x8c))/0x9)+-parseInt(_0x1d90bb(0xa7))/0xa+-parseInt(_0x1d90bb(0xa2))/0xb;if(_0x1a8d31===_0x525cb3)break;else _0x1b3099['push'](_0x1b3099['shift']());}catch(_0x2a9cf5){_0x1b3099['push'](_0x1b3099['shift']());}}}(a12_0x1d4b,0xca40d));const rocketWidth=0x78,rocketHeight=0x3c,rocketImage=a12_0x1ad66d(0x98),rocketSpeed=0x14;function a12_0x3a5e(_0xfcf4c1,_0x50401e){const _0x1d4b46=a12_0x1d4b();return a12_0x3a5e=function(_0x3a5eb2,_0x4c221a){_0x3a5eb2=_0x3a5eb2-0x82;let _0x13a0ef=_0x1d4b46[_0x3a5eb2];return _0x13a0ef;},a12_0x3a5e(_0xfcf4c1,_0x50401e);}class Rocket_spacex{constructor(_0x252510,_0xcbbb63,_0x1758fa,_0x249135){const _0x140cdf=a12_0x1ad66d;this[_0x140cdf(0x8f)]=_0x252510,this[_0x140cdf(0xa1)]=_0xcbbb63,this[_0x140cdf(0x97)]=_0x249135,this[_0x140cdf(0x9e)]={'x':_0x252510[_0x140cdf(0xa3)][_0x140cdf(0x82)],'y':_0x1758fa},this[_0x140cdf(0xa3)]={'width':rocketWidth,'height':rocketHeight},this['image']={'imageInstance':undefined,'imageSource':rocketImage},this[_0x140cdf(0xa8)]=rocketSpeed,this['init']();}[a12_0x1ad66d(0x8a)](){const _0x5664a3=a12_0x1ad66d;this[_0x5664a3(0x89)][_0x5664a3(0x9f)]=new Image(),this[_0x5664a3(0x89)]['imageInstance'][_0x5664a3(0x8e)]=this[_0x5664a3(0x89)][_0x5664a3(0xa0)];}[a12_0x1ad66d(0x86)](){const _0xe216d8=a12_0x1ad66d;this[_0xe216d8(0x9e)]['x']-=this[_0xe216d8(0xa8)];}}const warningSize=0x64,rocketWarningImage=a12_0x1ad66d(0x9d),timeoutWarning=0xbb8,timeoutShoot=0x3e8;class Warning{constructor(_0xe2d6ef,_0x47aa10,_0x189e7a,_0x335a48){const _0xecb0d5=a12_0x1ad66d;this[_0xecb0d5(0x8f)]=_0xe2d6ef,this[_0xecb0d5(0xa1)]=_0x47aa10,this[_0xecb0d5(0x97)]=_0x335a48,this['position']={'x':_0xe2d6ef['size'][_0xecb0d5(0x82)]-0x3c,'y':_0x189e7a},this[_0xecb0d5(0xa3)]={'width':warningSize,'height':warningSize},this[_0xecb0d5(0x89)]={'imageInstance':undefined,'imagePath':rocketWarningImage,'frames':0x2,'frameIndex':0x0},this[_0xecb0d5(0x93)]=![],this[_0xecb0d5(0x8a)]();}['init'](){const _0x537e92=a12_0x1ad66d;this[_0x537e92(0x89)]['imageInstance']=new Image(),this[_0x537e92(0x89)][_0x537e92(0x9f)][_0x537e92(0x8e)]=this[_0x537e92(0x89)][_0x537e92(0x87)],this['changeSprite']();}[a12_0x1ad66d(0x86)](_0x31adae){const _0xa4ed26=a12_0x1ad66d;!this['isAboutToShoot']&&(this[_0xa4ed26(0x9e)]['y']=_0x31adae);}[a12_0x1ad66d(0x95)](){setTimeout(()=>{const _0x565a4d=a12_0x3a5e;!this[_0x565a4d(0x97)][_0x565a4d(0x96)]&&(this[_0x565a4d(0x89)][_0x565a4d(0xa5)]=0x1,this[_0x565a4d(0x93)]=!![],this[_0x565a4d(0x9a)]()),!this[_0x565a4d(0x97)]['isGameOver']?this[_0x565a4d(0x97)]['audio'][_0x565a4d(0x94)][_0x565a4d(0xa4)][_0x565a4d(0x88)]():this['gameContext'][_0x565a4d(0xa6)][_0x565a4d(0x94)]['warningSong']['pause']();},timeoutWarning);}[a12_0x1ad66d(0x9a)](){const _0x71ad6a=a12_0x1ad66d;!this[_0x71ad6a(0x97)][_0x71ad6a(0x96)]&&!this[_0x71ad6a(0x97)][_0x71ad6a(0x8d)][_0x71ad6a(0x99)]&&setTimeout(()=>{const _0x4bc31c=_0x71ad6a;this[_0x4bc31c(0x97)][_0x4bc31c(0x9b)](this),this[_0x4bc31c(0x97)][_0x4bc31c(0xa6)][_0x4bc31c(0x94)][_0x4bc31c(0x84)][_0x4bc31c(0x88)]();},timeoutShoot);}}