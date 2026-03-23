// ── PRODUCT DATA (mirrors product.js) ──
const PRODUCTS = {
  pr1:  { name: 'Olive and Sage Natural Soap',                     price: 155,  image: 'pictures/pr1.jpg' },
  pr2:  { name: 'Lavender Body Essence Body Milk',                 price: 389,  image: 'pictures/pr2.jpg' },
  pr3:  { name: 'Gentle Touch Body Milk Lotion',                   price: 299,  image: 'pictures/pr3.jpg' },
  pr4:  { name: 'Nordic Glow Face Serum',                          price: 620,  image: 'pictures/pr4.jpg' },
  pr5:  { name: 'LEMON Neroli Body Wash "Citrus Fresh" 300ml',     price: 419,  image: 'pictures/pr5.jpg' },
  pr6:  { name: 'LEMON Neroli Body Wash "Lavender Bloom" 300ml',   price: 419,  image: 'pictures/pr6.jpg' },
  pr7:  { name: 'LEMON Neroli Body Wash "Drop & Sage" 340ml',      price: 449,  image: 'pictures/pr7.jpg' },
  pr8:  { name: 'Nordic Rosehip Facial Oil 30ml',                  price: 689,  image: 'pictures/pr8.jpg' },
  pr9:  { name: 'LEMON Gentle Body Lotion "Milk Lavender" 250ml',  price: 399,  image: 'pictures/pr9.jpg' },
  pr10: { name: 'Avène Hydrating Cream + Lavender Bloom 40ml',     price: 142,  image: 'pictures/pr10.jpg' },
  pr11: { name: 'Suave Skin Soap Filler · Honey & Oat Bar',        price: 189,  image: 'pictures/pr11.jpg' },
  pr12: { name: 'Nordic Barrier Face Cream · Oat & Aloe 50ml',     price: 520,  image: 'pictures/pr12.jpg' },
};

// ── LOAD CART FROM LOCALSTORAGE ──
function getCart() {
  return JSON.parse(localStorage.getItem('aurevia_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('aurevia_cart', JSON.stringify(cart));
}

// ── RENDER CART ──
function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cartItems');
  const emptyMsg  = document.getElementById('emptyCart');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    updateSummary();
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';

  container.innerHTML = cart.map((item, i) => {
    const p = PRODUCTS[item.id];
    if (!p) return '';
    return `
      <div class="cart-item" id="item${i}">
        <img src="${p.image}" alt="${p.name}" width="80" onerror="this.style.background='#e8e3dc';this.src=''">
        <div class="item-details">
          <h3>${p.name}</h3>
          <div class="quantity">
            <button type="button" onclick="decrease(${i})">−</button>
            <span id="qty${i}">${item.qty}</span>
            <button type="button" onclick="increase(${i})">+</button>
            <a href="#" onclick="removeItem(${i}); return false;">Remove</a>
          </div>
        </div>
        <div class="price">₱ ${(p.price * item.qty).toFixed(2)}</div>
      </div>`;
  }).join('');

  updateSummary();
}

// ── UPDATE SUMMARY ──
function updateSummary() {
  const cart = getCart();
  let subtotal = 0;
  cart.forEach(item => {
    const p = PRODUCTS[item.id];
    if (p) subtotal += p.price * item.qty;
  });
  const shipping = subtotal > 0 ? 50 : 0;
  const subtotalEl = document.getElementById('subtotal');
  const totalEl    = document.getElementById('total');
  if (subtotalEl) subtotalEl.textContent = '₱' + subtotal.toFixed(2);
  if (totalEl)    totalEl.textContent    = '₱' + (subtotal + shipping).toFixed(2);
}

// ── QTY CONTROLS ──
function increase(index) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].qty++;
    saveCart(cart);
    renderCart();
  }
}

function decrease(index) {
  const cart = getCart();
  if (cart[index] && cart[index].qty > 1) {
    cart[index].qty--;
    saveCart(cart);
    renderCart();
  }
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// ── INIT ──
renderCart();
