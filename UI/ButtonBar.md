#UIカタログ - Titanum.UI.ButtonBar (iPhoneのみ)
ButtonBarとは次の画像のNavBarの中央, コンテンツエリアの上段、ToolBarのそれぞれに配置されているコントロールのことをさします。

![](http://img.skitch.com/20090708-bdkt5yc5gnx28fsxadddx4w5ks.jpg)

このコントロールは同じ系統のボタンを複数並べるのに用います。
状態の管理はTabbedBarの機能になるため、このコントロールでは利用できません。

上記の画面のコード例は以下のようになります。

```JavaScript
// スペイサーとして用いる特殊なボタンを宣言しておく
var flexSpace = Titanium.UI.createButton({
   systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

// NavBarに配置するインスタンス
var buttonBar1 = Titanium.UI.createButtonBar({
    labels: ['Button1', 'Button2'],
    color: '#336699'
});
buttonBar1.addEventListener('click', function(e){
   // e.indexにクリックされたボタンのindexがセットされます
});

// Toolbarに配置するインスタンス
var buttonBar2 = Titanium.UI.createButtonBar({
    labels: ['Button5', 'Button6','Button7', 'Button8','Button9'],
    color: '#336699'
});
buttonBar2.addEventListener('click', function(e){
   // e.indexにクリックされたボタンのindexがセットされます
});

// Navbarの中央に配置
Titanium.UI.currentWindow.setTitleControl(buttonBar1);
// Toolbarの中央に配置
Titanium.UI.currentWindow.setToolbar([flexSpace, buttonBar2, flexSpace]);

// コンテンツエリアに配置
var buttonbar = Titanium.UI.createButtonBar({
    labels:['Button3', 'Button4'],
    backgroundColor:'#336699',
    top:50,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200
});
Titanium.UI.currentWindow.add(buttonbar);
buttonbar.addEventListener('click', function(e){
   // e.indexにクリックされたボタンのindexがセットされます
});
```

##関連するドキュメント
 * KitchenSinkソース
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/buttonbar.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ButtonBar-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.SystemButtonStyle-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
