#APIカタログ - Titanium.Database データベー
デバイス上の[SQLiteデータベース](http://www.sqlite.org/)への接続をするをするための機能が用意されています。

ORマッピング的なものはないので、自前でSQLの操作をする必要があるため、SQLの知識が必要になってきます。

```JavaScript
// データベースファイルを開きます（ない場合、作成されます）
var db = Titanium.Database.open('mydb');

// DB内にテーブルが無い場合、定義に基づいてテーブルを作成します。
db.execute('CREATE TABLE IF NOT EXISTS DATABASETEST  (ID INTEGER, NAME TEXT)');
// ちなみにTABLEを削除するときはDROP TABLE DATABASETESTみたいにします


// テストなので全行消してから、テストデータを追加→更新＋削除します。
// プレースホルダはありますが、名前ベースじゃなくて?の発生順での置換です。
db.execute('DELETE FROM DATABASETEST');
db.execute('INSERT INTO DATABASETEST (ID, NAME ) VALUES(?,?)',1,'Name 1');
db.execute('INSERT INTO DATABASETEST (ID, NAME ) VALUES(?,?)',2,'Name 2');
db.execute('INSERT INTO DATABASETEST (ID, NAME ) VALUES(?,?)',3,'Name 3');
db.execute('INSERT INTO DATABASETEST (ID, NAME ) VALUES(?,?)',4,'Name 4');
db.execute('UPDATE DATABASETEST SET NAME = ? WHERE ID = ?', 'I was updated', 4);
db.execute('UPDATE DATABASETEST SET NAME = "I was updated too" WHERE ID = 2');
db.execute('DELETE FROM DATABASETEST WHERE ID = ?',1);

// 直前の実行に伴う影響行数と最後に追加されたrowIdを取得
Titanium.API.info('JUST INSERTED, rowsAffected = '    + db.rowsAffected);
Titanium.API.info('JUST INSERTED, lastInsertRowId = ' + db.lastInsertRowId);

// 照会は普通にSELECT文を実行します。結果はResultSetオブジェクトとして返ります。
var rows = db.execute('SELECT * FROM DATABASETEST');
Titanium.API.info('ROW COUNT = ' + rows.getRowCount());

// ResultSetはカーソル的な挙動をしますので、こういったループで走査していきます。
while(rows.isValidRow()){
    // rows.field(field_no)で値を取得します。
    // カラム名ベースでも取れるみたいです。
    Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name'));
    rows.next();
}
// 走査が終わったらResultSetを閉じておきます。
rows.close();

// 操作が終わったら後片付け
db.close();
```

##既存のSQLiteDBの取込み
あらかじめ用意しておいたSQLiteのデータベースファイルを取り込むことができます。

```JavaScript
// ../testdb.dbの内容をquotesデータベースに取り込み、開きます。
var db = Titanium.Database.install('../testdb.db','quotes');

// あとの流れは同じですね。
var rows = db.execute('SELECT * FROM TIPS');
while (rows.isValidRow()){
    Titanium.API.info(rows.field(1) + '\n' + rows.field(0));
    rows.next();
}
rows.close();
db.close();
```

##関連するドキュメント
 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/database.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database-module
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.open-method.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.install-method.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.DB-object.html
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database.ResultSet-object.html

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
