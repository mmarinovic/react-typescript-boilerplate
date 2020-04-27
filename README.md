# React typescript boilerplate
This project serves as a template for react applications using typescript. It provides basic folder structure for building react applications.

- webpack is used for bundling (dev and prod builds supported)
- jest is used for testing and code coverage
- tslint is used for linting
- CI with github actions

# Quick start
```shell
$ git clone https://github.com/mmarinovic/react-typescript-boilerplate.git
$ cd react-typescript-boilerplate
$ yarn install
$ yarn watch:dev
```
Open http://localhost:8080 in your browser and start coding!
# Commands

Install dependencies:
```Shell
$ yarn install
```

Start a local development server with hot reload.
```Shell
$ yarn watch:dev
```

## Build
Build development
```Shell
$ yarn build:dev
```

Build production
```Shell
$ yarn build:prod
```

## Tests

Run tests with watch
```Shell
$ yarn test:watch
```

Runs tests without watch
```Shell
$ yarn test
```

## Lint
Runs tslint
```Shell
yarn lint
```

## Type check
Runs type checker. You can add this to husky pre-commit hook as well.
```Shell
$ yarn typecheck
```

## Bundle analyze
Runs webpack bundle analyer.
```Shell
$ yarn bundle:analyze
```
