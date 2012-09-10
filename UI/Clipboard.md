#APIカタログ - Titanium.UI.Clipboard クリップボード制御
これまでもTextFieldなどの上でOSが提供するクリップボードへのアクセスは可能でしたが、Ver.1.5.0以降でソースからのクリップボードのI/Oができるようになりました。

##テキストデータの取扱
`Ti.UI.Clipboard.setText(arg)`ならびに`Ti.UI.Clipboard.getText()`で行えます。
クリップボードにテキストデータがsetされているかどうかは`Ti.UI.Clipboard.hasText()`で判断可能です。

```JavaScript
copyButton.addEventListener('click', function() {
    Ti.UI.Clipboard.setText(data.url);
});
```

```JavaScript
if (Ti.UI.Clipboard.hasText()){
    doSomethingWith(Ti.UI.Clipboard.getText());
}
else {
    alert('Hey there was no text.');
}
```

クリップボードの中身をクリアする場合は`Ti.UI.Clipboard.clearText()`を実行します。

尚、Androidは現状テキストのみの対応となっています。(MIMEタイプが無視されます)

##MIMEデータの取扱(todo)

##関連するドキュメント

 * KitchenSink
  * https://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/clipboard.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Clipboard-module

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
