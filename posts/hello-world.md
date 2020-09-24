---
title: An awesome
date: 2020-06-02
image: https://images.unsplash.com/photo-1531192603123-cd3ad941ee11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80
---

## An awesome article

This is some **awesome** content for a crazy sample blog

```js{numberLines: true}
/**
 * Fetches all categories from the database
 * @returns [Array] formatted Array with categories data
 */
async function getAllCategories() {
	const categories = await CategoryTable.findAll();

	// Extract the real role values and format the return
	const formatted = [];
	for (const category of categories) {
		formatted.push({
			...category.dataValues
		});
	}

	return formatted;
}
```
