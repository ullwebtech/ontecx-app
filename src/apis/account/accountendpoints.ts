export const accountEndpoints = {
	INDEX: `protected:/v1/account`,
	UPDATE: (id: string) => `protected:/v1/account/${id}?_method=PUT`
}
