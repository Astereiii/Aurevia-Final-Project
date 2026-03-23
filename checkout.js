let state = {
    step: 1, mainPay: null, subPay: null, installmentChosen: false, 
    monthlyPayment: 0, monthCount: 1, baseShipping: 50, voucherApplied: false,
    subtotal: 1219, items: {
        item1: { name: "Veloura SilkShine Shampoo", qty: 1, price: 250 },
        item2: { name: "Pure Verdant Scalp Wash", qty: 1, price: 449 },
        item3: { name: "Hyacinth Recovery Conditioner", qty: 1, price: 520 }
    }
};


// ── LOAD CART FROM LOCALSTORAGE INTO CHECKOUT STATE ──
(function loadCartIntoState() {
    const PRODUCTS = {
        pr1:  { name: 'Olive and Sage Natural Soap',                    price: 155,  image: 'pictures/pr1.jpg'  },
        pr2:  { name: 'Lavender Body Essence Body Milk',                price: 389,  image: 'pictures/pr2.jpg'  },
        pr3:  { name: 'Gentle Touch Body Milk Lotion',                  price: 299,  image: 'pictures/pr3.jpg'  },
        pr4:  { name: 'Nordic Glow Face Serum',                         price: 620,  image: 'pictures/pr4.jpg'  },
        pr5:  { name: 'LEMON Neroli Body Wash "Citrus Fresh" 300ml',    price: 419,  image: 'pictures/pr5.jpg'  },
        pr6:  { name: 'LEMON Neroli Body Wash "Lavender Bloom" 300ml',  price: 419,  image: 'pictures/pr6.jpg'  },
        pr7:  { name: 'LEMON Neroli Body Wash "Drop & Sage" 340ml',     price: 449,  image: 'pictures/pr7.jpg'  },
        pr8:  { name: 'Nordic Rosehip Facial Oil 30ml',                 price: 689,  image: 'pictures/pr8.jpg'  },
        pr9:  { name: 'LEMON Gentle Body Lotion "Milk Lavender" 250ml', price: 399,  image: 'pictures/pr9.jpg'  },
        pr10: { name: 'Avène Hydrating Cream + Lavender Bloom 40ml',    price: 142,  image: 'pictures/pr10.jpg' },
        pr11: { name: 'Suave Skin Soap Filler · Honey & Oat Bar',       price: 189,  image: 'pictures/pr11.jpg' },
        pr12: { name: 'Nordic Barrier Face Cream · Oat & Aloe 50ml',    price: 520,  image: 'pictures/pr12.jpg' },
    };

    const stored = JSON.parse(localStorage.getItem('aurevia_cart') || '[]');
    if (stored.length === 0) return; // keep default demo items if cart is empty

    // Clear default items and rebuild from localStorage
    state.items = {};
    state.subtotal = 0;

    const cartContainer = document.getElementById('cartItems');
    if (cartContainer) cartContainer.innerHTML = '';

    stored.forEach((entry, i) => {
        const p = PRODUCTS[entry.id];
        if (!p) return;
        const key = 'item' + (i + 1);
        state.items[key] = { name: p.name, qty: entry.qty, price: p.price };
        state.subtotal += p.price * entry.qty;

        if (cartContainer) {
            cartContainer.innerHTML += `
            <div class="item-card">
                <img src="${p.image}" alt="${p.name}" style="width:50px; height:50px; object-fit:cover; border-radius:6px;" class="me-3">
                <div class="flex-grow-1">
                    <span>${p.name}</span><br>
                    <div class="qty-controls d-inline-flex">
                        <button class="qty-btn" onclick="changeQty('${key}', -1)">-</button>
                        <span class="qty-val" id="qty-${key}">${entry.qty}</span>
                        <button class="qty-btn" onclick="changeQty('${key}', 1)">+</button>
                    </div>
                </div>
                <span class="ms-auto" id="price-${key}">₱${(p.price * entry.qty).toFixed(2)}</span>
            </div>`;
        }
    });

    updateSummary();
})();

// Input Formatting
document.getElementById('cardNum')?.addEventListener('input', function(e) {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    e.target.value = val.replace(/(.{4})/g, '$1 ').trim();
});

document.getElementById('expiry')?.addEventListener('input', function(e) {
    let val = this.value.replace(/\D/g, '');
    if (val.length > 2) this.value = val.substring(0, 2) + '/' + val.substring(2, 4);
    else this.value = val;
});

// Logic Functions
function changeQty(id, delta) {
    let item = state.items[id];
    if (item.qty + delta < 1) return;
    item.qty += delta;
    document.getElementById('qty-' + id).innerText = item.qty;
    document.getElementById('price-' + id).innerText = "₱" + (item.qty * item.price).toFixed(2);
    calculateSubtotal();
}

function calculateSubtotal() {
    state.subtotal = Object.values(state.items).reduce((acc, curr) => acc + (curr.qty * curr.price), 0);
    updateSummary();
}

function showPaymentDetail(type) {
    state.mainPay = type;
    document.querySelectorAll('#mainMethods .method-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-'+type).classList.add('active');
    ['ewallet', 'cod', 'paylater'].forEach(id => document.getElementById('detail-'+id).classList.add('hidden'));
    document.getElementById('detail-'+type).classList.remove('hidden');
    updateSummary();
}

function selectSub(type) {
    state.subPay = type;
    ['sub-card', 'sub-gcash'].forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById('sub-'+type).classList.add('active');
    ['form-card', 'form-gcash'].forEach(id => document.getElementById(id).classList.add('hidden'));
    document.getElementById('form-'+type).classList.remove('hidden');
}

function setInstallment(el) {
    el.parentNode.querySelectorAll('.box-row').forEach(r => r.classList.remove('active'));
    el.classList.add('active');
    state.installmentChosen = true;
    state.monthlyPayment = el.querySelector('strong').innerText;
    state.monthCount = parseInt(el.querySelector('span').innerText);
    updateSummary();
}

function setShipping(type, cost) {
    state.baseShipping = cost;
    document.getElementById('ship-std').classList.remove('active');
    document.getElementById('ship-exp').classList.remove('active');
    document.getElementById('ship-'+type).classList.add('active');
    updateSummary();
}

function toggleVoucher() {
    state.voucherApplied = !state.voucherApplied;
    document.getElementById('voucherStatus').innerHTML = state.voucherApplied ? '<span style="color:var(--brand-green); font-weight:bold;">Applied ✓</span>' : '●';
    updateSummary();
}

function updateSummary() {
    let ship = state.voucherApplied ? 0 : state.baseShipping;
    document.getElementById('summaryShippingRow').style.display = ship === 0 ? "none" : "flex";
    document.getElementById('shipText').innerText = "₱" + ship.toFixed(2);
    
    if (state.mainPay === 'paylater' && state.installmentChosen) {
        let baseM = parseFloat(state.monthlyPayment.replace(/[^\d.-]/g, ''));
        document.getElementById('subtotalText').innerText = "Installment Plan";
        document.getElementById('totalText').innerText = "₱" + (baseM + (ship/state.monthCount)).toFixed(2) + " / mo";
    } else {
        document.getElementById('subtotalText').innerText = "₱" + state.subtotal.toFixed(2);
        document.getElementById('totalText').innerText = "₱" + (state.subtotal + ship).toFixed(2);
    }
}

function onContinue() {
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('btnSpinner');

    if (state.step === 1) {
        // --- VALIDATION LOGIC ---
        if (!state.mainPay) return alert("Select a payment method.");

        if (state.mainPay === 'ewallet') {
            if (state.subPay === 'card') {
                const cardVal = document.getElementById('cardNum').value.replace(/\s/g, '');
                if (cardVal.length < 16) return alert("Please enter a valid 16-digit card number.");
            } else if (state.subPay === 'gcash') {
                const gcashVal = document.getElementById('gcashNum').value;
                if (!gcashVal.startsWith('09') || gcashVal.length !== 11) return alert("Invalid GCash number.");
            } else {
                return alert("Please select a specific E-Wallet or Card option.");
            }
        }
        
        if (state.mainPay === 'paylater' && !state.installmentChosen) {
            return alert("Please select an installment plan.");
        }

        // Transition to Shipping
        document.getElementById('stepPayment').classList.add('hidden');
        document.getElementById('stepShipping').classList.remove('hidden');
        document.getElementById('titleText').innerText = "Shipping";
        btnText.innerText = "Place Order";
        state.step = 2;

    } else if (state.step === 2) {
        // --- FINALIZING ORDER ---
        btnText.style.display = 'none';
        spinner.style.display = 'block';

        setTimeout(() => {
            // Prepare Success Screen Data
            let finalMethod = state.mainPay === 'ewallet' ? state.subPay : state.mainPay;
            document.getElementById('finalMethodText').innerText = finalMethod.replace('-', ' ');
            
            let ship = state.voucherApplied ? 0 : state.baseShipping;
            let totalVal = "";

            if (state.mainPay === 'paylater') {
                totalVal = state.monthlyPayment + " / month";
                document.getElementById('finalTotalLabel').innerText = "Monthly Installment:";
            } else {
                totalVal = "₱" + (state.subtotal + ship).toFixed(2);
                document.getElementById('finalTotalLabel').innerText = "Total Paid:";
            }

            document.getElementById('finalTotalVal').innerText = totalVal;
            renderPurchasedItems();

            // Switch to Success Screen
            document.getElementById('checkoutFlow').classList.add('hidden');
            document.getElementById('successScreen').classList.remove('hidden');
            window.scrollTo(0,0);
        }, 1500);
    }
}

function handleBackNavigation() {
    if (state.step === 2) {
        document.getElementById('stepShipping').classList.add('hidden');
        document.getElementById('stepPayment').classList.remove('hidden');
        document.getElementById('titleText').innerText = "Check Out";
        document.getElementById('btnText').innerText = "Continue";
        state.step = 1;
    } else {
        // If on step 1, simulate returning to a previous page or cart
        window.location.href = "cart.html";
    }
}

function renderPurchasedItems() {
    const list = document.getElementById('purchasedItemsList');
    list.innerHTML = Object.values(state.items).map(item => `
        <div class="purchased-item d-flex justify-content-between small">
            <span>${item.name} (x${item.qty})</span>
            <span class="fw-bold">₱${(item.qty * item.price).toFixed(2)}</span>
        </div>
    `).join('');
}

function toggleReceipt() {
    document.getElementById('purchasedItemsList').classList.toggle('hidden');
}

// 1. Function to jump to a specific policy when clicking a link
function jumpToPolicy(id) {
    const container = document.getElementById('policyContentArea');
    const target = document.getElementById(id);
    
    if (target && container) {
        // Calculate position relative to the scrollable container
        const topPos = target.offsetTop;
        
        container.scrollTo({
            top: topPos - 10,
            behavior: 'smooth'
        });
        
        // Immediate visual feedback
        updateActivePill(id);
    }
}

// 2. ScrollSpy Logic: Detects which section is in view
document.getElementById('policyContentArea')?.addEventListener('scroll', function() {
    const sections = ['refund-policy', 'privacy-policy', 'tos-policy'];
    let currentSection = "";
    const container = this;
    const scrollPosition = container.scrollTop + 60; // 60px buffer for better triggering

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const sectionTop = section.offsetTop;
            // If the section has reached the top of the viewing area
            if (scrollPosition >= sectionTop) {
                currentSection = id;
            }
        }
    });

    if (currentSection) {
        updateActivePill(currentSection);
    }
});

// Helper to switch the .active class on the sidebar links
function updateActivePill(id) {
    document.querySelectorAll('.policy-nav-link').forEach(link => {
        link.classList.remove('active');
        // Check if the link's href matches the current section ID
        if (link.getAttribute('href') === '#' + id || link.getAttribute('onclick')?.includes(id)) {
            link.classList.add('active');
        }
    });
}

