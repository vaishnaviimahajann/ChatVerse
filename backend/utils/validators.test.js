import { isValidMessage } from "./validators.js";

test("valid threadId and message should return true", () => {
    expect(isValidMessage("thread123", "Hello there")).toBe(true);
});

test("missing threadId should return false", () => {
    expect(isValidMessage(undefined, "Hello there")).toBe(false);
});

test("missing message should return false", () => {
    expect(isValidMessage("thread123", undefined)).toBe(false);
});

test("empty message string should return false", () => {
    expect(isValidMessage("thread123", "")).toBe(false);
});

test("message with only spaces should return false", () => {
    expect(isValidMessage("thread123", "   ")).toBe(false);
});

test("non-string threadId should return false", () => {
    expect(isValidMessage(12345, "Hello there")).toBe(false);
});