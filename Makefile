lint:
	npx eslint .

build:
	rm -rf dist
	npm run build

publish: 
	npm publish --dry-run

start:
	npx babel-node src/bin/gendiff -h

test:
	npm test