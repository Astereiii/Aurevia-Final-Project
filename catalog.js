document.addEventListener('DOMContentLoaded', () => {

  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  document.querySelectorAll('[data-nav="orders"]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'order-history.html';
    });
  });

  document.querySelectorAll('.coming-product-image img, .coming-copy-image img, .ingredients-image img, .catalog-feature-image img').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      window.location.href = 'product.html?id=pr1';
    });
  });
});