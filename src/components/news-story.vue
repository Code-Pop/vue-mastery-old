<template>
	<article v-if="story.featured" class="columns news-story">
		<div class="column is-two-thirds">
			<a :href="story.url" target="_blank">
				<h3 class="title is-3 is-spaced">{{story.title}}</h3>
				<p class="subtitle">{{story.description}}</p>
				<span class="tag">{{story.category}}</span>
				<span>by</span>
				<span>{{story.author}}</span>
			</a>
		</div>
		<div v-if="story.image !== ''" class="column is-one-quarter">
			<a :href="story.url" target="_blank">
				<figure class="image is-3by2">
					<img :src="story.image" alt="">
				</figure>
			</a>
		</div>
	</article>
	<article v-else-if="full">
		<div class="column is-two-thirds">
			<a :href="story.url" target="_blank">
				<h3 class="title is-4 is-spaced">{{story.title}}</h3>
				<span class="tag">{{story.category}}</span>
				<span>by</span>
				<span>{{story.author}}</span>
			</a>
		</div>
	</article>
</template>

<script>
  export default {
    name: 'NewsStory',
    props: ['story', 'full']
  }
</script>
