#UIカタログ - Titanium.UI.View
Titanium MobileのWindowにはView、もしくはControlを格納できます。

複雑なUI制御/レイアウトをする際にはWindow上に直接Controlを配置するのではなく、Viewの上に配置していくほうが制御しやすいです。

##Viewの追加と表示
生成されたViewは必ずWindowもしくは他のViewに追加しなければ利用できません。

```JavaScript
// Viewを作成
Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'red',
   width:50,
   height:50
});

// 新たに作られた myView をWindowに追加する
Titanium.UI.currentWindow.add(myView);
```

最後に追加されたViewがWindow上では初期表示されますが、他の追加しておいたViewに切り替えたり、最初から`visible: false`として追加したViewを表示させるには`window#animate`を実行する事により、表示させる事が出来ます。

またshowメソッド、hideメソッドも用意されています。

その際にtransitionプロパティを指定する事により、すでに用意されているアニメーションを簡単に実行できます。

次の例では左へフリップするアニメーションで表示します。

```JavaScript
// myViewはすでにあるものとする
Titanium.UI.currentWindow.animate({
    view: myView,
    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});
```

Transitionアニメーションスタイルには次の5つがあります。

 * `Titanium.UI.iPhone.AnimationStyle.CURL_UP`
 * `Titanium.UI.iPhone.AnimationStyle.CURL_DOWN`
 * `Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT`
 * `Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT`
 * `Titanium.UI.iPhone.AnimationStyle.NONE`

##Viewのイベント
View系のオブジェクトには共通して以下のようなイベントをハンドリングできるようになっています。

```JavaScript
// タッチ開始
view.addEventListener('touchstart', function(e){
    // e.x, e.y：座標
});
// タッチしながら移動
view.addEventListener('touchmove', function(e){
    // e.x, e.y：座標
});
// タッチ終了
view.addEventListener('touchend', function(e){
    // e.x, e.y：座標
});
// タッチ中止
view.addEventListener('touchcancel', function(e){
    // e.x, e.y：座標
});
// シングルタップ
view.addEventListener('singletap', function(e){
    // e.x, e.y：座標
});
// ダブルタップ
view.addEventListener('doubletap', function(e){
    // e.x, e.y：座標
});
// 二本指でのシングルタップ
view.addEventListener('twofingertap', function(e){
    // e.x, e.y：座標
});
// スワイプ
view.addEventListener('swipe', function(e){
    // e.x, e.y：座標
    // e.direction：スワイプの向き(left | right)
});
// クリック
view.addEventListener('click', function(e){
    // e.x, e.y：座標
});
// ダブルクリック
view.addEventListener('dblclick', function(e){
    // e.x, e.y：座標
});
```

##Viewを削除する
画面の動的な変更をするために一旦画面に表示・使用したViewを削除することも可能です。

```JavaScript
Ti.UI.currentWindow.remove(view);
```

##レイアウト

###HorizontalLayout
指定したWindowやViewの中に配置したコントロールやViewが追加した順に水平に自動配置されていくレイアウト指定です。 

![](http://img.f.hatena.ne.jp/images/fotolife/d/donayama/20101031/20101031181903.png)

```JavaScript
var win = Ti.UI.currentWindow;

// レイアウトプロパティにhorizontalを指定する。
var view = Ti.UI.createView({
    height:300,
    width:320,
    layout:'horizontal'
});
win.add(view);

// leftの指定値ではなく、追加した順番にラベルが配置されているのが、
// 上のスクリーンショットと対比すると分かる。
var l1 = Ti.UI.createLabel({
    text:'I am the first label',
    left:5,
    width:'auto',
    height:20,
});
view.add(l1);

var l2 = Ti.UI.createLabel({
    text:'I am the second label',
    left:2,
    width:'auto',
    height:20
});
view.add(l2);

var l3 = Ti.UI.createLabel({
    text:'I am the third label',
    left:2,
    width:'auto',
    height:20
});
view.add(l3);
```

###VirticalLayout
指定したWindowやViewの中に配置したコントロールやViewが垂直に自動配置されていくレイアウト指定です。

次の例では左がWindowと中心部のVIew, 右がTable View内のRowでVirtical Layoutを指定したものになります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100310/20100310035013.png)
![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100310/20100310035014.png)

```JavaScript
// Windowのlayoutプロパティに 'virtical' を指定する。
var win = Ti.UI.currentWindow;
win.layout = 'vertical';

// ヘッダ部となるViewを設定する。（べつにヘッダというものがVirtical Layoutにあるわけではない）
var header = Ti.UI.createView({
    height:50,
    borderWidth:1,
    borderColor:'#999'
});
var headerLabel = Ti.UI.createLabel({
    color:'#777',
    top:10,
    textAlign:'center', 
    height:'auto', text:'Header'
});
header.add(headerLabel);
win.add(header);

// ボディ部となるViewを設定する。（同様にボディ部があるわけでもない）
// このボディ自体もVirtical Layoutするようにする(局所的なVirtical Layout)
var body = Ti.UI.createView({
    height:'auto', 
    layout:'vertical'
});
var bodyView1 = Ti.UI.createView({backgroundColor:'#336699', height:100, left:10, right:10});
var bodyView2 = Ti.UI.createView({backgroundColor:'#ff0000', height:50, left:10, right:10, top:10});
var bodyView3 = Ti.UI.createView({backgroundColor:'orange', height:50, left:10, right:10, top:10});
body.add(bodyView1);
body.add(bodyView2);
body.add(bodyView3);
win.add(body)

// 同様に「フッタ」を作る
var footer = Ti.UI.createView({
    height:50,
    borderWidth:1,
    borderColor:'#999'
});
var footerLabel = Ti.UI.createLabel({color:'#777', textAlign:'center', height:'auto', text:'Footer'});
footer.add(footerLabel);
win.add(footer);
```

##関連するドキュメント
 * KichenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/view_event_propagation.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/view_event_interaction.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/view_events.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/view_events_2.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/view_hide_show.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/views_zindex.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/horizontal_layout.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/vertical_layout_basic.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/vertical_layout_table_view.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View-object
http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.AnimationStyle-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
