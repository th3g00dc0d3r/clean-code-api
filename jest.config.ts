export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
