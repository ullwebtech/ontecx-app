interface ConfigsProps {
	env: "test" | "local" | "live"
	apiKey?: string
	getBaseUrl: () => string
}

export const apiConfigs: ConfigsProps = {
	env: "live", // 'test' |   'live'
	apiKey: "6a20ba4b3ae54c5e9ac269efaba4d8d2",
	getBaseUrl: () => {
		switch (apiConfigs.env) {
			case "test":
				return "https://api.worldnewsapi.com"
			case "live":
				return "https://api.worldnewsapi.com"
			default:
				return "https://api.worldnewsapi.com"
		}
	}
}
