---
layout: post
title: JavaSriptでeachしてみた
date: 2013-02-15 21:00:00
category : javascript
tags : [javascript, jquery, ruby, each]
---

最近ずっと`Ruby`を書いていて、久しぶりに`JavaScript`を書くとまず`;`を忘れる。

今回はこんなことをしてて焦った。

	[code.high.num]
	var arr = new Array();
	
	arr = ["ruby", "perl", "javascript", "jquery"];
	
	arr.each(function(value) {
		console.log(value);
	});
	
	// Uncaught TypeError: Object ruby,perl,javascript,jquery has no method 'each'

`for`で書けるけど、Rubyになれると`for`を使うのに気が進まない…。いつの間にか…。

調べてみると`jQuery`をrequireじゃなくて…`src`すると`each`が使えるみたい。

	[code.high.num]
	var arr = new Array();
	
	arr = ["ruby", "perl", "javascript", "jquery"];
	
	$.each(arr, function(index, value) {
		console.log(index + ":" + value);
	});
		
	// 0:ruby
	// 1:perl
	// 2:javascript
	// 3:jquery	

あとjQueryに`strip`的なのがあったからメモ。

	[code.high.num]
	var str = " \nRuby \n\t";
	str.trim(); // => "Ruby"

JavaScriptはRubyとまた違ったオブジェクト指向でやりやすかったり、やりにくかったり。プロトタイプとかがまたややこしいと思ったり。オブジェクト作るのがめんどくさかったり。

たりたり。

---
####追記（2013/03/19）
それ、`forEach`メソッドでできるよ。（というか断然こっちのほうが良い・・・）

	[code.num.high]
	var arr = ["ruby", "perl", "javascript", "jquery"];
	
	arr.forEach(function(value, index) {
		console.log(index + ":" + value);
	});

というかこっちのほうがRubyに近いですね。

jQueryと違ってvalueとindexが逆になっているので注意です。

	[code.num.high]
	arr.forEach(function(value, index) {
		this.method(index, value);
	}, obj)

こんな感じで`forEach`文のなかで参照できるオブジェクトを指定することが可能。未指定の場合は`undefined`です。

コンストラクタ内で使うときは`this`の指すものが変わると厄介なので`obj`に`this`を指定してあげれば全く問題ないですね。

ちなみにjQueryの`each`での`this`では、インスタンスから`each`で参照されたものを*オブジェクト*として返します。（インスタンスって言っていいのかな...）

> [jQuery.each() jQuery API Documentation](http://api.jquery.com/jQuery.each/ "jQuery.each() jQuery API Documentation")
> 
> The value can also be accessed through the this keyword, but Javascript will always wrap the this value as an Object even if it is a simple string or number value.

	[code.num.high]
	var arr = ["ruby", "perl", "javascript", "jquery"];
	
	$.each(arr, function() {
		console.log(this);
	});
	
	// String {1: "r", 2: "u", 3: "b", 4: "y"}
	// String {1: "p", 2: "e", 3: "r", 4: "l"}
	// ...
