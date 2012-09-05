#UIカタログ - Titanium.UI.Button
ボタンは次の４つのいずれかで表現されます。

 * テキストのみ
 * 画像のみ
 * システムボタン
 * 画像とテキストの組み合わせ

```JavaScript
// 背景画像としてblue.png, blue_pressed.pngが用意されているものとします。
var button1 = Titanium.UI.createButton({
  backgroundImage:'blue.png',
  backgroundSelectedImage:'blue_pressed.png',
  title:'Hello',
  color:'#ff0000',
  height:47,
  top:30
});
button1.addEventListener('click', function(e) {
  // ボタンクリック時のイベント
});

// こちらはシンプルなボタンです。
var button2 = Titanium.UI.createButton({
  title:'Hello',
  color:'#ff0000',
  height:30,
  width:100,
  top:100
});
button2.addEventListener('click', function(e){
    // ...
});
```

上記のコード例で次のようなボタンイメージとなります。

![](http://img.skitch.com/20090708-jp65j8b4dt1tjytaca4jmgppt.jpg)

##システムボタンとボタン形状

 * [howto_button_icon システムボタンアイコンの使い方]
 * [howto_button_style ボタン形状の指定]

##スペイサー
コントロール間の距離を調整するためには、ボタンを特殊な形式に指定する必要があります。

###可変幅のスペイサー
ツールバーなどで左右端や中央にボタンを配置したい場合があると思います。
そういった場合には可変サイズの指定をした特殊なボタンを配置することで対処できます。

```JavaScript
// 中央にボタンを配置するパターン
var flexSpace = Titanium.UI.createButton({
   systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var button = Titanium.UI.createButton({title: 'ど真ん中'});
Titanium.UI.currentWindow.setToolbar([flexSpace,button,flexSpace]);
```

```JavaScript
// やや右寄りに配置する
var flexSpace = Titanium.UI.createButton({
   systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE,
});
var button = Titanium.UI.createButton({title:'Text'});
Titanium.UI.currentWindow.setToolbar([flexSpace,flexSpace,button,flexSpace]);
```

###固定幅スペイサー
両端から少し間を持たせたいとき、隣のボタンとの間を取りたいときなどに固定幅の特殊なボタンを配置することで解決します。

```JavaScript
var fixedSpace = Titanium.UI.createButton({
   systemButton:Titanium.UI.iPhone.SystemButton.FIXED_SPACE,
   width: '40',
});
var button = Titanium.UI.createButton({title:'Text'});
Titanium.UI.currentWindow.setToolbar([fixedSpace,button]);
```

##関連するドキュメント

 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/button.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Button-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.SystemButtonStyle-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
