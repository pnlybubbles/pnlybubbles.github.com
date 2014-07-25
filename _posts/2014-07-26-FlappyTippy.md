---
layout: post
title: FlappyTippyでぴょんぴょん
date: 2014-07-26 04:30:00
category : javascript
tags : [javascript, enchant.js, html5]
---

「ご注文はうさぎですか？」のキャラクター、ティッピーがぴょんぴょん跳ねるゲームの紹介。

これはFlappyBirdというゲームを元にしたもので、[@yaplus](https://twitter.com/yaplus "@yaplus")さんが画像を差し替えて制作されました。

> Flappy Tippy　ティッピーぴょんぴょん
> 
> [http://tippy.gochiusa.net/](http://tippy.gochiusa.net/ "Flappy Tippy　ティッピーぴょんぴょん")

そして、FlappyTippyは21世紀のhelloworldになったのです。

ごちうさは偉大。

<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p><a href="https://twitter.com/otack">@otack</a> FlappyBirdは21世紀のHello Worldらしい</p>&mdash; 香風智乃 (@yaplus) <a href="https://twitter.com/yaplus/statuses/492667785747513344">2014, 7月 25</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

というわけで、以前にゲームを作って挫折したこともあり、簡単なこのゲームを作ってみることにした。

## enchant.js

調べてみると[`enchant.js`](http://enchantjs.com/ja/ "enchant.js")の使い勝手が良いということで、試しにこれを利用した。

`enchant.js`は`html5`で規定される`canvas`を容易に扱えるようにするライブラリです。

フレーム管理、グループ化、アニメーション、衝突判定、などが非常に簡単に行えます。まだ不十分な部分はありますが、その単純さこそが、手軽さに繋がっているのでしょう。

実際、作った結果、思っていたより複雑になり、オブジェクトのグループ化やクラスの再利用など、いろいろと書きなおしたりしていたら意外と時間がかかってしまいました。

Githubにソースコードを公開しています。

> FlappyTippy | Github
> 
> [https://github.com/pnlybubbles/FlappyTippy](https://github.com/pnlybubbles/FlappyTippy "FlappyTippy | Github")

いちおうDropboxで一時的に公開しています。

[FlappyTippy](https://dl.dropboxusercontent.com/u/41790512/FlappyTippy/index.html "FlappyTippy")

画像素材は[@yaplus](https://twitter.com/yaplus "@yaplus")さんからお借りしました。ありがとうございます。

---
####追記 (2014/07/26)
urlの最後に`#fps30`などをつけるとその値のfpsで実行されます。

`#debug`をつけるとデバッグモードになります。

---
####追記 (2014/07/26)
製作途中でのデバッグ動画の数々。順に新しくなります。

* [https://www.youtube.com/watch?v=KVrnaaH5EUs](https://www.youtube.com/watch?v=KVrnaaH5EUs)
* [https://www.youtube.com/watch?v=W3GBJ04b1nA](https://www.youtube.com/watch?v=W3GBJ04b1nA)
* [https://www.youtube.com/watch?v=F-48Cbcyl0U](https://www.youtube.com/watch?v=F-48Cbcyl0U)
* [https://www.youtube.com/watch?v=8ph9yq1pAF8](https://www.youtube.com/watch?v=8ph9yq1pAF8)
* [https://www.youtube.com/watch?v=HKqNOw5muOE](https://www.youtube.com/watch?v=HKqNOw5muOE)
* [https://www.youtube.com/watch?v=PU528xsRU50](https://www.youtube.com/watch?v=PU528xsRU50)

## で

今回は元のものを完コピした形になりましたが、まだまだ難易度の調節など作ってる間に色々と思いつきました。

難易度の調節に関しては、

* パイプ間の隙間の変更
* パイプ同士(左右)の間隔の変更
* ティッピーの当たり判定の変更(濡れたティッピーverを作るとか)
* パイプの開いてる部分の生成される場所を確率分布関数を使って顕著にばらけさせる

などなど

まだまだいろいろありそうです。

ゲーム要素に何かを追加するとゴチャゴチャしてしまうと思いますが、少し味を付け足しても面白いかもしれないですね。

前回のブログ更新から1年近く放置してましたが、今後も放置して置かないでもないのでよろしくです。

それでは、こころぴょんぴょん。
