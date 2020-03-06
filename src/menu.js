
const meals = require('./meals');

export function makeMenu(){
    const cont = document.querySelector('#content');
    const box = document.createElement('div');
    box.classList.add('menu-box');
    cont.appendChild(box);
    box.innerHTML = '<img src="../cold-snacks.png" width="200px">';
    const h2 = document.createElement('h2');
    h2.textContent = 'Холодные закуски';
    box.appendChild(h2);

    //draw meal items
    console.log(meals.mealArray[1])

    for (let i in meals.mealArray){
        let mealBox = document.createElement('div');
        console.log(mealBox);
        mealBox.classList.add('meal-box');
        box.appendChild(mealBox);   
        mealBox.innerHTML = `<div class='meal-name'>${meals.mealArray[i].name}</div>
        <div class='meal-cost'>${meals.mealArray[i]['cost ']}</div>
        <div class='meal-descr'>${(meals.mealArray[i].descr) ? meals.mealArray[i].descr : '' }</div>`
         
    }
}

