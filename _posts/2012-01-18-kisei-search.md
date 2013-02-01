---
layout: post
title: きせーさーちβ版 
date: 2012-01-18 22:30:00
category : ruby
tags : [twitter, 規制, きせーさーち, ruby]
---

Twitterの規制解除時間教えてくれるbotです。

あくまでもβ版。不具合があったりうまく動作しない場合もあります。了解の上でどうぞ。

###[@kisei_search](http://twitter.com/kisei_search "きせーさーちβ版")

##既知の問題

* 定期botを高い頻度で使っていると`最近3200ポストに3時間以上の離脱が見つからなかったの！`と返されリセットできません。対処法としては定期botを解除し、3時間以上のポストの無い離脱を作るようにしてください。
* サーバーのスペック不足やバクにより、結構な頻度でプログラムが落ちることがあります。
* リセットの集中によりかなりの頻度でAPI規制にかかっている場合があります。
* 鍵アカウントの登録はできません。一旦解除してから登録をお願いします。

##機能

* 規制解除時間を計算
* セクション内120ポストで規制通知
* 解除されてから30分以内に解除されたアカウント以外で呟いた時に解除通知
* [@kisei_search](http://twitter.com/kisei_search "きせーさーちβ版") が規制にかかっている時、 [@kisei_search2](http://twitter.com/kisei_search2 "きせーさーちβ版の規制垢") を利用

##コマンド

###基本的なコマンド
コマンド|概要
:-|:-
登録|フォローを返して登録を行います。※1
フォロー解除|フォローを解除して登録されたデータをすべて削除します。
いつ|取得済みデータから規制解除時刻を計算します。
`screen_name`いつ|Twitterからデータを取得して規制解除時刻を計算します。登録されているユーザーの場合は取得済みデータから計算します。※2
第n規制垢いつ|設定された規制垢の取得済みデータからその規制解除時刻を計算します。※3
リセット|Twitterからデータを取得して規制解除時刻を計算します。
第n規制垢リセット|Twitterからデータを取得して設定された規制垢の規制解除時刻を計算します。

###規制用アカウントの設定コマンド
コマンド|概要
:-|:-
`screen_name`を第n規制垢に設定|`screen_name`を規制垢として設定して紐付けします。`screen_name`は登録してある必要があります。※2
第n規制垢を解除|第n規制垢に設定されているアカウントとの紐付けを解除します。※3
規制垢の紐付けを解除|あなたのアカウントが誰かの規制用アカウントとして設定されている場合に紐付けを強制的に解除します。
規制垢を初期化|設定されている規制垢との紐付けをすべて解除します。
規制垢の状況|設定されている規制垢の割り当てを調べます。(β)

※1 「登録」とだけであり、「登録。」などでは反応しません。ただし空白は問題ありません。(ex「登録　」)

※2 `screen_name`はユーザー名のことです。@〜〜の部分です。

※3 nは自然数。「第2規制垢」でなくても「W規制垢」のように書いても認識します。また「第n規制垢いつ」を利用するときには「本垢」も使用できます。

###登録状況関連のコマンド <font color="FF0000" size="2">### 確認してください ###</font>

きせーさーちには`@kisei_search` `@kisei_search2` `@kisei_search3`があります。これらはきせーさーちのアカウント凍結を防止するため※4、相互フォローの状態でのみ使用可能です。   
きせーさーちのアカウントは、フォローしてもフォローバックされていない場合は使用不可となっています。下記のコマンドの`フォロー`を行うことで使用可能にすることができます。

コマンド|概要
:-|:-
登録状況|あなたがきせーさーちのアカウントを使用可能か、使用不可かを調べます。(β)
登録状況詳細|あなたのアカウント、規制用アカウントの登録状況を調べます。(β)
フォロー|フォローしているきせーさーちのアカウントを使用可能にします。（フォローバックを行います）(β)

※4 `@kisei_search3`は一度凍結されてしまったので次に凍結されてしまうとさよならです。凍結回避にご協力お願いします。

##チュートリアル

###登録から規制アカウントの設定

<blockquote class="twitter-tweet" data-in-reply-to="259674252419141632" lang="ja"><p>@<a href="https://twitter.com/pn1y">pn1y</a> 登録完了したのっ♪ 使い方がリンクに書いてあるから必ず見てね！ <a href="http://t.co/ncqX9Nmc" title="http://ameblo.jp/only-bubbles/entry-11373645951.html">ameblo.jp/only-bubbles/e…</a> (10/21 00:15:45)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259674276020486144" data-datetime="2012-10-20T15:15:46+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259674332517761024" lang="ja"><p>@<a href="https://twitter.com/pnly2">pnly2</a> 登録完了したのっ♪ 使い方がリンクに書いてあるから必ず見てね！ <a href="http://t.co/ncqX9Nmc" title="http://ameblo.jp/only-bubbles/entry-11373645951.html">ameblo.jp/only-bubbles/e…</a> (10/21 00:16:03)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259674351509573632" data-datetime="2012-10-20T15:16:04+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259674376977387521" lang="ja"><p>@<a href="https://twitter.com/pnly3">pnly3</a> 登録完了したのっ♪ 使い方がリンクに書いてあるから必ず見てね！ <a href="http://t.co/ncqX9Nmc" title="http://ameblo.jp/only-bubbles/entry-11373645951.html">ameblo.jp/only-bubbles/e…</a> (10/21 00:16:15)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259674399400136704" data-datetime="2012-10-20T15:16:15+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259674986111963136" lang="ja"><p>@<a href="https://twitter.com/pn1y">pn1y</a> 第1規制垢に@<a href="https://twitter.com/pnly2">pnly2</a>を設定したの♪ (10/21 00:18:36)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259674990323064832" data-datetime="2012-10-20T15:18:36+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259675114789040129" lang="ja"><p>@<a href="https://twitter.com/pn1y">pn1y</a> 第2規制垢に@<a href="https://twitter.com/pnly3">pnly3</a>を設定したの♪ (10/21 00:19:06)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259675120065454081" data-datetime="2012-10-20T15:19:07+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259675186268352512" lang="ja"><p>@<a href="https://twitter.com/pn1y">pn1y</a> pn1yのセクションあたりのポスト数は 34 なの！規制解除時刻は 10/21 01:31:33 だよっ！あと 1時間 12分 9秒 なのです！ (10/21 00:19:23)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259675189955145730" data-datetime="2012-10-20T15:19:24+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259675281055440897" lang="ja"><p>@<a href="https://twitter.com/pn1y">pn1y</a> pnly2のセクションあたりのポスト数は 93 なの！規制解除時刻は 10/21 01:36:27 だよっ！あと 1時間 16分 41秒 なのです！ (10/21 00:19:46)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259675286663204864" data-datetime="2012-10-20T15:19:47+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259675357291098114" lang="ja"><p>@<a href="https://twitter.com/pn1y">pn1y</a> pnly3のセクションあたりのポスト数は 32 なの！規制解除時刻は 10/21 03:14:58 だよっ！あと 2時間 54分 53秒 なのです！ (10/21 00:20:04)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259675361485398016" data-datetime="2012-10-20T15:20:05+00:00">10月 20, 2012</a></blockquote>
<blockquote class="twitter-tweet" data-in-reply-to="259687380255125505" lang="ja"><p>@<a href="https://twitter.com/pnly3">pnly3</a> pn1yのセクションあたりのポスト数は 42 なの！規制解除時刻は 10/21 01:31:33 だよっ！あと 23分 42秒 なのです！ (10/21 01:07:51)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259687385724514305" data-datetime="2012-10-20T16:07:52+00:00">10月 20, 2012</a></blockquote>

###規制通知

<blockquote class="twitter-tweet" data-in-reply-to="259676470635532289" lang="ja"><p>@<a href="https://twitter.com/pnly3">pnly3</a> もうすぐ規制だよっ！規制解除時刻は 10/21 03:14:58 なの！あと 2時間 50分 28秒 なのです！ (10/21 00:24:29)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259676474267811841" data-datetime="2012-10-20T15:24:30+00:00">10月 20, 2012</a></blockquote>

###解除通知

<blockquote class="twitter-tweet" data-in-reply-to="259695653842731010" lang="ja"><p>@<a href="https://twitter.com/pn1y">pn1y</a> 第1規制垢がたぶん規制解除されたよ♪ (10/21 01:40:43)</p>&mdash; きせーさーちα版さん (@kisei_search2) <a href="https://twitter.com/kisei_search2/status/259695659354046464" data-datetime="2012-10-20T16:40:44+00:00">10月 20, 2012</a></blockquote>
