module.exports = function (api) {
	api.cache(true)
	return {
		presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
					alias: {
						tests: ["./tests/"],
						"@components/*": "src/components/*",
						"@constants/*": "src/constants/*",
						"@configs/*": "src/configs/*",
						"@libs/*": "src/libs/*",
						"@hooks/*": "src/hooks/*",
						"@services/*": "src/services/*",
						"@app/*": "src/app/*",
						"@types/*": "src/types/*"
					}
				}
			],
			"react-native-reanimated/plugin"
		]
	}
}
