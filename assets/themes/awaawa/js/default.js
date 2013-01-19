jQuery(document).ready(function($) {
	add_style();
});

function add_style() {
	var $content = $("div.content").find("div.span8");
	$content.find("table").addClass("table table-striped table-bordered");
}
