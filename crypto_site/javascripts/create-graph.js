
function _Request() {

    var baseURL = "https://api.coinmarketcap.com/v1/ticker/";

    var request = new XMLHttpRequest();
    request.open("GET", baseURL, false);
    request.send();
    if (request.status != 200){
        console.log('...Something went wrong')
        console.log(request.status);
        console.log(request.statusText);
    }

    return request.responseText
}

function getCoinInfo(listOfCoinIDs) {

    var coinInfo = _Request();

    for (var i = 0; i < listOfCoinIDs.length; i++) {
        console.log(coinInfo['bitcoin']);
    }

}

getCoinInfo(['bitcoin', 'ethereum']);