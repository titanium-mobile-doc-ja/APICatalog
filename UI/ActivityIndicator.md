#UIカタログ - Titanium.UI.ActivityIndicator
現在なんらかの処理中であることを示すアイコンとメッセージを表示するコントロールです。

デフォルトは白いので背景色などを調整する必要があるかもしれません。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190720.png)

```JavaScript
var actInd = Titanium.UI.createActivityIndicator({
	bottom:10, 
	height:50,
	width:10,
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});

var button1 = Titanium.UI.createButton({
	title:'Show',
	height:35,
	width:130,
	top:10,
	left:20,
});
button1.addEventListener('click', function(){
	// 表示形式は以下の種類から選べます。
	/*
	actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
	actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.DARK;
	actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
	*/
	// メッセージ関連の設定
	actInd.font = {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'};
	actInd.color = 'white';
	actInd.message = 'Loading...';
	actInd.width = 210;
	// 表示します
	actInd.show();
});
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/activity_indicator.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ActivityIndicator-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.ActivityIndicatorStyle-object.html
  
----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )

