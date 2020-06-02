<template>
	<header class="nav">
		<div class="nav__container">
			<g-link class="nav__logo" to="/">
				<MainLogo />
			</g-link>
			<nav>
				<g-link class="nav__link" to="/about/">About</g-link>
				<g-link class="nav__link" to="/blog/">Blog</g-link>
			</nav>
		</div>
	</header>
</template>

<script>
import MainLogo from '~/components/svgs/MainLogo.vue';

export default {
	components: {
		MainLogo
	}
};
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/link.scss';

.nav {
	&__container {
		@include container;
		height: 120px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__logo {
		height: 72px;
		width: 72px;
		content: '';
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(270deg, $accent1, $accent2);
		background-size: 200% 200%;
		box-shadow: inset 0px -20px 100px rgba(255, 255, 255, 0.6);
		transform-origin: 50% 50%;
		transform-style: preserve-3d;
		perspective: 1000px;
		animation: transform 20s ease-in-out infinite both alternate, movement 6s ease-in-out infinite both, shade 15s linear infinite both;
		svg {
			fill: white;
			width: 40px;
		}
	}
	&__link {
		@include link;
		font-size: 1.2rem;
		margin: 0 30px;
		padding: 0 10px;
		color: $text;
		&:last-child {
			margin-right: 0;
		}
	}
}

@keyframes transform {
	0%,
	100% {
		border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
	}
	14% {
		border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
	}
	28% {
		border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
	}
	42% {
		border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
	}
	56% {
		border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
	}
	70% {
		border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
	}
	84% {
		border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
	}
}
@keyframes movement {
	0%,
	100% {
		transform: none;
	}
	50% {
		transform: translateY(5%) rotateY(10deg);
	}
}
@keyframes shade {
	0%,
	100% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
}
</style>
