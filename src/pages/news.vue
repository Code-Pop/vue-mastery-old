<template>
  <div>
    <section class="hero is-primary is-bold">
		  <div class="hero-body">
			  <div class="container">
          <h1 class="title is-2">Vue News Weekly</h1>
        </div>
      </div>
    </section>
    <news-issue v-for="(newsPost, index) in newsIssues" :newsPost="newsPost" :key="newsPost.id" :data="newsPost" name="index" :full="true" />
    <site-footer />
  </div>
</template>

<script>
import NewsIssue from '@/components/news-issue'
import SiteFooter from '@/components/site-footer'

export default {
  components: {
    NewsIssue,
    SiteFooter
  },
  name: 'News',
  data () {
    return {
      newsIssues: [
        {
          id: 1,
          title: 'News - Issue 2',
          description: 'In this episode we cover ducks, chickens, turkeys, and the new version of moose.',
          published_on: new Date().toString().split(' ').splice(0, 4).join(' '),
          audio_file: './static/drum.mp3',
          authors: [
            {
              id: 1,
              name: 'Gregg Pollack',
              image: '',
              url: 'http://www.greggpollack.com'
            },
            {
              id: 2,
              name: 'Adam Jahr',
              image: '',
              url: ''
            }
          ],
          stories: [
            {
              id: 1,
              title: 'New Duck found on Mars',
              author: 'Tim WebFeet',
              category: 'News',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'Just after finding water on Mars, they looked closer and found a duck.  Learn how they are going to hear it quack'
            },
            {
              id: 2,
              title: 'Learn how to quack like a duck, from a duck',
              author: 'Kim Canard',
              category: 'Tutorial',
              image: '',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'It is one thing to quack, but quite another to learn how to do it by someone who isdone it for years.  Follow this tutorial to learn how.'
            },
            {
              id: 3,
              title: 'How we all learned to Quack and Cluck at Pond Collective Inc.',
              author: 'Joe Feathers',
              category: 'Case Study',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'Learn how one company started with nothing and taught their entire team to quack and cluck in unison'
            },
            {
              id: 4,
              title: 'Quacking is not the right way to get attention',
              author: 'Carl Flocking',
              category: 'Opinion',
              image: '',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'Carl uses new data that quacking is not the right way to get breadcrumbs after all.  You cannotreally argue with him.'
            },
            {
              id: 5,
              title: 'An alternative to the typical quack',
              author: 'Jan Cluck',
              category: 'Tutorial',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: false,
              description: ''
            },
            {
              id: 6,
              title: 'What It is like to have Webbed Feet',
              author: 'Pond Inc.',
              category: 'Case Study',
              image: '',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: false,
              description: ''
            },
            {
              id: 7,
              title: 'Dogs are not your friends, all the time',
              author: 'Ima Runaway',
              category: 'Opinion',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: false,
              description: ''
            }
          ]
        }, // end
        {
          id: 2,
          title: 'News - Issue 1',
          description: 'In this episode we cover ducks, chickens, turkeys, and the new version of moose.',
          published_on: new Date().toString().split(' ').splice(0, 4).join(' '),
          audio_file: './static/drum.mp3',
          authors: [
            {
              id: 1,
              name: 'Gregg Pollack',
              image: '',
              url: 'http://www.greggpollack.com'
            },
            {
              id: 2,
              name: 'Adam Jahr',
              image: '',
              url: ''
            }
          ],
          stories: [
            {
              id: 1,
              title: 'New Duck found on Mars',
              author: 'Tim WebFeet',
              category: 'News',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'Just after finding water on Mars, they looked closer and found a duck.  Learn how they are going to hear it quack'
            },
            {
              id: 2,
              title: 'Learn how to quack like a duck, from a duck',
              author: 'Kim Canard',
              category: 'Tutorial',
              image: '',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'It is one thing to quack, but quite another to learn how to do it by someone who isdone it for years.  Follow this tutorial to learn how.'
            },
            {
              id: 3,
              title: 'How we all learned to Quack and Cluck at Pond Collective Inc.',
              author: 'Joe Feathers',
              category: 'Case Study',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'Learn how one company started with nothing and taught their entire team to quack and cluck in unison'
            },
            {
              id: 4,
              title: 'Quacking is not the right way to get attention',
              author: 'Carl Flocking',
              category: 'Opinion',
              image: '',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: true,
              description: 'Carl uses new data that quacking is not the right way to get breadcrumbs after all.  You cannotreally argue with him.'
            },
            {
              id: 5,
              title: 'An alternative to the typical quack',
              author: 'Jan Cluck',
              category: 'Tutorial',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: false,
              description: ''
            },
            {
              id: 6,
              title: 'What It is like to have Webbed Feet',
              author: 'Pond Inc.',
              category: 'Case Study',
              image: '',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: false,
              description: ''
            },
            {
              id: 7,
              title: 'Dogs are not your friends, all the time',
              author: 'Ima Runaway',
              category: 'Opinion',
              image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/mallard-male-standing.adapt.945.1.jpg',
              featured: false,
              description: ''
            }
          ]
        }
      ]
    }
  }
}
</script>
