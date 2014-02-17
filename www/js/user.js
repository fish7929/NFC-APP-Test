document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){
	//ע��NDEF tag
	nfc.addNdefListener( onNfc, function() {
		//�ɹ���ʾ�񶯺ͷ���
		//navigator.notification.vibrate(1000);
		//navigator.notification.beep(3);
		//notifyUser("Listening for NDEF tags.");
		console.log("Listening for NDEF tags.");
	}, fail);
	//ndef-mime
	nfc.addMimeTypeListener('text/pg', onNfc, function() {
		//alert("Listening for NDEF tags.");
		//navigator.notification.vibrate(1000);
		//navigator.notification.beep(3);
		//notifyUser("Listening for NDEF mime tags with type text/pg.");
		console.log("Listening for NDEF mime tags with type text/pg.");
	}, fail);
	//ע��NdefFormatable tag
	nfc.addNdefFormatableListener( onNfc, function() {
		//alert("Listening for NDEF tags.");
		//�ɹ�����ʾ
		//navigator.notification.vibrate(1000);
		//navigator.notification.beep(3);
		//notifyUser("Listening for unformatted tags.");
		console.log("Listening for unformatted tags.");
	}, fail);
}
$(document).ready(function(){
	$('#unlock').click(function(){
		//����
		
	});
	function makeMessage() {
		// Put together the pieces for the NDEF message:
		var tnf = ndef.TNF_MIME_MEDIA,            // NDEF Type Name Format
		 recordType = 'text/pg',
		 payload = 'Unlock the NFC Door!',     // content
		 record,                   // NDEF record object
		 message = [];             // NDEF Message to pass to writeTag()
		// create the actual NDEF record:
		record = ndef.record(tnf, recordType, [], payload);
		// put the record in the message array:
		message.push(record);
		//write the message:
		writeTag(message);
	}
	/*
	   writes NDEF message @message to a tag:
	*/
	function writeTag(message) {
		// write the record to the tag:
		nfc.write(
			message,                 // write the record itself to the tag
			function () {            // when complete, run this callback function:
				notifyUser("Wrote data to tag.");     // notify the user in message div
				navigator.notification.vibrate(100);   // vibrate the device as well
			},
			function (reason) {     // this function runs if the write command fails
				navigator.notification.alert(reason, function() {}, "There was a problem");
			}
		);
	}
});