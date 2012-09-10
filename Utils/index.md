#APIカタログ - Titanium.Utils 文字列処理　編集(Format)・変換(BASE64, MD5)・ローカライズ

##文字列編集
固定した前後に変数となる文字列を埋め込むようなアリガチな処理に対して、文字列結合を繰り返すのではなく、拡張されたStringオブジェクトのformat関数を使ってみましょう。

第一引数にはテンプレートとなる文字列を設定します。そこに`%s`を必要個数並べます。

第二引数以降で先ほどの`%s`と置き換えられる値を並べていきます。

```JavaScript
//「文字列foo、結合bar」となる
Ti.API.info(String.format("文字列%s、%sbar", "foo", "結合"));
```

数値や日付の変換も可能です。

```JavaScript
Ti.API.debug(String.format("locale specific date is %s",String.formatDate(new Date))); // default is short
Ti.API.debug(String.format("locale specific date (medium) is %s",String.formatDate(new Date,"medium")));
Ti.API.debug(String.format("locale specific date (long) is %s",String.formatDate(new Date,"long")));
Ti.API.debug(String.format("locale specific time is %s",String.formatTime(new Date)));
Ti.API.debug(String.format("locale specific currency is %s",String.formatCurrency(12.99)));
Ti.API.debug(String.format("locale specific decimal is %s",String.formatDecimal(12.99)));
```

##文字列変換

引数に文字列を渡すと、規定の変換処理をする関数がいくつか用意されています。

###Titanium.Utilsに属するもの
BASE64のエンコード・デコード、MD5のハッシュ作成が用意されています。

 * base64decode
 * base64encode
 * md5HexDigest

###Titanium.Networkに属するもの
URIエンコード・デコードを行う関数が用意されています。

 * decodeURIComponent
 * encodeURIComponent

##多言語対応(i18n)
多言語対応のための機能がVer.1.5.0以降追加されました。

プロジェクト直下にi18nフォルダを作成し、その下にjaフォルダ（ISOの言語2文字略称コードに準拠）を作成、さらにその下にstrings.xmlを新規作成します。

```XML
<?xml version="1.0" encoding="UTF-8"?>
<resources>
	<string name="welcome_message">Welcome to Kitchen Sink for Titanium/</string>
	<string name="user_agent_message">user agent set to</string>
	<string name="format_test">Your name is %s</string>
	<string name="base_ui_title">Base UI</string>
	<string name="controls_win_title">Controls</string> 
	<string name="phone_win_title">Phone</string>
	<string name="platform_win_title">Platform</string>
	<string name="mashups_win_title">Mashups</string>
</resources>
```

呼び出し方としては`Ti.Local.getString("strings.xmlでの定義名")`を使います。

第二引数以降がある場合、String.formatと同様に挙動します。

また、`Ti.Local.getString`に対して`L`というエイリアスが用意されています。

```JavaScript
Ti.API.info("should be en, was = "+Ti.Locale.currentLanguage);
Ti.API.info("welcome_message = "+Ti.Locale.getString("welcome_message"));
Ti.API.info("should be def, was = "+Ti.Locale.getString("welcome_message2","def"));
Ti.API.info("welcome_message = "+L("welcome_message"));
Ti.API.info("should be def, was = "+L("welcome_message2","def"));
Ti.API.info("should be 1, was = "+String.format('%d',1));
Ti.API.info("should be 1.0, was = "+String.format('%1.1f',1));
Ti.API.info("should be hello, was = "+String.format('%s','hello'));
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/utils.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Utils-module
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network-module

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
