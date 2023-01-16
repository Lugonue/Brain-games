install:
	npm ci
brain_games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint --no-eslintrc --config .eslintrc.yml .
lint-fix:
	npx eslint --no-eslintrc --config .eslintrc.yml --fix .