<template>
<div>
	<section class="section">
		<div class="container">
			<div class="columns">
				<div class="column valign">
					<div class="">
						<h1 class="title has-text-primary is-1 is-spaced">Why Learn Vue?</h1>
						<p class="subtitle">We worked closely with the Vue core team to develop this video that shows the magical features of this JS framework.</p>
					</div>
				</div>
				<div class="column">
					<div class="box" style="height: 400px;">
						video goes in here
					</div>
				</div>
			</div>

			<div class="columns" style="margin-top: -230px;">
				<div class="column is-half" style="background-color: #18D0B1; padding:20px;">
					<h1 class="title is-3" style="color: white;">Ready to become a Vue Master?</h1>
					<p class="subtitle is-6" style="color: white;">Over the next month, we'll be releasing a Vue video series to help you reach Vue mastery. For early access, drop in your email. <br> We'll be in touch</p>

						<div class="field is-grouped">
							<div class="control has-icons-left is-expanded">
								<input class="input is-medium" type="email" placeholder="Enter your email">
								<span class="icon is-left">
									<i class="fa fa-envelope"></i>
								</span>
							</div>
							<div class="control">
								<button class="button is-link is-medium">Subscribe</button>
							</div>
            			</div>
				</div>
			</div>
		</div>
	</section>
	<site-footer/>
</div>
</template>

<script>
import SiteFooter from '@/components/site-footer'
export default {
  components: {
    SiteFooter
  },
  name: 'Learn'
}
</script>
