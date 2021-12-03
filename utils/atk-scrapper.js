
var fetch = require("cross-fetch");

getIndex();

function getIndex(){
  console.log("cocou");
  fetch("https://www.atypikoo.com/feed/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_ga=GA1.2.1049962973.1634917656; cookieconsent_status=dismiss; __stripe_mid=440ae07f-0818-4ff6-a1cb-99c57c585fd7ff2595; _gid=GA1.2.795394791.1637940662; PHPSESSID=21b238f85dfb23677aa059cbf7597094; _identity=f6203ee60986f0d5d19591326e1085870bdf97d1d613d2168b9e6f19c7a23ed4a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B21999%2C%22y1M8Q75jJ_jQa-gSco7N-z69lD3nd_tC%22%2C1209600%5D%22%3B%7D; _csrf=0b93089ba51fa0d79a2209d617551e84d06f1ff7bcfc18df4c12a17379126779a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22xyUExNxY1ARys3W2re5hQ9TOKypuCaR3%22%3B%7D; _gat_gtag_UA_5724303_50=1"
  },
  "referrer": "https://www.atypikoo.com/dashboard/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(function(response) {
  if(response.ok) {
    
    response.then(function(myBlob) {
      console.log(myBlob);
    });
  } else {
    console.log('Mauvaise réponse du réseau');
  }
})
.catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});
}


function getSession(){
  fetch("https://www.atypikoo.com/login/?returnUrl=%2F", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "fr-FR,fr;q=0.9",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_ga=GA1.2.1846679890.1637956479; _gid=GA1.2.1337683610.1637956479; _csrf=ed0a1eabd98f4ce0425d0b9dbe27b12a651420299f46aa98751b0ecbebedd154a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22fPAQAP82IZVXxyRC7Q-h3hgko06FhBbM%22%3B%7D; PHPSESSID=ddbfd065eb6aed63be46bfc4f7bfef71"
  },
  "referrer": "https://www.atypikoo.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "_csrf=V4hcOsUk9XY7I4tR_AsAvBKYIVN0ssaWt9VWlcOFg50x2B1rhHTNRHJ53QmEclL_JckMO0faof3Y5WDTq8fh0A%3D%3D&login-form%5Blogin%5D=WillyNourson&login-form%5Bpassword%5D=d3BtraK8cmwwJ%40v",
  "method": "POST",
  "mode": "cors"
}).then(function(response) {
  if(response.ok) {
    console.log(response);
    /*response.then(function(myBlob) {
      console.log(myBlob);
    });*/
  } else {
    console.log('Mauvaise réponse du réseau');
  }
})
.catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});
}


