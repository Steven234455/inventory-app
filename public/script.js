// REGISTER
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      full_name: document.getElementById('full_name').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      confirmPassword: document.getElementById('confirmPassword').value
    };

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message || 'Registration complete');
    if (res.ok) window.location.href = 'login.html';
  });
}

// LOGIN
// LOGIN
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message || 'Login success');

    // ✅ ADD THIS: Redirect if login is successful
    if (res.ok) {
      window.location.href = "dashboard.html";
    }
  });
}
