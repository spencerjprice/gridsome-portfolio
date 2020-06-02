<template>
	<Layout>
		<CommingSoon />

		<!-- {{ $page.allPost.edges }} -->
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
				path
				excerpt
			}
		}
	}
}
</page-query>

<script>
import CommingSoon from '~/components/shared/CommingSoon.vue';
export default {
	metaInfo: {
		title: 'Blog'
	},
	components: {
		CommingSoon
	}
};
</script>
