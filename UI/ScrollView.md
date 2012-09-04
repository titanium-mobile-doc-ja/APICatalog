#UIカタログ - Titanium.UI.ScrollView

スクロール可能なViewです。

表示エリアを大きく超えるサイズの独自のviewをつくる場合に使用します。

たとえば、原寸画像をそのままの大きさで表示し、ユーザによるスクロールをさせるなどの利用方法が考えられます。

![](https://img.skitch.com/20110626-j1id74514r8ysi49tisimgb4sj.png)

でも、WebViewにしてもTableViewにしてもこの機能を継承しているので、なかなか使いどころが難しいかもしれません。

```JavaScript
var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    bottom: 0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var imageView = Ti.UI.createImageView({
    // http://ja.wikipedia.org/wiki/ %E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Tokyo_metro_map.png
    image: 'Tokyo_metro_map.png',
    width:4000,
    height:3000
});
scrollView.add(imageView);
scrollView.scrollTo(1600, 1200);
Titanium.UI.currentWindow.add(scrollView);

// スクロール時のイベント
scrollView.addEventListener('scroll', function(e){
    // e.x, e.y スクロール後の座標を返す
});
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/scroll_views_basic.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/scroll_views_tabs.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/scroll_views_many.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/scroll_views_textareas.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/scroll_views_without_clipping.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/scroll_views_scaling.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
