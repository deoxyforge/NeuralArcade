// Simple electron navigation for Neural Arcade
try {
  const { ipcRenderer } = require('electron');
  window.goHome = function() {
    console.log('goHome called');
    try {
      ipcRenderer.send('navigate-to', 'index.html');
      console.log('navigate-to sent for index.html');
    } catch(e) {
      console.error('IPC send failed:', e);
      window.location.href = 'index.html';
    }
  };
  window.navigateTo = function(file) {
    console.log('navigateTo called with:', file);
    try {
      ipcRenderer.send('navigate-to', file);
      console.log('navigate-to sent for:', file);
    } catch(e) {
      console.error('IPC send failed:', e);
      window.location.href = file;
    }
  };
  console.log('Navigation functions initialized with Electron IPC');
} catch(e) {
  console.log('Electron not available, using fallback');
  // Fallback for web version
  window.goHome = function() { 
    console.log('Using fallback goHome');
    window.location.href = 'index.html'; 
  };
  window.navigateTo = function(file) { 
    console.log('Using fallback navigateTo');
    window.location.href = file; 
  };
}
