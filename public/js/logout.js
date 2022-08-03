const home = document.getElementById('home');
const dashboard = document.getElementById('dashboard');

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
    try {

        // console.log('DASHBOARD');
        e.preventDefault();
        const res = await fetch('/dashboard', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (res.ok) {
            document.location.replace('dashboard');

        }
    } catch (error) {

    }
});

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);