# Lepton

## Setup

1. Clone.
2. Run `npm install`

## Some commands

To create link from `node_modules\@railgun-community\lepton-packagename` to `.\packages\packagename`:

```bash
npm install   #:)
```

### Run a script

```bash
# In the current workspace
npm run eslint

# Across all workspaces
npm run eslint -ws

# For a specific workspace
# Use the syntax you prefer
npm run command -w ./packages/packagename
npm run command -w @railgun-community/lepton-packagename
```

### Add external npm package to local package

```bash
# change directory to monorepo root
cd .

# Use the syntax you prefer
npm install dep -w ./packages/packagename
npm install dep -w @railgun/lepton-packagename

```

### Add reference between two local packages

Open `package.json` and add this under `devDependencies` or `dependencies`.

```json
    "@railgun-community/lepton-packagename": "*",
```
