interface ConfigsProps {
	env: "test" | "local" | "live"
	apiKey?: string
	converterKey?: string
	getBaseUrl: () => string
}

export const apiConfigs: ConfigsProps = {
	env: "live", // 'test' |   'live'
	apiKey: "admin@ontecx.com:tpmZ kqCK 8IuY wMjP Mcss 9PhK",
	converterKey: "MDmyEIGgU6uh5Jod",
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
