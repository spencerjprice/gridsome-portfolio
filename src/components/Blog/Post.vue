<template>
	<div class="post">
		<g-image :src="post.image" width="500" height="500" fit="contain" />
		{{ post.title }}
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped></style>
