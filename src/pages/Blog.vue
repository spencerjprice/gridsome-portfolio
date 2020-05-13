<template>
	<Layout>
		{{ $page.allPost.edges }}
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
