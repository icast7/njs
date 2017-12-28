var $ = require('jquery');

var fetchJSON = function (url) {
 return new Promise((resolve, reject) => {
     $.getJSON(url)
     .done((json) => resolve(json))
    .fail((xhr, status, err) => reject(status + err.message));
 });
}


var itemUrls = [
    'https://api.github.com/users/mayachan/repos?',
    'https://api.github.com/users/ikaz/repos?']
    itemPromises = itemUrls.map(fetchJSON);

Promise.all(itemPromises)
    .then(function (results) {
        results.forEach(function (item) {

        });
    })
    .catch(function (err) {
        console.log("Failed:", err);
    });
