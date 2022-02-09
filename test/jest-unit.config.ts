import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

import BaseConfig from './jest.config';

const UnitConfig: InitialOptionsTsJest = {
  ...BaseConfig,
  testRegex: '.spec.ts$',
};

export default UnitConfig;
