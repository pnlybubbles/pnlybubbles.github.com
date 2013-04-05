---
layout: post
title: TwitterAPI POST Rate Limit
date: 2013-04-05 15:30:00
category : twitter
tags : [twitter, api, post, ratelimit]
---

This article is NOT official.

##API

* POST statuses/update
* POST statuses/update_with_media
* POST statuses/retweet/:id
* POST statuses/destroy/:id

> [REST API v1.1 Resources   Twitter Developers](https://dev.twitter.com/docs/api/1.1 "REST API v1.1 Resources   Twitter Developers")

##Rate Limiting

The rate limiting for calls to these API depends on all conditions below.

###Duplication

Those that duplicated with recent posts(about 20) will be regulated.  
POST statuses/update API only.

###127req/3hours

It simply is not "per three hours".  
We define "one Section" as for 3 hours.  
We post something, then the "Section" is start. (If the section has not started.)  
Between the "Section", we can request 127 APIs.

<img src="/img/2013-04-05-twitterapi_post_rate_limit.png" />

###1000req/day

"Twitter Developer Official" announces this rate limiting.

> [Twitter Help Center   Twitter limits (API, updates, and following)](https://support.twitter.com/articles/15364-twitter-limits-api-updates-and-following "Twitter Help Center   Twitter limits (API, updates, and following)")

However, According to the rate limti above this (127req/3hours), the calculated rate limit is 1016req/day (127 * 8).

##Others

The client "Mobile Web", "Keitai Web", "HootSuite" had a whitelist API and These could request 20000req/hour, but it was regulated on March 2012.

GET Rate Limiting is here.

> [REST API v1.1 Limits per window by resource   Twitter Developers](https://dev.twitter.com/docs/rate-limiting/1.1/limits "REST API v1.1 Limits per window by resource   Twitter Developers")

cf.

> [http://ltzz.info/alpha/twitter_kisei.html](http://ltzz.info/alpha/twitter_kisei.html "投稿規制の仕様")