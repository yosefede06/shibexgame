var a3_0x5a19b8=a3_0x15d3;function a3_0x15d3(_0x49deed,_0x5d22e4){var _0xe235b0=a3_0xe235();return a3_0x15d3=function(_0x15d383,_0x381e7d){_0x15d383=_0x15d383-0x197;var _0x3bff9c=_0xe235b0[_0x15d383];return _0x3bff9c;},a3_0x15d3(_0x49deed,_0x5d22e4);}(function(_0x207688,_0x2b783a){var _0x235e0c=a3_0x15d3,_0x1decb0=_0x207688();while(!![]){try{var _0x23a291=-parseInt(_0x235e0c(0x1ab))/0x1*(-parseInt(_0x235e0c(0x19d))/0x2)+-parseInt(_0x235e0c(0x1a1))/0x3*(-parseInt(_0x235e0c(0x1a4))/0x4)+-parseInt(_0x235e0c(0x1bf))/0x5+parseInt(_0x235e0c(0x1a9))/0x6+parseInt(_0x235e0c(0x19c))/0x7+-parseInt(_0x235e0c(0x1b9))/0x8*(-parseInt(_0x235e0c(0x1c8))/0x9)+-parseInt(_0x235e0c(0x1bd))/0xa;if(_0x23a291===_0x2b783a)break;else _0x1decb0['push'](_0x1decb0['shift']());}catch(_0x5eefe7){_0x1decb0['push'](_0x1decb0['shift']());}}}(a3_0xe235,0xcd97a));class Transaction{constructor(){var _0x17a6c8=a3_0x15d3;this[_0x17a6c8(0x1b6)]=undefined,this[_0x17a6c8(0x1c6)]=undefined,this[_0x17a6c8(0x1b5)]=undefined,this[_0x17a6c8(0x1c3)]=undefined,this[_0x17a6c8(0x1b2)]=undefined,this[_0x17a6c8(0x1c7)]=undefined,this[_0x17a6c8(0x1a2)]=_0x17a6c8(0x1c4),this[_0x17a6c8(0x1b8)]=undefined,this[_0x17a6c8(0x19b)]='0x838403e073a79719a0927a16642ca7dcdc642bd5',this['transaction_in_proccess']=![],this[_0x17a6c8(0x19e)]=_0x17a6c8(0x1ac);}async[a3_0x5a19b8(0x1a7)](_0x384740,_0x3c1331,_0xce05fd){var _0x40f169=a3_0x5a19b8;this[_0x40f169(0x1c7)]=_0x384740,this[_0x40f169(0x1b8)]=_0x3c1331,this[_0x40f169(0x1b6)]=_0xce05fd,this['transaction_in_proccess']=!![];const _0x6136d2={'type':'erc20','amount':Moralis[_0x40f169(0x1a5)][_0x40f169(0x1b0)](this[_0x40f169(0x1c7)],'18'),'receiver':this[_0x40f169(0x1a2)],'contractAddress':this['contract'],'awaitReceipt':![]};let _0x2131cf=await Moralis['transfer'](_0x6136d2);_0x2131cf['on'](_0x40f169(0x1af),function(_0x2746ba){var _0x3f1e5c=_0x40f169;Game[_0x3f1e5c(0x1b7)]['hash']=_0x2746ba;}),_0x2131cf['on']('receipt',function(_0x10ea6d){var _0xc921b7=_0x40f169;Moralis[_0xc921b7(0x1a0)][_0xc921b7(0x19a)][_0xc921b7(0x1ba)](Game[_0xc921b7(0x1b7)][_0xc921b7(0x1c3)])[_0xc921b7(0x198)](function(_0x20aad3){var _0x77535b=_0xc921b7;Game['transaction'][_0x77535b(0x1b5)]=_0x20aad3;if(Game[_0x77535b(0x1b7)]['check_data'](Game[_0x77535b(0x1b7)][_0x77535b(0x1c7)]))Game['start']();else{Game['canvas'][_0x77535b(0x1bb)][_0x77535b(0x1a6)](_0x77535b(0x19f),checkArena),console[_0x77535b(0x1a8)]('error\x20with\x20transaction');throw _0x77535b(0x1b3);}});})['on'](_0x40f169(0x1c1),_0x458f5a=>{var _0x3cd797=_0x40f169;Game[_0x3cd797(0x1b7)][_0x3cd797(0x1be)]=![],Game['canvas'][_0x3cd797(0x1bb)]['addEventListener']('click',checkArena);});}['check_data'](_0x49c56f){var _0x5c3e1b=a3_0x5a19b8;return this[_0x5c3e1b(0x1b5)][_0x5c3e1b(0x1c5)]['toUpperCase']()==this[_0x5c3e1b(0x1b8)][_0x5c3e1b(0x1aa)]()&&this['check_chain']()&&this[_0x5c3e1b(0x1a3)](this[_0x5c3e1b(0x1b5)]['input'])-_0x49c56f<=0x3e8;}async[a3_0x5a19b8(0x1ae)](){var _0x1d8c67=a3_0x5a19b8;const _0x210c4d=await detectEthereumProvider();if(_0x210c4d){const _0x1453c8=await _0x210c4d[_0x1d8c67(0x199)]({'method':_0x1d8c67(0x1bc)});return this[_0x1d8c67(0x19e)]==_0x1453c8;}else return console[_0x1d8c67(0x1a8)](_0x1d8c67(0x1b4)),![];}[a3_0x5a19b8(0x1a3)](_0xdd1712){var _0x40a085=a3_0x5a19b8;for(var _0x34ba82=0x0;_0x34ba82<_0xdd1712[_0x40a085(0x1ad)];_0x34ba82++){if(_0xdd1712[_0x40a085(0x1b1)](_0x34ba82,_0x34ba82+0xa)=='0000000000')for(var _0x2cd69c=_0x34ba82;_0x2cd69c<_0xdd1712[_0x40a085(0x1ad)];_0x2cd69c++){if(_0xdd1712[_0x2cd69c]!='0')for(var _0x19e32a=_0x2cd69c;_0x19e32a<_0xdd1712[_0x40a085(0x1ad)];_0x19e32a++){if(_0xdd1712[_0x40a085(0x1b1)](_0x19e32a,_0x19e32a+0xa)==_0x40a085(0x197))for(var _0x28c616=_0x19e32a;_0x19e32a<_0xdd1712[_0x40a085(0x1ad)];_0x28c616++){if(_0xdd1712[_0x28c616]!='0'&&_0xdd1712['substring'](_0x28c616-0x14,_0x28c616)==_0x40a085(0x1c0)){let _0x1f4806=parseInt(_0xdd1712['substring'](_0x28c616,_0xdd1712[_0x40a085(0x1ad)]),0x10);return _0x1f4806[_0x40a085(0x1c2)]()[_0x40a085(0x1b1)](0x0,_0x1f4806['toString']()[_0x40a085(0x1ad)]-0x12);}}}}}}}function a3_0xe235(){var _0x3796dd=['12qpqEbM','Units','addEventListener','transfer','log','6411942MnxkWT','toUpperCase','57ZNjrAY','0x1251','length','check_chain','transactionHash','Token','substring','block','error\x20with\x20transaction','not\x20connected\x20to\x20metamask','receipt','arena','transaction','sender','904LJzajP','getTransaction','obejectInDOM','eth_chainId','25750740pbLiRh','transaction_in_proccess','4806760FJbIMT','00000000000000000000','error','toString','hash','0x6c0C7436A63F8E90Ba4aF3782ace272dDC162BEF','from','user','value','58563phrRfd','0000000000','then','request','eth','contract','11296901usGXqt','9172UCoDrs','chain','click','web3','699339AZWUzx','receiver','check_value'];a3_0xe235=function(){return _0x3796dd;};return a3_0xe235();}