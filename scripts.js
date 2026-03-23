document.addEventListener('DOMContentLoaded', () => {


  // ── HERO SLIDER ──
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dots .dot');
  const TOTAL  = slides.length;
  let current  = 0;
  let autoTimer;

  function goSlide(n) {
    current = (n + TOTAL) % TOTAL;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i)   => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goSlide(current + 1), 4500);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goSlide(parseInt(dot.dataset.slide));
      startAuto();
    });
  });

  if (slides.length > 0) startAuto();

  // ── PRODUCT CARDS ──
  document.querySelectorAll('.product-card').forEach(card => {
    const minusBtn   = card.querySelector('.qty-minus');
    const plusBtn    = card.querySelector('.qty-plus');
    const qtyDisplay = card.querySelector('.qty-value');
    const addBtn     = card.querySelector('.add-to-cart');
    const wishBtn    = card.querySelector('.wishlist-btn');
    let quantity = 1;

    function updateQty() {
      if (qtyDisplay) qtyDisplay.textContent = quantity;
      if (minusBtn)   minusBtn.disabled = quantity <= 1;
    }

    minusBtn?.addEventListener('click', e => {
      e.stopPropagation();
      if (quantity > 1) { quantity--; updateQty(); }
    });

    plusBtn?.addEventListener('click', e => {
      e.stopPropagation();
      quantity++;
      updateQty();
    });

    addBtn?.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      const id = card.dataset.id;
      if (id) {
        const cart = JSON.parse(localStorage.getItem('aurevia_cart') || '[]');
        const existing = cart.find(item => item.id === id);
        if (existing) { existing.qty += quantity; }
        else { cart.push({ id, qty: quantity }); }
        localStorage.setItem('aurevia_cart', JSON.stringify(cart));
      }
      addBtn.classList.toggle('added');
      addBtn.textContent = addBtn.classList.contains('added') ? '✓ Added!' : 'Add to Cart';
    });

    wishBtn?.addEventListener('click', e => {
      e.stopPropagation();
      wishBtn.classList.toggle('active');
      wishBtn.textContent = wishBtn.classList.contains('active') ? '♥' : '♡';
    });

    card.addEventListener('click', e => {
      if (e.target.closest('.qty-control') || e.target.closest('button')) return;
      const id = card.dataset.id;
      if (id) window.location.href = `product.html?id=${id}`;
    });

    updateQty();
  });

  // ── CATEGORY CARDS → catalog page ──
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', e => {
      if (!card.getAttribute('href')) {
        e.preventDefault();
        window.location.href = 'product-catalog.html';
      }
    });
  });

  // ── SUB NAV ACTIVE STATE ──
  document.querySelectorAll('.sub-nav-inner span:not(.free-ship)').forEach(span => {
    span.addEventListener('click', function () {
      document.querySelectorAll('.sub-nav-inner span').forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });

}); // end DOMContentLoaded
