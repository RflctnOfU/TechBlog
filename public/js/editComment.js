const updateCommentHandler = async (e) => {
    e.preventDefault();

    const text = document.querySelector('#comment-text').value;

    if (text) {
        console.log(e.target.getAttribute('data-id'));
        const response = await fetch(`/api/comments/edit/${e.target.getAttribute('data-id')}`, {
            method: 'PUT',
            body: JSON.stringify({ text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('update failed')
        }
    }
}

const deleteComment = async (e) => {
    e.preventDefault();
    console.log(e.target.getAttribute('data-id'));
    const response = await fetch(`/api/comments/${e.target.getAttribute('data-id')}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete comment')
    }
}

document.querySelector('#update-comment').addEventListener('click', updateCommentHandler);

document.querySelector('#delete-comment').addEventListener('click', deleteComment);