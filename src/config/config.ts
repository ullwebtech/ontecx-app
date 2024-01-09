interface ConfigsProps {
	env: "test" | "local" | "live"
	apiKey?: string
	getBaseUrl: () => string
}

export const apiConfigs: ConfigsProps = {
	env: "live", // 'test' |   'live'
	apiKey: "admin@ontecx.com:tpmZ kqCK 8IuY wMjP Mcss 9PhK",
	getBaseUrl: () => {
		switch (apiConfigs.env) {
			case "test":
				return "https://ontecx.com"
			case "live":
				return "https://ontecx.com"
			default:
				return "https://ontecx.com"
		}
	}
}
