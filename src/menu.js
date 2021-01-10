function createMenuEntry(string, price, div) {
    let dish= document.createElement('div');
    dish.classList.add('foodDiv');
    let dishWrapper= document.createElement('div');
    dishWrapper.classList.add('foodWrapper');
    let dishImg= document.createElement('img');
    dishImg.setAttribute('src', '/styles/images/' + string + '.jpeg');
    dishImg.classList.add('foodImg');
    dishWrapper.appendChild(dishImg);

    let dishName= document.createElement('p');
    dishName.textContent= string[0].toUpperCase() + string.substring(1);
    dishName.classList.add('foodName');

    let dishPrice= document.createElement('p');
    dishPrice.textContent= '$' + price;
    dishPrice.classList.add('foodPrice');
    
    dish.appendChild(dishWrapper);
    dish.appendChild(dishName);
    dish.appendChild(dishPrice);

    div.appendChild(dish);
}

export function createMenu(foodObj) {
    let content= document.getElementById('content');

    //MENU
    let menuDiv= document.createElement('div');
    menuDiv.classList.add('menuDiv');

    let menuName= document.createElement('h2');
    menuName.textContent= 'MENU';
    menuName.classList.add('menuName');
    menuDiv.appendChild(menuName);


    //DISHES
    for(let key in foodObj) {
        createMenuEntry(key, foodObj[key], menuDiv);
    }


    let footer= document.querySelector('footer');
    footer.style.position= 'relative';
    content.insertBefore(menuDiv, footer);
}