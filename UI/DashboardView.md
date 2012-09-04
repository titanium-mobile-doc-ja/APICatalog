#UIカタログ - Titanium.UI.DashboardView

デバイスのホーム画面のようなアイコンベースのメニューを構成するためのViewです。

アイコンを長押しするとeditイベントが発生し、アイコンの位置変更や削除といった編集作業が可能になります。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100406/20100406235032.png)
![](http://img.f.hatena.ne.jp/images/fotolife/d/donayama/20101031/20101031182246.png)

次のようなバッジを付ける事も可能です。

![](http://f.hatena.ne.jp/images/fotolife/d/donayama/20100406/20100406235033.png)

```JavaScript
var win = Titanium.UI.currentWindow;
win.backgroundColor = '#13386c';

var data = [];
var labels = ['account','cases','calls','contacts','emps','leads','meetings','opps','tasks'];
for (var x=0;x<2;x++)
{
	for (var c=0;c<labels.length;c++)
	{
		var item = Titanium.UI.createDashboardItem({
			image:'../images/dashboard/'+labels[c]+'_off.png',
			selectedImage:'../images/dashboard/'+labels[c]+'_on.png',
			label:labels[c]
		});
		if (c==0) item.badge = 10;
		data.push(item);
	}
}

var dashboard = Titanium.UI.createDashboardView({
	data:data
});
win.add(dashboard);

var label = Titanium.UI.createLabel({
	text:"Click and hold to re-order or delete",
	width:"auto",
	bottom:20,
	color:"yellow",
	height:"auto"
});
win.add(label);


var cancel = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.DONE
});
cancel.addEventListener('click', function()
{
	dashboard.stopEditing();
});

dashboard.addEventListener('edit',function()
{
	win.rightNavButton = cancel;
});

dashboard.addEventListener('commit',function()
{
	win.rightNavButton = null;
	Ti.API.info('data ' + dashboard.data);
	for (var i=0;i<dashboard.data.length;i++)
	{
		Ti.API.info('label ' + dashboard.data[i].label)
	}
});

dashboard.addEventListener('click',function(e)
{
	if (e.item.label == 'account')
	{
		e.item.badge = 10;
	}
	else if (e.item.label == 'cases')
	{
		for (var c=0;c<data.length;c++)
		{
			if (data[c].label=='account')
			{
				data[c].badge = 0;
				break;
			}
		}
	}
	else
	{
		try
		{
			var rect = e.location;
			var transform = Ti.UI.create2DMatrix().scale(0);
			var view = Ti.UI.createView({
				backgroundColor:'black',
				transform:transform,
				opacity:0,
				top:rect.y,
				left:rect.x,
				height:rect.height,
				width:rect.width
			});
			var close = Ti.UI.createButton({
				title:'Close',
				width:100,
				height:30
			});
			view.add(close);
			win.add(view);
			var animation = Ti.UI.createAnimation();
			animation.left = 0;
			animation.right = 0;
			animation.top = 0;
			animation.bottom = 0;
			animation.width = 320;
			animation.height = 460;
			animation.opacity = 1;
			animation.duration = 500;
			animation.transform = Ti.UI.create2DMatrix();
			view.animate(animation);
			close.addEventListener('click',function()
			{
				view.animate({
					top:rect.y,
					left:rect.x,
					height:rect.height,
					width:rect.width,
					opacity:0,
					duration:400
				},function()
				{
					win.remove(view);
				});
			});
		}
		catch(E)
		{
			Ti.API.error("ERROR = "+E);
		}
	}
});
```

##関連するドキュメント

 * KitchenSink
   * http://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/dashboard.js
 * APIドキュメント
   * http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.DashboardView-object

----
原著作者表示：[Appcelerator, Inc](http://www.appcelerator.com/ )
