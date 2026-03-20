// ── PRODUCT DATABASE ──────────────────────────────────────────────
const PRODUCTS = {
  pr1: {
    name: 'Olive and Sage Natural Soap',
    sub: '100g · Cold Process',
    price: '₱155',
    origPrice: '₱193',
    badge: '-20%',
    rating: '★★★★☆',
    ratingCount: '4.0 (48 reviews)',
    image: 'pictures/pr1.jpg',
    images: ['pictures/pr1.jpg'],
    desc: 'A handcrafted cold-process soap made with real olive oil and sage extract. Gentle enough for daily use, it cleanses without stripping the skin\'s natural moisture barrier.',
    ingredients: [
      { icon: '🫒', name: 'Olive Oil', desc: 'deeply moisturises' },
      { icon: '🌿', name: 'Sage Extract', desc: 'purifies & soothes' },
      { icon: '🧂', name: 'Sea Salt', desc: 'gently exfoliates' },
      { icon: '💧', name: 'Aloe Vera', desc: 'calms & hydrates' },
    ],
    steps: ['Wet skin with warm water', 'Lather soap between hands', 'Massage onto skin gently', 'Rinse thoroughly'],
    faq: [
      { q: 'Is this safe for sensitive skin?', a: 'Yes, the formula is free from synthetic fragrances and harsh chemicals, making it ideal for sensitive skin.' },
      { q: 'How long does one bar last?', a: 'With daily use, one bar typically lasts 3–4 weeks.' },
      { q: 'Is it vegan?', a: 'Yes, this soap contains no animal-derived ingredients.' },
    ],
    related: ['pr2','pr3','pr5','pr9'],
  },
  pr2: {
    name: 'Lavender Body Essence Body Milk',
    sub: '250ml · Daily Moisture',
    price: '₱389',
    origPrice: '₱486',
    badge: '-20%',
    rating: '★★★★★',
    ratingCount: '4.8 (134 reviews)',
    image: 'pictures/pr2.jpg',
    images: ['pictures/pr2.jpg'],
    desc: 'A lightweight, fast-absorbing body milk infused with French lavender and sweet almond oil. Leaves skin silky-smooth with a calming floral scent perfect for nighttime routines.',
    ingredients: [
      { icon: '💜', name: 'Lavender Oil', desc: 'calms & relaxes' },
      { icon: '🌰', name: 'Sweet Almond Oil', desc: 'deeply nourishes' },
      { icon: '💧', name: 'Hyaluronic Acid', desc: 'locks in moisture' },
      { icon: '🌸', name: 'Rose Water', desc: 'tones & refreshes' },
    ],
    steps: ['Apply after shower to damp skin', 'Massage in circular motions', 'Focus on dry areas', 'Allow to absorb fully'],
    faq: [
      { q: 'Can I use this every day?', a: 'Absolutely. It is formulated for daily use and absorbs quickly without feeling greasy.' },
      { q: 'Does it contain parabens?', a: 'No, this product is 100% paraben-free and free from sulfates.' },
      { q: 'Is the lavender scent strong?', a: 'It is light and calming — not overpowering. Perfect for those sensitive to strong fragrances.' },
    ],
    related: ['pr1','pr3','pr4','pr10'],
  },
  pr3: {
    name: 'Gentle Touch Body Milk Lotion',
    sub: '200ml · Sensitive Skin',
    price: '₱299',
    origPrice: '₱374',
    badge: '-20%',
    rating: '★★★★☆',
    ratingCount: '4.2 (89 reviews)',
    image: 'pictures/pr3.jpg',
    images: ['pictures/pr3.jpg'],
    desc: 'Specially formulated for sensitive and reactive skin types, this ultra-gentle body lotion soothes irritation, restores the moisture barrier, and leaves skin feeling soft and comfortable all day.',
    ingredients: [
      { icon: '🌾', name: 'Oat Extract', desc: 'soothes irritation' },
      { icon: '🧴', name: 'Ceramides', desc: 'restores barrier' },
      { icon: '💧', name: 'Panthenol', desc: 'hydrates & heals' },
      { icon: '🌼', name: 'Chamomile', desc: 'calms redness' },
    ],
    steps: ['Apply to clean dry skin', 'Smooth over entire body', 'Gently pat into skin', 'Reapply as needed'],
    faq: [
      { q: 'Is it safe for eczema-prone skin?', a: 'Yes, it is dermatologist-tested and formulated without common irritants.' },
      { q: 'Is it fragrance-free?', a: 'Yes, this lotion is completely fragrance-free to minimise the risk of reactions.' },
      { q: 'Can children use it?', a: 'It is gentle enough for children aged 3 and above.' },
    ],
    related: ['pr1','pr2','pr10','pr11'],
  },
  pr4: {
    name: 'Nordic Glow Face Serum',
    sub: '30ml · All Skin Types',
    price: '₱620',
    origPrice: '₱775',
    badge: '-20%',
    rating: '★★★★★',
    ratingCount: '4.9 (212 reviews)',
    image: 'pictures/pr4.jpg',
    images: ['pictures/pr4.jpg'],
    desc: 'A potent brightening serum powered by Nordic cloudberry extract and Vitamin C derivatives. Visibly reduces dark spots, evens skin tone, and delivers a luminous glow within 2 weeks of regular use.',
    ingredients: [
      { icon: '☀️', name: 'Vitamin C', desc: 'brightens & evens tone' },
      { icon: '🫐', name: 'Cloudberry', desc: 'antioxidant protection' },
      { icon: '💧', name: 'Niacinamide', desc: 'minimises pores' },
      { icon: '🌿', name: 'Sea Buckthorn', desc: 'regenerates skin' },
    ],
    steps: ['Cleanse face thoroughly', 'Apply 3–4 drops to fingertips', 'Press gently onto face & neck', 'Follow with moisturiser'],
    faq: [
      { q: 'Can I use it with retinol?', a: 'We recommend using this serum in the morning and retinol at night to avoid interactions.' },
      { q: 'How soon will I see results?', a: 'Most users notice visible brightening within 2 weeks of daily use.' },
      { q: 'Is it suitable for oily skin?', a: 'Yes, the lightweight, water-based formula works well for all skin types including oily skin.' },
    ],
    related: ['pr8','pr12','pr2','pr3'],
  },
  pr5: {
    name: 'LEMON Neroli Body Wash "Citrus Fresh" 300ml',
    sub: 'New · Body Care',
    price: '₱419',
    origPrice: null,
    badge: null,
    rating: '★★★★☆',
    ratingCount: '4.3 (67 reviews)',
    image: 'pictures/pr5.jpg',
    images: ['pictures/pr5.jpg'],
    desc: 'An energising body wash bursting with zesty lemon and neroli blossom. The sulfate-free formula creates a rich lather that cleanses without drying, leaving skin fresh and lightly scented.',
    ingredients: [
      { icon: '🍋', name: 'Lemon Extract', desc: 'energises & brightens' },
      { icon: '🌸', name: 'Neroli Oil', desc: 'uplifts & balances' },
      { icon: '🌿', name: 'Aloe Vera', desc: 'soothes skin' },
      { icon: '🫧', name: 'Coconut Cleanser', desc: 'gentle lather' },
    ],
    steps: ['Wet body with warm water', 'Apply to loofah or hands', 'Lather and massage onto skin', 'Rinse well'],
    faq: [
      { q: 'Is it sulfate-free?', a: 'Yes, it uses gentle coconut-derived cleansers with no harsh sulfates.' },
      { q: 'Does it leave a residue?', a: 'No, it rinses cleanly and leaves no sticky or greasy residue.' },
      { q: 'Is the citrus scent long-lasting?', a: 'The scent is light and fresh, lasting about 2–3 hours on skin.' },
    ],
    related: ['pr6','pr7','pr2','pr3'],
  },
  pr6: {
    name: 'LEMON Neroli Body Wash "Lavender Bloom" 300ml',
    sub: 'New · Body Care',
    price: '₱419',
    origPrice: null,
    badge: null,
    rating: '★★★★★',
    ratingCount: '4.7 (91 reviews)',
    image: 'pictures/pr6.jpg',
    images: ['pictures/pr6.jpg'],
    desc: 'A calming body wash blending lemon freshness with soft lavender bloom. Ideal for evening showers, it gently cleanses while the soothing lavender scent helps you wind down after a long day.',
    ingredients: [
      { icon: '💜', name: 'Lavender Oil', desc: 'calms & relaxes' },
      { icon: '🍋', name: 'Lemon Extract', desc: 'cleanses & refreshes' },
      { icon: '🌿', name: 'Aloe Vera', desc: 'soothes skin' },
      { icon: '🫧', name: 'Coconut Cleanser', desc: 'gentle lather' },
    ],
    steps: ['Wet body with warm water', 'Apply to loofah or hands', 'Lather and massage onto skin', 'Rinse well'],
    faq: [
      { q: 'Can I use this daily?', a: 'Yes, it is formulated for daily use and gentle enough for everyday cleansing.' },
      { q: 'Is it safe for dry skin?', a: 'Yes, the moisturising aloe vera and coconut base help maintain skin hydration.' },
      { q: 'Is it pregnancy-safe?', a: 'We recommend consulting your doctor before using essential-oil products during pregnancy.' },
    ],
    related: ['pr5','pr7','pr2','pr9'],
  },
  pr7: {
    name: 'LEMON Neroli Body Wash "Drop & Sage" 340ml',
    sub: 'New · Body Care',
    price: '₱449',
    origPrice: null,
    badge: null,
    rating: '★★★★☆',
    ratingCount: '4.5 (53 reviews)',
    image: 'pictures/pr7.jpg',
    images: ['pictures/pr7.jpg'],
    desc: 'An earthy, grounding body wash combining cool lemon drop freshness with the herbal depth of sage. A larger 340ml size for those who love a full sensory shower experience.',
    ingredients: [
      { icon: '🌿', name: 'Sage Extract', desc: 'purifies & grounds' },
      { icon: '🍋', name: 'Lemon Drop', desc: 'brightens & cleanses' },
      { icon: '🪨', name: 'Mineral Clay', desc: 'draws out impurities' },
      { icon: '🫧', name: 'Coconut Cleanser', desc: 'gentle lather' },
    ],
    steps: ['Apply to wet skin', 'Work into a lather', 'Massage in circles', 'Rinse thoroughly'],
    faq: [
      { q: 'What does it smell like?', a: 'Fresh lemon with a subtle herbal earthiness from the sage — clean and grounding.' },
      { q: 'Is the clay formula drying?', a: 'No, the clay is balanced with moisturising agents so it cleanses without over-drying.' },
      { q: 'Is it cruelty-free?', a: 'Yes, Aurevia is a 100% cruelty-free brand.' },
    ],
    related: ['pr5','pr6','pr1','pr3'],
  },
  pr8: {
    name: 'Nordic Rosehip Facial Oil 30ml',
    sub: 'New · Face Care',
    price: '₱689',
    origPrice: null,
    badge: null,
    rating: '★★★★★',
    ratingCount: '4.9 (178 reviews)',
    image: 'pictures/pr8.jpg',
    images: ['pictures/pr8.jpg'],
    desc: 'Cold-pressed from Nordic rosehip seeds, this luxurious facial oil is packed with omega fatty acids and Vitamin A. It visibly reduces fine lines, fades scars, and delivers intense nourishment for a luminous complexion.',
    ingredients: [
      { icon: '🌹', name: 'Rosehip Oil', desc: 'regenerates skin cells' },
      { icon: '☀️', name: 'Vitamin A', desc: 'reduces fine lines' },
      { icon: '🫐', name: 'Omega 3 & 6', desc: 'deeply nourishes' },
      { icon: '🌿', name: 'Sea Buckthorn', desc: 'brightens complexion' },
    ],
    steps: ['Cleanse and tone face', 'Warm 2–3 drops in palms', 'Press gently onto face', 'Use morning and/or evening'],
    faq: [
      { q: 'Will it make my skin oily?', a: 'Rosehip oil is dry to the touch and absorbs quickly without leaving a greasy finish.' },
      { q: 'Can I use it under makeup?', a: 'Yes, apply and wait 5 minutes before applying makeup for best results.' },
      { q: 'How long does one bottle last?', a: 'With 2–3 drops per use, a 30ml bottle lasts approximately 3 months.' },
    ],
    related: ['pr4','pr12','pr2','pr6'],
  },
  pr9: {
    name: 'LEMON Gentle Body Lotion "Milk Lavender" 250ml',
    sub: 'Bestseller · Hydrating',
    price: '₱399',
    origPrice: null,
    badge: null,
    rating: '★★★★★',
    ratingCount: '4.8 (305 reviews)',
    image: 'pictures/pr9.jpg',
    images: ['pictures/pr9.jpg'],
    desc: 'Our bestselling body lotion combines creamy milk proteins with calming lavender for all-day hydration. The velvety texture melts into skin instantly, leaving it soft, smooth, and delicately scented.',
    ingredients: [
      { icon: '🥛', name: 'Milk Protein', desc: 'firms & smooths' },
      { icon: '💜', name: 'Lavender Oil', desc: 'calms & soothes' },
      { icon: '💧', name: 'Glycerin', desc: 'locks in moisture' },
      { icon: '🌸', name: 'Shea Butter', desc: 'nourishes deeply' },
    ],
    steps: ['Apply to clean skin', 'Smooth over arms, legs, and body', 'Massage until absorbed', 'Reapply morning and evening'],
    faq: [
      { q: 'Why is this your bestseller?', a: 'Customers love the fast-absorbing formula and long-lasting scent. It\'s gentle, effective, and affordable.' },
      { q: 'Is it safe for all skin types?', a: 'Yes, suitable for normal, dry, oily, and combination skin types.' },
      { q: 'Does it contain alcohol?', a: 'No, it is alcohol-free to prevent skin dryness.' },
    ],
    related: ['pr2','pr3','pr6','pr10'],
  },
  pr10: {
    name: 'Avène Hydrating Cream + Lavender Bloom 40ml',
    sub: 'Bestseller · Sensitive Skin',
    price: '₱142',
    origPrice: null,
    badge: null,
    rating: '★★★★☆',
    ratingCount: '4.4 (157 reviews)',
    image: 'pictures/pr10.jpg',
    images: ['pictures/pr10.jpg'],
    desc: 'An intensely hydrating face and body cream enriched with Avène thermal spring water and lavender bloom extract. Clinically proven to soothe sensitive, reactive skin and restore optimal moisture levels.',
    ingredients: [
      { icon: '💧', name: 'Thermal Spring Water', desc: 'soothes sensitivity' },
      { icon: '💜', name: 'Lavender Bloom', desc: 'calms & relaxes' },
      { icon: '🧴', name: 'Ceramides', desc: 'strengthens barrier' },
      { icon: '🌾', name: 'Oat Milk', desc: 'hydrates & softens' },
    ],
    steps: ['Apply a small amount to face or body', 'Gently smooth over skin', 'Allow to absorb', 'Use morning and evening'],
    faq: [
      { q: 'Is it suitable for rosacea?', a: 'Yes, it is recommended by dermatologists for rosacea and sensitive skin conditions.' },
      { q: 'Can it be used around the eyes?', a: 'It can be used near the eye area but avoid direct contact with eyes.' },
      { q: 'Is it non-comedogenic?', a: 'Yes, it will not clog pores and is safe for acne-prone skin.' },
    ],
    related: ['pr3','pr9','pr2','pr12'],
  },
  pr11: {
    name: 'Suave Skin Soap Filler · Honey & Oat Bar',
    sub: 'Bestseller · Cleansing',
    price: '₱189',
    origPrice: null,
    badge: null,
    rating: '★★★★★',
    ratingCount: '4.7 (223 reviews)',
    image: 'pictures/pr11.jpg',
    images: ['pictures/pr11.jpg'],
    desc: 'A nourishing bar soap packed with raw honey and colloidal oatmeal. This bestseller gently exfoliates while moisturising, making it perfect for dry or rough skin that needs a little extra care.',
    ingredients: [
      { icon: '🍯', name: 'Raw Honey', desc: 'antibacterial & moisturising' },
      { icon: '🌾', name: 'Colloidal Oat', desc: 'soothes & exfoliates' },
      { icon: '🫒', name: 'Olive Oil', desc: 'conditions skin' },
      { icon: '🌿', name: 'Vitamin E', desc: 'protects & repairs' },
    ],
    steps: ['Wet hands or skin', 'Lather the bar soap', 'Massage onto skin', 'Rinse completely'],
    faq: [
      { q: 'Is it good for dry skin?', a: 'Yes, honey and oat are both intensely moisturising ingredients ideal for dry skin.' },
      { q: 'Is it antibacterial?', a: 'Raw honey has natural antibacterial properties that help keep skin clean.' },
      { q: 'How should I store it?', a: 'Keep the bar dry between uses on a draining soap dish to extend its life.' },
    ],
    related: ['pr1','pr3','pr9','pr10'],
  },
  pr12: {
    name: 'Nordic Barrier Face Cream · Oat & Aloe 50ml',
    sub: 'Bestseller · Restorative',
    price: '₱520',
    origPrice: null,
    badge: null,
    rating: '★★★★★',
    ratingCount: '4.9 (289 reviews)',
    image: 'pictures/pr12.jpg',
    images: ['pictures/pr12.jpg'],
    desc: 'A rich barrier-repair face cream formulated with Nordic oat extract and pure aloe vera. It rebuilds the skin\'s protective barrier, locks in moisture, and calms inflammation — ideal for post-procedure or compromised skin.',
    ingredients: [
      { icon: '🌾', name: 'Nordic Oat', desc: 'repairs skin barrier' },
      { icon: '🌿', name: 'Aloe Vera', desc: 'soothes & heals' },
      { icon: '🧴', name: 'Ceramide Complex', desc: 'strengthens barrier' },
      { icon: '❄️', name: 'Arctic Moss', desc: 'anti-inflammatory' },
    ],
    steps: ['Cleanse face', 'Apply a pea-sized amount', 'Gently press onto face and neck', 'Use as final skincare step'],
    faq: [
      { q: 'Can I use this after peels or treatments?', a: 'Yes, it is formulated for post-procedure use and helps speed up skin recovery.' },
      { q: 'Is it heavy or greasy?', a: 'Despite being rich, the formula absorbs well and does not feel heavy on skin.' },
      { q: 'Can I use it as a night cream?', a: 'Yes, it works excellently as both a day and night cream.' },
    ],
    related: ['pr4','pr8','pr10','pr2'],
  },
};

// ── HELPERS ───────────────────────────────────────────────────────
function stars(rating) {
  // rating like '★★★★☆' — just return as-is from data
  return rating;
}

function renderRelated(ids, currentId) {
  const grid = document.getElementById('relatedGrid');
  if (!grid) return;
  grid.innerHTML = ids
    .filter(id => id !== currentId)
    .slice(0, 4)
    .map(id => {
      const p = PRODUCTS[id];
      if (!p) return '';
      return `
        <div class="product-card" data-id="${id}">
          <div class="product-img">
            <img src="${p.image}" alt="${p.name}" />
            <button type="button" class="wishlist-btn">♡</button>
          </div>
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-sub">${p.sub}</div>
            <div class="product-price"><span class="price-current">${p.price}</span></div>
            <div class="card-actions">
              <div class="qty-control">
                <button type="button" class="qty-btn qty-minus" disabled>−</button>
                <span class="qty-value">1</span>
                <button type="button" class="qty-btn qty-plus">+</button>
              </div>
              <button type="button" class="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>`;
    }).join('');

  // Wire up related card clicks
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('button') || e.target.closest('.qty-control')) return;
      window.location = 'product.html?id=' + this.dataset.id;
    });
  });

  // Wire up related qty buttons
  grid.querySelectorAll('.qty-control').forEach(control => {
    const minus = control.querySelector('.qty-minus');
    const plus  = control.querySelector('.qty-plus');
    const disp  = control.querySelector('.qty-value');
    let qty = 1;
    plus.addEventListener('click', e => { e.stopPropagation(); qty++; disp.textContent = qty; minus.disabled = false; });
    minus.addEventListener('click', e => { e.stopPropagation(); if (qty > 1) { qty--; disp.textContent = qty; if (qty === 1) minus.disabled = true; } });
  });

  // Wire up related wishlist + add to cart
  grid.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      this.textContent = this.classList.contains('active') ? '♥' : '♡';
    });
  });
  grid.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('added');
      this.textContent = this.classList.contains('added') ? '✓ Added!' : 'Add to Cart';
    });
  });
}

function renderIngredients(ingredients) {
  const grid = document.getElementById('ingredientsGrid');
  if (!grid) return;
  grid.innerHTML = ingredients.map(ing => `
    <div class="ingredient-item">
      <div class="ingredient-icon">${ing.icon}</div>
      <div class="ingredient-name">${ing.name}</div>
      <div class="ingredient-desc">${ing.desc}</div>
    </div>`).join('');
}

function renderSteps(steps) {
  const wrap = document.getElementById('howtoSteps');
  if (!wrap) return;
  wrap.innerHTML = steps.map((step, i) => `
    ${i > 0 ? '<div class="howto-connector"></div>' : ''}
    <div class="howto-step">
      <div class="step-num">${i + 1}</div>
      <div class="step-label">${step}</div>
    </div>`).join('');
}

function renderFAQ(faqItems) {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = faqItems.map((item, i) => `
    <div class="faq-item ${i === 0 ? 'active' : ''}">
      <button type="button" class="faq-q">
        ${item.q}
        <span class="faq-arrow">${i === 0 ? '▲' : '▼'}</span>
      </button>
      <div class="faq-a">${item.a}</div>
    </div>`).join('');

  list.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      const isOpen = item.classList.contains('active');
      list.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-arrow').textContent = '▼';
      });
      if (!isOpen) {
        item.classList.add('active');
        this.querySelector('.faq-arrow').textContent = '▲';
      }
    });
  });
}

function renderThumbs(images) {
  const list = document.getElementById('thumbList');
  if (!list) return;
  list.innerHTML = images.map((src, i) => `
    <div class="thumb ${i === 0 ? 'active' : ''}" data-img="${src}" data-index="${i}">
      <img src="${src}" alt="View ${i+1}" />
    </div>`).join('');

  list.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => switchImage(parseInt(thumb.dataset.index), images));
  });
}

let currentThumb = 0;
function switchImage(index, images) {
  currentThumb = (index + images.length) % images.length;
  const mainImg = document.getElementById('mainProductImg');
  const thumbs = document.querySelectorAll('.thumb');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = images[currentThumb];
    mainImg.style.opacity = '1';
  }, 150);
  thumbs.forEach((t, i) => t.classList.toggle('active', i === currentThumb));
}

// ── MAIN INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Read ?id= from URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'pr1';
  const p = PRODUCTS[id] || PRODUCTS['pr1'];

  // Populate page
  document.title = p.name + ' – Aurevia';
  document.getElementById('breadcrumbName').textContent = p.name;
  document.getElementById('productTitle').textContent = p.name;
  document.getElementById('productStars').textContent = p.rating;
  document.getElementById('productRating').textContent = p.ratingCount;
  document.getElementById('productPrice').textContent = p.price;
  document.getElementById('productOrigPrice').textContent = p.origPrice || '';
  document.getElementById('productBadge').textContent = p.badge || '';
  document.getElementById('detailsBody').textContent = p.desc;

  // Main image
  const mainImg = document.getElementById('mainProductImg');
  mainImg.src = p.image;
  mainImg.alt = p.name;

  // Thumbnails
  renderThumbs(p.images);

  // Gallery arrows
  document.getElementById('galleryPrev').addEventListener('click', () => switchImage(currentThumb - 1, p.images));
  document.getElementById('galleryNext').addEventListener('click', () => switchImage(currentThumb + 1, p.images));

  // Ingredients, steps, FAQ, related
  renderIngredients(p.ingredients);
  renderSteps(p.steps);
  renderFAQ(p.faq);
  renderRelated(p.related, id);

  // ── QTY CONTROL ──
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus  = document.getElementById('qtyPlus');
  const qtyDisp  = document.getElementById('qtyValue');
  let qty = 1;

  qtyPlus.addEventListener('click', () => {
    qty++;
    qtyDisp.textContent = qty;
    qtyMinus.disabled = false;
  });

  qtyMinus.addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      qtyDisp.textContent = qty;
      if (qty === 1) qtyMinus.disabled = true;
    }
  });

  // ── ADD TO CART ──
  const cartBtn = document.getElementById('mainAddToCart');
  cartBtn.addEventListener('click', () => {
    cartBtn.classList.toggle('added');
    if (cartBtn.classList.contains('added')) {
      cartBtn.innerHTML = `<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Added!`;
    } else {
      cartBtn.innerHTML = `<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Add to Cart`;
    }
  });

  // ── WISHLIST ──
  const wishBtn = document.getElementById('mainWishlist');
  wishBtn.addEventListener('click', () => {
    wishBtn.classList.toggle('active');
    wishBtn.textContent = wishBtn.classList.contains('active') ? '♥' : '♡';
  });

  // ── SUB NAV ──
  document.querySelectorAll('.sub-nav-inner span:not(.free-ship)').forEach(span => {
    span.addEventListener('click', function() {
      document.querySelectorAll('.sub-nav-inner span').forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
