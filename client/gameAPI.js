/**
 * DUMMY Game API Handler
 *
 * This is a temporary file to prevent the game from crashing on GitHub Pages.
 * It creates a fake 'gameAPI' object with empty functions so that the
 * rest of the game code doesn't fail when it tries to call them.
 *
 * The original file has been disabled because it requires a server,
 * which doesn't exist on the static GitHub Pages site.
 */

class GameAPI_Dummy {
  constructor() {
    console.log("Dummy GameAPI loaded. Server communication is disabled for static site.");
  }

  // This function must exist, but we make it do nothing.
  // It returns a promise that resolves to null, which is safe.
  async init() {
    return null;
  }

  // All other functions are empty and do nothing.
  async getGameState() { return null; }
  async getAvailableZones() { return null; }
  async teleportToZone(zoneId) { return null; }
  async movePlayer(deltaQ, deltaR) { return null; }
  async getCurrentZone() { return null; }
}

// Create the global instance so the rest of the game doesn't crash
window.gameAPI = new GameAPI_Dummy();