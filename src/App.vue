<template>
  <div id="app">
    <header class="header">
		<div class="container">
			<nav class="navbar" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						<img src="./assets/lgo-vuemastery.png" style="margin-right:10px;" alt="VueMastery.com: News and tutorials to reach Vue mastery" >
						<span>VueMastery</span>
					</a>

					<button class="button navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
				</div>

				<div class="navbar-menu" id="navMenu">
					<div class="navbar-start">
						<a href="/news.html" class="navbar-item" >News</a>
						<a href="/learn.html" class="navbar-item" >Learn</a>
						<a href="/about.html" class="navbar-item" >About</a>
					</div>
				</div>
			</nav>
		</div>
	  </header>
    <router-view/>

    <!-- hero starts -->
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
						<a class="white" href="javascript:;">Want to submit a contribution?</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- hero ends -->

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

			<!-- Article component -->
			<article class="columns article-object">
				<div class="column is-two-thirds">
					<a href="javascript:;">
						<h3 class="title is-3 is-spaced">How to: Vue Router</h3>
						<p class="subtitle">Description of article goes here and describes what the reader can expect about the article and stuff and more and even more stuff.</p>
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
			<!-- Article component -->
			<article class="columns article-object">
				<div class="column is-two-thirds">
					<a href="javascript:;">
						<h3 class="title is-3 is-spaced">Vuex State Management</h3>
						<p class="subtitle">Description of article goes here and describes what the reader can expect about the article and stuff and more and even more stuff.</p>
						<span class="tag">Opinion</span>
						<span>by</span>
						<span>Adrian Vargana</span>
					</a>
				</div>
				<div class="column is-one-quarter">
				</div>
			</article>
			<!--/ End article component -->
			<!-- Article component -->
			<article class="columns article-object">
				<div class="column is-two-thirds">
					<a href="javascript:;">
						<h3 class="title is-3 is-spaced">VueConf Workshops</h3>
						<p class="subtitle">Description of article goes here and describes what the reader can expect about the article and stuff and more and even more stuff.</p>
						<span class="tag">Tutorial</span>
						<span>by</span>
						<span>Evan You</span>
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
		</div>
	</section>
	<!-- End News Component -->

	<section class="section">
		<div class="container">

			<div class="box level">
				<div class="level-item is-narrow">
					<p class="title is-4">Get this content in your inbox</p>
				</div>

				<div class="level-item">
					<div class="field is-grouped">
						<div class="control has-icons-left is-expanded">
							<input class="input is-medium" type="email" placeholder="Enter your email">
							<span class="icon is-left">
								<i class="fa fa-envelope"></i>
							</span>
						</div>
						<div class="control">
							<button class="button is-medium is-link">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="level-item is-narrow">
					<button class="button is-text">Subscribe on iTunes</button>
				</div>
			</div>

		</div>
	</section>
	<!-- email card ends -->

	<section class="section">
		<div class="container">
			<nav class="pagination is-right" role="navigation" aria-label="pagination">
				<a class="pagination-previous">Previous</a>
				<a class="pagination-next">Next</a>
				<ul class="pagination-list">
					<li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
					<li><span class="pagination-ellipsis">&hellip;</span></li>
					<li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
					<li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
					<li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
					<li><span class="pagination-ellipsis">&hellip;</span></li>
					<li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
				</ul>
			</nav>
		</div>
	</section>
	<!-- pagination ends -->

	<footer class="footer">
		<div class="container">
			<div class="content has-text-centered">
				<p>
					<strong>Vue Mastery</strong> by <a href="http://codepop.com">Codepop</a>. The source code is licensed
					<a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
				</p>
			</div>
		</div>
	</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
   @import 'style.scss';
</style>
