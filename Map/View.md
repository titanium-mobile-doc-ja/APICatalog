#UIカタログ - Titanium.Map.View

地図表示を行うViewです。

単体では下の例のようなツールバーはついていません。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227195106.png)

```JavaScript
// マーカーはAnnotationオブジェクトとして表現される。
var atlanta = Titanium.Map.createAnnotation({
	latitude:33.74511,
	longitude:-84.38993,
	title:"Atlanta, GA",
	subtitle:'Atlanta Braves Stadium',
	pincolor:Titanium.Map.ANNOTATION_PURPLE,
	animate:true,
	leftButton:'images/atlanta.jpg',
	rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
	myid:3 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS	
});
// MapViewオブジェクトを作成する。
var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {latitude:33.74511, longitude:-84.38993, latitudeDelta:0.01, longitudeDelta:0.01},
	animate:true,
	regionFit:true,
	userLocation:true,
	annotations:[atlanta]
});
Ti.UI.currentWindow.add(mapview);
```

##地図表示形式
地図の表示方法には3種類用意されています。

 * Titanium.Map.STANDARD_TYPE
 * Titanium.Map.SATELLITE_TYPE
 * Titanium.Map.HYBRID_TYPE

###ユーザの現在位置取得
デバイス利用者の現在位置を地図上にピンとして表示するかどうかをuserLocationプロパティで設定することができます。

##ピン(Annotation)の操作

###追加と削除
MapViewの生成時だけではなく動的にAnnotationオブジェクトの追加・削除ができます。

```JavaScript
var mountainView = Titanium.Map.createAnnotation({
	latitude:37.390749,
	longitude:-122.081651,
	title:"Appcelerator Headquarters",
	subtitle:'Mountain View, CA',
	pincolor:Titanium.Map.ANNOTATION_RED
});
// ピンの追加
mapview.addAnnotation(mountainView);
// ピンの削除
mapview.removeAnnotation(mountainView);
```

また、複数のピンを一斉に追加・削除することも可能です。

```JavaScript
var mountainView = Titanium.Map.createAnnotation({
	latitude:37.390749,
	longitude:-122.081651,
	title:"Appcelerator Headquarters",
	subtitle:'Mountain View, CA',
	pincolor:Titanium.Map.ANNOTATION_RED
});
var apple = Titanium.Map.createAnnotation({
	latitude:37.33168900,
	longitude:-122.03073100,
	title:"Steve Jobs",
	subtitle:'Cupertino, CA',
	pincolor:Titanium.Map.ANNOTATION_GREEN
});
var atlanta = Titanium.Map.createAnnotation({
	latitude:33.74511,
	longitude:-84.38993,
	title:"Atlanta, GA",
	subtitle:'Atlanta Braves Stadium',
	pincolor:Titanium.Map.ANNOTATION_PURPLE
});

// ピンの追加
mapview.addAnnotations([mountainView, apple, atlanta]);
// ピンの削除
mapview.removeAnnotations([mountainView, apple, atlanta]);
```

###選択
特定のピンを選択状態にするにはselectAnnotationメソッドを使います。

```JavaScript
// アップルボタンをクリックするとappleピンを選択状態にする例
btnApple.addEventListener('click', function(){
    mapview.selectAnnotation(apple);
});
```

###ピンの色

ピンの色は次の3つが用意されています。

 * Titanium.Map.ANNOTATION_GREEN
 * Titanium.Map.ANNOTATION_PURPLE
 * Titanium.Map.ANNOTATION_RED

##拡大縮小
zoomメソッドがあり、引数に縮尺の変化を指示するかたちとなっています。

```JavaScript
// zoom in
mapview.zoom(1);
// zoom out
mapview.zoom(-1);
```

##独自のイベント
MapViewには表示内容の更新時や移動・拡大縮小をしたタイミングで発生するイベントが独自に用意されています。

```JavaScript
mapview.addEventListener('loading', function(e){
    // ロード中のイベント
    Ti.API.info('mapview loading...');    
});
mapview.addEventListener('complete', function(e){
    // ロード完了のイベント
    Ti.API.info('mapview load complete');    
});
mapview.addEventListener('regionChanged', function(e){
    // 表示領域が変わったときのイベント（移動・拡大縮小）
    Ti.API.info('mapview redionChanged...');
    Ti.API.info('the new latitude = ' + e.latitude);
    Ti.API.info('the new latitude delta = ' + e.latitudeDelta);    
    Ti.API.info('the new longitude = ' + e.longitude);
    Ti.API.info('the new longitude delta = ' + e.longitudeDelta);
});
mapview.addEventListener('click', function(e){
    if(e.annotation){
        //e.titleにannotationのタイトルが入る
        Ti.API.info('mapview annotation[' + e.title + '] click');
    }
});
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/map_view.js
  * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/map_view2.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map-module
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.MapView-object.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Map.Annotation-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
