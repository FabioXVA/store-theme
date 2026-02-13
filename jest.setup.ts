import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from "util";

(globalThis.fetch as jest.Mock) = jest.fn()

globalThis.TextEncoder = TextEncoder as any;
globalThis.TextDecoder = TextDecoder as any;
