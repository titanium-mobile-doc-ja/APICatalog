#APIカタログ - Titanium.Geolocation (位置測定・電子コンパス )
##利用可能か判断する
位置測定とコンパス機能が利用できるかどうかを判断するプロパティがあります。
まずそちらでイベントリスナへの登録を制御するようにしましょう。

```JavaScript
// 位置測定機能の有効状態を取得するプロパティ
if(Titanium.Geolocation.locationServicesEnabled){
    // 位置測定機能が必要な処理
}
// コンパスの有効状態を取得するプロパティ(iPhone 3G以前はfalseになる感じ)
if(Titanium.Geolocation.hasCompass){
    // 電子コンパスが必要な処理
}
```

##測定方法
GPS、電子コンパスから現在状態を測定するため、2つの方法が提供されています。

端的に今どこにいるのかを取得する一度きりの処理、もうひとつは方向や場所の変化を検知し継続的に情報を更新し続ける処理になります。

###一度きりの処理(Titanium.Geolocation.getCurrent****)
いかにも値を返しそうなメソッド名なんですが非同期処理のため、実際の座標取得、エラー処理はコールバック関数で行います。

####GPS(Titanium.Geolocation.getCurrentPosition)
```JavaScript
Titanium.Geolocation.getCurrentPosition(function(e){
    // エラー時はコールバック関数の引数のerrorプロパティがセットされます
    if(e.error){
        Ti.API.error(e.error);
        return;
    }
    // 状態取得時の処理
    var coords = e.coords;
    /*
    // 中身はこんなデータです。
    {
         // 緯度
         "latitude":37.331689,
         // 経度
         "longitude":-122.030731,
         // 高度
         "altitude":0,
         // 平面（水平方向）の精度
         "accuracy":100,
         // 垂直方向の精度
         "altitudeAccuracy":-1,
         // 方向
         "heading": -1,
         // 速度
         "speed": -1,
         // 取得時刻
         "timestamp":274737055043
    }
    */
});
```

####電子コンパス(Titanium.Geolocation.getCurrentHeading()
```JavaScript
Titanium.Geolocation.getCurrentHeading(function(e){
    // エラー時はコールバック関数の引数のerrorプロパティがセットされます
    if(e.error){
        Ti.API.error(e.error);
        return;
    }
    // 状態取得時の処理
    // X-Y-Z軸の磁束密度（単位：マイクロテスラ）
    var x = e.heading.x;
    var y = e.heading.y;
    var z = e.heading.z;
    // 磁北と真北に対する向き（単位：度）
    var magneticHeading = e.heading.magneticHeading;
    var trueHeading = e.heading.trueHeading;
    // 精度
    var accuracy = e.heading.accuracy;
    // 取得時刻
    var timestamp = e.heading.timestamp;
});
```

###継続検知するイベント(Titanium.Geolocation.addEventListener) 
イベントのコールバック関数になるだけで、一度きりの取得と内容的には同じになります。

####GPS(locationイベント)
```JavaScript
Titanium.Geolocation.addEventListener("location", function(e){
    // エラー時はコールバック関数の引数のerrorプロパティがセットされます
    if(e.error){
        Ti.API.error(e.error);
        return;
    }
    // 状態取得時の処理
    var coords = e.coords;
    /*
    // 中身はこんなデータです。
    {
         // 緯度
         "latitude":37.331689,
         // 経度
         "longitude":-122.030731,
         // 高度
         "altitude":0,
         // 平面（水平方向）の精度
         "accuracy":100,
         // 垂直方向の精度
         "altitudeAccuracy":-1,
         // 方向
         "heading": -1,
         // 速度
         "speed": -1,
         // 取得時刻
         "timestamp":274737055043
    }
    */
});
```

####電子コンパス(headingイベント)
```JavaScript
Titanium.Geolocation.addEventListener("heading", function(e){
    // エラー時はコールバック関数の引数のerrorプロパティがセットされます
    if(e.error){
        Ti.API.error(e.error);
        return;
    }
    // 状態取得時の処理
    // X-Y-Z軸の磁束密度（単位：マイクロテスラ）
    var x = e.heading.x;
    var y = e.heading.y;
    var z = e.heading.z;
    // 磁北と真北に対する向き（単位：度）
    var magneticHeading = e.heading.magneticHeading;
    var trueHeading = e.heading.trueHeading;
    // 精度
    var accuracy = e.heading.accuracy;
    // 取得時刻
    var timestamp = e.heading.timestamp;
});
```

##その他

磁場干渉があった場合のメッセージ表示を行うかどうか設定できます。

```JavaScript
// これはオフにする
Titanium.Geolocation.showCalibration = false;
```

電子コンパスの方向検知をする際にどの程度変化があったらイベントを発生させるかを設定します。
（方向検知の「遊び」ですね）

```JavaScript
// 90度以上方向を変えないとイベントが発生しません。
Titanium.Geolocation.headingFilter = 90;
```

同様にGPSで移動検知イベントを発生させる距離をメートル単位で指定します。

```JavaScript
// 10m移動するごとにイベント発生する。
Titanium.Geolocation.distanceFilter = 10;
```

```JavaScript
// 精度についての設定です。（追記予定）
//  SET ACCURACY - THE FOLLOWING VALUES ARE SUPPORTED
// Titanium.Geolocation.ACCURACY_BEST
// Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS
// Titanium.Geolocation.ACCURACY_HUNDRED_METERS
// Titanium.Geolocation.ACCURACY_KILOMETER
// Titanium.Geolocation.ACCURACY_THREE_KILOMETERS
//
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
```

##関連するドキュメント

 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/geolocation.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Geolocation-module

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
