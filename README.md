# React Typescript starter kit slim
This project serves as a template for react applications using typescript. It provides basic folder structure for building react applications.

- webpack is used for bundling (dev and prod builds supported)
- jest is used for testing and code coverage
- tslint is used for linting
- CI with github actions
- CSS in JS with styled-components or .scss for styling
- side effects can be done any way, no opinions here

Project contains basic folder structure for building react applications. Check https://github.com/mmarinovic/react-typescript-starter for a bit more detailed starter.

# Quick start
```shell
git clone https://github.com/mmarinovic/react-typescript-starter.git
cd react-typescript-starter
yarn install
yarn watch:dev
```
Open http://localhost:8080 in your browser and start coding!
# Commands

Install dependencies:
```Shell
yarn install
```

Start a local development server with hot reload.
```Shell
yarn watch:dev
```

## Build
Build development
```Shell
yarn build:dev
```

Build production
```Shell
yarn build:prod
```

## Tests

Run tests with watch
```Shell
yarn test:watch
```

Runs tests without watch
```Shell
yarn test
```

## Lint
Runs tslint
```Shell
yarn lint
```

## Type check
Runs type checker. You can add this to husky pre-commit hook as well.
```Shell
yarn typecheck
```
