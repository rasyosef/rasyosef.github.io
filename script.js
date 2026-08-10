document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.documentElement.classList.add('is-navigating');
    window.setTimeout(() => document.documentElement.classList.remove('is-navigating'), 500);
  });
});
