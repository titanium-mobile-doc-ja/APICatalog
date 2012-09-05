#UIカタログ - Titanium.UI.SearchBar
検索用のツールバーです。

結果表示のためのTableViewやWebView, MapViewなどとセットで登場するかたちになります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190719.png)

```JavaScript
// コントロールの配置
var search = Titanium.UI.createSearchBar({
	barColor:'#000', 
	showCancel:true,
	height:43,
	top:0,
});
Titanium.UI.currentWindow.add(search);
```

##独自のイベント
SearchBar内での動作に応じたイベントが用意されています。

```JavaScript
// 内容変化時のイベント
search.addEventListener('change', function(e){
	Titanium.API.info('search bar: you type ' + e.value + ' act val ' + search.value);
});
// cancelボタンクリック時イベント
search.addEventListener('cancel', function(e){
	Titanium.API.info('search bar cancel fired');
	search.blur();
});
// 内容確定時イベント
search.addEventListener('return', function(e){
	Titanium.UI.createAlertDialog({title:'Search Bar', message:'You typed ' + e.value }).show();
	search.blur();
});
// フォーカスの取得・喪失時イベント
search.addEventListener('focus', function(e){
	Titanium.API.info('search bar: focus received')
});
search.addEventListener('blur', function(e){
	Titanium.API.info('search bar:blur received')
});
```

##関連するドキュメント
 * KitchenSinkソース
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/searchbar.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.SearchBar-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
