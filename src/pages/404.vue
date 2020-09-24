<template>
	<Layout>
		<div class="missing">
			<h1 class="missing__title">404</h1>
			<h2 class="missing__subtitle">Page Not Found</h2>
			<iframe src="https://giphy.com/embed/VbAFrrDVGAvZu" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: '404'
	}
};
</script>

<style lang="scss" scoped>
.missing {
	padding: 0px 0 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	&__title {
		font-size: 8rem;
	}
	&__subtitle {
		font-size: 3rem;
		margin-bottom: 40px;
	}
}
</style>
