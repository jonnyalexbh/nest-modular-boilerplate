import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const BaseConfig: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.(spec|e2e).ts$',
  rootDir: '../',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
  },
  verbose: true,
};

export default BaseConfig;
