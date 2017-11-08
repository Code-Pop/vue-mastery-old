<template>
<div>
	<hero-banner />
	<news-issue />

	<section class="section" style="padding-top: 0rem;">
		<div class="container">

			<div class="container" style="padding-bottom: 30px;">
				<a class="button is-primary is-large" style="margin-right: .3rem">View Full Post</a>
				<a class="button is-primary is-outlined is-large">View Previous Post</a>
			</div>	

			<subscribe-box-bttm />

		</div>
	</section>

	<site-footer/>
</div>
</template>

<script>
import HeroBanner from '@/components/hero-banner'
import NewsIssue from '@/components/news-issue'
import SubscribeBoxBttm from '@/components/subscribe-box-bttm'
import SiteFooter from '@/components/site-footer'

export default {
  components: {
    HeroBanner,
    NewsIssue,
    SubscribeBoxBttm,
    SiteFooter
  },
  name: 'Home'
}
</script>

