<template>
<div>
	<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column">
					<h1 class="title is-1 has-text-primary is-spaced">Who We Are</h1>
					<p class="subtitle">Gregg Pollack &amp; Adam Jahr are passionate about teaching programming online. Gregg previously founded Code School, and Adam previously taught at The Iron Yard. Vue Mastery is a brand of <a href="javascript:;">Code Pop</a>, whose mission is to popularize open source technologies.</p>
					<div class="content">
						<h2 class="title is-3">Contact Us</h2>
						<div class="field is-grouped">
							<p class="control">
								<a href="https://goo.gl/forms/AIKdWZLDtPmiPMIh2" target="blank">
									<button class="button is-primary">Submit News</button>
								</a>
							</p>
							<p class="control">
								<a href="https://goo.gl/forms/yQPSzXD0mZ9whYs22" target="blank">
									<button class="button" >Email</button>
								</a>
							</p>
						</div>
					</div>
			</div>
			<div class="column">
				<div class="box" style="height: 400px;">
						photo goes in here
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
  name: 'About'
}
</script>
