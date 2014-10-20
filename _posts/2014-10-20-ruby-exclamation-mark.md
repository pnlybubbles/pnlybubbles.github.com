---
layout: post
title: Rubyのビックリマークの話
date: 2014-10-20 17:45:00
category : ruby
tags : [ruby]
---

    [code.high.num]
    class Tippy
    end
    
    mofu = Tippy.new
    
    p !!mofu  #=> true

オブジェクトが入ってるかどうかを二重否定によってtrue/falseで返すときに使われる`!!`のイディオム。Rubyだとこのやり方は思わぬ形でバグを生み出してしまうかもしれない。

    [code.high.num]
    class Pyon
      def !@
        return Pyon.new
      end
    end
    
    usagi = Pyon.new
    
    p !usagi     #=> #<Pyon:0x007ff3dc888a88>
    p !!usagi    #=> #<Pyon:0x007ff3dc888948>
    p usagi.!    #=> #<Pyon:0x007ff3dc888880>
    p usagi.!.!  #=> #<Pyon:0x007ff3dc888790>

Ruby1.9移行において`#!`は`def @!; end`で定義されたメソッドの呼び出しである。BasicObjectクラスに存在する`#!`であるが、上記の例のように再定義されていると意図せずに違うメソッドを呼び出してしまう。

ture/falseを返したいのであれば次のようにするのが賢明である。

    [code.high.num]
    p usagi ? true : false  #=> true

最も、`!@`の再定義において、直感的な戻り値でない実装は避けたほうが良いかもしれない。

ちょっと**ビックリ**した最近の発見でした。