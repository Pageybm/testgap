var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
document.querySelector("#startScan").addEventListener("touchend", startScan, false);
resultDiv = document.querySelector("#results");
}

function startScan() {

cordova.plugins.barcodeScanner.scan(
function (result) {

// window.plugins.childBrowser.openExternal('http://www.google.com');
// this goes to a page window.location.replace("http://www.eventsnearhere.com/login");


//var s = "Result: " + result.text + "<br/>" +
//"Format: " + result.format + "<br/>" +
// "Cancelled: " + result.cancelled;
// resultDiv.innerHTML = s;
},
function (error) {
alert("Scanning failed: " + error);
}
);

}