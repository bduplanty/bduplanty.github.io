---
layout: page
title: Archive
permalink: /archive
comments: false
---
<ul>
{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%B %Y" %}
  {% if currentdate != date %}
    <li id="y{{currentdate}}">{{ currentdate }}</li>
    {% assign date = currentdate %} 
  {% endif %}
    <ul>
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    </ul>
{% endfor %}
</ul>