jQuery(document).ready(function($) {
	change_title();
	add_style();
});

function add_style() {
	var $content = $("div.content").find("div.span8");
	$content.find("table").addClass("table table-striped table-bordered");
}

function change_title () {
	this_title = document.title;
	if(this_title != "あわあわのブログ") {
		document.title = this_title + "｜あわあわのブログ";
	}
}
