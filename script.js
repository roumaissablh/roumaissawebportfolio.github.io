
const boxes = document.querySelectorAll('.project');

boxes.forEach(box => {
  const text = box.querySelector('.text');
  box.addEventListener('mouseover', () => showText(text));
  box.addEventListener('mouseout', () => hideText(text));
});

function showText(text) {
  text.style.display = 'block';
}

function hideText(text) {
  text.style.display = 'none';
}