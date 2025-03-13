document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('comment-form');
    const commentList = document.getElementById('comments-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = document.getElementById('comment-text').value;
        if (commentText.trim() !== '') {
            addComment(commentText);
            document.getElementById('comment-text').value = '';
        }
    });

    function addComment(text) {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const date = now.toLocaleDateString();
        const commentItem = document.createElement('li');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `
            <p>${text}</p>
            <div class="comment-meta">Publicado el ${date} a las ${time}</div>
            <button class="delete-button">Eliminar</button>
        `;
        commentList.appendChild(commentItem);

        commentItem.querySelector('.delete-button').addEventListener('click', function() {
            commentItem.remove();
        });
    }
});