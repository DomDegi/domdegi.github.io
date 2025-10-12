---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
theme: minima
author: Domenico De Giorgio
title: Dom's learning journey
email: domenico.degiorgio@icloud.com
# Dom's learning journey

# Dom's learning journey

**Author:** Domenico De Giorgio  
**Email:** [domenico.degiorgio@icloud.com](mailto:domenico.degiorgio@icloud.com)

Welcome to my blog! Here I share my learning journey during my MSc in High Performance Computing at Politecnico di Milano.

---

## Blog posts

<div>
	<label for="category-filter">Filter by category:</label>
	<select id="category-filter" onchange="filterPosts()">
		<option value="all">All</option>
		{% assign categories = site.categories | sort %}
		{% for category in categories %}
			<option value="{{ category[0] }}">{{ category[0] }}</option>
		{% endfor %}
	</select>
</div>

<ul id="blog-posts">
	{% for post in site.posts %}
		<li class="post-item" data-category="{{ post.categories | join: ',' }}">
			<a href="{{ post.url }}">{{ post.title }}</a> <small>({{ post.date | date: "%d/%m/%Y" }})</small>
			{% if post.categories %}
				<span> - Category: {{ post.categories | join: ', ' }}</span>
			{% endif %}
		</li>
	{% endfor %}
</ul>

<script>
function filterPosts() {
	var select = document.getElementById('category-filter');
	var selected = select.value;
	var posts = document.querySelectorAll('.post-item');
	posts.forEach(function(post) {
		if (selected === 'all' || post.dataset.category.includes(selected)) {
			post.style.display = '';
		} else {
			post.style.display = 'none';
		}
	});
}
</script>

---
