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
	@include container;
	padding: 80px 0 100px;
	display: flex;

	a {
		@include link;
	}

	&__content {
		padding-left: 80px;
		flex: 1;
		.content {
			&__title {
				color: $primary;
				font-size: 5rem;
				font-weight: 800;
				margin-bottom: 20px;
			}
			&__text {
				font-size: 2rem;
				line-height: 1.3;
			}
		}
	}
	svg {
		width: 30%;
		height: auto;
	}
}
</style>
