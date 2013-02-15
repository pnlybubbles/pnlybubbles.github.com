jQuery(document).ready(function($) {
	change_title();
	add_style();
	var nohigh_code = configure_pre_style();
	prettyPrint();
	fix_prettyPrint(nohigh_code);
});

function add_style() {
	var $content = $("div.content").find("div.span8");
	$content.find("table").addClass("table table-striped table-bordered");
}

function get_linenums(value) {
	var linenum = String(value.match(/num:[0-9]*/));
	if(linenum) { linenum = linenum.replace(/num|:/g,""); }
	if((linenum == "null") || linenum == "") {
		linenum = 1;
	}
	return linenum
}

function configure_pre_style() {
	var nohigh_code = new Array();
	$("div.content").find("div.span8").find("code").parent("pre").each(function(index) {
		$(this).find("code").replaceWith($(this).find("code").html());
		if($(this).parent("div.highlight")[0]) {
			var value = $(this).parent("div.highlight").prev("p").text().replace(/^\[|\]$/g,"");
			if(value.match(/code/)) { $(this).parent("div.highlight").prev("p").remove(); }
			var linenum = 1;
			if(value.match(/num/)) {
				linenum = get_linenums(value);
			}
			$(this).addClass("prettyprint linenums:"+linenum)
			nohigh_code[index] = false;
		} else {
			$pre = $(this)
			var options = $(this).text().split("\n")[0].replace(/^\[|\]$/g,"").split(".");
			if(options[0]=="code") {
				$(this).text($(this).text().split("\n").slice(1).join("\n"));
				if(options.size != 1) {
					$.each(options, function(i, value){
						if(value.match(/num/)) {
							var linenum = get_linenums(value);
							$pre.addClass("prettyprint linenums:"+linenum);
							if(nohigh_code[index] || nohigh_code[index] == null) { nohigh_code[index] = true; }
						} else if(value.match(/high/)) {
							$pre.addClass("prettyprint");
							nohigh_code[index] = false;
						}
					});
				}
			}
		}
		console.log($(this));
	});
	return nohigh_code;
}

function fix_prettyPrint(nohigh_code) {
	$base = $("div.content").find("div.span8")
	$base.find("pre").each(function(i) {
		pre_class = $(this).attr("class");
		if(pre_class) {
			pre_class = pre_class.replace(/linenums:[0-9]+/,"linenums")
			$(this).removeClass();
			$(this).addClass(pre_class);
		}
		if(nohigh_code[i]) {
			$(this).find("span").each(function() {
				$(this).replaceWith($(this).html());
			});
		}
		console.log($(this))
	});
	$base.find("div.highlight").find("li").children("span").find("span").each(function() {
		$(this).replaceWith($(this).html());
	});
}

function change_title () {
	this_title = document.title;
	if(this_title != "あわあわのブログ") {
		document.title = this_title + "｜あわあわのブログ";
	}
}
