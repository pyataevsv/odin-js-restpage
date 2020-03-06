export function makeContact(){
    const cont = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.classList.add('edite');
    h1.innerHTML = 'Уже едите?<br> А мы как раз лепим хинкали для вас!';
    cont.appendChild(h1);

    const div = document.createElement('div');
    div.classList.add('adress-box');

    cont.appendChild(div);
    div.innerHTML = `<h2>Наши рестораны:</h2>
    <div class='adr-name'>«Чито-ра» на Сущевском Валу</div>
    <div class='adr'>Сущевский вал, д.14б, Ежедневно 12:00 - 23:00</div>
    <div class='adr-name'>«Чито-ра» на Лесной</div>
    <div class='adr'>Лесная ул., д.30, Ежедневно, 12:00 - 23:00</div>`

}



{/* <h1 class='edite'>Уже едите?<br> А мы как раз лепим хинкали для вас!</h1>

    <div class='adress-box'>
        <h2>Наши рестораны:</h2>
        <div class='adr-name'>«Чито-ра» на Сущевском Валу</div>
        <div class='adr'>Сущевский вал, д.14б, Ежедневно 12:00 - 23:00</div>
        <div class='adr-name'>«Чито-ра» на Сущевском Валу</div>
        <div class='adr'>Сущевский вал, д.14б, Ежедневно 12:00 - 23:00</div>
    </div>  */}