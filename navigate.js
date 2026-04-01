// Electron-aware navigation helper
let ipcRenderer = null;
const isElectron = () => {
  return (typeof window !== 'undefined' && 
          typeof window.process === 'object' && 
          window.process.type === 'renderer');
};

console.log('navigate.js: Loading... isElectron:', isElectron());

// Try to get ipcRenderer when script loads
try {
  if (isElectron() && typeof require === 'function') {
    const electron = require('electron');
    ipcRenderer = electron.ipcRenderer;
    console.log('navigate.js: Successfully loaded ipcRenderer');
  } else {
    console.log('navigate.js: Not in Electron or require unavailable');
  }
} catch (e) {
  console.log('navigate.js: Error loading Electron:', e.message);
}

async function navigateTo(filename) {
  console.log('[navigate] Called with:', filename);
  console.log('[navigate] isElectron:', isElectron());
  console.log('[navigate] ipcRenderer available:', !!ipcRenderer);
  
  if (ipcRenderer) {
    // Use IPC for Electron
    try {
      console.log('[navigate] Sending navigate-to via IPC');
      const result = await ipcRenderer.invoke('navigate-to', filename);
      console.log('[navigate] IPC result:', result);
    } catch (e) {
      console.log('[navigate] IPC failed:', e.message);
      // Fallback
      window.location.href = filename;
    }
  } else {
    // Fallback for web or if IPC failed
    console.log('[navigate] Using window.location.href fallback');
    window.location.href = filename;
  }
}

function goHome() {
  console.log('[goHome] Called');
  navigateTo('index.html');
}
