
export function makeHome(){
    const cont = document.querySelector('#content');

    const h1 = document.createElement('h1');
    cont.appendChild(h1);
    h1.append('Вкусно.Сытно');
    h1.appendChild(document.createElement('br'));
    h1.append('По-домашнему');
}

export function clear(){
    document.querySelector('h1').innerHTML = '';
}


