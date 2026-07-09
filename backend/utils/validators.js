function isValidMessage(threadId, message) {
    if (!threadId || !message) {
        return false;
    }
    if (typeof threadId !== "string" || typeof message !== "string") {
        return false;
    }
    if (message.trim().length === 0) {
        return false;
    }
    return true;
}

export { isValidMessage };