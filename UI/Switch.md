#UIカタログ - Titanium.UI.Switch
オンとオフの状態切り替えを行うためだけの部品になります。
設定画面ぐらいでしか出番がないかもしれません。

![](http://img.skitch.com/20090708-mey6y29wqa55965b7pyp9rrkmc.jpg)

```JavaScript
var s1 = Titanium.UI.createSwitch({
	value:false,
	top:30,
});
Ti.UI.currentWindow.add(s1);

// create a switch change listener
s1.addEventListener('change', function(e) {
    // e.valueにはスイッチの新しい値が true もしくは falseとして設定されます。
});
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/switch.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Switch-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
