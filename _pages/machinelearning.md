---
layout: archive
permalink: /machinelearning/
title: "Machine Learning posts by tags"
author_profile: true
header:
  image: "ml-image.jpg"
  caption: "photo credit: http://scikit-learn.org/"

---

{% include base_path %}
{% include group-by-array collection=site.portfolio_ml field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}