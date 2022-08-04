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

const deletePost = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/posts/:id', {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post')
    }
}

document.querySelector('.edit-form').addEventListener('submit', updatePostHandler);

document.querySelector('.delete-post').addEventListener('click', deletePost);