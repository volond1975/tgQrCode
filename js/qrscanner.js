document.addEventListener('DOMContentLoaded', function() {
    const scanButton = document.getElementById('scanButton');
    const scanResult = document.getElementById('scanResult');

    scanButton.addEventListener('click', function() {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.showScanQrPopup({
                text: "Please scan a QR code"
            }, function(result) {
                if (result) {
                    scanResult.textContent = "Scanned result: " + result;
                } else {
                    scanResult.textContent = "Scanning cancelled or failed";
                }
            });
        } else {
            scanResult.textContent = "Telegram Web App is not available";
        }
    });
});