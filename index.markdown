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
		---
		layout: home
		theme: minima
		author: Domenico De Giorgio
		title: Dom's learning journey
		email: domenico.degiorgio@icloud.com
		listing:
			contents: posts
			sort: "date desc"
			type: default
			categories: true
			sort-ui: false
			filter-ui: true
		page-layout: full
		title-block-banner: true
		---

		# Welcome to my blog!

		This blog is my personal space to track what I'm learning and explore topics I enjoy. It isn't meant to be a tutorial — just notes, experiments, and occasional thoughts.

		&nbsp;  
		&nbsp;  

		---

		## Posts

		<div>
			<label for="category-filter">Filter by category:</label>
			<select id="category-filter" onchange="filterPosts()">
				<option value="all">All</option>
				{% assign categories = site.categories | sort %}
				{% for category in categories %}
					{% if category[0] != nil and category[0] != '' %}
						<option value="{{ category[0] }}">{{ category[0] }}</option>
					{% endif %}
				---
				layout: home
				theme: minima
				author: Domenico De Giorgio
				title: Dom's learning journey
				email: domenico.degiorgio@icloud.com
				listing:
					contents: posts
					sort: "date desc"
					type: default
					categories: true
					sort-ui: false
					filter-ui: true
				page-layout: full
				title-block-banner: true
				---

				# Welcome to my blog!

				This blog is my personal space to track what I'm learning and explore topics I enjoy. It isn't meant to be a tutorial — just notes, experiments, and occasional thoughts.

				&nbsp;  
				&nbsp;  

				---

				## Posts

				<div>
					<label for="category-filter">Filter by category:</label>
					<select id="category-filter" onchange="filterPosts()">
						<option value="all">All</option>
						{% assign categories = site.categories | sort %}
						{% for category in categories %}
							{% if category[0] != nil and category[0] != '' %}
								<option value="{{ category[0] }}">{{ category[0] }}</option>
							{% endif %}
						{% endfor %}
					</select>
				</div>

				<ul id="blog-posts">
					{% assign posts = site.posts | sort: 'date' | reverse %}
					{% for post in posts %}
						<li class="post-item" data-category="{{ post.categories | join: ',' }}">
							<a href="{{ post.url }}">{{ post.title }}</a>
							<small> — {{ post.date | date: "%d %b %Y" }}</small>
							{% if post.categories and post.categories != empty %}
								<div class="post-cats">Category: {{ post.categories | join: ', ' }}</div>
							{% endif %}
							{% if post.excerpt %}
								<div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 140 }}</div>
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
						var cats = post.dataset.category || '';
						if (selected === 'all' || cats.split(',').indexOf(selected) !== -1) {
							post.style.display = '';
						} else {
							post.style.display = 'none';
						}
					});
				}

				// preserve filter selection across navigations (optional)
				document.addEventListener('DOMContentLoaded', function() {
					var select = document.getElementById('category-filter');
					if (select) {
						var params = new URLSearchParams(window.location.search);
						var cat = params.get('category');
						if (cat) {
							select.value = cat;
							filterPosts();
						}
					}
				});
				</script>

				---

				Enjoy the reading!
