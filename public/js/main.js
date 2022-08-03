const home = document.getElementById('home');
const dashboard = document.getElementById('dashboard');
const login = document.getElementById('login');
const logout = document.getElementById('logout');

home.addEventListener('click', async (e) => {
    e.preventDefault();
    // console.log("HOME");
    const res = await fetch('/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
        document.location.replace('/');
    }
});
dashboard.addEventListener('click', async (e) => {
    console.log('DASHBOARD');
    e.preventDefault();
    const res = await fetch('/dashboard', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
        document.location.reload();
    }
});
login.addEventListener('click', async (e) => {
    // console.log('LOGIN');
    e.preventDefault();
    const login = await fetch('/login', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (login.ok) {
        document.location.replace('/login');
    }
});

const logOut = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert('logout successful!');
    } else {
        alert(response.statusText);
    }
};

// logout.addEventListener('click', logOut);