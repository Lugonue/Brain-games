install:
	npm ci

brain_games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
test:
	npx eslint .
push_commit:
	git add .
	git commit
	git push