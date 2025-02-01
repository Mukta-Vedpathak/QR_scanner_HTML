// Initialize the QR Code scanner
function onScanSuccess(decodedText, decodedResult) {
    // Handle the scanned QR code result
    document.getElementById("result").innerText = `QR Code Scanned: ${decodedText}`;
}

function onScanFailure(error) {
    // Handle scan failure, you can log the error or do nothing
    console.warn(`QR Code scan failed: ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess, onScanFailure);