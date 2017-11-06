<template>
<header class="header">
		<div class="container">
			<nav class="navbar" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<router-link to="/" class="navbar-item">
						<img src="./../assets/lgo-vuemastery.png" style="margin-right:10px;" alt="VueMastery.com: News and tutorials to reach Vue mastery" >
						<span>VueMastery</span>
					</router-link> 

					<button class="button navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
				</div>

				<div class="navbar-menu" id="navMenu">
					<div class="navbar-start">
                        <router-link to="/news" class="navbar-item">News</router-link>
                        <router-link to="/learn" class="navbar-item">Learn</router-link>
                        <router-link to="/about" class="navbar-item">About</router-link>
					</div>
				</div>
			</nav>
		</div>
	  </header>
</template>

export default {
    name: "NavBar"
}