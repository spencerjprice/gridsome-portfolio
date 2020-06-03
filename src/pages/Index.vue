<template>
	<Layout>
		<div class="home">
			<h1 class="home__title">Hey there.<br />I'm Spencer.</h1>
			<p class="home__text">
				I'm a <g-link to="/work/">software developer</g-link> living in Salt Lake City, currently working for BlenderBottle.
			</p>
			<div class="currently">
				<h2 class="currently__title">Currently:</h2>
				<a href="https://blenderbottle.com">
					<BlenderBottle />
				</a>
			</div>
		</div>
	</Layout>
</template>

<script>
import BlenderBottle from '~/components/svgs/BlenderBottle.vue';

export default {
	components: {
		BlenderBottle
	}
};
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/link.scss';

.home {
	@include container;
	padding: 80px 20px 100px;

	&__title {
		font-size: 3rem;
		line-height: 1.1;
		margin: 0;
		font-weight: 700;
		margin-bottom: 24px;
		@include media-breakpoint-up(lg) {
			font-size: 6rem;
		}
	}
	&__text {
		font-size: 1.3rem;
		line-height: 1.5;
		font-weight: 500;
		margin-bottom: 80px;

		@include media-breakpoint-up(lg) {
			font-size: 2rem;
		}

		a {
			@include link;
		}
	}
}

.currently {
	&__title {
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: 400;
		margin-bottom: 14px;

		@include media-breakpoint-up(lg) {
			font-size: 0.8rem;
		}
	}
	a {
		&:hover svg {
			transform: translateY(-2px);
			opacity: 0.8;
		}
	}
	svg {
		fill: $text;
		height: 30px;
		width: auto;
		transition: all ease 200ms;

		@include media-breakpoint-up(lg) {
			height: 40px;
		}
	}
}
</style>
