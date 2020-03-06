
const main = require('./navbar.js');
const menu = require('./menu.js');
const contact = require('./contact.js');
const home = require('./home.js')

export function makeNav(){
console.log('hellow webpack!!');

//create main page module
const cont = document.querySelector("#content");
const nav = document.createElement('div');
nav.classList.add('nav');
cont.appendChild(nav);

const logo = document.createElement('img');
logo.src = '../khinkali.png'
logo.style.width = '60px';
logo.style.filter = 'brightness(200%)';
logo.style.cursor = 'pointer';
// logo.classList.add('logo');
nav.appendChild(logo);
//nav.innerHTML = '<img src="./khinkali.png">';

const ul = document.createElement('ul');
nav.appendChild(ul);

const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.id = 'kitchen';
a1.textContent = 'КУХНЯ';
ul.appendChild(li1);
li1.appendChild(a1);

const li2 = document.createElement('li');
const a2 = document.createElement('a');
a2.textContent = 'КОНТАКТЫ';
a2.id = 'contacts';
ul.appendChild(li2);
li2.appendChild(a2);

// const tel = document.createElement('span');
// tel.classList.add('phone');
// tel.textContent = '+7 (499) 444-74-74';
// nav.appendChild(tel);
document.getElementById('kitchen').addEventListener('click',() => {
    document.querySelector('#content').innerHTML = '';
    main.makeNav();
    menu.makeMenu();
})

document.getElementById('contacts').addEventListener('click',() => {
    document.querySelector('#content').innerHTML = '';
    main.makeNav();
    contact.makeContact();
})

logo.addEventListener('click', () => {
    document.querySelector('#content').innerHTML = '';
    main.makeNav();
    home.makeHome();
})

}

