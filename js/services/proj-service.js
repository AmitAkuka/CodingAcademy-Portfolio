'use strict';

console.log('Service Working!');
let gProjs;

function createProjs() {
    gProjs = [createProj('Minesweeper', 'Minesweeper', 'Mineseeper dragonball style ;)', 'https://amitakuka.github.io/CodingAcademy-Sprint1-Minesweeper/'),
        createProj('Bookshop', 'Bookshop', 'Bookshop that allow you to do some CRUD actions and sorting', null),
        createProj('Pacman', 'Pacman', 'Pacman - no need more to explain, so fun.', null),
        createProj('Vault', 'Vault', 'Vault with administrators special managment site', null)
    ];
    return gProjs;
}

function createProj(id, title, desc, url) {
    return {
        id: id.toLowerCase(),
        title,
        desc,
        img: `img/projects/${id}.png`,
        url,
        publishedAt: Date.now(),
    }
}