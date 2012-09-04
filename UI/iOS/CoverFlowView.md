#UIカタログ - Titanium.UI.iOS.CoverFlowView
iPodやiTunesでおなじみの処理である画像を左右にスクロールさせながら拡大表示するカバーフローですが、このViewを利用することにより、画像の配列を渡すだけで簡単に実現できます。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190655.png)

```JavaScript
// 表示対象の画像は配列として渡します
var images = [
    '../images/imageview/01.jpg',
    '../images/imageview/02.jpg',
    '../images/imageview/03.jpg',
    '../images/imageview/04.jpg',
    '../images/imageview/05.jpg'
];
// 背景色とセットで画像一覧を引き渡します
var view = Titanium.UI.createCoverFlowView({
    images: images,
    backgroundColor: '#000'
});

// 画像選択時のイベント
view.addEventListener('click',function(e){
    Titanium.API.info('image clicked: ' + e.index + ', selected is ' + view.selected);	
});

// フリックなどで選択中の画像が変わったときのイベント
view.addEventListener('change',function(e){
    Titanium.API.info('現在の画像: ' + e.index + ', 直近の画像: ' + view.selected);	
});

Ti.UI.currentWindow.add(view);
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/coverflow.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.CoverFlowView-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
