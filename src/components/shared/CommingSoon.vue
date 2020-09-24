<template>
	<div class="comming-soon">
		<MePeep />
		<div class="comming-soon__content">
			<h1 class="content__title">Comming Soon!</h1>
			<p class="content__text">
				Uh oh, it looks like I haven't finished this page! <br /><br />
				Please return at a later date! In the meantime, please check out my <g-link to="/">website</g-link>!
			</p>
		</div>
	</div>
</template>

<script>
import MePeep from '~/components/svgs/MePeep.vue';

export default {
	components: {
		MePeep
	}
};
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/link.scss';

.comming-soon {
	// @include container;
	padding: 80px 20px 100px;
	display: flex;

	a {
		@include link;
	}

	&__content {
		flex: 1;
		@include media-breakpoint-up(lg) {
			padding-left: 80px;
		}
		.content {
			&__title {
				color: $primary;
				font-size: 3rem;
				font-weight: 800;
				margin-bottom: 20px;
				@include media-breakpoint-up(lg) {
					font-size: 5rem;
				}
			}
			&__text {
				font-size: 1.3rem;
				line-height: 1.3;
				@include media-breakpoint-up(lg) {
					font-size: 2rem;
				}
			}
		}
	}
	svg {
		display: none;
		@include media-breakpoint-up(lg) {
			width: 30%;
			height: auto;
			display: block;
		}
	}
}
</style>
