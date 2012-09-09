## Create User
ユーザを登録します。
メールアドレス、もしくはユーザ名とパスワードが必須になります。
また、確認用のパスワードも必要となります。

```JavaScript
var Cloud = require('ti.cloud');

var window = Ti.UI.createWindow();

var usernameTextField = Ti.UI.createTextField({
	top: 10,
	left: 10,
	width: 300,
	height: 35,
	hintText: 'ユーザ名'
});
window.add(usernameTextField);

var passwordTextField = Ti.UI.createTextFiled({
	top: 55,
	left: 10,
	width: 300,
	height: 35,
	hintText: 'パスワード',
	passwordMask: true
});
window.add(passwordTextField);

var confirmTextField = Ti.UI.createTextField({
	top: 100,
	left: 10,
	width: 300,
	height: 35,
	hintText: 'パスワード（確認用）',
	passwordMask: true
});
window.add(confirmTextField);

var createButton = Ti.UI.createButton({
	top: 145,
	left: 10,
	width: 300,
	height: 50,
	title: 'ユーザ登録'
});
window.add(createButton);

createButton.addEventListener('click', function(){
	createButton.setEnabled(false);
	createButton.setTouchEnabled(false);

	Cloud.Users.create({
		username: usernameTextField.getValue(),
		password: passwordTextField.getValue(),
		password_confirmation: confirmTextField.getValue()
	}, function(e){
		if (e.success) {
			alert('ID：' + e.users[0].id + 'で' + e.users[0].username + 'さんを登録しました');
		} else {
			alert(e.users[0].username + 'さんを登録できませんでした（' + e.message + '）');
		}

		createButton.setEnabled(true);
		createButton.setTouchEnabled(true);
	});
});

window.open();
```