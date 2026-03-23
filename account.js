// ── ACCOUNT.JS ──────────────────────────────────────────────
// Handles: session check, logout, profile display,
//          address CRUD, FAQ toggle

// ── SESSION HELPERS ──
function getUser() {
  return JSON.parse(localStorage.getItem('aurevia_user') || 'null');
}
function requireLogin() {
  if (!getUser()) { window.location.href = 'storefront-homepage.html'; }
}
function logout() {
  localStorage.removeItem('aurevia_user');
  window.location.href = 'storefront-homepage.html';
}

// ── PROFILE PAGE ──
function initProfile() {
  requireLogin();
  const user = getUser();
  const nameEl  = document.getElementById('accName');
  const emailEl = document.getElementById('accEmail');
  if (nameEl)  nameEl.textContent  = user.name  || 'User';
  if (emailEl) emailEl.textContent = user.email || '';
}

// ── ADDRESS PAGE ──
let editIndex = -1;

function openModal(index = -1) {
  const modal = document.getElementById('addressModal');
  if (!modal) return;
  modal.classList.add('open');

  if (index !== -1) {
    const data = JSON.parse(localStorage.getItem('aurevia_addresses') || '[]');
    const item = data[index];
    document.getElementById('addrName').value    = item.name;
    document.getElementById('addrAddress').value = item.address;
    document.getElementById('addrPhone').value   = item.phone;
    editIndex = index;
    document.getElementById('modalTitle').textContent = 'Edit Address';
  } else {
    clearInputs();
    editIndex = -1;
    document.getElementById('modalTitle').textContent = 'Add Address';
  }
}

function closeModal() {
  const modal = document.getElementById('addressModal');
  if (modal) modal.classList.remove('open');
}

function clearInputs() {
  ['addrName','addrAddress','addrPhone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function saveAddress() {
  const name    = document.getElementById('addrName')?.value.trim();
  const address = document.getElementById('addrAddress')?.value.trim();
  const phone   = document.getElementById('addrPhone')?.value.trim();

  if (!name || !address || !phone) { alert('Please fill all fields.'); return; }

  const data = JSON.parse(localStorage.getItem('aurevia_addresses') || '[]');
  if (editIndex === -1) {
    data.push({ name, address, phone });
  } else {
    data[editIndex] = { name, address, phone };
  }
  localStorage.setItem('aurevia_addresses', JSON.stringify(data));
  renderAddresses();
  closeModal();
}

function deleteAddress(index) {
  const data = JSON.parse(localStorage.getItem('aurevia_addresses') || '[]');
  data.splice(index, 1);
  localStorage.setItem('aurevia_addresses', JSON.stringify(data));
  renderAddresses();
}

function renderAddresses() {
  const data = JSON.parse(localStorage.getItem('aurevia_addresses') || '[]');
  const container = document.getElementById('addressList');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = '<p style="color:gray;font-size:13px;">No addresses saved yet.</p>';
    return;
  }

  container.innerHTML = data.map((item, i) => `
    <div class="acc-address-card">
      <p><b>${item.name}</b></p>
      <p>${item.address}</p>
      <p>${item.phone}</p>
      <div class="acc-address-actions">
        <button onclick="openModal(${i})">Edit</button>
        <button onclick="deleteAddress(${i})">Delete</button>
      </div>
    </div>
  `).join('');
}

// ── FAQ TOGGLE (help page) ──
function toggleFAQ(el) {
  el.classList.toggle('active');
}

// ── AUTO-INIT based on page ──
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  if (body.id === 'page-profile')  { initProfile(); }
  if (body.id === 'page-address')  { requireLogin(); renderAddresses(); }
  if (body.id === 'page-help')     { requireLogin(); }
});
