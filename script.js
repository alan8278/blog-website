function submitComment(postId) {
    const name = document.getElementById(`name${postId}`).value;
    const message = document.getElementById(`message${postId}`).value;

    if (name && message) {
        const commentList = document.querySelector(`#post${postId} .comment-list`);
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<p><strong>${name}</strong>: ${message}</p>`;
        commentList.appendChild(comment);

        // Clear the form
        document.getElementById(`name${postId}`).value = '';
        document.getElementById(`message${postId}`).value = '';
    } else {
        alert('Please enter both your name and a comment.');
    }
}
