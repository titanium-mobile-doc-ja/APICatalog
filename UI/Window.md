#UIカタログ - Titanium.UI.Window

##モード
Windowには通常モードとフルスクリーンモードの二つがあります。

フルスクリーンモード下では、StatusBar・NavBar・ToolBar・ TabGroupといった部品をもつ事ができませんが、デバイスの表示領域一杯を使う事ができます。

一方、通常モードはStatusBarとNavBarが標準で表示されます。

TabGroupを配置する場合、Windowオブジェクト群はTabGroupの子オブジェクトとして配置されます。

##Windowの作成
windowを生成するために`Titanium.UI.createWindow`というAPIが用意されています。

仕様上ひとつのwindowしか同時に表示できないため、作成されたwindowはwindowスタックに格納されるだけになります。
現在表示されているwindowを閉じると、スタックの一つ手前にあるwindowが再び表示されるようになります。

```JavaScript
// 切り替え時にはアニメーションする。独立した表示
var win = Titanium.UI.createWindow();
win.open({animated:true});

// 現在のTabに所属させるのなら次のとおり。
Titanium.UI.currentTab.open(win,{animated:true});
```

上記のように`open`メソッドの引数として`animeted`プロパティを指定する事により、アニメーション制御できます。この例ではwindowが左へスライドしていくような動きをします。`false`指定時は切り替わるだけの動きになります。

##表示されているWindowの取得と操作

現在表示されているwindowは`Titanium.UI.currentWindow`プロパティを用いてアクセスできます。

たとえば、このwindowに対して`close`メソッドを実行すると現在表示されているwindowを閉じることができます。

```JavaScript
Titanium.UI.currentWindow.close();
```

== フルスクリーン ==
次のようにWindowのOpen時に指定するとフルスクリーン表示されます。

```JavaScript
// 全面赤の背景色指定
var window = Titanium.UI.createWindow({
   backgroundColor:'red'
});
window.open({
    fullscreen:true
});
```

##副コンテキストへの分割
別のJavaScriptファイルをurlプロパティで指定（Resourcesフォルダからの相対パス）してWindowを生成する事ができます。あくまでもアプリケーションローカルのファイルしか読み取れません。セキュリティの観点からリモートURLは拒否されます。

```JavaScript
// app.js
var win = Titanium.UI.createWindow({
    url: 'foo.js'
});
```

この際、新しいWindowのJavaScriptコードは別のコンテキスト（副コンテキスト）で評価・実行されます。またこれはapp.jsとは別のスレッドでそれぞれ実行される形となります。

特殊なプロパティ `Titanium.UI.currentWindow` のみ副コンテキストにおいて、グローバルコンテキストのオブジェクトを参照できます。

###グローバルコンテキストのオブジェクト参照
通常、副コンテキストの変数やファンクションといったオブジェクトはグローバルコンテキストを直接参照できませんが、グローバルコンテキストのオブジェクトを次のように引き渡す事で、副コンテキストからグローバルコンテキストのオブジェクトを参照できるようになります。

簡単な例として、まず app.js で次のように変数 a とファンクション b を定義します。

```JavaScript
// app.js
var a = 1;
function b(){
    return "hello";
}
```

続いて、foo.jsをurlプロパティで指定した新しいウィンドウ w を定義します。

```JavaScript
// app.jsの続き
var w = Titanium.UI.createWindow({
    url: 'foo.js'
});
```

そのままだと w 上では変数 a とファンクション b を認識する事ができませんが、次のように w に対して割り当てることで、参照を渡す事が出来ます。

```JavaScript
// app.jsの続き
w.a = a;
w.b = b;
```

ここではw.aやw.bという形で名前を引き渡しましたが、別段同じ名前である必要はありません。

```JavaScript
// foo.js
alert("b() = " + Titanium.UI.currentWindow.b());
```

コード `Titanium.UI.currentWindow.b() `により、グローバルコンテキスト（app.js）のファンクション b が評価され、結果が返ります。

この手法では値のコピー渡しではなく、参照渡しとなります。そのため、この参照に対して行われたいかなる変更もすべての副コンテキストに反映され、利用可能となります。

###独自のイベント
グローバルコンテキストから個別のWindow（副コンテキスト下）に対して独自のイベントを送る（逆のパターンも含め）ためには、Titaniumに内蔵されているイベント機構を使用します。

たとえば、次のように独自のイベント foo を定義したとします。

```JavaScript
// bar.js
Titanium.UI.currentWindow.addEventListener('foo', function(e){
    Titanium.API.info("foo event received = " + JSON.stringify(e));
});
```

次のようにapp.jsからイベント foo を起動します。

```JavaScript
// bar.jsを副コンテキストで作成＆表示
var window = Titanium.UI.createWindow({
    url:'bar.js'
});
window.open();

// 独自イベントfooにイベント引数(JSON)を指定して起動する。
window.fireEvent('foo', {a: 'b' });
```


以下の2点に気をつけてください。

 * 独自イベントを起動する前に、イベントリスナに登録しておく必要があります。しかし、windowは呼び出し元(たとえばapp.js)と別スレッドで非同期に処理されているため、windowを作成直後にイベントを起動する必要がある場合、ある程度の時間を置かなければならない可能性があります。
 * イベント引数(JSON)として引き渡せるのはシリアライズ可能なオブジェクトに限られます。もし、ファンクション参照などをもったオブジェクトを渡そうとしてもそれらはnullとして扱われます。

##アニメーション
Windowも他のView同様にアニメーション表示できます。ふたつのWindowの間で遷移する場合はanimeteメソッドのtrasitionプロパティで指定します。

```JavaScript
// 遷移先のウィンドウ
var window2 = Titanium.UI.createWindow({
    url: 'foo.js'
});
// 現在のWindowがwindow1とする
window1.animate({
    view: window2,
    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});
```

また、open時の引数として指定する方法もあります。

```JavaScript
nextWindow.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});
```

##モーダルウィンドウ
いくつかの表示形式でモーダルウィンドウを前面に表示できるようになっています。

![](http://img.skitch.com/20100406-bqb3f8pb6e4ger7wkcdcw5mbar.png)

```JavaScript
var window = Titanium.UI.createWindow();
window.open({
    modal:true,
    modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
    modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
})
```

###表示形式(modalStyle)

 * Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT
  * 親ウィンドウと同じスタイルで表示する。
 * Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
  * 高さ・幅ともにスクリーンサイズより小さいウィンドウを中央寄せで表示します。もし横向きでキーボード表示をしている場合は上余白を詰めて表示されます。 ウィンドウの外側は薄暗くマスクされ、タッチしても反応しません。
 * Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN
  * スクリーン全体を覆う形で表示されます。
 * Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET
  * スクリーンの高さと同じ高さ、ウィンドウ幅は縦方向時のスクリーンの幅と同じに設定されたウィンドウを表示します。ウィンドウの外側は薄暗くマスクされ、タッチしても反応しません。（縦方向のときはTi.UI.iPhone.MODAL_PRESENTATION_FULLSCREENと同じ挙動となります）

###表示時アニメーション(modalTransitionStyle)

 * Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL
 * Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE
 * Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL
 * Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL 

##Android "root" Windows
In Android, you may wish to specify that a window which you create (such as the first window) should be considered the root window and that the application should exit when the back button is pressed from that window. This is particularly useful if your application is not using a Tab Group and therefore the splash screen window is appearing whenever you press the back button from your lowest window on the stack.

To indicate that a particular window should cause an application to exit when the back button is pressed, pass exitOnClose: true as one of the creation arguments, as shown here:

```JavaScript
var win = Titanium.UI.createWindow({
    title: 'My Root Window',
    exitOnClose: true
});
```

##Windowに関する特殊なイベント
windowも配下になるviewの一環なのでviewがもつすべてのイベントをハンドルすることができますが、それとは別に
windowのイベントとしては次のようなものがあります。

 * イベント(発生するタイミング)
  * open  
     開く
  * close  
    閉じる
  * focus  
    選択状態になる
  * blur  
    選択外状態になる

##NavBar
WindowのStatusBarの直下にあり、画面遷移をしていく画面でのナビゲーション・指示を司るUI部品です。

###表示・非表示の切り替え

```JavaScript
// 現在のwindowから表示→非表示
Titanium.UI.currentWindow.hideNavBar();

// 現在のwindowから非表示→表示
Titanium.UI.currentWindow.showNavBar();
```

###背景色の変更
Window生成時に指定する方法と動的な変更の二種類があります。

```JavaScript
// window生成時に指定する。
var win = Titanium.UI.createWindow({barColor:'#336699'});

// 現在表示中のWindowのNavBarの背景色を変更する。
Titanium.UI.currentWindow.barColor = '#336699';

// デフォルト色に戻す。
Titanium.UI.currentWindow.barColor = null;
```

translucentプロパティをtrueに設定すると、背景透過表示がされます。

###表示テキストの変更
タイトル部分・プロンプトを表示する場合は次のようにします。

```JavaScript
// タイトル変更
Titanium.UI.currentWindow.title = 'タイトル';

// プロンプトの表示(再び無効にする場合はnullを設定する)
Titanium.UI.currentWindow.titlePrompt = 'プロンプトが表示されます。';
```

また、戻るボタンの表示内容も同様に変更できます。

```JavaScript
Titanium.UI.currentWindow.backButtonTitle = '戻る！';
```

###タイトル部への画像表示
タイトルのかわりに画像を表示する事も可能です。

```JavaScript
// 画像を表示する(消す場合はnullを設定)
Titanium.UI.currentWindow.titleImage = '../images/slider_thumb.png';
// 戻るボタンも画像化することが可能です
Titanium.UI.currentWindow.backButtonTitleImage = null;	
```

###コントロールの配置
NavBarもコントロールコンテナなので、各種コントロールを載せる事ができます。

```JavaScript
var b1 = Titanium.UI.createButton({title:'Left Nav'});
var b2 = Titanium.UI.createButton({title:'Title'});
var b3 = Titanium.UI.createButton({title:'Right Nav'});

// タイトル部にボタン配置
Titanium.UI.currentWindow.titleControl = b2;

// 左右のボタンにも配置可能です
Titanium.UI.currentWindow.leftNavButton = b1;
Titanium.UI.currentWindow.setLeftNavButton(null);
Titanium.UI.currentWindow.rightNavButton = b3;
Titanium.UI.currentWindow.setRightNavButton(null);
```

##関連するドキュメント

 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/window_properties.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/window_standalone.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/window_constructor.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/window_layout.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/window_events.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/modal_windows.js
 * APIドキュメント
  * https://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
