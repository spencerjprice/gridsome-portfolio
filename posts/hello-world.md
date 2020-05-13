---
title: An awesome
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
