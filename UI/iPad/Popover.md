#UIカタログ - Titanium.UI.iPad.Popover
iPadでは全画面に対する描画を極力行わないようにするというガイドラインがあり、iPhoneにおけるPickerや全画面に選択TableViewを出すのではなく、このPopoverというオーバレイ型のViewにそれらのViewやコントロールを配置し、選択するという手法が求められます。

Titanium MobileにもPopoverというViewが提供されています。

![](http://img.f.hatena.ne.jp/images/fotolife/d/donayama/20101031/20101031182852.png)
![](http://img.f.hatena.ne.jp/images/fotolife/d/donayama/20101031/20101031182853.png)

```JavaScript
// PopOver自体は普通のViewと同じイメージでコンテナとして使っていけばいい。
var popOver = Ti.UI.iPad.createPopover({
    // Popoverのタイトルバー
    title: 'Popover title',
    // 残念ながら動作的に対応していない(1.4.2時点)
    barColor: '#060',     
    // 縦横指定はデバイスの向きのどちらにも合うようにしておく
    width: 240,
    height:140
});

// コンテナに載せるTableView
var popTableView = Ti.UI.createTableView({
    data : [
         {title: '0'},
         {title: '1'},
         {title: '2'}
    ]
});
// TableViewが選択されれば即座に閉じる。
// ガイドライン上「DONE」ボタンを必須にしないことが望ましいとされているため、
// あまり複雑なUI構成のPopoverは設計しないほうがよい。
// DONEボタンが必要であれば   rightNavButton プロパティを使う。
popTableView.addEventListener('click', function(e){
      /*
       *  呼び出し元へのフィードバックなど（値の下記もどしとか）
       */

      // Popoverを非表示にする
      popOver.hide();
});
// PopoverにTableViewを追加して、表示する。
popOver.add(popTableView);
popOver.show({
    // このviewプロパティに対して矢印表示される(TextFieldとかButtonでも可)
    view: containerView,
    animate: true
});
```

Popover時の矢印の向きは次のいずれかで指定できる。

 * Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_ANY
 * Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN
 * Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT
 * Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT
 * Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN
 * Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_UP

##関連するドキュメント
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPad.Popover-object.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPad-module

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
