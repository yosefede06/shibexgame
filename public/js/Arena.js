const a0_0x30c0b0=a0_0xaf56;(function(_0x8f83aa,_0x55f372){const _0x592306=a0_0xaf56,_0x330c4a=_0x8f83aa();while(!![]){try{const _0x213a94=-parseInt(_0x592306(0x1d3))/0x1+-parseInt(_0x592306(0x1cc))/0x2+-parseInt(_0x592306(0x1f0))/0x3*(-parseInt(_0x592306(0x1d4))/0x4)+-parseInt(_0x592306(0x1f6))/0x5*(parseInt(_0x592306(0x1dc))/0x6)+-parseInt(_0x592306(0x1e9))/0x7+-parseInt(_0x592306(0x1eb))/0x8+parseInt(_0x592306(0x1ef))/0x9;if(_0x213a94===_0x55f372)break;else _0x330c4a['push'](_0x330c4a['shift']());}catch(_0x4f4bd4){_0x330c4a['push'](_0x330c4a['shift']());}}}(a0_0x4551,0x50d70));class Arena{constructor(_0x243cb4,_0x44006a,_0x4f556c,_0x185a15,_0xb4d867,_0x238fea,_0x1d3c5f){const _0x15acae=a0_0xaf56;this['players']=undefined,this[_0x15acae(0x1e8)]=_0x243cb4,this[_0x15acae(0x1e3)]=_0x185a15,this[_0x15acae(0x1e0)]=_0x44006a,this[_0x15acae(0x1e5)]=undefined,this[_0x15acae(0x1ce)]=_0x4f556c,this[_0x15acae(0x1de)]=undefined,this[_0x15acae(0x1ed)]=_0xb4d867,this['bgImage']=_0x238fea,this['gctx']=_0x1d3c5f;}async[a0_0x30c0b0(0x1ee)](_0x16bdf3){const _0x183c65=a0_0x30c0b0,_0x3893a0=Moralis[_0x183c65(0x1f8)][_0x183c65(0x1d0)](_0x183c65(0x1cd)),_0x4a67b6=new Moralis[(_0x183c65(0x1ec))](_0x3893a0);let _0x408d71=await _0x4a67b6[_0x183c65(0x1ea)]();this[_0x183c65(0x1e5)]=Math[_0x183c65(0x1e2)](_0x408d71[_0x183c65(0x1da)]('price')*Math[_0x183c65(0x1e2)](parseInt(_0x16bdf3))*0x64)/0x64;}async[a0_0x30c0b0(0x1d7)](){const _0x57616a=a0_0x30c0b0;var _0x15b74b=[];const _0x25be06=Moralis[_0x57616a(0x1f8)][_0x57616a(0x1d0)]('Winners'),_0x576964=new Moralis['Query'](_0x25be06),_0x8e294f=await _0x576964['find']();try{for(var _0x1726b2=0x0;_0x1726b2<_0x8e294f['length'];_0x1726b2++){_0x15b74b[_0x57616a(0x1ca)]({'key':_0x8e294f['at'](_0x1726b2)['attributes'][_0x57616a(0x1e6)],'value':_0x8e294f['at'](_0x1726b2)[_0x57616a(0x1f3)]['money']});}return console[_0x57616a(0x1d6)](_0x15b74b),_0x15b74b;}catch(_0x412a22){console[_0x57616a(0x1d6)](_0x57616a(0x1dd));}}async[a0_0x30c0b0(0x1df)](_0x59c1a0){const _0x16af08=a0_0x30c0b0,_0x48adb0=Moralis[_0x16af08(0x1f8)][_0x16af08(0x1d0)]('Number'),_0xbf54bb=new Moralis[(_0x16af08(0x1ec))](_0x48adb0),_0x20bbbc=await _0xbf54bb[_0x16af08(0x1ea)]();let _0x53651f=await _0x20bbbc[_0x16af08(0x1da)](_0x16af08(0x1c9)+_0x59c1a0);return _0x53651f;}async['updatePlayersIn'](){const _0x39152f=a0_0x30c0b0,_0x3f73e1=Moralis[_0x39152f(0x1f8)][_0x39152f(0x1d0)](_0x39152f(0x1f7)),_0x3178cb=new Moralis[(_0x39152f(0x1ec))](_0x3f73e1),_0x17980d=await _0x3178cb[_0x39152f(0x1ea)]();let _0x314b07=await _0x17980d[_0x39152f(0x1da)](this['name']);return this['playersIn']=_0x314b07,_0x314b07;}[a0_0x30c0b0(0x1fa)](){const _0x125f00=a0_0x30c0b0;this[_0x125f00(0x1f2)][_0x125f00(0x1e4)]['left'][_0x125f00(0x1f5)][_0x125f00(0x1f4)]=this['bgImage'],this[_0x125f00(0x1f2)][_0x125f00(0x1e4)][_0x125f00(0x1cf)][_0x125f00(0x1f5)]['src']=this[_0x125f00(0x1f1)];}}Arena['prototype']['onclick']=async function(_0x22feb,_0x49b4b8){const _0x1443f3=a0_0x30c0b0;if(this['button'][_0x1443f3(0x1d9)](_0x22feb,_0x49b4b8)){this['gctx'][_0x1443f3(0x1d2)][_0x1443f3(0x1db)][_0x1443f3(0x1f9)]('click',checkArena);const _0x85eb33=await this[_0x1443f3(0x1f2)][_0x1443f3(0x1d1)][_0x1443f3(0x1d5)]();if(!_0x85eb33)this[_0x1443f3(0x1f2)]['canvas'][_0x1443f3(0x1db)][_0x1443f3(0x1e7)]('click',checkArena),add_iotex_chain();else{if(this[_0x1443f3(0x1f2)][_0x1443f3(0x1d1)][_0x1443f3(0x1d8)])return this[_0x1443f3(0x1f2)][_0x1443f3(0x1d2)][_0x1443f3(0x1db)][_0x1443f3(0x1e7)]('click',checkArena),![];else this[_0x1443f3(0x1fa)](),await this[_0x1443f3(0x1f2)]['transaction'][_0x1443f3(0x1cb)](this[_0x1443f3(0x1e0)],Game['user']['get'](_0x1443f3(0x1e1)),this[_0x1443f3(0x1e8)]);}}};function a0_0xaf56(_0x339208,_0x684e92){const _0x4551ed=a0_0x4551();return a0_0xaf56=function(_0xaf5602,_0x528acc){_0xaf5602=_0xaf5602-0x1c9;let _0x177a11=_0x4551ed[_0xaf5602];return _0x177a11;},a0_0xaf56(_0x339208,_0x684e92);}function a0_0x4551(){const _0x2c879a=['attributes','src','imageInstance','100ikXMZh','Number','Object','removeEventListener','updateArenaBgImage','amount','push','transfer','276582EwRHny','Price','price_draw','right','extend','transaction','canvas','300127pPtser','44644Kxqkjo','check_chain','log','getWinning','transaction_in_proccess','onclick','get','obejectInDOM','147624qcIUtj','error\x20winners\x20data','playersIn','amountArena','price','ethAddress','round','capacity','background','price_dollar','address','addEventListener','name','2140257edOhNz','first','2369232gricrG','Query','button','get_price','13858686VBdRGQ','87QsgKnr','bgImage','gctx'];a0_0x4551=function(){return _0x2c879a;};return a0_0x4551();}