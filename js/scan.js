var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
document.querySelector("#startScan").addEventListener("touchend", startScan, false);
resultDiv = document.querySelector("#results");
}

function startScan() {

cordova.plugins.barcodeScanner.scan(
function (result) {


                                if (!result.cancelled){
                               window.plugins.childBrowser.showWebPage(result.text, { showLocationBar: false });  
                                }
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