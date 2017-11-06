<template>
   <div>
    <hero-banner />
    <news-issue />
    <news-issue />
    <news-issue />
	

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
import HeroBanner from '@/components/hero-banner'
import NewsIssue from '@/components/news-issue'

export default {
  components: {
    HeroBanner,
    NewsIssue
  },
  name: 'Home'
}
</script>