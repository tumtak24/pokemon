// load node.js libraries 
var	util = require('util');
var	wscraper = require('wscraper');
var	fs = require('fs');
 
// load the scraping script from a file 
var script = fs.readFileSync('googlefinance.js');
 
var companies = ['/finance?q=apple', '/finance?q=cisco', '/finance?q=microsoft'];
 
// create a web scraper agent instance 
var agent = wscraper.createAgent();
 
agent.on('start', function (n) {
    util.log('[wscraper.js] agent has started; ' + n + ' path(s) to visit');
});
 
agent.on('done', function (url, price) {
    util.log('[wscraper.js] data from ' + url);
    // display the results	 
    util.log('[wscraper.js] current stock price is ' + price + ' USD');
    // next item to process if any 
    agent.next();		
});
 
agent.on('stop', function (n) {
    util.log('[wscraper.js] agent has ended; ' + n + ' path(s) remained to visit');
});
 
agent.on('abort', function (e) {
    util.log('[wscraper.js] getting a FATAL ERROR [' + e + ']');
    util.log('[wscraper.js] agent has aborted');
    process.exit();
});
 
// run the web scraper agent 
agent.start('www.google.com', companies, script);