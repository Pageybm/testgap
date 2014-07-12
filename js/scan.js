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
        e.preventDefault();
        $("#resultBlock").html("Getting the funk - stand by...");    
        $.get("http://www.coldfusionjedi.com/demos/may62011/ray.cfc?method=hellofromray&returnFormat=plain", {}, function(data) {
            $("#resultBlock").html(data);
        })

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