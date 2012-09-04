#UIカタログ - Titanium.UI.iOS.ToolBar

ToolBarは（主に画面下部に配置する）ボタンなどのコントロールを収納するコンテナです。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190715.png)

##Windowに紐づけるToolBar
TabGroupのすぐ上（Widnowのコンテンツエリアの下部）に配置する場合、Windowのtoolbarプロパティに指定して画面表示します。

NavBarやTabGroupと異なり、hidden制御用のプロパティは現バージョン(記述時点1.1.2)ではサポートされていません。

```JavaScript
// ツールバーに載せる部品群を定義します。

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var tf = Titanium.UI.createTextField({
	height:32,
	backgroundImage:'../images/inputfield.png',
	width:200,
	font:{fontSize:13},
	color:'#777',
	paddingLeft:10,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});

var camera = Titanium.UI.createButton({
	backgroundImage:'../images/camera.png',
	height:33,
	width:33
})
camera.addEventListener('click', function(){
	Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked camera!'}).show();
});

var send = Titanium.UI.createButton({
	backgroundImage:'../images/send.png',
	backgroundSelectedImage:'../images/send_selected.png',
	width:67,
	height:32,
});
send.addEventListener('click', function(){
	Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked send!'}).show();
});

// Windowの下部にツールバーを設定する。
Titanium.UI.currentWindow.setToolbar([flexSpace,camera, flexSpace,tf,flexSpace, send,flexSpace]);
```

##個別配置する場合

画面上の任意の位置にToolBarを設定する場合、次のように記述します。

```JavaScript
// 上記の例と同じコントロール生成後...
// ツールバーを新たにつくり、上記で定義したコントロールを並べます。
var toolbar1 = Titanium.UI.createToolbar({
	items:[flexSpace,camera, flexSpace,tf,flexSpace, send,flexSpace],
	top:30,
	borderTop:true,
	borderBottom:false,
	translucent:true,
	barColor:'#999'
});	
Titanium.UI.currentWindow.add(toolbar1);
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/window_toolbar.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/toolbar.js
 * APIドキュメント
  * https://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Toolbar-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
