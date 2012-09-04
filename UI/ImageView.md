#UIカタログ - Titanium.UI.ImageView
画像表示が可能なViewです。

画像のアニメーションもさせることができます。 

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190701.png)

```JavaScript
// ローカルにある画像を指定する場合。
//  (http://〜で始まるパスを入れるとリモートから取得されます)
var imageView = Titanium.UI.createImageView({
    image:'../images/cloud.png',
    width:261,
    height:178,
    top:20
});
// 画像読み込み完了時のイベント
imageView.addEventListener('load', function(e){
    // e.stateに状態が返されます
});
Ti.UI.currentWindow.add(imageView);
```

##アニメーション
imagesプロパティを設定する事により、パラパラマンガの要領でアニメーションされます。

```JavaScript
var animationFrames = [
    '../images/frame01.jpg',
    '../images/frame02.jpg',
    '../images/frame03.jpg',
    '../images/frame04.jpg'
];
var animationView =  Titanium.UI.createImageView({
    height: 200,
    width: 200,
    top: 30,
    images: animationFrames,
    // ミリ秒単位で次のフレームまでの間隔を指定します
    duration: 100, 
    // 繰り返し回数を指定します（0の場合は無限に繰り返します）
    repeatCount: 0
});
// アニメーション開始時のイベント
animationView.addEventListener('start', function(e){
});
// アニメーション終了時のイベント
animationView.addEventListener('stop', function(e){
});
// フレーム変更時のイベント
animationView.addEventListener('change', function(e){
    // e.indexにフレームのindexが返ります
});
Ti.UI.currentWindow.add(animationView);

// パラパラマンガを開始する
animationView.start();
// アニメーションを中断
animationView.pause();
// アニメーションを終了
animationView.stop();
```

ちなみにwidth, heightプロパティ指定時に元画像サイズよりも大きい場合、そのサイズに画像が引き伸ばされます。

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_basic.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_animated.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_file.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_remote.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_scaling.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_positioning.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_encoding.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_blob.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_mask.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_toolbar.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/image_view_updateimages.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.Annotation-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
