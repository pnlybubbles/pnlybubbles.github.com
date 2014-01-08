---
layout: page
title: あわあわのブログ
tagline:
---
{% include JB/setup %}

## ようこそ

ブログをGitHubの方に移行しました。  
これからもよろしくお願いします。

## 最近の記事

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## コンタクト

Twitter: [@pn1y](http://twitter.com/pn1y)  
Skype: only-bubbles  
Github: [pnlybubbles](https://github.com/pnlybubbles)

---

<font style="font-size: 12px">このブログではGoogle Analyticsによるアクセス解析を行っています。Google AnalyticsはファーストパーティCookieを利用し、個人を特定する情報を含まず利用者のアクセスログを収集します。[詳細](www.google.com/analytics "Google アナリティクス公式サイト")</font>