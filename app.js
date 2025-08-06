const overlays = {
  siding: document.getElementById('siding'),
  trim: document.getElementById('trim'),
  door: document.getElementById('door'),
  shutters: document.getElementById('shutters')
};

function setOverlayColor(id, color) {
  overlays[id].style.backgroundColor = color;
}

document.getElementById('sidingColor').addEventListener('input', e => setOverlayColor('siding', e.target.value));
document.getElementById('trimColor').addEventListener('input', e => setOverlayColor('trim', e.target.value));
document.getElementById('doorColor').addEventListener('input', e => setOverlayColor('door', e.target.value));
document.getElementById('shuttersColor').addEventListener('input', e => setOverlayColor('shutters', e.target.value));

// Initialize default colors on page load
['siding', 'trim', 'door', 'shutters'].forEach(id => {
  const colorInput = document.getElementById(id + 'Color');
  setOverlayColor(id, colorInput.value);
});
