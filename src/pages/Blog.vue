<template>
	<Layout>
		<div class="blog">
			<!-- Loop through all of the posts -->

			<Post v-for="post in $page.allPost.edges" :key="post.node.id" :post="post.node" />
		</div>
	</Layout>
</template>

<page-query>
query {
	allPost {
		totalCount
		edges {
			node {
				id
				title
				image
				date (format: "D MMMM YYYY")
				path
				excerpt
			}
		}
	}
}
</page-query>

<script>
import Post from '~/components/Blog/Post';

export default {
	metaInfo: {
		title: 'Blog'
	},
	components: {
		Post
	}
};
</script>

<style lang="scss" scoped>
.blog {
	padding: 60px 0 80px;
}
</style>
