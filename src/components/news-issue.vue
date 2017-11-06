<template>
<!-- news starts -->
	<section class='section'>
		<div class='container'>
			<div class='columns article-object'>
				<div class='column is-two-thirds'>
					<div class='columns is-reverse-tablet'>
						<div class='column is-narrow'>
							<span class='tag is-white is-medium'>November 1, 2017</span>
						</div>
						<div class='column'>
							<h2 class='title is-2 is-spaced blue'>{{newsIssue.title}}</h2>
						</div>
					</div>
				<p class='subtitle is-4'>{{newsIssue.description}}</p>

				<p>Produced by Gregg Pollack &amp; Adam Jahr</p>
				</div>
				<div class='column'>
					<div class='box content'>
						<h4 class='title is-5'>Listen to the Vue Podcast</h4>
						<audio controls>
              <source src='vue.mp3' type='audio/mpeg'>
            </audio>
						<p>Adam &amp; Gregg discuss the weekly news in our podcast.</p>
						<a class='button is-link' href='javascript:;'>Subscribe on iTunes</a>
					</div>
				</div>
			</div>
		</div>

		<div class='container'>

			<news-story v-for="storyItem in newsIssue.stories" :story="storyItem" :key="storyItem.id" />
			
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
  name: 'NewsIssue',
  data () {
    return {
      newsIssue: {
        id: 1,
        title: 'Newsletter Weekly',
        description: 'In this episode we cover ducks, chickens, turkeys, and the new version of moose.',
        published_on: new Date(),
        audio_file: '',
        authors: [
          {
            id: 1,
            name: 'Gregg Pollack',
            image: '/picture/gregg.jpg',
            url: 'http://www.greggpollack.com'
          },
          {
            id: 2,
            name: 'Adam Jahr',
            image: '/picture/adam.jpg',
            url: ''
          }
        ],
        stories: [
          {
            id: 1,
            title: 'New Duck found on Mars',
            author: 'Tim WebFeet',
            category: 'News',
            image: '/picture/screenshot.jpg',
            url: 'http://example.com',
            featured: true,
            description: 'Just after finding water on Mars, they looked closer and found a duck.  Learn how they are going to hear it quack'
          },
          {
            id: 2,
            title: 'Learn how to quack like a duck, from a duck',
            author: 'Kim Canard',
            category: 'Tutorial',
            image: '',
            url: 'http://example.com',
            featured: true,
            description: 'It is one thing to quack, but quite another to learn how to do it by someone who isdone it for years.  Follow this tutorial to learn how.'
          },
          {
            id: 3,
            title: 'How we all learned to Quack and Cluck at Pond Collective Inc.',
            author: 'Joe Feathers',
            category: 'Case Study',
            image: '/picture/screenshot.jpg',
            url: 'http://example.com',
            featured: true,
            description: 'Learn how one company started with nothing and taught their entire team to quack and cluck in unison'
          },
          {
            id: 4,
            title: 'Quacking is not the right way to get attention',
            author: 'Carl Flocking',
            category: 'Opinion',
            image: '',
            url: 'http://example.com',
            featured: true,
            description: 'Carl uses new data that quacking is not the right way to get breadcrumbs after all.  You cannotreally argue with him.'
          },
          {
            id: 5,
            title: 'An alternative to the typical quack',
            author: 'Jan Cluck',
            category: 'Tutorial',
            image: '',
            url: 'http://example.com',
            featured: false,
            description: ''
          },
          {
            id: 6,
            title: 'What It is like to have Webbed Feet',
            author: 'Pond Inc.',
            category: 'Case Study',
            image: '',
            url: 'http://example.com',
            featured: false,
            description: ''
          },
          {
            id: 7,
            title: 'Dogs are not your friends, all the time',
            author: 'Ima Runaway',
            category: 'Opinion',
            image: '',
            url: 'http://example.com',
            featured: false,
            description: ''
          }
        ]
      }
    }
  }
}
</script>