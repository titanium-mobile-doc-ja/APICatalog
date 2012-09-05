#UIカタログ - Titanium.UI.TextField
言わずもがなのテキスト入力を行うためのコントロールです。

キーボードの制御設定やキーボードツールバーを設定できます。

![](http://img.skitch.com/20090708-p3e36au56aw18ypd1axxc3ude7.jpg)

```JavaScript
var tf1 = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:250,
	height:40,
	hintText:'hintText',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


// TEXT FIELD EVENTS (return, focus, blur, change)
tf1.addEventListener('return',function(e){
	l.text = 'return received, val = ' + e.value;
	tf1.blur();
});
tf1.addEventListener('focus',function(e){
	l.text = 'focus received, val = ' + e.value;
});
tf1.addEventListener('blur',function(e){
	l.text = 'blur received, val = ' + e.value;	
});
tf1.addEventListener('change', function(e){
	l.text = 'change received, event val = ' + e.value + '\nfield val = ' + tf1.value;	
});
```

##キーボードの種類
 * Titanium.UI.KEYBOARD_ASCII  
   ![](http://img.skitch.com/20090708-n3eqc74nb3yfxsrtexnhpkji7s.jpg)
 * Titanium.UI.KEYBOARD_URL  
   ![](http://img.skitch.com/20090708-khqs38xx31422qnf1i994edpdc.jpg)
 * Titanium.UI.KEYBOARD_PHONE_PAD  
   ![](http://img.skitch.com/20090708-cpj2s988rcdytcfiquy84cuk5q.jpg)
 * Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION  
   ![](http://img.skitch.com/20090708-1jhyy8jgfe4na7s412fre9qwte.jpg)
 * Titanium.UI.KEYBOARD_NUMBER_PAD  
   ![](http://img.skitch.com/20090708-bcpq8pwi4395nq232r6d44p3mt.jpg)
 * Titanium.UI.KEYBOARD_EMAIL_ADDRESS  
   ![](http://img.skitch.com/20090708-dnkpe189guys15i7hddd65fmq7.jpg)
 * Titanium.UI.KEYBOARD_DEFAULT  
   ![](http://img.skitch.com/20090708-fu5bxc3yq6t4jr29kj261be2b1.jpg)

##Enterキーの種類 (returnKeyType)
組み込まれている確定キーのボタン種別としては以下のものがあります。

なお、任意のテキストは指定できません。

 * Titanium.UI.RETURNKEY_GO
 * Titanium.UI.RETURNKEY_JOIN
 * Titanium.UI.RETURNKEY_NEXT
 * Titanium.UI.RETURNKEY_SEARCH
 * Titanium.UI.RETURNKEY_SEND
 * Titanium.UI.RETURNKEY_DONE
 * Titanium.UI.RETURNKEY_DEFAULT
 * Titanium.UI.RETURNKEY_ROUTE
 * Titanium.UI.RETURNKEY_YAHOO
 * Titanium.UI.RETURNKEY_GOOGLE
 * Titanium.UI.RETURNKEY_EMERGENCY_CALL

##その他の動作や見え方の指定
###Autocorrection
日本語入力しているとあまり使う局面がありませんので、falseで指定しておいたほうが便利かもしれません。

###テキストの表示位置
テキストの表示位置はtextAlignプロパティに以下のいずれかの値を指定することで設定できます。

 * left  
   左寄せ
 * center  
   中央寄せ
 * right  
   右寄せ

縦位置についてはverticalAlignプロパティに次の値を指定します。

 * top  
   上寄せ
 * middle  
   中央寄せ
 * bottom  
   下寄せ

###初期値の設定
初期値をあらかじめ表示しておく場合、valueプロパティにセットします。

###入力可能状態の制御
enabledプロパティで状態を制御できます。

###ヒント文
フィールドが選択されていない状態の時、表示されるヒント文をhintTextプロパティとして指定できます。フォーカスがテキストに来た際に表示がクリアされます。

###枠の表示
フィールドの周辺の囲み線をどのように描画するかをborderStyleプロパティで指定します。

 * `Titanium.UI.INPUT_BORDERSTYLE_ROUNDED`   
    ![](http://img.skitch.com/20090708-dy5d8enj4j53g9pxh7xde3w8ge.jpg)
 * `Titanium.UI.INPUT_BORDERSTYLE_LINE`  
    ![](http://img.skitch.com/20090708-g6qi5p31b334u3tpk2c74eg9q8.jpg)
 * `Titanium.UI.INPUT_BORDERSTYLE_BEZEL`  
    ![](http://img.skitch.com/20090708-qici8nyj4bffm42dnputgjyy5e.jpg)
 * `Titanium.UI.INPUT_BORDERSTYLE_NONE`  
    ![](http://img.skitch.com/20090708-818quksasxjagyamrw1hy2c74b.jpg)

###色の制御
colorならびにbackgroundColorプロパティを16進数指定することで表示色・背景色を指定できます。

![](http://img.skitch.com/20090708-ddcjrmbhf3gq3f6psenshchq7j.jpg)

###パスワードマスク
パスワードを始めとした機密文字入力で入力済みの文字をマスクするかどうかをpasswordMaskプロパティで指定します。

###クリアのタイミング
入力前にクリアする場合はclearOnEditプロパティをtrueに設定します。

###クリアボタンの表示タイミング
入力文字列や初期値のクリアを行うボタンをいつ表示するかをclearButtonModeプロパティで指定できます。

 * `Titanium.UI.INPUT_BUTTONMODE_NEVER`   
    常に表示しないというモードです。  
    ![](http://img.skitch.com/20090708-dy5d8enj4j53g9pxh7xde3w8ge.jpg)
 * `Titanium.UI.INPUT_BUTTONMODE_ALWAYS`   
   常に表示するというモードです。  
   ![](http://img.skitch.com/20090708-rnftdnwyt691qc9p4w9xb7fam6.jpg)
 * `Titanium.UI.INPUT_BUTTONMODE_ONFOCUS`  
   フォーカスの持っているときだけ表示します。
 * `Titanium.UI.INPUT_BUTTONMODE_ONBLUR`  
   フォーカスを失っている間だけ表示します。

###左右ボタンの表示タイミング
クリアボタン同様に任意のボタンイメージをTextFieldの両端に設定できます。

```JavaScript
var leftButton = Titanium.UI.createButton({
	style:Titanium.UI.iPhone.SystemButton.DISCLOSURE
});
var rightButton = Titanium.UI.createButton({
	style:Titanium.UI.iPhone.SystemButton.INFO_DARK
});
leftButton.addEventListener('click',function()
{
	Titanium.UI.createAlertDialog({
		title:'Text Fields',
		message:'You clicked the left button'
	}).show();
});

rightButton.addEventListener('click',function()
{
	Titanium.UI.createAlertDialog({
		title:'Text Fields',
		message:'You clicked the right button'
	}).show();
});


var tf1 = Titanium.UI.createTextField({
	color:'#336699',
	height:35,
	top:10,
	left:10,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	leftButton:leftButton,
	rightButton:rightButton,
	leftButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
	rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
});
```

###キーボードツールバーについて
ボタンや他のTextFieldをツールバーの部品としてキーボード表示時に連動させることができます。

```JavaScript
var win = Titanium.UI.currentWindow;

var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var tf = Titanium.UI.createTextField({
	height:32,
	backgroundImage:'../images/inputfield.png',
	width:200,
	font:{fontSize:13},
	color:'#777',
	paddingLeft:10,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});

var camera = Titanium.UI.createButton({
	backgroundImage:'../images/camera.png',
	height:33,
	width:33
})
camera.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked camera!'}).show();
});

var send = Titanium.UI.createButton({
	backgroundImage:'../images/send.png',
	backgroundSelectedImage:'../images/send_selected.png',
	width:67,
	height:32,
});
send.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked send!'}).show();
});


var textfield = Titanium.UI.createTextField({
	color:'#336699',
	value:'Focus to see keyboard w/ toolbar',
	height:35,
	width:300,
	top:10,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardToolbar:[flexSpace,camera, flexSpace,tf,flexSpace, send,flexSpace],
	keyboardToolbarColor: '#999',	
	keyboardToolbarHeight: 40,
});

win.add(textfield);
```

##関連するドキュメント

 * KitchenSink
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/textfield_events.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/textfield_keyboards.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/textfield_borders.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/textfield_therest.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/textfield_toolbar.js
  * http://github.com/appcelerator/KitchenSink/blob/master/KitchenSink/Resources/examples/textfield_buttons.js
 * APIドキュメント
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField-object
  * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI-module

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
