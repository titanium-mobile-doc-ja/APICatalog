#UIカタログ - Titanium.UI.iOS.TabbedBar
TabbedBarとは次の画像のNavBarの中央, コンテンツエリアの上段、ToolBarのそれぞれに配置されているコントロールのことをさします。

![](http://img.skitch.com/20090708-kam6tp22hki1jksp379i1nt8kd.jpg)

このコントロールは複数の状態を切り替えるのに用います。単なるON/OFFの場合はSwitchが適していますが、それ以外の状態の切り替えにはこれを利用したほうがよいでしょう。

上記の画面のコード例は以下のようになります。

```JavaScript
// スペイサーとして用いる特殊なボタンを宣言しておく
var flexSpace = Titanium.UI.createButton({
   systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

// NavBarに配置するインスタンス
var tabbar1 = Titanium.UI.createTabbedBar({
    labels: ['Tab1', 'Tab2'],
    index:1
});

// Toolbarに配置するインスタンス
var tabbar2 = Titanium.UI.createTabbedBar({
  labels:['Tab5', 'Tab6','Tab7', 'Tab8','Tab9'],
  backgroundColor:'#336699',
  index:2
});

// Navbarの中央に配置
Titanium.UI.currentWindow.setTitleControl(tabbar1);

// Toolbarの中央に配置
Titanium.UI.currentWindow.setToolbar([flexSpace, tabbar2, flexSpace]);


// コンテンツエリアに配置
var tabbar = Titanium.UI.createTabbedBar({
    index:1,
    labels:['Tab3', 'Tab4'],
    top:50,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200
});
Titanium.UI.currentWindow.add(tabbar);
```

##関連するドキュメント

 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/tabbedbar.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabbedBar-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
