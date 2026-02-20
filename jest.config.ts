import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/default-esm',

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.jest.json', useESM: true },
    ],
  },

  transformIgnorePatterns: [
    'node_modules/(?!(swiper|ssr-window|dom7)/)',
  ],

  moduleNameMapper: {
    '^swiper/react$': '<rootDir>/__mocks__/swiper/react.tsx',
    '^swiper/css$': 'identity-obj-proxy',
    '^swiper/css/(.*)$': 'identity-obj-proxy',
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default config
