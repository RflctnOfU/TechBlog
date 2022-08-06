const addCommentHandler = async (e) => {
    e.preventDefault();

    const text = document.querySelector('#comment-text').value;
    const posts_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ text, posts_id }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Comment post failed');
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', addCommentHandler);

