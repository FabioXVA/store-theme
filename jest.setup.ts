import '@testing-library/jest-dom'

(globalThis.fetch as jest.Mock) = jest.fn()