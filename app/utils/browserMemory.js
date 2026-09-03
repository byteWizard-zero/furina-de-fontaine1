/**
 * Browser Memory Utility — Manages persistent localStorage for Furina's Court
 * Provides instant access across reloads and multi-turn courtroom sessions.
 */

const STORAGE_KEYS = {
  USERNAME: "furina_court_username",
  USER_TITLE: "furina_court_title",
  ENTERED: "furina_court_entered",
  SCREEN: "furina_court_screen",
  MESSAGES: "furina_court_messages",
  BALANCE: "furina_court_balance",
  ACTIVE_CASE: "furina_court_active_case",
  NOTES: "furina_court_notes",
};

export function isStorageAvailable() {
  if (typeof window === "undefined") return false;
  try {
    const test = "__storage_test__";
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads the saved visitor profile and courtroom session state.
 */
export function loadCourtMemory() {
  if (!isStorageAvailable()) {
    return {
      username: "",
      userTitle: "",
      entered: false,
      screen: "prologue",
      messages: [],
      balance: 0,
      activeCase: "normal",
    };
  }

  try {
    const username = localStorage.getItem(STORAGE_KEYS.USERNAME) || "";
    const userTitle = localStorage.getItem(STORAGE_KEYS.USER_TITLE) || "";
    const entered = localStorage.getItem(STORAGE_KEYS.ENTERED) === "true";
    const screen = localStorage.getItem(STORAGE_KEYS.SCREEN) || "prologue";
    const balance = parseFloat(localStorage.getItem(STORAGE_KEYS.BALANCE) || "0") || 0;
    const activeCase = localStorage.getItem(STORAGE_KEYS.ACTIVE_CASE) || "normal";

    let messages = [];
    const savedMessages = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (savedMessages) {
      try {
        messages = JSON.parse(savedMessages);
        if (!Array.isArray(messages)) messages = [];
      } catch {
        messages = [];
      }
    }

    return {
      username,
      userTitle,
      entered,
      screen: entered ? screen : "prologue",
      messages,
      balance,
      activeCase,
    };
  } catch (e) {
    console.warn("[Furina Memory] Failed to read from localStorage:", e);
    return {
      username: "",
      userTitle: "",
      entered: false,
      screen: "prologue",
      messages: [],
      balance: 0,
      activeCase: "normal",
    };
  }
}

/**
 * Persists updated messages to browser memory.
 */
export function saveMessagesMemory(messages) {
  if (!isStorageAvailable()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  } catch (e) {
    console.warn("[Furina Memory] Failed to save messages:", e);
  }
}

/**
 * Persists visitor profile credentials and entrance state.
 */
export function saveProfileMemory(username, userTitle, entered = true) {
  if (!isStorageAvailable()) return;
  try {
    if (username !== undefined) localStorage.setItem(STORAGE_KEYS.USERNAME, username);
    if (userTitle !== undefined) localStorage.setItem(STORAGE_KEYS.USER_TITLE, userTitle);
    localStorage.setItem(STORAGE_KEYS.ENTERED, entered ? "true" : "false");
  } catch (e) {
    console.warn("[Furina Memory] Failed to save profile:", e);
  }
}

/**
 * Persists active screen and balance.
 */
export function saveCourtStateMemory(screen, balance, activeCase) {
  if (!isStorageAvailable()) return;
  try {
    if (screen) localStorage.setItem(STORAGE_KEYS.SCREEN, screen);
    if (balance !== undefined) localStorage.setItem(STORAGE_KEYS.BALANCE, String(balance));
    if (activeCase) localStorage.setItem(STORAGE_KEYS.ACTIVE_CASE, activeCase);
  } catch (e) {
    console.warn("[Furina Memory] Failed to save court state:", e);
  }
}

/**
 * Clears all persistent courtroom trial memory.
 */
export function clearCourtMemory() {
  if (!isStorageAvailable()) return;
  try {
    localStorage.removeItem(STORAGE_KEYS.ENTERED);
    localStorage.removeItem(STORAGE_KEYS.SCREEN);
    localStorage.removeItem(STORAGE_KEYS.MESSAGES);
    localStorage.removeItem(STORAGE_KEYS.BALANCE);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_CASE);
    localStorage.removeItem(STORAGE_KEYS.NOTES);
    // Keep username and userTitle for convenience if they want to re-enter
  } catch (e) {
    console.warn("[Furina Memory] Failed to clear memory:", e);
  }
}
