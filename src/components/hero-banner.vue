<template>
	<section class="hero is-primary is-bold">
		<div class="hero-body">
			<div class="container">
				<div class="columns">
					<div class="column valign">
						<div class="is-middle">
							<h1 class="title is-1">Become a Vue Master</h1>
							<h2 class="subtitle is-3">Learn with us weekly</h2>
						</div>
					</div>
					<div class="column">
						<div class="box">
							<h3 class="title blue">Get our weekly Vue newsletter.</h3>
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
							<div class="field is-grouped-centered">
								<a class="button is-text" href="javascript:;">Subscribe to our podcast on iTunes</a>
							</div>
						</div>
						<a class="white" href="https://goo.gl/forms/AIKdWZLDtPmiPMIh2" target="blank">Want to submit a contribution?</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'HeroBanner'
}
</script>
