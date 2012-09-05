#UIカタログ - Titanium.UI.ProgressBar
進捗表示を行うコントロールです。

進捗を返すイベントリスナとセットで利用することになるでしょう。

たとえば、ダウンロードやアップロードの状態を返すイベントなどが対象になります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190721.png)

```JavaScript
var ind=Titanium.UI.createProgressBar({
	width:150,
	min:0,
	max:10,
	value:0,
	height:70,
	color:'#888',
	message:'Downloading 0 of 10',
	font:{fontSize:14, fontWeight:'bold'},
	style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	top:60	
});
win.add(ind);
ind.show();

// タイマーによる進捗シミュレーション
var interval = setInterval(function(){
	if (ind.value == 10){
		clearInterval(interval);
		ind.hide();
		return;
	}
	ind.value = ind.value + 1;
	ind.message = 'Downloading ' + ind.value + ' of 10';
},1000);
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/progress_bar.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ProgressBar-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.ProgressBarStyle-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
