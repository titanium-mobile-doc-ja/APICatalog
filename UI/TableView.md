#UIカタログ - Titanium.UI.TableView
TableViewは単純な行選択から複雑なレイアウト、グループ表示など多岐に渡る奥の深いものです。

ここではまず基本的な部分について見ていきます。

##標準的なTableView
標準的なTableViewは次のような単純な行選択をするためのUIになります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190656.png)

```JavaScript
// Table Viewに表示するデータを作成しておきます
// hasChild, hasDetail, hasCheckプロパティがあると上の例のような表示になります。
var rows = [
    {title:'Row 1', hasChild:true},
    {title:'Row 2', hasDetail:true},
    {title:'Row 3', hasCheck:true},
    {title:'Row 4'}
];
// 先ほどのデータに基づいてTable Viewを起こします。
var tableview = Titanium.UI.createTableView({
    data: rows
});
// イベントリスナにクリック時のイベントを登録します。
tableview.addEventListener('click', function(e){
    var index     = e.index;
    var section  = e.section;
    var row       = e.row;
    var rowdata = e.rowData;
});
// Windowに追加する
Titanium.UI.currentWindow.add(tableview);
```

##レイアウト
このように各行に対するレイアウトデザインすることも可能です。 

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190657.png)

```JavaScript
// Navbarの色を変えつつ...
var win = Titanium.UI.currentWindow;
win.barColor = '#385292';

// 検索バーも配置しておきます
var searchBar = Titanium.UI.createSearchBar({
    barColor:'#385292', 
    showCancel:false
});

// 格納データとともに宣言
var tableView;
var rowData = [];

// ヘッダ部
var headerRow = Ti.UI.createTableViewRow();
headerRow.backgroundColor = '#576996';
headerRow.selectedBackgroundColor = '#385292';
headerRow.height = 40;
var clickLabel = Titanium.UI.createLabel({
	text:'Click different parts of the row',
	color:'#fff',
	textAlign:'center',
	font:{fontSize:14},
	width:'auto',
	height:'auto'
});
headerRow.className = 'header';
headerRow.add(clickLabel);
rowData.push(headerRow);

// レイアウト行
for (var c = 1; c < 50; c++){
    // datarowクラスとしてTableViewRowを作成
    var row = Ti.UI.createTableViewRow();
    row.selectedBackgroundColor = '#fff';
    row.height  =100;
    row.className = 'datarow';

    // 画像を配置する
    var photo = Ti.UI.createView({
        backgroundImage:'../images/custom_tableview/user.png',
        top:5,
        left:10,
        width:50,
        height:50
    });
    photo.rowNum = c;
    photo.addEventListener('click', function(e){
        // 上でセットしたrowNumにあたるe.source.rowNumでデータを特定する
    });
    row.add(photo);

    // ラベルを配置する
    var user = Ti.UI.createLabel({
        color:'#576996',
        font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
        left:70,
        top:2,
        height:30,
        width:200,
        text:'Fred Smith '+c
    });
    user.rowNum = c;
    user.addEventListener('click', function(e){
        // 上でセットしたrowNumにあたるe.source.rowNumでデータを特定する
    });
    row.add(user);
    // ラベル２個目
    var comment = Ti.UI.createLabel({
        color:'#222',
        font:{fontSize:16,fontWeight:'normal', fontFamily:'Arial'},
        left:70,
        top:21,
        height:50,
        width:200,
        text:'Got some fresh fruit, conducted some business, took a nap'
    });
    row.add(comment);
    // Viewも配置できる
    var calendar = Ti.UI.createView({
        backgroundImage:'../images/custom_tableview/eventsButton.png',
        bottom:2,
        left:70,
        width:32,
        height:32
    });
    calendar.rowNum = c;
    calendar.addEventListener('click', function(e){
        // 上でセットしたrowNumにあたるe.source.rowNumでデータを特定する
    });
    row.add(calendar);
    // ボタンを配置する
    var button = Ti.UI.createView({
		backgroundImage:'../images/custom_tableview/commentButton.png',
		top:35,
		right:5,
		width:36,
		height:34
    });
    button.rowNum = c;
    button.addEventListener('click', function(e){
        // 上でセットしたrowNumにあたるe.source.rowNumでデータを特定する
    });
    row.add(button);
    // ラベルは省略	
    var date = Ti.UI.createLabel({
        // (...)
        text:'posted on 3/11'
    });
    row.add(date);

    // 以上の内容の行を追加する
    rowData.push(row);
}

tableView = Titanium.UI.createTableView({
    data:    rowData,
    search: searchBar
});
```

##設定
また「設定」画面のようなグループ表示もTableViewの一環としてサポートされていますので、作法もTableViewに則る必要があります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190658.png)
![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100227/20100227190659.png)

グループ表示をするにはTableViewSectionとTableViewStyleの指定を用います。

```JavaScript
// 外枠となるTable View Sectionを生成する。
var groupData = Ti.UI.createTableViewSection({
    headerTitle: 'Group 1'
});
// ここではダミーデータを追加する...
for (var x = 0; x < 10; x++){
    var row = Ti.UI.createTableViewRow({
        title: 'Group 1, Row ' + (x + 1)
    });
    // TableViewSectionにTableViewRowを追加する
    groupData.add(row);
}
// テーブルビューのstyleを指定する。
var tableview = Titanium.UI.createTableView({
    data: gruopData,
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});
}}}
またコントロールの配置ももちろん出来ます。
{{{
// 格納する行データ配列を用意する
var rowData = [];

// １つ目のスイッチとボタン
var row1 = Ti.UI.createTableViewRow({height:50});
var sw1  = Ti.UI.createSwitch({
    right:10,
    value:false
});
row1.add(sw1);

var button1 = Ti.UI.createButton({
    style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
    left:10
});
row1.add(button1);
row1.className = 'control';
rowData.push(row1);

// ２つ目は省略

// 先ほど同様にGROUPEDstyleを指定する
var tableView = Ti.UI.createTableView({
    data: rowData,
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
    top:50
});
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_basic.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_perf.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_custom_rowdata.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_headers.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_footers.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_basic.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_custom_rowheader.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_section_header.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_emptydata.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_row_append.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_row_delete.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_row_insert.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_row_update.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_set.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_removeall.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_empty.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_auto_height.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_refresh.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_composite.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_layout.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_layout_2.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_layout_3.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_layout_4.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_layout_5.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_custom_header.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_custom_footer.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_controls.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_controls_2.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_update_row_objects.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_textfield.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_headers_filter.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_options.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_remote_images.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_remote_images_2.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_cell_selection.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_search.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_grouped_bg_image.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_delete.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_delete_2.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_delete_3.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_move.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_grouped.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_api_empty_append.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_selectable.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_events.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_touch.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_edit_and_move.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_noscroll.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_pull_to_refresh.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/table_view_dynamic_scroll.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewSection-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.TableViewStyle-object.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.TableViewSeparatorStyle-object.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.TableViewCellSelectionStyle-object.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPhone.TableViewScrollPosition-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
