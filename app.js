const overlays = {
  siding: document.getElementById('siding'),
  trim: document.getElementById('trim'),
  door: document.getElementById('door'),
  shutters: document.getElementById('shutters')
};

function setOverlayImage(id, url) {
  const el = overlays[id];
  if (!el) return;
  // Set the image once; we use it as both the visible layer and the mask
  el.style.setProperty('--overlay-image', `url(${url})`);
}

function setOverlayColor(id, color) {
  const el = overlays[id];
  if (!el) return;
  el.style.setProperty('--overlay-color', color);
}

// Hook up color inputs
document.getElementById('sidingColor').addEventListener('input', e => setOverlayColor('siding', e.target.value));
document.getElementById('trimColor').addEventListener('input', e => setOverlayColor('trim', e.target.value));
document.getElementById('doorColor').addEventListener('input', e => setOverlayColor('door', e.target.value));
document.getElementById('shuttersColor').addEventListener('input', e => setOverlayColor('shutters', e.target.value));

// Initialize defaults on load
['siding', 'trim', 'door', 'shutters'].forEach(id => {
  const colorInput = document.getElementById(id + 'Color');
  if (colorInput) setOverlayColor(id, colorInput.value);
});

// Optional: if you need to swap PNGs dynamically later, call setOverlayImage(id, newUrl)
