#UIカタログ - Titanium.UI.iPad.SplitWindow

SplitWindow は iPad でよく見られる左右分割型の画面インターフェイスを実現するためのコントローラです。

左側の masterView と右側の detailView と呼ばれるコンテンツ部分で構成されます。

![](http://img.f.hatena.ne.jp/images/fotolife/d/donayama/20101031/20101031182850.png)
![](http://img.f.hatena.ne.jp/images/fotolife/d/donayama/20101031/20101031182851.png)

```JavaScript
var win = Ti.UI.createWindow({
    title: 'detail View'
});

// masterViewの作成
var masterView = Titanium.UI.createWindow({
    title: 'master View'
});
masterView.add(Titanium.UI.createTableView());


// detailViewの作成
var navigationView = Ti.UI.iPhone.createNavigationGroup({
   window: win
});

var splitwin = Ti.UI.iPad.createSplitWindow({
    detailView: navigationView,
    masterView: masterView
});

splitwin.addEventListener('visible',function(e){
    if (e.view == 'detail'){
        e.button.title = "Master";
        win.leftNavButton = e.button;
    }
    else if (e.view == 'master'){
        win.leftNavButton = null;
    }
});

splitwin.open();
```

##関連するAPIドキュメント
 * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPad.SplitWindow-object.html
 * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.NavigationGroup-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
