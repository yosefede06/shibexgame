const a2_0x5d1106=a2_0x4067;function a2_0x4067(_0x4dbba7,_0x34e92d){const _0x326f0a=a2_0x326f();return a2_0x4067=function(_0x4067f7,_0x188d2a){_0x4067f7=_0x4067f7-0x72;let _0x1673f7=_0x326f0a[_0x4067f7];return _0x1673f7;},a2_0x4067(_0x4dbba7,_0x34e92d);}(function(_0x417484,_0x54ddb8){const _0x107b50=a2_0x4067,_0x21f9f0=_0x417484();while(!![]){try{const _0x51f504=-parseInt(_0x107b50(0x76))/0x1+parseInt(_0x107b50(0x87))/0x2+parseInt(_0x107b50(0x8e))/0x3+-parseInt(_0x107b50(0x9a))/0x4+-parseInt(_0x107b50(0x82))/0x5*(parseInt(_0x107b50(0x89))/0x6)+-parseInt(_0x107b50(0x94))/0x7+parseInt(_0x107b50(0x73))/0x8*(parseInt(_0x107b50(0x97))/0x9);if(_0x51f504===_0x54ddb8)break;else _0x21f9f0['push'](_0x21f9f0['shift']());}catch(_0x361f97){_0x21f9f0['push'](_0x21f9f0['shift']());}}}(a2_0x326f,0xd7438));const imageBackGround=a2_0x5d1106(0x72),imageInitialBackGround='./images/initialBackgroundShibex.png',imageGameOver=a2_0x5d1106(0x8d),imageClosureIronUpYellow='./images/shibexUp.png',imageClosureIronDownYellow=a2_0x5d1106(0x86),imageMenuBackground=a2_0x5d1106(0x9e),imageGameExplanation=a2_0x5d1106(0x9c),presentation_down=a2_0x5d1106(0x79),presentation_up=a2_0x5d1106(0x7a),mainBg=a2_0x5d1106(0x9b),initialBg=a2_0x5d1106(0x9f),gameOverBg=a2_0x5d1106(0x88),closeState='close',menu=a2_0x5d1106(0x90),game_explanation=a2_0x5d1106(0x7f);class Background{constructor(_0x47ac2a,_0x47a64c,_0x5d46bc,_0x34ca73,_0x499570=mainBg,_0x10ac9=null){const _0x4e472b=a2_0x5d1106;this[_0x4e472b(0x92)]=_0x47a64c,this[_0x4e472b(0x85)]=_0x10ac9,this[_0x4e472b(0x80)]={'x':_0x5d46bc,'y':0x0},this['size']={'width':_0x47ac2a[_0x4e472b(0x93)][_0x4e472b(0x7c)],'height':_0x47ac2a[_0x4e472b(0x93)][_0x4e472b(0x75)]},this[_0x4e472b(0x7d)]=_0x34ca73,this[_0x4e472b(0x95)]=undefined,this['imagePathMain']=imageBackGround,this[_0x4e472b(0x78)]=imageInitialBackGround,this['imagePathGameOver']=imageGameOver,this['imagePathTransitionUp']=imageClosureIronUpYellow,this[_0x4e472b(0x84)]=imageClosureIronDownYellow,this['imageMenuBackground']=imageMenuBackground,this[_0x4e472b(0x83)]=imageGameExplanation,this[_0x4e472b(0x9d)]=0.5,this[_0x4e472b(0x8c)]=1.3,this[_0x4e472b(0x8b)]=0x0,this[_0x4e472b(0x74)]=closeState,this[_0x4e472b(0x77)]=_0x499570,this['init']();}[a2_0x5d1106(0x8a)](){const _0x1f2291=a2_0x5d1106;(this[_0x1f2291(0x77)]===presentation_up||this[_0x1f2291(0x77)]===presentation_down)&&(this[_0x1f2291(0x93)][_0x1f2291(0x75)]/=0x2,this[_0x1f2291(0x80)]['x']=0x0);this['imageInstance']=new Image();switch(this[_0x1f2291(0x77)]){case mainBg:this[_0x1f2291(0x95)][_0x1f2291(0x7e)]=this[_0x1f2291(0x99)];break;case initialBg:this['imageInstance'][_0x1f2291(0x7e)]=this['imagePathInitial'];break;case gameOverBg:this[_0x1f2291(0x95)]['src']=this[_0x1f2291(0x96)];break;case presentation_up:this['imageInstance'][_0x1f2291(0x7e)]=this[_0x1f2291(0x7b)];break;case presentation_down:this[_0x1f2291(0x95)]['src']=this['imagePathTrasitionDown'];break;case menu:this[_0x1f2291(0x95)][_0x1f2291(0x7e)]=this[_0x1f2291(0x98)];break;case game_explanation:this[_0x1f2291(0x95)][_0x1f2291(0x7e)]=this['imageGameExplanation'];break;default:break;}}[a2_0x5d1106(0x81)](_0x2a8852){const _0x4f70c7=a2_0x5d1106;if(this['backgroundType']!==presentation_up&&this['backgroundType']!==presentation_down){const _0x2b4388=0x3c/this['FPS']*_0x2a8852;this[_0x4f70c7(0x80)]['x']-=_0x2b4388;}else{if(this[_0x4f70c7(0x85)]['isLoading']){const _0x3413be=0x0,_0x205b8d=this['loadingTransitionTime'],_0x1e566f=_0x205b8d,_0x268748=_0x1e566f+this[_0x4f70c7(0x8c)],_0x15c656=_0x268748,_0x56b683=_0x15c656+this[_0x4f70c7(0x9d)],_0x577839=this['loadingTransitionCurrentTime'];let _0x4d9311=undefined,_0x1864e3=undefined;if(_0x577839<_0x205b8d)this['backgroundType']===presentation_up?(_0x4d9311=-this[_0x4f70c7(0x93)]['height'],_0x1864e3=0x0):(_0x4d9311=this[_0x4f70c7(0x93)][_0x4f70c7(0x75)]*0x2,_0x1864e3=this[_0x4f70c7(0x93)][_0x4f70c7(0x75)]),this[_0x4f70c7(0x80)]['y']=this[_0x4f70c7(0x85)][_0x4f70c7(0x91)](_0x3413be,_0x4d9311,_0x205b8d,_0x1864e3,_0x577839);else{if(_0x577839>=_0x1e566f&&_0x577839<=_0x268748)this[_0x4f70c7(0x77)]===presentation_up?this['position']['y']=0x0:this[_0x4f70c7(0x80)]['y']=this[_0x4f70c7(0x93)][_0x4f70c7(0x75)];else{if(_0x577839<_0x56b683)this[_0x4f70c7(0x85)]['isPlaying']=!![],this[_0x4f70c7(0x85)]['isGameOver']=![],this[_0x4f70c7(0x77)]===presentation_up?(_0x4d9311=0x0,_0x1864e3=-this[_0x4f70c7(0x93)][_0x4f70c7(0x75)]):(_0x4d9311=this[_0x4f70c7(0x93)]['height'],_0x1864e3=this[_0x4f70c7(0x93)]['height']*0x2),this[_0x4f70c7(0x80)]['y']=this[_0x4f70c7(0x85)][_0x4f70c7(0x91)](_0x15c656,_0x4d9311,_0x56b683,_0x1864e3,_0x577839);else{this['backgroundType']===presentation_up?this['position']['y']=-this[_0x4f70c7(0x93)]['height']:this['position']['y']=this[_0x4f70c7(0x93)][_0x4f70c7(0x75)]*0x2;this[_0x4f70c7(0x85)][_0x4f70c7(0x8f)]=![],this[_0x4f70c7(0x74)]=closeState,this['loadingTransitionCurrentTime']=0x0;return;}}}this['loadingTransitionCurrentTime']+=0x1/(this[_0x4f70c7(0x9d)]*0x3c);}}}}function a2_0x326f(){const _0x162ac8=['gameCtx','./images/shibexDown.png','3406194eOTfDb','gameOver','126xwYRwC','init','loadingTransitionCurrentTime','loadingTransitionWaitTime','./images/gameoverShibex.png','5155740RTjtmd','isLoading','menu','linearTransition','ctx','size','8436246bHgNxV','imageInstance','imagePathGameOver','22206510LwqiPN','imageMenuBackground','imagePathMain','6002244lLZwRv','main','./images/game_explanation.jpeg','loadingTransitionTime','./images/arenabg.png','initial','./images/bgVolcan.jpg','8UnPLPY','loadingTransitionState','height','1335461IvhGJt','backgroundType','imagePathInitial','iron-down','iron-up','imagePathTransitionUp','width','FPS','src','game_explanation','position','move','230035tOmFHo','imageGameExplanation','imagePathTrasitionDown'];a2_0x326f=function(){return _0x162ac8;};return a2_0x326f();}