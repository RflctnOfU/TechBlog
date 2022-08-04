const addCommentHandler = async (e) => {
    e.preventDefault();

    const text = document.querySelector('#comment-text').value;

    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace(`/post/${e.target.getAttribute(post.id)}`);
        } else {
            alert('Comment post failed');
        }
    }
}

const deleteCommentHandler = async () => {
    const response = await fetch('api/comments/:id', {
        method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Comment delete failed.')
    }
}


document.querySelector('.comment-form').addEventListener('submit', addCommentHandler);

document.querySelector('.delete-comment').addEventListener('click', deleteCommentHandler);