#UIカタログ - Titanium.UI.TabGroup


TabGroupは複数のwindowを束ねるアプリケーションUIの根幹を担います。

アプリケーションのルートコンテナとしてはこのTabGroupもしくはWindowを配置する必要があります。

![](http://img.skitch.com/20090708-8p1pjfyncp3jt8hs8aihf6qr5y.jpg)
![](http://img.skitch.com/20090708-1qpwi2pj72xnmbw24fwtniyspk.jpg)

タブは同時に5つまでの表示しかできません。6つ以上の表示をしようとすると5つ目以上は「more」タブの中に入り、そこから選択する動きになります。(moreタブのタイトルはeditButtonTitleプロパティで変更可能)

![](http://img.skitch.com/20090708-rmbim4dm9p5ss116nyt83iky8p.jpg)

##TabGroupとTabの生成
基本的にapp.js上での記述になりますが、次のような形が定石となります。

```JavaScript
// ただ生成する。
var tabGroup = Titanium.UI.createTabGroup();

// Tabの生成はヒモづくWindowとのセットという感じになります。
var win = Ti.UI.createWindow({title:'New Tab Window',barColor:'#000'});
var newtab = Titanium.UI.createTab({  
    icon:'../images/tabs/KS_nav_mashup.png',
    title:'New Tab',
    window:win
});
// TabをTabGroupに追加する
tabGroup.addTab(newtab);

// 表示する
tabGroup.open();
```

##TabGroupとTabの操作
TabGroupは次のように取得でき、そこからTabを操作できます。

```JavaScript
// TabGroupの取得
var tabGroup = Titanium.UI.currentWindow.tabGroup;

// 所属するタブはtabsプロパティにある
alert(tabGroup.tabs[0].title);

// 強制的に選択中のタブ切り替えもできる
var tab = tabGroup.activeTab;
tabGroup.activeTab = tabGroup.tabs[2];
```

##独自のイベント

```JavaScript
// TabGroupがフォーカスを失ったときに発生
tabGroup.addEventListener('blur', function(e){
    // e.index
    // e.tab
    // e.previousIndex
    // e.previousTab
});
// TabGroupがフォーカスを得たときに発生
tabGroup.addEventListener('focus', function(e){
    // e.index
    // e.tab
    // e.previousIndex
    // e.previousTab
});
```

##バッジ機能
個々のタブには状態を通知するためのするための「タブバッジ」と呼ばれるものをもつ事ができます。
一応、文字列も表示できるのですが、数値を表示するのに適していますので、そのように使ったほうがよいでしょう。

![](http://img.skitch.com/20090708-dpfhrf4hc1k2h9b1xeixxp5jtq.jpg)

```JavaScript
// すべてのタブに対してバッジを付与する。
var tabs = Titanium.UI.currentWindow.tabGroup.tabs;
tabs[0].setBadge(1); 
tabs[1].setBadge(2); 
tabs[2].setBadge(3);
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/tab_groups.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/tabs.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TabGroup-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Tab-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.SystemIcon-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
