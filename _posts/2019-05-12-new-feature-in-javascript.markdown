---
layout: post
title:  "How I built my website"
subtitle: "With Bulma, Jekyll and Forestry"
date:   2019-08-28 12:16:33 +0300
categories: programming technical 
thumbnail: "/assets/images/first-post.jpg"
---
In this article, I will lay out how I made a fast static website with a blog and hosted it for free.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight javascript %}
function print_hi(name) {
  console.log "Hi, #{name}"
}
print_hi('Tom')
//=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [MDN Docs][mdn-docs] for more info on how to get the most out of Javascript.

[mdn-docs]: https://developer.mozilla.org
