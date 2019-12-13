module.exports = {
	extends: "airbnb",
	parser: "babel-eslint",
	env: {
		jest: true,
	},
	rules: {
		"no-use-before-define": "off",
		"react/jsx-filename-extension": "off",
		"react/prop-types": "off",
		"comma-dangle": ["error", "never"],
		strict: ["error", "global"],
		quotes: ["error", "double"],
		"space-before-function-paren": ["error", "always"],
		"object-curly-newline": ["error", {
			"ObjectExpression": "always",
			"ObjectPattern": { "multiline": true },
			"ImportDeclaration": "never"
		}],
		"max-len": "off"
	},
	globals: {
	fetch: false
	},
	env: {
		es6: true
	}
}