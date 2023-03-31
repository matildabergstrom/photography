const spans = document.querySelectorAll('.title span');

spans.forEach((span, index) => {
  setTimeout(() => {
    span.style.animation = '';
    span.offsetHeight; // trigger reflow
    span.style.animation = 'reveal 1s cubic-bezier(0.42, 0, 0.58, 1) forwards';
  }, 1000 + 200 * index);
});