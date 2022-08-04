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
            document.location.replace('/');
        } else {
            alert('Comment post failed');
        }
    }

}




document.querySelector('.comment-form').addEventListener('submit', addCommentHandler);

document.querySelector('.delete-comment').addEventListener('click', deleteCommentHandler);