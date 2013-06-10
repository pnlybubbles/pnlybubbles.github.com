---
layout: post
title: ruby-2.0.0-p195をrbenvでインストールしたメモ
date: 2013-06-07 21:10:00
category : ruby
tags : [ruby, ruby2.0, rbenv, openssl, homebrew]
---

Homebrewから必要なものをインストールする。

その前にformulaを更新する

	[code]
	$ brew update

`openssl`、`readline`、`ruby-build`をインストールする。

	[code]
	$ brew install openssl
	$ brew install readline
	$ brew install ruby-build

リンクする。

	[code]
	$ brew link readline openssl --force

ruby2.0ではhomebrewから入れたopensslを使ってコンパイルするとsslの証明書エラーが起きる。対策のためにhomebrewから証明書を入れる。

	[code]
	$ brew install curl-ca-bundle
	$ brew list curl-ca-bundle
	/usr/local/Cellar/curl-ca-bundle/1.87/share/ca-bundle.crt
	$ cp /usr/local/Cellar/curl-ca-bundle/1.87/share/ca-bundle.crt /usr/local/etc/openssl/cert.pem

準備が整ったのでrubyをインストールする。

	[code]
	$ RUBY_CONFIGURE_OPTS="--with-openssl-dir=`brew --prefix openssl` --with-readline-dir=`brew --prefix readline` --enable-shared" rbenv install 2.0.0-p195

今回は`--enable-shared`付きでインストールしているが、別に必要はない。RubyCocoaを使うときは必要。

`RUBY_CONFIGURE_OPTS`でなくて`CONFIGURE_OPTS`を使っているのをよく見るけど、私の環境ではうまくいきませんでした。
