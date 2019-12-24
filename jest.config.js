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
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: [
    "node_modules",
    mapFromRootDir('src')
  ],
  moduleNameMapper: {
    "\\.(scss)$": mapFromRootDir("src/helpers/test/mocks/scss_mock.js"),
    "\\.(svg|png|jpg)$": mapFromRootDir("src/helpers/test/mocks/file_mock.js"),
  }
};

function mapFromRootDir(path) {
  return '<rootDir>/' + path;
}