const updatePostHandler = async (e) => {
    const title = document.querySelector('#post-title').value;
    const text = document.querySelector('#post-text').value;

    if (title && text) {
        const response = await fetch('/api/posts/:id', {
            method: 'PUT',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('update failed')
        }
    }

}

document.querySelector('.edit-form').addEventListener('submit', updatePostHandler);