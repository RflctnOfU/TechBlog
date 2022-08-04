document.getElementById('home').addEventListener('click', async (e) => {
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

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);

const newPost = async () => {
    const response = await fetch('/dashboard/new', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard/new');
        console.log("hello");
    } else {
        alert(response.statusText)
    }
};

document.querySelector('#new-post').addEventListener('click', newPost);



// const createPostHandler = async (e) => {
//     e.preventDefault();

//     const title = document.querySelector('#post-title').value;
//     const text = document.querySelector('#post-text').value;

//     if (title && text) {
//         const response = await fetch('/api/posts', {
//             method: 'POST',
//             body: JSON.stringify({ title, text }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             console.log('success');
//             // document.location.replace('/');
//         } else {
//             alert('Failed to make new post.')
//         }
//     }
// }

// document.querySelector('#post').addEventListener('submit', createPostHandler);

const dashboardRedirect = async (e) => {
    e.preventDefault();
    const response = await fetch('/dashboard', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    }
}

document.querySelector('#dashboard').addEventListener('click', dashboardRedirect)