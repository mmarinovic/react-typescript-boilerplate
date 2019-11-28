module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: [
    "node_modules",
    mapFromRootDir('src')
  ],
  moduleNameMapper: {
    "\\.(scss)$": mapFromRootDir("src/helpers/test/mocks/scss_mock.js"),
    "\\.(svg)$": mapFromRootDir("src/helpers/test/mocks/svg_mock.js"),
  }
};

const mapFromRootDir = (path) => '<rootDir>/' + path;