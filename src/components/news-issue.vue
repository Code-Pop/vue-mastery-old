<template>
	<section class='section'>
		<div class='container'>
			<div class='columns news-issue'>
				<div class='column is-two-thirds'>
					<div class='columns is-reverse-tablet'>
						<div class='column is-narrow'>
							<span class='tag is-white is-medium'>{{data.published_on}}</span>
						</div>
						<div class='column'>
							<h2 class='title is-2 is-spaced blue'>{{data.title}}</h2>
						</div>
					</div>
				<p class='subtitle is-4'>{{data.description}}</p>

				<p>Produced by Gregg Pollack &amp; Adam Jahr</p>
				</div>
        <podcast :data="data" />
			</div>
		</div>

		<div class='container'>
			<news-story v-for="storyItem in data.stories" :story="storyItem" :key="storyItem.id" :full="full" />
		</div>

	</section>
</template>

<script>
import NewsStory from '@/components/news-story'
import Podcast from '@/components/podcast'

export default {
  components: {
    NewsStory,
    Podcast
  },
  name: 'newsIssue',
  props: ['data', 'full']
}
</script>
