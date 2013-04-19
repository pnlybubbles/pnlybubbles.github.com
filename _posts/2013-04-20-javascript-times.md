---
layout: post
title: JavaScriptでtimesっぽいことをしてみた
date: 2013-04-20 01:45:00
category : javascript
tags : [javascript, ruby, times, array, each, for]
---

Rubyでは`times`のような便利なイテレータが揃っています。

	5.times { |i|
		print i
	}
	
	# => 01234

##JavaSciptでもTimesがしたい

そこで空のArrayを作ってそれをeachするという方法を思いつきました。

`new Array(n)`ではn個の`undefined`の入った配列を作ることができます。

	new Array(3);
	
	// => [undefined, undefined, undefined]

JavaScriptでのeachはこちらの記事でまとめてあります。

> [JavaSriptでeachしてみた｜あわあわのブログ](http://pnlybubbles.github.io/javascript/2013-02-15/javascript-jquery-each/ "JavaSriptでeachしてみた｜あわあわのブログ")

それでは、timesのようなこを試してみます。

	(new Array(5)).forEach(function(v, i) {
		console.log(i);
	});
	
	// =>

一回もeachせず...

`undefined`の配列要素は`forEach`しないようです。

##jQueryを使ってみる

jQueryの`each`を使ってみると、

	$.each((new Array(5)), function(i) {
		console.log(i);
	});
	
	// => 0
	// => 1
	// => 2
	// => 3
	// => 4

これでちゃんと動きました。

こんなかんじで`times`っぽいものが書けました。

##forは使わないの？

	for(var i = 0; i < 5; i++) {
		console.log(i);
	}

たしかにこれでも動きます。`break;`も使えて便利かもしれません。

しかし、JavaScriptのスレッドが発生した時、変数`i`が書き換わり予期しない繰り返し回数になってしまうことがあります。

JavaScriptにおいてスレッドが発生する時は`event`と`setTimeout`です。

このような場面でイテレータ内の操作に多少の遅延などがあった場合、`for`の処理中に`for`が行われてしまい、変数`i`が書き換わってしまいます。

予期しないバグが発生するかもしれません。

それと、私は`times`っぽく書きたいのでやっぱり`for`はなしですね。
