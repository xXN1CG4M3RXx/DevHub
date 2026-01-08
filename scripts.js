document.addEventListener('DOMContentLoaded', (event) => {
    const markdownElement = document.getElementById('markdown-content');
    if (markdownElement) {
        const markdownText = markdownElement.textContent.trim();
        markdownElement.innerHTML = marked.parse(markdownText);
        hljs.highlightAll();
    }
});