module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/test/(.*)': '<rootDir>/test/$1',
    'test/(.*)': '<rootDir>/test/$1',
    '@/src/(.*)': '<rootDir>/src/$1',
    'src/(.*)': '<rootDir>/src/$1'
  }
}
