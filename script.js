import('/module.js').then(module => {
  // Use functions/exports from the module
  module.init?.();
}).catch(err => console.error('Failed to load module script', err));

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.header-section__toggle');
  const navLinks = document.querySelector('.header-section__links');
  toggleBtn?.addEventListener('click', () => navLinks?.classList.toggle('active'));

  (async () => {
    try {
      const headHTML = document.head.innerHTML;
      if (headHTML.includes('<!-- inject-universal-head -->')) {
        const headres = await fetch('/head.html?cachebust=' + Date.now());
        if (!headres.ok) throw new Error('Failed to load head.html');
        const headContent = await headres.text();
        document.head.innerHTML += headContent;
      } else {
        console.log('No universal head marker found.');
      }
    } catch (err) {
      console.error('Head loading error:', err);
    }
  })();
});