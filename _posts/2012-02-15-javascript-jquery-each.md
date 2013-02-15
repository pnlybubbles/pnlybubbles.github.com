---
layout: post
title: JavaSriptでeachしてみた
date: 2012-02-15 21:00:00
category : javascript
tags : [javascript, jquery, ruby, each]
---

最近ずっと`Ruby`を書いていて、久しぶりに`JavaScript`を書くとまず`;`を忘れる。

今回はこんなことをしてて焦った。

	[code.high.num]
	var arr = new Array();
	
	arr = ["ruby", "perl", "javascript", "jquery"];
	
	arr.each(function(value){
		console.log(value)
	});
	
	// Uncaught TypeError: Object ruby,perl,javascript,jquery has no method 'each'

`for`で書けるけど、Rubyになれると`for`を使うのに気が進まない…。いつの間にか…。

調べてみると`jQuery`をrequireじゃなくて…`src`すると`each`が使えるみたい。

	[code.high.num]
	var arr = new Array();
	
	arr = ["ruby", "perl", "javascript", "jquery"];
	
	$.each(arr, function(index, value){
		console.log(index + ":" + value)
	});
		
	// 0:ruby
	// 1:perl
	// 2:javascript
	// 3:jquery	

あとjQueryに`strip`的なのがあったからメモ。

	[code.high.num]
	var str = " \nRuby \n\t"
	str.trim(); // => "Ruby"

JavaScriptはRubyとまた違ったオブジェクト指向でやりやすかったり、やりにくかったり。プロトタイプとかがまたややこしいと思ったり。オブジェクト作るのがめんどくさかったり。

たりたり。