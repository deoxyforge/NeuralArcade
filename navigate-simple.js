// Simple electron navigation
try {
  const { ipcRenderer } = require('electron');
  window.goHome = () => ipcRenderer.invoke('navigate-to', 'index.html');
  window.navigateTo = (file) => ipcRenderer.invoke('navigate-to', file);
} catch(e) {
  window.goHome = () => window.location.href = 'index.html';
  window.navigateTo = (file) => window.location.href = file;
}
