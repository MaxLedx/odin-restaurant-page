export default function (root, document) {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "About";

    container.appendChild(title);
    root.appendChild(container);
}