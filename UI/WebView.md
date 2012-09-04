#UIカタログ - Titanium.UI.WebView
WebViewはHTMLベースでのコンテンツを表示するための領域です。

safariで表示できる内容はすべて表示できると考えて問題ありません。

また直接HTML文字列を引き渡す事も可能ですので、動的に生成したHTMLによるリッチな表現をすることができます。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227195104.png)
![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227195105.png)

```JavaScript
// 単純なURLのロード
var webview = Ti.UI.createWebView();
// こういったイベントの取得も可能です
webview.addEventListener('beforeload',function(e){
     Ti.API.debug("読み込み開始: "+e.url);
});
webview.addEventListener('load',function(e){
     Ti.API.debug("読み込み完了: "+e.url);
});
webview.url = "http://www.google.co.jp/";
```

```JavaScript
// HTMLを動的に作成してhtmlプロパティにセットする例
var webview = Ti.UI.createWebView({
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth : 5,
    borderColor : 'red'
});
webview.html = '<html><body><div style="color:white;">Hello from inline HTML. You should see white text and black background</div></body></html>';
```

##evalJSによる細かい制御
webview内のドキュメントに対してJavaScriptで動的な評価を行うevalJSというメソッドが用意されています。

たとえばドキュメントのタイトルを取得するプロパティはありませんが、loadイベントにからめて以下のように記述することで取得が可能です。

```JavaScript
webview.addEventListener('load', function(e){
    // document.titleを取得する。
    // 評価結果はstringとしてreturnされるのでtitleにセットされる。
    var title = view.evalJS('document.title');
    Ti.API.info(title);
});
```

##進む・戻る・再読込の処理
ブラウザの「進む」・「戻る」・「再読込」に相当する処理がWebViewのメソッドとして用意されています。

 * goForward()
 * goBack()
 * reload()

##ツールバーの表示制御

iOSとAndroidで実装が異なりますが、WebViewに対してToolbarの設定ができます。

```JavaScript
// ツールバーを表示する
var toolbar = null;
if(Titanium.Platform.name == 'iPhone OS'){
  var button = Titanium.UI.createButton({
    title:'ボタン'
  });
  w.setToolbar([button]);
}
else{
  toolbar = Ti.UI.createView({
    backgroundColor: '#000',
    opacity:0.8,
    bottom:10,
    width:300,
    height:50,
    zIndex:1000
  });
  toolbar.add(Ti.UI.createLabel({
    text: 'ボタン代わり'
  }));
  w.add(toolbar);
}

// ツールバーを除去する
if(Titanium.Platform.name == 'iPhone OS'){
	w.setToolbar(null, {animated:true});
}
else{
  if(toolbar != null){
    w.remove(toolbar);
  }
}
```

##特殊なイベント
すべて仮引数にurlプロパティを持ったWebViewに特化されたイベントです。

 * beforeload
 * error
 * load

```JavaScript
webView.addEventListener('beforeload', function(e){
     // ロード前に実行される
});
webView.addEventListener('error', function(e){
     // エラー発生時に実行される
});
webView.addEventListener('load', function(e){
     // ロード完了後に実行される
});
```

##関連するドキュメント

 * KitchenSink
   * https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/web_views.js
 * APIドキュメント
   * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
