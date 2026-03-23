document.addEventListener('DOMContentLoaded', () => {
  const get = id => document.getElementById(id);
  const tabs          = document.querySelectorAll('.tab-btn');
  const orderCards    = document.querySelectorAll('.order-card');
  const orderSearch   = get('orderSearch');
  const wishlistCards = document.querySelectorAll('.wishlist-card');
  const cartBadge     = get('cartBadge');

  const orderModal         = get('orderModal');
  const orderModalBackdrop = get('orderModalBackdrop');
  const orderModalClose    = get('orderModalClose');
  const modalOrderId       = get('modalOrderId');
  const modalProductImg    = get('modalProductImg');
  const modalProductName   = get('modalProductName');
  const modalPlacedDate    = get('modalPlacedDate');
  const modalStatus        = get('modalStatus');
  const modalPlacedPrice   = get('modalPlacedPrice');
  const modalTotalPrice    = get('modalTotalPrice');

  const trackModal         = get('trackModal');
  const trackModalBackdrop = get('trackModalBackdrop');
  const trackModalClose    = get('trackModalClose');
  const trackOrderId       = get('trackOrderId');

  const buyAgainModal    = get('buyAgainModal');
  const buyAgainBackdrop = get('buyAgainBackdrop');
  const buyAgainClose    = get('buyAgainClose');
  const buyAgainCancel   = get('buyAgainCancel');
  const buyAgainConfirm  = get('buyAgainConfirm');
  const buyAgainOrderId  = get('buyAgainOrderId');

  let currentFilter = 'all';
  let cartCount = parseInt(localStorage.getItem('aurevia_cart_count') || '0', 10);
  let pendingBuyAgainCard = null;

  function saveCartCount() { localStorage.setItem('aurevia_cart_count', String(cartCount)); }
  function updateCartBadge() { if (cartBadge) cartBadge.textContent = cartCount; }

  function applyOrderFilters() {
    if (!orderSearch) return;
    const query = orderSearch.value.trim().toLowerCase();
    orderCards.forEach(card => {
      const matchesFilter = currentFilter === 'all' || (card.dataset.status || '') === currentFilter;
      const matchesSearch = !query || (card.dataset.search || '').toLowerCase().includes(query);
      card.classList.toggle('hidden-order', !(matchesFilter && matchesSearch));
    });
  }

  function openOrderModal(card) {
    if (!orderModal) return;
    if (modalOrderId)     modalOrderId.textContent     = card.dataset.orderId || '';
    if (modalProductImg)  modalProductImg.src          = card.dataset.productImage || '';
    if (modalProductName) modalProductName.textContent = card.dataset.productName || '';
    if (modalPlacedDate)  modalPlacedDate.textContent  = card.dataset.placedDate || '';
    if (modalStatus)      modalStatus.textContent      = `Status: ${card.dataset.orderStatus || ''}`;
    if (modalPlacedPrice) modalPlacedPrice.textContent = `Placed: ${card.dataset.placedPrice || ''}`;
    if (modalTotalPrice)  modalTotalPrice.textContent  = `Total: ${card.dataset.totalPrice || ''}`;
    orderModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function openTrackModal(card) {
    if (!trackModal) return;
    if (trackOrderId) trackOrderId.textContent = card.dataset.orderId || '';
    trackModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function openBuyAgainModal(card) {
    if (!buyAgainModal) return;
    pendingBuyAgainCard = card;
    if (buyAgainOrderId) buyAgainOrderId.textContent = card.dataset.orderId || '';
    buyAgainModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.add('hidden');
    const allClosed = [orderModal, trackModal, buyAgainModal].every(m => !m || m.classList.contains('hidden'));
    if (allClosed) document.body.style.overflow = '';
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      applyOrderFilters();
    });
  });

  if (orderSearch) orderSearch.addEventListener('input', applyOrderFilters);

  document.querySelectorAll('.action-view').forEach(btn => {
    btn.addEventListener('click', () => openOrderModal(btn.closest('.order-card')));
  });
  document.querySelectorAll('.action-track').forEach(btn => {
    btn.addEventListener('click', () => openTrackModal(btn.closest('.order-card')));
  });
  document.querySelectorAll('.action-buy-again').forEach(btn => {
    btn.addEventListener('click', () => openBuyAgainModal(btn.closest('.order-card')));
  });

  if (buyAgainConfirm) {
    buyAgainConfirm.addEventListener('click', () => {
      cartCount++;
      updateCartBadge();
      saveCartCount();
      if (pendingBuyAgainCard) {
        const btn = pendingBuyAgainCard.querySelector('.action-buy-again');
        if (btn) {
          const old = btn.textContent;
          btn.textContent = 'Added'; btn.disabled = true;
          setTimeout(() => { btn.textContent = old; btn.disabled = false; }, 1000);
        }
      }
      closeModal(buyAgainModal);
      pendingBuyAgainCard = null;
    });
  }

  if (buyAgainCancel) buyAgainCancel.addEventListener('click', () => { closeModal(buyAgainModal); pendingBuyAgainCard = null; });

  document.querySelectorAll('.order-card .order-product-image img, .order-card .order-product-info h3').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', e => {
      const id = e.target.closest('.order-card')?.dataset.productId;
      if (id) window.location.href = `product.html?id=${id}`;
    });
  });

  wishlistCards.forEach(card => {
    const addBtn    = card.querySelector('.add-cart');
    const removeBtn = card.querySelector('.remove-btn');
    const heartBtn  = card.querySelector('.wishlist-heart');
    const productId = card.dataset.productId;

    if (heartBtn) {
      heartBtn.classList.add('active');
      heartBtn.textContent = '♥';
      heartBtn.addEventListener('click', () => {
        heartBtn.classList.toggle('active');
        heartBtn.textContent = heartBtn.classList.contains('active') ? '♥' : '♡';
      });
    }

    card.querySelector('.wishlist-image-wrap img')?.addEventListener('click', () => { if (productId) window.location.href = `product.html?id=${productId}`; });
    card.querySelector('.wishlist-info h3')?.addEventListener('click', () => { if (productId) window.location.href = `product.html?id=${productId}`; });

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        cartCount++; updateCartBadge(); saveCartCount();
        const old = addBtn.textContent;
        addBtn.textContent = 'Added'; addBtn.disabled = true;
        setTimeout(() => { addBtn.textContent = old; addBtn.disabled = false; }, 900);
      });
    }
    if (removeBtn) removeBtn.addEventListener('click', () => card.classList.add('hidden-wishlist'));
  });

  if (orderModalBackdrop) orderModalBackdrop.addEventListener('click', () => closeModal(orderModal));
  if (orderModalClose)    orderModalClose.addEventListener('click',    () => closeModal(orderModal));
  if (trackModalBackdrop) trackModalBackdrop.addEventListener('click', () => closeModal(trackModal));
  if (trackModalClose)    trackModalClose.addEventListener('click',    () => closeModal(trackModal));
  if (buyAgainBackdrop)   buyAgainBackdrop.addEventListener('click',   () => closeModal(buyAgainModal));
  if (buyAgainClose)      buyAgainClose.addEventListener('click',      () => closeModal(buyAgainModal));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal(orderModal); closeModal(trackModal); closeModal(buyAgainModal);
      pendingBuyAgainCard = null;
    }
  });

  updateCartBadge();
  applyOrderFilters();
});
