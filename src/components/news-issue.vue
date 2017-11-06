<template>
<!-- news starts -->
	<section class="section">
		<div class="container">
			<div class="columns article-object">
				<div class="column is-two-thirds">
					<div class="columns is-reverse-tablet">
						<div class="column is-narrow">
							<span class="tag is-white is-medium">November 1, 2017</span>
						</div>
						<div class="column">
							<h2 class="title is-2 is-spaced blue">VueMastery Weekly - 1</h2>
						</div>
					</div>
				<p class="subtitle is-4">Welcome to our first issue. This week we will cover a lot. You should read everything and also listen to our podcast. We'll also tell you more stuff about stuff and stuff.</p>

				<p>Produced by Gregg Pollack &amp; Adam Jahr</p>
				</div>
				<div class="column">
					<div class="box content">
						<h4 class="title is-5">Listen to the Vue Podcast</h4>
						<audio controls>
              <source src="vue.mp3" type="audio/mpeg">
            </audio>
						<p>Adam &amp; Gregg discuss the weekly news in our podcast.</p>
						<a class="button is-link" href="javascript:;">Subscribe on iTunes</a>
					</div>
				</div>
			</div>
		</div>

		<div class="container">

			<news-story />
            <news-story />
            <news-story />
			
		</div>
        
	</section>
	<!-- End News Component -->
</template>

<script>
import NewsStory from '@/components/news-story'

export default {
  components: {
    NewsStory
  },
  name: 'NewsIssue'
}
</script>