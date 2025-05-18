export default function (root, document) {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "Menu";
    const descripition = document.createElement('p');
    descripition.textContent = 'This is where the menu would go.';

    container.appendChild(title);
    container.appendChild(descripition);
    root.appendChild(container);
}