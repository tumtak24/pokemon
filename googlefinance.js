/*
 
googlefinance.js
 
$ -> is the DOM document to be parsed
result -> is the object containing the result of parsing
*/
 
result = {};
price = $('div.id-price-panel').find('span.pr').children().text();
result.price = price;
 
// result is '656.06' 
