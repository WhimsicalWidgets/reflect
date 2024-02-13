
emulator:
	pnpm dev

lint:
	pnpm lint

format:
	@echo "Formatting all files..."
	@prettier --write "**/*.{Makefile,js,jsx,ts,tsx,json,css,md,yaml,json}"
	@eslint --fix app *js *.ts

checkFormat:
	@echo "Checking format..."
	@prettier --check "**/*.{Makefile,js,jsx,ts,tsx,json,css,md,yaml,json}"
	@eslint app

turbo:
	pnpm turbo build

gitHooks:
	cp tools/git/hooks/* .git/hooks/

preCommit: lint checkFormat
