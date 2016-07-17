http://www.ign.com/wikis/pokemon-go

$(".ghn").find("a:visible").not("[rel='nofollow']").length


var links = [];
$(".ghn").find("a:visible").not("[rel='nofollow']").each(function(i, e) {
     var obj = Object.create(null);
     obj.text = $(this).text();
     obj.href = $(this).attr("href");
     links.push(obj);
});

$("[class*='video']").remove(); 
$(".bodyCopy").contents().each(function() {
	try {
		if(this.nodeType === Node.COMMENT_NODE) {
		    $(this).remove();
		}
	} catch (e) {
		
	}
});

$(".bodyCopy").html();
$(".bodyCopy").css("background","yellow");

/wikis/pokemon-go/