document.addEventListener('DOMContentLoaded', () => {

  // ── HERO SLIDER ──
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  const TOTAL_SLIDES = slides.length;
  let currentSlide = 0;
  let autoTimer;

  function goSlide(n) {
    currentSlide = (n + TOTAL_SLIDES) % TOTAL_SLIDES;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goSlide(currentSlide + 1), 4500);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goSlide(parseInt(dot.dataset.slide));
      startAuto();
    });
  });

  startAuto();

  // ── QUANTITY CONTROLS ──
  document.querySelectorAll('.qty-control').forEach(control => {
    const minusBtn = control.querySelector('.qty-minus');
    const plusBtn  = control.querySelector('.qty-plus');
    const display  = control.querySelector('.qty-value');

    // Store qty on the element itself
    control.dataset.qty = '1';
    display.textContent = '1';
    minusBtn.disabled = true;

    plusBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      let qty = parseInt(control.dataset.qty) + 1;
      control.dataset.qty = qty;
      display.textContent = qty;
      minusBtn.disabled = false;
    });

    minusBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      let qty = parseInt(control.dataset.qty);
      if (qty > 1) {
        qty--;
        control.dataset.qty = qty;
        display.textContent = qty;
        if (qty === 1) minusBtn.disabled = true;
      }
    });
  });

  // ── ADD TO CART TOGGLE ──
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      this.classList.toggle('added');
      this.textContent = this.classList.contains('added') ? '✓ Added!' : 'Add to Cart';
    });
  });

  // ── WISHLIST TOGGLE ──
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      this.classList.toggle('active');
      this.textContent = this.classList.contains('active') ? '♥' : '♡';
    });
  });

  // ── PRODUCT CARD NAVIGATION ──
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('button') || e.target.closest('.qty-control')) return;
      const id = this.dataset.id || 'pr1';
      window.location = 'product.html?id=' + id;
    });
  });

  // ── CATEGORY CARD NAV ──
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const name = this.querySelector('.category-name').textContent;
      console.log('Navigate to:', name);
    });
  });

  // ── SUB NAV ACTIVE STATE ──
  document.querySelectorAll('.sub-nav-inner span:not(.free-ship)').forEach(span => {
    span.addEventListener('click', function() {
      document.querySelectorAll('.sub-nav-inner span').forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });

}); // end DOMContentLoaded
