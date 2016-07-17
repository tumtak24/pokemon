var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

var list = JSON.parse(fs.readFileSync('links.json'));
console.log(list.length + " files to go");

var rootUrl = "http://www.ign.com";

list.forEach(function(i, e, arr) {
	console.log("processing ", e);
	var url = rootUrl + i.href;

	request(url, function(error, response, html) {
		// First we'll check to make sure no errors occurred when making the request
		if (!error) {
			// Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
			var $ = cheerio.load(html);

			$("[class*='video']").remove();
			$(".gh-next-prev-buttons, .external, .gh-miniButton").remove();
			$("img").remove();
			try {
				$("img").each(function(i) {
					console.log($(this).attr('_imagecaption'));
					if ($(this).data("original").length > 0) {
						$(this).attr("src", $(this).attr("_imagecaption"));
						console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
						request($(this).data("original"), function(error, response, img) {
							fs.writeFile("data/" + $(this).attr("_imagecaption"), img, function(err) {
								if (err) {
									console.error("ERROR writing ", i.href$(this).attr("_imagecaption"), " Failed at index", e);
									return;
								}
							})
						});
					}
				})


			} catch (e) {
				console.error("EEEEE", e.message);
			}
			// $("a:text('Edit')")
			var content = $(".bodyCopy").html();

			fs.writeFile("data/" + i.href.replace("/wikis/pokemon-go/", "") + ".html", content, function(err) {
				if (err) {
					console.error("ERROR writing ", i.href, " Failed at index", e);
					return;
				}
				console.log('File successfully written! - Check your project directory for the ', i.href);
				if ((list.length - 1) === e) {
					console.log("DONEEEEE>.........................");
				}
			})
			
		}
	})
});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;