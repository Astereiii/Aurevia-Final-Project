document.addEventListener('DOMContentLoaded', () => {

  // ── PASSWORD VISIBILITY TOGGLE ──
  function setupPasswordToggle(toggleId, inputId) {
    const btn = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    if (!btn || !input) return;

    btn.addEventListener('click', () => {
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.innerHTML = isHidden
        ? `<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
           </svg>`
        : `<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
           </svg>`;
    });
  }

  setupPasswordToggle('toggleLoginPw', 'loginPassword');
  setupPasswordToggle('toggleRegPw', 'regPassword');

  // ── VALIDATION HELPERS ──
  function showError(input, msg) {
    input.classList.add('error');
    let err = input.parentElement.nextElementSibling;
    if (!err || !err.classList.contains('error-msg')) {
      err = document.createElement('p');
      err.className = 'error-msg';
      input.parentElement.insertAdjacentElement('afterend', err);
    }
    err.textContent = msg;
    err.classList.add('visible');
  }

  function clearError(input) {
    input.classList.remove('error');
    const err = input.parentElement.nextElementSibling;
    if (err && err.classList.contains('error-msg')) {
      err.classList.remove('visible');
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ── LOGIN FORM ──
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const emailInput    = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    [emailInput, passwordInput].forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });

    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        valid = false;
      }
      if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters.');
        valid = false;
      }

      if (valid) {
        const btn = loginForm.querySelector('.btn-auth');
        btn.textContent = 'Signing in…';
        btn.classList.add('success');

        // Save user session to localStorage
        const userData = {
          email: emailInput.value.trim(),
          name: emailInput.value.trim().split('@')[0],
          loggedIn: true
        };
        localStorage.setItem('aurevia_user', JSON.stringify(userData));

        setTimeout(() => { window.location.href = 'profile.html'; }, 1200);
      }
    });
  }

  // ── REGISTER FORM ──
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    const emailInput    = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');

    [emailInput, passwordInput].forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });

    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        valid = false;
      }
      if (passwordInput.value.length < 8) {
        showError(passwordInput, 'Password must be at least 8 characters.');
        valid = false;
      }

      if (valid) {
        const btn = registerForm.querySelector('.btn-auth');
        btn.textContent = 'Creating account…';
        btn.classList.add('success');

        // Save new user to localStorage
        const userData = {
          email: emailInput.value.trim(),
          name: emailInput.value.trim().split('@')[0],
          loggedIn: true
        };
        localStorage.setItem('aurevia_user', JSON.stringify(userData));

        setTimeout(() => { window.location.href = 'profile.html'; }, 1200);
      }
    });
  }

  // ── GOOGLE BUTTONS (placeholder) ──
  document.querySelectorAll('.btn-google').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Redirecting to Google…';
      btn.disabled = true;
    });
  });

});
