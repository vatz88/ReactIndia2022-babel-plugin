# Babel plugin

## Setup

Any latest node and npm version should work, but at the time of writing this code, I was using node version `18.7.0` with npm version `8.15.0`.

To install dependencies, run

```sh
npm install
```

## Commits

- Initial setup

```sh
git checkout 99f2344e2d2323c6a48d15ed1b0411f32c45d2e8
```

- no-console-statement babel plugin

```sh
git checkout 99f2344e2d2323c6a48d15ed1b0411f32c45d2e8
```

## Command

CLI

```sh
npx babel tests/sample.js --plugins=./src/no-console-statements.js
```

## Resources

1. https://prettier.io/docs/en/plugins.html#developing-plugins

1. https://github.com/prettier/prettier/blob/main/commands.md
