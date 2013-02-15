---
layout: post
title: google-code-prettifyを適用してみた
date: 2012-02-16 02:30:00
category : javascript
tags : [google-code-prettify, javascript, jquery, bootstrap, pygments]
---

ブログのコードの埋め込みをきれいにしようと思い、`google-code-prettify`をいれてみました。

美しい…。

	[code.high.num]
	class Person
		include ActiveModel::Conversion
		include ActiveModel::Validations

		validations_presence_of :name

		attr_accessor :name

		def initialize(attributes = {})
			@name = attributes[:name]
		end
		
		def persist
			@persisted = true
		end

		def persisted?
			@persisted
		end
	end

	person1 = Person.new(:name => "matz")
	p person1.valid?

テーマは`Tomorrow`です。

`Pygments`のSyntax Highlightingも`Jekyll`の方で使えるようになっています。`Pygments`の場合はこんな感じ。

{% highlight ruby %}
class Person
	include ActiveModel::Conversion
	include ActiveModel::Validations

	validations_presence_of :name

	attr_accessor :name

	def initialize(attributes = {})
		@name = attributes[:name]
	end
	
	def persist
		@persisted = true
	end

	def persisted?
		@persisted
	end
end

person1 = Person.new(:name => "matz")
p person1.valid?
{% endhighlight %}

すこし違います。テーマは同じ`Tomorrow`です。すこし詳細になった感じ。

`google-code-prettify`でただ単に全部のコードにシンタックスハイライトを適用するのではなく、マジックコメント(?)のようなものを使ってライン番号だけ表示させたり、ハイライトだけさせたりできるようにしました。

`JavaScript`と`jQuery`を使ってクラスを書き換えたり、要素を消したりして適用させているのでちょっと無理やり感あります…。

コードもぐちゃぐちゃ。  
見たい人はソースコード覗いてください。

でも、やっぱりTomorrowは綺麗。汚いコードも（ハイライトだけ）美しく…。
