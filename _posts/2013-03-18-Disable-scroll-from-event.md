---
layout: post
title: JavaScriptでイベントによるスクロールを無効化する
date: 2013-03-18 03:30:00
category : javascript
tags : [javascript, jquery, preventDefault]
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


jQueryで`onkeydown`イベントを動的に追加しています。

キーワードとなってるのがこの`preventDefault`。

調べてるとこんなこんなメソッドがあったとは・・・。

> [event.preventDefault() jQuery API Documentation](http://api.jquery.com/event.preventDefault/ "event.preventDefault() jQuery API Documentation")
> 
> Description: If this method is called, the default action of the event will not be triggered.
> 
>このメソッドが呼ばれた時、デフォルトのアクションは実行されません。

上の`api.jQuery.com`での例では、リンクをクリックしたらページ移動が起こるところ、それをキャンセルさせて、動的に追加したメソッドを実行しているという感じです。

スクロールの動作もブラウザのデフォルトのアクションとしてjavascriptから抑制できるみたいですね。

他にも調べてみると、こんなものが。

> [event.stopPropagation() jQuery API Documentation](http://api.jquery.com/event.stopPropagation/ "event.stopPropagation() jQuery API Documentation")
> 
> Description: Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.

*イベント伝播* という概念があって、DOMの階層の順番にイベントが発生してアクションが起こるフローのことをいいます。

このメソッドはそのフローを途中で止めてそれ以上実行されないようにするメソッドのようです。

調べるときりがないですね・・・。

とりあえず、これで意図しないスクロールはなくなりました。めでたし。

それと、なぜか`$(window).keypress`でkeycodeが取れませんでした。なんでだろう。