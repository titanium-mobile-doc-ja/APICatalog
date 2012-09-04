#UIカタログ - Titanium.UI.ScrollableView

スクロール可能なViewです。

スワイプやボタンによるアクションでスクロールさせることが可能になります。 

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190700.png)

```JavaScript
var view1 = Ti.UI.createView({
    backgroundColor: 'red'
});
var view2 = Ti.UI.createView({
    backgroundColor: 'blue'
});
var view3 = Ti.UI.createView({
    backgroundColor: 'green'
});
var view4 = Ti.UI.createView({
    backgroundColor: 'black'
});
// 上記のviewを配列としてviewsプロパティに引き渡します。
var scrollView = Titanium.UI.createScrollableView({
    views: [view1,view2,view3,view4],
    showPagingControl: true,
    pagingControlHeight: 30,
    maxZoomScale: 2.0
});
// スクロールビューを配置する
Titanium.UI.currentWindow.add(scrollView);
```

##Viewを追加／削除するには
初期化時にviewを用意するのではなく、動的に後から足す場合は次のようにaddViewメソッドを使います。

同様にすでに存在するviewを削除する場合はremoveViewを利用します。

```JavaScript
// viewExtraを追加する
var viewExtra = Ti.UI.createView();
scrollView.addView(viewExtra);

// 現在表示中のページを削除する
scrollView.removeView(scrollView.views[scrollView.currentPage]);
```

##独自のプロパティ・イベント
プロパティとしては以下のものが用意されています。

||currentPage||int||現在表示中のViewのページ番号を取得する。指定したViewに移動するにはscrollToViewメソッドを利用する。||
||pagingControlColor||string||ページ表示用コントロールの背景色を指定する。デフォルトはblack。||
||pagingControlHeight||float||ページ表示用コントロールの高さを指定する。デフォルトは20。||
||showPagingControl||boolean||ページ表示用コントロールの表示制御を行う。||

イベントとしてはスクロールされたあとに発生するscrollイベントがあります。

```JavaScript
scrollView.addEventListener('scroll', function(e){
    // e.currentPage でスクロール後の新しいページ番号が返ります
    // e.view でスクロール後の新しいページのViewが返ります。
});
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/scroll_views_scrollable.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
