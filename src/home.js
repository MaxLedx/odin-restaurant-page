export default function (root, document) {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "O'Dinner";
    const descripition = document.createElement('p');
    descripition.textContent = 'The best restaurant in Asgard. Endorsed by Odin himself.';

    container.appendChild(title);
    container.appendChild(descripition);
    root.appendChild(container);
}