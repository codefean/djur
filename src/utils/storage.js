// Mock storage API that mimics the window.storage API from Claude Artifacts
// In production, you might want to use a real backend or localStorage directly

class MockStorage {
  async get(key) {
    const value = localStorage.getItem(key);
    if (value === null) {
      throw new Error(`Key not found: ${key}`);
    }
    return {
      key,
      value,
      shared: false
    };
  }

  async set(key, value) {
    localStorage.setItem(key, value);
    return {
      key,
      value,
      shared: false
    };
  }

  async delete(key) {
    localStorage.removeItem(key);
    return {
      key,
      deleted: true,
      shared: false
    };
  }

  async list(prefix = '') {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(prefix)) {
        keys.push(key);
      }
    }
    return {
      keys,
      prefix,
      shared: false
    };
  }
}

// Create a global storage instance
if (typeof window !== 'undefined' && !window.storage) {
  window.storage = new MockStorage();
}

export const storage = typeof window !== 'undefined' ? window.storage : new MockStorage();
