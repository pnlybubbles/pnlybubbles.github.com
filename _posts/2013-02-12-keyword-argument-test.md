---
layout: post
title: Ruby2.0のキーワード引数を試してみた
date: 2013-02-12 14:30:00
category : ruby
tags : [ruby, ruby2.0, キーワード引数]
---

Ruby2.0rcの気になった新機能、キーワード引数を試してみた。

	$ ruby -v
	ruby 2.0.0dev (2013-02-08 trunk 39161) [x86_64-darwin11.4.0]

{% highlight ruby %}
def test(key: "akarin", value: "kawaii")
	p [key, value]
end

test
# => ["akarin", "kawaii"]
test(key: "haruka", value: "kosikosi")
# => ["haruka", "kosikosi"]
test(value: "kosikosi", key: "haruka")
# => ["haruka", "kosikosi"]
test(key: "haruka")
# => ["haruka", "kawaii"]
test(value: "kosikosi")
# => ["akarin", "kosikosi"]
{% endhighlight %}

引数にキーを指定することができる。

メソッドを呼ぶときに引数を入れないと指定したデフォルト値が使われる。

便利。これ使えば`argument error`も減りそう。
