module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/test/(.*)': '<rootDir>/test/$1',
    'test/(.*)': '<rootDir>/test/$1',
    '@/src/(.*)': '<rootDir>/src/$1',
    'src/(.*)': '<rootDir>/src/$1'
  }
}
