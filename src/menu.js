//no reason for links in list --> remove?

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

export function createMenu() {
    let content= document.getElementById('content');

    let menuDiv= document.createElement('div');
    menuDiv.classList.add('menuDiv');

    //MENU
    let menuName= document.createElement('h2');
    menuName.textContent= 'MENU';
    menuName.classList.add('menuName');
    menuDiv.appendChild(menuName);

    //STEAK
    let steak= document.createElement('div');
    steak.classList.add('foodDiv');
    let steakWrapper= document.createElement('div');
    steakWrapper.classList.add('foodWrapper');
    let steakImg= document.createElement('img');
    steakImg.setAttribute('src', '/styles/images/steak.jpeg');
    steakImg.classList.add('foodImg');
    steakWrapper.appendChild(steakImg);

    let steakName= document.createElement('p');
    steakName.textContent= 'Steak';
    steakName.classList.add('foodName');

    let steakPrice= document.createElement('p');
    steakPrice.textContent= '$30';
    steakPrice.classList.add('foodPrice');
    
    steak.appendChild(steakWrapper);
    steak.appendChild(steakName);
    steak.appendChild(steakPrice);

    menuDiv.appendChild(steak);

    //BURGER
    let burger= document.createElement('div');
    burger.classList.add('foodDiv');
    let burgerWrapper= document.createElement('div');
    burgerWrapper.classList.add('foodWrapper');
    let burgerImg= document.createElement('img');
    burgerImg.setAttribute('src', '/styles/images/burger.jpeg');
    burgerImg.classList.add('foodImg');
    burgerWrapper.appendChild(burgerImg);

    let burgerName= document.createElement('p');
    burgerName.textContent= 'Burger';
    burgerName.classList.add('foodName');

    let burgerPrice= document.createElement('p');
    burgerPrice.textContent= '$5';
    burgerPrice.classList.add('foodPrice');
    
    burger.appendChild(burgerWrapper);
    burger.appendChild(burgerName);
    burger.appendChild(burgerPrice);

    menuDiv.appendChild(burger);

    createMenuEntry('ribs', 25, menuDiv);

    let footer= document.querySelector('footer');
    footer.style.position= 'relative';
    content.insertBefore(menuDiv, footer);

    //tbone
    //burger
    //ribs
}