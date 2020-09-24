<template>
	<header class="nav" :class="{ 'nav--active': showMenu }">
		<div class="nav__container">
			<!-- The logo in the nav -->
			<g-link class="nav__logo" to="/">
				<MainLogo />
			</g-link>

			<!-- This is the hamburger that only shows up on mobile -->
			<div class="hamburger" @click="toggleMenu">
				<div class="hamburger__line" />
				<div class="hamburger__line" />
				<div class="hamburger__line" />
			</div>

			<!-- Here are the actual nav links -->
			<nav class="nav__links">
				<g-link class="nav__link" to="/about/">About</g-link>
				<!-- <g-link class="nav__link" to="/blog/">Blog</g-link> -->
				<g-link class="nav__link" to="/work/">Work</g-link>
			</nav>
		</div>
	</header>
</template>

<script>
import MainLogo from '~/components/svgs/MainLogo.vue';

export default {
	data() {
		return {
			showMenu: false
		};
	},
	components: {
		MainLogo
	},
	methods: {
		toggleMenu() {
			this.showMenu = !this.showMenu;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/link.scss';

.nav {
	&__container {
		// @include container;
		height: 120px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__logo {
		z-index: 1000;
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

	.hamburger {
		position: relative;
		z-index: 2000;
		width: 20px;
		height: 16px;
		cursor: pointer;

		@include media-breakpoint-up(lg) {
			display: none;
		}
		&__line {
			height: 3px;
			background: $text;
			position: absolute;
			right: 0;
			transition: all ease 200ms;
			&:nth-child(1) {
				transform-origin: top right;
				width: 20px;
			}
			&:nth-child(2) {
				width: 15px;
				top: 50%;
				transform: translateY(-50%);
			}
			&:nth-child(3) {
				transform-origin: bottom right;
				width: 10px;
				bottom: 0;
			}
		}
		&:hover {
			.hamburger__line {
				width: 100%;
			}
		}
	}

	&__links {
		display: none;
		@include media-breakpoint-up(lg) {
			display: block;
		}
	}
	&__link {
		@include link;
		font-size: 1.2rem;
		margin-left: 20px;
		padding: 0 10px;
		color: $text;
	}

	&--active {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		padding: 0 20px;

		background: linear-gradient(270deg, $accent1, $accent2);
		background-size: 200% 200%;
		animation: shade 15s linear infinite both;

		.nav {
			&__logo {
				opacity: 0;
			}
			&__links {
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			&__link {
				font-size: 1.5rem;
				font-weight: 600;
				margin: 0 0 30px;
				color: white;
				&:before {
					display: none;
				}
			}
		}

		.hamburger {
			&__line {
				background: white;
				width: 100% !important;
				&:nth-child(1) {
					transform: rotate(-45deg);
				}
				&:nth-child(2) {
					transform: translateX(100%);
					opacity: 0;
				}
				&:nth-child(3) {
					transform: rotate(45deg);
				}
			}
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
