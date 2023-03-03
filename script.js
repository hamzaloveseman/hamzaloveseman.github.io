document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('btn');
  button.addEventListener('mouseover', function () {
      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
  });
});
