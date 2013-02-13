---
layout: post
title: bowlineをインストールしてみた
date: 2012-02-12 14:00:00
category : ruby
tags : [ruby, bowline]
---

html+javascript+css+rubyでGUIアプリケーションを開発可能にするプロジェクト、bowlineを使ってみた。

今のところUbuntuとMacOSXに対応しているようです。

##インストール

いちおうRubyのバージョン。

<pre>
$ ruby -v
ruby 1.9.3p327 (2012-11-10 revision 37606) [x86_64-darwin11.4.0]
</pre>

`Homebrew`で管理してるので最新版ではないです。

さて、`bowline`インストールしてみる。

<pre>
$ sudo gem install bowline
ERROR:  While executing gem ... (Gem::DependencyError)
    Unable to resolve dependencies: activemodel requires i18n (~> 0.5.0)
</pre>

これだとエラーがでる。

`i18n`がgemでバージョン指定されているのかな。

gemインストール時にバージョンを指定してあげる。

<pre>
$ gem install i18n --version 0.5.0
Fetching: i18n-0.5.0.gem (100%)
Successfully installed i18n-0.5.0
1 gem installed
Installing ri documentation for i18n-0.5.0...
Installing RDoc documentation for i18n-0.5.0...
</pre>

もう一度`bowline`のインストールを試してみる。

<pre>
$ sudo gem install bowline
Fetching: highline-1.6.15.gem (100%)
Fetching: diff-lcs-1.2.1.gem (100%)
Fetching: extlib-0.9.16.gem (100%)
...
DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED!
DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED!

  The rubyzip2 gem is deprecated. Instead, please use:

  * rubyzip       https://github.com/aussiegeek/rubyzip
  * archive-zip   https://github.com/javanthropus/archive-zip

DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED!
DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED! DEPRECATED!
...
Fetching: bowline-0.9.4.gem (100%)
...
    **************************************************

      Thank you for installing Bowline.
      
      If you're on Linux, please install the WebKit library:
        sudo apt-get install libwebkit-dev

    **************************************************
...
Successfully installed bowline-0.9.4
...
Installing RDoc documentation for bowline-0.9.4...
</pre>

なんかいろいろ出たけど、どうにかインストールはできたみたい。

`DEPRECATED!`うるさし...

Linuxの場合は`libwebkit-dev`をインストールしてくださねーって言ってる。

これでインストールは完了。

##サンプルを作ってみる

`bowline-gen`というコマンドで`helloworld`を作る。パスは適当に通しておく。

<pre>
$ bowline-gen app helloworld
Generating with app generator:
     [ADDED]  vendor
     [ADDED]  lib
     [ADDED]  db
     [ADDED]  build
     [ADDED]  log
     [ADDED]  public
     [ADDED]  app
     [ADDED]  app/models
     [ADDED]  app/binders
     [ADDED]  app/helpers
     [ADDED]  app/windows
     [ADDED]  config
     [ADDED]  config/initializers
     [ADDED]  config/first_run
     [ADDED]  app_first_run
     [ADDED]  Rakefile
     [ADDED]  Gemfile
     [ADDED]  public/index.html
     [ADDED]  public/javascripts/application.js
     [ADDED]  public/stylesheets/application.css
     [ADDED]  script/build
     [ADDED]  script/console
     [ADDED]  script/generate
     [ADDED]  script/init
     [ADDED]  script/run
     [ADDED]  config/environment.rb
     [ADDED]  config/environments/development.rb
     [ADDED]  config/environments/production.rb
     [ADDED]  .gitignore
     [ADDED]  public/icon.png
     [ADDED]  script
     [ADDED]  public/javascripts/jquery.js
     [ADDED]  public/javascripts/jquery.chain.js
     [ADDED]  public/javascripts/superclass.js
     [ADDED]  public/javascripts/bowline.js
     [ADDED]  public/javascripts/bowline.chain.js
     [ADDED]  app/windows/main_window.rb
     [ADDED]  config/application.yml
     [ADDED]  config/database.yml
     [ADDED]  config/boot.rb
     [ADDED]  README
</pre>

`helloworld`ディレクトリに入って`bowline-bundle`を実行する。

<pre>
$ bowline-bundle
/usr/local/Cellar/ruby/1.9.3-p327/lib/ruby/gems/1.9.1/gems/bowline-bundler-0.0.4/lib/bowline/bundler/dependency.rb:59:in `<class:Dependency>': undefined method `version_requirements' for class `Bundler::Dependency' (NameError)
	from /usr/local/Cellar/ruby/1.9.3-p327/lib/ruby/gems/1.9.1/gems/bowline-bundler-0.0.4/lib/bowline/bundler/dependency.rb:4:in `<module:Bundler>'
	from /usr/local/Cellar/ruby/1.9.3-p327/lib/ruby/gems/1.9.1/gems/bowline-bundler-0.0.4/lib/bowline/bundler/dependency.rb:1:in `<top (required)>'
	from /usr/local/Cellar/ruby/1.9.3-p327/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require'
	from /usr/local/Cellar/ruby/1.9.3-p327/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require'
	from /usr/local/lib/ruby/gems/1.9.1/gems/bowline-bundler-0.0.4/lib/bowline/bundler.rb:18:in `<top (required)>'
	from /usr/local/Cellar/ruby/1.9.3-p327/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require'
	from /usr/local/Cellar/ruby/1.9.3-p327/lib/ruby/1.9.1/rubygems/custom_require.rb:36:in `require'
	from /usr/local/lib/ruby/gems/1.9.1/gems/bowline-bundler-0.0.4/bin/bowline-bundle:4:in `<main>'
</pre>

コケる…。

Rubyを32bitモードでコンパイルしなくちゃいけなかったのかな…。

わからないなう…。

進展があったら追記します。

---

####追記（2012-02-13）

	ruby 1.8.7 (2011-12-28 patchlevel 357) [universal-darwin11.0]

Rubyのバージョンを変えて行ったところ`bowline-bundle`を実行できましたが、途中でコケました…。

####追記（2012-02-13）

	