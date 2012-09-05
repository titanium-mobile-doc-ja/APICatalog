#UIカタログ - Titanium.UI.TextArea
TextFieldと異なり、こちらは複数行のテキスト入力を行うためのコントロールです。

TextFieldに比べると若干設定可能な内容は減ります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190706.png)

```JavaScript
var ta1 = Titanium.UI.createTextArea({
	value:'I am a textarea',
	height:70,
	width:300,
	top:60,
	font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
	color:'#888',
	textAlign:'left',
	appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT,	
	keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	returnKeyType:Titanium.UI.RETURNKEY_EMERGENCY_CALL,
	borderWidth:2,
	borderColor:'#bbb',
	borderRadius:5
});
win.add(ta1);

// Text area events
ta1.addEventListener('change',function(e){
	l.text = 'change fired, value = ' + e.value + '\nfield value = ' + ta1.value;
});
ta1.addEventListener('return',function(e){
	l.text = 'return fired, value = ' + e.value;
});

ta1.addEventListener('blur',function(e){
	l.text = 'blur fired, value = ' + e.value;
});
ta1.addEventListener('focus',function(e){
	l.text = 'focus fired, value = ' + e.value;
});
```

##関連するドキュメント

 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/textarea.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextArea-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
