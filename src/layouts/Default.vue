<template>
	<div class="layout">
		<div class="container">
			<Nav />
			<!-- Slot in the actual page content -->
			<slot />
		</div>
	</div>
</template>

<script>
import Nav from '~/components/Nav';

export default {
	components: {
		Nav
	}
};
</script>

<style lang="scss">
body {
	font-family: 'Work Sans', sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $secondary;
	a {
		text-decoration: none;
		color: inherit;
	}
}

.container {
	@include container;
}
</style>
