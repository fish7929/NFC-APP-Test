
$(document).ready(function(){
	$("#modifyTable tr td:nth-child(2)").click(function(){
		var td=$(this);
		if(td.children('input').length>0)
			return false;
		var td_text=td.html();// ��ԭ����Ԫ���ֵ����һ������ ;
		//��ն�Ӧ��Ԫ�������
		td.html("");
		var input=$("<input type='text'>");
		input.width(td.width());
		input.css({"border":"none"}).val(td_text).appendTo(td);
		// ����Ԫ���м����ı����,�ͻ�ý��㲢ѡ��;
		input.trigger("focus").trigger("select");
		// ��input �ĵ����¼� ���ٴ�����Ԫ��ĵ����¼� ;
		input.click(function(){
			return false;
		})
		// ��Ӧ�����¼� ;
		input.keyup(my_keyup=function(e){
			var keyCode=e.which;
			if(keyCode==27){
				input.val(td_text);
				td.html(td_text);
			}else if(keyCode==13){
			var new_val=input.val();
			td.html(new_val);
			}
		});// keyup end
		input.blur(function(){
			if($.trim($(this).val())==""){
			td.html(td_text);
		 
			}else{
				td.html($(this).val());
			}
		});
	});
	$('#saveModify').click(function(e){
		//��ֹĬ���¼���Ϊ�Ĵ���
		e.preventDefault();
		//�Ѹ��ĺ����������ͨ��NFC���±��浽��������

	
	});
});