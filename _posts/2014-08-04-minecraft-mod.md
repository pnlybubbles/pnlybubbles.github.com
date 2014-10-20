---
layout: post
title: MinecraftのModを作ってみた
date: 2014-08-04 00:00:00
category : ruby
tags : [ruby, minecraft, craftbukkit, mod]
---

minecraftのサーバークライアントであるcraftbukkitのプラグインを作ってみました。

今回は`Purugin`というcraftbukkitのプラグインを利用して製作しました。

## Purugin

> enebo / Purugin | GitHub  
> [https://github.com/enebo/Purugin](https://github.com/enebo/Purugin)

`Purugin`はjrubyを用いてcraftbukkitのプラグインを動作させるラッパーです。

今回、これを使ってrubyでbukkitプラグインが作れると知って、Mod開発をやってみたというのがきっかけです。

`Purugin`自体の開発は止まっているみたいですが、現在最新のcraftbukkitでは今のところ問題なく動作しています。

`Purugin`の構造は、大体がcraftbukkitと同様で、メソッド名やクラス構造は同様にアクセスできます。

---
#### 追記(2014/08/24)
craftbukkitの開発がMojangに移った(？)ようで、このプラグインはminecraft 1.8以降では使えなくなるかもしれないです。

## プラグインを作ってみた

今回、製作したのは仲間を蘇生できるようにするmodです。

modのシステム上、1人ではデバッグができないので苦労しました。(フォロワーさん、リア友に手伝ってもらいました。ありがとうございました。)

modの簡単な説明をすると、死んだ場所にプレイヤーの頭部が残り、それを数回叩くことで蘇生ができます。蘇生されたプレイヤーはその場にリスポーンします。

もし蘇生が困難な場合やリスポーンしてしまった場合は、自分の頭部を叩くことで遺品を回収することができます。また回収前に死んだ場合は遺品を消失します。

マルチで遊ぶとき連隊行動をしている時、死ぬとベッドまで飛ばされてバラバラになってしまうのを改善するために作ってみました。

ソースコードは以下のURLです。

コードをダウンロードして、rbファイルをpluginsの中に入れれば動作します。(もちろん`Purugin`が入ってる状態で)

[https://gist.github.com/pnlybubbles/5b1853f3fc36277fa327](https://gist.github.com/pnlybubbles/5b1853f3fc36277fa327)

## で

自分なりに満足できるmodができました。

友達3,4人と一緒に遊んでみたのですが、蘇生ありだとなかなか全滅しません。

卵を使って蘇生グレネード的なものも作ろうと思ったのですが、いろいろと重くなって諦めました。

Puruginについては、サーバーを再起動しなくてもmodの修正が行えたりとサクサクと試せて良い感じです。

craftbukkitの行方は不明ですが、すこしminecraftの世界が広がったように感じた今日此の頃でした。