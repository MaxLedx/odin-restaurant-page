import './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

const root = (function () {
    return document.querySelector('#content');
})();

setupTabSwitching(root, document);
home(root, document);

function setupTabSwitching(root, document) {
    const homeTab = document.querySelector('nav :nth-child(1)');
    const menuTab = document.querySelector('nav :nth-child(2)');
    const aboutTab = document.querySelector('nav :nth-child(3)');
    homeTab.addEventListener('click', () => displayTabContent('home', root, document));
    menuTab.addEventListener('click', () => displayTabContent('menu', root, document));
    aboutTab.addEventListener('click', () => displayTabContent('about', root, document));
}

function displayTabContent(tab, root, document) {
    deleteTabContent(document);
    if (tab === 'home') {
        home(root, document);
    } else if (tab === 'menu') {
        menu(root, document);
    } else if (tab === 'about') {
        about(root, document);
    }
}

function deleteTabContent(document) {
    const tabContent = document.querySelector('#content > div');
    tabContent.remove();
}