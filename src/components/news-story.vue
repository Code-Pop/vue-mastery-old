<template>
<!-- Article component -->
			<article class="columns article-object">
				<div class="column is-two-thirds">
					<a href="javascript:;">
						<h3 class="title is-3 is-spaced">{{story.title}}</h3>
						<p class="subtitle">{{story.description}}</p>
						<span class="tag">Opinion</span>
						<span>by</span>
						<span>Michele Gorsecht</span>
					</a>
				</div>
				<div class="column is-one-quarter">
					<a href="javascript:;">
						<figure class="image is-3by2">
							<img src="https://via.placeholder.com/480x320" alt="">
						</figure>
					</a>
				</div>
			</article>
			<!--/ End article component -->
</template>
<script>
  export default {
    name: 'NewsStory',
    props: ['story']
  }
</script>