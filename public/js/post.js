const createPostHandler = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#post-title').value;
    const text = document.querySelector('#post-text').value;

    if (title && text) {
        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to make new post.')
        }
    }
}

document.querySelector('#post').addEventListener('click', createPostHandler);