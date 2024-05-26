module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{svg,jpg,eot,js,txt,webmanifest,json,png,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
