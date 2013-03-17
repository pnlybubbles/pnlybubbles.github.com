---
layout: post
title: JavaScriptでイベントによるスクロールを無効化する。
date: 2013-03-18 03:30:00
category : javascript
tags : [javascript, jquery, keydown]
---

今回は備忘録です。

例のTwitterのクライアント開発の途中です。

タイムラインを実装中、キーボードで項目を操作できるようにしたのですが、キーボードの上下入力によってスクロールされてしまい都合よく動作してくれませんでした。

そこで探してみると、こんな記事を発見。

> [JavaScriptでマウスホイールイベントを扱い、スクロールも停止する方法 phpspot開発日誌](http://phpspot.org/blog/archives/2006/08/javascript_23.html "JavaScriptでマウスホイールイベントを扱い、スクロールも停止する方法 phpspot開発日誌")

この記事ではマウスホイールによるスクロールを無効化しています。

そこでこれをキーボードのイベントに。

	[code.high.num]
	$(window).keydown(function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		event.returnValue = false;
	});


jQueryでonkeydownイベントを動的に追加しています。

これで意図しないスクロールはなくなりました。めでたし。

それと、なぜか`$(window).keypress`でkeycodeが取れなかった。なんでだろう。