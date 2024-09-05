var scaner = {
	//date: document.querySelector('input[type="date"]'),
	//time: document.querySelector('input[type="time"]'),
	text:document.getElementById('scanResult')
}


document.addEventListener('DOMContentLoaded', function() {
    const scanButton = document.getElementById('scanButton');
    const scanResult = document.getElementById('scanResult');

    scanButton.addEventListener('click', function() {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.showScanQrPopup({
                text: "Please scan a QR code"
            }, function(result) {
                if (result) {
                    scanResult.textContent = "<Билет відскановано>: " + result;
                    sendTicket () 
                 

                } else {
                    scanResult.textContent = "Scanning cancelled or failed";
                }
            });
        } else {
            scanResult.textContent = "Telegram Web App is not available";
        }
    });
});

function init () {
	//setupOptions()

	Telegram.WebApp.ready()
	Telegram.WebApp.MainButton
		.setText('Ok')
		.onClick(sendTicket)
}

function sendTicket () {
	

	var data = scaner.text
	Telegram.WebApp.sendData(data)
}