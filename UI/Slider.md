#UIカタログ(コントロール) - Titanium.UI.Slider
Sliderは音量や数量を調整するのに使われるアナログ入力コントロールです。

![](http://img.skitch.com/20090708-cqc5s7acws9cgs253d14qjt6b7.jpg)

上限・下限の範囲を設定し、スライダーのレバーとして値を表現します。

初期値・範囲についてはコントロール作成時にのみ指定できます。

```JavaScript
// slider1を作成し配置
var slider1 = Titanium.UI.createSlider({
   min:50,
   max:100,
   value:90,
   width:200,
   height:'auto',
   top: 30
});
Titanium.UI.currentWindow.add(slider1);

slider1.addEventListener('change',function(e) {
   // e.valueに現在の値が入ります。
});
```

##関連するドキュメント

 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/slider.js
 * APIドキュメント
  * https://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Slider-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
