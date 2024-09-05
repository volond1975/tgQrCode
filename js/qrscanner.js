var scaner = {
	//date: document.querySelector('input[type="date"]'),
	//time: document.querySelector('input[type="time"]'),
	text:document.getElementById('scanResult')
}


document.addEventListener('DOMContentLoaded', function() {
    init ()
    const scanButton = document.getElementById('scanButton');
    const scanResult = document.getElementById('scanResult');

    scanButton.addEventListener('click', function() {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.showScanQrPopup({
                text: "Отсканировать QR Code"
            }, function(result) {
                if (result) {
                    scanResult.textContent = "<Билет відскановано>: " + result;
                    window.Telegram.WebApp.showAlert("<Билет відскановано>")
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

	window.Telegram.WebApp.ready()
	window.Telegram.WebApp.MainButton
		.setText('Ok')
		.onClick(sendTicket)
}

function sendTicket () {
	

	var data = scaner.text
	window.Telegram.WebApp.sendData(data)
}