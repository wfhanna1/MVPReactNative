module.exports = {
	extends: "airbnb",
	parser: "babel-eslint",
	env: {
		browser: true,
		es6: true,
		jest: true
	},
	rules: {
		"no-use-before-define": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-indent": "off",
		"react/jsx-indent-props": "off",
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
		"max-len": "off",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-tabs": "off",
		"indent": ["error", "tab"],
		"no-nested-ternary": "off"
	},
	globals: {
		fetch: false
	}
}