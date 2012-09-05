#UIカタログ - Titanium.UI.Picker
コンボボックスに相当する複数の候補から項目をドラム式に選択させるコントロールです。

項目が多すぎると正直使い勝手が悪いので、そういうときはTableViewなどで外に出せないか考慮する必要があるかもしれません。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190718.png)

ちなみにiPad向けには直接WindowやViewにPickerを結びつけるのではなくPopoverを経由して表示するようにガイドラインで決められております。

```JavaScript
var picker = Ti.UI.createPicker();

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Bananas',custom_item:'b'});
data[1]=Ti.UI.createPickerRow({title:'Strawberries',custom_item:'s'});
data[2]=Ti.UI.createPickerRow({title:'Mangos',custom_item:'m'});
data[3]=Ti.UI.createPickerRow({title:'Grapes',custom_item:'g'});
picker.add(data);

// 選択表示を有効にします（標準は無効）
picker.selectionIndicator = true;

win.add(picker);

picker.addEventListener('change',function(e){
    // e.row, e.columnとして選択項目が取得できます
    // e.row.custom_itemとして各列のカスタムデータが帰ります
});
```

##複数の列を持ったPicker
もちろん1列だけではなく、複数列を持ったPickerも構成できます。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100323/20100323235201.png)

```JavaScript
var picker = Ti.UI.createPicker();
 
var column1 = Ti.UI.createPickerColumn();
column1.addRow(Ti.UI.createPickerRow({title:'Bananas',custom_item:'b'}));
column1.addRow(Ti.UI.createPickerRow({title:'Strawberries',custom_item:'s'}));
column1.addRow(Ti.UI.createPickerRow({title:'Mangos',custom_item:'m'}));
column1.addRow(Ti.UI.createPickerRow({title:'Grapes',custom_item:'g'}));
 
var column2 = Ti.UI.createPickerColumn();
column2.addRow(Ti.UI.createPickerRow({title:'red'}));
column2.addRow(Ti.UI.createPickerRow({title:'green'}));
column2.addRow(Ti.UI.createPickerRow({title:'blue'}));
column2.addRow(Ti.UI.createPickerRow({title:'orange'}));
 
// それぞれの列定義を配列として渡します。
picker.add([column1,column2]);
 
// 選択状況表示を有効にします
picker.selectionIndicator = true;

// 選択状況が変わったときのイベントです
picker.addEventListener('change',function(e){
    // e.rowとe.columnに選択された行列が返ります。
    // e.rowIndex, e.columnIndexには選択された行列のindexが返ります。
    // 上記の例ではcolumn1の各rowにcustom_itemプロパティを付随させているので、
    // e.row.custom_itemでそれらのデータも取得できます。
    Ti.API.info("You selected row: "+e.row+", column: "+e.column+", custom_item: "+e.row.custom_item);
    label.text = "row index: "+e.rowIndex+", column index: "+e.columnIndex;
});
```

##行表示にカスタムViewを使う
各Columnの表示に色や画像を交えた表示も可能です

###カスタムラベル選択

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100323/20100323235202.png)

```JavaScript
// あらかじめPickerを作成しておき、addRow関数で随時追加する。
var picker = Ti.UI.createPicker({backgroundColor:'#ff9900'}); 
function addRow(text){
	// PickerRowはView的な要素を持ったオブジェクトと考えればいいでしょう。
	var row = Ti.UI.createPickerRow();
	var label = Ti.UI.createLabel({
		text:text,
		font:{fontSize:24,fontWeight:'bold'},
		color:text,
		width:'auto',
		height:'auto'
	});
	row.add(label);
	picker.add(row);
}
addRow('red');
addRow('green');
addRow('blue');
addRow('orange');
addRow('purple');
addRow('brown');
addRow('yellow');
```

###カスタム画像選択
上記の例のlabelのかわりにImageViewを配置するとこうなります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100323/20100323235203.png)

```JavaScript
var picker = Ti.UI.createPicker();
 
function addRow(x){
	var row = Ti.UI.createPickerRow();
	var img = Ti.UI.createImageView({url:'../images/imageview/'+x+'.jpg',width:40,height:40});
	row.add(img);
	picker.add(row);
}
 
for(var c=0;c<=10;c++){
	addRow(c);
}
```

##日付・時刻選択Picker

###日付選択

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100323/20100323235204.png)

```JavaScript
var minDate = new Date()
minDate.setFullYear(2009);
minDate.setMonth(0);
minDate.setDate(1)
 
var maxDate = new Date()
maxDate.setFullYear(2009);
maxDate.setMonth(11);
maxDate.setDate(31)
 
var value = new Date();
value.setFullYear(2009);
value.setMonth(0);
value.setDate(1);
 
var picker = Ti.UI.createPicker({
    // typeとしてTi.UI.PICKER_TYPE_DATEを指定します。
    type:Ti.UI.PICKER_TYPE_DATE,
    minDate:minDate,
    maxDate:maxDate,
    value:value
});
picker.addEventListener('change',function(e){
     // e.valueとして選択値が取得される。
});
```

###時刻選択
![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100323/20100323235205.png)

```JavaScript
var value = new Date();
value.setMinutes(10);
value.setHours(13);
value.setSeconds(48);
 
var picker = Ti.UI.createPicker({
    type:Ti.UI.PICKER_TYPE_TIME,
    value:value
});
```

###日付・時刻選択

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100323/20100323235206.png)

```JavaScript
var picker = Ti.UI.createPicker({
    type:Ti.UI.PICKER_TYPE_DATE_AND_TIME,
    minDate:minDate,
    maxDate:maxDate,
    value:value
});
```

###カウントダウン
キッチンタイマー的な表示をするのはこちら。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100323/20100323235207.png)

```JavaScript 
var picker = Ti.UI.createPicker({
    type:Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER,
    countDownDuration:60000 * 3; // expressed in milliseconds
});
```

##関連するドキュメント

 * KitchenSinkソース
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/picker.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Picker-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerRow-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.PickerColumn-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
