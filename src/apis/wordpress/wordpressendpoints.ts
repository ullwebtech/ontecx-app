export const wordpressEndpoints = {
	post: {
		all: (page: string | number = "1", perPage: string | number = "500") => `protected:/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}`,
		single: (postId?: string | number) => `protected:/wp-json/wp/v2/posts/${postId}`
	},
	categories: {
		all: (page: string | number = "1", perPage: string | number = "500") => `protected:/wp/v2/categories?per_page=${perPage}&page=${page}`,
		single: (cateId?: string | number) => `protected:/wp/v2/categories/${cateId}`
	}
}
