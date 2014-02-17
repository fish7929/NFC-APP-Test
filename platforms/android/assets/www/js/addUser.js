var dialogOpts = {
	themeDialog: "e",
	themeHeader: "e",
	mode: 'button',
	headerText: '添加用户',
	headerClose: true,
	buttonPrompt: '序号',
	buttonInput: true,
	buttonPrompt: '昵称',
	buttonInput: true,
	buttonPrompt: '卡号',
	buttonInput: true,
	showModal: false,
	buttons : {
	  '添加': {
		click: function () { 
			var password = $.mobile.sdLastInput
			if(password === getData('login')){
			  // notifyUser("密码错误请重新输入！");
				$('#init').prop('href', "user.html");
				$.mobile.changePage("user.html");
				//$(this).simpledialog2(dialogOpts);
			   //return;
			}else if(password === ""){
			  // notifyUser("密码错误请重新输入！");
				alert("请输入密码！");
				$(this).simpledialog2(dialogOpts);
			   //return;
			}else {
			  // notifyUser("密码错误请重新输入！");
				alert("密码错误请重新输入！");
				$(this).simpledialog2(dialogOpts);
			   //return;
			}
		},
		icon: "plus",
		theme: "e"
	  }
	}
};

var dialogOpts2 = {
	themeDialog: "e",
	themeHeader: "e",
	mode: 'blank',
	headerText: '添加用户',
	headerClose: true,
	blankContent :
		'<label id="typeLabel" for="type">类型</label>'+
		'<select data-native-menu="false" id="type">'+
		'<option value="phone">手机</option>' +
		'<option value="card">卡</option>' +
		'<option value="pass">密码</option>'+
		'</select>'+
		'<label id="contentLabel" for="cardNum">卡号</label>'+
		'<input type="text" name="cardNum" id="cardNum" value=""/>'+
		// NOTE: the use of rel="close" causes this button to close the dialog.
		"<a data-icon='plus' data-role='button' href='#' id='add' >添加</a>"
	
};

$(document).ready(function(){
	var seq = $( "#seq" );
    var nickname = $( "#nickname" );
    var cardNum = $( "#cardNum" );
    var allFields = $( [] ).add( seq ).add( nickname ).add( cardNum );
	var dia ;
	$('#plus').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面
		$(this).simpledialog2(dialogOpts2);
	});
	
	$('#saveAdd').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面

	
	});
});